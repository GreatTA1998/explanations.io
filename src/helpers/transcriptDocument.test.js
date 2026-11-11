import assert from 'node:assert/strict'
import test from 'node:test'
import {
  buildTranscriptDocument,
  progressInWord,
  wordAtTime,
  wordsFromSegments
} from './transcriptDocument.js'

const PHRASE = 'The derivative of x squared is two x. That means the slope grows without bound. Watch the tangent line as x increases.'

function evenIndex(time, start, end, count) {
  const span = end - start
  if (!(span > 0)) return 0
  const index = Math.floor(((time - start) / span) * count)
  return Math.min(count - 1, Math.max(0, index))
}

test('a pause after the sentence is not divided among the words', () => {
  const start = 0
  const end = 11
  const words = wordsFromSegments([{ start, end, text: PHRASE }])
  const trailing = words.filter((word) => word.id - evenIndex((word.start + word.end) / 2, start, end, words.length) >= 2)
  assert.ok(trailing.length > 0)
  for (const word of trailing) {
    const mid = (word.start + word.end) / 2
    assert.equal(wordAtTime(words, mid).id, word.id)
    assert.ok(evenIndex(mid, start, end, words.length) <= word.id - 2)
  }
  const spoken = words.find((word) => word.text === 'x.')
  const next = words[spoken.id + 1]
  assert.ok(next.start - spoken.end > 0.3)
  assert.ok(words.at(-1).end < end - 0.3)
  assert.equal(words[0].start, start)
  assert.equal(buildTranscriptDocument([{ start, end, text: PHRASE }]).paragraphs.length, 3)
})

test('stored word times are kept when they match the text', () => {
  const words = wordsFromSegments([{
    start: 0,
    end: 10,
    text: 'alpha bravo',
    words: [
      { word: ' alpha ', start: 1, end: 1.2 },
      { word: 'bravo', start: 1.3, end: 1.8 }
    ]
  }])
  assert.equal(words[0].text, 'alpha')
  assert.equal(words[0].start, 1)
  assert.equal(words[0].end, 1.2)
  assert.equal(words[1].start, 1.3)
  assert.equal(words[1].end, 1.8)
  assert.equal(wordAtTime(words, 1.5).text, 'bravo')
})

test('word times that do not match the text are not used', () => {
  const words = wordsFromSegments([{
    start: 0,
    end: 10,
    text: 'alpha bravo',
    words: [
      { word: 'nope', start: 5, end: 6 },
      { word: 'bravo', start: 6, end: 7 }
    ]
  }])
  assert.equal(words[0].text, 'alpha')
  assert.equal(words[0].start, 0)
  assert.ok(words.at(-1).end <= 10)
})

test('a cue shorter than the reading still ends with the cue', () => {
  const words = wordsFromSegments([{ start: 2, end: 2.4, text: 'alpha bravo charlie delta.' }])
  assert.equal(words[0].start, 2)
  assert.equal(words.at(-1).end, 2.4)
  for (let index = 1; index < words.length; index += 1) {
    assert.ok(words[index].start >= words[index - 1].start)
    assert.ok(words[index].start <= words[index - 1].end + 1e-9)
  }
  assert.equal(wordAtTime(words, 2.39).text, 'delta.')
})

test('a long cue with no sentence break is not packed at the front', () => {
  const words = wordsFromSegments([{ start: 0, end: 30, text: Array(40).fill('alpha').join(' ') }])
  assert.equal(words.at(-1).end, 30)
  assert.ok(words[20].start > 10)
})

test('overlapping cues still resolve to one word', () => {
  const words = wordsFromSegments([
    {
      start: 0,
      end: 5,
      text: 'alpha bravo.',
      words: [
        { word: 'alpha', start: 0.1, end: 0.4 },
        { word: 'bravo.', start: 0.5, end: 1 }
      ]
    },
    { start: 4, end: 8, text: 'charlie delta.' }
  ])
  assert.equal(words[0].start, 0.1)
  assert.equal(words[1].end, 1)
  assert.ok(words[1].end <= 4)
  assert.ok(words[2].start >= 4)
  assert.equal(wordAtTime(words, 0.6).text, 'bravo.')
  assert.equal(wordAtTime(words, 4.5).text, 'charlie')
})

test('the caret rests at the end of a word once that word is finished', () => {
  const word = { start: 1, end: 1.4 }
  assert.equal(progressInWord(word, 1), 0)
  assert.ok(progressInWord(word, 1.2) > 0 && progressInWord(word, 1.2) < 1)
  assert.equal(progressInWord(word, 1.4), 1)
  assert.equal(wordAtTime([{ id: 0, text: 'alpha', ...word }, { id: 1, text: 'bravo', start: 2, end: 2.4 }], 1.7).text, 'alpha')
})
