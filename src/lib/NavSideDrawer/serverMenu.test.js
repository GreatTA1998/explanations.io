import test from 'node:test'
import assert from 'node:assert/strict'
import { hasDesignatedPreview, previewBlackboardID, serversForMenu, partitionServersForMenu, menuColumnCount, serverNameLeft, serverIsPublic, viewerIsServerCreator, serverVisibleInMenu, menuPlateLayout } from './serverMenu.js'

const featured = { id: 'a', name: 'Algebra and Number Theory', featuredBlackboardID: 'bbbbbbbbbbbbbbbbbbbb' }
const video = { id: 'b', name: 'Featured video server', featuredVideoID: 'vvvvvvvvvvvvvvvvvvvv' }
const thumb = { id: 'c', name: 'Thumbnail server', thumbnailURL: 'https://example.com/thumb.png' }
const plain = { id: 'd', name: '18.01A PSET Lounge' }
const otherPlain = { id: 'e', name: '5.12 TR1' }

test('empty search lists every joinable server, featured previews first', () => {
  const shown = serversForMenu([plain, video, otherPlain, featured, thumb], '')
  assert.deepEqual(shown.map(server => server.id), ['a', 'b', 'c', 'd', 'e'])
  assert.equal(hasDesignatedPreview(plain), false)
})

test('servers without a thumbnail become list rows, not empty boards', () => {
  const { previewServers, listServers } = partitionServersForMenu(
    [plain, video, otherPlain, featured, thumb],
    ''
  )
  assert.deepEqual(previewServers.map(server => server.id), ['a', 'b', 'c'])
  assert.deepEqual(listServers.map(server => server.id), ['d', 'e'])
})

test('search still returns every name match, featured previews first', () => {
  const shown = serversForMenu(
    [plain, { id: 'f', name: 'PSET featured', featuredBlackboardID: 'pppppppppppppppppppp' }, otherPlain],
    'pset'
  )
  assert.deepEqual(shown.map(server => server.id), ['f', 'd'])
})

test('a featured video id is the preview when the server has no thumbnail board', () => {
  assert.equal(previewBlackboardID(video), 'vvvvvvvvvvvvvvvvvvvv')
  assert.equal(previewBlackboardID(featured), 'bbbbbbbbbbbbbbbbbbbb')
  assert.equal(previewBlackboardID(plain), '')
})

test('the grid uses the viewport, and does not open empty columns', () => {
  assert.equal(menuColumnCount(1280, 8), 5)
  assert.equal(menuColumnCount(1280, 8, 300), 3)
  assert.equal(menuColumnCount(1280, 2), 2)
  assert.equal(menuColumnCount(390, 6), 1)
  assert.equal(serverNameLeft(false), 48)
  assert.equal(serverNameLeft(true), 56)
  assert.equal(menuColumnCount(1280, 8, serverNameLeft(false)), 4)
  assert.deepEqual(menuPlateLayout(390, 1, 48), { fullWidth: true, width: 366, left: 12 })
  assert.deepEqual(menuPlateLayout(1280, 4, 48), { fullWidth: false, width: 1008, left: 48 })
})

const secret = {
  id: 's',
  name: 'Secret seminar',
  isPublic: false,
  creatorUID: 'creator',
  featuredBlackboardID: 'ssssssssssssssssssss'
}

test('a server with no visibility field stays public', () => {
  assert.equal(serverIsPublic({}), true)
  assert.equal(serverIsPublic({ isPublic: true }), true)
  assert.equal(serverIsPublic({ isPublic: false }), false)
})

test('only the creator can change visibility, and only they see a private server in the menu', () => {
  assert.equal(viewerIsServerCreator(secret, 'creator'), true)
  assert.equal(viewerIsServerCreator(secret, 'someone-else'), false)
  assert.equal(viewerIsServerCreator({ name: 'Algebra' }, 'creator'), false)
  assert.equal(serverVisibleInMenu(secret, 'someone-else'), false)
  assert.equal(serverVisibleInMenu(secret, 'creator'), true)
  assert.equal(serverVisibleInMenu(featured, ''), true)

  const hidden = serversForMenu([secret, featured, plain], '', 'someone-else')
  assert.deepEqual(hidden.map(server => server.id), ['a', 'd'])

  const creatorView = serversForMenu([secret, plain], 'secret', 'creator')
  assert.deepEqual(creatorView.map(server => server.id), ['s'])

  const strangerSearch = serversForMenu([secret, plain], 'secret', 'someone-else')
  assert.deepEqual(strangerSearch.map(server => server.id), [])
})
