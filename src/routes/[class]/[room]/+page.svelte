

{#if roomDoc}
	<div use:portal={'main-content'} style="padding: 16px;" class:question={hasQuestionMark(roomDoc.name)}>
    <Textfield 
      disabled={hasQuestionMark(roomDoc.name) && roomDoc.askerUID && $user.uid !== roomDoc.askerUID}
      value={roomDoc.name} on:input={(e) => updateRoomName(e)}
      class="room-title" 
      style={`width: ${$canvasWidth}px;`}
    >
      <HelperText slot="helper">
        {#if !lockQuestionIntervalID && !resolveQuestionIntervalID && !roomDoc.askerUID}
          To ask the server a question, end your title with a question mark "?"
        {:else if lockQuestionIntervalID}
          Pinging server members in {lockQuestionCurrentTime}, cancel by backtracking the "?""
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

    <div style="margin-bottom: 14px;"></div>

		{#each roomDoc.blackboards as boardID, i (boardID) }
			<RenderlessListenToBoard dbPath={boardsDbPath + boardID} let:boardDoc={boardDoc}>
        {#if boardDoc}
          <div style="width: {$canvasWidth}px; margin-top: 0px; margin-bottom: 0px">
            <TextAreaAutoResizing 
              value={boardDoc.description || ''} 
              on:input={(e) => debouncedUpdateBoardDescription(e, boardID)}
              placeholder="Describe the blackboard..."
              readonly={boardDoc.audioDownloadURL && $user.uid !== boardDoc.creatorUID}
            />
          </div>

          {#if boardDoc.audioDownloadURL }
            <RenderlessFetchComments 
              dbPath={boardsDbPath + boardID} 
              {boardDoc}
              {roomDoc}
              {classID}
              {roomID}
              let:listenToComments={listenToComments} 
              let:allComments={allComments}
              let:newComment={newComment}
              let:bindLocalValue={bindLocalValue}
              let:submitNewComment={submitNewComment}
              let:isShowingComments={isShowingComments}
              let:hideComments={hideComments}
              let:deleteComment={deleteComment}
            >  
              <div style="display: flex; align-items: center">
                <div 
                  style="color: grey; font-size: 0.7rem; margin-left: 2px; margin-top: 4px; margin-bottom: 4px;"
                >
                  {boardDoc.eurekaUIDs ? boardDoc.eurekaUIDs.length : 0} upvotes, 
                  {boardDoc.viewMinutes ? boardDoc.viewMinutes.toFixed(1) : 0} minutes viewed,
                  {boardDoc.numOfComments || 0} comments
                </div>
                {#if !isShowingComments}
                  <Button on:click={listenToComments} >
                    <Icon class="material-icons" style="margin-right: 0">
                      expand_more
                    </Icon>
                  </Button>
                {:else}
                  <Button on:click={hideComments}>
                    <Icon class="material-icons" style="margin-right: 0">
                      expand_less
                    </Icon>
                  </Button>
                {/if}
              </div>

              {#if isShowingComments}
                <div style="width: {$canvasWidth - 20}px; margin-left: 20px;">
                  <DoodleVideoComments 
                    {allComments}
                    on:comment-delete={(e) => deleteComment(e.detail)}
                  />
                  
                  <div style="margin-bottom: 4px;"></div>

                  <TextAreaAutoResizing
                    value={newComment} 
                    on:input={(e) => bindLocalValue(e.detail)}
                    placeholder="New comment..."
                  />

                  <Button on:click={submitNewComment}>
                    SUBMIT
                  </Button>
                </div>
                <div style="margin-bottom: 10px;"></div>
              {/if}
            </RenderlessFetchComments>

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
                  on:six-seconds-elapsed={(e) => incrementViewMinutes(boardID, e.detail.playbackSpeed)}
                > 
                  <Button on:click={() => $drawerWidth === 1 ? drawerWidth.set(260) : drawerWidth.set(1)} style="background-color: rgb(90 90 90 / 100%); margin-left: 8px;">
                    <span class="material-icons" style="color: white;">
                      fullscreen
                    </span>
                  </Button>

                  {#if $user.uid}
                    <Button
                      on:click={eureka(boardDoc)}
                      style="
                      background-color: {boardDoc.eurekaUIDs ? (boardDoc.eurekaUIDs.includes($user.uid) ? 'orange' : 'rgb(90 90 90 / 100%)') : 'rgb(90 90 90 / 100%)'};
                      color: white;
                      margin-left: 8px;"
                    >
                      Upvote
                    </Button>
                  {/if}

                  <div style="
                    margin-left: {$canvasWidth - 240 - 164}px; 
                    display: flex; 
                    align-items: center; 
                    flex-direction: row-reverse"
                  >
                    <!-- boardDoc will always have a creatorUID because anonymous login -->
                    {#if $user.uid === boardDoc.creatorUID || !boardDoc.creatorUID || $adminUIDs.includes($user.uid)}
                      <Button 
                        on:click={() => revertToBoard(boardDoc, deleteAllStrokesFromDb)} 
                        style="background-color: rgb(90 90 90 / 100%); color: white">
                        Delete
                      </Button>

                      <Button 
                        draggable="true" on:dragstart={(e) => dragstart_handler(e, boardID, i)}
                        style="margin-right: 6px; background-color: rgb(90 90 90 / 100%); color: white">
                        Move
                      </Button>
                    {/if}
                  </div>
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
                {#if boardDoc.recordState === 'post_record'}
                  <LinearProgress indeterminate/>
                {:else}
                  <RenderlessStopwatch 
                    let:currentTime={currentTime} 
                    let:startStopwatch={startStopwatch} 
                    let:stopStopwatch={stopStopwatch}
                  >
                    <Blackboard 
                      {strokesArray} 
                      {currentTime} 
                      backgroundImageDownloadURL={boardDoc.backgroundImageDownloadURL}
                      recordState={boardDoc.recordState}
                      {boardID}
                      originalIndex={i}
                      on:background-upload={(e) => handleWhatUserUploaded(e.detail.imageFile, boardID)}
                      on:background-reset={() => resetBackgroundImage(boardID)}
                      on:stroke-drawn={(e) => handleNewlyDrawnStroke(e.detail.newStroke)}
                      on:board-wipe={deleteAllStrokesFromDb}
                      on:board-delete={() => deleteBoard(boardID, deleteAllStrokesFromDb)}
                    >
                      <RenderlessAudioRecorder
                        let:startRecording={startRecording} 
                        let:stopRecording={stopRecording}
                        on:record-end={(e) => saveVideo(e.detail.audioBlob, strokesArray, boardID)}
                      >
                      <!-- 
                        if an recording is active (rather than an interrupted session that isn't actually recording,
                        currentTime will be incrementing 
                      -->
                      {#if boardDoc.recordState === 'pre_record' || currentTime === 0}
                        <span 
                          on:click={() => callManyFuncs(
                            startRecording, 
                            startStopwatch,
                            () => updateRecordState(boardID, 'mid_record'),
                            () => updateRecorderBrowserTabID(boardID),
                            () => willPreventPageLeave.set(true)
                          )}
                          style="
                            font-size: 1.2rem; color: cyan; margin-left: 28px; margin-right: 26px; font-family: sans-serif; border: 1px solid cyan; 
                            padding-top: 2px; 
                            padding-bottom: 4px;
                            padding-left: 10px;
                            padding-right: 9px; 
                            box-sizing: border-box;
                            border-radius: 1px;
                            cursor: pointer;"
                        >
                          record
                        </span>
                        <!-- color was `cyan`, icon was `album` -->
      
                      {:else if boardDoc.recordState === 'mid_record'}
                        <span 
                          on:click={() => callManyFuncs(
                            stopRecording,
                            stopStopwatch,
                            () => updateRecordState(boardID, 'post_record'),
                            () => willPreventPageLeave.set(false)
                          )}
                          class:unclickable={$browserTabID !== boardDoc.recorderBrowserTabID}
                          class="material-icons" 
                          style="font-size: 2.5rem; color: cyan; margin-left: 22px; margin-right: 26px"
                        >
                          stop_circle
                        </span>
                      {/if}

                      <span 
                        on:click={() => $drawerWidth === 1 ? drawerWidth.set(260) : drawerWidth.set(1)} 
                        class="material-icons" style="color: white; font-size: 2.2rem; margin-right: 8px"
                      >
                        fullscreen
                      </span>
                      </RenderlessAudioRecorder>
                    </Blackboard>
                  </RenderlessStopwatch>
                {/if}
              </div>
            </RenderlessListenToStrokes>
          {/if}

          <div
            style="width: {$canvasWidth}px; height: 40px; box-sizing: border-box"
            on:dragover={(e) => dragover_handler(e)}
            on:drop={(e) => drop_handler(e, i+1)}
          >
      
          </div>

          {#if i  === roomDoc.blackboards.length - 1}
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
                  width: {$canvasWidth}px;"
                >
              New blackboard
            </div>
          {/if}
        {/if}
      </RenderlessListenToBoard>      
		{/each} 
  </div>
{/if}

<script>
  import '$lib/_FourColor.scss'
  import RenderlessListenToBoard from '$lib/RenderlessListenToBoard.svelte'
  import RenderlessAudioRecorder from '$lib/RenderlessAudioRecorder.svelte'
  import Blackboard from '../../../lib/Blackboard.svelte'
  import DoodleVideo from '$lib/DoodleVideo.svelte'
  import { onMount, tick, onDestroy } from 'svelte'
  import Button, { Icon } from '@smui/button'
  import { portal, lazyCallable } from '../../../helpers/actions.js'
  import { goto } from '$app/navigation';
  import { browserTabID, user, canvasHeight, canvasWidth, willPreventPageLeave, drawerWidth, adminUIDs } from '../../../store.js'
  import { getRandomID, displayDate } from '../../../helpers/utility.js'
  import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject, } from 'firebase/storage'
  import { doc, getFirestore, updateDoc, deleteField, onSnapshot, setDoc, arrayUnion, collection, query, where, getDocs, deleteDoc, arrayRemove, increment } from 'firebase/firestore';
  import { getFunctions, httpsCallable } from "firebase/functions";
  import Textfield from '@smui/textfield'
  import HelperText from '@smui/textfield/helper-text'
  import LinearProgress from '@smui/linear-progress'
  import TextAreaAutoResizing from '$lib/TextAreaAutoResizing.svelte'
  import RenderlessListenToStrokes from '$lib/RenderlessListenToStrokes.svelte'
  import RenderlessFetchStrokes from '$lib/RenderlessFetchStrokes.svelte'
  import RenderlessFetchComments from '$lib/RenderlessFetchComments.svelte'
  import RenderlessStopwatch from '$lib/RenderlessStopwatch.svelte'
  import DoodleVideoComments from '$lib/DoodleVideoComments.svelte'

  export let data
  let { classID, roomID } = data
  $: ({ classID, roomID } = data) // so it stays in sync when `data` changes

  let unsubRoomListener
  let roomDoc = {
    name: '', 
    blackboards: [] 
  }
  let incrementKeyToDestroyComponent = 1

  $: boardsDbPath = `classes/${classID}/blackboards/`
  $: roomsDbPath = `classes/${classID}/rooms/`
  $: roomRef = doc(getFirestore(), roomsDbPath + roomID)
  $: roomID, createRoomListener() // Yes, reactive statements DO trigger on initial assignment

  async function createRoomListener () {
    if (unsubRoomListener) unsubRoomListener() // assume it's not async
    unsubRoomListener = onSnapshot(roomRef, (snapshot) => {
      // a room can be deleted at any moment - when that happens, redirect
      if (!snapshot.exists()) {
        goto(`/${classID}/${classID}`)
      } else {
        roomDoc = { id: snapshot.id, ...snapshot.data() }
      }
    })
  }

  onDestroy(() => {
    unsubRoomListener()
  })

  // TODO: rename to reflect sequential nature of operations
  async function callManyFuncs (...funcs) {
    for (const func of funcs) {
      try {
        await func()
      } catch (error) {
        alert(error)
        return
      }
    }
  }

  function incrementViewMinutes (boardID, playbackSpeed) {
    const blackboardRef = doc(getFirestore(), boardsDbPath + boardID)
    updateDoc(blackboardRef, {
      viewMinutes: increment(0.1 * playbackSpeed)
    })
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

  async function handleWhatUserUploaded (imageFile, boardID) {
    const blackboardRef = doc(getFirestore(), boardsDbPath + boardID)
    if (!imageFile) return
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
                content: `${$user.name} asked on https://explain.mit.edu/${classID}/${roomID}: ${roomDoc.name}`, // assumes roomDoc.name is not ''
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

  let t = { promise: null, cancel: _ => void 0 }

  // Snippet from: https://stackoverflow.com/a/68228099/7812829
  // NOTE: this literally returns a function (you still have to call it)
  function debounce (task, ms) {
    return async (...args) => {
      try {
        t.cancel()
        t = deferred(ms)
        await t.promise
        await task(...args)
      }
      catch (_) { 
        /* prevent memory leak */ 
      }
    }
  }

  function deferred (ms) {
    let cancel, promise = new Promise((resolve, reject) => {
      cancel = reject
      setTimeout(resolve, ms)
    })
    return { promise, cancel }
  }

  async function debouncedUpdateBoardDescription ({ detail }, id) {
    const debouncedVersion = debounce(
      () => updateBoardDescription({ detail }, id),
      3000
    ) 
    debouncedVersion({ detail }, id)
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
      creatorUID: $user.uid || '',
      creatorName: $user.name || '',
      creatorPhoneNumber: $user.phoneNumber || '',
      date: new Date().toISOString(),
      audioDownloadURL: downloadURL,
      audioRefFullPath: audioRef.fullPath
    })
    updateRecordState(boardID, 'pre_record')

    // QUICKFIX
    // only reproducible on my iPad (yet old Explain works for some reason)
    // but this quickfix works well because iPad will correctly reload, whereas computers will display the prompt
    window.location.reload()
  }

  async function revertToBoard ({ id, audioRefFullPath }, deleteAllStrokesFromDb) {
    if (!confirm('Are you sure you want to delete this video?')) {
      return
    }

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
      setDoc(blackboardRef, { 
        recordState: 'pre_record' 
      }),
      updateDoc(roomRef, {
        blackboards: arrayUnion(newID)
      })
    ]);  
    // await tick()
    // this.scrollToThisBoard(newID)
  }

  // A blackboard does not have an audioDownloadURL,
  // otherwise it's a video
  function deleteBoard (boardID, deleteAllStrokesFromDb) {
    if (roomDoc.blackboards.length === 1) {
      alert("Can't delete the last blackboard")
      return
    }

    // 1. delete blackboard reference from parent
    updateDoc(roomRef, {
      blackboards: arrayRemove(boardID)
    })
    
    // 2. delete strokes
    deleteAllStrokesFromDb()
    
    // 3. delete board itself
    deleteDoc(
      doc(getFirestore(), boardsDbPath + boardID)
    )
  }

  function eureka (boardDoc) {
    const boardRef = doc(getFirestore(), boardsDbPath + boardDoc.id)
    if (boardDoc.eurekaUIDs instanceof Array) {
      if (boardDoc.eurekaUIDs.includes($user.uid)) {
        updateDoc(boardRef, {
          eurekaUIDs: arrayRemove($user.uid)
        })
        return 
      }
    } 
    updateDoc(boardRef, {
      eurekaUIDs: arrayUnion($user.uid)
    })
  }

  function dragover_handler (e) {
    e.preventDefault()

  }
  
  async function drop_handler (e, j) {
    e.preventDefault()
    const data = e.dataTransfer.getData('text/plain')
    const [i, boardID] = data.split(':')

    // ACTUALLY UPDATE
    console.log('i, j =', i, j)
    const blackboardsCopy = [...roomDoc.blackboards]
    const draggedBoardID = blackboardsCopy[i] // I know...turns out I only needed `i`, no need for `boardID`
    // remove 
    const removeOneElement = 1
    blackboardsCopy.splice(i, removeOneElement)

    console.log('after remove =', blackboardsCopy)

    // insert
    const removeNoElement = 0
    blackboardsCopy.splice(j, removeNoElement, draggedBoardID)  
    console.log('after insert =', blackboardsCopy)
      
    // make an update operation
    updateDoc(roomRef, {
      blackboards: blackboardsCopy
    })
  }

  // TO-DO: this is a copy-paste, do DRY 
  function dragstart_handler (e, boardID, originalIndex) {
    e.dataTransfer.setData("text/plain", originalIndex + ':' + boardID)
    e.dataTransfer.dropEffect = 'move'
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

