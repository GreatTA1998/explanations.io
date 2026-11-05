// Timed transcript lines for a video: { start, end, text } in seconds.
//
// produceTranscriptSegments() is the seam. It turns a new recording's audio
// into those lines. This repo has no speech-to-text API key, so the default
// engine runs Whisper in the browser (Xenova/whisper-tiny) and writes the
// finished lines on the video document as `transcript`. Replace
// produceTranscriptSegments() to call another provider.
//
// Transcription starts when a video is recorded or uploaded, after the audio
// file exists. Opening an older video only reads a finished transcript.

import { browser } from '$app/environment'
import { writable } from 'svelte/store'
import { updateFirestoreDoc } from './crud.js'

const MODEL_ID = 'Xenova/whisper-tiny'
const TRANSCRIPT_VERSION = 2
const WINDOW_SECONDS = 15
// whisper-tiny often never emits an end token once the recording goes quiet.
// Without a cap, that generation loop never returns and the tab stays empty.
const MAX_NEW_TOKENS = 128
const TRANSCRIBING = 'Transcribing this recording…'

const started = new Set()
let enginePromise = null
let transcriptionQueue = Promise.resolve()
export const transcriptProblems = writable({})

const NON_SPEECH = new Set([
  '[blank_audio]',
  '(blank audio)',
  '[silence]',
  '(silence)',
  '[music]',
  '(music)',
  '[noise]',
  '(noise)'
])

export function formatTranscriptTime(seconds) {
  const safe = Number.isFinite(seconds) ? Math.max(0, seconds) : 0
  const whole = Math.floor(safe)
  const remain = whole % 60
  const minutes = Math.floor(whole / 60)
  if (minutes >= 60) {
    const hours = Math.floor(minutes / 60)
    const mins = minutes % 60
    return `${hours}:${String(mins).padStart(2, '0')}:${String(remain).padStart(2, '0')}`
  }
  return `${minutes}:${String(remain).padStart(2, '0')}`
}

function audioKeyOf(videoDoc) {
  return videoDoc?.audioRefFullPath || videoDoc?.audioDownloadURL || ''
}

export function readTranscriptProblem(videoDoc, problems) {
  const live = (problems && problems[audioKeyOf(videoDoc)]) || ''
  if (live) return live
  const saved = videoDoc?.transcript
  if (!saved || saved.v !== TRANSCRIPT_VERSION || saved.complete === true) return ''
  if (saved.audioKey && saved.audioKey !== audioKeyOf(videoDoc)) return ''
  return saved.error || ''
}

function rememberProblem(video, message) {
  const key = audioKeyOf(video)
  if (!key) return
  transcriptProblems.update((current) => ({ ...current, [key]: message }))
}

function forgetProblem(video) {
  const key = audioKeyOf(video)
  if (!key) return
  transcriptProblems.update((current) => {
    if (!current[key]) return current
    const next = { ...current }
    delete next[key]
    return next
  })
}

function plainTranscriptError(err) {
  const text = err instanceof Error ? err.message : ''
  const first = text.split('\n')[0].trim()
  if (
    first.startsWith('Could not ')
    || first.startsWith('This ')
    || first.startsWith('Only ')
  ) return first
  if (/transformers|onnx|wasm|whisper/i.test(first)) return 'Could not load speech transcription.'
  return 'Could not transcribe this recording.'
}

export function readCachedTranscript(videoDoc) {
  const saved = videoDoc?.transcript
  if (!saved || saved.v !== TRANSCRIPT_VERSION || saved.complete !== true) return null
  if (saved.audioKey !== audioKeyOf(videoDoc)) return null
  if (!Array.isArray(saved.segments)) return null
  return saved.segments
}

function enqueue(work) {
  const run = transcriptionQueue.then(work, work)
  transcriptionQueue = run.then(() => {}, () => {})
  return run
}

// Call this only after a new recording's audio file is in storage.
export function startTranscriptForNewVideo(video) {
  if (!browser) return Promise.resolve()
  const audioDownloadURL = video?.audioDownloadURL
  const path = video?.path
  if (!audioDownloadURL || !path) return Promise.resolve()
  if (readCachedTranscript(video) != null) return Promise.resolve()

  const audioKey = audioKeyOf(video)
  if (started.has(audioKey)) return Promise.resolve()
  started.add(audioKey)

  rememberProblem(video, TRANSCRIBING)

  return enqueue(async () => {
    try {
      const segments = await produceTranscriptSegments(video)
      if (!segments.length) {
        await persistTranscriptProblem(video, audioKey, 'No speech was found in this recording.')
        return
      }
      await persistTranscript(video, audioKey, segments)
      forgetProblem(video)
    } catch (err) {
      started.delete(audioKey)
      const message = plainTranscriptError(err)
      console.error(message)
      await persistTranscriptProblem(video, audioKey, message)
    }
  })
}

async function persistTranscriptProblem(videoDoc, audioKey, message) {
  rememberProblem(videoDoc, message)
  if (!videoDoc?.path) return
  try {
    await updateFirestoreDoc(videoDoc.path, {
      transcript: {
        v: TRANSCRIPT_VERSION,
        complete: false,
        error: message,
        audioKey,
        createdAt: new Date().toISOString()
      }
    })
  } catch (err) {
    console.error(message, err)
  }
}

async function persistTranscript(videoDoc, audioKey, segments) {
  if (!videoDoc?.path) return
  await updateFirestoreDoc(videoDoc.path, {
    transcript: {
      v: TRANSCRIPT_VERSION,
      complete: true,
      engine: 'browser-whisper',
      model: MODEL_ID,
      audioKey,
      segments,
      createdAt: new Date().toISOString()
    }
  })
}

// Seam: replace this function to call a hosted speech-to-text API.
async function produceTranscriptSegments(video) {
  return transcribeWithBrowserWhisper(video)
}

async function transcribeWithBrowserWhisper(video) {
  const transcriber = await loadWhisper()
  const bytes = video.audioBlob
    ? await video.audioBlob.arrayBuffer()
    : await downloadAudio(video.audioDownloadURL)
  const samples = decodeWavTo16kMono(bytes)
  const windowSamples = WINDOW_SECONDS * 16000
  const segments = []

  for (let offset = 0; offset < samples.length; offset += windowSamples) {
    const end = Math.min(samples.length, offset + windowSamples)
    const slice = samples.slice(offset, end)
    if (peakOf(slice) < 0.02) continue
    await yieldToUi()
    const output = await transcriber(slice, {
      return_timestamps: true,
      task: 'transcribe',
      language: 'english',
      max_new_tokens: MAX_NEW_TOKENS
    })
    segments.push(...segmentsFromOutput(output, offset / 16000, slice.length / 16000))
  }

  segments.sort((a, b) => a.start - b.start || a.end - b.end)
  return segments
}

async function downloadAudio(url) {
  const response = await fetch(url)
  if (!response.ok) throw new Error('Could not download the new recording.')
  return response.arrayBuffer()
}

function loadWhisper() {
  if (!enginePromise) {
    enginePromise = import('./whisperEngine.js').then((engine) => engine.loadWhisperPipeline())
  }
  return enginePromise
}

function peakOf(samples) {
  let peak = 0
  const step = Math.max(1, Math.floor(samples.length / 4000))
  for (let i = 0; i < samples.length; i += step) {
    const value = Math.abs(samples[i])
    if (value > peak) peak = value
  }
  return peak
}

function yieldToUi() {
  return new Promise((resolve) => setTimeout(resolve, 0))
}

function segmentsFromOutput(output, baseSeconds, windowSeconds) {
  const windowEnd = round2(baseSeconds + windowSeconds)
  const chunks = output?.chunks
  if (Array.isArray(chunks) && chunks.length) {
    const parsed = []
    for (const chunk of chunks) {
      const text = cleanTranscriptText(chunk.text)
      if (!isSpokenText(text)) continue
      const stamp = Array.isArray(chunk.timestamp) ? chunk.timestamp : [0, null]
      let start = round2(baseSeconds + (typeof stamp[0] === 'number' ? stamp[0] : 0))
      let end = typeof stamp[1] === 'number' ? round2(baseSeconds + stamp[1]) : null
      // whisper-tiny's timestamps sit on a 30s grid. A stamp in the padded
      // half of a shorter slice overlaps the next slice, and the row highlight
      // then matches two cues at once.
      if (start >= windowEnd) continue
      if (start < baseSeconds) start = round2(baseSeconds)
      parsed.push({ start, end, text })
    }
    for (let i = 0; i < parsed.length; i += 1) {
      if (parsed[i].end == null) {
        parsed[i].end = parsed[i + 1]?.start ?? windowEnd
      }
      if (parsed[i].end > windowEnd) parsed[i].end = windowEnd
      if (parsed[i].end < parsed[i].start) parsed[i].end = parsed[i].start
    }
    return parsed
  }

  const text = cleanTranscriptText(output?.text)
  if (!isSpokenText(text)) return []
  return [{
    start: round2(baseSeconds),
    end: round2(baseSeconds + windowSeconds),
    text
  }]
}

function cleanTranscriptText(text) {
  const cleaned = String(text || '')
    .replace(/<\|[^|]+?\|>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
  return trimRepetitionLoop(cleaned)
}

// whisper-tiny sometimes locks onto one word or one phrase for the rest of a window.
function trimRepetitionLoop(text) {
  const words = text.split(' ').filter(Boolean)
  if (words.length < 8) return text
  return collapsePhraseLoop(collapseTokenRuns(words)).join(' ')
}

function collapseTokenRuns(words) {
  const kept = []
  let run = 0
  let previous = ''
  for (const word of words) {
    const key = word.toLowerCase().replace(/[^a-z0-9]/g, '')
    if (key && key === previous) run += 1
    else {
      run = 1
      previous = key
    }
    if (run > 3) continue
    kept.push(word)
  }
  return kept
}

function collapsePhraseLoop(words) {
  const normalized = words.map((word) => word.toLowerCase().replace(/[^a-z0-9]/g, ''))
  for (let size = 4; size <= 12; size += 1) {
    for (let i = 0; i + size * 3 <= normalized.length; i += 1) {
      const phrase = normalized.slice(i, i + size).join(' ')
      const second = normalized.slice(i + size, i + size * 2).join(' ')
      const third = normalized.slice(i + size * 2, i + size * 3).join(' ')
      if (phrase && phrase === second && phrase === third) {
        return words.slice(0, i + size)
      }
    }
  }
  return words
}

function isSpokenText(text) {
  if (!text) return false
  return !NON_SPEECH.has(text.toLowerCase())
}

function round2(value) {
  return Math.round(value * 100) / 100
}

function decodeWavTo16kMono(arrayBuffer) {
  const view = new DataView(arrayBuffer)
  if (view.byteLength < 44 || fourCc(view, 0) !== 'RIFF' || fourCc(view, 8) !== 'WAVE') {
    throw new Error('This recording is not a WAV file, so it cannot be transcribed in the browser.')
  }

  let offset = 12
  let audioFormat = 0
  let channels = 1
  let sampleRate = 16000
  let bitsPerSample = 16
  let dataOffset = -1
  let dataSize = 0

  while (offset + 8 <= view.byteLength) {
    const id = fourCc(view, offset)
    const size = view.getUint32(offset + 4, true)
    const chunk = offset + 8
    if (id === 'fmt ') {
      audioFormat = view.getUint16(chunk, true)
      channels = view.getUint16(chunk + 2, true)
      sampleRate = view.getUint32(chunk + 4, true)
      bitsPerSample = view.getUint16(chunk + 14, true)
    } else if (id === 'data') {
      dataOffset = chunk
      dataSize = size
      break
    }
    offset = chunk + size + (size % 2)
  }

  if (dataOffset < 0) throw new Error('This WAV recording has no audio data.')
  if (audioFormat !== 1 || bitsPerSample !== 16 || channels < 1) {
    throw new Error('Only 16-bit PCM recordings can be transcribed in the browser.')
  }

  const available = Math.min(dataSize, view.byteLength - dataOffset)
  const frameCount = Math.floor(available / (2 * channels))
  const mono = new Float32Array(frameCount)
  for (let i = 0; i < frameCount; i += 1) {
    let sum = 0
    for (let channel = 0; channel < channels; channel += 1) {
      const sample = view.getInt16(dataOffset + (i * channels + channel) * 2, true)
      sum += sample / 32768
    }
    mono[i] = sum / channels
  }
  return resampleLinear(mono, sampleRate, 16000)
}

function resampleLinear(input, fromRate, toRate) {
  if (!input.length || fromRate === toRate) return input
  const ratio = fromRate / toRate
  const length = Math.max(1, Math.round(input.length / ratio))
  const output = new Float32Array(length)
  const last = input.length - 1
  for (let i = 0; i < length; i += 1) {
    const position = Math.min(i * ratio, last)
    const left = Math.floor(position)
    const right = Math.min(left + 1, last)
    const weight = position - left
    output[i] = input[left] * (1 - weight) + input[right] * weight
  }
  return output
}

function fourCc(view, offset) {
  return String.fromCharCode(
    view.getUint8(offset),
    view.getUint8(offset + 1),
    view.getUint8(offset + 2),
    view.getUint8(offset + 3)
  )
}
