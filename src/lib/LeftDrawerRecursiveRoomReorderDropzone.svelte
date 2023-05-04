<div bind:this={ReorderDropzone} 
  style="height: 8px; border-radius: 2px;" 
  on:dragenter={() => {
    if (!isInvalidReorderDrop()) {
      ReorderDropzone.style.background = 'rgb(87, 172, 247)' 
    }
  }}
  on:dragleave={() => ReorderDropzone.style.background = '' }
  on:dragover={(e) => dragover_handler(e)}
  on:drop={(e) => onReorderDrop(e)}
>
</div>

<script>
  import { whatIsBeingDragged, whatIsBeingDraggedID } from '/src/store.js'
  import { updateFirestoreDoc } from '/src/helpers/crud.js'

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
  }

  async function onReorderDrop (e) {
    if (isInvalidReorderDrop()) return
    ReorderDropzone.style.background = ''

    const data = e.dataTransfer.getData('text/plain')
    const keyValuePairs = data.split(']')
    const [key1, value1] = keyValuePairs[0].split(':')
    const draggedRoomID = value1

    const initialNumericalDifference = 3
    let newVal 

    // TO-DO: need the last drop zone to be manually added
    const dropZoneIdx = orderWithinLevel
    // copy `PopupRearrangeVideos` 
    if (dropZoneIdx === 0) {
      const topOfOrderDoc = roomsInThisLevel[0]
      // halve the value so it never gets to 0 
      newVal = (topOfOrderDoc.classServerOrder || 3) / 2
    }
    else if (dropZoneIdx === n) {
      const bottomOfOrderDoc = roomsInThisLevel[n-1]
      newVal = (bottomOfOrderDoc.classServerOrder || 3) + initialNumericalDifference
      // update max class server order within this class
      await updateFirestoreDoc(`classes/${classID}/`, {
        maxClassServerOrder: newVal
      })
    }
    else {
      let topNeighborDoc = roomsInThisLevel[dropZoneIdx - 1]
      let botNeighborDoc = roomsInThisLevel[dropZoneIdx]
      const order1 = botNeighborDoc.classServerOrder || 3
      const order2 = topNeighborDoc.classServerOrder || 3 + initialNumericalDifference
      newVal = (order1 + order2) / 2
    }

    await updateFirestoreDoc(`classes/${classID}/rooms/${draggedRoomID}`, {
      classServerOrder: newVal,
      parentRoomID: roomsInThisLevel[0].parentRoomID || ''
    })
  }
</script>