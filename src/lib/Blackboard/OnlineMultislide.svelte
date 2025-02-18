<div use:lazyCallable={() => isBoardVisible = true}>
  <WebmRecorder bind:this={webmRecorder}
    canvasWidth={canvasWidth}
    canvasHeight={canvasHeight}
  />

  <Stopwatch bind:this={stopwatch}
    on:tick={(e) => currentTime = e.detail.currentTime} 
  />
  
  <div style="display: flex; align-items: end; width: {canvasWidth}px; column-gap: 20px;">
    <div id="multislide-record-button-wrapper-{boardDoc.id}">
      <!-- portal -->
    </div>
    
    <MultiboardSlideChanger 
      on:click={(e) => { 
        changeToSlideIdx(e.detail.newIdx)
        masterCtx.clearRect(0, 0, canvasWidth, canvasHeight)
        masterCtx.drawImage(canvasSlides[e.detail.newIdx], 0, 0, canvasWidth, canvasHeight)
      }}
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
    <ListenToDoc docPath={`${boardDoc.path}/slides/${slideID}`} autoListen={isBoardVisible} let:theDoc={slideDoc}>
      <ListenToStrokes 
        dbPath="/classes/{classID}/blackboards/{boardDoc.id}/slides/{slideID}"
        autoListen={isBoardVisible}
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
          <CoreDrawing {strokesArray}
            {canvasWidth}
            {canvasHeight}
            currentTimeOverride={currentTime}
            on:stroke-drawn={(e) => {
              handleNewlyDrawnStroke(e.detail.newStroke)
              if (idxOfFocusedSlide === i) {
                drawStroke(e.detail.newStroke, null, masterCtx, masterCanvas, canvasWidth)
              }
            }}
            on:board-wipe={() => {
              deleteStrokesFromSlide({ strokesArray, slidePath: slideDoc.path })
              if (idxOfFocusedSlide === i) {
                masterCtx.clearRect(0, 0, canvasWidth, canvasHeight)
              }
            }}
            backgroundImageDownloadURL={slideDoc?.backgroundImageDownloadURL}
            on:background-upload={(e) => handleWhatUserUploaded(e.detail.imageFile, slideID)}
            on:background-reset={() => deleteBackgroundImageFromSlide(slideDoc)}
            
            isDeletable={boardDoc.slideIDs.length > 1}
            on:board-delete={async () => {
              if (confirm(`Are you sure you want to delete board ${i+1}? (Other boards won't be affected.)`)) {
                await deleteSlideFromMultislide({ slideID, multislidePath: boardDoc.path })
                changeToSlideIdx(idxOfFocusedSlide - 1)
              }
            }}
            on:canvas-slide-ready={(e) => canvasSlides = [...canvasSlides, e.detail]}
            on:canvas-stream-ready={(e) => canvasMediaStreams = [...canvasMediaStreams, e.detail]}
          />
        </div>
      </ListenToStrokes>
    </ListenToDoc>
  {/each}

  <AudioRecorder
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
  </AudioRecorder>
</div>

<script>
  import CoreDrawing from './CoreDrawing.svelte'
  import Stopwatch from './Stopwatch.svelte'
  import AudioRecorder from './AudioRecorder.svelte'
  import WebmRecorder from './WebmRecorder.svelte'
  import CircularSpinnerFourColor from '$lib/Blackboard/CircularSpinnerFourColor.svelte'
  import LoginGoogle from '$lib/LoginGoogle.svelte'
  import MultiboardSlideChanger from '$lib/DoodleVideo/MultiboardSlideChanger.svelte'
  import ListenToDoc from '$lib/Renderless/ListenToDoc.svelte'
  import ListenToStrokes from '$lib/Renderless/ListenToStrokes.svelte'

  import { 
    deleteMultislideBlackboard, 
    deleteSlideFromMultislide,
    deleteStrokesFromSlide,
    deleteBackgroundImageFromSlide
  } from '/src/helpers/unifiedDeleteAPI.js'
  import { portal, lazyCallable } from '/src/helpers/actions.js'
  import { getRandomID } from "/src/helpers/utility.js"
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
  import { user, willPreventPageLeave } from '/src/store.js'
  import { page } from '$app/stores'
  import { drawStroke } from '/src/helpers/canvas.js'
  
  export let boardDoc
  export let canvasWidth
  export let canvasHeight
  export let classID
  export let roomDoc

  const db = getFirestore()
  let isRecording = false
  let isBoardVisible = false

  let stopwatch
  let currentTime = 0
  
  let idxOfFocusedSlide = 0 
  const timingOfSlideChanges = []

  let canvasSlides = []
  let canvasMediaStreams = []
  let masterCanvas, masterCtx
  let webmRecorder

  onMount(async () => {
    document.addEventListener('keydown', keydownHandler)

    masterCanvas = webmRecorder.getCanvas()
    masterCtx = webmRecorder.getCtx()
  })

  onDestroy(() => {
    document.removeEventListener('keydown', keydownHandler)
  })

  async function initializeRecording ({ startRecording }) {
    try {
      await startRecording()
      webmRecorder.start()
      stopwatch.start()

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

  async function terminateRecording ({ stopRecording }) {
    try {
      await stopRecording()
      webmRecorder.stop()
      stopwatch.stop()
      
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
      setFirestoreDoc(`${boardDoc.path}/slides/${newSlideID}/`, {
        // empty doc matters because it can then be updated with background images etc.
      }),
      updateFirestoreDoc(boardDoc.path, {
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
    updateFirestoreDoc(boardDoc.path, {
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

  // FILE UPLOAD RELATED CODE
  async function handleWhatUserUploaded (imageFile, slideID) {
    if (!imageFile) return
    if (imageFile.type.split("/")[0] === 'image') {
      // rewrite
      const storage = getStorage()
      const imageRef = ref(storage, `images/${getRandomID()}`)
      await uploadBytes(imageRef, imageFile)
      const downloadURL = await getDownloadURL(imageRef)

      updateFirestoreDoc(boardDoc.path + `/slides/${slideID}`, {
        backgroundImageDownloadURL: downloadURL,
        backgroundImageStoragePath: imageRef.fullPath // TO-DO: proper deletion boards
      })
    } else {
      alert("Error: only images can be used")
    }
  } 
</script>