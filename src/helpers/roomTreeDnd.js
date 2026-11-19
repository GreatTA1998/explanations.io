/** iPad/WebKit room-tree DnD — docs/webkit-dnd-postmortem.md */
export const ROOM_MIME = 'application/x-blackboard-room'
export const DROP_HL = 'rgb(87, 172, 247)'

export function parseDraggedRoomId (dt) {
  const custom = dt?.getData?.(ROOM_MIME)
  if (custom) return custom
  const m = (dt?.getData?.('text/plain') || '').match(/^roomID:([^\]\s]+)/)
  return m ? m[1] : ''
}

export function lockWebkitDragSelect () {
  document.documentElement.classList.add('room-tree-dragging')
  window.getSelection?.()?.removeAllRanges?.()
}

export function unlockWebkitDragSelect () {
  document.documentElement.classList.remove('room-tree-dragging')
}

/** TouchSensor-style long-press (delay 220ms, tolerance 8px). */
export function roomTouchDrag (node, getCtx) {
  let ctx = getCtx, timer = null, active = false, x0 = 0, y0 = 0, hl = null
  const clearHl = () => { if (hl) { hl.style.background = ''; hl = null } }
  const hitAt = (x, y) => document.elementFromPoint(x, y)?.closest?.('[data-room-nest],[data-room-reorder]') || null

  function onStart (e) {
    if (e.touches.length !== 1) return
    x0 = e.touches[0].clientX; y0 = e.touches[0].clientY
    timer = setTimeout(() => {
      timer = null; active = true
      lockWebkitDragSelect(); node.classList.add('room-touch-dragging'); ctx()?.onStart?.()
    }, 220)
  }

  function onMove (e) {
    const t = e.touches[0]; if (!t) return
    if (!active) {
      if (Math.hypot(t.clientX - x0, t.clientY - y0) > 8) { clearTimeout(timer); timer = null }
      return
    }
    e.preventDefault(); clearHl()
    const hit = hitAt(t.clientX, t.clientY)
    if (hit && hit !== node) { hit.style.background = DROP_HL; hl = hit }
  }

  function finish (e) {
    clearTimeout(timer); timer = null
    if (!active) return
    const t = e.changedTouches?.[0]
    const hit = t ? hitAt(t.clientX, t.clientY) : null
    clearHl(); unlockWebkitDragSelect(); node.classList.remove('room-touch-dragging'); active = false
    const roomId = ctx()?.roomId
    // Drop before onEnd so invalid-drop guards still see drag stores.
    if (hit && hit !== node && roomId) {
      hit.dispatchEvent(new CustomEvent('roomtouchdrop', { detail: { roomId }, bubbles: false }))
    }
    ctx()?.onEnd?.()
  }

  node.addEventListener('touchstart', onStart, { passive: true })
  node.addEventListener('touchmove', onMove, { passive: false })
  node.addEventListener('touchend', finish)
  node.addEventListener('touchcancel', finish)
  return {
    update (next) { ctx = next },
    destroy () {
      clearTimeout(timer); clearHl(); unlockWebkitDragSelect()
      node.removeEventListener('touchstart', onStart)
      node.removeEventListener('touchmove', onMove)
      node.removeEventListener('touchend', finish)
      node.removeEventListener('touchcancel', finish)
    }
  }
}
