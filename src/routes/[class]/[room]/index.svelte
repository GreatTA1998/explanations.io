<script context="module">
  export function load ({ page }) {
    console.log('load function from [room].svelte')
    return {
      props: {
        classID: page.params.class,
        roomID: page.params.room
      }
    }
  }
</script>

<!-- Lazy loading -->
{#if roomDoc}
	<div use:portal={'main-content'} style="height: 100vh">
		{#each roomDoc.blackboards as boardID (boardID) }
			<RenderlessBoardMethods dbPath={boardsDbPath + boardID} 
				let:boardDoc={boardDoc}
				let:fetchStrokes={fetchStrokes}
        let:listenToStrokes={listenToStrokes}
				let:isFetchingStrokes={isFetchingStrokes}
				let:strokesArray={strokesArray}
        let:handleNewlyDrawnStroke={handleNewlyDrawnStroke}
        let:deleteAllStrokesFromDb={deleteAllStrokesFromDb}
			>
        {#if boardDoc}
          {#if boardDoc.audioDownloadURL }
            <div use:lazyCallable={fetchStrokes}>
              {#if !strokesArray}
                <Blackboard strokesArray={[]}/>  <!-- quick-fix for proper placeholder size -->
              {:else}
                <DoodleVideo 
                  {strokesArray} 
                  audioDownloadURL={boardDoc.audioDownloadURL}
                />
              {/if}
            </div>
          {:else}
            <div use:lazyCallable={listenToStrokes}>
              {#if !strokesArray}
                <Blackboard strokesArray={[]}/> <!-- quick-fix for proper placeholder size -->
              {:else}
                <Blackboard 
                  {strokesArray} 
                  on:stroke-drawn={(e) => handleNewlyDrawnStroke(e.detail.newStroke)}
                >
                  <Button on:click={deleteAllStrokesFromDb}>
                    Wipe board
                  </Button>
                </Blackboard>
              {/if}
            </div>
          {/if}
        {/if}
      </RenderlessBoardMethods>
		{/each}
	</div>
{/if}

<script>
  import RenderlessBoardMethods from '$lib/RenderlessBoardMethods.svelte'
  import Blackboard from '../../../lib/Blackboard.svelte'
  import DoodleVideo from '$lib/DoodleVideo.svelte'
  import DoodleAnimation from '$lib/DoodleAnimation.svelte'
  import { fetchDoc, fetchDocs } from '../../../database.js'
  import { onMount } from 'svelte'
  import List, { Item, Text } from '@smui/list'
  import Button from '@smui/button'
  import { portal, lazyCallable } from '../../../helpers/actions.js'
  import { goto, invalidate, prefetch, prefetchRoutes } from '$app/navigation';
  import { user } from '../../../store.js'

  export let classID
  export let roomID

  let roomDoc
  const boardsDbPath = `classes/${classID}/blackboards/`
  const roomsDbPath = `classes/${classID}/rooms/`

  if (!$user.uid) {
    console.log('redirecting to tutorial')
    goto('/')
  }

  // slugify the classID if it contains '.', convert to '-' regenerate 6.036 and 6.046's class
  onMount(async () => {
    roomDoc = await fetchDoc(roomsDbPath + roomID)
  })

  $: roomID, updateRoomDoc() 

  async function updateRoomDoc () {
    roomDoc = await fetchDoc(roomsDbPath + roomID)
  }
</script>

