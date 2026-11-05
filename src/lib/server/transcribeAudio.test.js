import assert from 'node:assert/strict'
import test from 'node:test'
import {
  MAX_DURATION_SECONDS,
  MAX_REASONABLE_BYTES,
  MAX_UPLOAD_BYTES,
  MESSAGES,
  buildPcmWav,
  decideTranscription,
  isAllowedAudioUrl,
  isBoardPath,
  parseWavInfo,
  planSlices,
  requestTranscription,
  segmentsFromTranscription,
  transcribeStoredAudio,
  wavDurationSeconds
} from './transcribeAudio.js'

const AUDIO_URL = 'https://firebasestorage.googleapis.com/v0/b/feynman-mvp.appspot.com/o/audio%2Fabc123?alt=media&token=t'

test('30 minutes is transcribed and anything longer is refused', () => {
  assert.equal(decideTranscription(MAX_DURATION_SECONDS, 1).transcribe, true)
  assert.equal(decideTranscription(MAX_DURATION_SECONDS + 0.001, 1).transcribe, false)
  assert.equal(decideTranscription(MAX_DURATION_SECONDS + 1, null).code, 'tooLong')
  assert.equal(decideTranscription(0, null).transcribe, true)
})

test('unknown duration is refused only when the file cannot be 30 minutes of reasonable audio', () => {
  assert.equal(decideTranscription(null, MAX_REASONABLE_BYTES).transcribe, true)
  assert.equal(decideTranscription(null, MAX_REASONABLE_BYTES + 1).code, 'tooLarge')
  assert.equal(decideTranscription(null, null).code, 'unknown')
  assert.equal(MESSAGES.tooLarge.includes('30 minutes'), true)
})

test('wav duration follows the header and is capped by the real file size', () => {
  const wav = buildPcmWav(new Uint8Array(16000), {
    sampleRate: 8000,
    channels: 1,
    bitsPerSample: 8
  })
  const info = parseWavInfo(wav)
  assert.equal(wavDurationSeconds(info, wav.byteLength), 2)
  assert.equal(wavDurationSeconds(info, info.dataOffset + 8000), 1)
})

test('a wav header can describe exactly 30 minutes without storing the pcm', () => {
  const header = buildPcmWav(new Uint8Array(0), {
    sampleRate: 16000,
    channels: 1,
    bitsPerSample: 16
  })
  const view = new DataView(header.buffer)
  const dataSize = 16000 * 2 * MAX_DURATION_SECONDS
  view.setUint32(4, 36 + dataSize, true)
  view.setUint32(40, dataSize, true)
  const info = parseWavInfo(header)
  assert.equal(wavDurationSeconds(info, info.dataOffset + dataSize), MAX_DURATION_SECONDS)
  assert.equal(decideTranscription(wavDurationSeconds(info, null), null).transcribe, true)
})

test('slices cover the pcm without passing the upload limit', () => {
  const dataSize = 57_600_000
  const slices = planSlices(dataSize, 2, MAX_UPLOAD_BYTES)
  assert.ok(slices.length > 1)
  assert.equal(slices[0].start, 0)
  let cursor = 0
  for (const slice of slices) {
    assert.equal(slice.start, cursor)
    assert.ok(slice.length + 44 <= MAX_UPLOAD_BYTES)
    assert.equal(slice.length % 2, 0)
    cursor += slice.length
  }
  assert.equal(cursor, dataSize)
})

test('text-only responses do not gain invented word times', () => {
  const segments = segmentsFromTranscription({ text: '  hello   room  ' }, 12.5, 3.25)
  assert.deepEqual(segments, [{ start: 12.5, end: 15.75, text: 'hello room' }])
  assert.equal('words' in segments[0], false)
})

test('returned segments and words are shifted onto the recording timeline', () => {
  const segments = segmentsFromTranscription({
    text: 'hello room',
    segments: [{ start: 0.1, end: 1.2, text: 'hello room' }],
    words: [
      { word: 'hello', start: 0.1, end: 0.4 },
      { word: 'room', start: 0.5, end: 1.1 },
      { word: 'no-time', start: 'soon' }
    ]
  }, 10, 2)
  assert.equal(segments.length, 1)
  assert.equal(segments[0].text, 'hello room')
  assert.equal(segments[0].start, 10.1)
  assert.equal(segments[0].end, 11.2)
  assert.deepEqual(segments[0].words, [
    { word: 'hello', start: 10.1, end: 10.4 },
    { word: 'room', start: 10.5, end: 11.1 }
  ])
})

test('word timestamps are requested, then omitted when the model rejects them', async () => {
  const calls = []
  const fetchImpl = async (_url, init) => {
    const form = init.body
    const fields = {}
    for (const [key, value] of form.entries()) {
      if (fields[key] === undefined) fields[key] = value
      else fields[key] = [].concat(fields[key], value)
    }
    calls.push(fields)
    if (fields.response_format === 'verbose_json') {
      return new Response(JSON.stringify({
        error: { message: 'timestamp_granularities is unsupported for this model' }
      }), { status: 400 })
    }
    return new Response(JSON.stringify({ text: 'from the model' }), { status: 200 })
  }
  const first = await requestTranscription({
    bytes: new Uint8Array([1, 2, 3]),
    mimeType: 'audio/wav',
    filename: 'audio.wav',
    apiKey: 'test-key',
    timestamps: true,
    fetchImpl
  })
  assert.equal(first.unsupportedTimestamps, true)
  const second = await requestTranscription({
    bytes: new Uint8Array([1, 2, 3]),
    mimeType: 'audio/wav',
    filename: 'audio.wav',
    apiKey: 'test-key',
    timestamps: false,
    fetchImpl
  })
  assert.equal(second.json.text, 'from the model')
  assert.equal(calls[0].model, 'gpt-4o-transcribe')
  assert.deepEqual(calls[0]['timestamp_granularities[]'], ['word', 'segment'])
  assert.equal(calls[0].response_format, 'verbose_json')
  assert.equal(calls[1].response_format, 'json')
  assert.equal(calls[1]['timestamp_granularities[]'], undefined)
  assert.equal('words' in segmentsFromTranscription(second.json, 0, 1)[0], false)
})

test('a recording at 30 minutes is sent and a longer one is not', async () => {
  const allowed = await runRemote(MAX_DURATION_SECONDS)
  assert.equal(allowed.error, '')
  assert.equal(allowed.posts, 2)
  assert.equal(allowed.segments[0].text, 'spoken')
  assert.equal('words' in allowed.segments[0], false)

  const refused = await runRemote(MAX_DURATION_SECONDS + 1)
  assert.equal(refused.posts, 0)
  assert.equal(refused.error, MESSAGES.tooLong)
})

test('a wav larger than one upload is split without inventing word times', async () => {
  const seconds = 3
  const data = new Uint8Array(8000 * seconds)
  const wav = buildPcmWav(data, { sampleRate: 8000, channels: 1, bitsPerSample: 8 })
  const posts = []
  const fetchImpl = async (url, init) => {
    if (String(url).includes('api.openai.com')) {
      const form = init.body
      let timestamps = false
      let file
      for (const [key, value] of form.entries()) {
        if (key === 'file') file = value
        if (key.startsWith('timestamp_granularities')) timestamps = true
      }
      if (timestamps) return new Response('unsupported verbose_json', { status: 400 })
      const bytes = new Uint8Array(await file.arrayBuffer())
      posts.push(parseWavInfo(bytes))
      return new Response(JSON.stringify({ text: 'part' }), { status: 200 })
    }
    const header = init.headers.Range || ''
    const match = header.match(/bytes=(\d+)-(\d+)/)
    const start = Number(match[1])
    const end = Number(match[2])
    const slice = wav.subarray(start, Math.min(wav.byteLength, end + 1))
    return new Response(slice, {
      status: 206,
      headers: { 'content-range': `bytes ${start}-${start + slice.byteLength - 1}/${wav.byteLength}` }
    })
  }
  const result = await transcribeStoredAudio({
    url: AUDIO_URL,
    apiKey: 'test-key',
    fetchImpl,
    maxUploadBytes: 44 + 8000
  })
  assert.equal(result.error, '')
  assert.equal(posts.length, 3)
  assert.deepEqual(result.segments.map((segment) => [segment.start, segment.end, segment.text, 'words' in segment]), [
    [0, 1, 'part', false],
    [1, 2, 'part', false],
    [2, 3, 'part', false]
  ])
})

test('only this project’s stored audio can be fetched', () => {
  assert.equal(isAllowedAudioUrl(AUDIO_URL), true)
  assert.equal(isAllowedAudioUrl('https://example.com/audio.wav'), false)
  assert.equal(isAllowedAudioUrl('http://firebasestorage.googleapis.com/v0/b/feynman-mvp.appspot.com/o/audio%2Fx'), false)
  assert.equal(isAllowedAudioUrl('https://firebasestorage.googleapis.com/v0/b/other.appspot.com/o/audio%2Fx'), false)
  assert.equal(isAllowedAudioUrl('https://firebasestorage.googleapis.com/v0/b/feynman-mvp.appspot.com/o/webmVideos%2Fx'), false)
  assert.equal(isBoardPath('classes/abc/blackboards/def'), true)
  assert.equal(isBoardPath('users/abc'), false)
  assert.equal(isBoardPath('classes/../blackboards'), false)
})

async function runRemote(seconds) {
  const data = new Uint8Array(8000 * seconds)
  const wav = buildPcmWav(data, { sampleRate: 8000, channels: 1, bitsPerSample: 8 })
  let posts = 0
  const fetchImpl = async (url, init) => {
    if (String(url).includes('api.openai.com')) {
      posts += 1
      const form = init.body
      let sawTimestamps = false
      for (const [key] of form.entries()) {
        if (key.startsWith('timestamp_granularities')) sawTimestamps = true
      }
      if (sawTimestamps) {
        return new Response('unsupported response_format verbose_json', { status: 400 })
      }
      return new Response(JSON.stringify({ text: 'spoken' }), { status: 200 })
    }
    const header = init.headers.Range || ''
    const match = header.match(/bytes=(\d+)-(\d+)/)
    const start = Number(match[1])
    const end = Number(match[2])
    const slice = wav.subarray(start, Math.min(wav.byteLength, end + 1))
    return new Response(slice, {
      status: 206,
      headers: { 'content-range': `bytes ${start}-${start + slice.byteLength - 1}/${wav.byteLength}` }
    })
  }
  const result = await transcribeStoredAudio({
    url: AUDIO_URL,
    apiKey: 'test-key',
    fetchImpl,
    maxUploadBytes: 20_000_000
  })
  return { ...result, posts }
}
