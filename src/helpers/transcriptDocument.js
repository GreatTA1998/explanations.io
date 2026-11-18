const PARAGRAPH_GAP = 2, SECONDS_PER_CHAR = 0.086, MIN_WORD_SECONDS = 0.22
const MAX_TAIL_SECONDS = 1.2, SENTENCE_END = /[.!?]["')\]]*$/, MIN_TIMED_SPAN = 0.05

export function buildTranscriptDocument (segments, durationSeconds = null) {
  const words = wordsFromSegments(segments, durationSeconds)
  return { words, paragraphs: paragraphsFromWords(words) }
}

export function wordsFromSegments (segments, durationSeconds = null) {
  const words = []
  for (const segment of stretchSegments(segments, durationSeconds)) {
    const parts = segment.text.split(/\s+/).filter(Boolean)
    if (!parts.length) continue
    const timed = matchingWordTimes(segment, parts)
      || spreadWords(parts, segment.start, Math.max(0, segment.end - segment.start), segment.stretched === true)
    for (const w of timed) words.push({ id: words.length, text: w.text, start: w.start, end: w.end < w.start ? w.start : w.end })
  }
  return words
}

export function stretchSegments (segments, durationSeconds = null) {
  const repaired = repairSegments(segments)
  if (!repaired.length) return repaired
  const minStart = repaired.reduce((lo, s) => Math.min(lo, s.start), Infinity)
  const maxEnd = repaired.reduce((hi, s) => Math.max(hi, s.end), 0)
  if (maxEnd - minStart > MIN_TIMED_SPAN) return repaired
  const duration = Number(durationSeconds)
  const target = duration > MIN_TIMED_SPAN
    ? duration : Math.max(MIN_TIMED_SPAN, naturalSeconds(repaired.map((s) => s.text).join(' ')))
  if (repaired.length === 1) return [{ start: 0, end: target, text: repaired[0].text, words: usableStoredWords(repaired[0].words, 0, target), stretched: true }]
  const weights = repaired.map((s) => Math.max(MIN_WORD_SECONDS, naturalSeconds(s.text)))
  const total = weights.reduce((sum, w) => sum + w, 0) || 1
  let cursor = 0
  return repaired.map((segment, i) => {
    const width = target * (weights[i] / total), start = cursor
    const end = i === repaired.length - 1 ? target : cursor + width
    cursor = end
    return { start, end, text: segment.text, words: usableStoredWords(segment.words, start, end), stretched: true }
  })
}

function naturalSeconds (text) {
  return String(text || '').split(/\s+/).filter(Boolean).reduce((sum, part) => sum + wordSeconds(part), 0)
}

function usableStoredWords (words, segmentStart, segmentEnd) {
  if (!Array.isArray(words) || !words.length) return undefined
  let minStart = Infinity, maxEnd = -Infinity
  for (const word of words) {
    const start = Number(word?.start), end = Number(word?.end)
    if (!Number.isFinite(start) || !Number.isFinite(end)) return undefined
    minStart = Math.min(minStart, start); maxEnd = Math.max(maxEnd, end)
  }
  return (maxEnd - minStart > MIN_TIMED_SPAN) && maxEnd >= segmentStart && minStart <= segmentEnd ? words : undefined
}

function matchingWordTimes (segment, parts) {
  const raw = segment.words
  if (!Array.isArray(raw) || raw.length !== parts.length) return null
  const timed = []
  for (let i = 0; i < parts.length; i += 1) {
    const word = raw[i], spoken = String((word && (word.word || word.text)) || '').trim()
    const start = Number(word?.start), end = Number(word?.end)
    if (tokenCore(spoken) !== tokenCore(parts[i]) || !Number.isFinite(start) || !Number.isFinite(end)) return null
    timed.push({ text: parts[i], start, end: Math.max(start, end) })
  }
  return timed.at(-1).end - timed[0].start > MIN_TIMED_SPAN ? timed : null
}

function tokenCore (text) { return String(text || '').trim().replace(/^[^A-Za-z0-9']+|[^A-Za-z0-9']+$/g, '') }
function wordSeconds (text) {
  return Math.max(MIN_WORD_SECONDS, Math.max(1, String(text).replace(/\s/g, '').length) * SECONDS_PER_CHAR)
}

function spreadWords (parts, start, span, fillAll = false) {
  const groups = []; let current = []
  for (const text of parts) {
    current.push(text)
    if (SENTENCE_END.test(text)) { groups.push(current); current = [] }
  }
  if (current.length) groups.push(current)
  const weights = groups.map((g) => g.reduce((sum, t) => sum + wordSeconds(t), 0))
  const total = weights.reduce((sum, w) => sum + w, 0) || 1
  let windowStart = start; const timed = []
  for (let i = 0; i < groups.length; i += 1) {
    const window = span * (weights[i] / total), words = groups[i]
    const wordWeights = words.map(wordSeconds)
    const natural = wordWeights.reduce((sum, w) => sum + w, 0)
    const spare = window - natural
    const fill = fillAll || !(spare > 0 && spare <= MAX_TAIL_SECONDS)
    const scale = fill && natural > 0 ? window / natural : 1
    let cursor = windowStart
    const placed = words.map((text, wi) => {
      const width = wordWeights[wi] * scale, word = { text, start: cursor, end: cursor + width }
      cursor += width; return word
    })
    if (fill && placed.length) placed.at(-1).end = windowStart + window
    timed.push(...placed); windowStart += window
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
    const start = segment.start, end = Number.isFinite(segment.end) ? Math.max(segment.end, start) : start
    sorted.push({ start, end, text, words: Array.isArray(segment.words) ? segment.words : undefined })
  }
  sorted.sort((a, b) => a.start - b.start || a.end - b.end)
  const repaired = []
  for (const segment of sorted) {
    const previous = repaired.at(-1)
    let start = segment.start, end = segment.end
    if (previous && start < previous.end) { previous.end = Math.max(previous.start, start) }
    if (end < start) end = start
    repaired.push({ start, end, text: segment.text, words: segment.words })
  }
  return repaired.filter((s) => s.text)
}

export function paragraphsFromWords (words) {
  const paragraphs = []; let current = null
  for (const word of words) {
    const previous = current?.words.at(-1), gap = previous ? word.start - previous.end : 0
    if (!current || gap >= PARAGRAPH_GAP) { current = { id: paragraphs.length, words: [] }; paragraphs.push(current) }
    current.words.push(word)
  }
  return paragraphs
}

export function wordAtTime (words, time) {
  if (!words.length || !Number.isFinite(time) || time < words[0].start) return null
  let lo = 0, hi = words.length - 1, found = 0
  while (lo <= hi) { const mid = (lo + hi) >> 1; if (words[mid].start <= time) { found = mid; lo = mid + 1 } else hi = mid - 1 }
  return words[found]
}

export function sentenceBounds (words, word) {
  if (!word || !words.length) return null
  let from = word.id, to = word.id
  while (from > 0 && !SENTENCE_END.test(words[from - 1].text)) from -= 1
  while (to < words.length - 1 && !SENTENCE_END.test(words[to].text)) to += 1
  return { from, to }
}

export function progressInWord (word, time) {
  if (!word) return 0
  const span = word.end - word.start
  if (!(span > 0)) return time >= word.end ? 1 : 0
  const ratio = (time - word.start) / span
  return ratio <= 0 ? 0 : ratio >= 1 ? 1 : ratio
}
