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

<!-- This component re-renders everytime classID changes: https://github.com/sveltejs/svelte/issues/1469#issuecomment-698955660 -->
{#key classID}
  <RenderlessMyDocUpdater 
    {classID} 
    {roomID}
  />
{/key}

<div id="container-for-audio-elements">

</div>

<DailyVideoConference {roomID}
  let:activeSpeakerID={activeSpeakerID}
  let:toggleMic={toggleMic}
  let:firestoreIDToDailyID={firestoreIDToDailyID}
>
  <LeftDrawer {nameOfClass} {descriptionOfClass}>
    {#each rooms as room (room.id)}
      <div on:click={() => goto(`/${classID}/${room.id}`)} style="padding: 6px;">
        <!-- selected={room.id === roomID} class:not-selected={room.id !== roomID} -->
        <div class={room.id === roomID ? 'selected' : '' } style="padding: 6px 10px 6px 8px; opacity: 90%; border-radius: 5px;">
          {#if room.name}
            <div class:question-item={'?' === room.name.charAt(room.name.length - 1) && room.id !== roomID} 
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
            <div style="margin-bottom: 2px;">(empty room)</div>
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
                      <div on:click|preventDefault|stopPropagation={toggleMic} style="margin-right: 0; margin-left: auto; padding-top: 5px">
                        <Switch checked={$dailyRoomParticipants.local.audio} style="margin: 0 !important"/>
                      </div>
                      {#if $dailyRoomParticipants.local.audio}
                        <div style="font-size: 0.7rem; margin-left: 6px; color: #33ff33">
                          voice on
                        </div>
                      {:else}
                        <div style="font-size: 0.7rem; margin-left: 6px; color: red">
                          muted
                        </div>
                      {/if}
                    </div>             
                  {:else if $dailyRoomParticipants[firestoreIDToDailyID[person.browserTabID]]}                      
                    {#if $dailyRoomParticipants[firestoreIDToDailyID[person.browserTabID]].audio} 
                      <span class="material-icons" style="margin-right: 0; margin-left: auto; font-size: 1.1rem; color: {(firestoreIDToDailyID && (firestoreIDToDailyID[person.browserTabID]) && (firestoreIDToDailyID[person.browserTabID]) === activeSpeakerID) ? 'white' : ''}">
                        mic
                      </span>
                    {:else}
                      <span class="material-icons" style="margin-right: 0; margin-left: auto; font-size: 1.1rem; color: red">
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
    {/each}

    <!-- New room -->
    <div on:click={createNewRoom} style="padding: 6px; display: flex; align-items: center;">
      <span class="material-icons" style="margin-left: 6px; margin-right: 5px; margin-top: 2.5px; font-size: 1.2rem;">
        add
      </span>
      new room
    </div>
  </LeftDrawer>
</DailyVideoConference>

<!-- <main></main> tag might be important -->
<slot>

</slot>

<script>
	import LeftDrawer from '$lib/LeftDrawer.svelte'
  import RenderlessMyDocUpdater from '$lib/RenderlessMyDocUpdater.svelte'
  import DailyVideoConference from '$lib/DailyVideoConference.svelte'
  import { onDestroy, onMount } from 'svelte'
  import { goto } from '$app/navigation'
  import { browser } from '$app/env'
  import { collection, getDoc, doc, getFirestore, onSnapshot, orderBy, setDoc, query, getDocs, updateDoc } from 'firebase/firestore'
  import { calculateCanvasDimensions } from '../../helpers/canvas'
  import { user, canvasHeight, canvasWidth, roomToPeople, browserTabID, dailyRoomParticipants } from '../../store.js'
  import Switch from '@smui/switch';
  import { getRandomID } from '../../helpers/utility.js';
  
  export let classID;
  export let roomID;

  let unsubFuncs = []
  let nameOfClass = ''
  let descriptionOfClass = ''
  let rooms = [] // AF([]) means not fetched rooms, there's no point in a server with empty rooms, there will be a lobby 

	// START OF RESIZE LOGIC 
  let resizeDebouncer = null

  $: if (classID) {
    unsubDbListeners()
    $roomToPeople = []
    fetchClassDoc()
    fetchParticipants()
    fetchRooms()
  }

  $: if (roomID) {
    const userRef = doc(getFirestore(), `users/${$user.uid}`)
    updateDoc(userRef, {
      mostRecentClassAndRoomID: `/${classID}/${roomID}`
    })
  }

  function unsubDbListeners () {
    for (const unsubFunc of unsubFuncs) {
      unsubFunc()
    }
    unsubFuncs = []
  }

  async function fetchClassDoc () {
    const classDocRef = doc(getFirestore(), `classes/${classID}`)
    const classDoc = await getDoc(classDocRef)
    nameOfClass = classDoc.data().name
    descriptionOfClass = classDoc.data().description
  }

  onMount(async () => {
    // AWAIT FIX: __layout mounts twice: see issue https://github.com/sveltejs/kit/issues/2130
    if (browser) {
      window.addEventListener('resize', debouncedResizeHandler)
    } else {
      console.log('no browser')
    }
    debouncedResizeHandler()
  })

  onDestroy(() => {
    unsubDbListeners()
    if (browser) {
      window.removeEventListener('resize', debouncedResizeHandler)
    }
  })

  async function createNewRoom () {
    for (const room of rooms) {
      if (room.name === '') {
        alert('There is still an empty room available')
        return
      }
    }

    const newDocID = getRandomID()
    const classPath = `classes/${classID}/`
    const roomRef = doc(getFirestore(), classPath + `rooms/${newDocID}`)
    const blackboardRef = doc(getFirestore(), classPath + `blackboards/${newDocID}`)
    await Promise.all([
      setDoc(roomRef, {
        name: '',
        blackboards: [newDocID],
        date: new Date().toISOString()
          // rooms have an order property, look at v3's drag and drop source code
      }),
      setDoc(blackboardRef, {
        // empty doc
      })
    ])
  }

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


  function fetchParticipants () {
    const participantsRef = collection(
      getFirestore(), 
      `classes/${classID}/participants`
    )  
     
    unsubFuncs.push(
      onSnapshot(participantsRef, (snapshot) => { // onSnapshot does NOT return a promise
        snapshot.docChanges().forEach(change => {
          const person = change.doc.data()
          const roomID = person.currentRoomID
          
          switch (change.type) {
            case 'added': 
              if (!$roomToPeople[roomID]) $roomToPeople[roomID] = []
              $roomToPeople[roomID] = [...$roomToPeople[roomID], person]
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
              $roomToPeople[roomID] = [...$roomToPeople[roomID], person]
              break
            case 'removed':
              $roomToPeople[roomID] = $roomToPeople[roomID].filter(p => p.browserTabID !== person.browserTabID)
              break
          }
        })
      })
    )
  }

  function fetchRooms () {
    const roomsRef = collection(
      getFirestore(),
      `classes/${classID}/rooms`
    )
    const roomsQuery = query(
      roomsRef, 
      orderBy('date', 'asc')
    )
    unsubFuncs.push(
      onSnapshot(roomsQuery, async (snapshot) => { // onSnapshot does NOT return a promise
        const docs = []
        snapshot.forEach(doc => { 
          docs.push({ 
            id: doc.id, 
            ref: doc.ref.path, 
            ...doc.data()  
          })
        })
        rooms = docs
        
        // QUICKFIX FOR BACKWARDS COMPATIBILITY
        if (rooms.length === 0) {
          // means they have no 'date property'
            const roomsRef = collection(
              getFirestore(),
              `classes/${classID}/rooms`
            )
            const rooms = []
            const roomsResult = await getDocs(roomsRef)
            roomsResult.docs.forEach(doc => {
              rooms.push({
                id: doc.id,
                ...doc.data()
              })
            })
            for (const room of rooms) {
              const roomRef = doc(getFirestore(), `classes/${classID}/rooms/${room.id}`)
              updateDoc(roomRef, {
                date: Date.now()
              })
            }
            // can make it atomic with a batch operation
        }
      })
    )
  }
</script>

<style>
  .question-item {
    color: rgb(19, 145, 230);
  }

  .selected {
    font-weight: 500;
    background-color:rgb(45, 44, 44);
    color: white;
  }

  .speaking {
    font-weight: 800;
  }
</style>