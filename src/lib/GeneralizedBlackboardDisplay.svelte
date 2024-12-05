<script>
  import RenderlessListenToBoard from '$lib/RenderlessListenToBoard.svelte'
  import TextAreaAutoResizing from '$lib/TextAreaAutoResizing.svelte'
  import GeneralizedVideoDisplay from '$lib/DoodleVideo/GeneralizedVideoDisplay.svelte'
  import OnlineMultislideBlackboard from '$lib/OnlineMultislideBlackboard.svelte'
  import LegacySingleSlideBlackboard from '$lib/LegacySingleSlideBlackboard.svelte'
  import { blackboardWidth, videoPreviewWidth, user } from '/src/store.js'
  import { updateFirestoreDoc } from '/src/helpers/crud.js'
  import { createDebouncedFunction } from '/src/helpers/debounce.js'

  export let classID
  export let boardID
  export let roomDoc

  $: boardsDbPath = `classes/${classID}/blackboards/`

  const debouncedUpdateBoardDescription = createDebouncedFunction(updateBoardDescription, 1000)

  async function updateBoardDescription (e, boardDoc) {    
    updateFirestoreDoc(boardDoc.path, {
      description: e.detail
    })
  }
</script>

<div>
  <RenderlessListenToBoard dbPath={boardsDbPath + boardID} let:boardDoc={boardDoc}>
    {#if !boardDoc}
      <!-- TODO: we always assume the video dimensions, which causes minor layout shifts for blackboards -->
      <div style="width: {$videoPreviewWidth}px; height: {3/4 * $videoPreviewWidth}px;">
      
      </div>
    {:else}
      <div style="margin-bottom: 12px; display: flex; flex-direction: column; row-gap: 12px;">
        <div style="width: {boardDoc.audioDownloadURL ? $videoPreviewWidth : $blackboardWidth}px; margin-top: 0px; margin-bottom: 0px">
          {#if boardDoc.description || boardDoc.creatorUID === $user.uid}
            <TextAreaAutoResizing 
              value={boardDoc.description || ''} 
              on:input={(e) => debouncedUpdateBoardDescription(e, boardDoc)}
              placeholder="Title..."
              readonly={boardDoc.audioDownloadURL && $user.uid !== boardDoc.creatorUID}
            />
          {/if}
        </div>
      </div>

      {#if boardDoc.audioDownloadURL}
        <!-- QUICKFIX: scale factor of 0.8 to take into account of the slides so you can see the whole video with the slider -->
        <GeneralizedVideoDisplay
          video={boardDoc}
          videoWidth={$videoPreviewWidth}
          showEditDeleteButtons={true}
        />
      {:else if boardDoc.isMultiboard}
        <OnlineMultislideBlackboard 
          {boardDoc}
          canvasHeight={$blackboardWidth * 3/4}
          canvasWidth={$blackboardWidth}
          {classID}
          {roomDoc}
        />
      {:else}
        <LegacySingleSlideBlackboard {boardDoc} {roomDoc}/>
      {/if}
    {/if}
  </RenderlessListenToBoard>
</div>