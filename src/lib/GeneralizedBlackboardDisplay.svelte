<script>
  import RenderlessListenToBoard from '$lib/RenderlessListenToBoard.svelte'
  import TextAreaAutoResizing from '$lib/TextAreaAutoResizing.svelte'
  import UnifiedDoodleVideo from '$lib/UnifiedDoodleVideo.svelte'
  import OnlineMultislideBlackboard from '$lib/OnlineMultislideBlackboard.svelte'
  import LegacySingleSlideBlackboard from '$lib/LegacySingleSlideBlackboard.svelte'
  import { maxAvailableWidth, maxAvailableHeight, user } from '/src/store.js'
  import { updateFirestoreDoc } from '/src/helpers/crud.js'
  import { createDebouncedFunction } from '/src/helpers/debounce.js'

  export let classID
  export let boardID
  export let roomDoc

  $: boardsDbPath = `classes/${classID}/blackboards/`

  const debouncedUpdateBoardDescription = createDebouncedFunction(updateBoardDescription, 1000)

  async function updateBoardDescription (e, boardDoc) {    
    console.log('updating board description')
    updateFirestoreDoc(boardDoc.path, {
      description: e.detail
    })
  }
</script>

<div>
  <RenderlessListenToBoard dbPath={boardsDbPath + boardID} let:boardDoc={boardDoc}>
    {#if !boardDoc}
      <div style="width: {$maxAvailableWidth}px; height: {3/4 * $maxAvailableWidth}px;">
      
      </div>
    {:else}
      <div style="margin-bottom: 12px; display: flex; flex-direction: column; row-gap: 12px;">
        <div style="width: {$maxAvailableWidth}px; margin-top: 0px; margin-bottom: 0px">
          <TextAreaAutoResizing 
            value={boardDoc.description || ''} 
            on:input={(e) => debouncedUpdateBoardDescription(e, boardDoc)}
            placeholder="Board title / description"
            readonly={boardDoc.audioDownloadURL && $user.uid !== boardDoc.creatorUID}
          />
        </div>
      </div>

      {#if boardDoc.audioDownloadURL}
        <!-- 
          QUICKFIX: scale factor of 0.8 to take into account of the slides so you can see the whole video with the slider
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
      {:else}
        <LegacySingleSlideBlackboard {boardDoc} {roomDoc}/>
      {/if}
    {/if}
  </RenderlessListenToBoard>
</div>