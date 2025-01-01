<!-- NOTE: the record & delete functionality is broken
  but it's unimportant so long as legacy blackboards are viewable and preserved
-->

<script>
  import { deleteStrokesFromSlide } from '/src/helpers/unifiedDeleteAPI.js'
  import { blackboardWidth, browserTabID, user, willPreventPageLeave } from '/src/store.js'
  import { lazyCallable } from '/src/helpers/actions.js'
  import { getRandomID, displayDate, roundedToFixed } from '/src/helpers/utility.js'
  import { getFirestoreDoc, updateFirestoreDoc, getFirestoreQuery, setFirestoreDoc } from '/src/helpers/crud.js'
  import RenderlessAudioRecorder from '$lib/Blackboard/RenderlessAudioRecorder.svelte'
  import Blackboard from '$lib/Blackboard/CoreDrawing.svelte'
  import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject, } from 'firebase/storage'
  import { doc, getFirestore, updateDoc, deleteField, onSnapshot, setDoc, arrayUnion, collection, query, where, getDocs, deleteDoc, arrayRemove, increment, writeBatch, getDoc } from 'firebase/firestore';
  import LinearProgress from '@smui/linear-progress'
  import ListenToStrokes from '$lib/Renderless/ListenToStrokes.svelte'
  import { handleVideoUploadEmailNotifications } from '/src/helpers/everythingElse.js'

  export let roomDoc
  export let boardDoc

  let isSignInPopupOpen = false

  $: roomRef = doc(getFirestore(), roomDoc.path)

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

  function updateRecorderBrowserTabID (boardID) {
    const blackboardRef = doc(getFirestore(), boardDoc.path)
    updateDoc(blackboardRef, {
      recorderBrowserTabID: $browserTabID
    })
  }

  function updateRecordState (boardID, newRecordState) {
    const blackboardRef = doc(getFirestore(), boardDoc.path)
    updateDoc(blackboardRef, {
      recordState: newRecordState
    })
  }

  async function handleWhatUserUploaded (imageFile, boardID) {
    const blackboardRef = doc(getFirestore(), boardDoc.path)
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
    const blackboardRef = doc(getFirestore(), boardDoc.path)
    updateDoc(blackboardRef, {
      backgroundImageDownloadURL: deleteField() // Svelte doesn't react to change to empty string, for some reason
    })
  }
  //// END of background image logic

  async function uploadVideo (audioBlob, strokesArray, boardID) {
    const db = getFirestore()

    // QUICK-FIX for concurrent drawings with no timestamp 
    // TODO: fails for edge case when all starting strokes are consecutively from other person
    function hasValidTimestamp (stroke) {
      // strokes from other people have an artificial stroke duration of 0.5 added by `Renderless/ListenToStrokes.svelte`
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
        const dbPath = boardDoc.path
        const strokesRef = doc(db, `${dbPath}/strokes/${stroke.id}`)
        updateDoc(strokesRef, {
          startTime: stroke.startTime,
          endTime: stroke.endTime
        })
      }
    }

    // update metadata for tutor if it exists 
    let tutorDoc
    const q = query(
      collection(db, membersDbPath),
      where('uid', '==', $user.uid)
    )
    // base the member profile UID on the actual UID, so you don't need to do all these queries
    const classDocUpdateObj = {} 

    const snap = await getDocs(q) 
    if (!snap.empty) {
      // find the specific tutor doc
      snap.docs.forEach(doc => {
        tutorDoc = { id: doc.id, path: doc.ref.path, ...doc.data() }
      })
      // that means it's the member's first server video
      if (!tutorDoc.numOfVideos) {
        classDocUpdateObj.numOfCreators = increment(1)
      }
      updateFirestoreDoc(membersDbPath + tutorDoc.id, {
        numOfVideos: increment(1)
      })
    }
    classDocUpdateObj.numOfVideos = increment(1) 
    updateFirestoreDoc(`classes/${classID}`, classDocUpdateObj)

    // upload the audio file
    const storage = getStorage()
    const audioRef = ref(storage, `audio/${getRandomID()}`)
    await uploadBytes(audioRef, audioBlob)
    const downloadURL = await getDownloadURL(audioRef)

    const blackboardRef = doc(getFirestore(), boardDoc.path)
    await updateDoc(blackboardRef, {
      creatorUID: $user.uid || '',
      creatorName: $user.name || '',
      creatorPhoneNumber: $user.phoneNumber || '',
      date: new Date().toISOString(),
      audioDownloadURL: downloadURL,
      audioRefFullPath: audioRef.fullPath
    })
    updateRecordState(boardID, 'pre_record')

    await handleVideoUploadEmailNotifications(classID, roomDoc)

    // QUICKFIX
    // only reproducible on my iPad (yet old Explain works for some reason)
    // but this quickfix works well because iPad will correctly reload, whereas computers will display the prompt
    window.location.reload()
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

  // A blackboard does not have an audioDownloadURL,
  // otherwise it's a video
  function deleteBoard (boardID, deleteAllStrokesFromDb) {
    // 1. delete blackboard reference from parent
    // NOTE: this is necessary so it works whether it's used by Question or Room
    updateDoc(roomRef, {
      blackboards: arrayRemove(boardID),
      blackboardIDs: arrayRemove(boardID)
    })
    
    // 2. delete strokes
    deleteAllStrokesFromDb()
    
    // 3. delete board itself
    deleteDoc(
      doc(getFirestore(), boardDoc.path)
    )
  }
</script>

<ListenToStrokes dbPath={boardDoc.path}
  let:listenToStrokes={listenToStrokes} 
  let:strokesArray={strokesArray}
  let:handleNewlyDrawnStroke={handleNewlyDrawnStroke}
>
  <div use:lazyCallable={listenToStrokes} style={`width: ${$blackboardWidth}px; height: ${$blackboardWidth * 3/4}px; position: relative`}>
    {#if boardDoc.recordState === 'post_record'}
      <LinearProgress indeterminate/>
    {:else}
      <!-- 
         NOTE: delete opereations no longer work, but are probably never needed
      -->
      <Blackboard 
        {strokesArray} 
        backgroundImageDownloadURL={boardDoc.backgroundImageDownloadURL}
        recordState={boardDoc.recordState}
        boardID={boardDoc.id}
        canvasWidth={$blackboardWidth}
        canvasHeight={$blackboardWidth * 3/4}
        on:background-upload={(e) => handleWhatUserUploaded(e.detail.imageFile, boardDoc.id)}
        on:background-reset={() => resetBackgroundImage(boardDoc.id)}
        on:stroke-drawn={(e) => handleNewlyDrawnStroke(e.detail.newStroke)}
        on:board-wipe={() => deleteStrokesFromSlide({ strokesArray })}
        on:board-delete={() => deleteBoard(
          boardDoc.id, 
          () => deleteStrokesFromSlide({ strokesArray })
        )}
        let:currentTime={currentTime} 
        let:startStopwatch={startStopwatch} 
        let:stopStopwatch={stopStopwatch}
      >
        <RenderlessAudioRecorder
          let:startRecording={startRecording} 
          let:stopRecording={stopRecording}
          on:record-end={(e) => uploadVideo(e.detail.audioBlob, strokesArray, boardDoc.id)}
        >
        <!-- 
          if an recording is active (rather than an interrupted session that isn't actually recording,
          currentTime will be incrementing 
        -->
        {#if boardDoc.recordState === 'pre_record' || currentTime === 0}
          {#if !!!$user.uid}
            <span on:click={() => isSignInPopupOpen = true} on:keydown class="my-record-button">
              sign in & record
            </span>
          {:else}
            <span 
              on:click={() => callManyFuncs(
                startRecording, 
                startStopwatch,
                () => updateRecordState(boardDoc.id, 'mid_record'),
                () => updateRecorderBrowserTabID(boardDoc.id),
                () => willPreventPageLeave.set(true)
              )}
              on:keydown
              class="my-record-button"
            >
              record
            </span>
          {/if}
          <!-- color was `cyan`, icon was `album` -->

        {:else if boardDoc.recordState === 'mid_record'}
          <span 
            on:click={() => callManyFuncs(
              stopRecording,
              stopStopwatch,
              () => updateRecordState(boardDoc.id, 'post_record'),
              () => willPreventPageLeave.set(false)
            )} on:keydown
            class:unclickable={$browserTabID !== boardDoc.recorderBrowserTabID}
            class="material-icons" 
            style="font-size: 2.5rem; color: cyan; margin-left: 22px; margin-right: 26px"
          >
            stop_circle
          </span>
        {/if}

        </RenderlessAudioRecorder>
      </Blackboard>
    {/if}
  </div>
</ListenToStrokes>

<style>
  .unclickable {
    pointer-events: none;
  }

  .my-record-button {
    font-size: 1.2rem; 
    color: cyan; 
    margin-left: 28px; 
    margin-right: 26px; 
    font-family: sans-serif; 
    border: 1px solid cyan; 
    padding-top: 2px; 
    padding-bottom: 4px;
    padding-left: 10px;
    padding-right: 9px; 
    box-sizing: border-box;
    border-radius: 1px;
    cursor: pointer;
  }
</style>