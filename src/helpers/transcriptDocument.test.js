import assert from 'node:assert/strict'
import test from 'node:test'
import {
  buildTranscriptDocument,
  wordAtTime,
  wordsFromSegments
} from './transcriptDocument.js'

test('continuous cues stay one paragraph; only long pauses break', () => {
  const { paragraphs } = buildTranscriptDocument([
    { start: 0, end: 1.2, text: 'The key challenge,' },
    { start: 1.3, end: 2.8, text: "let's talk about TypeScript." },
    { start: 2.9, end: 4.2, text: 'So, what is exactly a type?' },
    { start: 7.0, end: 8.5, text: 'Later after a pause.' }
  ])
  assert.equal(paragraphs.length, 2)
  assert.equal(paragraphs[0].words.map((w) => w.text).join(' '),
    "The key challenge, let's talk about TypeScript. So, what is exactly a type?")
})

test('stored word times are kept when they match the text', () => {
  const words = wordsFromSegments([{
    start: 1,
    end: 2,
    text: 'alpha. bravo,',
    words: [
      { word: ' alpha ', start: 1, end: 1.2 },
      { word: 'bravo', start: 1.3, end: 1.8 }
    ]
  }])
  assert.equal(words[0].text, 'alpha.')
  assert.equal(words[0].start, 1)
  assert.equal(words[0].end, 1.2)
  assert.equal(words[1].text, 'bravo,')
  assert.equal(words[1].start, 1.3)
  assert.equal(words[1].end, 1.8)
  assert.equal(wordAtTime(words, 1.5).text, 'bravo,')
})

test('word times that do not match the text are not used', () => {
  const words = wordsFromSegments([{
    start: 5,
    end: 7,
    text: 'alpha bravo',
    words: [
      { word: 'nope', start: 5, end: 6 },
      { word: 'bravo', start: 6, end: 7 }
    ]
  }])
  assert.equal(words[0].text, 'alpha')
  assert.equal(words[1].text, 'bravo')
  // Mismatched API words are ignored; both tokens are derived inside [5, 7].
  assert.ok(words[0].end <= words[1].start)
  assert.ok(words[0].start >= 5 && words[1].end <= 7)
})

test('edge punctuation still matches whisper tokens', () => {
  const words = wordsFromSegments([{
    start: 0,
    end: 1,
    text: 'TypeScript.',
    words: [{ word: 'TypeScript', start: 0.1, end: 0.8 }]
  }])
  assert.equal(words[0].text, 'TypeScript.')
  assert.equal(words[0].start, 0.1)
  assert.equal(words[0].end, 0.8)
})
