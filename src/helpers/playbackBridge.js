// Connects the visible video's <audio> element to the transcript panel.
// Players register a seek, a play, and a play/pause toggle. The transcript
// publishes the current time and whether playback is running, and asks for a
// seek or a play. Keyed by video path so a page with several videos only moves
// the one beside the transcript. Space uses that same player.

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
      duration: 0,
      playing: false
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
    listener({
      time: entry.time,
      duration: entry.duration,
      reason: entry.reason,
      playing: entry.playing === true
    })
  }
  return () => {
    entry.listeners.delete(listener)
    release(path, entry)
  }
}

export function publishPlayback(path, time, duration, reason, playing) {
  if (!path || !Number.isFinite(time)) return
  const entry = ensure(path)
  const nextDuration = Number.isFinite(duration) ? duration : entry.duration
  const nextReason = reason === 'seek' ? 'seek' : 'tick'
  const nextPlaying = typeof playing === 'boolean' ? playing : entry.playing === true
  if (
    entry.time === time
    && entry.duration === nextDuration
    && entry.reason === nextReason
    && entry.playing === nextPlaying
  ) return
  entry.time = time
  entry.duration = nextDuration
  entry.reason = nextReason
  entry.playing = nextPlaying
  const snapshot = { time, duration: nextDuration, reason: nextReason, playing: nextPlaying }
  for (const listener of entry.listeners) listener(snapshot)
}

export function seekPlayback(path, time) {
  if (!path || !Number.isFinite(time)) return false
  const entry = players.get(path)
  if (!entry || entry.apis.size === 0) return false
  for (const api of entry.apis) api.seek(time)
  return true
}

export function playPlayback(path, time) {
  if (!path) return false
  const entry = players.get(path)
  if (!entry || entry.apis.size === 0) return false
  let started = false
  for (const api of entry.apis) {
    if (typeof api.play !== 'function') continue
    if (api.play(time) === false) continue
    started = true
  }
  return started
}

const playHolds = new WeakMap()

// The transcript seeks to a word and plays in the same click. play() can still
// begin at 0: the element ignores currentTime until it can seek, or it drops
// the seek when playback starts. Keep putting the playhead on that word until
// it arrives, and only repair a playhead that is still at the start so a
// later scrub is left alone.
export function playAudioFrom(audio, time, start) {
  if (!audio) return false
  const previous = playHolds.get(audio)
  if (previous) previous()

  const target = Number(time)
  const aimed = Number.isFinite(target)
  let tries = 0
  let timer = 0
  let correcting = false
  let armedPlay = false
  let landed = false

  const at = () => Number(audio.currentTime) || 0
  const arrived = () => !aimed || Math.abs(at() - target) <= 0.35

  const detach = () => {
    audio.removeEventListener('seeked', correct)
    audio.removeEventListener('playing', correct)
    audio.removeEventListener('timeupdate', correct)
    audio.removeEventListener('progress', correct)
    audio.removeEventListener('loadeddata', correct)
    audio.removeEventListener('loadedmetadata', correct)
    if (timer) clearTimeout(timer)
    if (playHolds.get(audio) === detach) playHolds.delete(audio)
  }

  const assign = () => {
    try {
      audio.currentTime = target
    } catch (err) {
      return false
    }
    return true
  }

  const correct = (event) => {
    if (playHolds.get(audio) !== detach || correcting) return
    if (arrived()) {
      landed = true
      // play() can still drop a seek that landed before it. Audio that is
      // already playing never emits playing, so release now or the next
      // timeupdate (half a second of media at 2x) writes the word back.
      if (event || !armedPlay) detach()
      return
    }
    // The word already stuck and playback moved on. A drop to the start is
    // still this click's seek and has to be repaired.
    if (landed && at() >= 0.5) {
      detach()
      return
    }
    if (audio.seeking || tries >= 6) return
    const progress = !!(event && event.type === 'progress')
    // After the first repair, only a playhead still sitting at the start
    // belongs to this click. A scrub to somewhere else must stand.
    // Progress repeats while the file downloads, before a seek is possible,
    // and must not spend those repairs.
    if (event && at() >= 0.5 && (tries > 0 || progress)) return
    correcting = true
    if (!progress) tries += 1
    assign()
    correcting = false
    if (!arrived()) return
    landed = true
    if (!armedPlay) detach()
  }

  if (aimed) assign()
  for (const name of ['seeked', 'playing', 'timeupdate', 'progress', 'loadeddata', 'loadedmetadata']) {
    audio.addEventListener(name, correct)
  }
  playHolds.set(audio, detach)
  timer = setTimeout(detach, 4000)
  if (timer && typeof timer.unref === 'function') timer.unref()

  if (audio.paused) {
    armedPlay = true
    const run = typeof start === 'function' ? start : () => audio.play()
    let pending
    try {
      pending = run()
    } catch (err) {
      pending = undefined
    }
    if (pending && typeof pending.catch === 'function') pending.catch(() => {})
  }
  correct()
  return true
}

// Hover moves a paused video. A playing video keeps its playhead, and a held
// button does not drag the caret.
export function hoverSeeksPlayback({ pointerType, buttons, playing }) {
  if (pointerType === 'touch') return false
  if (buttons) return false
  return playing !== true
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
