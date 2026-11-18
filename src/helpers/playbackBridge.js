const players = new Map()
let claimedPath = ''
let listening = false
let swallowKeyup = false

function ensure (path) {
  let entry = players.get(path)
  if (!entry) {
    entry = { apis: new Set() }
    players.set(path, entry)
  }
  return entry
}

function release (path, entry) {
  if (!entry.apis.size) players.delete(path)
}

export function playbackPathOf (video) {
  return video ? (video.path || video.id || '') : ''
}

export function claimPlayback (path) {
  if (path) claimedPath = path
}

/** Register seek/play/toggle (+ optional audio element) for a board path. */
export function registerPlayback (path, api) {
  if (!path || !api) return () => {}
  const entry = ensure(path)
  entry.apis.add(api)
  ensureKeyListener()
  return () => {
    entry.apis.delete(api)
    release(path, entry)
    releaseKeyListener()
  }
}

function firstApi (path) {
  const entry = players.get(path)
  if (!entry) return null
  for (const api of entry.apis) return api
  return null
}

/** Live audio element for a path, if the player registered one. */
export function playbackAudio (path) {
  const api = firstApi(path)
  return api && api.audio ? api.audio : null
}

function callApis (path, method, arg) {
  const entry = players.get(path)
  if (!entry || !entry.apis.size) return false
  let ok = false
  for (const api of entry.apis) {
    if (typeof api[method] !== 'function') continue
    if (api[method](arg) === false) continue
    ok = true
  }
  return ok
}

export function seekPlayback (path, time) {
  return Number.isFinite(time) && callApis(path, 'seek', time)
}

export function playPlayback (path, time) {
  return callApis(path, 'play', time)
}

export function togglePlayback (path) {
  return callApis(path, 'toggle')
}

export function hoverSeeksPlayback ({ pointerType, buttons, playing }) {
  return pointerType !== 'touch' && !buttons && playing !== true
}

const playHolds = new WeakMap()

export function playAudioFrom (audio, time, start) {
  if (!audio) return false
  const previous = playHolds.get(audio)
  if (previous) previous()

  const target = Number(time)
  const aimed = Number.isFinite(target)
  let tries = 0
  let timer = 0
  let correcting = false
  const at = () => Number(audio.currentTime) || 0
  const arrived = () => !aimed || Math.abs(at() - target) <= 0.35

  const detach = () => {
    for (const name of ['seeked', 'playing', 'timeupdate', 'progress', 'loadeddata', 'loadedmetadata']) {
      audio.removeEventListener(name, correct)
    }
    if (timer) clearTimeout(timer)
    if (playHolds.get(audio) === detach) playHolds.delete(audio)
  }

  const correct = (event) => {
    if (playHolds.get(audio) !== detach || correcting) return
    if (arrived()) {
      if (event) detach()
      return
    }
    if (audio.seeking || tries >= 6) return
    if (event && tries > 0 && at() >= 0.5) return
    correcting = true
    tries += 1
    try { audio.currentTime = target } catch (_) {}
    correcting = false
  }

  if (aimed) {
    try { audio.currentTime = target } catch (_) {}
  }
  for (const name of ['seeked', 'playing', 'timeupdate', 'progress', 'loadeddata', 'loadedmetadata']) {
    audio.addEventListener(name, correct)
  }
  playHolds.set(audio, detach)
  timer = setTimeout(detach, 4000)
  if (timer && typeof timer.unref === 'function') timer.unref()

  if (audio.paused) {
    const run = typeof start === 'function' ? start : () => audio.play()
    try {
      const pending = run()
      if (pending && typeof pending.catch === 'function') pending.catch(() => {})
    } catch (_) {}
  }
  correct()
  return true
}

const NON_TEXT = new Set(['button', 'submit', 'reset', 'checkbox', 'radio', 'file', 'range', 'color', 'image', 'hidden'])

function isTyping (node) {
  if (!node || node.nodeType !== 1) return false
  if (node.isContentEditable) return true
  const field = typeof node.closest === 'function' ? node.closest('textarea, input') : null
  if (!field) return false
  if (field.tagName === 'TEXTAREA') return true
  return !NON_TEXT.has((field.getAttribute('type') || 'text').toLowerCase())
}

function usesSpace (node) {
  return !!(node && typeof node.closest === 'function' && node.closest(
    'button,[role="button"],summary,select,audio,video,input[type="button"],input[type="submit"],input[type="reset"],input[type="checkbox"],input[type="radio"]'
  ))
}

function attrPath (node, name) {
  if (!node || typeof node.closest !== 'function') return ''
  const owner = node.closest('[' + name + ']')
  return owner && typeof owner.getAttribute === 'function' ? (owner.getAttribute(name) || '') : ''
}

function spacePath (event) {
  if (!event || event.repeat) return ''
  if (event.key !== ' ' && event.code !== 'Space') return ''
  if (event.altKey || event.ctrlKey || event.metaKey) return ''
  const target = event.target
  if (isTyping(target)) return ''
  const known = new Set(players.keys())
  const transcriptPath = attrPath(target, 'data-transcript-path')
  if (transcriptPath && known.has(transcriptPath)) return transcriptPath
  const playbackPath = attrPath(target, 'data-playback-path')
  if (playbackPath && known.has(playbackPath)) return playbackPath
  if (usesSpace(target)) return ''
  const active = claimedPath && players.has(claimedPath)
    ? claimedPath
    : (players.size === 1 ? players.keys().next().value : '')
  return active && known.has(active) ? active : ''
}

function onSpaceKey (event) {
  if (event.type === 'keyup') {
    if (!swallowKeyup) return
    swallowKeyup = false
    event.preventDefault()
    event.stopPropagation()
    return
  }
  if (event.repeat) {
    if (!swallowKeyup) return
    event.preventDefault()
    event.stopPropagation()
    return
  }
  const path = spacePath(event)
  if (!path || !togglePlayback(path)) return
  swallowKeyup = true
  event.preventDefault()
  event.stopPropagation()
}

function ensureKeyListener () {
  if (listening || typeof document === 'undefined') return
  document.addEventListener('keydown', onSpaceKey, true)
  document.addEventListener('keyup', onSpaceKey, true)
  listening = true
}

function releaseKeyListener () {
  if (!listening || players.size > 0 || typeof document === 'undefined') return
  document.removeEventListener('keydown', onSpaceKey, true)
  document.removeEventListener('keyup', onSpaceKey, true)
  listening = false
  swallowKeyup = false
}
