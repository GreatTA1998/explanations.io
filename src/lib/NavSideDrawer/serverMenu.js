const FIRESTORE_ID = /^[A-Za-z0-9]{20}$/

export const CARD_WIDTH = 240

export const isFirestoreID = (v) => typeof v === 'string' && FIRESTORE_ID.test(v)
const firestoreID = (v) => isFirestoreID(v) ? v : ''

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

const RECENT_SERVER_CAP = 8

/** Most-recent-first unique Firestore IDs for the Find-server menu. */
export function pushRecentVisitedServerID (existing, serverID, cap = RECENT_SERVER_CAP) {
  const id = firestoreID(serverID)
  if (!id) return Array.isArray(existing) ? existing.filter(isFirestoreID).slice(0, cap) : []
  const rest = (Array.isArray(existing) ? existing : []).filter((x) => isFirestoreID(x) && x !== id)
  return [id, ...rest].slice(0, cap)
}

/** Resolve recent IDs against loaded servers (preserve visit order). */
export function recentServersForMenu (servers, recentIDs, viewerUID = '') {
  if (!Array.isArray(recentIDs) || !recentIDs.length) return []
  const byId = new Map((servers || []).map((s) => [s.id, s]))
  const out = []
  for (const id of recentIDs) {
    const server = byId.get(id)
    if (server && serverVisibleInMenu(server, viewerUID)) out.push(server)
  }
  return out
}
