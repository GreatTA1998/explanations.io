// Turns saved { start, end, text } cues into a paragraph document.
// A cue's end includes the pause after the phrase. Stretching every word
// out to that end keeps the caret on an earlier word while the phrase is
// spoken. Each sentence is given its share of the cue, the words keep a
// natural length, and a short remainder stays after the sentence.
// A cue from one slice can overlap the next one; those overlaps are closed
// so one playhead time lands on one word.

const PARAGRAPH_GAP = 0.8
const SENTENCE_GAP = 0.35
// About 150 words a minute. A one-letter word still gets a short audible length.
const SECONDS_PER_CHAR = 0.086
const MIN_WORD_SECONDS = 0.22
// Spare time longer than a couple of words belongs to the cue (a slow
// reading, or pauses we cannot see because the sentence has no break).
// Only a short tail is the pause that was pulling the caret back.
const MAX_TAIL_SECONDS = 1.2
const SENTENCE_END = /[.!?]["')\]]*$/

export function buildTranscriptDocument(segments) {
  const words = wordsFromSegments(segments)
  return { words, paragraphs: paragraphsFromWords(words) }
}

export function wordsFromSegments(segments) {
  const words = []
  for (const segment of repairSegments(segments)) {
    const parts = segment.text.split(/\s+/).filter(Boolean)
    if (!parts.length) continue
    const span = Math.max(0, segment.end - segment.start)
    const timed = matchingWordTimes(segment, parts) || spreadWords(parts, segment.start, span)
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
// Inside that window the words keep their length when the leftover is only
// a short pause. A window that is shorter than the reading, or much longer,
// is filled so a whole recording is not packed against the front.
function spreadWords(parts, start, span) {
  const groups = sentenceGroups(parts)
  const weights = groups.map((group) => group.reduce((sum, text) => sum + wordSeconds(text), 0))
  const total = weights.reduce((sum, weight) => sum + weight, 0) || 1
  let windowStart = start
  const timed = []
  for (let index = 0; index < groups.length; index += 1) {
    const window = span * (weights[index] / total)
    timed.push(...placeSentence(groups[index], windowStart, window))
    windowStart += window
  }
  return timed
}

function placeSentence(words, windowStart, window) {
  const weights = words.map(wordSeconds)
  const natural = weights.reduce((sum, weight) => sum + weight, 0)
  const spare = window - natural
  const fill = !(spare > 0 && spare <= MAX_TAIL_SECONDS)
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
    const newParagraph = !current || gap >= PARAGRAPH_GAP || (sentenceEnded && gap >= SENTENCE_GAP)
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
