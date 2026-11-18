import assert from 'node:assert/strict'
import test from 'node:test'
import { buildTranscriptDocument, sentenceAtTime, sentenceBounds, wordAtTime, wordsFromSegments } from './transcriptDocument.js'

test('pause≥2s paragraphs; keep matching word times + punctuation; ignore mismatches', () => {
  const { paragraphs } = buildTranscriptDocument([
    { start: 0, end: 1.2, text: 'The key challenge,' },
    { start: 1.3, end: 2.8, text: "let's talk about TypeScript." },
    { start: 2.9, end: 4.2, text: 'So, what is exactly a type?' },
    { start: 7.0, end: 8.5, text: 'Later after a pause.' }
  ])
  assert.equal(paragraphs.length, 2)
  assert.equal(paragraphs[0].words.map((w) => w.text).join(' '),
    "The key challenge, let's talk about TypeScript. So, what is exactly a type?")

  const matched = wordsFromSegments([{
    start: 1, end: 2, text: 'alpha. bravo,',
    words: [
      { word: ' alpha ', start: 1, end: 1.2 },
      { word: 'bravo', start: 1.3, end: 1.8 }
    ]
  }])
  assert.deepEqual(matched.map((w) => [w.text, w.start, w.end]), [
    ['alpha.', 1, 1.2], ['bravo,', 1.3, 1.8]
  ])
  assert.equal(wordAtTime(matched, 1.5).text, 'bravo,')

  const punct = wordsFromSegments([{
    start: 0, end: 1, text: 'TypeScript.',
    words: [{ word: 'TypeScript', start: 0.1, end: 0.8 }]
  }])
  assert.deepEqual([punct[0].text, punct[0].start, punct[0].end], ['TypeScript.', 0.1, 0.8])

  const mismatch = wordsFromSegments([{
    start: 5, end: 7, text: 'alpha bravo',
    words: [
      { word: 'nope', start: 5, end: 6 },
      { word: 'bravo', start: 6, end: 7 }
    ]
  }])
  assert.equal(mismatch.map((w) => w.text).join(' '), 'alpha bravo')
  assert.ok(mismatch[0].end <= mismatch[1].start)
  assert.ok(mismatch[0].start >= 5 && mismatch[1].end <= 7)

  const sw = wordsFromSegments([{ start: 0, end: 3, text: 'Hello there. Next one? Done!' }])
  assert.deepEqual([sentenceBounds(sw, sw[1]), sentenceBounds(sw, sw[2]), sentenceBounds(sw, sw[4])],
    [{ from: 0, to: 1 }, { from: 2, to: 3 }, { from: 4, to: 4 }])

  const gap = [
    { id: 0, text: 'Hello', start: 0, end: 0.4 },
    { id: 1, text: 'there.', start: 0.4, end: 0.9 },
    { id: 2, text: 'Next', start: 2.5, end: 2.8 },
    { id: 3, text: 'one?', start: 2.8, end: 3.2 }
  ]
  assert.deepEqual([
    sentenceAtTime(gap, 0.5), sentenceAtTime(gap, 0.9),
    sentenceAtTime(gap, 1.5), sentenceAtTime(gap, 2.6)
  ], [{ from: 0, to: 1 }, { from: 2, to: 3 }, { from: 2, to: 3 }, { from: 2, to: 3 }])
  assert.equal(wordAtTime(gap, 1.5).text, 'there.')
})
