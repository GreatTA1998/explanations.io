<script context="module">
  export function load ({ page }) {
    return {
      props: {
        classID: page.params.class,
        roomID: page.params.room
      }
    }
  }  
</script>

<RenderlessMyDocUpdater {classID} {roomID}/>

<LeftDrawer>
	{#if rooms}
		<div use:portal={'side-drawer-list'}>
			{#each rooms as room ('room' + room.id)}
        <!-- temporary measure -->
        {#if room.name !== undefined }
          <Item 
            on:click={() => goto(`/${classID}/${room.id}`)}
            selected={room.id === roomID}
          > 
            {#if room.name}
              <div class:question-item={'?' === room.name.charAt(room.name.length - 1)}>
                {room.name}
              </div>
              
            {:else if room.name === ''}
              <div>(no title)</div>
            {/if}

            {#if $roomToPeople[room.id]}
              {#each $roomToPeople[room.id] as person ('person' + person.uid)}
                <div>{person.name}</div>
              {/each}
            {/if}
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
  import RenderlessMyDocUpdater from '$lib/RenderlessMyDocUpdater.svelte'
  import { onDestroy, onMount } from 'svelte'
  import List, { Item, Text, SecondaryText } from '@smui/list'
  import { portal } from '../../helpers/actions.js'
  import { goto } from '$app/navigation'
  import { collection, getFirestore, onSnapshot } from 'firebase/firestore'
  import { calculateCanvasDimensions } from '../../helpers/canvas'
  import { browser } from '$app/env'
  import { canvasHeight, canvasWidth, roomToPeople  } from '../../store.js'

  export let classID;
  export let roomID;
  let rooms

	// START OF RESIZE LOGIC 
  let resizeDebouncer = null
  onDestroy(() => {
    for (const unsubFunc of unsubFuncs) {
      unsubFunc()
    }
    if (browser) {
      window.removeEventListener('resize', debouncedResizeHandler)
    }
  })

  onMount(() => {
    if (browser) {
      window.addEventListener('resize', debouncedResizeHandler)
    }
    debouncedResizeHandler()
  })

  // TODO: rename the function 
  function resizeCanvas () {
    const { height, width } = calculateCanvasDimensions()
    canvasHeight.set(height)
    canvasWidth.set(width)
  }

  function debouncedResizeHandler () {
    if (resizeDebouncer) clearTimeout(resizeDebouncer)
    setTimeout(resizeCanvas, 100)
  }
  // END OF RESIZE LOGIC

  // HYDRATE PARTICIPANTS AND ROOMS
  let unsubFuncs = []
  const participantsRef = collection(
    getFirestore(), 
    `classes/${classID}/participants`
  )  
	const roomsRef = collection(
    getFirestore(),
    `classes/${classID}/rooms`
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
  unsubFuncs.push(
		onSnapshot(participantsRef, (snapshot) => { // onSnapshot does NOT return a promise
      const docs = []
      snapshot.docChanges().forEach(change => {
        const person = change.doc.data()
        const roomID = person.currentRoomID
        
        switch (change.type) {
          case 'added': 
            if (!$roomToPeople[roomID]) $roomToPeople[roomID] = []
            $roomToPeople[roomID].push(person)
            return
          case 'modified':
            // first remove, inefficiently.
            for (const id of Object.keys($roomToPeople)) {
              for (const p of $roomToPeople[id]) {
                if (p.uid === person.uid) {
                  $roomToPeople[id] = $roomToPeople[id].filter(p => p.uid !== person.uid)
                }
              } 
            }
            // then add (identical to code above)
            if (!$roomToPeople[roomID]) $roomToPeople[roomID] = []
            $roomToPeople[roomID].push(person)
            return
          case 'removed':
            $roomToPeople[roomID] = $roomToPeople[roomID].filter(p => p.uid !== person.uid)
        }
      })

      snapshot.forEach(doc => { 
        docs.push({ 
          id: doc.id, 
          ref: doc.ref.path, 
          ...doc.data() 
        })
      });
    })
  )
</script>

<style>
  .question-item {
    color: red;
  }
</style>

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

