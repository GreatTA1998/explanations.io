import test from 'node:test'
import assert from 'node:assert/strict'
import { hasDesignatedPreview, previewBlackboardID, serversForMenu, menuColumnCount } from './serverMenu.js'

const featured = { id: 'a', name: 'Algebra and Number Theory', featuredBlackboardID: 'bbbbbbbbbbbbbbbbbbbb' }
const video = { id: 'b', name: 'Featured video server', featuredVideoID: 'vvvvvvvvvvvvvvvvvvvv' }
const thumb = { id: 'c', name: 'Thumbnail server', thumbnailURL: 'https://example.com/thumb.png' }
const plain = { id: 'd', name: '18.01A PSET Lounge' }
const otherPlain = { id: 'e', name: '5.12 TR1' }

test('empty search keeps thumbnails and featured videos, and drops the rest', () => {
  const shown = serversForMenu([plain, video, otherPlain, featured, thumb], '')
  assert.deepEqual(shown.map(server => server.id), ['a', 'b', 'c'])
  assert.equal(hasDesignatedPreview(plain), false)
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
})
