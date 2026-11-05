// Turns saved { start, end, text } cues into a paragraph document.
// Word times are spread across each cue. A cue from a 15s Whisper slice can
// overlap the next one; those overlaps are closed so one playhead time lands
// on one word.

const PARAGRAPH_GAP = 0.8
const SENTENCE_GAP = 0.35

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
    for (let index = 0; index < parts.length; index += 1) {
      const start = segment.start + span * (index / parts.length)
      const end = segment.start + span * ((index + 1) / parts.length)
      words.push({
        id: words.length,
        text: parts[index],
        start,
        end: end < start ? start : end
      })
    }
  }
  return words
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
    sorted.push({ start, end, text })
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
    repaired.push({ start, end, text: segment.text })
  }
  return repaired.filter((segment) => segment.text)
}

export function paragraphsFromWords(words) {
  const paragraphs = []
  let current = null
  for (const word of words) {
    const previous = current && current.words[current.words.length - 1]
    const gap = previous ? word.start - previous.end : 0
    const sentenceEnded = previous && /[.!?]["')\]]*$/.test(previous.text)
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
