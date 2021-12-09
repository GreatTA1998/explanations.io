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
          Marked as question by {roomDoc.askerName} on {displayDate(roomDoc.dateAsked)}
        {/if}
        {#if roomDoc.dateResolved}
          , resolved {displayDate(roomDoc.dateResolved)}
        {/if}
      </HelperText>
    </Textfield>

    <div style="margin-bottom: 20px;"></div>

		{#each roomDoc.blackboards as boardID (boardID) }
			<RenderlessBoardMethods dbPath={boardsDbPath + boardID} 
				let:boardDoc={boardDoc}
				let:fetchStrokes={fetchStrokes}
        let:listenToStrokes={listenToStrokes}
				let:strokesArray={strokesArray}
        let:handleNewlyDrawnStroke={handleNewlyDrawnStroke}
        let:deleteAllStrokesFromDb={deleteAllStrokesFromDb}
			>
        {#if boardDoc}
          <TextAreaAutoResizing 
            value={boardDoc.description || ''} 
            on:input={(e) => updateBoardDescription(e, boardID)}
          />

          {#if boardDoc.audioDownloadURL }
            <div use:lazyCallable={fetchStrokes} style={`width: ${$canvasWidth}px; height: ${$canvasHeight + 80}px; position: relative`}>
              <DoodleVideo 
                {strokesArray} 
                audioDownloadURL={boardDoc.audioDownloadURL}
              >
                {#if $user.uid === boardDoc.creatorUID}
                  <Button on:click={() => revertToBoard(boardDoc, deleteAllStrokesFromDb)} color="primary">
                    Delete video
                  </Button>
                {/if}
              </DoodleVideo>
            </div>
          {:else}
            <div use:lazyCallable={listenToStrokes} style={`width: ${$canvasWidth}px; height: ${$canvasHeight}px; position: relative`}>
              <RenderlessAudioRecorder
                let:startRecording={startRecording} 
                let:stopRecording={stopRecording}
                let:currentTime={currentTime}
                on:record-end={(e) => saveVideo(e.detail.audioBlob, boardID)}
              >
                <Blackboard {strokesArray} {currentTime} on:stroke-drawn={(e) => handleNewlyDrawnStroke(e.detail.newStroke)}> 
                  {#if $recordState === 'pre_record'}
                    <span on:click={startRecording}
                      class="material-icons" style="font-size: 2.5rem;
                      color: cyan;
                      margin-left: 24px; margin-right: 20px"
                    >
                      radio_button_checked
                    </span>
                    
                    <span on:click={() => blackboardMenu.setOpen(true)} class="material-icons" style="margin-right: 10px; color: white; font-size: 2rem;">
                      more_horiz
                    </span>
                    <Menu bind:this={blackboardMenu} style="left: 100px; top: 50px; width: 300px">
                      <List>
                        <Item on:SMUI:action={deleteAllStrokesFromDb}>
                          Wipe board
                        </Item>
                      </List>
                    </Menu>

                  {:else if $recordState === 'mid_record'}
                    <span on:click={stopRecording}
                      class="material-icons" style="font-size: 2.5rem;
                      color: cyan;
                      margin-left: 24px; margin-right: 20px"
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
                </Blackboard>
              </RenderlessAudioRecorder>
            </div>
          {/if}
        {/if}
      </RenderlessBoardMethods>
		{/each} 
      
    <!-- For some reason canvas has a tiny margin-right that is clearly visible but not traceable from the inspector --> 
    <div style="display: flex; 
                justify-content: center; 
                align-items: center;
                margin-top: 40px; background-color: #2e3131; font-family: Roboto, sans-serif; text-transform: uppercase;
                height: 35px">
       New blackboard
    </div>
  </div>
{/if}

<script>
  import '$lib/_FourColor.scss'
  import RenderlessBoardMethods from '$lib/RenderlessBoardMethods.svelte'
  import RenderlessAudioRecorder from '$lib/RenderlessAudioRecorder.svelte'
  import Blackboard from '../../../lib/Blackboard.svelte'
  import DoodleVideo from '$lib/DoodleVideo.svelte'
  import { fetchDoc } from '../../../database.js'
  import { onMount, tick } from 'svelte'
  import Button, { Group, Label }from '@smui/button'
  import { portal, lazyCallable } from '../../../helpers/actions.js'
  import { goto } from '$app/navigation';
  import { recordState, user, canvasHeight, canvasWidth } from '../../../store.js'
  import { getRandomID, displayDate } from '../../../helpers/utility.js'
  import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject, } from 'firebase/storage'
  import { doc, getFirestore, updateDoc, deleteField, onSnapshot, setDoc, arrayUnion, collection, query, where, getDocs } from 'firebase/firestore';
  import { getFunctions, httpsCallable } from "firebase/functions";
  import Textfield from '@smui/textfield'
  import HelperText from '@smui/textfield/helper-text'
  import Menu from '@smui/menu';
  import List, { Item, Text } from '@smui/list'
  import TextAreaAutoResizing from '$lib/TextAreaAutoResizing.svelte'
  import CircularProgress from '@smui/circular-progress' 

  export let classID
  export let roomID

  let blackboardMenu

  let roomDoc
  // reactivity not necessary: `classID` is constant here 
  const boardsDbPath = `classes/${classID}/blackboards/`
  const roomsDbPath = `classes/${classID}/rooms/`
  $: roomRef = doc(getFirestore(), roomsDbPath + roomID)

  let lockQuestionIntervalID = ''
  let lockQuestionCurrentTime = 5

  let resolveQuestionIntervalID
  let resolveQuestionCurrentTime = 5

  if (!$user.uid) {
    goto('/')
  }

  function hasQuestionMark (string) {
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
                content: `${$user.name} asked: "${roomDoc.name || 'Fake question here'}"`,
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

  // slugify the classID if it contains '.', convert to '-' regenerate 6.036 and 6.046's class
  onMount(async () => {
    onSnapshot(roomRef, (snapshot) => {
      roomDoc = { id: snapshot.id, ...snapshot.data() }
    })
  })

  $: roomID, updateRoomDoc() 

  async function updateRoomDoc () {
    roomDoc = await fetchDoc(roomsDbPath + roomID)
  }

  async function saveVideo (audioBlob, boardID) {
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
    recordState.set('pre_record')
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
    await tick()
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
</style>

