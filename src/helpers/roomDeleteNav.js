/**
 * Pick an adjacent sibling in left-drawer order (classServerOrder asc).
 * Prefer the next room below; if none, the previous room above.
 */
export function adjacentSiblingId ({ roomId, siblingIdsInOrder = [] }) {
  const index = siblingIdsInOrder.indexOf(roomId)
  if (index === -1) return null
  if (index + 1 < siblingIdsInOrder.length) return siblingIdsInOrder[index + 1]
  if (index - 1 >= 0) return siblingIdsInOrder[index - 1]
  return null
}

/**
 * Destination after a room is deleted.
 * Prefer an adjacent sibling (drawer order); else parent room; else server
 * forum (not the deprecated class overview). Creator channel cards on videos
 * still go to `/user/[uid]` and are unrelated to this path.
 */
export function destinationAfterRoomDelete ({
  classID,
  parentRoomID,
  roomId,
  siblingIdsInOrder = []
}) {
  const siblingId = adjacentSiblingId({ roomId, siblingIdsInOrder })
  if (siblingId) return `/${classID}/${siblingId}`
  if (parentRoomID) return `/${classID}/${parentRoomID}`
  return `/${classID}/question`
}
