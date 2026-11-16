/**
 * Parent room ids that must be expanded so `roomId` is visible in the drawer.
 * Walks `parentRoomID` until a root (empty/missing parent). Guards against cycles.
 */
export function ancestorIdsForRoom (rooms, roomId) {
  const ancestors = new Set()
  if (!roomId || !Array.isArray(rooms) || rooms.length === 0) return ancestors

  const byId = new Map(rooms.map(room => [room.id, room]))
  let current = byId.get(roomId)

  while (current?.parentRoomID) {
    const parentId = current.parentRoomID
    if (ancestors.has(parentId)) break
    ancestors.add(parentId)
    current = byId.get(parentId)
  }

  return ancestors
}
