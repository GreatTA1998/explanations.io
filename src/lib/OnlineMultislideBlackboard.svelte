<div style="display: flex">
  <div id="multislide-record-button-wrapper-{boardDoc.id}">
 
  </div>
  
  <div style="margin-left: 20px;"></div>

  {#each boardDoc.slideIDs as slideID, i}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div on:click={() => changeToSlideIdx(i)}
      class:highlighted-glow={idxOfFocusedSlide === i}
      class:lowlighted-glow={idxOfFocusedSlide !== i}
      style="width: 80px; height: 50px; display: flex; align-items: center; justify-content: center; box-sizing: border-box;"
    >
      Slide { i + 1}
    </div>
  {/each}
</div>

<div style="margin-bottom: 12px;"></div>

{#each boardDoc.slideIDs as slideID, i}
  <RenderlessListenToStrokes 
    dbPath="/classes/{classID}/blackboards/{boardDoc.id}/slides/{slideID}"
    let:listenToStrokes={listenToStrokes} 
    let:strokesArray={strokesArray}
    let:handleNewlyDrawnStroke={handleNewlyDrawnStroke}
    let:deleteAllStrokesFromDb={deleteAllStrokesFromDb}
  >
    <div 
      use:lazyCallable={listenToStrokes} 
      style="
        display: {idxOfFocusedSlide === i ? '' : 'none'};
        width: {canvasWidth}px; height: {canvasHeight}px; 
        position: relative; 
        border: 1px solid purple;
      "
    >
    <!-- isOffline is a quickfix for functionalities that don't work such as uploading backgrounds -->
      <Blackboard
        isOfflineDemo
        {strokesArray}
        {canvasWidth}
        {canvasHeight}
        currentTimeOverride={currentTime}
        on:stroke-drawn={(e) => handleNewlyDrawnStroke(e.detail.newStroke)}
        on:board-wipe={deleteAllStrokesFromDb}
        on:background-upload={(e) => handleWhatUserUploaded(e.detail.imageFile, slideID)}
        on:background-reset={() => resetBackgroundImage(slideID)}
      >
      </Blackboard>
    </div>
  </RenderlessListenToStrokes>
{/each}

<!-- on:record-end={(e) => saveVideo(e.detail.audioBlob)} -->
<RenderlessAudioRecorder
  let:startRecording={startRecording} 
  let:stopRecording={stopRecording}
  on:record-end={(e) => saveVideo(e.detail.audioBlob)}
>
  <div use:portal={'multislide-record-button-wrapper-' + boardDoc.id}>
    {#if !isRecording}
      {#if !!!$user.uid}
        <span on:click={() => isSignInPopupOpen = true} class="my-record-button">
          sign in & record
        </span>

        {#if isSignInPopupOpen}
          <PopupSignInWithOptions on:popup-close={() => isSignInPopupOpen = false}/>
        {/if}
      {:else}
        <div 
          on:click={() => callFuncsInSequence(
            startRecording,
            startStopwatch,
            () => isRecording = true,
            () => {
              // user doesn't necessarily start from slide 0,so ensure initial state is correct
              timingOfSlideChanges.push({
                toIdx: idxOfFocusedSlide,
                timing: 0
              })
            }
          )}
          class="offline-record-button" style="border-radius: 24px;"
        >
          Record
        </div>
      {/if}
    {:else}
      <!-- () => dispatch('timing-of-slide-changes-ready', { timingOfSlideChanges }) -->
      <button on:click={() => callFuncsInSequence(
        stopRecording,
        stopStopwatch,
        () => willPreventPageLeave.set(true)
      )}
        style="height: 50px; font-size: 1.1em; border-radius: 25px;"
        class="offline-record-button"
      >
        Finish recording
      </button>
    {/if}
  </div>
</RenderlessAudioRecorder>

<script>
  import PopupSignInWithOptions from '$lib/PopupSignInWithOptions.svelte';
  import Blackboard from '$lib/Blackboard.svelte'
  import RenderlessListenToStrokes from '$lib/RenderlessListenToStrokes.svelte'
  import RenderlessAudioRecorder from '$lib/RenderlessAudioRecorder.svelte';
  import { portal, lazyCallable } from '/src/helpers/actions.js'
  import { roundedToFixed, getRandomID } from "/src/helpers/utility.js"
  import { updateFirestoreDoc, setFirestoreDoc, getFirestoreDoc } from '/src/helpers/crud.js'
  import { user } from '/src/store.js'
  import { getFirestore, query, getDocs, collection, where, increment, doc, updateDoc } from 'firebase/firestore'
  import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage'
  import { createEventDispatcher, onMount } from 'svelte'
  import ReusableButton from '$lib/ReusableButton.svelte'
  import { willPreventPageLeave } from '/src/store'
  import { mixpanelLibrary } from '/src/mixpanel.js'

  export let canvasWidth
  export let canvasHeight
  export let boardDoc // boardDoc.slideIDs
  export let classID

  let isSignInPopupOpen = false

  const dispatch = createEventDispatcher()
  const boardPath = `classes/${classID}/blackboards/${boardDoc.id}/`

  let isRecording = false

  const db = getFirestore()

  // timer-related variables
  let currentTime = 0
  const tickSize = 100 // milliseconds
  let startTimestamp = null
  let nextTimeoutID = null
  let etaOfNextTick = null
  
  let idxOfFocusedSlide = 0 

  const timingOfSlideChanges = []
  // difference, LOCK the blackboard when you're recording, so other people's strokes don't intefere
  // if they already drawn some strokes, it doesn't matter because the timestamp = 0 is actually accurate
  onMount(async () => {
    document.addEventListener('keydown', (e) => {
      switch (e.key) {
        case "ArrowLeft":
          changeToSlideIdx(Math.max(0, idxOfFocusedSlide - 1))
          break
        case "ArrowRight":
          changeToSlideIdx(Math.min(idxOfFocusedSlide + 1, 2))
      }
    })
  })

  function changeToSlideIdx (newSlideIdx) {
    idxOfFocusedSlide = newSlideIdx 
    if (currentTime > 0) {
      timingOfSlideChanges.push({
        toIdx: idxOfFocusedSlide,
        timing: currentTime
      })
    }
  }

  async function saveVideo (audioBlob) {
    // JOB #1: upload the audio blob
    let downloadURL 
    const storage = getStorage()
    const audioRef = ref(storage, `audio/${getRandomID()}`)
    const audioUploadJob = uploadBytes(audioRef, audioBlob).then(async () => {
      downloadURL = await getDownloadURL(audioRef)
      return downloadURL
    })

    // JOB #2: update metadata of dependent firestore docs (note "tutor" is a legacy name)
    let tutorDoc
    const q = query(
      collection(db, `classes/${classID}/members`),
      where('uid', '==', $user.uid)
    )
    const otherDocsMetadataUpdateJob = getDocs(q).then(snap => {
      if (!snap.empty) {
      snap.docs.forEach(doc => {
        tutorDoc = { id: doc.id, path: doc.ref.path, ...doc.data() }
      })
      updateFirestoreDoc(`classes/${classID}/members/${tutorDoc.id}`, {
        numOfVideos: increment(1)
      })
      }
      updateFirestoreDoc(`classes/${classID}`, {
        numOfVideos: increment(1)
      })
    })

    await Promise.all([
      audioUploadJob,
      otherDocsMetadataUpdateJob
    ])

    // FINALLY: update metadata of the multislide blackboard doc itself
    updateFirestoreDoc(boardPath, {
      creatorUID: $user.uid || '',
      creatorName: $user.name || '',
      creatorPhoneNumber: $user.phoneNumber || '',
      date: new Date().toISOString(),
      audioDownloadURL: downloadURL,
      audioRefFullPath: audioRef.fullPath,
      timingOfSlideChanges,
      isPaid: false
    })
  }

  async function callFuncsInSequence (...funcs) {
    for (const func of funcs) {
      try {
        await func()
      } catch (error) {
        alert(error)
        return
      }
    }
  }

  function uploadVideoToCloud ({ audioBlob }) {
    console.log('in future, will upload audioBlob =', audioBlob)
  }

  function handleNewlyDrawnStroke (e, slideID) {
    console.log('e =', e)
    console.log('slideID =', slideID)
  }

  // Timer that doesn't slowly drift late and get out of sync with visuals
  // @see based on https://stackoverflow.com/a/29972322/7812829
  // how the self-adjusting timer works 
  //    - setInterval is at best, on time, but usually, late
  //    - yes, the self-adjusting tick function will always increase time by 1 (even if 1.6 seconds has passed because it's again, late)
  //    - ...but the 1 vs 1.6 error will be compensated next tick, because tick() will call itself after 0.4 seconds (it but it's constantly catching up) to achieve 2 vs 2
  //    - if the tick function is super late i.e. 3 seconds passed by, it'll just call itself with setTimeout(0) 2 more times immediately
  //    - therefore the maximum error is the infimum of the tick size. Get the tick size to be 0.1 second so the maximum error is <0.1
  function startStopwatch () {
    startTimestamp = Date.now()
    etaOfNextTick = startTimestamp + tickSize
    nextTimeoutID = setTimeout(
      step, 
      tickSize
    )
  }

  function step () {
    const delay = Date.now() - etaOfNextTick; // how late was the setTimeout 
    if (delay > tickSize) {
      console.log('setTimeout is lagging greatly')
      // something really bad happened. Maybe the browser (tab) was inactive? possibly special handling to avoid futile "catch up" run
    }
    etaOfNextTick += tickSize

    const millisecondsInSecond = 1000
    const nearestDecimalPoint = 1
    currentTime = Number(roundedToFixed(
      (etaOfNextTick - startTimestamp) / millisecondsInSecond,
      nearestDecimalPoint
    ))

    nextTimeoutID = setTimeout(
      step, 
      Math.max(0, tickSize - delay)
    )
  }

  function stopStopwatch () {
    startTimestamp = null 
    etaOfNextTick = null
    currentTime = 0
    clearTimeout(nextTimeoutID)
    nextTimeoutID = ''
  }
  // END OF TIMER-RELATED CODE

  // FILE UPLOAD RELATED CODE
  async function handleWhatUserUploaded (imageFile, slideID) {
    const slideRef = doc(getFirestore(), boardPath + `slides/${slideID}`)
    if (!imageFile) return
    if (imageFile.type.split("/")[0] === 'image') {
      // rewrite
      const storage = getStorage()
      const imageRef = ref(storage, `images/${getRandomID()}`)
      await uploadBytes(imageRef, imageFile)
      const downloadURL = await getDownloadURL(imageRef)
      updateDoc(slideRef, {
        backgroundImageDownloadURL: downloadURL
      })
    } else {
      alert("Error: only images can be used")
    }
  }

  function resetBackgroundImage (boardID) {
    const ref = doc(getFirestore(), boardPath + `slides/${slideID}`)
    updateDoc(ref, {
      backgroundImageDownloadURL: deleteField() // Svelte doesn't react to change to empty string, for some reason
    })
  }

  // NOTE: we ignore the concurrent drawings with timestamp bug in this implementation
  async function uploadVideo (audioBlob, boardID) {
    const db = getFirestore()

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

    const blackboardRef = doc(getFirestore(), boardPath)
    await updateDoc(blackboardRef, {
      creatorUID: $user.uid || '',
      creatorName: $user.name || '',
      creatorPhoneNumber: $user.phoneNumber || '',
      date: new Date().toISOString(),
      audioDownloadURL: downloadURL,
      audioRefFullPath: audioRef.fullPath
    })
    updateRecordState(boardID, 'pre_record')

    mixpanelLibrary.track('Video created')

    // QUICKFIX
    // only reproducible on my iPad (yet old Explain works for some reason)
    // but this quickfix works well because iPad will correctly reload, whereas computers will display the prompt
    window.location.reload()
  }

  function updateRecordState (slideID, newRecordState) {
    const blackboardRef = doc(getFirestore(), boardPath + slideID)
    updateDoc(blackboardRef, {
      recordState: newRecordState
    })
  }
</script>

<style>
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

  .highlighted-glow {
    background-color: hsl(0,0%,0%, 0.80);
    color: white;
    font-weight: 500;
    border-bottom: 4px solid orange;
  }

  .lowlighted-glow {
    font-weight: 400;
    border-bottom: 4px solid rgb(179, 179, 179);
  }

  .offline-record-button {
    color: cyan; 
    background-color: hsl(0,0%,0%, 0.80); 
    border: 2px solid cyan; 
    height: 48px; display: flex; align-items: center; padding-left: 16px; padding-right: 16px;
    font-size: 24px;
  }
</style>