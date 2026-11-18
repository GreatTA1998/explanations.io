
export function adjacentSiblingId ({ roomId, siblingIdsInOrder = [] }) {
  const index = siblingIdsInOrder.indexOf(roomId)
  if (index === -1) return null
  if (index + 1 < siblingIdsInOrder.length) return siblingIdsInOrder[index + 1]
  if (index - 1 >= 0) return siblingIdsInOrder[index - 1]
  return null
}

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
