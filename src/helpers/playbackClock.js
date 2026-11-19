const handles = new Map() // path → Set<{ audio, seek, play, toggle }>

export const playbackPathOf = (v) => (v ? (v.path || v.id || '') : '')

export function registerPlayback (path, api) {
  if (!path || !api) return () => {}
  let set = handles.get(path)
  if (!set) handles.set(path, (set = new Set()))
  set.add(api)
  return () => { set.delete(api); if (!set.size) handles.delete(path) }
}

function first (path) { const s = handles.get(path); if (s) for (const a of s) return a; return null }
export const playbackAudio = (path) => { const a = first(path); return a && a.audio ? a.audio : null }

function call (path, method, arg) {
  const set = handles.get(path)
  if (!set?.size) return false
  let ok = false
  for (const api of set) if (typeof api[method] === 'function' && api[method](arg) !== false) ok = true
  return ok
}

export const seekPlayback = (path, time) => Number.isFinite(time) && call(path, 'seek', time)
export const playPlayback = (path, time) => call(path, 'play', time)

/** Set currentTime if finite; play if paused. Seek correction lives in players. */
export function playAudioFrom (audio, time, start) {
  if (!audio) return false
  if (Number.isFinite(time)) { try { audio.currentTime = time } catch (_) {} }
  if (audio.paused) {
    const run = typeof start === 'function' ? start : () => audio.play()
    try { const p = run(); if (p?.catch) p.catch(() => {}) } catch (_) {}
  }
  return true
}
