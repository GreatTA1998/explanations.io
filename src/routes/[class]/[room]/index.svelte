<script context="module">
  export async function load ({ page }) {
    return {
      props: {
        classID: page.params.class,
        roomID: page.params.room
      }
    }
  }
</script>

{#if roomDoc}
	<div use:portal={'main-content'} style="padding: 16px;" class:question={hasQuestionMark(roomDoc.name)}>
    <Textfield 
      disabled={hasQuestionMark(roomDoc.name) && roomDoc.askerUID && $user.uid !== roomDoc.askerUID}
      value={roomDoc.name} on:input={(e) => updateRoomName(e)}
      class="room-title" 
      style={`width: ${$canvasWidth}px;`}
    >
      <HelperText slot="helper" persistent>
        {#if lockQuestionIntervalID}
          Pinging server members in {lockQuestionCurrentTime}, cancel by backtracking the ?
        {:else if resolveQuestionIntervalID}
          Resolving this question in {resolveQuestionCurrentTime}, cancel by re-adding ?
        {:else if roomDoc.askerName && roomDoc.askerUID && roomDoc.date} 
          {roomDoc.askerName} asked on {displayDate(roomDoc.dateAsked)}
        {/if}

        {#if roomDoc.dateResolved}
          , resolved {displayDate(roomDoc.dateResolved)}
        {/if}
      </HelperText>
    </Textfield>

    <div style="margin-bottom: 20px;"></div>

		{#each roomDoc.blackboards as boardID (boardID) }
			<RenderlessListenToBoard dbPath={boardsDbPath + boardID} let:boardDoc={boardDoc}>
        {#if boardDoc}
          <TextAreaAutoResizing 
            value={boardDoc.description || ''} 
            on:input={(e) => updateBoardDescription(e, boardID)}
          />
          {#if boardDoc.audioDownloadURL }
            <RenderlessFetchStrokes dbPath={boardsDbPath + boardID}
              let:fetchStrokes={fetchStrokes}
              let:strokesArray={strokesArray}
              let:deleteAllStrokesFromDb={deleteAllStrokesFromDb}
            >
              <div use:lazyCallable={fetchStrokes} style={`width: ${$canvasWidth}px; height: ${$canvasHeight + 40}px; position: relative`}>
                <DoodleVideo 
                  {strokesArray} 
                  audioDownloadURL={boardDoc.audioDownloadURL}
                  backgroundImageDownloadURL={boardDoc.backgroundImageDownloadURL}
                >
                  {#if $user.uid === boardDoc.creatorUID}
                    <Button on:click={() => revertToBoard(boardDoc, deleteAllStrokesFromDb)} color="primary">
                      Delete video
                    </Button>
                  {/if}
                </DoodleVideo>
              </div>
            </RenderlessFetchStrokes>
          {:else}
            <RenderlessListenToStrokes dbPath={boardsDbPath + boardID}
              let:listenToStrokes={listenToStrokes} 
              let:strokesArray={strokesArray}
              let:handleNewlyDrawnStroke={handleNewlyDrawnStroke}
              let:deleteAllStrokesFromDb={deleteAllStrokesFromDb}
            >
              <div use:lazyCallable={listenToStrokes} style={`width: ${$canvasWidth}px; height: ${$canvasHeight}px; position: relative`}>
                <RenderlessAudioRecorder
                  let:startRecording={startRecording} 
                  let:stopRecording={stopRecording}
                  let:currentTime={currentTime}
                  on:record-end={(e) => saveVideo(e.detail.audioBlob, strokesArray, boardID)}
                >
                  <Blackboard 
                    {strokesArray} 
                    {currentTime} 
                    backgroundImageDownloadURL={boardDoc.backgroundImageDownloadURL}
                    on:stroke-drawn={(e) => handleNewlyDrawnStroke(e.detail.newStroke)}
                  > 
                    {#if !boardDoc.recordState || boardDoc.recordState === 'pre_record'}
                      <span on:click={() => callManyFuncs(
                          startRecording, 
                          () => updateRecordState(boardID, 'mid_record'),
                          () => updateRecorderBrowserTabID(boardID)
                        )}
                        class="material-icons" 
                        style="font-size: 2.5rem; color: cyan; margin-left: 30px; margin-right: 26px"
                      >
                        radio_button_checked
                      </span>
                    {:else if boardDoc.recordState === 'mid_record'}
                      <span 
                        on:click={() => callManyFuncs(
                          stopRecording,
                          () => updateRecordState(boardID, 'post_record')
                        )}
                        class:unclickable={$browserTabID !== boardDoc.recorderBrowserTabID}
                        class="material-icons" 
                        style="font-size: 2.5rem; color: cyan; margin-left: 30px; margin-right: 26px"
                      >
                        stop_circle
                      </span>
                    {:else}
                      <div style="display: flex; justify-content: center; margin-left: 20px; margin-right: 20px">
                        <CircularProgress
                          class="my-four-colors"
                          style="height: 32px; width: 32px;"
                          indeterminate
                          fourColor
                        />
                      </div>
                    {/if}
                    
                    <div slot="dropdown-menu">
                      <Item slot="dropdown-menu" on:SMUI:action={deleteAllStrokesFromDb}>
                        Wipe board
                      </Item>     
                      <Item on:click={boardDoc.backgroundImageDownloadURL ? resetBackgroundImage(boardDoc.id) : clickHiddenInput(boardDoc.id)}>
                        {boardDoc.backgroundImageDownloadURL ? 'Remove background' : 'Set background' }
                        <input
                          id="input-{boardDoc.id}"
                          on:change={(e) => handleWhatUserUploaded(e, boardDoc.id)}
                          style="display: none" 
                          type="file" 
                          accept="image/gif, image/jpeg, image/png" 
                        >
                      </Item>
                    </div>
                  </Blackboard>
                </RenderlessAudioRecorder>
              </div>
            </RenderlessListenToStrokes>
          {/if}
        {/if}
      </RenderlessListenToBoard>
		{/each} 
      
    <!-- For some reason canvas has a tiny margin-right that is clearly visible but not traceable from the inspector --> 
    <div on:click={createNewBlackboard}
        style="
          display: flex; 
          justify-content: center; 
          align-items: center;
          margin-top: 40px; 
          background-color: #2e3131; 
          font-family: Roboto, sans-serif; text-transform: uppercase;
          color: white;
          height: 35px;
          width: {$canvasWidth}px;
    ">
       New blackboard
    </div>
  </div>
{/if}

<script>
  import '$lib/_FourColor.scss'
  import RenderlessListenToBoard from '$lib/RenderlessListenToBoard.svelte'
  import RenderlessAudioRecorder from '$lib/RenderlessAudioRecorder.svelte'
  import Blackboard from '../../../lib/Blackboard.svelte'
  import DoodleVideo from '$lib/DoodleVideo.svelte'
  import { onMount, tick, onDestroy } from 'svelte'
  import Button, { Group, Label }from '@smui/button'
  import { portal, lazyCallable } from '../../../helpers/actions.js'
  import { goto } from '$app/navigation';
  import { browserTabID, user, canvasHeight, canvasWidth } from '../../../store.js'
  import { getRandomID, displayDate } from '../../../helpers/utility.js'
  import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject, } from 'firebase/storage'
  import { doc, getFirestore, updateDoc, deleteField, onSnapshot, setDoc, arrayUnion, collection, query, where, getDocs } from 'firebase/firestore';
  import { getFunctions, httpsCallable } from "firebase/functions";
  import Textfield from '@smui/textfield'
  import HelperText from '@smui/textfield/helper-text'
  import List, { Item, Text } from '@smui/list'
  import TextAreaAutoResizing from '$lib/TextAreaAutoResizing.svelte'
  import CircularProgress from '@smui/circular-progress' 
  import RenderlessListenToStrokes from '$lib/RenderlessListenToStrokes.svelte'
  import RenderlessFetchStrokes from '$lib/RenderlessFetchStrokes.svelte'

  export let classID
  export let roomID

  let unsubRoomListener
  let roomDoc

  if (!$user.uid) {
    goto('/')
  }

  $: boardsDbPath = `classes/${classID}/blackboards/`
  $: roomsDbPath = `classes/${classID}/rooms/`
  $: roomRef = doc(getFirestore(), roomsDbPath + roomID)
  $: roomID, createRoomListener() // Yes, reactive statements DO trigger on initial assignment

  async function createRoomListener () {
    if (unsubRoomListener) unsubRoomListener() // assume it's not async
    unsubRoomListener = onSnapshot(roomRef, (snapshot) => {
      roomDoc = { id: snapshot.id, ...snapshot.data() }
    })
  }

  onDestroy(() => {
    unsubRoomListener()
  })

  function callManyFuncs (...funcs) {
    for (const func of funcs) {
      func()
    }
  }

  function updateRecorderBrowserTabID (boardID) {
    const blackboardRef = doc(getFirestore(), boardsDbPath + boardID)
    updateDoc(blackboardRef, {
      recorderBrowserTabID: $browserTabID
    })
  }

  function updateRecordState (boardID, newRecordState) {
    const blackboardRef = doc(getFirestore(), boardsDbPath + boardID)
    updateDoc(blackboardRef, {
      recordState: newRecordState
    })
  }

  //// START of background image logic
  function clickHiddenInput (boardID) {
    document.getElementById(`input-${boardID}`).click()
  }

  async function handleWhatUserUploaded (e, boardID) {
    const blackboardRef = doc(getFirestore(), boardsDbPath + boardID)
    const imageFile = e.target.files[0]; 
    if (!imageFile) return; 
    if (imageFile.type.split("/")[0] === 'image') {
      // rewrite
      const storage = getStorage()
      const imageRef = ref(storage, `images/${getRandomID()}`)
      await uploadBytes(imageRef, imageFile)
      const downloadURL = await getDownloadURL(imageRef)
      updateDoc(blackboardRef, {
        backgroundImageDownloadURL: downloadURL
      })
    } else {
      alert("Error: only images can be used")
    }
  }

  function resetBackgroundImage (boardID) {
    const blackboardRef = doc(getFirestore(), boardsDbPath + boardID)
    updateDoc(blackboardRef, {
      backgroundImageDownloadURL: deleteField() // Svelte doesn't react to change to empty string, for some reason
    })
  }
  //// END of background image logic

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
        textNotifyServerMembers()
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

  async function textNotifyServerMembers () {
    const promises = []
    const functions = getFunctions();
    const sendTextMessage = httpsCallable(functions, 'sendTextMessage');
    const usersRef = collection(getFirestore(), 'users')
    const q = query(usersRef, where('willReceiveText', '==', true))
    const snapshot = await getDocs(q)
    if (snapshot.docs) {
      for (const doc of snapshot.docs) {
        console.log('phoneNumber =', doc.data().phoneNumber)
        try {
          if (doc.id !== $user.uid) {
            promises.push(
              sendTextMessage({ 
                content: `${$user.name} asked on https://ihtfp.app: "${roomDoc.name || 'Fake question here'}"`,
                toWho: doc.data().phoneNumber
              })
            )
          }       
        } catch (error) {
          alert(error)
        }
      }
    }
    await Promise.all(promises)
    console.log('success, sent all texts.')
  }

  async function updateBoardDescription ({ detail }, id) {
    const boardRef = doc(getFirestore(), boardsDbPath + id)
    await updateDoc(boardRef, {
      description: detail
    })
  }

  async function saveVideo (audioBlob, strokesArray, boardID) {
    // QUICK-FIX for concurrent drawings with no timestamp 
    // TODO: fails for edge case when all starting strokes are consecutively from other person
    function hasValidTimestamp (stroke) {
      // strokes from other people have an artificial stroke duration of 0.5 added by `RenderlessListenToStrokes`
      // and have `currentTime = 0` because they have no access to the recorder's timer
      // NOTE: even if the person recording does preview drawings, both `startTime` and `endTime` would be 0 (instead of 0 and 0.5)
      return stroke.startTime !== 0 && stroke.endTime !== artificialDuration
    }

    const artificialDuration = 0.5
    const indicesOfModifiedStrokes = []
    const n = strokesArray.length

    for (let i = 0; i < n; i++) {
      if (!hasValidTimestamp(strokesArray[i])) {
        // find the last valid stroke and base the `startTime` on it
        let j = i - 1
        while (j >= 0) {
          if (hasValidTimestamp(strokesArray[j])) {
            strokesArray[i].startTime = strokesArray[j].endTime
            strokesArray[i].endTime = strokesArray[i].startTime + artificialDuration
            indicesOfModifiedStrokes.push(i)
            break
          }
          j -= 1 
        }
      }

      for (let idx of indicesOfModifiedStrokes) {
        const stroke = strokesArray[idx]
        const dbPath = boardsDbPath + boardID
        const strokesRef = doc(getFirestore(), `${dbPath}/strokes/${stroke.id}`)
        updateDoc(strokesRef, {
          startTime: stroke.startTime,
          endTime: stroke.endTime
        })
      }
    }

    const storage = getStorage()
    const audioRef = ref(storage, `audio/${getRandomID()}`)
    await uploadBytes(audioRef, audioBlob)
    const downloadURL = await getDownloadURL(audioRef)

    const blackboardRef = doc(getFirestore(), boardsDbPath + boardID)
    await updateDoc(blackboardRef, {
      creatorUID: $user.uid,
      creatorPhoneNumber: $user.phoneNumber,
      date: new Date().toISOString(),
      audioDownloadURL: downloadURL,
      audioRefFullPath: audioRef.fullPath
    })

    updateRecordState(boardID, 'pre_record')
  }

  async function revertToBoard ({ id, audioRefFullPath }, deleteAllStrokesFromDb) {
    const promises = []
    const boardRef = doc(getFirestore(), boardsDbPath + id)
    if (audioRefFullPath) {
      const audioRef = ref(getStorage(), audioRefFullPath)
      promises.push(
        deleteObject(audioRef)
      )
    }
    promises.push(
      updateDoc(boardRef, {
        creator: deleteField(),
        creatorPhoneNumber: deleteField(),
        date: deleteField(),
        audioDownloadURL: deleteField(),
        audioRefFullPath: deleteField()
      })
    )
    promises.push(deleteAllStrokesFromDb())
    await Promise.all(promises)
  }

  async function createNewBlackboard () {
    const newID = getRandomID();  
    const blackboardRef = doc(getFirestore(), boardsDbPath + newID)
    // TODO: use batch operation
    await Promise.all([
      setDoc(blackboardRef, {}),
      updateDoc(roomRef, {
        blackboards: arrayUnion(newID)
      })
    ]);  
    // await tick()
    // this.scrollToThisBoard(newID)
  }
</script>

<style>
:global(.room-title input) {
  font-size: 2rem;
}

:global(.question input) {
  color: rgb(19, 145, 230) !important;
}

.unclickable {
  pointer-events: none;
}
</style>

