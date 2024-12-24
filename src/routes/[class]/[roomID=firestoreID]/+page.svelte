{#if roomDoc}
	<div>
    <LeftDrawerToggleButton/>
    
    <div style="padding: {PAGE_PADDING}px;">
      <Textfield 
        disabled={hasQuestionMark(roomDoc.name) && roomDoc.askerUID && $user.uid !== roomDoc.askerUID && $user.uid !== 'xC05mXTCFIRxLnyxfKnxY7oNBPi2'}
        value={roomDoc.name} on:input={(e) => updateRoomName(e)}
        class="room-title" 
        style={`width: ${$blackboardWidth}px;`}
      >
        <HelperText slot="helper" persistent>
          {#if roomDoc.askerName && roomDoc.askerUID && roomDoc.date} 
            Question asked by {roomDoc.askerName.split(" ")[0]} on {displayDate(roomDoc.dateAsked)},
            and has {roomDoc.blackboards.length - 1} responses
          {:else if roomDoc.blackboards} 
            This room has {roomDoc.blackboards.length} boards
          {/if}
        </HelperText>
      </Textfield>

      {#if roomDoc.attachmentsDownloadURLs} 
        {#each roomDoc.attachmentsDownloadURLs as attachmentURL, i}
          <a href={attachmentURL} target="_blank">
            {roomDoc.attachmentsNames[i]}
          </a>
        {/each}
      {/if}

      <div style="margin-bottom: 14px;"></div>

      {#if roomDoc.blackboards}
        {#each roomDoc.blackboards as boardID, i (boardID) }
          <GeneralizedBlackboardDisplay {boardID} {classID} {roomDoc}/>

          <div style="margin-bottom: 80px;"></div>
        {/each} 

        <button on:click={createNewMultiboard} style="width: {$blackboardWidth}px;" class="new-blackboard-button">
          {#if hasQuestionMark(roomDoc.name)}
            RESPOND TO QUESTION
          {:else}
            NEW BLACKBOARD
          {/if}
        </button>
      {/if}
    </div>
  </div>
{/if}

<script>
  import LeftDrawerToggleButton from '$lib/LeftDrawerToggleButton.svelte'
  import GeneralizedBlackboardDisplay from '$lib/GeneralizedBlackboardDisplay.svelte'

  import { getRandomID, displayDate } from '/src/helpers/utility.js'
  import { updateFirestoreDoc, setFirestoreDoc } from '/src/helpers/crud.js'
  import { handleNewQuestionNotifications } from '/src/helpers/everythingElse.js'
  import { PAGE_PADDING } from '/src/helpers/CONSTANTS.js'

  import { user, blackboardWidth } from '/src/store.js'
  import { onDestroy } from 'svelte'
  import { doc, getFirestore, updateDoc, onSnapshot, setDoc, arrayUnion, increment } from 'firebase/firestore'

  import Textfield from '@smui/textfield'
  import HelperText from '@smui/textfield/helper-text'
  import '$lib/_FourColor.scss'
  
  export let data
  let { classID, roomID } = data
  $: ({ classID, roomID } = data) // so it stays in sync when `data` changes

  let unsubRoomListener
  let roomDoc = {
    name: '', 
    blackboards: null
  }

  $: boardsDbPath = `classes/${classID}/blackboards/`
  $: roomsDbPath = `classes/${classID}/rooms/`
  $: roomRef = doc(getFirestore(), roomsDbPath + roomID)
  $: roomID, createRoomListener() // Yes, reactive statements DO trigger on initial assignment
  
  $: if (roomID && $user.uid) {
    const userRef = doc(getFirestore(), `users/${$user.uid}`)
    updateDoc(userRef, {
      mostRecentClassAndRoomID: `/${classID}/${roomID}`
    })
  }

  onDestroy(() => {
    unsubRoomListener()
  })

  async function createRoomListener () {
    if (unsubRoomListener) unsubRoomListener() // assume it's not async
    unsubRoomListener = onSnapshot(roomRef, (snapshot) => {
      // a room can be deleted at any moment - when that happens, redirect
      if (!snapshot.exists()) {
        // goto(`/${classID}/${classID}`)
      } else {
        roomDoc = { 
          id: snapshot.id, 
          path: snapshot.ref.path, 
          ...snapshot.data() 
        }
      }
    })
  }

  let lockQuestionIntervalID = ''
  let lockQuestionCurrentTime = 5

  let resolveQuestionIntervalID
  let resolveQuestionCurrentTime = 5

  function hasQuestionMark (string) {
    // quickfix
    if (!string) return false

    return '?' === string.charAt(string.length - 1)
  }

  function isLockedAsQuestion (roomDoc) {
    return roomDoc.askerName && roomDoc.dateAsked && roomDoc.askerUID
  }

  // reserve #10 numbers
  async function updateRoomName ({ srcElement }) {
    const { value } = srcElement
    const roomUpdateObj = { name: value }
    // user typed ? 
    if (!hasQuestionMark(roomDoc.name) && hasQuestionMark(value) && !isLockedAsQuestion(roomDoc)) {
      initLockQuestionCountdown()
    }
    // user backtracked ? 
    else if (lockQuestionIntervalID && !hasQuestionMark(value)) {
      resetQuestionCountdown()
    }
    // resolve a locked question
    else if (!hasQuestionMark(value) && isLockedAsQuestion(roomDoc)) {
      initResolveQuestionCountdown()
    }
    // hasQuestionMark is probably not necessary
    else if (resolveQuestionIntervalID && hasQuestionMark(value) && isLockedAsQuestion(roomDoc)) {
      resetResolveQuestionCountdown()
    }
    await updateDoc(roomRef, roomUpdateObj)
  }

  function initLockQuestionCountdown () {
    lockQuestionCurrentTime = 5
    lockQuestionIntervalID = setInterval(() => {
      lockQuestionCurrentTime -= 1
      if (lockQuestionCurrentTime === 0) {
        lockRoomAsQuestion()
        handleNewQuestionNotifications({
          classID, 
          roomID: roomDoc.id,
          userDoc: $user, 
          questionTitleInput: roomDoc.name
        })
        resetQuestionCountdown()
      }
    }, 1000)
  }

  function initResolveQuestionCountdown () {
    resolveQuestionCurrentTime = 5
    resolveQuestionIntervalID = setInterval(() => {
      resolveQuestionCurrentTime -= 1
      if (resolveQuestionCurrentTime === 0) {
        labelRoomAsResolved()
      }
    }, 1000)
  }

  function labelRoomAsResolved () {
    updateDoc(roomRef, {
      dateResolved: new Date().toISOString()
    })

    // update metadata
    updateFirestoreDoc(`classes/${classID}`, {
      numOfResolvedQuestions: increment(1),
      numOfUnresolvedQuestions: increment(-1)
    })  
  }

  function resetResolveQuestionCountdown () {
    clearTimeout(resolveQuestionIntervalID)
    resolveQuestionIntervalID = ''
  }

  function resetQuestionCountdown () {
    clearTimeout(lockQuestionIntervalID)
    lockQuestionIntervalID = ''
  }

  function lockRoomAsQuestion () {
    updateDoc(roomRef, {
      askerName: $user.name || 'Beaver #999',
      askerUID: $user.uid,
      dateAsked: new Date().toISOString()
    })
  }
  // TO-DO: refactor/unify with the existing helper function API in crud.js
  async function createNewMultiboard () {
    const newID = getRandomID();  

    const idOfSlide2 = getRandomID() 
    const idOfSlide3 = getRandomID()

    const blackboardRef = doc(getFirestore(), boardsDbPath + newID)
    // TODO: use batch operation
    await Promise.all([
      setDoc(blackboardRef, { 
        recordState: 'pre_record',
        slideIDs: [newID, idOfSlide2, idOfSlide3],
        isMultiboard: true
      }),
      setFirestoreDoc(boardsDbPath + newID + `/slides/${newID}`, {
        // empty doc matters because it can then be updated with background images etc.
      }),
      setFirestoreDoc(boardsDbPath + newID + `/slides/${idOfSlide2}`, {
        // empty doc matters because it can then be updated with background images etc.
      }),
      setFirestoreDoc(boardsDbPath + newID + `/slides/${idOfSlide3}`, {

      }),
      updateDoc(roomRef, {
        blackboards: arrayUnion(newID)
      })
    ])
  }
</script>

<style>
  :global(.room-title input) {
    font-size: 2rem;
  }

  .new-blackboard-button {
    display: flex; 
    justify-content: center; 
    align-items: center;
    background-color: #2e3131; 
    color: white;
    height: 35px;
    opacity: 2.0s ease-in;
    opacity: 1;
  }
</style>

