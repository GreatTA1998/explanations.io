<script>
  import RenderlessListenToDoc from '$lib/Renderless/RenderlessListenToDoc.svelte'
  import TextAreaAutoResizing from '$lib/Reusable/TextAreaAutoResizing.svelte'
  import GeneralizedVideoDisplay from '$lib/DoodleVideo/GeneralizedVideoDisplay.svelte'
  import OnlineMultislideBlackboard from '$lib/Blackboard/OnlineMultislide.svelte'
  import LegacySingleSlideBlackboard from '$lib/Blackboard/LegacySingleSlide.svelte'
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
  <RenderlessListenToDoc docPath={boardsDbPath + boardID} let:theDoc={boardDoc}>
    {#if !boardDoc}
        <!-- NOTE: we always assume the video dimensions, which causes a minor layout shift -->
      <div style="width: {$videoPreviewWidth}px; height: {3/4 * $videoPreviewWidth}px;">
      
      </div>
    {:else}
      <div style="margin-bottom: 12px; display: flex; flex-direction: column; row-gap: 12px;">
        <div style="width: {boardDoc.audioDownloadURL ? $videoPreviewWidth : $blackboardWidth}px; margin-top: 0px; margin-bottom: 0px">
          {#if !(!boardDoc.description && boardDoc.creatorUID && $user.uid !== boardDoc.creatorUID)}
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
  </RenderlessListenToDoc>
</div>