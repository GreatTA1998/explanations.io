<div class="drawer-container" style="height: 100%; display: flex; flex-direction: column;">
  <div style="padding: 0; position: relative; padding-top: 24px; flex-grow: 1;">
    <!-- 
      IMPORTANT TRICK: because it's `absolute`, this div will retain its original height and NOT expand when it overflows 
      without the need of an explicit height / max-height property 
    -->
    <div style="position: absolute; overflow-y: auto; inset: 0;">
      <QuestionsSection {classID}>
        <div style="width: 100%; display: flex; margin-top: 24px; align-items: center;">
          <button on:click={() => goto(`/${classID}/question`)} 
            class="new-question-button"
            class:drawer-item-glow={$page.route.id === '/[class]/question'}
          >
            <span class="material-symbols-outlined" style="font-size: 1.6rem; margin-top: 2px; margin-left: 8px;">
              add
            </span>
            <div style="margin-left: 6px; font-size: 14px; font-weight: 400;">
              New question
            </div>
          </button> 

          {#if $drawerWidth > 0}
            <div style="margin-left: auto;">
              <LeftDrawerToggleButton />
            </div>
          {/if}
        </div>
      </QuestionsSection>

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

  <!-- necessary because it's absolutely positioned and will be visible even when the parent width is 0 -->
  {#if $drawerWidth > 0}
    <button on:click={() => goto(`/${classID}/overview`)} 
      class:drawer-item-glow={$page.route.id === '/[class]/overview'}
      class="pinned-bottom-item"
    >
      <span class="material-symbols-outlined" style="font-size: 1.7rem; margin-top: 2px; margin-left: 8px; opacity: 0.9">
        cottage
      </span>

      <div style="font-size: 1rem;">
        Server Overview
      </div>
    </button>
  {/if}
</div>

<script>
  import LeftDrawerToggleButton from '$lib/LeftDrawerToggleButton.svelte'
  import QuestionsSection from '$lib/TheLeftDrawer/QuestionsSection.svelte'
  import RecursiveRoom from './RecursiveRoom.svelte'
  import RecursiveRoomReorderDropzone from './RecursiveRoomReorderDropzone.svelte'
  import { user, drawerWidth } from '/src/store.js'
  import { goto } from '$app/navigation'
  import { collection, getDoc, doc, getFirestore, onSnapshot, orderBy, query } from 'firebase/firestore'
  import { createRoomDoc, updateFirestoreDoc } from '/src/helpers/crud.js'
  import { page } from '$app/stores'

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
  .new-question-button {
    display: flex; 
    align-items: center; 
    width: 165px;
    height: 36px;
    border-radius: 24px; 

    color: black; 
    background-color: #f1e8f3; 

    /* copied from action-item except bigger border-radius */
    margin: 6px;
    cursor: pointer;
    padding: 4px 8px;
  }

  .pinned-bottom-item {
    flex-basis: 36px; 
    margin-top: auto; display: flex; align-items: center; padding: 8px 8px; column-gap: 12px;
    border-top: 1px solid lightgrey;
  }

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

  .drawer-item-glow {
    background: #f7c686;

    /* so it doesn't get overriden by hover stles */
    color: black !important;
    font-weight: 600 !important;
    /* app purple: #5d0068 */
    /* new orange: #f7c37e */
    /* background: #e2dddd !important;  */
  }
</style>
