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
    <Item on:click={() => goto(`/${classID}/request-video`)}>
      <span class="material-icons">question_mark</span>
      Request video
    </Item>

    <Item on:click={() => goto(`/${classID}/become-helper`)}>
      <span class="material-icons">draw</span>
      Create video
    </Item>
    
    <!-- <Item on:click={() => goto(`/${classID}/become-helper`)}>
      <span class="material-icons">add</span>
      Sign up as helper
    </Item> -->

    <!-- `room.id + roomID` forces re-render when you switch rooms because sometimes the CSS styles don't update properly  -->
    {#each rooms as room (room.id + roomID)}
      <div 
        on:click={() => handleRoomClick(room.id)} style="padding: 6px;"
        on:dragover={(e) => dragover_handler(e)}
        on:drop={(e) => moveVideoIntoAnotherRoom(e, room.id)}
      >
        <!-- selected={room.id === roomID} class:not-selected={room.id !== roomID} -->
        <div class={room.id === roomID ? 'selected' : '' } style="padding-bottom: 6px; opacity: 90%; border-radius: 5px;">
          <!-- `padding-right` is more than left because the icon has itself a padding of around 2 px to its own edge -->
          <div style="display: flex; align-items: center; padding-left: 8px; padding-right: 5px; padding-top: 6px;">
            {#if room.name}
              <div 
                class:question-item={'?' === room.name.charAt(room.name.length - 1) && room.id !== roomID} 
                class="my-truncated-text"
                style="margin-bottom: 2px;"
              >
                {room.name}
              </div>
            {:else}
              <div style="margin-bottom: 2px;">
                (no title)
              </div>
            {/if}

            {#if room.id === roomID && $user.uid}
              {#if $adminUIDs.includes($user.uid)}
                <span on:click={DropdownMenu.setOpen(true)} class="material-icons" style="margin-right: 0px; margin-left: auto; color: white; font-size: 1.5rem;">
                  more_vert
                </span>

                <Menu bind:this={DropdownMenu} style="width: 300px">
                  <List>      
                    <Item on:SMUI:action={() => deleteRoom(room)}>
                      Delete room
                    </Item>
                  </List> 
                </Menu>
              {/if}
            {/if}
          </div>
          
          <!-- you can interpret this as `for each person in room.persons` -->
          {#if $roomToPeople[room.id]}
            {#each $roomToPeople[room.id] as person (person.browserTabID)}
              <div style="display: flex; align-items: center; padding-left: 8px; padding-right: 8px;">
                <div 
                  style="font-size: 0.7rem; margin-left: 6px;" 
                  class:speaking={firestoreIDToDailyID && (firestoreIDToDailyID[person.browserTabID]) && (firestoreIDToDailyID[person.browserTabID]) === activeSpeakerID}
                >
                  {person.name} 
                </div> 

                <!-- CASE 1: it's me -->
                {#if person.browserTabID === $browserTabID}
                  {#if !willJoinVoiceChat}
                    <div 
                      on:click={() => willJoinVoiceChat = true}
                      style="margin-right: 4px; margin-left: auto; background-color: green; color: white; font-size: 0.6rem; padding-left: 4px; padding-right: 4px; cursor: pointer; border-radius: 4px;"
                    >
                      Join voice 
                    </div>

                  {:else if Object.keys($dailyRoomParticipants).length > 0}
                    <div style="display: flex; align-items: center; margin-right: 6px; margin-left: auto">
                      <div on:click|preventDefault|stopPropagation={toggleMic} style="padding-top: 5px">
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
                  {/if}
            
                <!-- CASE 2: it's not me -->
                {:else}
                  <!-- case 2.1: this person is connected to my voice chat -->
                  {#if Object.keys($dailyRoomParticipants).length > 0 && $dailyRoomParticipants[firestoreIDToDailyID[person.browserTabID]]}
                    {#if $dailyRoomParticipants[firestoreIDToDailyID[person.browserTabID]].audio} 
                      <!-- display mute status -->
                      <span 
                        class="material-icons" 
                        style="
                          margin-right: 0; margin-left: auto; font-size: 1.1rem; 
                          color: {(firestoreIDToDailyID && (firestoreIDToDailyID[person.browserTabID]) && (firestoreIDToDailyID[person.browserTabID]) === activeSpeakerID) ? 'white' : ''}"
                      >
                        mic
                      </span>
                    {:else}
                      <span class="material-icons" style="margin-right: 0; margin-left: auto; font-size: 1.1rem; color: red">
                        mic_off
                      </span>
                    {/if}
                  <!-- case 2.2: otherwise visually indicate if they're in voice chat (whichever room they're in) -->
                  {:else if person.hasJoinedVoice}
                    <span class="material-icons" style="margin-right: 0; margin-left: auto; font-size: 1.1rem; color: #33ff33;">
                      volume_up
                    </span>
                  {/if}
                {/if}
              </div>
            {/each}
          {/if}
        </div>
      </div>
    {/each}

    <!-- New room -->
    {#if $user.uid}
      <div on:click={createNewRoom} style="padding: 6px; display: flex; align-items: center;">
        <span class="material-icons" style="margin-left: 6px; margin-right: 5px; margin-top: 2.5px; font-size: 1.2rem;">
          add
        </span>
        new question
      </div>
    {/if}
  </LeftDrawer>
</DailyVideoConference>

<slot>

</slot>

<script>
  import List, { Item, Text } from '@smui/list'
  import Menu from '@smui/menu';
  import Switch from '@smui/switch';
	import LeftDrawer from '$lib/LeftDrawer.svelte'
  import RenderlessMyDocUpdater from '$lib/RenderlessMyDocUpdater.svelte'
  import DailyVideoConference from '$lib/DailyVideoConference.svelte'
  import { onDestroy, onMount } from 'svelte'
  import { goto } from '$app/navigation'
  import { browser } from '$app/environment'
  import { collection, getDoc, doc, getFirestore, onSnapshot, orderBy, setDoc, query, getDocs, updateDoc, deleteDoc, writeBatch, arrayRemove, arrayUnion} from 'firebase/firestore'
  import { computeMaxAvailableDimensions } from '../../helpers/canvas'
  import { user, roomToPeople, browserTabID, dailyRoomParticipants, willPreventPageLeave, adminUIDs, drawerWidth, maxAvailableHeight, maxAvailableWidth } from '../../store.js'
  import { getRandomID } from '../../helpers/utility.js'
  import { deleteObject, getStorage, ref } from 'firebase/storage'
  import { getFunctions, httpsCallable } from "firebase/functions";

   export let data;
   let { classID, roomID } = data;
   $: ({ classID, roomID } = data); // so it stays in sync when `data` changes

  const classPath = `classes/${classID}/`
  let unsubFuncs = []
  let nameOfClass = ''
  let descriptionOfClass = ''
  let rooms = [] // AF([]) means not fetched rooms, there's no point in a server with empty rooms, there will be a lobby 
  let DropdownMenu

  let willJoinVoiceChat = false

	// START OF RESIZE LOGIC 
  let resizeDebouncer = null

  // NOTE: resize logic is currently scattered everywhere within this file, refactor later
  // adjust dimensions whenever $drawerWidth changes
  $: if ($drawerWidth) {
    debouncedResizeHandler()
  }

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

  onMount(async () => {
    // AWAIT FIX: __layout mounts twice: see issue https://github.com/sveltejs/kit/issues/2130
    if (browser) {
      if (window.matchMedia('screen and (max-width: 480px)').matches) {
        drawerWidth.set(0)
      }

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

  function handleRoomClick (roomID) { 
    // prevents in-app navigation
    if ($willPreventPageLeave) {
      if (window.confirm("You're still recording, are you sure you want to leave?")) {
        // TODO: reset the board so it's not perpetually uploading in nothing?
        // NOTE: this will not handle some cases 
        // maybe fix from Blackboard rendering logic side?
        willPreventPageLeave.set(false)
        goto(`/${classID}/${roomID}`)
      } else {
        // do nothing
      }
    }

    else {
      goto(`/${classID}/${roomID}`)
    }
  }

  async function createNewRoom () {
    for (const room of rooms) {
      if (room.name === '') {
        alert('There is still an empty room available')
        return
      }
    }
    // TODO: just import createRoomDoc from helpers/crud.js
    const newDocID = getRandomID()
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
        recordState: 'pre_record'
      })
    ])
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
                date: Date.toISOString()
              })
            }
            // can make it atomic with a batch operation
        }
      })
    )
  }
  
  /**
   * Properly deletes the room
   *   1. Delete audio files, if any boards are recorded 
   *   2. TODO: Delete stroke subcollections
   *   3. Delete the room doc itself
   *   4. TODO: handle web app freezing due to deletion
   * @param room
   */
  async function deleteRoom (room) {
    if (!confirm('Are you sure you want to delete this room?')) {
      return
    }

    if (room.id === classID) {
      alert('Cannot delete the first room')
      return 
    }
  
    const boardsQueries = [] 
    for (const boardID of room.blackboards) {
      // if it's a video, delete the audio file
      boardsQueries.push(
        getDoc(
          doc(getFirestore(), classPath + `blackboards/${boardID}`)
        )
      )
    }
    await Promise.all(boardsQueries)

    const subdeleteRequests = [] 
    for (const boardQuery of boardsQueries) {
      const result = await boardQuery
      if (!result.exists()) continue // sometimes I have empty blackboard pointers for some reason, so quick-fix
      const boardDoc = result.data()
      // delete audio
      if (boardDoc.audioRefFullPath) {
        // `try-catch` because sometimes the audioRefFUllPath is invalid, but we don't want it to break the delete method
        try {
          // we no longer push it onto this promise array - otherwise it'll be resolved OUTSIDE of catch block and interrupt the entire function when audio is empty
          // subdeleteRequests.push(
            deleteObject(
              ref(getStorage(), boardDoc.audioRefFullPath)
            )
          // )
        } catch (error) {
          console.alert(error)
        }
      }
      // delete strokes
      const functions = getFunctions();
      const deleteRecursively = httpsCallable(functions, 'recursiveDelete')
      subdeleteRequests.push(
        deleteRecursively({ path: `/classes/${classID}/blackboards/${result.id}` }).then(console.log(`Deleted blackboard /classes/${classID}/blackboards/${result.id}`))
      )
    }
    await Promise.all(subdeleteRequests)

    // delete the doc itself
    await deleteDoc(
      doc(getFirestore(), classPath + `rooms/${room.id}`)
    )

    // note, the [room].svelte page knows how to handle itself when its `roomDoc` no longer exists
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