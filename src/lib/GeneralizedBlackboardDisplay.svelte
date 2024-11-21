<script>
  import RenderlessListenToBoard from '$lib/RenderlessListenToBoard.svelte'
  import TextAreaAutoResizing from '$lib/TextAreaAutoResizing.svelte'
  import UnifiedDoodleVideo from '$lib/UnifiedDoodleVideo.svelte'
  import OnlineMultislideBlackboard from '$lib/OnlineMultislideBlackboard.svelte'
  import { browserTabID, user, maxAvailableWidth, maxAvailableHeight, willPreventPageLeave, drawerWidth, adminUIDs, whatIsBeingDragged } from '/src/store.js'
  import { updateDoc } from 'firebase/firestore'
  import { updateFirestoreDoc } from '/src/helpers/crud.js'

  export let classID
  export let boardID
  export let roomDoc

  $: boardsDbPath = `classes/${classID}/blackboards/`

  async function debouncedUpdateBoardDescription ({ detail }, id) {
    const debouncedVersion = debounce(
      () => updateBoardDescription({ detail }, id),
      1000
    ) 
    debouncedVersion({ detail }, id)
  }

  async function updateBoardDescription (e, id) {    
    updateFirestoreDoc(boardsDbPath + id, {
      description: e.detail
    })
  }

  let t = { promise: null, cancel: _ => void 0 }

  // Snippet from: https://stackoverflow.com/a/68228099/7812829
  // NOTE: this literally returns a function (you still have to call it)
  function debounce (task, ms) {
    return async (...args) => {
      try {
        t.cancel()
        t = deferred(ms)
        await t.promise
        await task(...args)
      }
      catch (_) { 
        /* prevent memory leak */ 
      }
    }
  }

  function deferred (ms) {
    let cancel, promise = new Promise((resolve, reject) => {
      cancel = reject
      setTimeout(resolve, ms)
    })
    return { promise, cancel }
  }
</script>

<div>
  <RenderlessListenToBoard dbPath={boardsDbPath + boardID} let:boardDoc={boardDoc}>
    {#if boardDoc}
      <!-- <div style="width: {$maxAvailableWidth}px; margin-top: 0px; margin-bottom: 0px">
        <TextAreaAutoResizing 
          value={boardDoc.description || ''} 
          on:input={(e) => debouncedUpdateBoardDescription(e, boardID)}
          placeholder="Board title / description"
          readonly={boardDoc.audioDownloadURL && $user.uid !== boardDoc.creatorUID}
        />
      </div> -->

      {#if boardDoc.audioDownloadURL}
        <!-- 
          QUICKFIX: scale factor of 0.8 to take into account of the slides so you can see the whole video with the slider
          TO-DO: add a scroll snap to the bottom of the video 
        -->
        <UnifiedDoodleVideo
          video={boardDoc}
          videoWidth={$maxAvailableWidth * 0.8}
          showEditDeleteButtons={true}
        />
      {:else if boardDoc.isMultiboard}
        <OnlineMultislideBlackboard 
          {boardDoc}
          canvasHeight={$maxAvailableHeight}
          canvasWidth={$maxAvailableWidth}
          {classID}
          {roomDoc}
        />
      {/if}
    {/if}
  </RenderlessListenToBoard>
</div>