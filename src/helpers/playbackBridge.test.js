import test from 'node:test'
import assert from 'node:assert/strict'
import {
  chooseSpacePath,
  claimPlayback,
  hoverSeeksPlayback,
  playAudioFrom,
  playPlayback,
  publishPlayback,
  registerPlayback,
  spaceTargetPath,
  subscribePlayback
} from './playbackBridge.js'

const registered = new Set(['video-a', 'video-b'])

test('space on the transcript toggles that video, including its word buttons', () => {
  assert.equal(chooseSpacePath({
    typing: false,
    transcriptPath: 'video-a',
    playbackPath: '',
    usesSpace: true,
    registered,
    activePath: 'video-b'
  }), 'video-a')
})

test('space on the playback surface toggles that video', () => {
  assert.equal(chooseSpacePath({
    typing: false,
    transcriptPath: '',
    playbackPath: 'video-b',
    usesSpace: true,
    registered,
    activePath: 'video-a'
  }), 'video-b')
})

test('space on the page toggles the active video and skips controls that already use space', () => {
  assert.equal(chooseSpacePath({
    typing: false,
    transcriptPath: '',
    playbackPath: '',
    usesSpace: false,
    registered,
    activePath: 'video-a'
  }), 'video-a')
  assert.equal(chooseSpacePath({
    typing: false,
    transcriptPath: '',
    playbackPath: '',
    usesSpace: true,
    registered,
    activePath: 'video-a'
  }), '')
})

test('space in a text field is left alone', () => {
  assert.equal(chooseSpacePath({
    typing: true,
    transcriptPath: 'video-a',
    playbackPath: '',
    usesSpace: false,
    registered,
    activePath: 'video-a'
  }), '')
})

test('an unregistered transcript does not become a second player', () => {
  assert.equal(chooseSpacePath({
    typing: false,
    transcriptPath: 'missing',
    playbackPath: '',
    usesSpace: false,
    registered,
    activePath: ''
  }), '')
})

function el(tag, attrs = {}) {
  const node = {
    nodeType: 1,
    tagName: tag,
    isContentEditable: attrs.contenteditable === 'true',
    parent: null,
    getAttribute(name) {
      return Object.prototype.hasOwnProperty.call(attrs, name) ? attrs[name] : null
    },
    closest(selector) {
      const parts = selector.split(',').map((part) => part.trim())
      let current = this
      while (current) {
        if (parts.some((part) => matches(current, part))) return current
        current = current.parent
      }
      return null
    }
  }
  return node
}

function matches(node, selector) {
  if (selector === 'textarea') return node.tagName === 'TEXTAREA'
  if (selector === 'input') return node.tagName === 'INPUT'
  if (selector === 'button') return node.tagName === 'BUTTON'
  if (selector === 'summary') return node.tagName === 'SUMMARY'
  if (selector === 'select') return node.tagName === 'SELECT'
  if (selector === 'audio') return node.tagName === 'AUDIO'
  if (selector === 'video') return node.tagName === 'VIDEO'
  if (selector === '[role="button"]') return node.getAttribute('role') === 'button'
  if (selector.startsWith('[data-') && selector.endsWith(']')) {
    return !!node.getAttribute(selector.slice(1, -1))
  }
  if (selector.startsWith('input[type="') && selector.endsWith('"]')) {
    const type = selector.slice('input[type="'.length, -2)
    return node.tagName === 'INPUT' && (node.getAttribute('type') || 'text') === type
  }
  return false
}

function inside(child, parent) {
  child.parent = parent
  return child
}

test('a focused transcript word toggles its player and a text field does not', () => {
  const stop = registerPlayback('video-a', { seek() {}, toggle() {} })
  const panel = el('DIV', { 'data-transcript-path': 'video-a' })
  const word = inside(el('BUTTON'), panel)
  assert.equal(spaceTargetPath({ key: ' ', target: word }), 'video-a')

  const field = el('TEXTAREA')
  assert.equal(spaceTargetPath({ key: ' ', target: field }), '')
  assert.equal(spaceTargetPath({ key: ' ', code: 'Space', target: inside(el('INPUT'), panel), repeat: false }), '')
  stop()
})

test('hover seeks a paused video and stays still while it plays or while dragging', () => {
  assert.equal(hoverSeeksPlayback({ pointerType: 'mouse', buttons: 0, playing: false }), true)
  assert.equal(hoverSeeksPlayback({ pointerType: 'mouse', buttons: 0, playing: true }), false)
  assert.equal(hoverSeeksPlayback({ pointerType: 'mouse', buttons: 1, playing: false }), false)
  assert.equal(hoverSeeksPlayback({ pointerType: 'pen', buttons: 0, playing: false }), true)
  assert.equal(hoverSeeksPlayback({ pointerType: 'touch', buttons: 0, playing: false }), false)
})

test('play starts the registered player and does not toggle it', () => {
  let played = 0
  let toggled = 0
  let playedAt = null
  const stop = registerPlayback('video-play', {
    seek() {},
    toggle() { toggled += 1 },
    play(time) {
      played += 1
      playedAt = time
    }
  })
  assert.equal(playPlayback('video-play', 12.5), true)
  assert.equal(played, 1)
  assert.equal(playedAt, 12.5)
  assert.equal(toggled, 0)
  stop()
  assert.equal(playPlayback('video-play'), false)
})

test('a player that refuses to play does not count as started', () => {
  const stop = registerPlayback('video-locked', {
    seek() {},
    play() { return false }
  })
  assert.equal(playPlayback('video-locked', 4), false)
  stop()
})

function mockAudio() {
  const listeners = new Map()
  return {
    currentTime: 0,
    paused: true,
    seeking: false,
    addEventListener(type, fn) {
      const list = listeners.get(type) || []
      list.push(fn)
      listeners.set(type, list)
    },
    removeEventListener(type, fn) {
      const list = listeners.get(type) || []
      listeners.set(type, list.filter((item) => item !== fn))
    },
    emit(type) {
      for (const fn of [...(listeners.get(type) || [])]) fn({ type })
    },
    play() {
      this.currentTime = 0
      this.paused = false
      return Promise.resolve()
    }
  }
}

test('play from a word puts the playhead back when playback begins at 0', () => {
  const audio = mockAudio()
  assert.equal(playAudioFrom(audio, 6.25), true)
  assert.ok(Math.abs(audio.currentTime - 6.25) < 0.01)
  assert.equal(audio.paused, false)
})

test('a play event that resets to 0 is moved to the word, and a later scrub stays', async () => {
  const audio = mockAudio()
  audio.play = function () {
    this.paused = false
    return Promise.resolve()
  }
  playAudioFrom(audio, 8)
  audio.currentTime = 0
  audio.seeking = false
  audio.emit('playing')
  assert.ok(Math.abs(audio.currentTime - 8) < 0.01)
  audio.currentTime = 3
  audio.emit('timeupdate')
  assert.equal(audio.currentTime, 3)
})

test('playback that runs past a landed word is left where it moved', () => {
  const audio = mockAudio()
  audio.paused = false
  playAudioFrom(audio, 5)
  assert.ok(Math.abs(audio.currentTime - 5) < 0.01)
  audio.currentTime = 5.5
  audio.emit('timeupdate')
  assert.equal(audio.currentTime, 5.5)
})

test('a timeupdate after play starts does not rewind a word that already landed', () => {
  const audio = mockAudio()
  audio.play = function () {
    this.paused = false
    return Promise.resolve()
  }
  playAudioFrom(audio, 5)
  audio.currentTime = 5.5
  audio.emit('timeupdate')
  assert.equal(audio.currentTime, 5.5)
})

test('progress while the file downloads does not give up on the word', () => {
  const audio = mockAudio()
  let seekable = false
  let time = 0
  Object.defineProperty(audio, 'currentTime', {
    configurable: true,
    get() { return time },
    set(value) {
      if (seekable) time = value
    }
  })
  playAudioFrom(audio, 9)
  for (let i = 0; i < 8; i += 1) audio.emit('progress')
  assert.equal(audio.currentTime, 0)
  seekable = true
  audio.emit('loadedmetadata')
  assert.ok(Math.abs(audio.currentTime - 9) < 0.01)
})

test('a custom start runs, and its start at 0 is put on the word', () => {
  const audio = mockAudio()
  let started = 0
  playAudioFrom(audio, 4.2, () => {
    started += 1
    audio.currentTime = 0
    audio.paused = false
  })
  assert.equal(started, 1)
  assert.ok(Math.abs(audio.currentTime - 4.2) < 0.01)
})

test('playback reports whether the video is playing', () => {
  const seen = []
  const stop = subscribePlayback('video-state', (snapshot) => {
    seen.push([snapshot.time, snapshot.playing, snapshot.reason])
  })
  publishPlayback('video-state', 1, 4, 'tick', false)
  publishPlayback('video-state', 1, 4, 'tick', false)
  publishPlayback('video-state', 1.2, 4, 'tick', true)
  assert.deepEqual(seen, [
    [1, false, 'tick'],
    [1.2, true, 'tick']
  ])
  stop()
})

test('a listener hears a video that is already playing', () => {
  publishPlayback('video-live', 2, 9, 'seek', true)
  const seen = []
  const stop = subscribePlayback('video-live', (snapshot) => {
    seen.push([snapshot.time, snapshot.playing, snapshot.reason])
  })
  assert.deepEqual(seen, [[2, true, 'seek']])
  stop()
})

test('page-level space uses the claimed video and skips a button', () => {
  const stops = [
    registerPlayback('video-a', { seek() {}, toggle() {} }),
    registerPlayback('video-b', { seek() {}, toggle() {} })
  ]
  claimPlayback('video-b')
  assert.equal(spaceTargetPath({ key: ' ', target: el('DIV') }), 'video-b')
  assert.equal(spaceTargetPath({ key: ' ', target: el('BUTTON') }), '')
  const surface = el('DIV', { role: 'button', 'data-playback-path': 'video-a' })
  assert.equal(spaceTargetPath({ key: ' ', target: surface }), 'video-a')
  stops.forEach((stop) => stop())
})
