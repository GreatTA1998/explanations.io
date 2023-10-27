<div style="display: flex;">
  {#each boardDoc.slideIDs as slideID, i}
    <div 
      on:click={() => idxOfFocusedSlide = i}
      class:highlighted-glow={idxOfFocusedSlide === i}
      class:lowlighted-glow={idxOfFocusedSlide !== i}
      style="width: 80px; height: 50px; display: flex; align-items: center; justify-content: center; box-sizing: border-box;"
    >
      Slide { i + 1}
    </div>
  {/each}

  <div style="margin-left: 20px">

  </div>

  <!-- <button on:click={() => dispatch('recording-retry')}
    style="height: 50px; font-size: 1.1em; border-radius: 25px;"
    class="offline-record-button"
  >
    Discard video and reset
  </button> -->
</div>

<div style="margin-bottom: 12px;"></div>

<div style="
  position: relative; 
  box-sizing: border-box;
  width: {canvasWidth}px; 
  height: {canvasHeight + 40}px"
>
  {#if !hasPlaybackStarted}
    <span on:click={startAudioPlayer} 
      class="material-icons overlay-center" 
      style="color: white;
      width: {180 * scaleFactor}px; 
      height: {180 * scaleFactor}px; 
      z-index: 5;
      font-size: {10 * scaleFactor}rem;"
    >
      play_circle
    </span>
  {/if} 

  <div style="position: absolute; top: 8px; left: 8px; z-index: 6;">
    <Button on:click={togglePlaySpeed} 
      variant="raised" 
      style="height: {20 * (canvasWidth / assumedCanvasWidth)}px; margin-left: 8px; padding-left: 8px; padding-right: 8px; background-color: rgb(90 90 90 / 100%); color: white;"
    >
      <div style="color: white">
        {playbackSpeed}x speed
      </div>
      <span class="material-icons"></span>
    </Button>
  </div>

  <!-- share, delete button overlay on top -->
  <div style="
    margin-left: auto;
    margin-right: 8px; 
    display: flex; 
    align-items: center; 
    flex-direction: row-reverse;
    position: absolute; 
    top: 8px; 
    bottom: auto;
    width: 100%;
    z-index: 5;
    "
  >
    <Button on:click={() => createAndCopyShareLink()}
      style="margin-right: 6px; background-color: rgb(90 90 90 / 100%); color: white"
    > 
      Share
    </Button>

    <Button 
      on:click={() => revertToBoard(boardDoc)} 
      style="margin-right: 6px; background-color: rgb(90 90 90 / 100%); color: white">
      Delete
    </Button>
  </div>
  
  {#each boardDoc.slideIDs as slideID, i}
    <RenderlessFetchStrokes
      dbPath="/classes/{classID}/blackboards/{boardDoc.id}/slides/{slideID}"
      let:fetchStrokes={fetchStrokes}
      let:strokesArray={strokesArray}
      let:deleteNonInitialStrokesFromDb={deleteNonInitialStrokesFromDb}
      let:deleteStrokesWithParam={deleteStrokesWithParam}
      on:mounted={(e) => deleteFuncs = [...deleteFuncs, e.detail.deleteFunc]}
    > 
      <div style="display: none;" id="delete-button-{slideID}"
        on:click={() => deleteStrokesWithParam({ boardPath, strokesArray })}
      >
      </div>

      <div 
        use:lazyCallable={fetchStrokes}  
        style="
          display: {idxOfFocusedSlide === i ? '' : 'none'};
          width: {$maxAvailableWidth}px; 
          height: {$maxAvailableHeight + 40}px; 
          position: relative;
        "
      > 
        {#if strokesArray}
          <MultislideDoodleVideoVisualSlide
            {currentTime}
            {strokesArray}
            {canvasWidth}
            {canvasHeight}
            {hasPlaybackStarted}
            {hasAudioSliderJumped}
            on:slider-jump-sync={() => hasAudioSliderJumped = false}
          />
        {/if}
      </div>
    </RenderlessFetchStrokes>
  {/each}

  <audio
    src={audioDownloadURL}
    bind:this={AudioPlayer}
    on:play={() => {
      hasPlaybackStarted = true;
      isPlaying = true;
      startTimer();
    }}
    on:pause={() => {
      isPlaying = false;
    }}
    on:seeking={() => {
      currentTime = AudioPlayer.currentTime;
      hasAudioSliderJumped = true
    }}
    controls
    style={`width: ${canvasWidth}px; height: 40px; position: absolute; bottom: 0; top: auto;`}
  >
  <!-- top: auto -->
  </audio>
</div>

<script>
  // we try to let `currentTime` represent `AudioPlayer.currentTime` as closely
  // as possible with reactive statements, so then we can use 
  // a reactive / declarative way to write the rest of this component

  // TO-DO:
  //   - an audio element that plays and dictates the time
  //   - all the doodle visuals will play simultaneously
  //   - finally, just have a spotlight on one
  import { connectTwoPoints, drawStroke, renderBackground } from '../helpers/canvas.js'
  import { onMount, onDestroy, createEventDispatcher } from 'svelte'
  import { lazyCallable } from '/src/helpers/actions.js'
  import { maxAvailableWidth, maxAvailableHeight, assumedCanvasWidth, user } from '../store.js' // note `canvasWidth` was misleading
  import Button, { Label } from '@smui/button'
  import MultislideDoodleVideoVisualSlide from '$lib/MultislideDoodleVideoVisualSlide.svelte'
  import RenderlessFetchStrokes from '$lib/RenderlessFetchStrokes.svelte'
  import { deleteAllStrokesFromDb, deleteNonInitialStrokesFromDb } from '../helpers/properDelete'
  import { doc, getFirestore, updateDoc, deleteField, onSnapshot, setDoc, arrayUnion, collection, query, where, getDocs, deleteDoc, arrayRemove, increment, writeBatch, getDoc } from 'firebase/firestore';
  import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject, } from 'firebase/storage'
  import { getFirestoreDoc, updateFirestoreDoc, getFirestoreQuery } from '/src/helpers/crud.js'

  export let audioDownloadURL
  export let boardDoc

  export let classID
  export let canvasWidth
  export let canvasHeight

  export let timingOfSlideChanges

  const boardPath = `classes/${classID}/blackboards/${boardDoc.id}`
  const dispatch = createEventDispatcher()
  let intervalID = ''
  let hasAudioSliderJumped = false
  let idxOfFocusedSlide = 0
  let playbackSpeed = 1

  let deleteFuncs = []

  let AudioPlayer
  let hasPlaybackStarted = false

  let currentTime = 0
  const ONE_HUNDRED_MILLISECS = 100
  let isPlaying = false

  let updateViewMinutesTimeoutID

  $: scaleFactor = canvasWidth / $assumedCanvasWidth

  // Ensure we change `idxOfFocusedSlide` 
  // NOTE: doesn't need to be optimized yet , there are only about 10-20 slide changes at most
  $: {
    if (currentTime > 0) {
      let temp = 0
      for (const change of timingOfSlideChanges) {
        if (change.timing < currentTime) {
          temp = change.toIdx
        }
        else if (change.timing > currentTime) {
          break
        }
      }
      idxOfFocusedSlide = temp
    }
  }

  $: if (AudioPlayer) {
    playbackSpeed = AudioPlayer.playbackRate
    // I know...AudioPlayer is not reactive because of bind:this, will refactor in future
  }

  onMount(() => {
    AudioPlayer.playbackRate = playbackSpeed // for some reason changing `AudioPlayer.defaultPlaybackRate` doesn't do anything
    // HANDLE INCREMENTING VIEW MINUTES
    // after 6 seconds, if the video is still playing:
    //   we tell parent to increment `viewMinutes` by 0.1,
    //   we do another 6 seconds timeout (via recursion)
    // BASE CASE: nothing will be updated nor called after the countdown if the video is no longer playing
    const sixSeconds = 6000
    function updateViewMinutes () {
      updateViewMinutesTimeoutID = setTimeout(
        () => {
          if (isPlaying) {
            dispatch('six-seconds-elapsed', { playbackSpeed })
          }
          updateViewMinutes()
        },
        sixSeconds
      )
    } 
    updateViewMinutes()
  })

  onDestroy(() => {
    if (intervalID) clearInterval(intervalID)
  }) 

  function togglePlaySpeed () {
    if (AudioPlayer.playbackRate === 2) {
      AudioPlayer.playbackRate = 1 
    } else {
      AudioPlayer.playbackRate = 2
    }
  }

  function startAudioPlayer () {
    if (AudioPlayer) {
      AudioPlayer.play()
    }
  }

  function startTimer () {
    intervalID = setInterval(
      () => { currentTime = AudioPlayer.currentTime }, // note this is a floating point calculation 
      ONE_HUNDRED_MILLISECS
    )
  }
  function createAndCopyShareLink () {
    const shareLink = window.location.href
    navigator.clipboard.writeText(shareLink)
    alert('Share link has been copied, you can now paste it anywhere.')
  }

  async function revertToBoard ({ id, isPaid, audioRefFullPath, creatorUID }) {
    if (!confirm('Are you sure you want to delete this video?')) {
      return
    }

    const tempPromises = [] 

    for (const deleteFunc of deleteFuncs) {
      tempPromises.push(deleteFunc())
    }
    await Promise.all(tempPromises)

    const promises = []
    const boardRef = doc(getFirestore(), boardPath)
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
      
    // update class statistics
    updateFirestoreDoc(`classes/${classID}`, {
      numOfVideos: increment(-1)
    })

    const membersDbPath = `classes/${classID}/members`

    // update helper video statistics
    const q = query(
      collection(getFirestore(), membersDbPath),
      where('uid', '==', creatorUID)
    )
    const [helperDoc] = await getFirestoreQuery(q)
    const updateObj = {
      numOfVideos: increment(-1)
    }
    if (isPaid) {
      updateObj.numPaidVideos = increment(-1)
    }
    updateFirestoreDoc(membersDbPath + '/' + helperDoc.id, updateObj)

    // promises.push(deleteAllStrokesFromDb())
    await Promise.all(promises)
  }
</script>

<style>
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

  .overlay-center {
    position: absolute; 
    width: 20px; 
    height: 20px;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto; 
    color: white
  }

  .offline-record-button {
    color: cyan; 
    background-color: hsl(0,0%,0%, 0.80); 
    border: 2px solid cyan; 
    height: 40px; display: flex; align-items: center; padding-left: 16px; padding-right: 16px;
    font-size: 24px;
  }
</style>


