// Timed transcript lines for a video: { start, end, text } in seconds.
//
// produceTranscriptSegments() is the seam. It turns a video's audio into those
// lines. This repo has no speech-to-text API key, so the default engine runs
// Whisper in the browser (Xenova/whisper-tiny) and caches the finished lines
// on the video document as `transcript`. Replace produceTranscriptSegments()
// to call another provider.

import { browser } from '$app/environment'
import { updateFirestoreDoc } from './crud.js'

const MODEL_ID = 'Xenova/whisper-tiny'
const TRANSCRIPT_VERSION = 2
const WINDOW_SECONDS = 30

const memory = new Map()
const jobs = new Map()
let enginePromise = null
let transcriptionQueue = Promise.resolve()

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

export function readCachedTranscript(videoDoc) {
  const saved = videoDoc?.transcript
  if (!saved || saved.v !== TRANSCRIPT_VERSION || saved.complete !== true) return null
  if (saved.audioKey !== audioKeyOf(videoDoc)) return null
  if (!Array.isArray(saved.segments)) return null
  return saved.segments
}

function emit(job, patch) {
  Object.assign(job, patch)
  const snapshot = {
    status: job.status,
    segments: job.segments || [],
    detail: job.detail || '',
    error: job.error || ''
  }
  for (const listener of job.listeners) listener(snapshot)
}

function enqueue(work) {
  const run = transcriptionQueue.then(work, work)
  transcriptionQueue = run.then(() => {}, () => {})
  return run
}

export function watchTranscript(videoDoc, listener) {
  if (!browser) {
    listener({ status: 'starting', segments: [], detail: '', error: '' })
    return () => {}
  }

  if (!videoDoc?.audioDownloadURL) {
    listener({ status: 'empty', segments: [], detail: '', error: '' })
    return () => {}
  }

  const key = audioKeyOf(videoDoc)
  const cached = readCachedTranscript(videoDoc) ?? (memory.has(key) ? memory.get(key) : null)
  if (cached) {
    listener({ status: 'ready', segments: cached, detail: '', error: '' })
    return () => {}
  }

  let job = jobs.get(key)
  if (!job) {
    job = {
      listeners: new Set(),
      segments: [],
      status: 'starting',
      detail: '',
      error: ''
    }
    jobs.set(key, job)
    job.promise = enqueue(async () => {
      try {
        const segments = await produceTranscriptSegments(videoDoc, (patch) => emit(job, patch))
        memory.set(key, segments)
        await persistTranscript(videoDoc, key, segments)
        emit(job, { status: 'ready', segments, detail: '', error: '' })
      } catch (err) {
        console.error(err)
        emit(job, {
          status: 'error',
          error: err?.message || 'Could not transcribe this recording.'
        })
      } finally {
        jobs.delete(key)
      }
    })
  }

  job.listeners.add(listener)
  listener({
    status: job.status,
    segments: job.segments,
    detail: job.detail,
    error: job.error
  })
  return () => job.listeners.delete(listener)
}

async function persistTranscript(videoDoc, audioKey, segments) {
  if (!videoDoc?.path) return
  try {
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
  } catch (err) {
    console.error('Could not cache the transcript on the video.', err)
  }
}

// Seam: replace this function to call a hosted speech-to-text API.
async function produceTranscriptSegments(videoDoc, report) {
  return transcribeWithBrowserWhisper(videoDoc, report)
}

async function transcribeWithBrowserWhisper(videoDoc, report) {
  report({
    status: 'loading-model',
    detail: 'Loading the speech model…',
    segments: [],
    error: ''
  })
  loadWhisper.onProgress = (message) => {
    report({ status: 'loading-model', detail: message })
  }

  let transcriber
  try {
    transcriber = await loadWhisper()
  } catch (err) {
    console.error(err)
    throw new Error('Could not load the speech model. Check your connection and try again.')
  }

  report({ status: 'transcribing', detail: 'Reading the recording…' })
  const response = await fetch(videoDoc.audioDownloadURL)
  if (!response.ok) throw new Error('Could not download the video audio.')

  const samples = decodeWavTo16kMono(await response.arrayBuffer())
  const totalSeconds = samples.length / 16000
  const windowSamples = WINDOW_SECONDS * 16000
  const segments = []

  for (let offset = 0; offset < samples.length; offset += windowSamples) {
    const end = Math.min(samples.length, offset + windowSamples)
    const slice = samples.slice(offset, end)
    report({
      status: 'transcribing',
      detail: `Transcribing ${formatTranscriptTime(offset / 16000)} / ${formatTranscriptTime(totalSeconds)}`,
      segments: segments.slice()
    })
    await yieldToUi()
    const output = await transcriber(slice, {
      return_timestamps: true,
      task: 'transcribe'
    })
    segments.push(...segmentsFromOutput(output, offset / 16000, slice.length / 16000))
  }

  report({
    status: 'transcribing',
    detail: `Transcribing ${formatTranscriptTime(totalSeconds)} / ${formatTranscriptTime(totalSeconds)}`,
    segments: segments.slice()
  })
  return segments
}

function loadWhisper() {
  if (!enginePromise) {
    enginePromise = (async () => {
      const { pipeline, env } = await import('@xenova/transformers')
      env.allowLocalModels = false
      env.useBrowserCache = true
      if (env.backends?.onnx?.wasm) {
        env.backends.onnx.wasm.numThreads = 1
      }
      return pipeline('automatic-speech-recognition', MODEL_ID, {
        quantized: true,
        progress_callback: (progress) => {
          const message = progressMessage(progress)
          if (message && loadWhisper.onProgress) loadWhisper.onProgress(message)
        }
      })
    })()
  }
  return enginePromise
}

function progressMessage(progress) {
  if (!progress) return ''
  if (progress.status === 'progress' && progress.progress != null) {
    return `Downloading the speech model… ${Math.round(progress.progress)}%`
  }
  if (progress.status === 'initiate' || progress.status === 'download') {
    return 'Downloading the speech model…'
  }
  return ''
}

function yieldToUi() {
  return new Promise((resolve) => setTimeout(resolve, 0))
}

function segmentsFromOutput(output, baseSeconds, windowSeconds) {
  const chunks = output?.chunks
  if (Array.isArray(chunks) && chunks.length) {
    const parsed = []
    for (const chunk of chunks) {
      const text = cleanTranscriptText(chunk.text)
      if (!isSpokenText(text)) continue
      const stamp = Array.isArray(chunk.timestamp) ? chunk.timestamp : [0, null]
      const start = round2(baseSeconds + (typeof stamp[0] === 'number' ? stamp[0] : 0))
      const end = typeof stamp[1] === 'number' ? round2(baseSeconds + stamp[1]) : null
      parsed.push({ start, end, text })
    }
    for (let i = 0; i < parsed.length; i += 1) {
      if (parsed[i].end == null) {
        parsed[i].end = parsed[i + 1]?.start ?? round2(baseSeconds + windowSeconds)
      }
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
