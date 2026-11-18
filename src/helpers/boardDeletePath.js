
export function shouldDeleteBoardLevelStrokes (boardDoc) {
  return !boardDoc?.isMultiboard
    || !Array.isArray(boardDoc.slideIDs)
    || boardDoc.slideIDs.length === 0
}
