// The server switcher used to live in TheTopNavbar. With an empty search it
// led with servers that have a featured blackboard, because that id is the
// holographic thumbnail. A later pass listed every server. Empty search is
// that older set again: a designated thumbnail or a featured video. Typing
// still matches the full collection.

const THUMBNAIL_FIELDS = ['featuredBlackboardID', 'thumbnailURL', 'serverThumbnail', 'thumbnail']
const FEATURED_VIDEO_FIELDS = ['featuredVideoID', 'featuredVideo']

export const CARD_WIDTH = 240
export const CARD_GAP = 8

const FIRESTORE_ID = /^[A-Za-z0-9]{20}$/

function isPresent (value) {
  if (typeof value === 'string') return value.trim().length > 0
  return value != null && value !== false
}

function firestoreID (value) {
  return typeof value === 'string' && FIRESTORE_ID.test(value) ? value : ''
}

export function hasDesignatedPreview (server) {
  if (!server) return false
  return [...THUMBNAIL_FIELDS, ...FEATURED_VIDEO_FIELDS].some(field => isPresent(server[field]))
}

export function previewBlackboardID (server) {
  if (!server) return ''
  if (typeof server.featuredBlackboardID === 'string' && server.featuredBlackboardID.trim()) {
    return server.featuredBlackboardID
  }
  const fromVideo = firestoreID(server.featuredVideoID)
    || (typeof server.featuredVideo === 'string' ? firestoreID(server.featuredVideo) : '')
  if (fromVideo) return fromVideo
  if (server.featuredVideo && typeof server.featuredVideo === 'object') {
    return firestoreID(server.featuredVideo.blackboardID) || firestoreID(server.featuredVideo.id)
  }
  return ''
}

export function thumbnailImageURL (server) {
  if (!server) return ''
  for (const field of ['thumbnailURL', 'serverThumbnail', 'thumbnail']) {
    const value = server[field]
    if (typeof value === 'string' && value.trim()) return value.trim()
  }
  return ''
}

export function serversForMenu (servers, query) {
  const list = (servers || []).filter(server => server && server.id)
  const terms = String(query || '').trim().toLowerCase().split(/\s+/).filter(Boolean)
  const filtered = terms.length === 0
    ? list.filter(hasDesignatedPreview)
    : list.filter(server => {
      const name = (server.name || '').toLowerCase()
      return terms.some(term => name.includes(term))
    })

  return filtered.slice().sort((a, b) => {
    const featuredFirst = Number(hasDesignatedPreview(b)) - Number(hasDesignatedPreview(a))
    if (featuredFirst !== 0) return featuredFirst
    return (a.name || '').localeCompare(b.name || '', undefined, { sensitivity: 'base' })
  })
}

export function menuColumnCount (viewportWidth, itemCount, leftOffset = 0) {
  const count = Math.max(itemCount || 0, 1)
  const available = Math.max(CARD_WIDTH, (viewportWidth || 0) - leftOffset - 24)
  const fit = Math.max(1, Math.floor((available + CARD_GAP) / (CARD_WIDTH + CARD_GAP)))
  return Math.min(fit, count)
}
