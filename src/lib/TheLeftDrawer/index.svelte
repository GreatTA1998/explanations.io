<div class="drawer-container" style="height: 100%; display: flex; flex-direction: column;">
  <div style="padding: 0; position: relative; flex-grow: 1;">
    <!-- 
      IMPORTANT TRICK: because it's `absolute`, this div will retain its original height and NOT expand when it overflows 
      without the need of an explicit height / max-height property 
    -->
    <div style="position: absolute; overflow-y: auto; inset: 0;">
      {#if $drawerNavTab === 'forum'}
        <QuestionsSection {classID} />
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
  import { user, drawerNavTab } from '/src/store.js'
  import { collection, getDoc, doc, getFirestore, onSnapshot, orderBy, query } from 'firebase/firestore'
  import { updateFirestoreDoc } from '/src/helpers/crud.js'

  export let classID
  export let roomID

  let classDoc = null
  const classPath = `classes/${classID}/`
  let unsubFuncs = []
  let rooms = [] // AF([]) means not fetched rooms, there's no point in a server with empty rooms, there will be a lobby 
  let lastClassID = ''

  $: if (classID) {
    initializeEverything()
  }

  // Rooms is the default peer tab whenever the server changes.
  $: if (classID && classID !== lastClassID) {
    lastClassID = classID
    drawerNavTab.set('rooms')
  }

  async function initializeEverything () {
    unsubDbListeners()
    await fetchClassDoc()
    updateClassMetadata()
    fetchRooms()
  }

  $: rootRooms = rooms.filter(room => room.parentRoomID === '')
  // Keep Set identity stable across Firestore snapshots with the same ancestry.
  let ancestorRoomIds = new Set()
  $: {
    const nextAncestors = ancestorIdsForRoom(rooms, roomID)
    if (!sameIdSet(ancestorRoomIds, nextAncestors)) {
      ancestorRoomIds = nextAncestors
    }
  }

  async function updateClassMetadata () {
    // keep track of number of members regardless of where they are
    let copyOfMemberUIDs = [...(classDoc?.memberUIDs || [])]
    if ($user.uid) {
      copyOfMemberUIDs.push($user.uid)
    }
    const setOfUniqueUIDs = new Set(copyOfMemberUIDs)
    const arrayOfUniqueUIDs = [...setOfUniqueUIDs]
        
    await updateFirestoreDoc(classPath, {
      memberUIDs: arrayOfUniqueUIDs,
      numOfMembers: arrayOfUniqueUIDs.length
    })
  }

  function unsubDbListeners () {
    for (const unsubFunc of unsubFuncs) {
      unsubFunc()
    }
    unsubFuncs = []
  }

  async function fetchClassDoc () {
    return new Promise(async (resolve) => {
      const classDocRef = doc(getFirestore(), `classes/${classID}`)
      const result = await getDoc(classDocRef)
      classDoc = result.data()
      resolve()
    })
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
      })
    )
  }
</script>
