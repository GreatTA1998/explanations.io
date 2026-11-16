/**
 * Destination after a room is deleted. Prefer the parent room so the
 * library drawer stays in context; otherwise the server forum (not the
 * deprecated class overview). Creator channel cards on videos still go
 * to `/user/[uid]` and are unrelated to this path.
 */
export function destinationAfterRoomDelete ({ classID, parentRoomID }) {
  if (parentRoomID) return `/${classID}/${parentRoomID}`
  return `/${classID}/question`
}
