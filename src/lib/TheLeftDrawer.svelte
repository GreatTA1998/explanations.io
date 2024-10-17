<!-- This component re-renders everytime classID changes: https://github.com/sveltejs/svelte/issues/1469#issuecomment-698955660 -->
<!-- {#if $user.uid}
  {#key classID}
    <RenderlessMyDocUpdater 
      {classID} 
      {roomID}
    />
  {/key}
{/if} -->
<RenderlessDailyVideoConference 
  {roomID}
  {willJoinVoiceChat}
  let:activeSpeakerID={activeSpeakerID}
  let:toggleMic={toggleMic}
  let:firestoreIDToDailyID={firestoreIDToDailyID}
>
  <!-- MINI TOP APP BAR -->
  <!-- class="mdc-elevation--z{4}" -->
  <div style="padding: 4px; padding-bottom: 6px;">
    <div style="display: flex; align-items: center; width: 100%;">
      <img 
        on:click={handleLogoClick}
        src="/app-logo-no-bg.png" width="52" height="48" style="filter: brightness(80%); margin-left: 4px; margin-right: 6px; margin-top: 4px; cursor: pointer;"
      >

      {#if classDoc}
        <div style="flex-grow: 1">
            <div style="display: flex; align-items: center; width: 100%;">
              {#key classDoc}
                <ClassDropdownMenu 
                  nameOfClass={classDoc.name}
                  descriptionOfClass={classDoc.description}
                />
              {/key}
            </div>
        </div>
      {/if}
    </div>
  </div>

  <!-- REST OF DRAWER CONTENT -->
  <List style="padding: 0">
    <div style="width: 100%; border-top: 1px solid lightgrey;"></div>
    
    <div style="margin-top: 16px;"></div>

    <div 
      class:drawer-item-glow={$page.routeId === '[class]/overview'}
      on:click={() => goto(`/${classID}/overview`)} 
      class="action-item"
      style="display: flex; align-items: center;"
    >
      <span class="material-symbols-outlined" style="font-size: 1.7rem; margin-top: 2px; margin-left: 8px; opacity: 0.9">
        cottage
      </span>

      <div style="margin-left: 12px; font-size: 16px;">
        Server Overview
      </div>
    </div>

    <div style="margin-top: 16px;"></div>

    <div style="width: 100%; border-bottom: 1px solid lightgrey;"></div>

    <div style="margin-bottom: 36px;"></div>

    <QuestionsSection {classID}>
      <div style="width: 100%; display: flex;">
        <div on:click={() => goto(`/${classID}/question`)} 
          class="new-question-button"
          class:drawer-item-glow={$page.routeId === '[class]/question'}
        >
          <span class="material-symbols-outlined" style="font-size: 1.6rem; margin-top: 2px; margin-left: 8px;">
            add
          </span>
          <div style="margin-left: 6px; font-size: 14px; font-weight: 400;">
            New question
          </div>
        </div> 
      </div>
    </QuestionsSection>

    <div style="margin-top: 36px;"></div>

    <div style="display: flex; align-items: center;">
      <div style="text-transform: uppercase; font-weight: 500; color: rgb(120, 120, 120); margin-left: 16px;">
        Library Archive
      </div>
      <span on:click={createNewRoom} class="material-icons new-room-button">
        add
      </span>
    </div>

    <!-- each root rooms -->
    {#each rootRooms as room, i (room.id)}
      {#if !room.parentRoomID}
        <LeftDrawerRecursiveRoom 
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
      <LeftDrawerRecursiveRoomReorderDropzone
        orderWithinLevel={rootRooms.length}
        parentRoomIDs={['']}
        roomsInThisLevel={rootRooms}
        {classID}
      />
    </div>
  </List>
  
  <!-- <div style="position: absolute; bottom: 0px; top: auto; width: {DRAWER_EXPANDED_WIDTH - 2}px; background: white; height: 48px; box-sizing: border-box;" class="core-shadow" >
    <div 
      class:drawer-item-glow={$page.routeId === '[class]/profile'}
      on:click={() => goto(`/${classID}/profile`)} 
      class="action-item"
      style="display: flex; align-items: center;"
    >
      <span class="material-symbols-outlined" style="font-size: 1.7rem; margin-top: 2px; opacity: 0.9">
        account_circle
      </span>
      
      <div style="margin-left: 12px; font-size: 1.2rem; font-weight: 400;">
        My profile
      </div>
    </div>
  </div> -->
</RenderlessDailyVideoConference>


<script>
  import ClassDropdownMenu from '$lib/ClassDropdownMenu.svelte'
  import { onDestroy, onMount } from 'svelte'
  import { user, roomToPeople, browserTabID, dailyRoomParticipants, willPreventPageLeave, adminUIDs, drawerWidth, maxAvailableHeight, maxAvailableWidth} from '/src/store.js'
  
  import List, { Item, Text } from '@smui/list'
  import RenderlessDailyVideoConference from '$lib/RenderlessDailyVideoConference.svelte'
  import { goto } from '$app/navigation'
  import { browser } from '$app/environment'
  import { collection, getDoc, doc, getFirestore, onSnapshot, orderBy, setDoc, query, getDocs, updateDoc, deleteDoc, writeBatch, arrayRemove, arrayUnion} from 'firebase/firestore'
  import { computeMaxAvailableDimensions } from '/src/helpers/canvas.js'
  import { createRoomDoc, updateFirestoreDoc } from '/src/helpers/crud.js'
  import LeftDrawerRecursiveRoom from '$lib/LeftDrawerRecursiveRoom.svelte'
  import LeftDrawerRecursiveRoomReorderDropzone from '$lib/LeftDrawerRecursiveRoomReorderDropzone.svelte'
  import { page } from '$app/stores'
  import QuestionsSection from '$lib/QuestionsSection.svelte'

  export let classID
  export let roomID

  let classDoc = null
  const classPath = `classes/${classID}/`
  let unsubFuncs = []
  let rooms = [] // AF([]) means not fetched rooms, there's no point in a server with empty rooms, there will be a lobby 

  let willJoinVoiceChat = false

	// START OF RESIZE LOGIC 
  let resizeDebouncer = null

  // NOTE: resize logic is currently scattered everywhere within this file, refactor later
  // adjust dimensions whenever $drawerWidth changes
  $: debouncedResizeHandler($drawerWidth)

  $: if (classID) {
    initializeEverything()
  }

  async function initializeEverything () {
    unsubDbListeners()
    $roomToPeople = []
    await fetchClassDoc()
    updateClassMetadata()
    fetchParticipants()
    fetchRooms()
  }

  // $: if (roomID && $user.uid) {
  //   const userRef = doc(getFirestore(), `users/${$user.uid}`)
  //   updateDoc(userRef, {
  //     mostRecentClassAndRoomID: `/${classID}/${roomID}`
  //   })
  // }

  $: rootRooms = rooms.filter(room => room.parentRoomID === '')

  onMount(async () => {
    // AWAIT FIX: __layout mounts twice: see issue https://github.com/sveltejs/kit/issues/2130
    if (browser) {
      // if (window.matchMedia('screen and (max-width: 480px)').matches) {
      //   drawerWidth.set(0)
      // }


      // ROUTE GUARD DISABLED: user must be logged in to enter class server
      // if (!$user.uid) {
      //   goto('/')
      //   return
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

  function handleLogoClick () {
    goto('/', { replaceState: true })
  }

  async function updateClassMetadata () {
    // keep track of number of members regardless of where they are
    let copyOfMemberUIDs = [...(classDoc.memberUIDs || [])]
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

  function dragover_handler (e) {
    e.preventDefault()
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
      })
    )
  }
</script>

<style>
  .new-question-button {
    display: flex; 
    align-items: center; 
    width: 50%; 
    border-radius: 24px; 

    color: black; 
    background-color: #f1e8f3; 
    height: 28px;

    /* copied from action-item except bigger border-radius */
    margin: 6px;
    cursor: pointer;
    padding: 4px 8px;
  }

  .action-item {
    border-radius: 4px;
    margin: 6px;
    cursor: pointer;
    padding-top: 4px; 
    padding-bottom: 4px;
    padding-left: 8px;
  }

  .action-item:hover {
    background: lightgrey;
  }

  .new-room-button {
    cursor: pointer;
    color: grey; 
    margin-left: auto; 
    margin-right: 12px; 
    font-size: 1.2rem;
  }

  .new-room-button:hover {
    background-color: rgb(233, 233, 233);
  }

  .drawer-item-glow {
    /* app purple: #5d0068 */
    /* new orange: #f7c37e */
    /* so it doesn't get overriden by hover stles */
    background: #f7c686;
    /* background: #e2dddd !important;  */
    color: black !important;
    font-weight: 600 !important;

    /* so it doesn't get overriden by hover stles */
    /* background:hsl(0,0%,0%, 0.80) !important; 
    color: white; */
  }
</style>
