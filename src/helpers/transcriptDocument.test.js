import assert from 'node:assert/strict'
import test from 'node:test'
import {
  wordAtTime,
  wordsFromSegments
} from './transcriptDocument.js'

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
