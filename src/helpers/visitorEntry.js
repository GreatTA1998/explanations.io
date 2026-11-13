import { isFirestoreID } from '../lib/NavSideDrawer/serverMenu.js'

// The homepage splash, and the hop from / into a server underneath it,
// belong to the root URL only. A shared link stays on that link.
// This is not a permission check.

// Algebra and Number Theory. Ids that fail the Firestore allowlist land here.
export const DEFAULT_HOMEPAGE_SERVER_ID = 'I90n3qyz45VmY0azjbhh'

export function loggedOutEntry (pathname) {
  return pathname === '/' ? 'homepage' : 'direct'
}

export function loggedInRootDestination (pathname, mostRecentServerID) {
  if (pathname !== '/') return null
  if (mostRecentServerID == null || mostRecentServerID === '') return null
  const serverID = isFirestoreID(mostRecentServerID)
    ? mostRecentServerID
    : DEFAULT_HOMEPAGE_SERVER_ID
  if (!isFirestoreID(serverID)) return null
  return `/${serverID}/question`
}

// Question and room ids from the server document are only appended when they
// are Firestore ids. A bad server id uses the known homepage server.
export function homepageServerPath (server) {
  const serverID = isFirestoreID(server?.id) ? server.id : DEFAULT_HOMEPAGE_SERVER_ID
  if (!isFirestoreID(serverID)) return null
  if (isFirestoreID(server?.id) && isFirestoreID(server.recentQuestionID)) {
    return `/${serverID}/question/${server.recentQuestionID}`
  }
  if (isFirestoreID(server?.id) && isFirestoreID(server.featuredRoomID)) {
    return `/${serverID}/${server.featuredRoomID}`
  }
  return `/${serverID}/overview`
}

export function loadErrorAlert (error) {
  const code = error && error.code ? String(error.code) : ''
  const message = error && error.message ? String(error.message) : ''
  return `Error code & message, see console for details = ${[code, message].filter(Boolean).join(' ')}`
}
