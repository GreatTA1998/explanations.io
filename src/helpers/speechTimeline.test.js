import assert from 'node:assert/strict'
import test from 'node:test'
import {
  speechIntervalsFromSamples,
  speechSpanSeconds,
  wallClockFromSpeechTime
} from './speechTimeline.js'

test('quiet gaps are not counted as speech time', () => {
  const rate = 100
  const samples = new Float32Array(rate * 10)
  // Speech in 1–3s and 7–9s.
  for (let i = rate; i < rate * 3; i += 1) samples[i] = 0.2
  for (let i = rate * 7; i < rate * 9; i += 1) samples[i] = 0.2

  const intervals = speechIntervalsFromSamples(samples, rate, {
    hopSeconds: 0.05,
    minIntervalSeconds: 0.1,
    absoluteFloor: 0.05
  })
  assert.ok(intervals.length >= 2)
  assert.ok(intervals[0].start < 1.2)
  assert.ok(intervals[0].end > 2.5)
  const span = speechSpanSeconds(intervals)
  assert.ok(span > 3.5 && span < 5)
  assert.ok(Math.abs(wallClockFromSpeechTime(0, intervals) - intervals[0].start) < 1e-9)
  assert.ok(wallClockFromSpeechTime(span / 2, intervals) > 2)
  assert.ok(wallClockFromSpeechTime(span, intervals) >= intervals.at(-1).end - 1e-9)
})

test('wall-clock mapping walks intervals in order', () => {
  const intervals = [
    { start: 2, end: 4 },
    { start: 10, end: 13 }
  ]
  assert.equal(speechSpanSeconds(intervals), 5)
  assert.equal(wallClockFromSpeechTime(0, intervals), 2)
  assert.equal(wallClockFromSpeechTime(1, intervals), 3)
  assert.equal(wallClockFromSpeechTime(2, intervals), 4)
  assert.equal(wallClockFromSpeechTime(3, intervals), 11)
  assert.equal(wallClockFromSpeechTime(5, intervals), 13)
})
