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

<!-- TODO: potentially better for `roomDocs` related code to live in [class].svelte instead -->
{#if roomDocs.length > 0}
  <div use:portal={'side-drawer-list'}>
		{#each roomDocs as roomDoc}
		  {#if roomDoc.name }
				<Item 
					on:click={() => goto(`/${classID}/${roomDoc.id}`)}
					selected={roomDoc.id === roomID}
				>
					{roomDoc.name}
				</Item>
			{/if}
		{/each}
  </div>
{/if}

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
              <DoodleVideo 
                {strokesArray} 
                audioDownloadURL={boardDoc.audioDownloadURL}
              />
            </div>
          {:else}
            <div use:lazyCallable={listenToStrokes}>
              {#if strokesArray}
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
  import { portal } from '../../../helpers/actions.js'
  import { goto, invalidate, prefetch, prefetchRoutes } from '$app/navigation';
  import { user } from '../../../store.js'

  export let classID
  export let roomID

  let roomDoc
  let roomDocs = []
  const boardsDbPath = `classes/${classID}/blackboards/`
  const roomsDbPath = `classes/${classID}/rooms/`

  if (!$user.uid) {
    console.log('redirecting to tutorial')
    goto('/')
  }

  // slugify the classID if it contains '.', convert to '-' regenerate 6.036 and 6.046's class
  onMount(async () => {
    roomDocs = await fetchDocs(roomsDbPath)
    roomDoc = await fetchDoc(roomsDbPath + roomID)
  })

  function lazyCallable (node, callback) {
    let observer = new IntersectionObserver (
      (entries) => {
        // for some god damn reason the callbacks fire on initialization, even when there is no intersection,
        // so we have to check manually
        for (const entry of entries) {
          if (entry.isIntersecting) {
            callback()
            observer.unobserve(node)
            return
          }
        }
      }, 
      {
        root: null, // use viewport as root
        threshold: 0.1,
        rootMargin: '0px' // shrink/expand the root element's area, not very useful
      }
    )
    observer.observe(node)
  }

  $: roomID, updateRoomDoc() 

  async function updateRoomDoc () {
    roomDoc = await fetchDoc(roomsDbPath + roomID)
  }
</script>

