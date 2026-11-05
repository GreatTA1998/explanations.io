// Timed transcript lines for a video: { start, end, text } in seconds.
// Words are included only when the transcription API returned them.
//
// Transcription starts when a video is recorded or uploaded, after the audio
// file exists. Opening an older video only reads a finished transcript.
// The OpenAI call runs on the server and may finish after the recording is
// saved. This function returns before that work is done, so the room is not blocked.

import { browser } from '$app/environment'
import { writable } from 'svelte/store'
import { getAuth } from 'firebase/auth'
import { updateFirestoreDoc } from './crud.js'

const MODEL_ID = 'gpt-4o-transcribe'
const TRANSCRIPT_VERSION = 2
const TRANSCRIBING = 'Transcribing this recording…'

const started = new Set()
let transcriptionQueue = Promise.resolve()
export const transcriptProblems = writable({})

export function formatTranscriptTime(seconds) {
  const safe = Number.isFinite(seconds) ? Math.max(0, seconds) : 0
  const whole = Math.floor(safe)
  const remain = whole % 60
  const minutes = Math.floor(whole / 60)
  if (minutes >= 60) {
    const hours = Math.floor(minutes / 60)
    const mins = minutes % 60
    return `${hours}:${String(mins).padStart(2, '0')}:${String(remain).padStart(2, '0')}`
  }
  return `${minutes}:${String(remain).padStart(2, '0')}`
}

function audioKeyOf(videoDoc) {
  return videoDoc?.audioRefFullPath || videoDoc?.audioDownloadURL || ''
}

export function readTranscriptProblem(videoDoc, problems) {
  const live = (problems && problems[audioKeyOf(videoDoc)]) || ''
  if (live) return live
  const saved = videoDoc?.transcript
  if (!saved || saved.v !== TRANSCRIPT_VERSION || saved.complete === true) return ''
  if (saved.audioKey && saved.audioKey !== audioKeyOf(videoDoc)) return ''
  return saved.error || ''
}

function rememberProblem(video, message) {
  const key = audioKeyOf(video)
  if (!key) return
  transcriptProblems.update((current) => ({ ...current, [key]: message }))
}

function forgetProblem(video) {
  const key = audioKeyOf(video)
  if (!key) return
  transcriptProblems.update((current) => {
    if (!current[key]) return current
    const next = { ...current }
    delete next[key]
    return next
  })
}

function plainTranscriptError(err) {
  const text = err instanceof Error ? err.message : ''
  const first = text.split('\n')[0].trim()
  if (
    first.startsWith('Could not ')
    || first.startsWith('This ')
    || first.startsWith('Only ')
  ) return first
  return 'Could not transcribe this recording.'
}

export function readCachedTranscript(videoDoc) {
  const saved = videoDoc?.transcript
  if (!saved || saved.v !== TRANSCRIPT_VERSION || saved.complete !== true) return null
  if (saved.audioKey !== audioKeyOf(videoDoc)) return null
  if (!Array.isArray(saved.segments)) return null
  return saved.segments
}

function enqueue(work) {
  const run = transcriptionQueue.then(work, work)
  transcriptionQueue = run.then(() => {}, () => {})
  return run
}

// Call this only after a new recording's audio file is in storage.
// The returned promise settles immediately. Transcription continues in the background.
export function startTranscriptForNewVideo(video) {
  if (!browser) return Promise.resolve()
  const audioDownloadURL = video?.audioDownloadURL
  const path = video?.path
  if (!audioDownloadURL || !path) return Promise.resolve()
  if (readCachedTranscript(video) != null) return Promise.resolve()

  const audioKey = audioKeyOf(video)
  if (started.has(audioKey)) return Promise.resolve()
  started.add(audioKey)

  rememberProblem(video, TRANSCRIBING)
  void enqueue(() => runServerTranscript(video, audioKey))
  return Promise.resolve()
}

async function runServerTranscript(video, audioKey) {
  const headers = { 'content-type': 'application/json' }
  const token = currentAccessToken()
  if (token) headers.authorization = `Bearer ${token}`
  // Start the request before the first await so a reload after save cannot cancel it.
  const responsePromise = fetch('/api/transcribe', {
    method: 'POST',
    keepalive: true,
    headers,
    body: JSON.stringify({
      audioDownloadURL: video.audioDownloadURL,
      path: video.path,
      audioKey
    })
  })
  try {
    const response = await responsePromise
    const body = await response.json().catch(() => ({}))
    if (body.skipped) {
      forgetProblem(video)
      return
    }
    if (typeof body.error === 'string' && body.error) {
      if (body.saved) rememberProblem(video, body.error)
      else await persistTranscriptProblem(video, audioKey, body.error)
      return
    }
    const segments = storedSegments(body.segments)
    if (!segments.length) {
      const message = 'No speech was found in this recording.'
      if (body.saved) forgetProblem(video)
      else await persistTranscriptProblem(video, audioKey, message)
      return
    }
    try {
      await persistTranscript(video, audioKey, segments)
    } catch (err) {
      if (body.saved) {
        forgetProblem(video)
        return
      }
      throw err
    }
  } catch (err) {
    started.delete(audioKey)
    const message = plainTranscriptError(err)
    console.error(message)
    await persistTranscriptProblem(video, audioKey, message)
  }
}

function currentAccessToken() {
  try {
    const token = getAuth().currentUser?.stsTokenManager?.accessToken
    return typeof token === 'string' ? token : ''
  } catch {
    return ''
  }
}

function storedSegments(segments) {
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

function storedWords(words) {
  if (!Array.isArray(words)) return []
  return words.flatMap((word) => {
    const spoken = typeof word?.word === 'string' ? word.word.trim() : ''
    const start = Number(word?.start)
    const end = Number(word?.end)
    if (!spoken || !Number.isFinite(start) || !Number.isFinite(end)) return []
    return [{ word: spoken, start, end }]
  })
}

async function persistTranscriptProblem(videoDoc, audioKey, message) {
  rememberProblem(videoDoc, message)
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

async function persistTranscript(videoDoc, audioKey, segments) {
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
  forgetProblem(videoDoc)
}
