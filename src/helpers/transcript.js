import { browser } from '$app/environment'
import { writable } from 'svelte/store'
import { getAuth } from 'firebase/auth'
import { updateFirestoreDoc } from './crud.js'

const V = 2, TRANSCRIBING = 'Transcribing this recording…', FAIL = 'Could not transcribe this recording.'
const started = new Set()
let queue = Promise.resolve()
export const transcriptProblems = writable({})
const keyOf = (v) => v?.audioRefFullPath || v?.audioDownloadURL || ''

export function readTranscriptProblem (videoDoc, problems) {
  const live = (problems && problems[keyOf(videoDoc)]) || '', s = videoDoc?.transcript
  if (live) return live
  if (!s || s.v !== V || s.complete === true || (s.audioKey && s.audioKey !== keyOf(videoDoc))) return ''
  return s.error || ''
}

export function readCachedTranscript (videoDoc) {
  const s = videoDoc?.transcript
  if (!s || s.v !== V || s.complete !== true || s.audioKey !== keyOf(videoDoc)) return null
  return Array.isArray(s.segments) ? s.segments : null
}

function setProblem (video, message) {
  const key = keyOf(video)
  if (!key) return
  transcriptProblems.update((c) => message ? { ...c, [key]: message }
    : (!c[key] ? c : ((n) => (delete n[key], n))({ ...c })))
}

export function startTranscriptForNewVideo (video) {
  if (!browser || !video?.audioDownloadURL || !video?.path || readCachedTranscript(video) != null) return Promise.resolve()
  const audioKey = keyOf(video)
  if (started.has(audioKey)) return Promise.resolve()
  started.add(audioKey); setProblem(video, TRANSCRIBING)
  const run = queue.then(() => kick(video, audioKey), () => kick(video, audioKey))
  queue = run.then(() => {}, () => {})
  return Promise.resolve()
}

async function kick (video, audioKey) {
  let token = ''
  try { token = getAuth().currentUser?.stsTokenManager?.accessToken || '' } catch {}
  if (typeof token !== 'string' || !token) { started.delete(audioKey); return fail(video, audioKey, FAIL) }
  try {
    const response = await fetch('/api/transcribe', {
      method: 'POST', keepalive: true,
      headers: { 'content-type': 'application/json', authorization: `Bearer ${token}` },
      body: JSON.stringify({ audioDownloadURL: video.audioDownloadURL, path: video.path, audioKey })
    })
    const body = await response.json().catch(() => ({}))
    if (response.status === 401) { started.delete(audioKey); return fail(video, audioKey, FAIL) }
    if (body.skipped) return setProblem(video, '')
    if (typeof body.error === 'string' && body.error) return body.saved ? setProblem(video, body.error) : fail(video, audioKey, body.error)
    setProblem(video, '')
  } catch (err) {
    started.delete(audioKey)
    const first = (err instanceof Error ? err.message : '').split('\n')[0].trim()
    const message = /^(Could not |This |Only )/.test(first) ? first : FAIL
    console.error(message); await fail(video, audioKey, message)
  }
}

async function fail (video, audioKey, message) {
  setProblem(video, message)
  if (!video?.path) return
  try { await updateFirestoreDoc(video.path, { transcript: { v: V, complete: false, error: message, audioKey, createdAt: new Date().toISOString() } }) }
  catch (err) { console.error(message, err) }
}
