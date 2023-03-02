<BasePopup on:popup-close>
  <h2 slot="title" style="font-family: sans-serif;">
    Rearrange videos
  </h2>
  <div slot="popup-content" style="font-family: sans-serif; padding: 12px;">
    {#if allBoardDocs.length > 0}
      {#each galleryBoardIDs as boardID, idx}
        <div 
          on:drop={(e) => drop_handler(e, idx)}
          on:dragover={(e) => dragover_handler(e)}
          style="width: 60px; height: 16px; background-color: green; box-sizing: border-box"
        >
 
        </div>

        <div style="display: flex; align-items: center;">
          <div 
            draggable="true" 
            on:dragstart={(e) => dragstart_handler(e, boardID)} 
            style="background-color: rgb(62, 66, 66); color: white; height: 30px; min-width: 60px; box-sizing: border-box"
          >
            {idx + 1}
          </div>
          <div>
            {allBoardDocs[idx].title || ''}
          </div>
          <div style="width: 90%" class="my-truncated-text">
            {allBoardDocs[idx].description || ''}
          </div>
        </div>
      {/each}
    {/if}

    <div 
      on:drop={(e) => drop_handler(e, n)}
      on:dragover={(e) => dragover_handler(e)}
      style="width: 60px; height: 16px; background-color: green; box-sizing: border-box"
    >
    </div>
  </div>
</BasePopup>

<script>
  import BasePopup from '$lib/BasePopup.svelte'
  import { createEventDispatcher, onMount } from 'svelte'
  import { user } from '../store.js'
  import { getFirestoreDoc, updateFirestoreDoc } from '../helpers/crud.js'
  import Button from '@smui/button'
  import { collection, query, where, getDocs } from "firebase/firestore";

  export let galleryBoardIDs
  export let classID
  export let selectedTutorDoc

  $: n = galleryBoardIDs.length

  let allBoardDocs = []

  fetchAllBoards()

  async function fetchAllBoards () {
    const temp = [] 
    const promises = [] 
    for (const boardID of galleryBoardIDs) {
      const p = getFirestoreDoc(`classes/${classID}/blackboards/${boardID}`).then(boardDoc => {
        temp.push(boardDoc)
      })
      promises.push(p)
    }
    await Promise.all(promises)
    allBoardDocs = [...temp] // trigger reactivity
  }

  const dispatch = createEventDispatcher()

  function dragstart_handler (e, id) {
    e.dataTransfer.setData("text/plain", id)
  } 

  // order should always be positive real number (if it's 0 then the program will want to initialize it)
  async function drop_handler (e, dropZoneIdx) {
    const draggedVideoID = e.dataTransfer.getData('text/plain')
    const initialNumericalDifference = 3 
    let newVal
    if (dropZoneIdx === 0) {
       const topOfOrderDoc = await getFirestoreDoc(`classes/${classID}/blackboards/${galleryBoardIDs[0]}`)
       // halve the value so it never gets to 0 
       newVal = (topOfOrderDoc.shopGalleryOrder || 3) / 2
    } 
    else if (dropZoneIdx === n) {
      const bottomOfOrderDoc = await getFirestoreDoc(`classes/${classID}/blackboards/${galleryBoardIDs[n - 1]}`)
      newVal = (bottomOfOrderDoc.shopGalleryOrder || 3) + initialNumericalDifference
      await updateFirestoreDoc(`classes/${classID}/tutors/${selectedTutorDoc.id}`, {
        maxShopGalleryOrder: newVal
      })
    }
    // general case: update `shopGalleryOrder` to be the average of top and bottom neighbor
    else {
      let topNeighborID = galleryBoardIDs[dropZoneIdx - 1]
      let botNeighborID = galleryBoardIDs[dropZoneIdx]// you need the blackboardDoc 
      const botNeighborDoc = await getFirestoreDoc(`classes/${classID}/blackboards/${botNeighborID}`)
      const topNeighborDoc = await getFirestoreDoc(`classes/${classID}/blackboards/${topNeighborID}`)
      const order1 = botNeighborDoc.shopGalleryOrder || 3
      const order2 = topNeighborDoc.shopGalleryOrder || 3 + initialNumericalDifference
      newVal = (order1 + order2) / 2 
    }
    await updateFirestoreDoc(`classes/${classID}/blackboards/${draggedVideoID}`, {
      shopGalleryOrder: newVal
    })     
    dispatch('video-rearranged')
  }
  
  function dragover_handler (e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move'
  }
</script>