<BasePopup on:popup-close>
  <h2 slot="title" style="font-family: sans-serif;">
    Rearrange videos
  </h2>
  <div slot="popup-content" style="font-family: sans-serif; padding: 12px;">
    {#if allBoardDocs.length > 0}
      {#each blackboardIDs as boardID, idx}
        <div 
          on:drop={(e) => drop_handler(e, idx)}
          on:dragover={(e) => dragover_handler(e)}
          style="width: 60px; height: 16px; background-color: green; box-sizing: border-box"
        >
 
        </div>

        <div style="display: flex; align-items: center;">
          <div 
            draggable="true" 
            on:dragstart={(e) => dragstart_handler(e, { boardID, idx })} 
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
  import { user, whatIsBeingDragged } from '../store.js'
  import { getFirestoreDoc, updateFirestoreDoc } from '../helpers/crud.js'
  import Button from '@smui/button'
  import { collection, query, where, getDocs } from "firebase/firestore";

  export let blackboardIDs
  export let classID
  export let roomDoc

  $: n = blackboardIDs.length

  let allBoardDocs = []
  const dispatch = createEventDispatcher()

  fetchAllBoards()

  async function fetchAllBoards () {
    const temp = [] 
    const promises = [] 
    for (const boardID of blackboardIDs) {
      const p = getFirestoreDoc(`classes/${classID}/blackboards/${boardID}`).then(boardDoc => {
        temp.push(boardDoc)
      })
      promises.push(p)
    }
    await Promise.all(promises)
    allBoardDocs = [...temp] // trigger reactivity
  }

  // TO-DO: this is a copy-paste, do DRY 
  function dragstart_handler (e, { boardID, idx }) {
    // the interface has to be consistent with moving pages
    // into subpages, see `LeftDrawerRecursiveRoom.svelte`
    whatIsBeingDragged.set('board')
    e.dataTransfer.setData("text/plain", `boardID:${boardID}]draggedIdx:${idx}`)
    e.dataTransfer.dropEffect = 'move'
  }

  function dragover_handler (e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move'
  }
  
  async function drop_handler (e, j) {
    e.preventDefault()
    const data = e.dataTransfer.getData('text/plain')
    const keyValuePairs = data.split(']')
    const [key1, value1] = keyValuePairs[0].split(':')
    if (key1 !== 'boardID') {
      return
    }
    const [key2, value2] = keyValuePairs[1].split(':')
    if (key2 !== 'draggedIdx') {
      return
    }
    const draggedBoardID = value1 // const draggedBoardID = blackboardsCopy[i] // I know...turns out I only needed `i`, no need for `boardID`
    const i = value2

    // ACTUALLY UPDATE
    // console.log('i, j =', i, j)
    const blackboardsCopy = [...roomDoc.blackboards]
    // remove 
    const removeOneElement = 1
    blackboardsCopy.splice(i, removeOneElement)
    // console.log('after remove =', blackboardsCopy)

    // insert
    const removeNoElement = 0
    blackboardsCopy.splice(j, removeNoElement, draggedBoardID)  
    // console.log('after insert =', blackboardsCopy)
      
    // make an update operation
    await updateFirestoreDoc(roomDoc.path, {
      blackboards: blackboardsCopy
    })
    fetchAllBoards()
  }
</script>