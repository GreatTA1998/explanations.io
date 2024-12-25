<div style="padding: 0px 4px;">
  <RecursiveRoomReorderDropzone
    {roomsInThisLevel}
    {orderWithinLevel}
    {parentRoomIDs}
    {classID}
  />

  <button on:click={() => handleRoomClick(room.id)}
    bind:this={RoomElement}
    class="room-item" class:selected={room.id === $page.params.roomID} 

    draggable="true"
    on:dragstart={(e) => dragstart_handler(e, room.id)}
    on:dragover={(e) => dragover_handler(e)}

    on:dragenter={highlightRoom}
    on:dragleave={(e) => unhighlightRoom(e)}
    on:drop={(e) => handleSomethingDropped(e, room.id)}
  >
    {#if room.numOfChildren}
      {#if !isExpanded}
        <!-- without `height: 24px` the div will be slightly larger than necessary, IDK why though -->
        <div style="position: relative; height: 24px;">
          <div class="badge-number">
            {room.numOfChildren}
          </div>
        
          <button on:click|stopPropagation={expandChildrenRooms} 
            class="material-symbols-outlined library-item-icon"
          >
            folder
          </button>
        </div>
      {:else}
        <button on:click|stopPropagation={() => isExpanded = false} 
          class="material-symbols-outlined library-item-icon"
        >
          folder_open
        </button>
      {/if}
    {:else}
      <div class="separator"></div>
    {/if}
    
    <div class="room-title my-truncated-text">
      {room.name || '(untitled)'} 
    </div>

    {#if $page.params.roomID && $user.uid}
      {#if $adminUIDs.includes($user.uid)}
        <button on:click={DropdownMenu.setOpen(true)} class="material-icons" style="margin-right: 0px; margin-left: auto; color: white; font-size: 1.5rem;">
          more_vert
        </button>

        <Menu bind:this={DropdownMenu} style="width: 300px">
          <List>      
            <Item on:SMUI:action={() => deleteRoom({ room, classID })}>
              Delete room
            </Item>
          </List> 
        </Menu>
      {/if}
    {/if}
  </button>
</div>

<!-- ROOM SUBPAGES SECTION -->
{#if subpages && isExpanded}
  <div style="padding-left: 12px">
    {#each subpages as subpage, i (subpage.id)}
      <RecursiveRoom 
        room={subpage}
        {roomID}
        {classID}
        depth={depth + 1}
        orderWithinLevel={i}
        roomsInThisLevel={subpages}
        parentRoomIDs={[subpage.parentRoomID, ...parentRoomIDs]}
      />
    {/each}

    <!-- `parentRoomIDs` is used to prevent a parent becoming a child of its children
      For the last parentRoom it doesn't matter
    -->
    {#if subpages.length > 0}
      <div style="padding: 6px;">
        <RecursiveRoomReorderDropzone
          orderWithinLevel={subpages.length}
          parentRoomIDs={[subpages[0].parentRoomID, ...parentRoomIDs]}
          roomsInThisLevel={subpages}
          {classID}
        />
      </div>
    {/if}
  </div>
{/if}

<script>
import RecursiveRoom from './RecursiveRoom.svelte'
import RecursiveRoomReorderDropzone from './RecursiveRoomReorderDropzone.svelte'
import { deleteRoom } from '/src/helpers/unifiedDeleteAPI.js'
import List, { Item, Text } from '@smui/list'
import Menu from '@smui/menu';
import { goto } from '$app/navigation'
import { collection, getDoc, doc, getFirestore, onSnapshot, orderBy, setDoc, query, getDocs, updateDoc, deleteDoc, writeBatch, arrayRemove, arrayUnion, where, increment } from 'firebase/firestore'
import { user, adminUIDs, whatIsBeingDraggedID } from '/src/store.js'

import { getFirestoreQuery, updateFirestoreDoc, getFirestoreDoc, updateNumOfSubfolders } from '/src/helpers/crud.js'
import { whatIsBeingDragged } from '/src/store'
import { onDestroy } from 'svelte'
import { page } from '$app/stores'

export let room
export let depth = 0
export let orderWithinLevel
export let roomsInThisLevel
export let parentRoomIDs

export let roomID
export let classID

let DropdownMenu
let subpages = null
let RoomElement
let isExpanded = false
let unsubListener

const classPath = `classes/${classID}/`

onDestroy(() => {
  if (unsubListener) unsubListener()
})

function highlightRoom () {
  if (!isInvalidSubpageDrop()) {
    RoomElement.style.background = 'rgb(87, 172, 247)' 
  }
}

function unhighlightRoom (e) {
  if (e.currentTarget.contains(e.relatedTarget)) {
    return
  }
  RoomElement.style.background = ''
}

function isInvalidSubpageDrop () {
  return parentRoomIDs.includes($whatIsBeingDraggedID) || $whatIsBeingDraggedID === room.id 
}

// inspired by Notion subpages
async function fetchSubpages () {
  const roomsPath = classPath + 'rooms'
  const roomsRef = collection(getFirestore(), roomsPath)

  // when you expand an arbitrary room, you want its childen, therefore `room.id`, NOT `roomID`
  const q = query(roomsRef, where('parentRoomID', '==', room.id), orderBy('classServerOrder', 'asc'))
  unsubListener = onSnapshot(q, (snapshot) => {
    const temp = [] 
    snapshot.docs.forEach(doc => {
      temp.push({
        id: doc.id,
        path: doc.ref.path,
        ...doc.data()
      })
    })

    subpages = temp
  })
}

function expandChildrenRooms () {
  if (!subpages) {
    fetchSubpages()
  }
  isExpanded = true
}

function handleRoomClick (roomID) { 
  if (!isExpanded) expandChildrenRooms()
  else isExpanded = false
  
  goto(`/${classID}/${roomID}`)
}

function dragstart_handler (e, roomID) {
  whatIsBeingDragged.set('room')
  whatIsBeingDraggedID.set(roomID)
  e.dataTransfer.setData("text/plain", `roomID:${roomID}`)
}

function dragover_handler (e) {
  e.preventDefault()
}

function handleSomethingDropped (e, droppedRoomID) {
  if (isInvalidSubpageDrop()) return
  RoomElement.style.background = '' 

  const data = e.dataTransfer.getData('text/plain')
  const keyValuePairs = data.split(']')

  const [key1, value1] = keyValuePairs[0].split(':')
  if (key1 === 'roomID') {
    putRoomIntoRoom({ draggedRoomID: value1, droppedRoomID })
  }
  // if it's a blackboard, we expect first property to be `idx` adn second property to be `boardID`
  else if (key1 === 'boardID') {
    // moveVideoIntoAnotherRoom({ droppedRoomID, boardID: value1}) 
  }
  
  // figure out if it's blackboard or room
  // if it's the identical room, skip
}

// TO-DO: 
// we'll implement putting the room into this room, then implement the re-ordering. 
// then we can do some refactoring of the drag-and-drop UI to move it everywhere across the app,
// whether it's in reorder the blackboards, rooms, or the profile videos

// like subpages
async function putRoomIntoRoom ({ draggedRoomID, droppedRoomID }) {
  if (draggedRoomID === droppedRoomID) {
    return 
  }
  const basePath = `classes/${classID}/rooms/`

  await updateNumOfSubfolders({ 
    draggedRoomID, 
    droppedRoomID,
    basePath
  })

  // move the room
  updateFirestoreDoc(basePath + draggedRoomID, {
    parentRoomID: droppedRoomID
  })
}

// REORDERING WILL INVOLVE THE ROOM ABOVE AND THE ROOM BELOW
// used to be called (e, room.id)
// user dragged video into another room


// the room ID should be kept track differently, maybe through the store
async function moveVideoIntoAnotherRoom ({ droppedRoomID, boardID }) {
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
</script>

<style>
  .badge-number {
    display: flex; 
    justify-content: center; 
    align-items: center; 
    font-size: 10px; 
    position: absolute; 
    left: 16px; 
    right: auto; 
    top: 0px; 
    font-weight: 500; 
    background-color: rgb(80, 80, 80); 
    border-radius: 20px; 
    width: 14px; 
    height: 14px; 
    color: white;
  }

  .library-item-icon {
    color: rgb(78, 78, 78); 
    font-size: 28px;
    font-weight: 300;
  }

  .room-title {
    font-size: var(--fs-400);
    font-weight: 400;
    color: black;
  }

  .room-item {
    display: flex; width: 100%; align-items: center; column-gap: 8px; padding: 6px 8px; padding-right: 0px;
    border-radius: 5px;
  }

  .room-item:hover {
    background: lightgrey;
  }

  /* legacy grey: #e2dddd */
  .selected {
    font-weight: 700;
    background-color: #F7C686;
    color: black;
    transition: background 20ms ease-in 0s;
  }

  .separator {
		width: 2px;
		height: 2px;
		background-color: #606060;
		border-radius: 50%;
		margin: 4px 12px;
    margin-right: 4px;

    /* prevents it from getting squished when the text overflows */
    min-width: 2px;
  }
</style>