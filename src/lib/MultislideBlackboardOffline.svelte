
<div style="display: flex">
  <div id="multislide-record-button-wrapper">
 
  </div>
  
  <div style="margin-left: 20px;"></div>

  {#each [0, 1, 2] as i}
    <div on:click={() => changeToSlideIdx(i)}
      class:highlighted-glow={idxOfFocusedSlide === i}
      style="width: 80px; height: 50px; border: 1px solid black; display: flex; align-items: center; justify-content: center; box-sizing: border-box;"
    >
      Slide { i + 1}
    </div>
  {/each}
</div>

<!-- <div style="display: flex; justify-content: space-evenly;"> -->
  <div style="display: {idxOfFocusedSlide === 0 ? '' : 'none'}">
    <Blackboard
      strokesArray={strokesArray1}
      {canvasWidth}
      {canvasHeight}
      currentTimeOverride={currentTime}
      on:stroke-drawn={(e) => dispatch(`stroke-drawn1`, { newStroke: e.detail.newStroke })}
      on:board-wipe={() => dispatch(`board-wipe-1`)}
    >
    </Blackboard>
  </div>

  <div style="display: {idxOfFocusedSlide === 1 ? '' : 'none'}">
    <Blackboard
      strokesArray={strokesArray2}
      {canvasWidth}
      {canvasHeight}
      currentTimeOverride={currentTime}
      on:stroke-drawn={(e) => dispatch(`stroke-drawn2`, { newStroke: e.detail.newStroke })}
      on:board-wipe={() => dispatch(`board-wipe-2`)}
    >
    </Blackboard>
  </div>

  <div style="display: {idxOfFocusedSlide === 2 ? '' : 'none'}">
    <Blackboard
      strokesArray={strokesArray3}
      {canvasWidth}
      {canvasHeight}
      currentTimeOverride={currentTime}
      on:stroke-drawn={(e) => dispatch(`stroke-drawn3`, { newStroke: e.detail.newStroke })}
      on:board-wipe={() => dispatch(`board-wipe-3`)}
    >
    </Blackboard>
  </div>
<!-- </div> -->

<!-- on:record-end={(e) => saveVideo(e.detail.audioBlob)} -->
<RenderlessAudioRecorder
  let:startRecording={startRecording} 
  let:stopRecording={stopRecording}
  on:record-end={(e) => dispatch('recording-finished', { audioBlob: e.detail.audioBlob })}
>
  <div use:portal={'multislide-record-button-wrapper'}>
    {#if !isRecording}
      <button on:click={() => callFuncsInSequence(
        lockMultislideBlackboard,
        startRecording,
        startStopwatch,
        () => isRecording = true
      )}
        style="height: 50px; font-size: 1.1em"
      >
        Record local playground video
      </button>
    {:else}
      <button on:click={() => callFuncsInSequence(
        () => dispatch('timing-of-slide-changes-ready', { timingOfSlideChanges }),
        stopRecording,
        stopStopwatch,
        unlockMultislideBlackboard
      )}
        style="height: 50px; font-size: 1.1em"
      >
        Finish recording
      </button>
    {/if}
  </div>
</RenderlessAudioRecorder>

<script>
  import Blackboard from '$lib/Blackboard.svelte'
  import RenderlessListenToStrokes from '$lib/RenderlessListenToStrokes.svelte'
  import RenderlessAudioRecorder from '$lib/RenderlessAudioRecorder.svelte';
  import { portal } from '/src/helpers/actions.js'
  import { roundedToFixed, getRandomID } from "/src/helpers/utility.js"
  import { updateFirestoreDoc, setFirestoreDoc, getFirestoreDoc } from '/src/helpers/crud.js'
  import { user } from '/src/store.js'
  import { getFirestore, query, getDocs, collection, where, increment } from 'firebase/firestore'
  import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage'
  import { createEventDispatcher, onMount } from 'svelte'

  export let strokesArray1
  export let strokesArray2
  export let strokesArray3
  export let canvasWidth
  export let canvasHeight

  const dispatch = createEventDispatcher()

  const classID = 't5ZxK9RQcWBCHBeKFhcc'
  const powerpointID = 'QWERTYUIOP'

  let isRecording = false

  let slideIDs = [
    '123456789',
    'abcdefghi',
    'ABCDEFGHI'
  ]

  const db = getFirestore()

  // timer-related variables
  let currentTime = 0
  const tickSize = 100 // milliseconds
  let startTimestamp = null
  let nextTimeoutID = null
  let etaOfNextTick = null
  
  let idxOfFocusedSlide = 0 

  function changeToSlideIdx (newSlideIdx) {
    idxOfFocusedSlide = newSlideIdx 
    if (currentTime > 0) {
      timingOfSlideChanges.push({
        toIdx: idxOfFocusedSlide,
        timing: currentTime
      })
    }
  }

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

  async function saveVideo (audioBlob) {
    console.log('check parameters =', audioBlob)

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
      collection(db, `classes/${classID}/tutors`),
      where('uid', '==', $user.uid)
    )
    const otherDocsMetadataUpdateJob = getDocs(q).then(snap => {
      if (!snap.empty) {
      snap.docs.forEach(doc => {
        tutorDoc = { id: doc.id, path: doc.ref.path, ...doc.data() }
      })
      updateFirestoreDoc(`classes/${classID}/tutors/${tutorDoc.id}`, {
        numOfVideos: increment(1)
      })
      }
      updateFirestoreDoc(`classes/${classID}`, {
        numOfVideos: increment(1)
      })
    })

    console.log('trying to resolve promise.all')
    await Promise.all([
      audioUploadJob,
      otherDocsMetadataUpdateJob
    ])

    console.log('now updating the powerpoint itself')

    // FINALLY: update metadata of the multislide blackboard doc itself
    updateFirestoreDoc(`classes/${classID}/powerpoints/${powerpointID}`, {
      creatorUID: $user.uid || '',
      creatorName: $user.name || '',
      creatorPhoneNumber: $user.phoneNumber || '',
      date: new Date().toISOString(),
      audioDownloadURL: downloadURL,
      audioRefFullPath: audioRef.fullPath
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

  function lockMultislideBlackboard (id) {
    return new Promise(async (resolve) => {
      const path = `/classes/${classID}/powerpoints/${powerpointID}`
      await updateFirestoreDoc(path, {
        uidOfCurrentRecorder: $user.uid
      })
      resolve()
    })
  }

  function unlockMultislideBlackboard (id) {
    return new Promise(async (resolve) => {
      const path = `/classes/${classID}/powerpoints/${powerpointID}`
      await updateFirestoreDoc(path, {
        uidOfCurrentRecorder: ''
      })
      resolve()
    })
  }

  function startMultislideRecording () {
    startAudioRecord()
    startStopwatch()
  }

  function stopMultislideRecording () {
    stopAudioRecord(uploadVideoToCloud)
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
</script>

<style>
  .highlighted-glow {
    background-color: orange;
    color: white;
  }
</style>