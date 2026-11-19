export const MODEL_ID = 'whisper-1'
export const MAX_DURATION_SECONDS = 30 * 60
export const REASONABLE_BYTES_PER_SECOND = 48000 * 2 * 2
export const MAX_REASONABLE_BYTES = REASONABLE_BYTES_PER_SECOND * MAX_DURATION_SECONDS
export const MAX_UPLOAD_BYTES = 24_000_000
export const STORAGE_BUCKET = 'feynman-mvp.appspot.com'
export const MESSAGES = {
  tooLong: 'This recording is longer than 30 minutes, so it was not transcribed.',
  tooLarge: 'This recording is too large to be 30 minutes or less, so it was not transcribed.',
  unknown: 'Could not tell how long this recording is, so it was not transcribed.',
  unreadable: 'Could not read this recording.', unsplittable: 'This recording is not a WAV file and is too large to send for transcription.',
  failed: 'Could not transcribe this recording.', empty: 'No speech was found in this recording.',
  unconfigured: 'Transcription is not configured on this server.'
}
export class SafeTranscriptError extends Error { constructor (message) { super(message); this.name = 'SafeTranscriptError' } }
export function decideTranscription (durationSeconds, sizeBytes) {
  if (durationSeconds != null && Number.isFinite(durationSeconds)) return durationSeconds > MAX_DURATION_SECONDS ? { transcribe: false, code: 'tooLong' } : { transcribe: true }
  if (sizeBytes == null || !Number.isFinite(sizeBytes)) return { transcribe: false, code: 'unknown' }
  return sizeBytes > MAX_REASONABLE_BYTES ? { transcribe: false, code: 'tooLarge' } : { transcribe: true }
}
export function isBoardPath (path) {
  if (typeof path !== 'string' || path.length > 400) return false
  const parts = path.split('/'); return parts.length >= 2 && parts.length <= 12 && parts[0] === 'classes' && parts.every((p) => /^[A-Za-z0-9_-]{1,128}$/.test(p))
}
export function isAllowedAudioUrl (raw) {
  let url
  try { url = new URL(raw) } catch { return false }
  if (url.protocol !== 'https:' || url.username || url.password || url.hostname !== 'firebasestorage.googleapis.com') return false
  const prefix = `/v0/b/${STORAGE_BUCKET}/o/`
  if (!url.pathname.startsWith(prefix)) return false
  let objectPath = ''
  try { objectPath = decodeURIComponent(url.pathname.slice(prefix.length)) } catch { return false }
  return objectPath.startsWith('audio/') && !objectPath.includes('..') && !objectPath.includes('\\') && !objectPath.includes('\0')
}
export function parseWavInfo (bytes) {
  if (!bytes || bytes.byteLength < 44) return null
  const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength)
  if (cc(view, 0) !== 'RIFF' || cc(view, 8) !== 'WAVE') return null
  let offset = 12, audioFormat = 0, channels = 0, sampleRate = 0, byteRate = 0, blockAlign = 0, bitsPerSample = 0, dataOffset = -1, dataSize = 0
  while (offset + 8 <= view.byteLength) {
    const id = cc(view, offset), size = view.getUint32(offset + 4, true), chunk = offset + 8
    if (chunk + size > view.byteLength) { if (id === 'data') { dataOffset = chunk; dataSize = size } break }
    if (id === 'fmt ' && size >= 16) {
      audioFormat = view.getUint16(chunk, true); channels = view.getUint16(chunk + 2, true)
      sampleRate = view.getUint32(chunk + 4, true); byteRate = view.getUint32(chunk + 8, true)
      blockAlign = view.getUint16(chunk + 12, true); bitsPerSample = view.getUint16(chunk + 14, true)
    } else if (id === 'data') { dataOffset = chunk; dataSize = size; break }
    offset = chunk + size + (size % 2)
  }
  return dataOffset < 0 || !sampleRate || !blockAlign ? null : { audioFormat, channels, sampleRate, byteRate, blockAlign, bitsPerSample, dataOffset, dataSize }
}
export function wavDurationSeconds (wav, totalBytes) {
  if (!wav || !(wav.byteRate > 0)) return null
  const dataSize = (totalBytes != null && Number.isFinite(totalBytes)) ? Math.min(wav.dataSize, Math.max(0, totalBytes - wav.dataOffset)) : wav.dataSize
  return dataSize / wav.byteRate
}
export function planSlices (dataSize, blockAlign, maxUploadBytes = MAX_UPLOAD_BYTES) {
  const maxPcm = Math.max(blockAlign, (maxUploadBytes - 44) - ((maxUploadBytes - 44) % blockAlign)), slices = []
  for (let start = 0; start < dataSize; start += maxPcm) {
    const n = Math.min(maxPcm, dataSize - start), aligned = n - (n % blockAlign)
    if (aligned < 1) break
    slices.push({ start, length: aligned })
  }
  return slices
}
export function buildPcmWav (data, { sampleRate, channels, bitsPerSample }) {
  const blockAlign = channels * (bitsPerSample / 8), byteRate = sampleRate * blockAlign, dataSize = data.byteLength
  const wav = new Uint8Array(44 + dataSize), view = new DataView(wav.buffer)
  writeCc(view, 0, 'RIFF'); view.setUint32(4, 36 + dataSize, true); writeCc(view, 8, 'WAVE'); writeCc(view, 12, 'fmt ')
  view.setUint32(16, 16, true); view.setUint16(20, 1, true); view.setUint16(22, channels, true); view.setUint32(24, sampleRate, true)
  view.setUint32(28, byteRate, true); view.setUint16(32, blockAlign, true); view.setUint16(34, bitsPerSample, true); writeCc(view, 36, 'data'); view.setUint32(40, dataSize, true); wav.set(data, 44)
  return wav
}
export function transcriptionFile (bytes, contentType) {
  const k = sniff(bytes) || mimeKind(contentType), m = { wav: ['audio/wav', 'audio.wav'], webm: ['audio/webm', 'audio.webm'], mp4: ['audio/mp4', 'audio.mp4'] }[k]
  return m ? { mimeType: m[0], filename: m[1] } : { mimeType: 'application/octet-stream', filename: 'audio.bin' }
}
export function segmentsFromTranscription (body, offsetSeconds = 0, sliceSeconds = null) {
  const offset = Number.isFinite(Number(offsetSeconds)) ? Number(offsetSeconds) : 0
  const localWords = wordsOf(body), raw = Array.isArray(body?.segments) ? body.segments : []
  let segments = []
  if (raw.length) {
    segments = raw.flatMap((s) => {
      const text = clean(s?.text), start = Number(s?.start)
      if (!text || !Number.isFinite(start)) return []
      const endN = Number(s?.end), end = Number.isFinite(endN) ? Math.max(start, endN) : start
      const own = wordsOf(s)
      return [{ start, end, text, words: own.length ? own : localWords.filter((w) => w.start >= start && w.start < end) }]
    })
  } else if (localWords.length) {
    const text = clean(clean(body?.text) || localWords.map((w) => w.word).join(' '))
    if (text) segments = [{ start: localWords[0].start, end: Math.max(localWords[0].start, localWords.at(-1).end), text, words: localWords }]
  } else {
    const text = clean(body?.text), slice = Number(sliceSeconds)
    if (text) segments = [{ start: 0, end: Number.isFinite(slice) ? Math.max(0, slice) : 0, text, words: [] }]
  }
  return segments.map((s) => {
    const out = { start: r3(offset + s.start), end: r3(offset + s.end), text: s.text }
    if (out.end < out.start) out.end = out.start
    if (s.words.length) out.words = s.words.map((w) => ({ word: w.word, start: r3(offset + w.start), end: r3(offset + w.end) }))
    return out
  })
}
export async function requestTranscription ({ bytes, mimeType, filename, apiKey, timestamps, fetchImpl = fetch }) {
  const form = new FormData()
  form.append('file', new Blob([bytes], { type: mimeType }), filename); form.append('model', MODEL_ID)
  if (timestamps) { form.append('response_format', 'verbose_json'); form.append('timestamp_granularities[]', 'word'); form.append('timestamp_granularities[]', 'segment') }
  else form.append('response_format', 'json')
  const response = await fetchImpl('https://api.openai.com/v1/audio/transcriptions', { method: 'POST', headers: { Authorization: `Bearer ${apiKey}` }, body: form })
  const raw = await response.text()
  if (response.status === 400 && timestamps && /timestamp|verbose_json|response_format|unsupported/i.test(raw)) return { unsupportedTimestamps: true, json: null }
  if (!response.ok) { console.error('OpenAI transcription failed', response.status); throw new SafeTranscriptError(MESSAGES.failed) }
  try { return { unsupportedTimestamps: false, json: raw ? JSON.parse(raw) : {} } } catch { throw new SafeTranscriptError(MESSAGES.failed) }
}
async function whisper (args) { const r = await requestTranscription({ ...args, timestamps: true }); return r.unsupportedTimestamps ? requestTranscription({ ...args, timestamps: false }) : r }
export async function transcribeStoredAudio ({ url, apiKey, fetchImpl = fetch, maxUploadBytes = MAX_UPLOAD_BYTES, maxReasonableBytes = MAX_REASONABLE_BYTES }) {
  if (!isAllowedAudioUrl(url)) throw new SafeTranscriptError(MESSAGES.unreadable)
  const prefix = await fetchRange(url, 0, 65535, fetchImpl, maxReasonableBytes)
  const wav = parseWavInfo(prefix.bytes), totalBytes = prefix.totalBytes
  const durationSeconds = wavDurationSeconds(wav, totalBytes)
  const sizeForDecision = durationSeconds == null ? await unknownSize(url, prefix, fetchImpl, maxReasonableBytes) : totalBytes
  const decision = decideTranscription(durationSeconds, sizeForDecision ?? totalBytes ?? prefix.bytes.byteLength)
  if (!decision.transcribe) return { segments: [], error: MESSAGES[decision.code] }
  if (wav && wav.audioFormat === 1 && wav.bitsPerSample >= 8 && wav.bitsPerSample % 8 === 0) {
    let available = wav.dataSize
    if (totalBytes != null) available = Math.min(available, Math.max(0, totalBytes - wav.dataOffset))
    available -= available % wav.blockAlign
    const slices = available < 1 ? [] : planSlices(available, wav.blockAlign, maxUploadBytes)
    if (!slices.length) return { segments: [], error: MESSAGES.empty }
    const segments = []
    for (const slice of slices) {
      const start = wav.dataOffset + slice.start
      const part = await fetchRange(url, start, start + slice.length - 1, fetchImpl, slice.length + 64)
      if (part.bytes.byteLength < slice.length) throw new SafeTranscriptError(MESSAGES.unreadable)
      const result = await whisper({ bytes: buildPcmWav(part.bytes.subarray(0, slice.length), wav), mimeType: 'audio/wav', filename: 'audio.wav', apiKey, fetchImpl })
      segments.push(...segmentsFromTranscription(result.json, slice.start / wav.byteRate, slice.length / wav.byteRate))
    }
    return segments.length ? { segments, error: '' } : { segments: [], error: MESSAGES.empty }
  }
  const wholeSize = totalBytes ?? prefix.bytes.byteLength
  if (wholeSize > maxUploadBytes) return { segments: [], error: MESSAGES.unsplittable }
  const whole = totalBytes == null || prefix.complete ? prefix : await fetchRange(url, 0, wholeSize - 1, fetchImpl, maxUploadBytes)
  const described = transcriptionFile(whole.bytes, whole.contentType || prefix.contentType)
  const result = await whisper({ bytes: whole.bytes, mimeType: described.mimeType, filename: described.filename, apiKey, fetchImpl })
  const segments = segmentsFromTranscription(result.json, 0, durationSeconds)
  return segments.length ? { segments, error: '' } : { segments: [], error: MESSAGES.empty }
}
async function unknownSize (url, prefix, fetchImpl, max) {
  if (prefix.totalBytes != null) return prefix.totalBytes
  if (prefix.complete) return prefix.bytes.byteLength
  const more = await fetchRange(url, 0, max, fetchImpl, max + 1); return more.truncated ? max + 1 : (more.totalBytes ?? more.bytes.byteLength)
}
async function fetchRange (url, start, end, fetchImpl, cap) {
  const response = await fetchImpl(url, { redirect: 'manual', headers: { Range: `bytes=${start}-${end}` } })
  if ((response.status >= 300 && response.status < 400) || (!response.ok && response.status !== 206)) throw new SafeTranscriptError(MESSAGES.unreadable)
  const match = (response.headers.get('content-range') || '').match(/\/(\d+)\s*$/)
  let totalBytes = match ? Number(match[1]) : null
  if (totalBytes == null && response.status === 200 && start === 0) { const n = Number(response.headers.get('content-length')); totalBytes = Number.isFinite(n) ? n : null }
  const read = await readUpTo(response, Math.max(1, Math.min(cap, end - start + 1)))
  return { bytes: read.bytes, totalBytes, contentType: response.headers.get('content-type') || '', complete: read.complete && (response.status === 206 || start === 0), truncated: read.truncated, status: response.status }
}
async function readUpTo (response, limit) {
  if (!response.body || typeof response.body.getReader !== 'function') {
    const buffer = new Uint8Array(await response.arrayBuffer())
    return buffer.byteLength > limit ? { bytes: buffer.subarray(0, limit), complete: false, truncated: true } : { bytes: buffer, complete: true, truncated: false }
  }
  const reader = response.body.getReader(), chunks = []
  let size = 0, truncated = false
  while (size < limit) {
    const { done, value } = await reader.read()
    if (done) break
    if (!value?.byteLength) continue
    const room = limit - size
    if (value.byteLength > room) { chunks.push(value.subarray(0, room)); size += room; truncated = true; try { await reader.cancel() } catch {}; break }
    chunks.push(value); size += value.byteLength
  }
  const bytes = new Uint8Array(size); let offset = 0
  for (const c of chunks) { bytes.set(c, offset); offset += c.byteLength }
  return { bytes, complete: !truncated, truncated }
}
function wordsOf (source) {
  if (!Array.isArray(source?.words)) return []
  return source.words.flatMap((w) => {
    const spoken = typeof w?.word === 'string' ? w.word.trim() : '', start = Number(w?.start), end = Number(w?.end)
    return spoken && Number.isFinite(start) && Number.isFinite(end) ? [{ word: spoken, start, end }] : []
  })
}
function clean (text) { return String(text || '').replace(/\s+/g, ' ').trim() }
function r3 (v) { return Math.round(v * 1000) / 1000 }
function cc (view, o) { return String.fromCharCode(view.getUint8(o), view.getUint8(o + 1), view.getUint8(o + 2), view.getUint8(o + 3)) }
function writeCc (view, o, text) { for (let i = 0; i < 4; i += 1) view.setUint8(o + i, text.charCodeAt(i)) }
function sniff (bytes) {
  if (!bytes || bytes.byteLength < 4) return ''
  const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength)
  if (bytes.byteLength >= 12 && cc(view, 0) === 'RIFF' && cc(view, 8) === 'WAVE') return 'wav'
  if (bytes[0] === 0x1a && bytes[1] === 0x45 && bytes[2] === 0xdf && bytes[3] === 0xa3) return 'webm'
  return bytes.byteLength >= 8 && cc(view, 4) === 'ftyp' ? 'mp4' : ''
}
function mimeKind (contentType) {
  const base = String(contentType || '').split(';')[0].trim().toLowerCase()
  return /^audio\/(wav|wave|x-wav)$/.test(base) ? 'wav' : /^(audio|video)\/webm$/.test(base) ? 'webm' : /^audio\/(mp4|m4a|x-m4a)$|^video\/mp4$/.test(base) ? 'mp4' : ''
}