
import { env } from '$env/dynamic/private'
import {
  MESSAGES,
  MODEL_ID,
  SafeTranscriptError,
  isBoardPath,
  transcribeStoredAudio
} from '$lib/server/transcribeAudio.js'

export const config = {
  maxDuration: 60,
  split: true
}

const FIREBASE_PROJECT = 'feynman-mvp'
const FIREBASE_API_KEY = 'AIzaSyB7XsbhYEd_4DQigc_hfnmdpcwlvzugPOw'
const TRANSCRIPT_VERSION = 2
const RATE_WINDOW_MS = 60_000
const RATE_MAX = 6
const rateHits = new Map()

export async function POST({ request }) {
  const apiKey = readApiKey()
  if (!apiKey) return json(200, { skipped: true })

  const token = bearerToken(request)
  const uid = token ? await firebaseUserId(token) : ''
  if (!token || !uid) {
    return json(401, { error: MESSAGES.failed })
  }
  if (!rateOk(uid)) return json(429, { error: MESSAGES.failed })

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
  if (!audioKey || typeof audioDownloadURL !== 'string' || !isBoardPath(path)) {
    return json(400, { error: MESSAGES.unreadable })
  }

  const board = await readBoard(path, token)
  if (!boardOwnsAudio(board, uid, audioDownloadURL, audioKey)) {
    return json(403, { error: MESSAGES.failed })
  }

  try {
    const result = await transcribeStoredAudio({ url: audioDownloadURL, apiKey })
    const saved = await persistTranscript({ path, audioKey, token, result })
    if (result.error) return json(200, { error: result.error, saved })
    return json(200, { segments: result.segments, saved })
  } catch (err) {
    const message = err instanceof SafeTranscriptError ? err.message : MESSAGES.failed
    if (!(err instanceof SafeTranscriptError)) console.error('transcription failed')
    const saved = await persistTranscript({
      path,
      audioKey,
      token,
      result: { error: message, segments: [] }
    })
    return json(200, { error: message, saved })
  }
}

function rateOk (uid) {
  const now = Date.now()
  const prior = (rateHits.get(uid) || []).filter((t) => now - t < RATE_WINDOW_MS)
  if (prior.length >= RATE_MAX) {
    rateHits.set(uid, prior)
    return false
  }
  prior.push(now)
  rateHits.set(uid, prior)
  return true
}

function boardOwnsAudio (board, uid, audioDownloadURL, audioKey) {
  if (!board || board.creatorUID !== uid) return false
  return board.audioDownloadURL === audioDownloadURL
    || board.audioRefFullPath === audioKey
    || board.audioDownloadURL === audioKey
}

async function readBoard (path, token, fetchImpl = fetch) {
  const encoded = path.split('/').map((part) => encodeURIComponent(part)).join('/')
  const endpoint = `https://firestore.googleapis.com/v1/projects/${FIREBASE_PROJECT}/databases/(default)/documents/${encoded}?key=${FIREBASE_API_KEY}`
  try {
    const response = await fetchImpl(endpoint, {
      headers: { authorization: `Bearer ${token}` }
    })
    if (!response.ok) return null
    const fields = (await response.json())?.fields || {}
    return {
      creatorUID: fields.creatorUID?.stringValue || '',
      audioDownloadURL: fields.audioDownloadURL?.stringValue || '',
      audioRefFullPath: fields.audioRefFullPath?.stringValue || ''
    }
  } catch {
    return null
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

async function firebaseUserId(token, fetchImpl = fetch) {
  try {
    const response = await fetchImpl(
      `https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${FIREBASE_API_KEY}`,
      { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ idToken: token }) }
    )
    if (!response.ok) return ''
    const uid = (await response.json())?.users?.[0]?.localId
    return typeof uid === 'string' && uid.length <= 128 ? uid : ''
  } catch {
    return ''
  }
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
  if (!token || !isBoardPath(path)) return false
  const transcript = transcriptBody(audioKey, result)
  const encoded = path.split('/').map((part) => encodeURIComponent(part)).join('/')
  const endpoint = `https://firestore.googleapis.com/v1/projects/${FIREBASE_PROJECT}/databases/(default)/documents/${encoded}?updateMask.fieldPaths=transcript&key=${FIREBASE_API_KEY}`
  try {
    const response = await fetch(endpoint, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${token}`
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
