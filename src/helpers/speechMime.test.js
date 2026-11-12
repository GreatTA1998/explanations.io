import assert from 'node:assert/strict'
import test from 'node:test'
import {
  SPEECH_BITRATE,
  chooseSpeechFormat,
  playbackAcceptsSpeech,
  speechStoragePath,
  speechUploadMetadata,
  transcriptionFile
} from './speechMime.js'

test('opus in webm is used when the browser can encode it', () => {
  const format = chooseSpeechFormat(() => true)
  assert.equal(format.mimeType, 'audio/webm;codecs=opus')
  assert.equal(format.fileExtension, 'webm')
  assert.equal(format.audioBitsPerSecond, SPEECH_BITRATE)
  assert.equal(SPEECH_BITRATE, 24_000)
})

test('aac in mp4 is used only when opus is unavailable', () => {
  const format = chooseSpeechFormat((type) => type === 'audio/mp4' || type === 'audio/wav')
  assert.equal(format.mimeType, 'audio/mp4')
  assert.equal(format.fileExtension, 'mp4')
  assert.equal(format.audioBitsPerSecond, SPEECH_BITRATE)
})

test('a new recording is never wav', () => {
  assert.equal(chooseSpeechFormat((type) => type === 'audio/wav'), null)
  assert.equal(chooseSpeechFormat(() => false), null)
  const both = chooseSpeechFormat((type) => (
    type === 'audio/wav' || type === 'audio/webm;codecs=opus' || type === 'audio/mp4'
  ))
  assert.equal(both.fileExtension, 'webm')
  assert.equal(both.mimeType.includes('wav'), false)
})

test('playback accepts wav, webm, and mp4', () => {
  for (const type of [
    'audio/wav',
    'audio/wave',
    'audio/x-wav',
    'audio/webm',
    'audio/webm;codecs=opus',
    'video/webm',
    'audio/mp4',
    'audio/mp4;codecs=mp4a.40.2',
    'audio/m4a'
  ]) {
    assert.equal(playbackAcceptsSpeech(type), true, type)
  }
  assert.equal(playbackAcceptsSpeech('audio/mpeg'), false)
  assert.equal(playbackAcceptsSpeech(''), false)
})

test('webm and mp4 are stored with their real type and wav keeps its old path', () => {
  assert.equal(speechStoragePath('abc', 'audio/webm;codecs=opus'), 'audio/abc.webm')
  assert.equal(speechStoragePath('abc', 'audio/mp4'), 'audio/abc.mp4')
  assert.equal(speechStoragePath('abc', 'audio/wav'), 'audio/abc')
  assert.deepEqual(speechUploadMetadata('audio/webm;codecs=opus'), {
    contentType: 'audio/webm;codecs=opus',
    customMetadata: { extension: '.webm' }
  })
  assert.deepEqual(speechUploadMetadata('audio/mp4'), {
    contentType: 'audio/mp4',
    customMetadata: { extension: '.mp4' }
  })
  assert.deepEqual(speechUploadMetadata('audio/wav'), { contentType: 'audio/wav' })
})

test('transcription sends webm and mp4 as themselves', () => {
  const webm = new Uint8Array([0x1a, 0x45, 0xdf, 0xa3, 1, 2, 3, 4])
  assert.deepEqual(transcriptionFile(webm, 'audio/webm;codecs=opus'), {
    mimeType: 'audio/webm;codecs=opus',
    filename: 'audio.webm'
  })
  assert.deepEqual(transcriptionFile(webm, 'audio/wav'), {
    mimeType: 'audio/webm',
    filename: 'audio.webm'
  })

  const mp4 = new Uint8Array([
    0x00, 0x00, 0x00, 0x18,
    0x66, 0x74, 0x79, 0x70,
    0x6d, 0x70, 0x34, 0x32
  ])
  assert.deepEqual(transcriptionFile(mp4, ''), {
    mimeType: 'audio/mp4',
    filename: 'audio.mp4'
  })
  assert.deepEqual(transcriptionFile(mp4, 'audio/mp4;codecs=mp4a.40.2'), {
    mimeType: 'audio/mp4;codecs=mp4a.40.2',
    filename: 'audio.mp4'
  })

  const wav = new Uint8Array(12)
  wav.set([0x52, 0x49, 0x46, 0x46], 0)
  wav.set([0x57, 0x41, 0x56, 0x45], 8)
  assert.deepEqual(transcriptionFile(wav, 'application/octet-stream'), {
    mimeType: 'audio/wav',
    filename: 'audio.wav'
  })
})
