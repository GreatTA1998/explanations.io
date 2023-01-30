{#if boardDoc}
  <RenderlessListenToStrokes dbPath={boardsDbPath + boardID}
    let:listenToStrokes={listenToStrokes} 
    let:strokesArray={strokesArray}
    let:handleNewlyDrawnStroke={handleNewlyDrawnStroke}
    let:deleteAllStrokesFromDb={deleteAllStrokesFromDb}
  >
    <div use:lazyCallable={listenToStrokes} style={`width: ${canvasWidth}px; height: ${canvasHeight + 40}px; position: relative`}>
      {#if boardDoc.recordState === 'post_record'}
        <LinearProgress indeterminate/>
      {:else}
        <RenderlessStopwatch 
          let:currentTime={currentTime} 
          let:startStopwatch={startStopwatch} 
          let:stopStopwatch={stopStopwatch}
        >
          <!-- NOTE: `originalIndex = 0` is a quick-fix -->
          <Blackboard 
            {canvasWidth}
            {canvasHeight}
            {strokesArray} 
            {currentTime} 
            backgroundImageDownloadURL={boardDoc.backgroundImageDownloadURL}
            recordState={boardDoc.recordState}
            {boardID}
            originalIndex={0}
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
              
              {#if hasFullscreenButton}
                <span 
                  on:click={() => $drawerWidth === 1 ? drawerWidth.set(260) : drawerWidth.set(1)} 
                  class="material-icons" style="color: white; font-size: 2.2rem; margin-right: 8px"
                >
                  fullscreen
                </span>
              {/if}
            </RenderlessAudioRecorder>
          </Blackboard>
        </RenderlessStopwatch>
      {/if}
    </div>
  </RenderlessListenToStrokes>
{/if}

<script>
  import RenderlessListenToStrokes from './RenderlessListenToStrokes.svelte'
  import RenderlessListenToBoard from './RenderlessListenToBoard.svelte'
  import RenderlessAudioRecorder from './RenderlessAudioRecorder.svelte'
  import RenderlessStopwatch from './RenderlessStopwatch.svelte';
  import LinearProgress from '@smui/linear-progress'
  import Blackboard from './Blackboard.svelte'
  import { lazyCallable } from '../helpers/actions.js'
  import { willPreventPageLeave, browserTabID, drawerWidth, user } from '../store.js';
  import { doc, getFirestore, updateDoc, deleteField, onSnapshot, setDoc, arrayUnion, collection, query, where, getDocs, deleteDoc, arrayRemove, increment, writeBatch, getDoc } from 'firebase/firestore';
  import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject, } from 'firebase/storage'
  import { getRandomID } from '../helpers/utility.js'
  import { createEventDispatcher } from 'svelte';

  export let boardDoc
  export let boardID 
  export let boardsDbPath
  export let canvasWidth 
  export let canvasHeight
  export let hasFullscreenButton = true

  const dispatch = createEventDispatcher()

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

  function updateRecordState (boardID, newRecordState) {
    return new Promise(async resolve => {
      const blackboardRef = doc(getFirestore(), boardsDbPath + boardID)
      await updateDoc(blackboardRef, {
        recordState: newRecordState
      })
      resolve()
    })
  }

  function updateRecorderBrowserTabID (boardID) {
    const blackboardRef = doc(getFirestore(), boardsDbPath + boardID)
    updateDoc(blackboardRef, {
      recorderBrowserTabID: $browserTabID
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

    await Promise.all([
      updateDoc(blackboardRef, {
        creatorUID: $user.uid || '',
        creatorName: $user.name || '',
        creatorPhoneNumber: $user.phoneNumber || '',
        date: new Date().toISOString(),
        audioDownloadURL: downloadURL,
        audioRefFullPath: audioRef.fullPath
      }),
      updateRecordState(boardID, 'pre_record')
    ])

    dispatch('video-uploaded')

    // QUICKFIX
    // only reproducible on my iPad (yet old Explain works for some reason)
    // but this quickfix works well because iPad will correctly reload, whereas computers will display the prompt
    window.location.reload()
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
</script>