import { browser } from '$app/environment'
import { writable } from 'svelte/store'
import { getAuth } from 'firebase/auth'
import { updateFirestoreDoc } from './crud.js'

const MODEL_ID = 'whisper-1'
const TRANSCRIPT_VERSION = 2
const TRANSCRIBING = 'Transcribing this recording…'

const started = new Set()
let queue = Promise.resolve()
export const transcriptProblems = writable({})

function audioKeyOf (videoDoc) {
  return videoDoc?.audioRefFullPath || videoDoc?.audioDownloadURL || ''
}

export function readTranscriptProblem (videoDoc, problems) {
  const live = (problems && problems[audioKeyOf(videoDoc)]) || ''
  if (live) return live
  const saved = videoDoc?.transcript
  if (!saved || saved.v !== TRANSCRIPT_VERSION || saved.complete === true) return ''
  if (saved.audioKey && saved.audioKey !== audioKeyOf(videoDoc)) return ''
  return saved.error || ''
}

function setProblem (video, message) {
  const key = audioKeyOf(video)
  if (!key) return
  transcriptProblems.update((current) => (
    message ? { ...current, [key]: message } : (() => {
      if (!current[key]) return current
      const next = { ...current }
      delete next[key]
      return next
    })()
  ))
}

function plainError (err) {
  const first = (err instanceof Error ? err.message : '').split('\n')[0].trim()
  if (first.startsWith('Could not ') || first.startsWith('This ') || first.startsWith('Only ')) return first
  return 'Could not transcribe this recording.'
}

export function readCachedTranscript (videoDoc) {
  const saved = videoDoc?.transcript
  if (!saved || saved.v !== TRANSCRIPT_VERSION || saved.complete !== true) return null
  if (saved.audioKey !== audioKeyOf(videoDoc)) return null
  return Array.isArray(saved.segments) ? saved.segments : null
}

export function startTranscriptForNewVideo (video) {
  if (!browser) return Promise.resolve()
  if (!video?.audioDownloadURL || !video?.path) return Promise.resolve()
  if (readCachedTranscript(video) != null) return Promise.resolve()
  const audioKey = audioKeyOf(video)
  if (started.has(audioKey)) return Promise.resolve()
  started.add(audioKey)
  setProblem(video, TRANSCRIBING)
  const run = queue.then(() => runServerTranscript(video, audioKey), () => runServerTranscript(video, audioKey))
  queue = run.then(() => {}, () => {})
  return Promise.resolve()
}

async function runServerTranscript (video, audioKey) {
  let token = ''
  try { token = getAuth().currentUser?.stsTokenManager?.accessToken || '' } catch (_) {}
  if (typeof token !== 'string' || !token) {
    started.delete(audioKey)
    await persistProblem(video, audioKey, 'Could not transcribe this recording.')
    return
  }
  try {
    const response = await fetch('/api/transcribe', {
      method: 'POST',
      keepalive: true,
      headers: { 'content-type': 'application/json', authorization: `Bearer ${token}` },
      body: JSON.stringify({
        audioDownloadURL: video.audioDownloadURL,
        path: video.path,
        audioKey
      })
    })
    const body = await response.json().catch(() => ({}))
    if (response.status === 401) {
      started.delete(audioKey)
      await persistProblem(video, audioKey, 'Could not transcribe this recording.')
      return
    }
    if (body.skipped) {
      setProblem(video, '')
      return
    }
    if (typeof body.error === 'string' && body.error) {
      if (body.saved) setProblem(video, body.error)
      else await persistProblem(video, audioKey, body.error)
      return
    }
    const segments = storedSegments(body.segments)
    if (!segments.length) {
      const message = 'No speech was found in this recording.'
      if (body.saved) setProblem(video, '')
      else await persistProblem(video, audioKey, message)
      return
    }
    try {
      await persistOk(video, audioKey, segments)
    } catch (err) {
      if (body.saved) {
        setProblem(video, '')
        return
      }
      throw err
    }
  } catch (err) {
    started.delete(audioKey)
    const message = plainError(err)
    console.error(message)
    await persistProblem(video, audioKey, message)
  }
}

function storedSegments (segments) {
  if (!Array.isArray(segments)) return []
  return segments.flatMap((segment) => {
    const start = Number(segment?.start)
    const end = Number(segment?.end)
    const text = String(segment?.text || '').replace(/\s+/g, ' ').trim()
    if (!text || !Number.isFinite(start) || !Number.isFinite(end)) return []
    const stored = { start, end: Math.max(start, end), text }
    const words = storedWords(segment?.words)
    if (words.length) stored.words = words
    return [stored]
  })
}

function storedWords (words) {
  if (!Array.isArray(words)) return []
  return words.flatMap((word) => {
    const spoken = typeof word?.word === 'string' ? word.word.trim() : ''
    const start = Number(word?.start)
    const end = Number(word?.end)
    if (!spoken || !Number.isFinite(start) || !Number.isFinite(end)) return []
    return [{ word: spoken, start, end }]
  })
}

async function persistProblem (videoDoc, audioKey, message) {
  setProblem(videoDoc, message)
  if (!videoDoc?.path) return
  try {
    await updateFirestoreDoc(videoDoc.path, {
      transcript: {
        v: TRANSCRIPT_VERSION,
        complete: false,
        error: message,
        audioKey,
        createdAt: new Date().toISOString()
      }
    })
  } catch (err) {
    console.error(message, err)
  }
}

async function persistOk (videoDoc, audioKey, segments) {
  if (!videoDoc?.path) return
  await updateFirestoreDoc(videoDoc.path, {
    transcript: {
      v: TRANSCRIPT_VERSION,
      complete: true,
      engine: 'openai',
      model: MODEL_ID,
      audioKey,
      segments,
      createdAt: new Date().toISOString()
    }
  })
  setProblem(videoDoc, '')
}
