const PARAGRAPH_GAP = 2
const SECONDS_PER_CHAR = 0.086
const MIN_WORD_SECONDS = 0.22
const MAX_TAIL_SECONDS = 1.2
const SENTENCE_END = /[.!?]["')\]]*$/
const MIN_TIMED_SPAN = 0.05

export function buildTranscriptDocument (segments, durationSeconds = null) {
  const words = wordsFromSegments(segments, durationSeconds)
  return { words, paragraphs: paragraphsFromWords(words) }
}

export function wordsFromSegments (segments, durationSeconds = null) {
  const words = []
  for (const segment of stretchSegments(segments, durationSeconds)) {
    const parts = segment.text.split(/\s+/).filter(Boolean)
    if (!parts.length) continue
    const timed = matchingWordTimes(segment, parts) || spreadWords(
      parts,
      segment.start,
      Math.max(0, segment.end - segment.start),
      segment.stretched === true
    )
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

export function stretchSegments (segments, durationSeconds = null) {
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

function naturalSeconds (text) {
  return String(text || '').split(/\s+/).filter(Boolean).reduce((sum, part) => sum + wordSeconds(part), 0)
}

function usableStoredWords (words, segmentStart, segmentEnd) {
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
  if (maxEnd < segmentStart || minStart > segmentEnd) return undefined
  return words
}

function matchingWordTimes (segment, parts) {
  const raw = segment.words
  if (!Array.isArray(raw) || raw.length !== parts.length) return null
  const timed = []
  for (let index = 0; index < parts.length; index += 1) {
    const word = raw[index]
    const spoken = String((word && (word.word || word.text)) || '').trim()
    const start = Number(word && word.start)
    const end = Number(word && word.end)
    if (tokenCore(spoken) !== tokenCore(parts[index]) || !Number.isFinite(start) || !Number.isFinite(end)) return null
    timed.push({ text: parts[index], start, end: Math.max(start, end) })
  }
  if (!(timed[timed.length - 1].end - timed[0].start > MIN_TIMED_SPAN)) return null
  return timed
}

function tokenCore (text) {
  return String(text || '').trim().replace(/^[^A-Za-z0-9']+|[^A-Za-z0-9']+$/g, '')
}

function wordSeconds (text) {
  const chars = Math.max(1, String(text).replace(/\s/g, '').length)
  return Math.max(MIN_WORD_SECONDS, chars * SECONDS_PER_CHAR)
}

function spreadWords (parts, start, span, fillAll = false) {
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

  const weights = groups.map((group) => group.reduce((sum, text) => sum + wordSeconds(text), 0))
  const total = weights.reduce((sum, weight) => sum + weight, 0) || 1
  let windowStart = start
  const timed = []
  for (let index = 0; index < groups.length; index += 1) {
    const window = span * (weights[index] / total)
    const words = groups[index]
    const wordWeights = words.map(wordSeconds)
    const natural = wordWeights.reduce((sum, weight) => sum + weight, 0)
    const spare = window - natural
    const fill = fillAll || !(spare > 0 && spare <= MAX_TAIL_SECONDS)
    const scale = fill && natural > 0 ? window / natural : 1
    let cursor = windowStart
    const placed = words.map((text, wordIndex) => {
      const width = wordWeights[wordIndex] * scale
      const word = { text, start: cursor, end: cursor + width }
      cursor += width
      return word
    })
    if (fill && placed.length) placed[placed.length - 1].end = windowStart + window
    timed.push(...placed)
    windowStart += window
  }
  return timed
}

export function repairSegments (segments) {
  if (!Array.isArray(segments)) return []
  const sorted = []
  for (const segment of segments) {
    if (!segment || typeof segment.text !== 'string') continue
    const text = segment.text.trim()
    if (!text || !Number.isFinite(segment.start)) continue
    const start = segment.start
    const end = Number.isFinite(segment.end) ? Math.max(segment.end, start) : start
    sorted.push({ start, end, text, words: Array.isArray(segment.words) ? segment.words : undefined })
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

export function paragraphsFromWords (words) {
  const paragraphs = []
  let current = null
  for (const word of words) {
    const previous = current && current.words[current.words.length - 1]
    const gap = previous ? word.start - previous.end : 0
    if (!current || gap >= PARAGRAPH_GAP) {
      current = { id: paragraphs.length, words: [] }
      paragraphs.push(current)
    }
    current.words.push(word)
  }
  return paragraphs
}

export function wordAtTime (words, time) {
  if (!words.length || !Number.isFinite(time) || time < words[0].start) return null
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

export function progressInWord (word, time) {
  if (!word) return 0
  const span = word.end - word.start
  if (!(span > 0)) return time >= word.end ? 1 : 0
  const ratio = (time - word.start) / span
  return ratio <= 0 ? 0 : ratio >= 1 ? 1 : ratio
}
