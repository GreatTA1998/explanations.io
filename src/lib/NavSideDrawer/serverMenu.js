// The server switcher used to live in TheTopNavbar. With an empty search it
// led with servers that have a featured blackboard, because that id is the
// holographic thumbnail. A later pass listed every server. Empty search is
// that older set again: a designated thumbnail or a featured video. Typing
// still matches the full collection.

const THUMBNAIL_FIELDS = ['featuredBlackboardID', 'thumbnailURL', 'serverThumbnail', 'thumbnail']
const FEATURED_VIDEO_FIELDS = ['featuredVideoID', 'featuredVideo']

export const CARD_WIDTH = 240
export const CARD_GAP = 8

// The menu hangs from the server-name control, so its left edge is that
// control's left edge. Docked drawer is flush with the viewport. The floating
// cluster is 8px in. The control then follows the row padding, the logo, and
// the gap before the name. Column count uses this so the grid stays on screen.
export function serverNameLeft (floating = false) {
  return (floating ? 8 : 0) + 8 + 36 + 4
}

const FIRESTORE_ID = /^[A-Za-z0-9]{20}$/

function isPresent (value) {
  if (typeof value === 'string') return value.trim().length > 0
  return value != null && value !== false
}

export function isFirestoreID (value) {
  return typeof value === 'string' && FIRESTORE_ID.test(value)
}

function firestoreID (value) {
  return isFirestoreID(value) ? value : ''
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

// Missing isPublic matches every server document that predates the flag:
// they are already listed, so they stay public. false is the private state.
export function serverIsPublic (server) {
  return server?.isPublic !== false
}

export function viewerIsServerCreator (server, uid) {
  return !!uid && !!server?.creatorUID && server.creatorUID === uid
}

export function visibilityActionLabel (server) {
  return serverIsPublic(server) ? 'Make private' : 'Make public'
}

// Private servers leave the public directory. The creator still sees theirs.
// A direct URL is unchanged; this is not an access-control check.
export function serverVisibleInMenu (server, viewerUID = '') {
  if (!server?.id) return false
  if (serverIsPublic(server)) return true
  return viewerIsServerCreator(server, viewerUID)
}

export function serversForMenu (servers, query, viewerUID = '') {
  const list = (servers || []).filter(server => serverVisibleInMenu(server, viewerUID))
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
