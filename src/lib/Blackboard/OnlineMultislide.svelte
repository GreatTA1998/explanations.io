<div style="display: flex; align-items: end; width: {canvasWidth}px; column-gap: 20px;">
  <div id="multislide-record-button-wrapper-{boardDoc.id}">
    <!-- Elements portal here -->
  </div>
  
  <MultiboardSlideChanger on:click={(e) => changeToSlideIdx(e.detail.newIdx)}
    on:slide-create={createNewSlide}
    slideIDs={boardDoc.slideIDs}
    {idxOfFocusedSlide}
    canCreateNewSlide
  />

  <button on:click={() => {
      if (confirm('Are you sure you want to delete this multiboard? This is irreversible.')) {
        deleteMultislideBlackboard({ boardDoc, roomDoc })
      }
    }}
    style="margin-left: auto; margin-right: 8px; cursor: pointer;"
  >
    Delete multiboard
  </button>
</div>

<div style="margin-bottom: 12px;"></div>

{#each boardDoc.slideIDs as slideID, i}
  <ListenToDoc docPath={`classes/${classID}/blackboards/${boardDoc.id}/slides/${slideID}`}
    let:theDoc={theDoc}
  >
    <ListenToStrokes 
      dbPath="/classes/{classID}/blackboards/{boardDoc.id}/slides/{slideID}"
      autoListen
      let:strokesArray={strokesArray}
      let:handleNewlyDrawnStroke={handleNewlyDrawnStroke}
    >
      <div 
        style="
          display: {idxOfFocusedSlide === i ? '' : 'none'};
          width: {canvasWidth}px; height: {canvasHeight}px; 
          position: relative;
        "
      >
        {#if strokesArray && theDoc}
          <!-- boardDoc.path doesn't have a trailing slash `/`, unlike boardPath (which was used for legacy reasons) -->
          <CoreDrawing
            {strokesArray}
            {canvasWidth}
            {canvasHeight}
            currentTimeOverride={currentTime}
            on:stroke-drawn={(e) => handleNewlyDrawnStroke(e.detail.newStroke)}
            on:board-wipe={deleteStrokesFromSlide({ strokesArray, slidePath: `${boardPath}slides/${slideID}` })}

            backgroundImageDownloadURL={theDoc.backgroundImageDownloadURL}
            on:background-upload={(e) => handleWhatUserUploaded(e.detail.imageFile, slideID)}
            on:background-reset={() => deleteBackgroundImageFromSlide(theDoc)}
            
            isDeletable={boardDoc.slideIDs.length > 1}
            on:board-delete={async () => {
              if (confirm(`Are you sure you want to delete board ${i+1}? (Other boards won't be affected.)`)) {
                await deleteSlideFromMultislide({ slideID, multislidePath: boardDoc.path })
                changeToSlideIdx(idxOfFocusedSlide - 1)
              }
            }}
            on:canvas-stream-ready={(e) => canvasMediaStreams = [...canvasMediaStreams, e.detail]}
          />
        {/if}
      </div>
    </ListenToStrokes>
  </ListenToDoc>
{/each}

<RenderlessAudioRecorder
  let:startRecording={startRecording} 
  let:stopRecording={stopRecording}
  on:record-end={(e) => saveVideo(e.detail.audioBlob)}
>
  <div use:portal={'multislide-record-button-wrapper-' + boardDoc.id}>
    {#if !isRecording}
      {#if !!!$user.uid}
        <LoginGoogle style={styles.recordButton}>
          SIGN IN & RECORD
        </LoginGoogle>
      {:else}
        <button on:click={() => initializeRecording({ startRecording, idxOfFocusedSlide })}
          style={styles.recordButton}
        >
          Record
        </button>
      {/if}
    {:else}
      <button on:click={() => terminateRecording({ stopRecording })}
        style={styles.recordButton}
      >
        {#if boardDoc.recordState === 'post_record'}
          <CircularSpinnerFourColor/>
        {:else} 
          Finish
        {/if}
      </button>
    {/if}
  </div>

  <div>
    <span>Combined recording</span>
    <video 
      controls bind:this={vid}
      class="debug-video" 
      style="width: 300px; height: 200px;"
    >
    </video>
  </div>
</RenderlessAudioRecorder>

<script>
  import CoreDrawing from './CoreDrawing.svelte'
  import CircularSpinnerFourColor from '$lib/Blackboard/CircularSpinnerFourColor.svelte'
  import LoginGoogle from '$lib/LoginGoogle.svelte'
  import MultiboardSlideChanger from '$lib/DoodleVideo/MultiboardSlideChanger.svelte'
  import ListenToDoc from '$lib/Renderless/ListenToDoc.svelte'
  import ListenToStrokes from '$lib/Renderless/ListenToStrokes.svelte'
  import RenderlessAudioRecorder from '$lib/Blackboard/RenderlessAudioRecorder.svelte'

  import { 
    deleteMultislideBlackboard, 
    deleteSlideFromMultislide,
    deleteStrokesFromSlide,
    deleteBackgroundImageFromSlide
  } from '/src/helpers/unifiedDeleteAPI.js'
  import { portal, lazyCallable } from '/src/helpers/actions.js'
  import { roundedToFixed, getRandomID } from "/src/helpers/utility.js"
  import { updateFirestoreDoc, setFirestoreDoc } from '/src/helpers/crud.js'
  import { styles } from '/src/helpers/styles.js'
  import { handleVideoUploadEmailNotifications } from '/src/helpers/everythingElse.js'

  import { 
    getFirestore, 
    query, getDocs, collection, where, 
    arrayUnion, increment
  } from 'firebase/firestore'
  import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'
  import { onMount, onDestroy } from 'svelte'
  import { user, willPreventPageLeave, baseMicStream } from '/src/store.js'
  import { page } from '$app/stores'
  
  export let canvasWidth
  export let canvasHeight
  export let boardDoc // boardDoc.slideIDs
  export let classID
  export let roomDoc

  const boardPath = `classes/${classID}/blackboards/${boardDoc.id}/`
  const db = getFirestore()
  let isRecording = false

  // timer-related variables
  let currentTime = 0
  const tickSize = 100 // milliseconds
  let startTimestamp = null
  let nextTimeoutID = null
  let etaOfNextTick = null
  
  let idxOfFocusedSlide = 0 
  const timingOfSlideChanges = []

  let canvasMediaStreams = []

  // difference, LOCK the blackboard when you're recording, so other people's strokes don't intefere
  // if they already drawn some strokes, it doesn't matter because the timestamp = 0 is actually accurate
  onMount(async () => {
    document.addEventListener('keydown', keydownHandler)
  })

  onDestroy(() => {
    document.removeEventListener('keydown', keydownHandler)
  })

  async function initializeRecording ({ startRecording }) {
    try {
      await startRecording()
      recordVisualAndAudioToWebM()
      startStopwatch()
      timingOfSlideChanges.push({
        toIdx: idxOfFocusedSlide,
        timing: 0
      })
      isRecording = true
      willPreventPageLeave.set(true)
      updateFirestoreDoc(boardDoc.path, {
        recordState: 'mid_record'
      })
    } catch (error) {
      alert(error)
    }
  }


  let vid, videoRecorder, videoTrack, combinedStream
  let outputCanvas, ctx
  const chunks = []

  //https://stackoverflow.com/a/57915174/7812829
  function switchCanvasStream (newSlideIdx) {
    if (videoTrack && combinedStream) {
      combinedStream.removeTrack(videoTrack)
      videoTrack = canvasMediaStreams[newSlideIdx].getVideoTracks()[0]
      combinedStream.addTrack(videoTrack)
    }
  }

  function recordVisualAndAudioToWebM () {
    // Create master canvas for composition
    outputCanvas = document.createElement('canvas')
    outputCanvas.width = canvasWidth
    outputCanvas.height = canvasHeight

    const outputStream = outputCanvas.captureStream(10)

    ctx = outputCanvas.getContext('2d')

    const [audioTrack] = $baseMicStream.getAudioTracks()
    videoTrack = canvasMediaStreams[0].getVideoTracks()[0]
    // videoTrack = outputStream.getVideoTracks()[0]

    // Ensure video track has proper constraints
    videoTrack.applyConstraints({
      width: canvasWidth,
      height: canvasHeight,
      frameRate: 10
    }).catch(e => console.error('Constraint error:', e));

    // COMBINED STREAM
    combinedStream = new MediaStream([videoTrack, audioTrack])

    videoRecorder = new MediaRecorder(combinedStream, {
      mimeType: 'video/webm;codecs=vp8,opus',

      // these settings are necessary, otherwise the recorder will still be audio-only
      videoBitsPerSecond: 500000, // 0.5 Mbps is "low quality"
      audioBitsPerSecond: 128000 // 128 kbps
    })
   
    videoRecorder.addEventListener('dataavailable', e => e.data.size && chunks.push(e.data))
    videoRecorder.addEventListener('stop', exportStream)
    videoRecorder.addEventListener('error', (e) => {console.error('MediaRecorder error:', e);});

    videoRecorder.start(100) // 100 ms

    function exportStream () {
      if (chunks.length) {
        var blob = new Blob(chunks, { 
          type: 'video/webm;codecs=vp8,opus'// chunks[0].type 
        })    
        var vidURL = URL.createObjectURL(blob)

        vid.src = vidURL
        vid.addEventListener('loadedmetadata', () => {
          console.log('Video metadata loaded:', {
            duration: vid.duration,
            videoWidth: vid.videoWidth,
            videoHeight: vid.videoHeight
          });
        });
        vid.addEventListener('error', () => { console.log('Video error:', vid.error); })
      }
    }
  }

  async function terminateRecording ({ stopRecording }) {
    try {
      await stopRecording()
      videoRecorder.stop()
      stopStopwatch()
      updateFirestoreDoc(boardDoc.path, {
        recordState: 'post_record'
      })
    } catch (error) {
      alert(error)
    }
  }

  function keydownHandler (e) {
    switch (e.key) {
      case "ArrowLeft":
        changeToSlideIdx(Math.max(0, idxOfFocusedSlide - 1))
        break
      case "ArrowRight":
        changeToSlideIdx(Math.min(idxOfFocusedSlide + 1, boardDoc.slideIDs.length - 1))
    }
  }

  async function createNewSlide () {
    const newSlideID = getRandomID()
    
    await Promise.all([
      setFirestoreDoc(`${boardPath}slides/${newSlideID}/`, {
        // empty doc matters because it can then be updated with background images etc.
      }),
      updateFirestoreDoc(boardPath, {
        slideIDs: arrayUnion(newSlideID)
      })
    ])

    changeToSlideIdx(boardDoc.slideIDs.length - 1)
  }

  function changeToSlideIdx (newSlideIdx) {
    idxOfFocusedSlide = newSlideIdx 
    if (currentTime > 0) {
      timingOfSlideChanges.push({
        toIdx: idxOfFocusedSlide,
        timing: currentTime
      })
    }

    if (isRecording) {
      switchCanvasStream(newSlideIdx)
    }
  }

  async function saveVideo (audioBlob) {
    // TO-DO: REMOVE THIS WHEN YOU'RE READY
    return

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

    // set the question to be resolved
    updateFirestoreDoc(roomDoc.path, {
      isAnswered: true
    })

    // note because this component is used in both questions and rooms, `roomDoc` 
    // represents both `questions`and `rooms`. In the futuer we'll refactor to prevent this confusion.
    if (roomDoc.askerUID) {
      await handleVideoUploadEmailNotifications({ 
        classID, 
        questionDoc: roomDoc, 
        userDoc: $user,
        linkToQuestion: `${$page.url.origin}/${classID}/question/${roomDoc.id}`
      })
    }
    
    // QUICKFIX
    // only reproducible on my iPad (yet old Explain works for some reason)
    // but this quickfix works well because iPad will correctly reload, whereas computers will display the prompt

    willPreventPageLeave.set(false) // technically does nothing because we defensively reload, but it's still here for correctness

    // NOTE: removed now so that we can test the webm4 export feature
    // window.location.reload()
  }

  // TO-DO: encapsulate this into a modular component/JS file etc.
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
    if (!imageFile) return
    if (imageFile.type.split("/")[0] === 'image') {
      // rewrite
      const storage = getStorage()
      const imageRef = ref(storage, `images/${getRandomID()}`)
      await uploadBytes(imageRef, imageFile)
      const downloadURL = await getDownloadURL(imageRef)

      updateFirestoreDoc(boardPath + `slides/${slideID}`, {
        backgroundImageDownloadURL: downloadURL,
        backgroundImageStoragePath: imageRef.fullPath // TO-DO: proper deletion boards
      })
    } else {
      alert("Error: only images can be used")
    }
  } 
</script>