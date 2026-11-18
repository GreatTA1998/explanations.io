<div class="drawer-container" style="height: 100%; display: flex; flex-direction: column;">
  <div style="padding: 0; position: relative; flex-grow: 1;">
    <!-- absolute: keeps intrinsic height so overflow scrolls without max-height -->
    <div style="position: absolute; overflow-y: auto; inset: 0;">
      {#if $drawerNavTab === 'forum'}
        <QuestionsSection {classID} />
      {:else if nameQ}
        {#each roomHits as room (room.id)}
          <button
            type="button"
            class="room-hit"
            class:selected={room.id === roomID}
            on:click={() => goto(`/${classID}/${room.id}`)}
          >
            {room.name || '(untitled)'}
          </button>
        {/each}
      {:else}
        {#each rootRooms as room, i (room.id)}
          {#if !room.parentRoomID}
            <RecursiveRoom 
              {room} 
              {roomID}
              {classID}
              {ancestorRoomIds}
              orderWithinLevel={i}
              roomsInThisLevel={rootRooms}
              parentRoomIDs={['']}
            />
          {/if}
        {/each}

        <div style="padding: 6px;">
          <RecursiveRoomReorderDropzone
            orderWithinLevel={rootRooms.length}
            parentRoomIDs={['']}
            roomsInThisLevel={rootRooms}
            {classID}
          />
        </div>
      {/if}
    </div>
  </div>
</div>

<script>
  import QuestionsSection from '$lib/TheLeftDrawer/QuestionsSection.svelte'
  import RecursiveRoom from './RecursiveRoom.svelte'
  import RecursiveRoomReorderDropzone from './RecursiveRoomReorderDropzone.svelte'
  import { ancestorIdsForRoom, sameIdSet } from './roomAncestors.js'
  import { fuzzyFilter } from '/src/helpers/fuzzyName.js'
  import { user, drawerNavTab, drawerNameQuery } from '/src/store.js'
  import { collection, getDoc, doc, getFirestore, onSnapshot, orderBy, query } from 'firebase/firestore'
  import { updateFirestoreDoc } from '/src/helpers/crud.js'
  import { goto } from '$app/navigation'

  export let classID
  export let roomID

  let classDoc = null
  const classPath = `classes/${classID}/`
  let unsubFuncs = []
  let rooms = []
  let lastClassID = ''

  $: if (classID) initializeEverything()
  $: if (classID && classID !== lastClassID) {
    lastClassID = classID
    drawerNavTab.set('rooms')
    drawerNameQuery.set('')
  }

  async function initializeEverything () {
    unsubDbListeners()
    await fetchClassDoc()
    updateClassMetadata()
    fetchRooms()
  }

  $: nameQ = $drawerNameQuery.trim()
  $: roomHits = nameQ ? fuzzyFilter(rooms, nameQ, r => r.name) : []
  $: rootRooms = rooms.filter(room => room.parentRoomID === '')
  let ancestorRoomIds = new Set()
  $: {
    const nextAncestors = ancestorIdsForRoom(rooms, roomID)
    if (!sameIdSet(ancestorRoomIds, nextAncestors)) {
      ancestorRoomIds = nextAncestors
    }
  }

  async function updateClassMetadata () {
    let copyOfMemberUIDs = [...(classDoc?.memberUIDs || [])]
    if ($user.uid) copyOfMemberUIDs.push($user.uid)
    const arrayOfUniqueUIDs = [...new Set(copyOfMemberUIDs)]
    await updateFirestoreDoc(classPath, {
      memberUIDs: arrayOfUniqueUIDs,
      numOfMembers: arrayOfUniqueUIDs.length
    })
  }

  function unsubDbListeners () {
    for (const unsubFunc of unsubFuncs) unsubFunc()
    unsubFuncs = []
  }

  async function fetchClassDoc () {
    const result = await getDoc(doc(getFirestore(), `classes/${classID}`))
    classDoc = result.data()
  }

  function fetchRooms () {
    const roomsQuery = query(
      collection(getFirestore(), `classes/${classID}/rooms`),
      orderBy('classServerOrder', 'asc')
    )
    unsubFuncs.push(
      onSnapshot(roomsQuery, (snapshot) => {
        const docs = []
        snapshot.forEach(docSnap => {
          docs.push({ id: docSnap.id, path: docSnap.ref.path, ...docSnap.data() })
        })
        rooms = docs
      })
    )
  }
</script>

<style>
  .room-hit {
    display: block; width: 100%; padding: 8px 12px; border-radius: 5px;
    text-align: left; font-size: var(--fs-400); color: black;
  }
  .room-hit:hover { background: lightgrey; }
  .room-hit.selected { font-weight: 700; background-color: #F7C686; }
</style>
