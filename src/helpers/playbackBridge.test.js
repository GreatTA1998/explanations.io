import test from 'node:test'
import assert from 'node:assert/strict'
import { chooseSpacePath, claimPlayback, registerPlayback, spaceTargetPath } from './playbackBridge.js'

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
