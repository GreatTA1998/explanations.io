const handles = new Map() // path → Set<{ audio, seek, play, toggle }>
let claimed = '', listening = false, swallow = false
const NON_TEXT = new Set(['button', 'submit', 'reset', 'checkbox', 'radio', 'file', 'range', 'color', 'image', 'hidden'])
const SPACE_CTL = 'button,[role="button"],summary,select,audio,video,input[type="button"],input[type="submit"],input[type="reset"],input[type="checkbox"],input[type="radio"]'

export const playbackPathOf = (v) => (v ? (v.path || v.id || '') : '')
export const claimPlayback = (path) => { if (path) claimed = path }
export const hoverSeeksPlayback = ({ pointerType, buttons, playing }) =>
  pointerType !== 'touch' && !buttons && playing !== true

export function registerPlayback (path, api) {
  if (!path || !api) return () => {}
  let set = handles.get(path)
  if (!set) handles.set(path, (set = new Set()))
  set.add(api); listen(true)
  return () => { set.delete(api); if (!set.size) handles.delete(path); listen(false) }
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
export const togglePlayback = (path) => call(path, 'toggle')

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

function typing (n) {
  if (!n || n.nodeType !== 1) return false
  if (n.isContentEditable) return true
  const f = n.closest?.('textarea, input')
  return !!f && (f.tagName === 'TEXTAREA' || !NON_TEXT.has((f.getAttribute('type') || 'text').toLowerCase()))
}

function attr (n, name) { return n?.closest?.(`[${name}]`)?.getAttribute?.(name) || '' }

function spacePath (e) {
  if (!e || e.repeat || (e.key !== ' ' && e.code !== 'Space') || e.altKey || e.ctrlKey || e.metaKey) return ''
  const t = e.target
  if (typing(t)) return ''
  for (const name of ['data-transcript-path', 'data-playback-path']) {
    const p = attr(t, name); if (p && handles.has(p)) return p
  }
  if (t?.closest?.(SPACE_CTL)) return ''
  const active = claimed && handles.has(claimed) ? claimed
    : (handles.size === 1 ? handles.keys().next().value : '')
  return active && handles.has(active) ? active : ''
}

function onSpace (e) {
  if (e.type === 'keyup' || e.repeat) {
    if (!swallow) return
    if (e.type === 'keyup') swallow = false
    e.preventDefault(); e.stopPropagation(); return
  }
  const path = spacePath(e)
  if (!path || !togglePlayback(path)) return
  swallow = true; e.preventDefault(); e.stopPropagation()
}

function listen (on) {
  if (typeof document === 'undefined') return
  if (on) {
    if (listening) return
    document.addEventListener('keydown', onSpace, true)
    document.addEventListener('keyup', onSpace, true)
    listening = true
  } else if (listening && !handles.size) {
    document.removeEventListener('keydown', onSpace, true)
    document.removeEventListener('keyup', onSpace, true)
    listening = false; swallow = false
  }
}
