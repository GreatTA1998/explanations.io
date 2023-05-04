<!-- This component re-renders everytime classID changes: https://github.com/sveltejs/svelte/issues/1469#issuecomment-698955660 -->
{#if $user.uid}
  {#key classID}
    <RenderlessMyDocUpdater 
      {classID} 
      {roomID}
    />
  {/key}
{/if}

<div id="container-for-audio-elements">

</div>

<DailyVideoConference 
  {roomID}
  {willJoinVoiceChat}
  let:activeSpeakerID={activeSpeakerID}
  let:toggleMic={toggleMic}
  let:firestoreIDToDailyID={firestoreIDToDailyID}
>
  <LeftDrawer {nameOfClass} {descriptionOfClass}>
    <div class:orange-highlight={roomID === "request-video"}>

    <Item on:click={() => goto(`/${classID}/request-video`)}>
      <span class="material-icons" style="font-size: 0.9rem; margin-top: 2px;">
        add
      </span>
      <div style="margin-right: 4px;"></div>
      <div>
        New question
      </div>
    </Item>
    </div>

    <Item on:click={() => goto(`/${classID}/become-helper`)}>
      <span class="material-icons">draw</span>
      Sign up to teach
    </Item> 

    <div style="margin-bottom: 24px;"></div>

    <div style="display: flex; align-items: center;">
      <div style="text-transform: uppercase; font-weight: 500; color: grey; margin-left: 12px;">
        Blackboard rooms
      </div>
      <button on:click={createNewRoom}>+</button>
    </div>

    <!-- (room.id + roomID) -->
    <!-- `room.id + roomID` forces re-render when you switch rooms because sometimes the CSS styles don't update properly  -->
    <!-- each root rooms -->
    {#each rootRooms as room, i (room.id)}
      {#if !room.parentRoomID}
        <LeftDrawerRecursiveRoom 
          {room} 
          {firestoreIDToDailyID}
          {toggleMic}
          {activeSpeakerID}
          {willJoinVoiceChat}
          {roomID}
          {classID}
          orderWithinLevel={i}
          roomsInThisLevel={rootRooms}
          parentRoomIDs={['']}
        />
      {/if}
    {/each}
  </LeftDrawer>
</DailyVideoConference>

<slot>

</slot>

<script>
  import List, { Item, Text } from '@smui/list'
	import LeftDrawer from '$lib/LeftDrawer.svelte'
  import RenderlessMyDocUpdater from '$lib/RenderlessMyDocUpdater.svelte'
  import DailyVideoConference from '$lib/DailyVideoConference.svelte'
  import { onDestroy, onMount } from 'svelte'
  import { goto } from '$app/navigation'
  import { browser } from '$app/environment'
  import { collection, getDoc, doc, getFirestore, onSnapshot, orderBy, setDoc, query, getDocs, updateDoc, deleteDoc, writeBatch, arrayRemove, arrayUnion} from 'firebase/firestore'
  import { computeMaxAvailableDimensions } from '../../helpers/canvas'
  import { user, roomToPeople, browserTabID, dailyRoomParticipants, willPreventPageLeave, adminUIDs, drawerWidth, maxAvailableHeight, maxAvailableWidth } from '../../store.js'
  import { createRoomDoc } from '../../helpers/crud.js'
  import LeftDrawerRecursiveRoom from '$lib/LeftDrawerRecursiveRoom.svelte'

  export let data;
  let { classID, roomID } = data;
  $: ({ classID, roomID } = data); // so it stays in sync when `data` changes

  const classPath = `classes/${classID}/`
  let unsubFuncs = []
  let nameOfClass = ''
  let descriptionOfClass = ''
  let rooms = [] // AF([]) means not fetched rooms, there's no point in a server with empty rooms, there will be a lobby 

  let willJoinVoiceChat = false

	// START OF RESIZE LOGIC 
  let resizeDebouncer = null

  // NOTE: resize logic is currently scattered everywhere within this file, refactor later
  // adjust dimensions whenever $drawerWidth changes
  $: debouncedResizeHandler($drawerWidth)

  $: if (classID) {
    unsubDbListeners()
    $roomToPeople = []
    fetchClassDoc()
    fetchParticipants()
    fetchRooms()
  }

  $: if (roomID && $user.uid) {
    const userRef = doc(getFirestore(), `users/${$user.uid}`)
    updateDoc(userRef, {
      mostRecentClassAndRoomID: `/${classID}/${roomID}`
    })
  }

  $: rootRooms = rooms.filter(room => room.parentRoomID === '')

  onMount(async () => {
    // AWAIT FIX: __layout mounts twice: see issue https://github.com/sveltejs/kit/issues/2130
    if (browser) {
      // if (window.matchMedia('screen and (max-width: 480px)').matches) {
      //   drawerWidth.set(0)
      // }

      window.addEventListener('resize', debouncedResizeHandler)
    } else {
      console.log('no browser')
    }
    debouncedResizeHandler()
  })

  // the only possibility (I think) of this getting destroyed is logging out and returning to the home page
  onDestroy(() => {
    unsubDbListeners()
    if (browser) {
      window.removeEventListener('resize', debouncedResizeHandler)
    }
  })

  function dragover_handler (e) {
    e.preventDefault()
  }

  // user dragged video into another room
  async function moveVideoIntoAnotherRoom (e, droppedRoomID) {
    const data = e.dataTransfer.getData('text/plain')
    const [i, boardID] = data.split(':')

    const db = getFirestore()
    const batch = writeBatch(db)
    const roomsPath = `classes/${classID}/rooms`

    // update old room (i.e. our current room)
    batch.update(doc(db, `${roomsPath}/${roomID}`), {
      blackboards: arrayRemove(boardID)
    })

    // update new room 
    batch.update(doc(db, `${roomsPath}/${droppedRoomID}`), {
      blackboards: arrayUnion(boardID)
    })
    await batch.commit()
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

  async function createNewRoom () {
    const newRoomID = await createRoomDoc(classPath)
    goto(`/${classID}/${newRoomID}`)
  }

  function recomputeMaxAvailableDimensions () {
    const { width, height } = computeMaxAvailableDimensions()
    maxAvailableWidth.set(width)
    maxAvailableHeight.set(height)
  }

  function debouncedResizeHandler () {
    if (resizeDebouncer) clearTimeout(resizeDebouncer)
    setTimeout(recomputeMaxAvailableDimensions, 100)
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
      orderBy('classServerOrder', 'asc')
      // orderBy('date', 'desc')
    )
    unsubFuncs.push(
      onSnapshot(roomsQuery, async (snapshot) => { // onSnapshot does NOT return a promise
        const docs = []
        snapshot.forEach(doc => { 
          docs.push({ 
            id: doc.id, 
            path: doc.ref.path, 
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
                date: Date.toISOString()
              })
            }
            // can make it atomic with a batch operation
        }
      })
    )
  }
</script>

<style>
  .orange-highlight {
    border: 2px solid orange; 
  }
</style>