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

    {#if showRoomMenu}
      <button
        type="button"
        class="material-icons"
        style="margin-right: 0px; margin-left: auto; color: white; font-size: 1.5rem;"
        style:anchor-name={roomAnchor}
        popovertarget={roomMenuId}
        on:click|stopPropagation={() => {}}
      >
        more_vert
      </button>
    {/if}
  </button>

  {#if showRoomMenu}
    <div
      popover="auto"
      id={roomMenuId}
      class="room-actions mdc-menu"
      style="width: 300px;"
      style:position-anchor={roomAnchor}
      style:position-area="block-end span-inline-end"
      style:position-try-fallbacks="flip-block, flip-inline, flip-inline flip-block"
    >
      <List>
        <Item on:SMUI:action={() => {
          document.getElementById(roomMenuId)?.hidePopover()
          deleteRoom({ room, classID })
        }}>
          Delete room
        </Item>
      </List>
    </div>
  {/if}
</div>

<!-- ROOM SUBPAGES SECTION -->
{#if subpages && isExpanded}
  <div style="padding-left: 12px">
    {#each subpages as subpage, i (subpage.id)}
      <RecursiveRoom 
        room={subpage}
        {roomID}
        {classID}
        {ancestorRoomIds}
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
import List, { Item } from '@smui/list'
import { goto } from '$app/navigation'
import { collection, getFirestore, onSnapshot, orderBy, query, where } from 'firebase/firestore'
import { user, adminUIDs, whatIsBeingDragged, whatIsBeingDraggedID } from '/src/store.js'
import { updateFirestoreDoc, updateNumOfSubfolders } from '/src/helpers/crud.js'
import { onDestroy, tick } from 'svelte'
import { page } from '$app/stores'

export let room
export let depth = 0
export let orderWithinLevel
export let roomsInThisLevel
export let parentRoomIDs

export let roomID
export let classID
/** @type {Set<string>} parent room ids that must stay open for the active deep link */
export let ancestorRoomIds = new Set()

let subpages = null
let RoomElement
let isExpanded = false
let unsubListener
let scrolledForRoomId = null
/** Only auto-expand once per active room so snapshots do not re-force open. */
let expandedForActiveId = null

$: showRoomMenu = $page.params.roomID && $user.uid && $adminUIDs.includes($user.uid)
$: roomMenuId = `room-menu-${room.id}`
$: roomAnchor = `--room-${room.id}`
$: activeRoomId = $page.params.roomID
$: ensureExpandedForActivePath(activeRoomId, ancestorRoomIds)
$: if (RoomElement && room.id === activeRoomId) scrollActiveRoomIntoView(activeRoomId)
$: if (room.id !== activeRoomId && scrolledForRoomId === room.id) scrolledForRoomId = null

const classPath = `classes/${classID}/`

onDestroy(() => {
  if (unsubListener) unsubListener()
})

function ensureExpandedForActivePath (activeId, ancestors) {
  if (!activeId || !ancestors?.has(room.id)) return
  if (expandedForActiveId === activeId) return
  expandedForActiveId = activeId
  expandChildrenRooms()
}

async function scrollActiveRoomIntoView (id) {
  if (!id || scrolledForRoomId === id) return
  scrolledForRoomId = id
  await tick()
  // Nested folders may still be laying out after expand; wait two frames.
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      RoomElement?.scrollIntoView({ block: 'center', inline: 'nearest' })
    })
  })
}

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

async function fetchSubpages () {
  // Guard before first snapshot so reactive retries cannot leak listeners.
  if (unsubListener) return
  const q = query(
    collection(getFirestore(), classPath + 'rooms'),
    where('parentRoomID', '==', room.id),
    orderBy('classServerOrder', 'asc')
  )
  unsubListener = onSnapshot(q, (snapshot) => {
    subpages = snapshot.docs.map(docSnap => ({
      id: docSnap.id,
      path: docSnap.ref.path,
      ...docSnap.data()
    }))
  })
}

function expandChildrenRooms () {
  if (!subpages && !unsubListener) {
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
}

async function putRoomIntoRoom ({ draggedRoomID, droppedRoomID }) {
  if (draggedRoomID === droppedRoomID) return
  const basePath = `classes/${classID}/rooms/`
  await updateNumOfSubfolders({ draggedRoomID, droppedRoomID, basePath })
  updateFirestoreDoc(basePath + draggedRoomID, { parentRoomID: droppedRoomID })
}
</script>

<style>
  .badge-number {
    display: flex; justify-content: center; align-items: center;
    position: absolute; left: 16px; top: 0; width: 14px; height: 14px;
    border-radius: 20px; font-size: 10px; font-weight: 500;
    background-color: rgb(80, 80, 80); color: white;
  }
  .library-item-icon { color: rgb(78, 78, 78); font-size: 28px; font-weight: 300; }
  .room-title { font-size: var(--fs-400); font-weight: 400; color: black; }
  .room-item {
    display: flex; width: 100%; align-items: center; column-gap: 8px;
    padding: 6px 0 6px 8px; border-radius: 5px; text-align: left;
  }
  .room-item:hover { background: lightgrey; }
  .room-item.selected {
    font-weight: 700; background-color: #F7C686; color: black;
    transition: background 20ms ease-in 0s;
  }
  .room-actions {
    position: fixed; margin: 0; inset: auto; padding: 0; border: none; border-radius: 4px;
    background-color: #fff; color: #000;
    box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);
  }
  .separator {
    width: 2px; height: 2px; min-width: 2px; margin: 4px 4px 4px 12px;
    border-radius: 50%; background-color: #606060;
  }
</style>