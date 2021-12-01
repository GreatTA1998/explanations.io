<script context="module">
  export function load ({ page }) {
    console.log('load() from [class __layout].svelte')
    console.log('page =', page)
    return {
      props: {
        classID: page.params.class,
        roomID: page.params.room
      }
    }
  }  
</script>

<LeftDrawer>
	{#if rooms}
		<div use:portal={'side-drawer-list'}>
			{#each rooms as room (room.id)}
				{#if room.name }
					<Item 
						on:click={() => goto(`/${classID}/${room.id}`)}
						selected={room.id === roomID}
					>
						{room.name}
					</Item>
				{/if}
			{/each}
		</div>
	{/if}
</LeftDrawer>

<!-- <main></main> tag might be important -->
<slot>

</slot>

<script>
	import LeftDrawer from '$lib/LeftDrawer.svelte'
  import { onDestroy } from 'svelte'
  import List, { Item, Text } from '@smui/list'
  import { portal } from '../../helpers/actions.js'
  import { goto } from '$app/navigation'
  import { collection, getFirestore, onSnapshot } from 'firebase/firestore'

  export let classID;
  export let roomID;
  let participants
  let rooms

  let unsubFuncs = []
	
  onDestroy(() => {
    for (const unsubFunc of unsubFuncs) {
      unsubFunc()
    }
  })

  const participantsRef = collection(
    getFirestore(), 
    `classes/${classID}/participants`
  )  
	const roomsRef = collection(
    getFirestore(),
    `classes/${classID}/rooms`
  )
  unsubFuncs.push(
		onSnapshot(participantsRef, snapshot => { // onSnapshot does NOT return a promise
      const docs = []
      snapshot.forEach(doc => { 
        docs.push({ 
          id: doc.id, 
          ref: doc.ref.path, 
          ...doc.data() 
        })
      });
      participants = docs
    })
  )
  unsubFuncs.push(
		onSnapshot(roomsRef, snapshot => { // onSnapshot does NOT return a promise
			const docs = []
			snapshot.forEach(doc => { 
				docs.push({ 
					id: doc.id, 
					ref: doc.ref.path, 
					...doc.data() 
				})
			});
			rooms = docs
    })
  )
</script>

<!-- <style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 1024px;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style> -->

