<div style="padding: 6px;">
  <LeftDrawerRecursiveRoomReorderDropzone
    {roomsInThisLevel}
    {orderWithinLevel}
    {parentRoomIDs}
    {classID}
  />

  <div
    class="room-item"
    style="opacity: 90%; border-radius: 5px; cursor: pointer;"
    class:selected={room.id === $page.params.roomID} 
    bind:this={RoomElement}
    on:click={() => handleRoomClick(room.id)}
    on:keydown={() => {}}
    on:dragenter={() => { 
      if (!isInvalidSubpageDrop()) {
        RoomElement.style.background = 'rgb(87, 172, 247)' 
      }
    }}
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
    <!-- ROOM NAME SECTION -->
    <!-- `padding-right` is more than left because the icon has itself a padding of around 2 px to its own edge -->
    <div style="display: flex; align-items: center; padding-left: 5px; padding-right: 5px; padding-top: 6px; padding-bottom: 6px;">
      {#if room.numOfChildren}
        {#if !isExpanded}
          <div style="width: 40px; display: flex; justify-content: center; align-items: center; margin-right: 8px;">
            <!-- CSS question: why doesn't this relative div take the height of its children? It also doesn't respond to "height: fit-content" -->
            <div style="position: relative; height: 30px">
              <div style="display: flex; justify-content: center; align-items: center; margin-bottom: -16px; font-size: 12px; position: absolute; left: 18px; right: auto; top: 0px; font-weight: 500; background-color: grey; border-radius: 20px; width: 16px; height: 16px; color: white;">
                {room.numOfChildren}
              </div>
            
              <span class="material-symbols-outlined"
                on:click|stopPropagation={() => {
                  expandChildrenRooms()
                }} 
                style="font-size: 30px;"
              >
                folder
              </span>
            </div>
          </div>
        {:else}
          <span on:click|stopPropagation={() => isExpanded = false} class="material-symbols-outlined" style="margin-right: 8px;">
            folder_open
          </span>
        {/if}
      {:else}
        <span class="material-icons" style="width: 24px">
          <!-- Invisible div to keep the indentation consistent even if 
          the room has no sub-rooms -->
        </span>
      {/if}
      
      <div 
        class:question-item={isQuestion(room)} 
        class="my-truncated-text"
        style="margin-bottom: 2px; width: {DRAWER_EXPANDED_WIDTH - totalIndentation - 50}px; font-weight: 500;"
      >
        {room.name || '(untitled)'} 
      </div>

      {#if $page.params.roomID && $user.uid}
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
  </div>
</div>

<!-- ROOM SUBPAGES SECTION -->
{#if subpages && isExpanded}
  <div style="padding-left: {totalIndentation}px">
    {#each subpages as subpage, i (subpage.id)}
      <LeftDrawerRecursiveRoom 
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
        <LeftDrawerRecursiveRoomReorderDropzone
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
import LeftDrawerRecursiveRoom from '$lib/LeftDrawerRecursiveRoom.svelte'
import LeftDrawerRecursiveRoomReorderDropzone from '$lib/LeftDrawerRecursiveRoomReorderDropzone.svelte'
import List, { Item, Text } from '@smui/list'
import Menu from '@smui/menu';
import { goto } from '$app/navigation'
import { collection, getDoc, doc, getFirestore, onSnapshot, orderBy, setDoc, query, getDocs, updateDoc, deleteDoc, writeBatch, arrayRemove, arrayUnion, where, increment } from 'firebase/firestore'
import { user, willPreventPageLeave, adminUIDs, whatIsBeingDraggedID } from '/src/store.js'
import { deleteObject, getStorage, ref } from 'firebase/storage'
import { getFunctions, httpsCallable } from "firebase/functions"

import { SUBPAGE_INDENATION_PX, DRAWER_EXPANDED_WIDTH } from '/src/helpers/CONSTANTS';
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

$: totalIndentation = SUBPAGE_INDENATION_PX * (depth + 1)

onDestroy(() => {
  if (unsubListener) unsubListener()
})

function isQuestion (roomDoc) {
  return roomDoc.name && '?' === roomDoc.name.charAt(room.name.length - 1)
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
  // prevents in-app navigation
  if ($willPreventPageLeave) {
    if (window.confirm("WARNING: video is still recording / uploading, are you sure you want to discard it and leave?")) {
      // TODO: reset the board so it's not perpetually uploading in nothing?
      // NOTE: this will not handle some cases 
      // maybe fix from Blackboard rendering logic side?
      willPreventPageLeave.set(false)

      if (!isExpanded) {
        expandChildrenRooms()
      } else {
       
        isExpanded = false
      }

      goto(`/${classID}/${roomID}`)
    } else {
      // do nothing
    }
  }

  else {
    if (!isExpanded) {
      expandChildrenRooms()
    } else {
      isExpanded = false
    }
    goto(`/${classID}/${roomID}`)
  }
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

  const db = getFirestore()

  const boardsQueries = [] 
  for (const boardID of room.blackboards) {
    // if it's a video, delete the audio file
    boardsQueries.push(
      getDoc(
        doc(db, classPath + `blackboards/${boardID}`)
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


  // MOVE CHILDREN: move all the children OUT of the folder getting deleted
  // 1. fetch all the sub-rooms
  // 2. update all the parent pointers
  const folderPromises = []
  const roomsRef = collection(db, `classes/${classID}/rooms/`)
  const q = query(roomsRef, where('parentRoomID', '==', room.id))
  const subRooms = await getFirestoreQuery(q)
  for (const subRoom of subRooms) {
    folderPromises.push(
      updateFirestoreDoc(subRoom.path, {
        parentRoomID: room.parentRoomID
      })
    )
  }

  // update grandparent's children count (though if deleted room's children would end up at the top level, 
  // the grandparent doesn't exist, hence if statement 
  if (room.parentRoomID) {
    folderPromises.push(
      updateFirestoreDoc(`classes/${classID}/rooms/${room.parentRoomID}`, {
        numOfChildren: increment(subRooms.length)
      })
    )
  }

  await Promise.all(folderPromises)

  // UPDATE METADATA/STATS
  if (room.dateResolved) {
    updateFirestoreDoc(`classes/${classID}`, {
      numOfResolvedQuestions: increment(-1)
    })
  }
  else if (room.dateAsked) {
    updateFirestoreDoc(`classes/${classID}`,{
      numOfUnresolvedQuestions: increment(-1)
    })
  }

  // finally delete the room doc itself
  await deleteDoc(
    doc(db, classPath + `rooms/${room.id}`)
  )
  // note, the [room].svelte page knows how to handle itself when its `roomDoc` no longer exists
}
</script>

<style>
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

  .question-item {
    color: red; /* rgb(34, 153, 231); */
  }

  .speaking {
    font-weight: 800;
  }
</style>