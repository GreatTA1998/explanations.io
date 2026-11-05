// Connects the visible video's <audio> element to the transcript panel.
// Players register a seek function. The transcript publishes the current time
// and asks for a seek. Keyed by video path so a page with several videos
// only moves the one beside the transcript.

const players = new Map()

function ensure(path) {
  let entry = players.get(path)
  if (!entry) {
    entry = {
      apis: new Set(),
      listeners: new Set(),
      time: null,
      duration: 0
    }
    players.set(path, entry)
  }
  return entry
}

function release(path, entry) {
  if (entry.apis.size === 0 && entry.listeners.size === 0) {
    players.delete(path)
  }
}

export function playbackPathOf(video) {
  if (!video) return ''
  return video.path || video.id || ''
}

export function registerPlayback(path, api) {
  if (!path || !api) return () => {}
  const entry = ensure(path)
  entry.apis.add(api)
  return () => {
    entry.apis.delete(api)
    release(path, entry)
  }
}

export function subscribePlayback(path, listener) {
  if (!path || !listener) return () => {}
  const entry = ensure(path)
  entry.listeners.add(listener)
  if (entry.time != null) {
    listener({ time: entry.time, duration: entry.duration })
  }
  return () => {
    entry.listeners.delete(listener)
    release(path, entry)
  }
}

export function publishPlayback(path, time, duration, reason) {
  if (!path || !Number.isFinite(time)) return
  const entry = ensure(path)
  const nextDuration = Number.isFinite(duration) ? duration : entry.duration
  const nextReason = reason === 'seek' ? 'seek' : 'tick'
  if (entry.time === time && entry.duration === nextDuration && entry.reason === nextReason) return
  entry.time = time
  entry.duration = nextDuration
  entry.reason = nextReason
  const snapshot = { time, duration: nextDuration, reason: nextReason }
  for (const listener of entry.listeners) listener(snapshot)
}

export function seekPlayback(path, time) {
  if (!path || !Number.isFinite(time)) return false
  const entry = players.get(path)
  if (!entry || entry.apis.size === 0) return false
  for (const api of entry.apis) api.seek(time)
  return true
}
