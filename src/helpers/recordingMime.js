// Attachable video means H.264 + AAC in an MP4.
// There is no second container. AVIF is an image format and is not used.

export const H264_AAC_MP4_MIME_TYPES = [
  'video/mp4;codecs=avc1.42E01E,mp4a.40.2',
  'video/mp4;codecs=avc1.4D401E,mp4a.40.2',
  'video/mp4;codecs=avc1,mp4a.40.2',
  'video/mp4;codecs=h264,aac'
]

export const H264_RECORDING_UNSUPPORTED = 'This browser can\'t record an H.264 MP4.'

export function h264Mp4MimeType (isTypeSupported) {
  const supports = typeof isTypeSupported === 'function' ? isTypeSupported : () => false
  for (const mimeType of H264_AAC_MP4_MIME_TYPES) {
    if (supports(mimeType)) return mimeType
  }
  return ''
}

export function isH264Mp4Mime (mimeType) {
  const type = String(mimeType || '').toLowerCase()
  if (!type.includes('mp4')) return false
  if (/vp8|vp9|vp09|av01|hev1|hvc1|webm/.test(type)) return false
  const h264 = /avc1|h264/.test(type)
  const aac = /mp4a|aac/.test(type)
  if (h264 && aac) return true
  // Some browsers report a bare video/mp4 after accepting an avc1+mp4a request.
  return type === 'video/mp4'
}

export function savedFileIsH264Mp4 (video) {
  if (!video) return false
  return video.videoFileExtension === 'mp4' && isH264Mp4Mime(video.videoContentType || 'video/mp4')
}
