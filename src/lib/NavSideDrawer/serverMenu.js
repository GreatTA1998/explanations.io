const THUMBNAIL_FIELDS = ['featuredBlackboardID', 'thumbnailURL', 'serverThumbnail', 'thumbnail']
const FEATURED_VIDEO_FIELDS = ['featuredVideoID', 'featuredVideo']
const FIRESTORE_ID = /^[A-Za-z0-9]{20}$/

export const CARD_WIDTH = 240
export const CARD_GAP = 8

export function serverNameLeft (floating = false) {
  return (floating ? 8 : 0) + 8 + 36 + 4
}

const present = (v) => typeof v === 'string' ? v.trim().length > 0 : v != null && v !== false
export const isFirestoreID = (v) => typeof v === 'string' && FIRESTORE_ID.test(v)
const firestoreID = (v) => isFirestoreID(v) ? v : ''

export function hasDesignatedPreview (server) {
  return !!server && [...THUMBNAIL_FIELDS, ...FEATURED_VIDEO_FIELDS].some((f) => present(server[f]))
}

export function previewBlackboardID (server) {
  if (!server) return ''
  if (typeof server.featuredBlackboardID === 'string' && server.featuredBlackboardID.trim()) {
    return server.featuredBlackboardID
  }
  const fromVideo = firestoreID(server.featuredVideoID)
    || (typeof server.featuredVideo === 'string' ? firestoreID(server.featuredVideo) : '')
  if (fromVideo) return fromVideo
  const fv = server.featuredVideo
  return fv && typeof fv === 'object'
    ? firestoreID(fv.blackboardID) || firestoreID(fv.id)
    : ''
}

export function thumbnailImageURL (server) {
  if (!server) return ''
  for (const field of ['thumbnailURL', 'serverThumbnail', 'thumbnail']) {
    const value = server[field]
    if (typeof value === 'string' && value.trim()) return value.trim()
  }
  return ''
}

export const serverIsPublic = (server) => server?.isPublic !== false
export const viewerIsServerCreator = (server, uid) => !!uid && !!server?.creatorUID && server.creatorUID === uid

export function viewerCanTogglePrivacy (server, uid) {
  if (!uid || !server) return false
  if (viewerIsServerCreator(server, uid)) return true
  const members = server.memberUIDs
  return Array.isArray(members) && members.includes(uid)
}

export function serverVisibleInMenu (server, viewerUID = '') {
  return !!server?.id && (serverIsPublic(server) || viewerIsServerCreator(server, viewerUID))
}

export function serversForMenu (servers, query, viewerUID = '') {
  const list = (servers || []).filter((s) => serverVisibleInMenu(s, viewerUID))
  const terms = String(query || '').trim().toLowerCase().split(/\s+/).filter(Boolean)
  const filtered = terms.length
    ? list.filter((s) => terms.some((t) => (s.name || '').toLowerCase().includes(t)))
    : list
  return filtered.slice().sort((a, b) => {
    const featured = Number(hasDesignatedPreview(b)) - Number(hasDesignatedPreview(a))
    return featured || (a.name || '').localeCompare(b.name || '', undefined, { sensitivity: 'base' })
  })
}

export function partitionServersForMenu (servers, query, viewerUID = '') {
  const previewServers = [], listServers = []
  for (const server of serversForMenu(servers, query, viewerUID)) {
    (hasDesignatedPreview(server) ? previewServers : listServers).push(server)
  }
  return { previewServers, listServers }
}

export function menuColumnCount (viewportWidth, itemCount, leftOffset = 0, split = false) {
  const available = Math.max(CARD_WIDTH, (viewportWidth || 0) - leftOffset - 48)
  const section = split ? Math.max(CARD_WIDTH, Math.floor((available - CARD_GAP) / 2)) : available
  return Math.min(Math.max(1, Math.floor((section + CARD_GAP) / (CARD_WIDTH + CARD_GAP))), Math.max(itemCount || 0, 1))
}

export function menuPlateLayout (viewportWidth, columnCount, anchorLeft = 0, split = false) {
  const vw = Math.max(viewportWidth || 0, 0)
  const cols = Math.max(columnCount || 1, 1)
  const section = cols * CARD_WIDTH + Math.max(cols - 1, 0) * CARD_GAP
  const natural = (split ? 2 * section + CARD_GAP : section) + 24
  if (menuColumnCount(vw, 2, 0) < 2 || (split && natural > vw - 24)) {
    return { fullWidth: true, width: Math.max(CARD_WIDTH + 24, vw - 24), left: 12 }
  }
  return { fullWidth: false, width: natural, left: Math.min(Math.max(anchorLeft, 12), Math.max(12, vw - 12 - natural)) }
}
