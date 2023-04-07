{#if boardDoc}
  <RenderlessFetchStrokes dbPath={boardDbPath}
    let:fetchStrokes={fetchStrokes}
    autoFetchStrokes
    let:strokesArray={strokesArray}
  >
    <div use:lazyCallable={fetchStrokes} 
      style={`width: ${canvasWidth}px; height: ${canvasHeight + 40}px; position: relative`}
    >
      <DoodleVideo 
        {canvasWidth}
        {canvasHeight}
        {strokesArray} 
        audioDownloadURL={boardDoc.audioDownloadURL}
        backgroundImageDownloadURL={boardDoc.backgroundImageDownloadURL}
        isPaid={!!boardDoc.isPaid}
        creatorUID={boardDoc.creatorUID}
        on:six-seconds-elapsed
      > 
        {#if showEditDeleteButtons}
          <!-- <div style="
            margin-left: {canvasWidth - 240 - 164}px; 
            display: flex; 
            align-items: center; 
            flex-direction: row-reverse"
          > -->
          <div style="display: flex; align-items: center">
            {#if !boardDoc.isPaid} 
              <Button 
                on:click={() => makePaid(boardDoc)}
                style="margin-right: 6px; background-color: rgb(90 90 90 / 100%); color: white"
              >
                Freely available
              </Button>
            {:else}
              <Button
                on:click={() => makeFree(boardDoc)}
                style="margin-right: 6px; background-color: purple; color: white"
              >
                Subscribers-only
              </Button>
            {/if}

            <!-- boardDoc will always have a creatorUID because anonymous login -->
            {#if $user.uid === boardDoc.creatorUID || !boardDoc.creatorUID || $adminUIDs.includes($user.uid)}
              <Button 
                on:click={() => dispatch('video-rearrange')}
                style="margin-right: 6px; background-color: rgb(90 90 90 / 100%); color: white">
                Rearrange
              </Button>  

              <Button 
                on:click={async () => { 
                  await revertVideoToBoard(
                    boardDoc, 
                    () => deleteAllStrokesFromDb({ boardPath: boardDoc.path, strokesArray })
                  )
                  dispatch('video-deleted')
                }} 
                style="background-color: rgb(90 90 90 / 100%); color: white; margin-right: 10px;">
                Delete
              </Button>
            {/if}
          </div>
        {/if}
      </DoodleVideo>
    </div>
  </RenderlessFetchStrokes>
{/if}

<script>
  import { maxAvailableWidth, maxAvailableHeight } from '../store.js'
  import DoodleVideo from '$lib/DoodleVideo.svelte'
  import RenderlessFetchStrokes from '$lib/RenderlessFetchStrokes.svelte'
  import { lazyCallable } from '../helpers/actions.js'
  import Button, { Icon } from '@smui/button'
  import { user, adminUIDs } from '../store.js'
  import { revertVideoToBoard, updateFirestoreDoc } from '../helpers/crud.js'
  import { deleteAllStrokesFromDb } from '../helpers/properDelete.js'
  import { createEventDispatcher } from 'svelte'

  export let boardDoc
  export let boardDbPath = '' // 
  export let canvasWidth = maxAvailableWidth
  export let canvasHeight = maxAvailableHeight

  export let showEditDeleteButtons = true

  const dispatch = createEventDispatcher()

  function makePaid (boardDoc) {
    updateFirestoreDoc(boardDoc.path, {
      isPaid: true
    })
  }

  function makeFree (boardDoc) {
    updateFirestoreDoc(boardDoc.path, {
      isPaid: false
    })
  }
</script>