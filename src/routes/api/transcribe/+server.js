import { env } from '$env/dynamic/private'
import {
  MESSAGES, MODEL_ID, SafeTranscriptError, isBoardPath, transcribeStoredAudio
} from '$lib/server/transcribeAudio.js'

export const config = { maxDuration: 60, split: true }

const PROJECT = 'feynman-mvp'
const API_KEY = 'AIzaSyB7XsbhYEd_4DQigc_hfnmdpcwlvzugPOw'
const VERSION = 2, RATE_WINDOW_MS = 60_000, RATE_MAX = 6
const rateHits = new Map()
const fsUrl = (path, extra = '') =>
  `https://firestore.googleapis.com/v1/projects/${PROJECT}/databases/(default)/documents/${path.split('/').map(encodeURIComponent).join('/')}?${extra}key=${API_KEY}`

export async function POST ({ request }) {
  const apiKey = String(env?.OPENAI_API_KEY ?? process.env.OPENAI_API_KEY ?? '').trim()
  if (!apiKey) {
    console.error('transcription skipped: OPENAI_API_KEY is not set')
    return json(200, { skipped: true, error: MESSAGES.unconfigured })
  }

  const token = bearer(request)
  const uid = token ? await firebaseUid(token) : ''
  if (!token || !uid) return json(401, { error: MESSAGES.failed })
  if (!rateOk(uid)) return json(429, { error: MESSAGES.failed })

  let payload
  try {
    const declared = Number(request.headers.get('content-length') || 0)
    if (Number.isFinite(declared) && declared > 100_000) return json(413, { error: MESSAGES.failed })
    payload = await request.json()
  } catch { return json(400, { error: MESSAGES.unreadable }) }

  const audioDownloadURL = payload?.audioDownloadURL, path = payload?.path
  const audioKey = usableKey(payload?.audioKey, audioDownloadURL)
  if (!audioKey || typeof audioDownloadURL !== 'string' || !isBoardPath(path)) return json(400, { error: MESSAGES.unreadable })

  const board = await readBoard(path, token)
  if (!board || board.creatorUID !== uid || board.audioDownloadURL !== audioDownloadURL) return json(403, { error: MESSAGES.failed })

  try {
    const result = await transcribeStoredAudio({ url: audioDownloadURL, apiKey })
    const saved = await persist(path, audioKey, token, result)
    return json(200, result.error ? { error: result.error, saved } : { segments: result.segments, saved })
  } catch (err) {
    const message = err instanceof SafeTranscriptError ? err.message : MESSAGES.failed
    if (!(err instanceof SafeTranscriptError)) console.error('transcription failed')
    return json(200, { error: message, saved: await persist(path, audioKey, token, { error: message, segments: [] }) })
  }
}

function rateOk (uid) {
  const now = Date.now(), prior = (rateHits.get(uid) || []).filter((t) => now - t < RATE_WINDOW_MS)
  if (prior.length >= RATE_MAX) { rateHits.set(uid, prior); return false }
  prior.push(now); rateHits.set(uid, prior); return true
}

async function readBoard (path, token) {
  try {
    const response = await fetch(fsUrl(path), { headers: { authorization: `Bearer ${token}` } })
    if (!response.ok) return null
    const f = (await response.json())?.fields || {}
    return { creatorUID: f.creatorUID?.stringValue || '', audioDownloadURL: f.audioDownloadURL?.stringValue || '' }
  } catch { return null }
}

function usableKey (audioKey, audioDownloadURL) {
  if (typeof audioKey === 'string' && audioKey.trim() && audioKey.length <= 2000 && !/[\r\n]/.test(audioKey)) return audioKey
  return typeof audioDownloadURL === 'string' && audioDownloadURL.length <= 2000 ? audioDownloadURL : ''
}

function bearer (request) {
  const m = (request.headers.get('authorization') || '').match(/^Bearer ([A-Za-z0-9\-_]+\.[A-Za-z0-9\-_]+\.[A-Za-z0-9\-_]+)$/)
  return m ? m[1] : ''
}

async function firebaseUid (token) {
  try {
    const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${API_KEY}`, {
      method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ idToken: token })
    })
    if (!response.ok) return ''
    const uid = (await response.json())?.users?.[0]?.localId
    return typeof uid === 'string' && uid.length <= 128 ? uid : ''
  } catch { return '' }
}

async function persist (path, audioKey, token, result) {
  if (!token || !isBoardPath(path)) return false
  const createdAt = new Date().toISOString()
  const body = result.error
    ? { v: VERSION, complete: false, error: result.error, audioKey, createdAt }
    : { v: VERSION, complete: true, engine: 'openai', model: MODEL_ID, audioKey, segments: result.segments, createdAt }
  try {
    const response = await fetch(fsUrl(path, 'updateMask.fieldPaths=transcript&'), {
      method: 'PATCH', headers: { 'content-type': 'application/json', authorization: `Bearer ${token}` },
      body: JSON.stringify({ fields: { transcript: fsVal(body) } })
    })
    return response.ok
  } catch { return false }
}

function fsVal (value) {
  if (value === null) return { nullValue: null }
  if (typeof value === 'boolean') return { booleanValue: value }
  if (typeof value === 'number') return Number.isInteger(value) ? { integerValue: String(value) } : { doubleValue: value }
  if (typeof value === 'string') return { stringValue: value }
  if (Array.isArray(value)) return { arrayValue: { values: value.map(fsVal) } }
  if (typeof value === 'object') {
    const fields = {}
    for (const [k, v] of Object.entries(value)) if (v !== undefined) fields[k] = fsVal(v)
    return { mapValue: { fields } }
  }
  return { nullValue: null }
}

function json (status, body) {
  return new Response(JSON.stringify(body), { status, headers: { 'content-type': 'application/json' } })
}
