import test from 'node:test'
import assert from 'node:assert/strict'
import { shouldDeleteBoardLevelStrokes } from './boardDeletePath.js'

test('legacy / missing slideIDs use board-level stroke delete', () => {
  assert.equal(shouldDeleteBoardLevelStrokes({}), true)
  assert.equal(shouldDeleteBoardLevelStrokes({ isMultiboard: false }), true)
  assert.equal(shouldDeleteBoardLevelStrokes({ isMultiboard: true }), true)
  assert.equal(shouldDeleteBoardLevelStrokes({ isMultiboard: true, slideIDs: null }), true)
  assert.equal(shouldDeleteBoardLevelStrokes({ isMultiboard: true, slideIDs: [] }), true)
})

test('multiboard with slideIDs keeps slide path', () => {
  assert.equal(
    shouldDeleteBoardLevelStrokes({ isMultiboard: true, slideIDs: ['s1'] }),
    false
  )
})
