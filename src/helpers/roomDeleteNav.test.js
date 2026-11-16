import test from 'node:test'
import assert from 'node:assert/strict'
import { destinationAfterRoomDelete } from './roomDeleteNav.js'

test('after deleting a nested room, navigate to the parent room', () => {
  assert.equal(
    destinationAfterRoomDelete({ classID: 'serverA', parentRoomID: 'parentB' }),
    '/serverA/parentB'
  )
})

test('after deleting a root room, navigate to the server forum — not overview', () => {
  assert.equal(
    destinationAfterRoomDelete({ classID: 'serverA', parentRoomID: '' }),
    '/serverA/question'
  )
  assert.equal(
    destinationAfterRoomDelete({ classID: 'serverA', parentRoomID: undefined }),
    '/serverA/question'
  )
  assert.ok(
    !destinationAfterRoomDelete({ classID: 'serverA' }).includes('overview')
  )
})
