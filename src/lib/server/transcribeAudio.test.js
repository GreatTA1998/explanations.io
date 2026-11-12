import assert from 'node:assert/strict'
import test from 'node:test'
import {
  MAX_DURATION_SECONDS,
  MAX_REASONABLE_BYTES,
  MAX_UPLOAD_BYTES,
  MESSAGES,
  buildPcmWav,
  containerDurationSeconds,
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

test('webm duration follows Info/Duration, in timecode units', () => {
  const webm = webmFile({ durationTicks: 4000, clusters: [cluster(1000)] })
  assert.equal(containerDurationSeconds(webm, false), 4)
  assert.equal(containerDurationSeconds(webm.subarray(0, 32), false), null)
})

test('webm without a duration element uses the last block of the whole file', () => {
  const webm = webmFile({
    clusters: [unknownCluster(0, 0), unknownCluster(12000, 500)]
  })
  assert.equal(containerDurationSeconds(webm, true), 12.5)
  assert.equal(containerDurationSeconds(webm, false), null)
})

test('mp4 duration follows the movie header, even from a prefix', () => {
  const mp4 = movieMp4(1000, 4500)
  assert.equal(containerDurationSeconds(mp4, false), 4.5)
})

test('fragmented mp4 duration is the last sample, and a prefix is not the whole recording', () => {
  const mp4 = fragmentedMp4({
    timescale: 1000,
    fragments: [
      { base: 0, samples: [1000, 1000] },
      { base: 2000, samples: [500] }
    ]
  })
  assert.equal(containerDurationSeconds(mp4, true), 2.5)
  assert.equal(containerDurationSeconds(mp4, false), null)
  const defaults = fragmentedMp4({ timescale: 1000, fragments: [{ base: 0, count: 3, defaultDuration: 500 }] })
  assert.equal(containerDurationSeconds(defaults, true), 1.5)
})

test('webm and mp4 speech is sent with its own type, not as wav', async () => {
  const webm = new Uint8Array([0x1a, 0x45, 0xdf, 0xa3, 9, 8, 7, 6])
  const mp4 = new Uint8Array([
    0x00, 0x00, 0x00, 0x18,
    0x66, 0x74, 0x79, 0x70,
    0x6d, 0x70, 0x34, 0x32
  ])

  const webmPost = await postStoredAudio(webm, 'audio/webm;codecs=opus')
  assert.equal(webmPost.name, 'audio.webm')
  assert.equal(webmPost.type, 'audio/webm;codecs=opus')
  assert.equal(webmPost.type.includes('wav'), false)

  const mp4Post = await postStoredAudio(mp4, 'audio/mp4')
  assert.equal(mp4Post.name, 'audio.mp4')
  assert.equal(mp4Post.type, 'audio/mp4')
  assert.equal(mp4Post.type.includes('wav'), false)
})

test('a text-only webm transcript keeps the recording span', async () => {
  const webm = webmFile({ durationTicks: 3250 })
  const result = await postStoredAudio(webm, 'audio/webm;codecs=opus')
  assert.equal(result.segments[0].end, 3.25)
  assert.equal(result.segments[0].start, 0)
  assert.equal('words' in result.segments[0], false)
})

test('a text-only fragmented mp4 transcript keeps the recording span', async () => {
  const mp4 = fragmentedMp4({ timescale: 16000, fragments: [{ base: 0, samples: [16000, 8000] }] })
  const result = await postStoredAudio(mp4, 'audio/mp4')
  assert.equal(result.segments[0].end, 1.5)
  assert.equal(result.segments[0].start, 0)
  assert.equal('words' in result.segments[0], false)
})

test('compressed audio past 30 minutes is refused before it is sent', async () => {
  const webm = webmFile({ durationTicks: (MAX_DURATION_SECONDS + 1) * 1000 })
  let posts = 0
  const fetchImpl = async (url, init) => {
    if (String(url).includes('api.openai.com')) {
      posts += 1
      return new Response(JSON.stringify({ text: 'spoken' }), { status: 200 })
    }
    return new Response(webm, {
      status: 200,
      headers: { 'content-type': 'audio/webm', 'content-length': String(webm.byteLength) }
    })
  }
  const result = await transcribeStoredAudio({ url: AUDIO_URL, apiKey: 'test-key', fetchImpl })
  assert.equal(posts, 0)
  assert.equal(result.error, MESSAGES.tooLong)
  assert.equal(result.segments.length, 0)
})

test('duration that lives past the first range request still times the transcript', async () => {
  const webm = paddedWebm(90000)
  const seen = []
  const fetchImpl = async (url, init) => {
    if (String(url).includes('api.openai.com')) {
      const form = init.body
      let timestamps = false
      for (const [key] of form.entries()) {
        if (key.startsWith('timestamp_granularities')) timestamps = true
      }
      if (timestamps) return new Response('unsupported verbose_json', { status: 400 })
      return new Response(JSON.stringify({ text: 'spoken' }), { status: 200 })
    }
    const header = init.headers.Range || ''
    const match = header.match(/bytes=(\d+)-(\d+)/)
    const start = Number(match[1])
    const end = Number(match[2])
    seen.push([start, end])
    const slice = webm.subarray(start, Math.min(webm.byteLength, end + 1))
    return new Response(slice, {
      status: 206,
      headers: {
        'content-type': 'audio/webm',
        'content-range': `bytes ${start}-${start + slice.byteLength - 1}/${webm.byteLength}`
      }
    })
  }
  const result = await transcribeStoredAudio({ url: AUDIO_URL, apiKey: 'test-key', fetchImpl })
  assert.equal(result.error, '')
  assert.equal(result.segments[0].end, 90)
  assert.ok(webm.byteLength > 65536)
  assert.ok(seen.length >= 2)

  seen.length = 0
  const tooLong = paddedWebm((MAX_DURATION_SECONDS + 1) * 1000)
  const refused = await transcribeStoredAudio({
    url: AUDIO_URL,
    apiKey: 'test-key',
    fetchImpl: async (url, init) => {
      if (String(url).includes('api.openai.com')) {
        seen.push('post')
        return new Response(JSON.stringify({ text: 'spoken' }), { status: 200 })
      }
      const header = init && init.headers && init.headers.Range || ''
      const match = header.match(/bytes=(\d+)-(\d+)/)
      const start = Number(match[1])
      const end = Number(match[2])
      const slice = tooLong.subarray(start, Math.min(tooLong.byteLength, end + 1))
      return new Response(slice, {
        status: 206,
        headers: { 'content-range': `bytes ${start}-${start + slice.byteLength - 1}/${tooLong.byteLength}` }
      })
    }
  })
  assert.equal(refused.error, MESSAGES.tooLong)
  assert.equal(seen.includes('post'), false)
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

async function postStoredAudio(bytes, contentType) {
  let posted = null
  const fetchImpl = async (url, init) => {
    if (String(url).includes('api.openai.com')) {
      const form = init.body
      let sawTimestamps = false
      let file = null
      for (const [key, value] of form.entries()) {
        if (key === 'file') file = value
        if (key.startsWith('timestamp_granularities')) sawTimestamps = true
      }
      if (sawTimestamps) return new Response('unsupported verbose_json', { status: 400 })
      posted = { name: file.name, type: file.type }
      return new Response(JSON.stringify({ text: 'spoken' }), { status: 200 })
    }
    return new Response(bytes, {
      status: 200,
      headers: {
        'content-type': contentType,
        'content-length': String(bytes.byteLength)
      }
    })
  }
  const result = await transcribeStoredAudio({
    url: AUDIO_URL,
    apiKey: 'test-key',
    fetchImpl
  })
  assert.equal(result.error, '')
  assert.equal(result.segments[0].text, 'spoken')
  return { name: posted.name, type: posted.type, segments: result.segments }
}

function concatBytes(parts) {
  const size = parts.reduce((sum, part) => sum + part.length, 0)
  const out = new Uint8Array(size)
  let offset = 0
  for (const part of parts) {
    out.set(part, offset)
    offset += part.length
  }
  return out
}

function ebmlId(id) {
  let width = 1
  if (id > 0xFF) width = 2
  if (id > 0xFFFF) width = 3
  if (id > 0xFFFFFF) width = 4
  const bytes = new Uint8Array(width)
  let rest = id
  for (let i = width - 1; i >= 0; i -= 1) {
    bytes[i] = rest & 0xFF
    rest = Math.floor(rest / 256)
  }
  return bytes
}

function ebmlSize(value) {
  let width = 1
  let max = 126
  while (value > max) {
    width += 1
    max = 2 ** (7 * width) - 2
  }
  const bytes = new Uint8Array(width)
  let rest = value
  for (let i = width - 1; i >= 1; i -= 1) {
    bytes[i] = rest & 0xFF
    rest = Math.floor(rest / 256)
  }
  bytes[0] = (1 << (8 - width)) + rest
  return bytes
}

function ebmlElement(id, payload) {
  const idBytes = ebmlId(id)
  const sizeBytes = ebmlSize(payload.length)
  const out = new Uint8Array(idBytes.length + sizeBytes.length + payload.length)
  out.set(idBytes, 0)
  out.set(sizeBytes, idBytes.length)
  out.set(payload, idBytes.length + sizeBytes.length)
  return out
}

function ebmlUint(id, value) {
  let width = 1
  let max = 0xFF
  while (value > max && width < 8) {
    width += 1
    max = max * 256 + 0xFF
  }
  const payload = new Uint8Array(width)
  let rest = value
  for (let i = width - 1; i >= 0; i -= 1) {
    payload[i] = rest & 0xFF
    rest = Math.floor(rest / 256)
  }
  return ebmlElement(id, payload)
}

function ebmlFloat(id, value) {
  const payload = new Uint8Array(8)
  new DataView(payload.buffer).setFloat64(0, value)
  return ebmlElement(id, payload)
}

function clusterBody(timestamp, rel = 0) {
  const block = new Uint8Array(4)
  block[0] = 0x81
  new DataView(block.buffer).setInt16(1, rel)
  block[3] = 0x80
  return concatBytes([ebmlUint(0xE7, timestamp), ebmlElement(0xA3, block)])
}

function cluster(timestamp, rel = 0) {
  return ebmlElement(0x1F43B675, clusterBody(timestamp, rel))
}

function unknownCluster(timestamp, rel) {
  return concatBytes([ebmlId(0x1F43B675), new Uint8Array([0xFF]), clusterBody(timestamp, rel)])
}

function webmFile({ durationTicks = null, clusters = [] }) {
  const infoParts = [ebmlUint(0x2AD7B1, 1000000)]
  if (durationTicks != null) infoParts.push(ebmlFloat(0x4489, durationTicks))
  const segment = concatBytes([
    ebmlId(0x18538067),
    new Uint8Array([0x01, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF]),
    ebmlElement(0x1549A966, concatBytes(infoParts)),
    ...clusters
  ])
  return concatBytes([ebmlElement(0x1A45DFA3, ebmlUint(0x4286, 1)), segment])
}

function paddedWebm(timestamp) {
  const pad = ebmlElement(0xEC, new Uint8Array(70000))
  return webmFile({ clusters: [pad, cluster(timestamp)] })
}

function mp4Box(type, payload) {
  const out = new Uint8Array(8 + payload.length)
  const view = new DataView(out.buffer)
  view.setUint32(0, out.length)
  out.set(Uint8Array.from(type, (char) => char.charCodeAt(0)), 4)
  out.set(payload, 8)
  return out
}

function mp4Full(type, flags, payload) {
  const body = new Uint8Array(4 + payload.length)
  new DataView(body.buffer).setUint32(0, flags)
  body.set(payload, 4)
  return mp4Box(type, body)
}

function headerTimes(timescale, duration) {
  const fields = new Uint8Array(16)
  const view = new DataView(fields.buffer)
  view.setUint32(8, timescale)
  view.setUint32(12, duration)
  return fields
}

function movieMp4(timescale, duration) {
  const moov = mp4Box('moov', concatBytes([
    mp4Full('mvhd', 0, headerTimes(timescale, duration)),
    mp4Box('trak', mp4Box('mdia', mp4Full('mdhd', 0, headerTimes(timescale, duration))))
  ]))
  return concatBytes([mp4Box('ftyp', Uint8Array.from('isom', (char) => char.charCodeAt(0))), moov])
}

function fragmentedMp4({ timescale, fragments }) {
  const moov = mp4Box('moov', concatBytes([
    mp4Full('mvhd', 0, headerTimes(1000, 0)),
    mp4Box('trak', mp4Box('mdia', mp4Full('mdhd', 0, headerTimes(timescale, 0)))),
    mp4Box('mvex', mp4Full('trex', 0, uint32s(1, 1, 0, 0, 0)))
  ]))
  const pieces = fragments.map((fragment) => {
    const tfhdFlags = fragment.defaultDuration ? 0x8 : 0
    const tfhdBody = fragment.defaultDuration ? uint32s(1, fragment.defaultDuration) : uint32s(1)
    const trun = fragment.samples
      ? mp4Full('trun', 0x100, concatBytes([uint32s(fragment.samples.length), uint32s(...fragment.samples)]))
      : mp4Full('trun', 0, uint32s(fragment.count))
    return mp4Box('moof', mp4Box('traf', concatBytes([
      mp4Full('tfhd', tfhdFlags, tfhdBody),
      mp4Full('tfdt', 0, uint32s(fragment.base)),
      trun
    ])))
  })
  return concatBytes([mp4Box('ftyp', Uint8Array.from('isom', (char) => char.charCodeAt(0))), moov, ...pieces])
}

function uint32s(...values) {
  const out = new Uint8Array(values.length * 4)
  const view = new DataView(out.buffer)
  values.forEach((value, index) => view.setUint32(index * 4, value))
  return out
}

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
