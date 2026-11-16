// Turns saved { start, end, text } cues into a paragraph document.
//
// Stored times (when the model returns them) are authoritative: a word's
// start is when that token begins in the recording, and a cue's end may
// include a short pause after the phrase. Derived times are used only when
// those are missing.
//
// For a text-only cue, wall-clock duration alone is the wrong span: blackboard
// recordings pause while the instructor draws, so stretching words across
// [0, duration] puts the caret ahead of speech. When speech-active intervals
// are available, derived words tile speech time and map back to currentTime;
// pauses hold the caret. Without intervals, words still fill the recording
// span (and never pack at a "natural" reading rate inside that invented span).
//
// Real cues still keep a short per-sentence remainder when the leftover is
// only a brief pause. A cue from one slice can overlap the next; those
// overlaps are closed so one playhead time lands on one word.

import {
  speechSpanSeconds,
  wallClockFromSpeechTime
} from './speechTimeline.js'

const PARAGRAPH_GAP = 0.8
// About 150 words a minute. A one-letter word still gets a short audible length.
const SECONDS_PER_CHAR = 0.086
const MIN_WORD_SECONDS = 0.22
// Spare time longer than a couple of words belongs to the cue (a slow
// reading, or pauses we cannot see because the sentence has no break).
// Only a short tail is the pause that was pulling the caret back.
const MAX_TAIL_SECONDS = 1.2
const SENTENCE_END = /[.!?]["')\]]*$/
// A cue shorter than this cannot place the playhead on different words.
const MIN_TIMED_SPAN = 0.05

export function buildTranscriptDocument(segments, durationSeconds = null, speechIntervals = null) {
  const words = wordsFromSegments(segments, durationSeconds, speechIntervals)
  return { words, paragraphs: paragraphsFromWords(words) }
}

export function wordsFromSegments(segments, durationSeconds = null, speechIntervals = null) {
  const words = []
  const speechSpan = speechSpanSeconds(speechIntervals)
  for (const segment of stretchSegments(segments, durationSeconds)) {
    const parts = segment.text.split(/\s+/).filter(Boolean)
    if (!parts.length) continue
    const matched = matchingWordTimes(segment, parts)
    let timed = matched
    if (!timed && segment.stretched && speechSpan > MIN_TIMED_SPAN) {
      timed = spreadWordsAlongSpeech(parts, speechIntervals, speechSpan)
    }
    if (!timed) {
      const span = Math.max(0, segment.end - segment.start)
      timed = spreadWords(parts, segment.start, span, segment.stretched === true)
    }
    for (const word of timed) {
      words.push({
        id: words.length,
        text: word.text,
        start: word.start,
        end: word.end < word.start ? word.start : word.end
      })
    }
  }
  return words
}

function spreadWordsAlongSpeech(parts, intervals, speechSpan) {
  const spoken = spreadWords(parts, 0, speechSpan, true)
  return spoken.map((word) => {
    const start = wallClockFromSpeechTime(word.start, intervals)
    let end = wallClockFromSpeechTime(word.end, intervals)
    // A word whose speech range crosses a silence island would otherwise
    // stretch across the drawing pause. Keep it inside the island it starts
    // in so the caret freezes on that word until speech resumes.
    const spokenDuration = Math.max(0, word.end - word.start)
    if (end - start > spokenDuration + 1e-3) {
      end = Math.max(start, endOfSpeechIsland(start, intervals))
    }
    return { text: word.text, start, end: Math.max(start, end) }
  })
}

function endOfSpeechIsland(time, intervals) {
  for (const interval of intervals) {
    const start = Number(interval.start)
    const end = Number(interval.end)
    if (!Number.isFinite(start) || !Number.isFinite(end) || end <= start) continue
    if (time >= start && time <= end + 1e-9) return end
  }
  return time
}

export function transcriptNeedsSpeechAlignment(segments) {
  const repaired = repairSegments(segments)
  if (!repaired.length) return false
  const minStart = repaired.reduce((lowest, segment) => Math.min(lowest, segment.start), Infinity)
  const maxEnd = repaired.reduce((highest, segment) => Math.max(highest, segment.end), 0)
  if (maxEnd - minStart > MIN_TIMED_SPAN) return false
  return repaired.some((segment) => {
    const parts = segment.text.split(/\s+/).filter(Boolean)
    if (!parts.length) return false
    return !matchingWordTimes(segment, parts)
  })
}

// When saved cues have no usable span, map them onto the recording length so
// currentTime (playback or seek bar) can pick a word other than the last one.
export function stretchSegments(segments, durationSeconds = null) {
  const repaired = repairSegments(segments)
  if (!repaired.length) return repaired

  const minStart = repaired.reduce((lowest, segment) => Math.min(lowest, segment.start), Infinity)
  const maxEnd = repaired.reduce((highest, segment) => Math.max(highest, segment.end), 0)
  const span = maxEnd - minStart
  if (span > MIN_TIMED_SPAN) return repaired

  const duration = Number(durationSeconds)
  const target = duration > MIN_TIMED_SPAN
    ? duration
    : Math.max(MIN_TIMED_SPAN, naturalSeconds(repaired.map((segment) => segment.text).join(' ')))

  if (repaired.length === 1) {
    return [{
      start: 0,
      end: target,
      text: repaired[0].text,
      words: usableStoredWords(repaired[0].words, 0, target),
      stretched: true
    }]
  }

  const weights = repaired.map((segment) => Math.max(MIN_WORD_SECONDS, naturalSeconds(segment.text)))
  const total = weights.reduce((sum, weight) => sum + weight, 0) || 1
  let cursor = 0
  return repaired.map((segment, index) => {
    const width = target * (weights[index] / total)
    const start = cursor
    const end = index === repaired.length - 1 ? target : cursor + width
    cursor = end
    return {
      start,
      end,
      text: segment.text,
      words: usableStoredWords(segment.words, start, end),
      stretched: true
    }
  })
}

function naturalSeconds(text) {
  return String(text || '').split(/\s+/).filter(Boolean).reduce((sum, part) => sum + wordSeconds(part), 0)
}

function usableStoredWords(words, segmentStart, segmentEnd) {
  if (!Array.isArray(words) || !words.length) return undefined
  let minStart = Infinity
  let maxEnd = -Infinity
  for (const word of words) {
    const start = Number(word && word.start)
    const end = Number(word && word.end)
    if (!Number.isFinite(start) || !Number.isFinite(end)) return undefined
    minStart = Math.min(minStart, start)
    maxEnd = Math.max(maxEnd, end)
  }
  if (!(maxEnd - minStart > MIN_TIMED_SPAN)) return undefined
  // Drop word times that do not overlap the stretched cue.
  if (maxEnd < segmentStart || minStart > segmentEnd) return undefined
  return words
}

function matchingWordTimes(segment, parts) {
  const raw = segment.words
  if (!Array.isArray(raw) || raw.length !== parts.length) return null
  const timed = []
  for (let index = 0; index < parts.length; index += 1) {
    const word = raw[index]
    const spoken = String(word && (word.word || word.text) || '').trim()
    const start = Number(word && word.start)
    const end = Number(word && word.end)
    if (spoken !== parts[index] || !Number.isFinite(start) || !Number.isFinite(end)) return null
    timed.push({ text: parts[index], start, end: Math.max(start, end) })
  }
  if (!(timed[timed.length - 1].end - timed[0].start > MIN_TIMED_SPAN)) return null
  return timed
}

function wordSeconds(text) {
  const chars = Math.max(1, String(text).replace(/\s/g, '').length)
  return Math.max(MIN_WORD_SECONDS, chars * SECONDS_PER_CHAR)
}

function sentenceGroups(parts) {
  const groups = []
  let current = []
  for (const text of parts) {
    current.push(text)
    if (SENTENCE_END.test(text)) {
      groups.push(current)
      current = []
    }
  }
  if (current.length) groups.push(current)
  return groups
}

// Each sentence gets a window proportional to how long it takes to say.
// Inside a real cue, words keep their length when the leftover is only a
// short pause. Stretched cues (and windows much longer than the reading)
// always fill so speech is not packed against the front of each window.
function spreadWords(parts, start, span, fillAll = false) {
  const groups = sentenceGroups(parts)
  const weights = groups.map((group) => group.reduce((sum, text) => sum + wordSeconds(text), 0))
  const total = weights.reduce((sum, weight) => sum + weight, 0) || 1
  let windowStart = start
  const timed = []
  for (let index = 0; index < groups.length; index += 1) {
    const window = span * (weights[index] / total)
    timed.push(...placeSentence(groups[index], windowStart, window, fillAll))
    windowStart += window
  }
  return timed
}

function placeSentence(words, windowStart, window, fillAll = false) {
  const weights = words.map(wordSeconds)
  const natural = weights.reduce((sum, weight) => sum + weight, 0)
  const spare = window - natural
  // Stretched timelines invent the span; every word must tile it. Real cues
  // may keep a short tail when the model included a brief pause in `end`.
  const fill = fillAll || !(spare > 0 && spare <= MAX_TAIL_SECONDS)
  const scale = fill && natural > 0 ? window / natural : 1
  let cursor = windowStart
  const placed = words.map((text, index) => {
    const width = weights[index] * scale
    const word = { text, start: cursor, end: cursor + width }
    cursor += width
    return word
  })
  if (fill && placed.length) placed[placed.length - 1].end = windowStart + window
  return placed
}

export function repairSegments(segments) {
  if (!Array.isArray(segments)) return []
  const sorted = []
  for (const segment of segments) {
    if (!segment || typeof segment.text !== 'string') continue
    const text = segment.text.trim()
    if (!text || !Number.isFinite(segment.start)) continue
    const start = segment.start
    const end = Number.isFinite(segment.end) ? Math.max(segment.end, start) : start
    const words = Array.isArray(segment.words) ? segment.words : undefined
    sorted.push({ start, end, text, words })
  }
  sorted.sort((a, b) => a.start - b.start || a.end - b.end)

  const repaired = []
  for (const segment of sorted) {
    const previous = repaired[repaired.length - 1]
    let start = segment.start
    let end = segment.end
    if (previous && start < previous.end) {
      previous.end = start
      if (previous.end < previous.start) previous.end = previous.start
    }
    if (end < start) end = start
    repaired.push({ start, end, text: segment.text, words: segment.words })
  }
  return repaired.filter((segment) => segment.text)
}

export function paragraphsFromWords(words) {
  const paragraphs = []
  let current = null
  for (const word of words) {
    const previous = current && current.words[current.words.length - 1]
    const gap = previous ? word.start - previous.end : 0
    const sentenceEnded = previous && SENTENCE_END.test(previous.text)
    // Sentence endings break a paragraph even when words were stretched to
    // fill a cue (gap ≈ 0). Long silences still start a paragraph mid-thought.
    const newParagraph = !current || gap >= PARAGRAPH_GAP || sentenceEnded
    if (newParagraph) {
      current = { id: paragraphs.length, words: [] }
      paragraphs.push(current)
    }
    current.words.push(word)
  }
  return paragraphs
}

// Last word that has started. Ignores a 50ms lookahead so a noisy clock
// cannot light an upcoming word and then fall back.
export function wordAtTime(words, time) {
  if (!words.length || !Number.isFinite(time)) return null
  if (time < words[0].start) return null
  let lo = 0
  let hi = words.length - 1
  let found = 0
  while (lo <= hi) {
    const mid = (lo + hi) >> 1
    if (words[mid].start <= time) {
      found = mid
      lo = mid + 1
    } else {
      hi = mid - 1
    }
  }
  return words[found]
}

export function progressInWord(word, time) {
  if (!word) return 0
  const span = word.end - word.start
  if (!(span > 0)) return time >= word.end ? 1 : 0
  const ratio = (time - word.start) / span
  if (ratio <= 0) return 0
  if (ratio >= 1) return 1
  return ratio
}
