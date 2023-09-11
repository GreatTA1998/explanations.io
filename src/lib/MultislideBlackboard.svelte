<div bind:this={MultiboardContainer} style="border: 2px solid red;">
  <div id="multislide-record-button-wrapper">
  
  </div>

  <div style="display: flex; justify-content: space-evenly;">
    {#each slideIDs as slide, i}
      <RenderlessListenToStrokes dbPath="/classes/{classID}/powerpoints/{powerpointID}/slides/{slideIDs[i]}"
        let:listenToStrokes={listenToStrokes} 
        let:strokesArray={strokesArray}
        let:handleNewlyDrawnStroke={handleNewlyDrawnStroke}
        let:deleteAllStrokesFromDb={deleteAllStrokesFromDb}
      >
        <Blackboard
          strokesArray={strokesArray}
          canvasWidth={600}
          canvasHeight={300}
          currentTimeOverride={currentTime}
          on:intersect={listenToStrokes}
          on:stroke-drawn={(e) => handleNewlyDrawnStroke(e.detail.newStroke)}
          on:board-wipe={deleteAllStrokesFromDb}
        >
        </Blackboard>
      </RenderlessListenToStrokes>
    {/each}
  </div>

  <RenderlessAudioRecorder
    let:startRecording={startRecording} 
    let:stopRecording={stopRecording}
    on:record-end={(e) => saveVideo(e.detail.audioBlob)}
  >
    <div use:portal={'multislide-record-button-wrapper'}>
      <button on:click={() => callFuncsInSequence(
        lockMultislideBlackboard,
        startRecording,
        startStopwatch
      )}>
        Start multislide recording
      </button>

      <button on:click={() => callFuncsInSequence(
        stopRecording,
        stopStopwatch,
        unlockMultislideBlackboard,
      )}>
        Stop multislide recording
      </button>
    </div>
  </RenderlessAudioRecorder>
</div>

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
  import { onMount } from 'svelte'

  const classID = 't5ZxK9RQcWBCHBeKFhcc'
  const powerpointID = 'QWERTYUIOP'

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
  let MultiboardContainer
  let idxOfFocusedSlide = 0 


  // difference, LOCK the blackboard when you're recording, so other people's strokes don't intefere
  // if they already drawn some strokes, it doesn't matter because the timestamp = 0 is actually accurate
  onMount(async () => {
    const powerpoint = await getFirestoreDoc(`classes/${classID}/powerpoints/${powerpointID}`)
    console.log('powerpoint =', powerpoint)

    // setFirestoreDoc(`classes/${classID}/powerpoints/${powerpointID}`, {
    //   name: 'For testing purposes'
    // })
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
    currentTime = roundedToFixed(
      (etaOfNextTick - startTimestamp) / millisecondsInSecond,
      nearestDecimalPoint
    )

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
