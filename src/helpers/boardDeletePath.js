/**
 * Legacy single boards lack slideIDs and store strokes at board/strokes.
 * Multiboard boards with slideIDs use slides/{id}/strokes.
 */
export function shouldDeleteBoardLevelStrokes (boardDoc) {
  return !boardDoc?.isMultiboard
    || !Array.isArray(boardDoc.slideIDs)
    || boardDoc.slideIDs.length === 0
}
