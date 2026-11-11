// Connects the visible video's <audio> element to the transcript panel.
// Players register a seek and a play/pause toggle. The transcript publishes the
// current time and asks for a seek. Keyed by video path so a page with several
// videos only moves the one beside the transcript. Space uses that same player.

const players = new Map()
let claimedPath = ''
let listening = false
let swallowKeyup = false

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

export function claimPlayback(path) {
  if (path) claimedPath = path
}

function currentPlaybackPath() {
  if (claimedPath && players.has(claimedPath)) return claimedPath
  if (players.size === 1) return players.keys().next().value
  return ''
}

export function registerPlayback(path, api) {
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

export function togglePlayback(path) {
  if (!path) return false
  const entry = players.get(path)
  if (!entry || entry.apis.size === 0) return false
  let toggled = false
  for (const api of entry.apis) {
    if (typeof api.toggle !== 'function') continue
    api.toggle()
    toggled = true
  }
  return toggled
}

const NON_TEXT_INPUTS = new Set([
  'button', 'submit', 'reset', 'checkbox', 'radio', 'file', 'range', 'color', 'image', 'hidden'
])

function isTypingTarget(node) {
  if (!node || node.nodeType !== 1) return false
  if (node.isContentEditable) return true
  const field = typeof node.closest === 'function' ? node.closest('textarea, input') : null
  if (!field) return false
  if (field.tagName === 'TEXTAREA') return true
  const type = (field.getAttribute('type') || 'text').toLowerCase()
  return !NON_TEXT_INPUTS.has(type)
}

function usesSpace(node) {
  if (!node || node.nodeType !== 1 || typeof node.closest !== 'function') return false
  return !!node.closest([
    'button',
    '[role="button"]',
    'summary',
    'select',
    'audio',
    'video',
    'input[type="button"]',
    'input[type="submit"]',
    'input[type="reset"]',
    'input[type="checkbox"]',
    'input[type="radio"]'
  ].join(','))
}

function closestPath(node, name) {
  if (!node || typeof node.closest !== 'function') return ''
  const owner = node.closest('[' + name + ']')
  if (!owner || typeof owner.getAttribute !== 'function') return ''
  return owner.getAttribute(name) || ''
}

// Space plays the transcript's video, or the one current video when focus is
// on the page. It does not take space from a field or a control that already
// uses it. Transcript words are buttons, and they still count as the transcript.
export function chooseSpacePath({ typing, transcriptPath, playbackPath, usesSpace: controlUsesSpace, registered, activePath }) {
  const known = registered || new Set()
  if (typing) return ''
  if (transcriptPath && known.has(transcriptPath)) return transcriptPath
  if (playbackPath && known.has(playbackPath)) return playbackPath
  if (controlUsesSpace) return ''
  return activePath && known.has(activePath) ? activePath : ''
}

export function spaceTargetPath(event) {
  if (!event || event.repeat) return ''
  if (event.key !== ' ' && event.code !== 'Space') return ''
  if (event.altKey || event.ctrlKey || event.metaKey) return ''
  const target = event.target
  return chooseSpacePath({
    typing: isTypingTarget(target),
    transcriptPath: closestPath(target, 'data-transcript-path'),
    playbackPath: closestPath(target, 'data-playback-path'),
    usesSpace: usesSpace(target),
    registered: new Set(players.keys()),
    activePath: currentPlaybackPath()
  })
}

function onSpaceKey(event) {
  if (event.type === 'keyup') {
    if (!swallowKeyup) return
    swallowKeyup = false
    event.preventDefault()
    event.stopPropagation()
    return
  }
  // Holding space must not scroll, and must not toggle on every repeat.
  if (event.repeat) {
    if (!swallowKeyup) return
    event.preventDefault()
    event.stopPropagation()
    return
  }
  const path = spaceTargetPath(event)
  if (!path || !togglePlayback(path)) return
  swallowKeyup = true
  event.preventDefault()
  event.stopPropagation()
}

function ensureKeyListener() {
  if (listening || typeof document === 'undefined') return
  document.addEventListener('keydown', onSpaceKey, true)
  document.addEventListener('keyup', onSpaceKey, true)
  listening = true
}

function releaseKeyListener() {
  if (!listening || players.size > 0 || typeof document === 'undefined') return
  document.removeEventListener('keydown', onSpaceKey, true)
  document.removeEventListener('keyup', onSpaceKey, true)
  listening = false
  swallowKeyup = false
}
