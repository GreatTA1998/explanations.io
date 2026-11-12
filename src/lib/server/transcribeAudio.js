// Server-side transcription for a new recording.
//
// The browser never sees OPENAI_API_KEY. It sends the stored audio URL here.
// gpt-4o-transcribe accepts a file up to 25 MB and, today, returns text rather
// than word timestamps. We still ask for word and segment times. If the model
// refuses that request, or answers with text only, we store the text and the
// real slice bounds. We do not invent word times.
//
// New speech is WebM (Opus) or MP4 (AAC). Those files are sent as themselves.
// WAV is only the container already stored for older recordings; PCM WAV can
// be split under the upload limit. Nothing is transcoded.

import { transcriptionFile } from '../../helpers/speechMime.js'

export const MODEL_ID = 'gpt-4o-transcribe'
export const MAX_DURATION_SECONDS = 30 * 60

// 16-bit stereo PCM at 48 kHz. A larger file cannot be 30 minutes or less of
// audio at that rate, which is the ceiling treated as reasonable here.
export const REASONABLE_BYTES_PER_SECOND = 48000 * 2 * 2
export const MAX_REASONABLE_BYTES = REASONABLE_BYTES_PER_SECOND * MAX_DURATION_SECONDS

// Stay under the audio API's 25 MB upload limit, including multipart overhead.
export const MAX_UPLOAD_BYTES = 24_000_000

export const STORAGE_BUCKET = 'feynman-mvp.appspot.com'

export const MESSAGES = {
  tooLong: 'This recording is longer than 30 minutes, so it was not transcribed.',
  tooLarge: 'This recording is too large to be 30 minutes or less, so it was not transcribed.',
  unknown: 'Could not tell how long this recording is, so it was not transcribed.',
  unreadable: 'Could not read this recording.',
  unsplittable: 'This recording is not a WAV file and is too large to send for transcription.',
  failed: 'Could not transcribe this recording.',
  empty: 'No speech was found in this recording.'
}

export class SafeTranscriptError extends Error {
  constructor(message) {
    super(message)
    this.name = 'SafeTranscriptError'
  }
}

export function decideTranscription(durationSeconds, sizeBytes) {
  if (durationSeconds != null && Number.isFinite(durationSeconds)) {
    if (durationSeconds > MAX_DURATION_SECONDS) return { transcribe: false, code: 'tooLong' }
    return { transcribe: true }
  }
  if (sizeBytes == null || !Number.isFinite(sizeBytes)) return { transcribe: false, code: 'unknown' }
  if (sizeBytes > MAX_REASONABLE_BYTES) return { transcribe: false, code: 'tooLarge' }
  return { transcribe: true }
}

export function isBoardPath(path) {
  if (typeof path !== 'string' || path.length > 400) return false
  const parts = path.split('/')
  if (parts.length < 2 || parts.length > 12) return false
  if (parts[0] !== 'classes') return false
  return parts.every((part) => /^[A-Za-z0-9_-]{1,128}$/.test(part))
}

export function isAllowedAudioUrl(raw) {
  let url
  try {
    url = new URL(raw)
  } catch {
    return false
  }
  if (url.protocol !== 'https:') return false
  if (url.username || url.password) return false
  if (url.hostname !== 'firebasestorage.googleapis.com') return false
  const prefix = `/v0/b/${STORAGE_BUCKET}/o/`
  if (!url.pathname.startsWith(prefix)) return false
  let objectPath = ''
  try {
    objectPath = decodeURIComponent(url.pathname.slice(prefix.length))
  } catch {
    return false
  }
  if (!objectPath.startsWith('audio/')) return false
  if (objectPath.includes('..') || objectPath.includes('\\') || objectPath.includes('\0')) return false
  return true
}

export function parseWavInfo(bytes) {
  if (!bytes || bytes.byteLength < 44) return null
  const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength)
  if (fourCc(view, 0) !== 'RIFF' || fourCc(view, 8) !== 'WAVE') return null

  let offset = 12
  let audioFormat = 0
  let channels = 0
  let sampleRate = 0
  let byteRate = 0
  let blockAlign = 0
  let bitsPerSample = 0
  let dataOffset = -1
  let dataSize = 0
  let sawFmt = false

  while (offset + 8 <= view.byteLength) {
    const id = fourCc(view, offset)
    const size = view.getUint32(offset + 4, true)
    const chunk = offset + 8
    if (chunk + size > view.byteLength) {
      if (id === 'data') {
        dataOffset = chunk
        dataSize = size
      }
      break
    }
    if (id === 'fmt ' && size >= 16) {
      audioFormat = view.getUint16(chunk, true)
      channels = view.getUint16(chunk + 2, true)
      sampleRate = view.getUint32(chunk + 4, true)
      byteRate = view.getUint32(chunk + 8, true)
      blockAlign = view.getUint16(chunk + 12, true)
      bitsPerSample = view.getUint16(chunk + 14, true)
      sawFmt = true
    } else if (id === 'data') {
      dataOffset = chunk
      dataSize = size
      break
    }
    offset = chunk + size + (size % 2)
  }

  if (!sawFmt || dataOffset < 0 || channels < 1 || byteRate < 1 || blockAlign < 1) return null
  return { audioFormat, channels, sampleRate, byteRate, blockAlign, bitsPerSample, dataOffset, dataSize }
}

export function wavDurationSeconds(wav, totalBytes) {
  if (!wav || wav.byteRate < 1) return null
  let available = wav.dataSize
  if (totalBytes != null && Number.isFinite(totalBytes)) {
    available = Math.min(available, Math.max(0, totalBytes - wav.dataOffset))
  }
  return available / wav.byteRate
}

export function planSlices(dataSize, blockAlign, maxUploadBytes = MAX_UPLOAD_BYTES) {
  const align = Math.max(1, blockAlign)
  const headerBytes = 44
  const budget = Math.max(align, maxUploadBytes - headerBytes)
  const maxData = budget - (budget % align)
  const slices = []
  let start = 0
  while (start < dataSize) {
    let length = Math.min(maxData, dataSize - start)
    length -= length % align
    if (length < 1) break
    slices.push({ start, length })
    start += length
  }
  return slices
}

export function buildPcmWav(data, { sampleRate, channels, bitsPerSample }) {
  const blockAlign = channels * (bitsPerSample / 8)
  const byteRate = sampleRate * blockAlign
  const header = new ArrayBuffer(44)
  const view = new DataView(header)
  writeFourCc(view, 0, 'RIFF')
  view.setUint32(4, 36 + data.byteLength, true)
  writeFourCc(view, 8, 'WAVE')
  writeFourCc(view, 12, 'fmt ')
  view.setUint32(16, 16, true)
  view.setUint16(20, 1, true)
  view.setUint16(22, channels, true)
  view.setUint32(24, sampleRate, true)
  view.setUint32(28, byteRate, true)
  view.setUint16(32, blockAlign, true)
  view.setUint16(34, bitsPerSample, true)
  writeFourCc(view, 36, 'data')
  view.setUint32(40, data.byteLength, true)
  const wav = new Uint8Array(44 + data.byteLength)
  wav.set(new Uint8Array(header), 0)
  wav.set(data, 44)
  return wav
}

export function segmentsFromTranscription(body, offsetSeconds = 0, sliceSeconds = null) {
  const offset = Number.isFinite(Number(offsetSeconds)) ? Number(offsetSeconds) : 0
  const localWords = collectWords(body)
  const rawSegments = Array.isArray(body?.segments) ? body.segments : []
  let segments = []

  if (rawSegments.length) {
    segments = rawSegments.flatMap((raw) => {
      const text = cleanText(raw?.text)
      const start = Number(raw?.start)
      if (!text || !Number.isFinite(start)) return []
      const endNumber = Number(raw?.end)
      const end = Number.isFinite(endNumber) ? Math.max(start, endNumber) : start
      const own = collectWords(raw)
      const words = own.length
        ? own
        : localWords.filter((word) => word.start >= start && word.start < end + 0.0005)
      return [{ start, end, text, words }]
    })
  } else if (localWords.length) {
    const text = cleanText(body?.text) || localWords.map((word) => word.word).join(' ')
    const textClean = cleanText(text)
    if (textClean) {
      segments = [{
        start: localWords[0].start,
        end: Math.max(localWords[0].start, localWords[localWords.length - 1].end),
        text: textClean,
        words: localWords
      }]
    }
  } else {
    const text = cleanText(body?.text)
    if (text) {
      const slice = Number(sliceSeconds)
      const end = Number.isFinite(slice) ? Math.max(0, slice) : 0
      segments = [{ start: 0, end, text, words: [] }]
    }
  }

  return segments.map((segment) => {
    const out = {
      start: round3(offset + segment.start),
      end: round3(offset + segment.end),
      text: segment.text
    }
    if (out.end < out.start) out.end = out.start
    if (segment.words.length) {
      out.words = segment.words.map((word) => ({
        word: word.word,
        start: round3(offset + word.start),
        end: round3(offset + word.end)
      }))
    }
    return out
  })
}

export async function requestTranscription({
  bytes,
  mimeType,
  filename,
  apiKey,
  timestamps,
  fetchImpl = fetch
}) {
  const form = new FormData()
  form.append('file', new Blob([bytes], { type: mimeType }), filename)
  form.append('model', MODEL_ID)
  if (timestamps) {
    form.append('response_format', 'verbose_json')
    form.append('timestamp_granularities[]', 'word')
    form.append('timestamp_granularities[]', 'segment')
  } else {
    form.append('response_format', 'json')
  }

  const response = await fetchImpl('https://api.openai.com/v1/audio/transcriptions', {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiKey}` },
    body: form
  })
  const raw = await response.text()
  if (response.status === 400 && timestamps && /timestamp|verbose_json|response_format|unsupported/i.test(raw)) {
    return { unsupportedTimestamps: true, json: null }
  }
  if (!response.ok) {
    console.error('OpenAI transcription failed', response.status)
    throw new SafeTranscriptError(MESSAGES.failed)
  }
  try {
    return { unsupportedTimestamps: false, json: raw ? JSON.parse(raw) : {} }
  } catch {
    throw new SafeTranscriptError(MESSAGES.failed)
  }
}

export async function transcribeSlices({
  slices,
  readSliceWav,
  sliceDuration,
  apiKey,
  fetchImpl
}) {
  const segments = []
  let timestamps = true
  for (const slice of slices) {
    const wav = await readSliceWav(slice)
    let result = await requestTranscription({
      bytes: wav,
      mimeType: 'audio/wav',
      filename: 'audio.wav',
      apiKey,
      timestamps,
      fetchImpl
    })
    if (result.unsupportedTimestamps) {
      timestamps = false
      result = await requestTranscription({
        bytes: wav,
        mimeType: 'audio/wav',
        filename: 'audio.wav',
        apiKey,
        timestamps: false,
        fetchImpl
      })
    }
    const duration = sliceDuration(slice)
    segments.push(...segmentsFromTranscription(result.json, duration.offset, duration.seconds))
  }
  return segments
}

export async function transcribeStoredAudio({
  url,
  apiKey,
  fetchImpl = fetch,
  maxUploadBytes = MAX_UPLOAD_BYTES,
  maxReasonableBytes = MAX_REASONABLE_BYTES
}) {
  if (!isAllowedAudioUrl(url)) throw new SafeTranscriptError(MESSAGES.unreadable)

  const prefix = await fetchByteRange(url, 0, 65535, fetchImpl, maxReasonableBytes)
  const wav = parseWavInfo(prefix.bytes)
  const totalBytes = prefix.totalBytes
  const durationSeconds = wavDurationSeconds(wav, totalBytes)
  const sizeForDecision = durationSeconds == null
    ? await unknownSize(url, prefix, fetchImpl, maxReasonableBytes)
    : totalBytes
  const decision = decideTranscription(durationSeconds, sizeForDecision ?? totalBytes ?? prefix.bytes.byteLength)
  if (!decision.transcribe) {
    return { segments: [], error: MESSAGES[decision.code] }
  }

  if (wav && wav.audioFormat === 1 && wav.bitsPerSample >= 8 && wav.bitsPerSample % 8 === 0) {
    let available = wav.dataSize
    if (totalBytes != null) available = Math.min(available, Math.max(0, totalBytes - wav.dataOffset))
    available -= available % wav.blockAlign
    if (available < 1) return { segments: [], error: MESSAGES.empty }
    const slices = planSlices(available, wav.blockAlign, maxUploadBytes)
    if (!slices.length) return { segments: [], error: MESSAGES.empty }
    const segments = await transcribeSlices({
      slices,
      apiKey,
      fetchImpl,
      sliceDuration(slice) {
        return {
          offset: slice.start / wav.byteRate,
          seconds: slice.length / wav.byteRate
        }
      },
      async readSliceWav(slice) {
        const fileStart = wav.dataOffset + slice.start
        const fileEnd = fileStart + slice.length - 1
        const part = await fetchByteRange(url, fileStart, fileEnd, fetchImpl, slice.length + 64)
        const pcm = sliceBytes(part, fileStart, slice.length)
        return buildPcmWav(pcm, wav)
      }
    })
    if (!segments.length) return { segments: [], error: MESSAGES.empty }
    return { segments, error: '' }
  }

  const wholeSize = totalBytes ?? prefix.bytes.byteLength
  if (wholeSize > maxUploadBytes) {
    return { segments: [], error: MESSAGES.unsplittable }
  }
  const wholeResult = totalBytes == null || prefix.complete
    ? prefix
    : await fetchByteRange(url, 0, wholeSize - 1, fetchImpl, maxUploadBytes)
  const whole = wholeResult.bytes
  const described = transcriptionFile(whole, wholeResult.contentType || prefix.contentType)
  let timestamps = true
  let result = await requestTranscription({
    bytes: whole,
    mimeType: described.mimeType,
    filename: described.filename,
    apiKey,
    timestamps,
    fetchImpl
  })
  if (result.unsupportedTimestamps) {
    result = await requestTranscription({
      bytes: whole,
      mimeType: described.mimeType,
      filename: described.filename,
      apiKey,
      timestamps: false,
      fetchImpl
    })
  }
  const segments = segmentsFromTranscription(result.json, 0, durationSeconds)
  if (!segments.length) return { segments: [], error: MESSAGES.empty }
  return { segments, error: '' }
}

async function unknownSize(url, prefix, fetchImpl, maxReasonableBytes) {
  if (prefix.totalBytes != null) return prefix.totalBytes
  if (prefix.complete) return prefix.bytes.byteLength
  const more = await fetchByteRange(url, 0, maxReasonableBytes, fetchImpl, maxReasonableBytes + 1)
  if (more.truncated) return maxReasonableBytes + 1
  return more.totalBytes ?? more.bytes.byteLength
}

async function fetchByteRange(url, start, end, fetchImpl, cap) {
  const response = await fetchImpl(url, {
    redirect: 'manual',
    headers: { Range: `bytes=${start}-${end}` }
  })
  if (response.status >= 300 && response.status < 400) {
    throw new SafeTranscriptError(MESSAGES.unreadable)
  }
  if (!response.ok && response.status !== 206) {
    throw new SafeTranscriptError(MESSAGES.unreadable)
  }
  const totalBytes = totalFrom(response, start)
  const limit = Math.max(1, Math.min(cap, end - start + 1))
  const read = await readUpTo(response, limit)
  return {
    bytes: read.bytes,
    totalBytes,
    contentType: response.headers.get('content-type') || '',
    complete: read.complete && (response.status === 206 || start === 0),
    truncated: read.truncated,
    status: response.status
  }
}

function sliceBytes(part, fileStart, length) {
  const bytes = part.bytes
  if (part.status === 206) {
    return bytes.subarray(0, Math.min(length, bytes.byteLength))
  }
  if (fileStart === 0) return bytes.subarray(0, Math.min(length, bytes.byteLength))
  throw new SafeTranscriptError(MESSAGES.unreadable)
}

function totalFrom(response, start) {
  const range = response.headers.get('content-range') || ''
  const match = range.match(/\/(\d+)\s*$/)
  if (match) return Number(match[1])
  if (response.status === 200 && start === 0) {
    const length = Number(response.headers.get('content-length'))
    if (Number.isFinite(length) && length >= 0) return length
  }
  return null
}

async function readUpTo(response, limit) {
  if (!response.body || typeof response.body.getReader !== 'function') {
    const all = new Uint8Array(await response.arrayBuffer())
    if (all.byteLength <= limit) return { bytes: all, complete: true, truncated: false }
    return { bytes: all.subarray(0, limit), complete: false, truncated: true }
  }
  const reader = response.body.getReader()
  const chunks = []
  let received = 0
  let complete = false
  let truncated = false
  while (received < limit) {
    const { done, value } = await reader.read()
    if (done) {
      complete = true
      break
    }
    const room = limit - received
    if (value.byteLength > room) {
      chunks.push(value.subarray(0, room))
      received += room
      truncated = true
      break
    }
    chunks.push(value)
    received += value.byteLength
  }
  try {
    await reader.cancel()
  } catch {
    // The extra audio is not needed.
  }
  const bytes = new Uint8Array(received)
  let offset = 0
  for (const chunk of chunks) {
    bytes.set(chunk, offset)
    offset += chunk.byteLength
  }
  return { bytes, complete, truncated }
}

function collectWords(source) {
  if (!source || !Array.isArray(source.words)) return []
  const words = []
  for (const raw of source.words) {
    if (!raw || typeof raw !== 'object') continue
    const spoken = typeof raw.word === 'string' ? raw.word : (typeof raw.text === 'string' ? raw.text : '')
    const word = spoken.trim()
    const start = Number(raw.start)
    const end = Number(raw.end)
    if (!word || !Number.isFinite(start) || !Number.isFinite(end)) continue
    words.push({ word, start, end })
  }
  return words
}

function cleanText(text) {
  return String(text || '').replace(/\s+/g, ' ').trim()
}

function round3(value) {
  return Math.round(value * 1000) / 1000
}

function fourCc(view, offset) {
  return String.fromCharCode(
    view.getUint8(offset),
    view.getUint8(offset + 1),
    view.getUint8(offset + 2),
    view.getUint8(offset + 3)
  )
}

function writeFourCc(view, offset, text) {
  for (let i = 0; i < 4; i += 1) view.setUint8(offset + i, text.charCodeAt(i))
}
