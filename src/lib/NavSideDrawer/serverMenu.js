const THUMBNAIL_FIELDS = ['featuredBlackboardID', 'thumbnailURL', 'serverThumbnail', 'thumbnail']
const FEATURED_VIDEO_FIELDS = ['featuredVideoID', 'featuredVideo']

export const CARD_WIDTH = 240
export const CARD_GAP = 8

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

export function serverIsPublic (server) {
  return server?.isPublic !== false
}

export function viewerIsServerCreator (server, uid) {
  return !!uid && !!server?.creatorUID && server.creatorUID === uid
}

export function viewerCanTogglePrivacy (server, uid) {
  if (!uid || !server) return false
  if (viewerIsServerCreator(server, uid)) return true
  const members = server.memberUIDs
  return Array.isArray(members) && members.includes(uid)
}

export function serverVisibleInMenu (server, viewerUID = '') {
  if (!server?.id) return false
  if (serverIsPublic(server)) return true
  return viewerIsServerCreator(server, viewerUID)
}

export function serversForMenu (servers, query, viewerUID = '') {
  const list = (servers || []).filter(server => serverVisibleInMenu(server, viewerUID))
  const terms = String(query || '').trim().toLowerCase().split(/\s+/).filter(Boolean)
  const filtered = terms.length === 0
    ? list
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

export function partitionServersForMenu (servers, query, viewerUID = '') {
  const shown = serversForMenu(servers, query, viewerUID)
  const previewServers = []
  const listServers = []
  for (const server of shown) {
    if (hasDesignatedPreview(server)) previewServers.push(server)
    else listServers.push(server)
  }
  return { previewServers, listServers }
}

export function menuColumnCount (viewportWidth, itemCount, leftOffset = 0, split = false) {
  const count = Math.max(itemCount || 0, 1)
  const available = Math.max(CARD_WIDTH, (viewportWidth || 0) - leftOffset - 48)
  const section = split ? Math.max(CARD_WIDTH, Math.floor((available - CARD_GAP) / 2)) : available
  const fit = Math.max(1, Math.floor((section + CARD_GAP) / (CARD_WIDTH + CARD_GAP)))
  return Math.min(fit, count)
}

export function menuPlateLayout (viewportWidth, columnCount, anchorLeft = 0, split = false) {
  const vw = Math.max(viewportWidth || 0, 0)
  const cols = Math.max(columnCount || 1, 1)
  const section = cols * CARD_WIDTH + Math.max(cols - 1, 0) * CARD_GAP
  const natural = (split ? 2 * section + CARD_GAP : section) + 24
  if (menuColumnCount(vw, 2, 0) < 2 || (split && natural > vw - 24)) {
    return { fullWidth: true, width: Math.max(CARD_WIDTH + 24, vw - 24), left: 12 }
  }
  const maxLeft = Math.max(12, vw - 12 - natural)
  return { fullWidth: false, width: natural, left: Math.min(Math.max(anchorLeft, 12), maxLeft) }
}
