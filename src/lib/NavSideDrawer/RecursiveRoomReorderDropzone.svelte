<div bind:this={ReorderDropzone}
  data-room-reorder=""
  style="height: 8px; border-radius: 2px;"
  on:dragenter={() => {
    if (!isInvalidReorderDrop()) ReorderDropzone.style.background = DROP_HL
  }}
  on:dragleave={() => ReorderDropzone.style.background = ''}
  on:dragover={(e) => dragover_handler(e)}
  on:drop={(e) => onReorderDrop(e)}
  on:roomtouchdrop={(e) => onTouchReorder(e)}
>
</div>

<script>
  import { whatIsBeingDragged, whatIsBeingDraggedID } from '/src/store.js'
  import { updateFirestoreDoc, updateNumOfSubfolders } from '/src/helpers/crud.js'
  import { DROP_HL, parseDraggedRoomId } from '/src/helpers/roomTreeDnd.js'

  export let ReorderDropzone
  export let orderWithinLevel
  export let parentRoomIDs
  export let roomsInThisLevel
  export let classID

  $: n = roomsInThisLevel.length

  function isInvalidReorderDrop () {
    return $whatIsBeingDragged !== 'room' || parentRoomIDs.includes($whatIsBeingDraggedID)
  }

  function dragover_handler (e) {
    e.preventDefault()
    e.dataTransfer.dropEffect = 'move'
  }

  async function applyReorder (draggedRoomID) {
    if (!draggedRoomID || parentRoomIDs.includes(draggedRoomID)) return
    ReorderDropzone.style.background = ''

    // Dropzone above a room belongs to the parent that owns this level.
    await updateNumOfSubfolders({
      draggedRoomID,
      droppedRoomID: roomsInThisLevel[0].parentRoomID,
      basePath: `classes/${classID}/rooms/`
    })

    const initialNumericalDifference = 3
    let newVal
    const dropZoneIdx = orderWithinLevel
    if (dropZoneIdx === 0) {
      newVal = (roomsInThisLevel[0].classServerOrder || 3) / 2
    } else if (dropZoneIdx === n) {
      newVal = (roomsInThisLevel[n - 1].classServerOrder || 3) + initialNumericalDifference
      await updateFirestoreDoc(`classes/${classID}/`, { maxClassServerOrder: newVal })
    } else {
      const botNeighborDoc = roomsInThisLevel[dropZoneIdx]
      const topNeighborDoc = roomsInThisLevel[dropZoneIdx - 1]
      const order1 = botNeighborDoc.classServerOrder || 3
      const order2 = topNeighborDoc.classServerOrder || 3 + initialNumericalDifference
      newVal = (order1 + order2) / 2
    }

    await updateFirestoreDoc(`classes/${classID}/rooms/${draggedRoomID}`, {
      classServerOrder: newVal,
      parentRoomID: roomsInThisLevel[0].parentRoomID || ''
    })
  }

  async function onReorderDrop (e) {
    e.preventDefault()
    e.stopPropagation()
    await applyReorder(parseDraggedRoomId(e.dataTransfer))
  }

  async function onTouchReorder (e) {
    e.stopPropagation()
    await applyReorder(e.detail?.roomId)
  }
</script>
