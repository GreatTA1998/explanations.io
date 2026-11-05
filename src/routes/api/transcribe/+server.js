// New recordings ask this route to transcribe audio that is already in Storage.
// OPENAI_API_KEY stays on the server. A missing key skips the job.

import { env } from '$env/dynamic/private'
import {
  MESSAGES,
  MODEL_ID,
  SafeTranscriptError,
  isBoardPath,
  transcribeStoredAudio
} from '$lib/server/transcribeAudio.js'

export const config = {
  maxDuration: 300,
  split: true
}

const FIREBASE_PROJECT = 'feynman-mvp'
// Same public web config as src/database.js. This is not the OpenAI key.
const FIREBASE_API_KEY = 'AIzaSyB7XsbhYEd_4DQigc_hfnmdpcwlvzugPOw'
const TRANSCRIPT_VERSION = 2

export async function POST({ request }) {
  const apiKey = readApiKey()
  if (!apiKey) return json(200, { skipped: true })

  let payload
  try {
    const declared = Number(request.headers.get('content-length') || 0)
    if (Number.isFinite(declared) && declared > 100_000) {
      return json(413, { error: MESSAGES.failed })
    }
    payload = await request.json()
  } catch {
    return json(400, { error: MESSAGES.unreadable })
  }

  const audioDownloadURL = payload?.audioDownloadURL
  const path = payload?.path
  const audioKey = usableAudioKey(payload?.audioKey, audioDownloadURL)
  if (!audioKey || typeof audioDownloadURL !== 'string') {
    return json(400, { error: MESSAGES.unreadable })
  }

  try {
    const result = await transcribeStoredAudio({ url: audioDownloadURL, apiKey })
    const saved = await persistTranscript({
      path,
      audioKey,
      token: bearerToken(request),
      result
    })
    if (result.error) return json(200, { error: result.error, saved })
    return json(200, { segments: result.segments, saved })
  } catch (err) {
    const message = err instanceof SafeTranscriptError ? err.message : MESSAGES.failed
    if (!(err instanceof SafeTranscriptError)) console.error('transcription failed')
    const saved = await persistTranscript({
      path,
      audioKey,
      token: bearerToken(request),
      result: { error: message, segments: [] }
    })
    return json(200, { error: message, saved })
  }
}

function readApiKey() {
  const value = env?.OPENAI_API_KEY ?? process.env.OPENAI_API_KEY ?? ''
  return typeof value === 'string' ? value.trim() : ''
}

function usableAudioKey(audioKey, audioDownloadURL) {
  if (typeof audioKey === 'string' && audioKey.trim() && audioKey.length <= 2000 && !/[\r\n]/.test(audioKey)) {
    return audioKey
  }
  if (typeof audioDownloadURL === 'string' && audioDownloadURL.length <= 2000) return audioDownloadURL
  return ''
}

function bearerToken(request) {
  const header = request.headers.get('authorization') || ''
  const match = header.match(/^Bearer ([A-Za-z0-9\-_]+\.[A-Za-z0-9\-_]+\.[A-Za-z0-9\-_]+)$/)
  return match ? match[1] : ''
}

function transcriptBody(audioKey, result) {
  const createdAt = new Date().toISOString()
  if (result.error) {
    return {
      v: TRANSCRIPT_VERSION,
      complete: false,
      error: result.error,
      audioKey,
      createdAt
    }
  }
  return {
    v: TRANSCRIPT_VERSION,
    complete: true,
    engine: 'openai',
    model: MODEL_ID,
    audioKey,
    segments: result.segments,
    createdAt
  }
}

async function persistTranscript({ path, audioKey, token, result }) {
  if (!isBoardPath(path)) return false
  const transcript = transcriptBody(audioKey, result)
  const encoded = path.split('/').map((part) => encodeURIComponent(part)).join('/')
  const endpoint = `https://firestore.googleapis.com/v1/projects/${FIREBASE_PROJECT}/databases/(default)/documents/${encoded}?updateMask.fieldPaths=transcript&key=${FIREBASE_API_KEY}`
  try {
    const response = await fetch(endpoint, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        ...(token ? { authorization: `Bearer ${token}` } : {})
      },
      body: JSON.stringify({
        fields: {
          transcript: firestoreValue(transcript)
        }
      })
    })
    return response.ok
  } catch {
    return false
  }
}

function firestoreValue(value) {
  if (value === null) return { nullValue: null }
  if (typeof value === 'boolean') return { booleanValue: value }
  if (typeof value === 'number') {
    if (Number.isInteger(value)) return { integerValue: String(value) }
    return { doubleValue: value }
  }
  if (typeof value === 'string') return { stringValue: value }
  if (Array.isArray(value)) {
    return { arrayValue: { values: value.map((entry) => firestoreValue(entry)) } }
  }
  if (typeof value === 'object') {
    const fields = {}
    for (const [key, entry] of Object.entries(value)) {
      if (entry === undefined) continue
      fields[key] = firestoreValue(entry)
    }
    return { mapValue: { fields } }
  }
  return { nullValue: null }
}

function json(status, body) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json' }
  })
}
