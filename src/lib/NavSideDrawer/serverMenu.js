const THUMBNAIL_FIELDS = ['featuredBlackboardID', 'thumbnailURL', 'serverThumbnail', 'thumbnail']
const FEATURED_VIDEO_FIELDS = ['featuredVideoID', 'featuredVideo']
const FIRESTORE_ID = /^[A-Za-z0-9]{20}$/

export const CARD_WIDTH = 240

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
  return filtered.slice().sort((a, b) =>
    (a.name || '').localeCompare(b.name || '', undefined, { sensitivity: 'base' })
  )
}
