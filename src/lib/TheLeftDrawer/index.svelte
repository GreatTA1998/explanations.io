<div class="drawer-container" style="height: 100%; display: flex; flex-direction: column;">
  <div style="padding: 0; position: relative; flex-grow: 1;">
    <!-- 
      IMPORTANT TRICK: because it's `absolute`, this div will retain its original height and NOT expand when it overflows 
      without the need of an explicit height / max-height property 
    -->
    <div style="position: absolute; overflow-y: auto; inset: 0;">
      <QuestionsSection {classID} />

      <div style="margin-top: 48px;"></div>

      <div style="display: flex; align-items: center;">
        <div style="text-transform: uppercase; font-weight: 500; color: rgb(120, 120, 120); margin-left: 12px;">
          Library Archive
        </div>
        <button on:click={createNewRoom} class="material-icons new-room-button">
          add
        </button>
      </div>

      {#each rootRooms as room, i (room.id)}
        {#if !room.parentRoomID}
          <RecursiveRoom 
            {room} 
            {roomID}
            {classID}
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
    </div>
  </div>
</div>

<script>
  import QuestionsSection from '$lib/TheLeftDrawer/QuestionsSection.svelte'
  import RecursiveRoom from './RecursiveRoom.svelte'
  import RecursiveRoomReorderDropzone from './RecursiveRoomReorderDropzone.svelte'
  import { user } from '/src/store.js'
  import { goto } from '$app/navigation'
  import { collection, getDoc, doc, getFirestore, onSnapshot, orderBy, query } from 'firebase/firestore'
  import { createRoomDoc, updateFirestoreDoc } from '/src/helpers/crud.js'

  export let classID
  export let roomID

  let classDoc = null
  const classPath = `classes/${classID}/`
  let unsubFuncs = []
  let rooms = [] // AF([]) means not fetched rooms, there's no point in a server with empty rooms, there will be a lobby 

  $: if (classID) {
    initializeEverything()
  }

  async function initializeEverything () {
    unsubDbListeners()
    await fetchClassDoc()
    updateClassMetadata()
    fetchRooms()
  }

  $: rootRooms = rooms.filter(room => room.parentRoomID === '')

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

  async function createNewRoom () {
    const newRoomID = await createRoomDoc(classPath)
    goto(`/${classID}/${newRoomID}`)
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

<style>
  .new-room-button {
    cursor: pointer;
    color: grey; 
    margin-left: auto; 
    margin-right: 12px; 
    font-size: 1.2rem;
    width: 24px; 
    height: 24px;
  }

  .new-room-button:hover {
    background-color: rgb(233, 233, 233);
  }
</style>
