// The homepage splash, and the hop from / into a server underneath it,
// belong to the root URL only. A shared link stays on that link.
// This is not a permission check.

export function loggedOutEntry (pathname) {
  return pathname === '/' ? 'homepage' : 'direct'
}

export function loggedInRootDestination (pathname, mostRecentServerID) {
  if (pathname === '/' && mostRecentServerID) {
    return `/${mostRecentServerID}/question`
  }
  return null
}
