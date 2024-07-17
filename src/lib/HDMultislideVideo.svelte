<div>
  {#if showSlideChanger}
    <div style="display: flex; margin-bottom: 12px;">
      <MultislideSlideChanger
        slideIDs={boardDoc.slideIDs}
        {idxOfFocusedSlide}
        on:click={(e) => idxOfFocusedSlide = e.detail.newIdx}
      />

      <div style="margin-left: 20px">

      </div>
    </div>
  {/if}

  <div style="
    position: relative; 
    box-sizing: border-box;
    width: {canvasWidth}px; 
    height: {canvasHeight + (80 * scaleFactor)}px"
  >
    {#if !hasPlaybackStarted}
      <span
        on:click={startAudioPlayer} 
        class="material-icons overlay-center" 
        style="color: rgba(230, 230, 230, 0.8);
        width: {270 * scaleFactor}px; 
        height: {270 * scaleFactor}px; 
        z-index: 5;
        font-size: {15 * scaleFactor}rem;
        cursor: pointer;"
      >
        play_circle
      </span>
    {/if} 

    <div style="position: absolute; top: 8px; left: 8px; z-index: 6; display: flex; align-items: center;">
      <BaseTransparentButton on:click={togglePlaySpeed} style="font-weight: 500;">
        {playbackSpeed}x 
      </BaseTransparentButton>
    </div>

    <!-- share, delete button overlay on top -->
    {#if showEditDeleteButtons}
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
        <!-- $adminUIDs.includes($user.uid) -->
        {#if $user.uid === boardDoc.creatorUID || !boardDoc.creatorUID}
          <div style="margin-right: 6px;">
            <BaseTransparentButton on:click={() => revertToBoard(boardDoc)}>
              <span class="material-icons">delete_forever</span>
            </BaseTransparentButton>
          </div>
        {/if}
      </div>
    {/if}
    
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
            transform: scale(0.5); transform-origin: top left;

            display: {idxOfFocusedSlide === i ? '' : 'none'};
            width: {canvasWidth * 2}px; 
            height: {canvasHeight + (80 * scaleFactor)}px; 
            position: relative;
          "
        > 
          {#if strokesArray}
            <MultislideDoodleVideoVisualSlide
              {currentTime}
              {strokesArray}
              canvasWidth={canvasWidth * 2}
              canvasHeight={canvasHeight * 2}
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
      style={`width: ${canvasWidth}px; height: ${90 * scaleFactor}px; position: absolute; bottom: 0; top: auto;`}
    >
    </audio>
  </div>
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
  import { maxAvailableWidth, maxAvailableHeight, assumedCanvasWidth, user, adminUIDs } from '/src/store.js' // note `canvasWidth` was misleading
  import Button, { Label } from '@smui/button'
  import MultislideDoodleVideoVisualSlide from '$lib/MultislideDoodleVideoVisualSlide.svelte'
  import RenderlessFetchStrokes from '$lib/RenderlessFetchStrokes.svelte'
  import { deleteAllStrokesFromDb, deleteNonInitialStrokesFromDb } from '../helpers/properDelete'
  import { doc, getFirestore, updateDoc, deleteField, onSnapshot, setDoc, arrayUnion, collection, query, where, getDocs, deleteDoc, arrayRemove, increment, writeBatch, getDoc } from 'firebase/firestore';
  import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject, } from 'firebase/storage'
  import { getFirestoreDoc, updateFirestoreDoc, getFirestoreQuery } from '/src/helpers/crud.js'
  import MultislideSlideChanger from '$lib/MultislideSlideChanger.svelte'
  import BaseTransparentButton from '$lib/BaseTransparentButton.svelte'

  export let audioDownloadURL
  export let boardDoc

  export let classID
  export let canvasWidth
  export let canvasHeight

  export let timingOfSlideChanges
  export let showEditDeleteButtons
  export let showSlideChanger

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
    if (updateViewMinutesTimeoutID) clearTimeout(updateViewMinutesTimeoutID)
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

  async function revertToBoard ({ isPaid, audioRefFullPath, creatorUID }) {
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
        creatorUID: deleteField(),
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
    // updateFirestoreDoc(membersDbPath + '/' + helperDoc.id, updateObj)

    // promises.push(deleteAllStrokesFromDb())
    await Promise.all(promises)
  }
</script>

<style>
  audio::-webkit-media-controls-enclosure {
    border-radius: 0;
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
  }
</style>


