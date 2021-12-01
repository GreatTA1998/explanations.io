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
			<FetchBlackboard dbPath={boardsDbPath + boardID} 
				let:boardDoc={boardDoc}
				let:fetchStrokes={fetchStrokes}
				let:isFetchingStrokes={isFetchingStrokes}
				let:strokesArray={strokesArray}
			>
				{#if !strokesArray}
					{#if isFetchingStrokes}
            <!--  -->
					{/if}
					<div use:lazyFetching={fetchStrokes} style="height: 500px">
						<!-- the blackboard serves as a placeholder loader -->
						<Blackboard strokesArray={[]}></Blackboard>
					</div> 
				{:else if boardDoc }
					{#if boardDoc.audioDownloadURL }
						<DoodleVideo {strokesArray} audioDownloadURL={boardDoc.audioDownloadURL}/>
					{:else if boardDoc.creator }
						<DoodleAnimation {strokesArray}/>
					{:else}
						<Blackboard {strokesArray}/>
					{/if}
				{/if}
				</FetchBlackboard>
		{/each}
	</div>
{/if}

<script>
  import FetchBlackboard from '../../components/FetchBlackboard.svelte'
  import Blackboard from '../../components/Blackboard.svelte'
  import DoodleVideo from '../../components/DoodleVideo.svelte'
  import DoodleAnimation from '../../components/DoodleAnimation.svelte'
  import { fetchDoc, fetchDocs } from '../../../database.js'
  import { onMount } from 'svelte'
  import List, { Item, Text } from '@smui/list'
  import { portal } from '../../../actions.js'
  import { goto, invalidate, prefetch, prefetchRoutes } from '$app/navigation';
  import { hasFetchedUser, user } from '../../../store'

  export let classID
  export let roomID

  let roomDoc
  let roomDocs = []
  const boardsDbPath = `classes/${classID}/blackboards/`
  const roomsDbPath = `classes/${classID}/rooms/`

  $: if ($hasFetchedUser) {
    if ($user === {}) {
      console.log('redirecting to tutorial')
      goto('/')
    }
  }

  // slugify the classID if it contains '.', convert to '-' regenerate 6.036 and 6.046's class
  onMount(async () => {
    roomDocs = await fetchDocs(roomsDbPath)
    roomDoc = await fetchDoc(roomsDbPath + roomID)
  })

  function lazyFetching (node, fetchStrokes) {
    let observer = new IntersectionObserver (
      (entries) => {
        // for some god damn reason the callbacks fire on initialization, even when there is no intersection,
        // so we have to check manually
        for (const entry of entries) {
          if (entry.isIntersecting) {
            fetchStrokes()
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

  // TODO: isn't the function a redundant wrapper?
  function routeToPage(route, replaceState = true) {
    goto(`/${route}`, { replaceState }) 
  }
</script>

