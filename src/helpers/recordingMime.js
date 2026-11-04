// Widely playable for WhatsApp, Line, and similar means H.264 + AAC in an MP4.
// A VP9/Opus MP4 is still an MP4 container, and those apps reject it.
// Chrome only offers avc1/mp4a when the OS has a proprietary encoder.
// This repo has no ffmpeg, mp4-muxer, or mediabunny fallback.

export const H264_AAC_MP4_MIME_TYPES = [
  'video/mp4;codecs=avc1.42E01E,mp4a.40.2',
  'video/mp4;codecs=avc1.4D401E,mp4a.40.2',
  'video/mp4;codecs=avc1,mp4a.40.2',
  'video/mp4;codecs=h264,aac'
]

const WEBM_MIME_TYPES = [
  'video/webm;codecs=vp9,opus',
  'video/webm;codecs=vp8,opus',
  'video/webm'
]

export function chooseRecordingFormat (isTypeSupported) {
  const supports = typeof isTypeSupported === 'function' ? isTypeSupported : () => false

  for (const mimeType of H264_AAC_MP4_MIME_TYPES) {
    if (supports(mimeType)) {
      return { mimeType, fileExtension: 'mp4', widelyPlayable: true }
    }
  }

  for (const mimeType of WEBM_MIME_TYPES) {
    if (supports(mimeType)) {
      return { mimeType, fileExtension: 'webm', widelyPlayable: false }
    }
  }

  return { mimeType: '', fileExtension: 'webm', widelyPlayable: false }
}

export function formatFromRecorder (requested, recorder) {
  const actual = (recorder && recorder.mimeType) || requested.mimeType || 'video/webm'
  const lower = actual.toLowerCase()
  const isMp4 = lower.includes('mp4')
  const otherVideoCodec = /vp8|vp9|vp09|av01|hev1|hvc1/.test(lower)
  const saysH264 = /avc1|h264/.test(lower)
  const saysAac = /mp4a|aac/.test(lower)
  // Some browsers report a bare "video/mp4" after accepting an avc1+mp4a request.
  const widelyPlayable = isMp4
    && !otherVideoCodec
    && requested.widelyPlayable
    && (saysH264 || requested.widelyPlayable)
    && (saysAac || requested.widelyPlayable)

  let fileExtension = 'webm'
  if (widelyPlayable) fileExtension = 'mp4'
  else if (isMp4) fileExtension = 'mp4'
  else if (lower.includes('webm')) fileExtension = 'webm'
  else fileExtension = requested.fileExtension || 'webm'

  return { mimeType: actual, fileExtension, widelyPlayable }
}

export function isWidelyPlayableVideo (video) {
  if (!video) return false
  if (video.videoWidelyPlayable === true) return true
  if (video.videoWidelyPlayable === false) return false

  const type = String(video.videoContentType || '').toLowerCase()
  if (!type.includes('mp4')) return false
  if (/vp8|vp9|vp09|av01|hev1|hvc1/.test(type)) return false
  const h264 = type.includes('avc1') || type.includes('h264')
  const aac = type.includes('mp4a') || type.includes('aac')
  return h264 && aac
}
