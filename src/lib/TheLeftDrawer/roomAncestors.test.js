import test from 'node:test'
import assert from 'node:assert/strict'
import { ancestorIdsForRoom } from './roomAncestors.js'

test('root room has no ancestors', () => {
  const rooms = [
    { id: 'root', parentRoomID: '' },
    { id: 'child', parentRoomID: 'root' }
  ]
  assert.deepEqual([...ancestorIdsForRoom(rooms, 'root')], [])
})

test('nested room lists parents nearest-first then up to root', () => {
  const rooms = [
    { id: 'root', parentRoomID: '' },
    { id: 'folder', parentRoomID: 'root' },
    { id: 'leaf', parentRoomID: 'folder' }
  ]
  assert.deepEqual([...ancestorIdsForRoom(rooms, 'leaf')], ['folder', 'root'])
})

test('missing room or empty list yields no ancestors', () => {
  assert.deepEqual([...ancestorIdsForRoom([], 'x')], [])
  assert.deepEqual([...ancestorIdsForRoom([{ id: 'a', parentRoomID: '' }], '')], [])
  assert.deepEqual([...ancestorIdsForRoom([{ id: 'a', parentRoomID: '' }], 'missing')], [])
})

test('cycles do not hang', () => {
  const rooms = [
    { id: 'a', parentRoomID: 'b' },
    { id: 'b', parentRoomID: 'a' }
  ]
  const ids = ancestorIdsForRoom(rooms, 'a')
  assert.ok(ids.has('b'))
  assert.ok(ids.has('a'))
  assert.equal(ids.size, 2)
})
