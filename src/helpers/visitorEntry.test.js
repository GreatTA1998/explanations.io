import test from 'node:test'
import assert from 'node:assert/strict'
import {
  DEFAULT_HOMEPAGE_SERVER_ID,
  homepageServerPath,
  loadErrorAlert,
  loggedInRootDestination,
  loggedOutEntry
} from './visitorEntry.js'

test('a logged-out visit to the root URL gets the homepage', () => {
  assert.equal(loggedOutEntry('/'), 'homepage')
})

test('a logged-out server, room, video, or profile link stays on that URL', () => {
  assert.equal(loggedOutEntry('/I90n3qyz45VmY0azjbhh/overview'), 'direct')
  assert.equal(loggedOutEntry('/I90n3qyz45VmY0azjbhh/eSScStbUyFOtWZPaSWvu'), 'direct')
  assert.equal(loggedOutEntry('/video/class:board'), 'direct')
  assert.equal(loggedOutEntry('/user/someone'), 'direct')
})

test('a logged-in direct link is not sent home or to another server', () => {
  assert.equal(loggedInRootDestination('/I90n3qyz45VmY0azjbhh/overview', 'other-server'), null)
  assert.equal(loggedInRootDestination('/I90n3qyz45VmY0azjbhh/room', 'other-server'), null)
  assert.equal(loggedInRootDestination('/video/class:board', 'other-server'), null)
})

test('a logged-in visit to the root URL opens their most recent server', () => {
  assert.equal(loggedInRootDestination('/', 'Mev5x66mSMEvNz3rijym'), '/Mev5x66mSMEvNz3rijym/question')
  assert.equal(loggedInRootDestination('/', ''), null)
  assert.equal(loggedInRootDestination('/', undefined), null)
})

test('a crafted server id cannot leave the origin', () => {
  const fallback = `/${DEFAULT_HOMEPAGE_SERVER_ID}/question`
  assert.equal(loggedInRootDestination('/', '/evil.example'), fallback)
  assert.equal(loggedInRootDestination('/', '//evil.example'), fallback)
  assert.equal(loggedInRootDestination('/', '\\evil.example'), fallback)
  assert.equal(loggedInRootDestination('/', 'Mev5x66mSMEvNz3rijym/../admin'), fallback)
  assert.equal(loggedInRootDestination('/', 'javascript:alert(1)'), fallback)
  assert.equal(homepageServerPath({ id: '//evil.example', recentQuestionID: '//evil.example' }), `/${DEFAULT_HOMEPAGE_SERVER_ID}/overview`)
  assert.equal(
    homepageServerPath({ id: DEFAULT_HOMEPAGE_SERVER_ID, recentQuestionID: '/not-an-id' }),
    `/${DEFAULT_HOMEPAGE_SERVER_ID}/overview`
  )
  assert.equal(
    homepageServerPath({ id: DEFAULT_HOMEPAGE_SERVER_ID, recentQuestionID: 'tdhUFIHqyCfhaetB7RW6' }),
    `/${DEFAULT_HOMEPAGE_SERVER_ID}/question/tdhUFIHqyCfhaetB7RW6`
  )
})

test('the default-server alert keeps the code and the message in one string', () => {
  const text = loadErrorAlert({ code: 'unavailable', message: 'offline' })
  assert.equal(text, 'Error code & message, see console for details = unavailable offline')
  assert.equal(text.includes(','), true)
})
