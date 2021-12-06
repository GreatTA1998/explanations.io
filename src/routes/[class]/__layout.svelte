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

<RenderlessMyDocUpdater 
  {classID} 
  {roomID}
/>

<div id="container-for-audio-elements">

</div>

<DailyVideoConference {roomID}
  let:activeSpeakerID={activeSpeakerID}
  let:toggleMic={toggleMic}
  let:firestoreIDToDailyID={firestoreIDToDailyID}
>
  <LeftDrawer>
    {#if rooms}
      {#each rooms as room (room.id + roomID)}
        {#if room.name !== undefined } <!-- TODO: room.name can't be undefined, AF('') better -->
          <div on:click={() => goto(`/${classID}/${room.id}`)}
            style="padding: 6px;" 
          >
            <!-- selected={room.id === roomID} class:not-selected={room.id !== roomID} -->
            <div class={room.id === roomID ? 'selected' : '' } style="padding: 6px 10px 6px 8px; opacity: 90%; border-radius: 5px;">
              {#if room.name}
                <div class:question-item={'?' === room.name.charAt(room.name.length - 1)} 
                  style="
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis
                    margin-bottom: 2px;
                  "
                >
                  {room.name}
                </div>
              {:else if room.name === ''}
                <div style="margin-bottom: 2px;">(no title)</div>
              {/if}

              {#if $roomToPeople[room.id]}
                {#each $roomToPeople[room.id] as person (person.browserTabID)}
                  <div style="display: flex; align-items: center">
                    <div style="font-size: 0.7rem; margin-left: 6px;" 
                      class:speaking={firestoreIDToDailyID && (firestoreIDToDailyID[person.browserTabID]) && (firestoreIDToDailyID[person.browserTabID]) === activeSpeakerID}>
                      {person.name} 
                    </div> 
                    {#if Object.keys($dailyRoomParticipants).length > 0}
                      {#if person.browserTabID === $browserTabID}     
                        <div style="display: flex; align-items: center; margin-right: 0; margin-left: auto">
                          <div on:click|preventDefault|stopPropagation={toggleMic} style="margin-right: 0; margin-left: auto; padding-top: 3px">
                            <Switch checked={$dailyRoomParticipants.local.audio} style="margin: 0 !important"/>
                          </div>
                          {#if $dailyRoomParticipants.local.audio}
                            <div style="font-size: 0.8rem; margin-left: 6px; color: green">voice on</div>
                          {:else}
                            <div style="font-size: 0.8rem; margin-left: 6px; color: red">muted</div>
                          {/if}
                        </div>             
                      {/if}
                      {#if $dailyRoomParticipants[firestoreIDToDailyID[person.browserTabID]]}                      
                        {#if $dailyRoomParticipants[firestoreIDToDailyID[person.browserTabID]].audio} 
                          <span class="material-icons" style="margin-right: 0; margin-left: auto; font-size: 1.2rem; color: {(firestoreIDToDailyID && (firestoreIDToDailyID[person.browserTabID]) && (firestoreIDToDailyID[person.browserTabID]) === activeSpeakerID) ? 'white' : ''}">
                            mic
                          </span>
                        {:else}
                          <span class="material-icons" style="margin-right: 0; margin-left: auto; font-size: 1.2rem; color: red">
                            mic_off
                          </span>
                        {/if}
                      {/if}
                    {/if}
                  </div>
                {/each}
              {/if}
            </div>
          </div>
        {/if}
      {/each}
    {/if}
  </LeftDrawer>
</DailyVideoConference>

<!-- <main></main> tag might be important -->
<slot>

</slot>

<script>
	import LeftDrawer from '$lib/LeftDrawer.svelte'
  import RenderlessMyDocUpdater from '$lib/RenderlessMyDocUpdater.svelte'
  import DailyVideoConference from '$lib/DailyVideoConference.svelte'
  import Button from '@smui/button'
  import { onDestroy, onMount } from 'svelte'
  import { portal } from '../../helpers/actions.js'
  import { goto } from '$app/navigation'
  import { collection, getFirestore, onSnapshot } from 'firebase/firestore'
  import { calculateCanvasDimensions } from '../../helpers/canvas'
  import { browser } from '$app/env'
  import { canvasHeight, canvasWidth, roomToPeople, browserTabID, dailyRoomParticipants } from '../../store.js'
  // import List, { Item, Text, SecondaryText } from '@smui/list'
  import Switch from '@smui/switch';
  import FormField from '@smui/form-field';
  
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
    console.log("__layout mounted, but should only be done once")
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
      snapshot.docChanges().forEach(change => {
        const person = change.doc.data()
        const roomID = person.currentRoomID
        
        switch (change.type) {
          case 'added': 
            if (!$roomToPeople[roomID]) $roomToPeople[roomID] = []
            $roomToPeople[roomID].push(person)
            break
          case 'modified':
            // first remove, inefficiently.
            for (const id of Object.keys($roomToPeople)) {
              for (const p of $roomToPeople[id]) {
                if (p.browserTabID === person.browserTabID) {
                  $roomToPeople[id] = $roomToPeople[id].filter(p => p.browserTabID !== person.browserTabID)
                }
              } 
            }
            // then add (identical to code above)
            if (!$roomToPeople[roomID]) $roomToPeople[roomID] = []
            $roomToPeople[roomID].push(person)
            break
          case 'removed':
            $roomToPeople[roomID] = $roomToPeople[roomID].filter(p => p.browserTabID !== person.browserTabID)
            break
        }
      })
    })
  )
</script>

<style>
  .question-item {
    color: rgb(19, 145, 230);
  }

  .selected {
    font-weight: 500;
    background-color:rgb(148, 221, 159);
  }

  .speaking {
    font-weight: 800;
  }

  /* .not-selected {
    opacity: 80%;
  } */
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

