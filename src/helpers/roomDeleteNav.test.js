import test from 'node:test'
import assert from 'node:assert/strict'
import { adjacentSiblingId, destinationAfterRoomDelete } from './roomDeleteNav.js'

test('adjacent sibling prefers the next room below', () => {
  assert.equal(
    adjacentSiblingId({ roomId: 'b', siblingIdsInOrder: ['a', 'b', 'c'] }),
    'c'
  )
})

test('adjacent sibling falls back to the previous room above', () => {
  assert.equal(
    adjacentSiblingId({ roomId: 'c', siblingIdsInOrder: ['a', 'b', 'c'] }),
    'b'
  )
})

test('adjacent sibling is null when alone or missing', () => {
  assert.equal(adjacentSiblingId({ roomId: 'only', siblingIdsInOrder: ['only'] }), null)
  assert.equal(adjacentSiblingId({ roomId: 'missing', siblingIdsInOrder: ['a'] }), null)
  assert.equal(adjacentSiblingId({ roomId: 'a', siblingIdsInOrder: [] }), null)
})

test('after deleting a room with a sibling below, navigate to that sibling', () => {
  assert.equal(
    destinationAfterRoomDelete({
      classID: 'serverA',
      parentRoomID: 'parentB',
      roomId: 'mid',
      siblingIdsInOrder: ['first', 'mid', 'last']
    }),
    '/serverA/last'
  )
})

test('after deleting the last sibling, navigate to the previous sibling', () => {
  assert.equal(
    destinationAfterRoomDelete({
      classID: 'serverA',
      parentRoomID: '',
      roomId: 'last',
      siblingIdsInOrder: ['first', 'last']
    }),
    '/serverA/first'
  )
})

test('after deleting a nested room with no siblings, navigate to the parent room', () => {
  assert.equal(
    destinationAfterRoomDelete({
      classID: 'serverA',
      parentRoomID: 'parentB',
      roomId: 'onlyChild',
      siblingIdsInOrder: ['onlyChild']
    }),
    '/serverA/parentB'
  )
  assert.equal(
    destinationAfterRoomDelete({ classID: 'serverA', parentRoomID: 'parentB' }),
    '/serverA/parentB'
  )
})

test('after deleting a root room with no siblings, navigate to the server forum — not overview', () => {
  assert.equal(
    destinationAfterRoomDelete({
      classID: 'serverA',
      parentRoomID: '',
      roomId: 'onlyRoot',
      siblingIdsInOrder: ['onlyRoot']
    }),
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
