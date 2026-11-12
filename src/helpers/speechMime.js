// New blackboard speech is Opus in a WebM file, or AAC in an MP4 when the
// browser cannot encode Opus (Safari's MediaRecorder). Both containers use
// this choice. Nothing here writes a new WAV file.
//
// Files already saved as WAV stay WAV. Playback and sharing accept WAV,
// WebM, and MP4, and each file keeps the type it was stored with.

export const SPEECH_BITRATE = 24_000

const OPUS_WEBM_MIME_TYPES = [
  'audio/webm;codecs=opus',
  'audio/webm'
]

const AAC_MP4_MIME_TYPES = [
  'audio/mp4;codecs=mp4a.40.2',
  'audio/mp4'
]

export function chooseSpeechFormat (isTypeSupported) {
  const supports = typeof isTypeSupported === 'function' ? isTypeSupported : () => false

  for (const mimeType of OPUS_WEBM_MIME_TYPES) {
    if (safeSupports(supports, mimeType)) return formatFor(mimeType)
  }
  for (const mimeType of AAC_MP4_MIME_TYPES) {
    if (safeSupports(supports, mimeType)) return formatFor(mimeType)
  }
  return null
}

export function playbackAcceptsSpeech (type) {
  return containerFromMime(type) !== ''
}

export function speechExtension (mimeType) {
  const container = containerFromMime(mimeType)
  if (container === 'webm' || container === 'mp4') return container
  return ''
}

// New WebM and MP4 objects carry their extension. A WAV blob, which this
// recorder no longer produces, keeps the historical extension-less path.
export function speechStoragePath (id, mimeType) {
  const extension = speechExtension(mimeType)
  if (!extension) return `audio/${id}`
  return `audio/${id}.${extension}`
}

export function speechUploadMetadata (mimeType) {
  const type = String(mimeType || '').trim()
  if (!type) return undefined
  const metadata = { contentType: type }
  const extension = speechExtension(type)
  if (extension) metadata.customMetadata = { extension: `.${extension}` }
  return metadata
}

// What gpt-4o-transcribe should receive. The bytes win when they identify a
// container, so a WebM or MP4 file is never relabeled as WAV. The stored
// content type is kept when it names that same container.
export function transcriptionFile (bytes, contentType) {
  const sniffed = sniffContainer(bytes)
  const fromHeader = containerFromMime(contentType)
  const container = sniffed || fromHeader
  if (container === 'wav') {
    return { mimeType: audioTypeFor(contentType, 'wav', 'audio/wav'), filename: 'audio.wav' }
  }
  if (container === 'webm') {
    return { mimeType: audioTypeFor(contentType, 'webm', 'audio/webm'), filename: 'audio.webm' }
  }
  if (container === 'mp4') {
    return { mimeType: audioTypeFor(contentType, 'mp4', 'audio/mp4'), filename: 'audio.mp4' }
  }
  return { mimeType: 'application/octet-stream', filename: 'audio.bin' }
}

function formatFor (mimeType) {
  return {
    mimeType,
    fileExtension: mimeType.includes('mp4') ? 'mp4' : 'webm',
    audioBitsPerSecond: SPEECH_BITRATE
  }
}

function safeSupports (supports, mimeType) {
  try {
    return supports(mimeType) === true
  } catch {
    return false
  }
}

function baseMime (type) {
  return String(type || '').split(';')[0].trim().toLowerCase()
}

function containerFromMime (type) {
  const base = baseMime(type)
  if (base === 'audio/wav' || base === 'audio/wave' || base === 'audio/x-wav') return 'wav'
  if (base === 'audio/webm' || base === 'video/webm') return 'webm'
  if (base === 'audio/mp4' || base === 'audio/m4a' || base === 'audio/x-m4a') return 'mp4'
  return ''
}

function audioTypeFor (contentType, container, fallback) {
  if (containerFromMime(contentType) !== container) return fallback
  const raw = String(contentType || '').split(',')[0].trim()
  if (baseMime(raw).startsWith('audio/')) return raw
  return fallback
}

function sniffContainer (bytes) {
  if (!bytes || bytes.byteLength < 4) return ''
  const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength)
  if (
    bytes.byteLength >= 12
    && fourCc(view, 0) === 'RIFF'
    && fourCc(view, 8) === 'WAVE'
  ) return 'wav'
  if (
    bytes[0] === 0x1a
    && bytes[1] === 0x45
    && bytes[2] === 0xdf
    && bytes[3] === 0xa3
  ) return 'webm'
  if (bytes.byteLength >= 8 && fourCc(view, 4) === 'ftyp') return 'mp4'
  return ''
}

function fourCc (view, offset) {
  return String.fromCharCode(
    view.getUint8(offset),
    view.getUint8(offset + 1),
    view.getUint8(offset + 2),
    view.getUint8(offset + 3)
  )
}
