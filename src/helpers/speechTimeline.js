// Speech-active intervals for text-only transcripts.
//
// gpt-4o-transcribe often returns text without word times. Stretching that
// text across the full audio duration treats drawing pauses as speech, so the
// caret runs ahead early in a pause-heavy recording. Mapping derived words
// onto speech-active regions keeps currentTime and the caret in the same
// clock: silence holds the caret, speech advances it.

const HOP_SECONDS = 0.05
const MIN_INTERVAL_SECONDS = 0.12
const ABSOLUTE_RMS_FLOOR = 0.01
const cache = new Map()

export function speechSpanSeconds(intervals) {
  if (!Array.isArray(intervals) || !intervals.length) return 0
  return intervals.reduce((sum, interval) => {
    const start = Number(interval && interval.start)
    const end = Number(interval && interval.end)
    if (!Number.isFinite(start) || !Number.isFinite(end) || end <= start) return sum
    return sum + (end - start)
  }, 0)
}

export function wallClockFromSpeechTime(speechTime, intervals) {
  if (!Number.isFinite(speechTime) || speechTime <= 0) {
    return Array.isArray(intervals) && intervals.length ? Number(intervals[0].start) || 0 : 0
  }
  if (!Array.isArray(intervals) || !intervals.length) return speechTime
  let remaining = speechTime
  let lastEnd = Number(intervals[0].start) || 0
  for (const interval of intervals) {
    const start = Number(interval.start)
    const end = Number(interval.end)
    if (!Number.isFinite(start) || !Number.isFinite(end) || end <= start) continue
    lastEnd = end
    const width = end - start
    if (remaining <= width) return start + remaining
    remaining -= width
  }
  return lastEnd
}

// Pure: Float32 samples in [-1, 1] (one channel). Adaptive threshold so quiet
// rooms still separate speech from drawing silence.
export function speechIntervalsFromSamples(samples, sampleRate, options = {}) {
  if (!samples || !samples.length || !(sampleRate > 0)) return []
  const hopSeconds = options.hopSeconds > 0 ? options.hopSeconds : HOP_SECONDS
  const minInterval = options.minIntervalSeconds > 0 ? options.minIntervalSeconds : MIN_INTERVAL_SECONDS
  const hop = Math.max(1, Math.round(sampleRate * hopSeconds))
  const levels = []
  for (let index = 0; index < samples.length; index += hop) {
    const end = Math.min(samples.length, index + hop)
    let sum = 0
    for (let i = index; i < end; i += 1) {
      const value = samples[i]
      sum += value * value
    }
    levels.push(Math.sqrt(sum / Math.max(1, end - index)))
  }
  if (!levels.length) return []

  const sorted = levels.slice().sort((a, b) => a - b)
  const percentile = sorted[Math.min(sorted.length - 1, Math.floor(sorted.length * 0.85))] || 0
  const floor = options.absoluteFloor != null ? options.absoluteFloor : ABSOLUTE_RMS_FLOOR
  const threshold = Math.max(floor, percentile * 0.35)

  const intervals = []
  let startIndex = -1
  for (let index = 0; index <= levels.length; index += 1) {
    const active = index < levels.length && levels[index] >= threshold
    if (active && startIndex < 0) startIndex = index
    if ((!active || index === levels.length) && startIndex >= 0) {
      const start = startIndex * hopSeconds
      const end = index * hopSeconds
      if (end - start >= minInterval) intervals.push({ start, end })
      startIndex = -1
    }
  }
  return mergeIntervals(intervals, hopSeconds * 2)
}

function mergeIntervals(intervals, gapLimit) {
  if (!intervals.length) return intervals
  const merged = [{ ...intervals[0] }]
  for (let index = 1; index < intervals.length; index += 1) {
    const current = intervals[index]
    const previous = merged[merged.length - 1]
    if (current.start - previous.end <= gapLimit) {
      previous.end = current.end
    } else {
      merged.push({ ...current })
    }
  }
  return merged
}

export function speechIntervalsFromAudioBuffer(buffer, options = {}) {
  if (!buffer || !(buffer.sampleRate > 0) || buffer.numberOfChannels < 1) return []
  const channels = buffer.numberOfChannels
  const length = buffer.length
  const mixed = new Float32Array(length)
  for (let channel = 0; channel < channels; channel += 1) {
    const data = buffer.getChannelData(channel)
    for (let index = 0; index < length; index += 1) {
      mixed[index] += data[index] / channels
    }
  }
  return speechIntervalsFromSamples(mixed, buffer.sampleRate, options)
}

export async function loadSpeechIntervals(audioUrl, options = {}) {
  if (!audioUrl || typeof audioUrl !== 'string') return []
  if (cache.has(audioUrl)) return cache.get(audioUrl)

  const pending = (async () => {
    if (typeof fetch !== 'function') return []
    const AudioCtx = typeof AudioContext !== 'undefined'
      ? AudioContext
      : typeof webkitAudioContext !== 'undefined' ? webkitAudioContext : null
    if (!AudioCtx) return []

    const response = await fetch(audioUrl)
    if (!response.ok) return []
    const bytes = await response.arrayBuffer()
    const context = new AudioCtx()
    try {
      const buffer = await context.decodeAudioData(bytes.slice(0))
      return speechIntervalsFromAudioBuffer(buffer, options)
    } finally {
      if (typeof context.close === 'function') await context.close().catch(() => {})
    }
  })()

  cache.set(audioUrl, pending)
  try {
    const intervals = await pending
    cache.set(audioUrl, intervals)
    return intervals
  } catch (err) {
    cache.delete(audioUrl)
    return []
  }
}

export function clearSpeechIntervalCache() {
  cache.clear()
}
