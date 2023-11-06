<!-- This component re-renders everytime classID changes: https://github.com/sveltejs/svelte/issues/1469#issuecomment-698955660 -->
<!-- {#if $user.uid}
  {#key classID}
    <RenderlessMyDocUpdater 
      {classID} 
      {roomID}
    />
  {/key}
{/if} -->

<!-- TO-DO: what's unintuitive about this is that, this is not just a left frawer - this component 
  also specifies where the main content goes. In the future, decouple that out of this component.
-->

<div id="container-for-audio-elements">

</div>

<RenderlessDailyVideoConference 
  roomID='Undefined for now'
  {willJoinVoiceChat}
  let:activeSpeakerID={activeSpeakerID}
  let:toggleMic={toggleMic}
  let:firestoreIDToDailyID={firestoreIDToDailyID}
>
  <!-- MINI TOP APP BAR -->
  <div style="margin-bottom: 12px; padding-top: 2px; padding-bottom: 0; padding-left: 4px;" class="mdc-elevation--z{4}">
    <div style="display: flex; align-items: center; width: 100%;">
      <img 
        on:click={handleLogoClick} 
        src="/logo.png" 
        width="60"
        height="54" 
        alt="web-logo" 
        class="logo-image"
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
  <List>
    <div style="margin-top: 16px;"></div>

    <div 
      class:explain-item-selected={isBecomeHelperPopupOpen}
      on:click={() => goto(`/${classID}/overview`)} 
      class="action-item"
      style="display: flex; align-items: center;"
    >
      <span class="material-symbols-outlined" style="font-size: 2rem; margin-top: 2px; opacity: 0.9">
        home
      </span>

      <div style="margin-right: 4px;"></div>

      <div style="font-size: 1.2rem; font-weight: 400;">
        Server Overview
      </div>
    </div>

    <div style="margin-top: 12px;"></div>

    <!-- Notion's icon color is rgba(55, 53, 47, 0.45) -->
    <!-- Notion's font color is rgba(25, 23, 17, 0.6) -->
    <div on:click={() => goto(`/${classID}/question`)} 
      class="action-item"
      class:explain-item-selected={false}
      style="display: flex; align-items: center;"
    >
      <span class="material-icons" style="font-size: 2rem; margin-top: 2px;">
        add
      </span>
      <div style="margin-right: 4px;"></div>
      <div style="font-size: 1.2rem; font-weight: 400;">
        New question
      </div>
    </div> 

    <div style="margin-top: 12px"></div>

    {#if isBecomeHelperPopupOpen}
      <PopupBecomeHelper
        {classID}
        on:popup-close={() => isBecomeHelperPopupOpen = false}
      />
    {/if}

    <div 
      class:explain-item-selected={isBecomeHelperPopupOpen}
      on:click={() => goto(`/${classID}/profile`)} 
      class="action-item"
      style="display: flex; align-items: center;"
    >
      <span class="material-icons" style="font-size: 2rem; margin-top: 2px; opacity: 0.9">
        account_circle
      </span>
      <div style="margin-right: 4px;"></div>

      <div style="font-size: 1.2rem; font-weight: 400;">
        My profile
      </div>
    </div>

    <div style="margin-bottom: 48px;"></div>

    <div style="display: flex; align-items: center;">
      <div style="text-transform: uppercase; font-weight: 500; color: grey; margin-left: 12px;">
        Blackboard rooms
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
          {firestoreIDToDailyID}
          {toggleMic}
          {activeSpeakerID}
          {willJoinVoiceChat}
          roomID='This is used for moving videos to different rooms, fix later'
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
</RenderlessDailyVideoConference>


<script>
  import ClassDropdownMenu from '$lib/ClassDropdownMenu.svelte'
  import { onDestroy, onMount } from 'svelte'
  import { user, roomToPeople, browserTabID, dailyRoomParticipants, willPreventPageLeave, adminUIDs, drawerWidth, maxAvailableHeight, maxAvailableWidth} from '/src/store.js'
  
  import List, { Item, Text } from '@smui/list'
  import RenderlessMyDocUpdater from '$lib/RenderlessMyDocUpdater.svelte'
  import RenderlessDailyVideoConference from '$lib/RenderlessDailyVideoConference.svelte'
  import { goto } from '$app/navigation'
  import { browser } from '$app/environment'
  import { collection, getDoc, doc, getFirestore, onSnapshot, orderBy, setDoc, query, getDocs, updateDoc, deleteDoc, writeBatch, arrayRemove, arrayUnion} from 'firebase/firestore'
  import { computeMaxAvailableDimensions } from '/src/helpers/canvas.js'
  import { createRoomDoc, updateFirestoreDoc } from '/src/helpers/crud.js'
  import LeftDrawerRecursiveRoom from '$lib/LeftDrawerRecursiveRoom.svelte'
  import LeftDrawerRecursiveRoomReorderDropzone from '$lib/LeftDrawerRecursiveRoomReorderDropzone.svelte'
  import PopupBecomeHelper from '$lib/PopupBecomeHelper.svelte'
  import ReusableSignInButton from '$lib/ReusableSignInButton.svelte'

  export let classID
  export let roomID

  let classDoc = null
  const classPath = `classes/${classID}/`
  let unsubFuncs = []
  let rooms = [] // AF([]) means not fetched rooms, there's no point in a server with empty rooms, there will be a lobby 

  let willJoinVoiceChat = false
  let isBecomeHelperPopupOpen = false

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
    margin-right: 8px; 
    font-size: 1.2rem;
  }

  .new-room-button:hover {
    background-color: rgb(233, 233, 233);
  }

  .explain-item-selected {
    /* so it doesn't get overriden by hover stles */
    background:hsl(0,0%,0%, 0.80) !important; 
    color: white;
  }
</style>
