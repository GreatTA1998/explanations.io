<div bind:this={ReorderDropzone} 
  style="height: 8px;" 
  on:dragenter={() => {
    if ($whatIsBeingDragged === 'room') {
      ReorderDropzone.style.background = 'rgb(87, 172, 247)' 
    }
  }}
  on:dragleave={() => ReorderDropzone.style.background = '' }

  on:dragover={(e) => dragover_handler(e)}
  on:drop={(e) => onReorderDrop(e)}
>

</div>

<div bind:this={RoomElement}
  style="padding: 6px; cursor: pointer;"
  on:click={() => handleRoomClick(room.id)}
  on:keydown={() => {}}

  on:dragenter={() => RoomElement.style.background = 'rgb(87, 172, 247)' }
  on:dragleave={(e) => { 
    if (e.currentTarget.contains(e.relatedTarget)) {
      return;
    }
    RoomElement.style.background = '' 
  }}
  on:drop={(e) => handleSomethingDropped(e, room.id)}

  draggable="true"
  on:dragstart={(e) => dragstart_handler(e, room.id)}
  on:dragover={(e) => dragover_handler(e)}
>
  <div class:selected={room.id === roomID} style="padding-bottom: 6px; opacity: 90%; border-radius: 5px;">
    <!-- ROOM NAME SECTION -->
    <!-- `padding-right` is more than left because the icon has itself a padding of around 2 px to its own edge -->
    <div style="display: flex; align-items: center; padding-left: 8px; padding-right: 5px; padding-top: 6px;">
      {#if !isExpanded}
        <span on:click={() => {
            fetchSubpages() // refetch every time, otherwise when you move a new child in, it will not update
            isExpanded = true
          }} 
          class="material-icons"
        >
          expand_more
        </span>
      {:else}
        <span on:click={() => isExpanded = false} class="material-icons">
          chevron_right
        </span>
      {/if}
      
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
    
    <!-- ROOM PARTICIPANTS SECTION -->
    <!-- you can interpret this as `for each person in room.persons` -->
    {#if $roomToPeople[room.id]}
      <div style="margin-bottom: 8px;"></div>
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

<!-- ROOM SUBPAGES SECTION -->
{#if subpages && isExpanded}
  <div style="padding-left: {12 * (depth + 1)}px">
    {#each subpages as subpage, i}
      <LeftDrawerRecursiveRoom 
        room={subpage}
        {firestoreIDToDailyID}
        {toggleMic}
        {activeSpeakerID}
        {willJoinVoiceChat}
        {roomID}
        {classID}
        depth={depth + 1}
        orderWithinLevel={i}
        roomsInThisLevel={subpages}
      />
    {/each}
  </div>
{/if}

<script>
import LeftDrawerRecursiveRoom from '$lib/LeftDrawerRecursiveRoom.svelte'
import List, { Item, Text } from '@smui/list'
import Menu from '@smui/menu';
import Switch from '@smui/switch'
import Button from '@smui/button'
import { goto } from '$app/navigation'
import { collection, getDoc, doc, getFirestore, onSnapshot, orderBy, setDoc, query, getDocs, updateDoc, deleteDoc, writeBatch, arrayRemove, arrayUnion, where } from 'firebase/firestore'
import { user, roomToPeople, browserTabID, dailyRoomParticipants, willPreventPageLeave, adminUIDs, drawerWidth, maxAvailableHeight, maxAvailableWidth } from '/src/store.js'
import { deleteObject, getStorage, ref } from 'firebase/storage'
import { getFunctions, httpsCallable } from "firebase/functions"
import { getFirestoreQuery, updateFirestoreDoc} from '/src/helpers/crud.js'
import { whatIsBeingDragged } from '/src/store'

export let room
export let willJoinVoiceChat
export let firestoreIDToDailyID
export let toggleMic
export let activeSpeakerID
export let roomID
export let classID
export let depth = 0
export let orderWithinLevel
export let roomsInThisLevel

let DropdownMenu
let subpages = null
let ReorderDropzone
let RoomElement
let isExpanded = false

const classPath = `classes/${classID}/`

$: n = roomsInThisLevel.length

async function onReorderDrop (e) {
  const data = e.dataTransfer.getData('text/plain')
  const keyValuePairs = data.split(']')
  const [key1, value1] = keyValuePairs[0].split(':')
  const draggedRoomID = value1

  const initialNumericalDifference = 3
  let newVal 

  // TO-DO: need the last drop zone to be manually added
  const dropZoneIdx = orderWithinLevel
  // copy `PopupRearrangeVideos` 
  if (dropZoneIdx === 0) {
    const topOfOrderDoc = roomsInThisLevel[0]
    // halve the value so it never gets to 0 
    newVal = (topOfOrderDoc.classServerOrder || 3) / 2
  }
  else if (dropZoneIdx === n) {
    const bottomOfOrderDoc = roomsInThisLevel[n-1]
    newVal = (bottomOfOrderDoc.classServerOrder || 3) + initialNumericalDifference
    // update max class server order within this class
    await updateFirestoreDoc(`classes/${classID}/`, {
      maxClassServerOrder: newVal
    })
  }
  else {
    let topNeighborDoc = roomsInThisLevel[dropZoneIdx - 1]
    let botNeighborDoc = roomsInThisLevel[dropZoneIdx]
    const order1 = botNeighborDoc.classServerOrder || 3
    const order2 = topNeighborDoc.classServerOrder || 3 + initialNumericalDifference
    newVal = (order1 + order2) / 2
  }

  await updateFirestoreDoc(`classes/${classID}/rooms/${draggedRoomID}`, {
    classServerOrder: newVal,
    parentRoomID: roomsInThisLevel[0].parentRoomID || ''
  })
}

// inspired by Notion subpages
async function fetchSubpages () {
  const roomsPath = classPath + 'rooms'
  const roomsRef = collection(getFirestore(), roomsPath)
  // when you click a room, you want its childen, therefore `room.id`, NOT `roomID`
  const q = query(roomsRef, where('parentRoomID', '==', room.id), orderBy('classServerOrder', 'asc'))
  const snapshot = await getFirestoreQuery(q)
  subpages = snapshot
}

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

function dragstart_handler (e, roomID) {
  whatIsBeingDragged.set('room')
  e.dataTransfer.setData("text/plain", `roomID:${roomID}`)
}

function dragover_handler (e) {
  e.preventDefault()
}

function handleSomethingDropped (e, droppedRoomID) {
  const data = e.dataTransfer.getData('text/plain')
  const keyValuePairs = data.split(']')

  const [key1, value1] = keyValuePairs[0].split(':')
  if (key1 === 'roomID') {
    putRoomIntoRoom({ draggedRoomID: value1, droppedRoomID })
  }
  // if it's a blackboard, we expect first property to be `idx` adn second property to be `boardID`
  else if (keyValuePairs[1].split(':')[0] === 'boardID') {
    console.log('will handle like a dropped video')
  }
  
  // figure out if it's blackboard or room
  // if it's the identical room, skip
}

// TO-DO: 
// we'll implement putting the room into this room, then implement the re-ordering. 
// then we can do some refactoring of the drag-and-drop UI to move it everywhere across the app,
// whether it's in reorder the blackboards, rooms, or the profile videos

// like subpages
function putRoomIntoRoom ({ draggedRoomID, droppedRoomID }) {
  if (draggedRoomID === droppedRoomID) {
    return 
  }
  updateFirestoreDoc(`classes/${classID}/rooms/${draggedRoomID}`, {
    parentRoomID: droppedRoomID
  })
  // TO-DO: initialize it to the last element
}

// REORDERING WILL INVOLVE THE ROOM ABOVE AND THE ROOM BELOW

// used to be called (e, room.id)

// user dragged video into another room
async function moveVideoIntoAnotherRoom (e, droppedRoomID) {
  
  // handle drop


  return

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

/**
 * Properly deletes the room:
 *   1. Delete audio files, if any boards are recorded 
 *   2. Delete stroke subcollections
 *   3. Delete the room doc itself
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
  .selected {
    font-weight: 500;
    background-color:rgb(45, 44, 44);
    color: white;
    transition: background 20ms ease-in 0s;
  }

  .question-item {
    color: rgb(34, 153, 231);
  }

  .speaking {
    font-weight: 800;
  }
</style>