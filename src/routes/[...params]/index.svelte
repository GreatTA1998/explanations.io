<script context="module">
  export function load ({ page }) {
    return {
      props: {
        myProps: page.params
      }
    }
  }  
</script>

{#if roomDocs.length > 0}
  <div use:portal={'side-drawer-list'}>
		{#each roomDocs as roomDoc}
		  {#if roomDoc.name }
				<Item 
					on:click={() => routeToPage(`room/${roomDoc.id}`)}
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
    import db, { fetchDoc, fetchDocs } from '../../database.js'
    import FetchBlackboard from '../components/FetchBlackboard.svelte'
    import Blackboard from '../components/Blackboard.svelte'
    import DoodleVideo from '../components/DoodleVideo.svelte'
    import DoodleAnimation from '../components/DoodleAnimation.svelte'
    // import LeftDrawer from '../../LeftDrawer.svelte'
    import { portal } from "../../actions.js";
    import { onMount } from 'svelte'
    import { storeUser } from '../../store.js'
    import { collection, getDocs, getDoc, query, where, doc  } from 'firebase/firestore' 
  
    import List, { Item, Text } from '@smui/list';
    import { goto } from '$app/navigation';

    export let myProps

    let classID
    let areaID
    let roomID
    let classDoc
    let areaDocs

    [classID, areaID, roomID] = myProps.params.split('/')
    console.log('classID =', classID, areaID, roomID)
    
  
    onMount(async () => {
      classDoc = await fetchDoc('classes/' + classID)
      areaDocs = await fetchDocs(`classes/${classID}/roomTypes)`)
      console.log('classDoc =', classDoc)
      console.log('areaDocs =', areaDocs)
    })
  
    let roomDoc
    let roomDocs = []
    const boardsDbPath = 'classes/lvzQqyZIV1wjwYnRV9hn/blackboards/'
    const roomsDbPath = 'classes/lvzQqyZIV1wjwYnRV9hn/rooms/'

    function routeToPage(route, replaceState = false) {
      goto(`/${route}`, { replaceState }) 
    }

    function lazyFetching (node, fetchStrokes) {
      let observer = new IntersectionObserver (
        (entries) => {
          for (const entry of entries) {
            // for some god damn reason the callbacks fire on initialization, even when there is no intersection,
            // so we have to check manually
            if (entry.isIntersecting) {
              fetchStrokes()
              return
            }
          }
        }, 
        {
          root: null, // use viewport 
          threshold: 0.1,
          rootMargin: '0px' // shrink/expand the root element's area, not very useful
        }
      )
      observer.observe(node)
    }

    storeUser.subscribe(async (newUserValue) => {
      console.log('new user value was set =', newUserValue)
      if (newUserValue) {
        roomDocs = await fetchDocs(roomsDbPath)
        const roomSnapshot = await getDoc(doc(db, roomsDbPath + roomID))
        roomDoc = { id: roomSnapshot.id, ...roomSnapshot.data() }
        console.log('roomDoc =', roomDoc)
      }
    })

    $: roomID, updateRoomDoc() 

    async function updateRoomDoc () {
      const roomSnapshot = await getDoc(doc(db, roomsDbPath + roomID))
      roomDoc = { id: roomSnapshot.id, ...roomSnapshot.data() }
    }
  
  </script>