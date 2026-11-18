import assert from 'node:assert/strict'
import test from 'node:test'
import {
  MAX_DURATION_SECONDS,
  MAX_REASONABLE_BYTES,
  MESSAGES,
  decideTranscription,
  isAllowedAudioUrl,
  isBoardPath,
  requestTranscription,
  segmentsFromTranscription,
  transcriptionFile,
  transcribeStoredAudio
} from './transcribeAudio.js'

const AUDIO_URL = 'https://firebasestorage.googleapis.com/v0/b/feynman-mvp.appspot.com/o/audio%2Fabc123?alt=media&token=t'

test('30 minutes boundary and size guards', () => {
  assert.equal(decideTranscription(MAX_DURATION_SECONDS, 1).transcribe, true)
  assert.equal(decideTranscription(MAX_DURATION_SECONDS + 1, null).code, 'tooLong')
  assert.equal(decideTranscription(null, MAX_REASONABLE_BYTES + 1).code, 'tooLarge')
  assert.equal(MESSAGES.empty.includes('speech'), true)
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
      { word: 'room', start: 0.5, end: 1.1 }
    ]
  }, 10, 2)
  assert.deepEqual(segments[0].words, [
    { word: 'hello', start: 10.1, end: 10.4 },
    { word: 'room', start: 10.5, end: 11.1 }
  ])
})

test('webm is sent as webm; only project audio URLs allowed', () => {
  const bytes = new Uint8Array([0x1a, 0x45, 0xdf, 0xa3, 0, 1, 2, 3])
  assert.equal(transcriptionFile(bytes, 'audio/webm').filename, 'audio.webm')
  assert.equal(isAllowedAudioUrl(AUDIO_URL), true)
  assert.equal(isAllowedAudioUrl('https://evil.example/audio'), false)
  assert.equal(isBoardPath('classes/abc/blackboards/xyz'), true)
})

test('requestTranscription asks for whisper-1 word times', async () => {
  let form
  await requestTranscription({
    bytes: new Uint8Array([1]),
    mimeType: 'audio/webm',
    filename: 'audio.webm',
    apiKey: 'k',
    timestamps: true,
    fetchImpl: async (_url, options) => {
      form = options.body
      return { ok: true, status: 200, text: async () => '{"text":"hi"}' }
    }
  })
  assert.equal(form.get('model'), 'whisper-1')
  assert.deepEqual(form.getAll('timestamp_granularities[]'), ['word', 'segment'])
})

test('timestamp rejection falls back to text-only', async () => {
  const bytes = new Uint8Array([0x1a, 0x45, 0xdf, 0xa3, 0, 0, 0, 0])
  let openaiCalls = 0
  const result = await transcribeStoredAudio({
    url: AUDIO_URL,
    apiKey: 'k',
    fetchImpl: async (url, options) => {
      if (String(url).includes('openai.com')) {
        openaiCalls += 1
        const entries = [...options.body.keys()]
        if (entries.includes('timestamp_granularities[]')) {
          return { ok: false, status: 400, text: async () => 'timestamp unsupported' }
        }
        return { ok: true, status: 200, text: async () => JSON.stringify({ text: 'hello room' }) }
      }
      return {
        ok: true,
        status: 200,
        headers: { get(name) {
          if (name === 'content-type') return 'audio/webm'
          if (name === 'content-length') return String(bytes.byteLength)
          return null
        } },
        arrayBuffer: async () => bytes.buffer,
        body: null
      }
    }
  })
  assert.equal(result.segments[0].text, 'hello room')
  assert.equal('words' in result.segments[0], false)
  assert.equal(openaiCalls, 2)
})
