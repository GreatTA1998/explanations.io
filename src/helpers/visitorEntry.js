import { isFirestoreID } from '../lib/NavSideDrawer/serverMenu.js'

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