<!-- Create an independent stacking context -->
<div style="z-index: 0; position: relative;" 
  use:lazyCallable={() => isElementVisible = true }
>
  {#if showSlideChanger}
    <!-- 1px quick-fix so UI doesn't look terrible -->
    <div style="margin-bottom: 1px; display: flex; align-items: center; width: {canvasWidth}px; flex-wrap: wrap; row-gap: 2px;">  
      <slot />

      <MultiboardSlideChanger on:click={(e) => idxOfFocusedSlide = e.detail.newIdx}
        slideIDs={boardDoc.slideIDs}
        {idxOfFocusedSlide}
      />
      
      <slot name="after" />
    </div>
  {/if}

  <div style="position: relative; box-sizing: border-box;">
    <div style="position: absolute; top: 8px; left: 8px; z-index: 6; display: flex; align-items: center;">
      <BaseTransparentButton on:click={togglePlaySpeed} style="font-weight: 500;">
        {playbackSpeed}x 
      </BaseTransparentButton>
    </div>
    
    <div role="button" tabindex="0" on:click={togglePlayPause} on:keydown={togglePlayPause} style="position: relative; height: {canvasHeight}px; width: {canvasWidth}px;">
      {#each boardDoc.slideIDs as slideID, i (slideID)}
        <ListenToDoc docPath={`/classes/${classID}/blackboards/${boardDoc.id}/slides/${slideID}`}
          let:theDoc={slideDoc}
        >
          <FetchStrokes dbPath="/classes/{classID}/blackboards/{boardDoc.id}/slides/{slideID}"
            autoFetchStrokes={isElementVisible}
            let:strokesArray={strokesArray}
            on:mounted={(e) => {
              slideIDToStrokesArray[slideID] = e.detail.strokesArray
            }}
          > 
            <div
              style="
                position: absolute;
                transform: scale(0.5); 
                transform-origin: top left;
                display: {idxOfFocusedSlide === i ? '' : 'none'};
                width: {canvasWidth * 2}px; 
                height: {canvasHeight * 2}px;
              "
            > 
              {#if strokesArray && slideDoc}
                <MultiboardSlide
                  {currentTime}
                  {strokesArray}
                  canvasWidth={canvasWidth * 2}
                  canvasHeight={canvasHeight * 2}
                  {hasPlaybackStarted}
                  {hasAudioSliderJumped}
                  backgroundImageDownloadURL={slideDoc.backgroundImageDownloadURL}
                  on:slider-jump-sync={() => hasAudioSliderJumped = false}
                />
              {/if}
            </div>
          </FetchStrokes>
        </ListenToDoc>
      {/each}
    </div>

    <!-- <audio> can't grow beyond 50px, it just introduces unexpected spacing -->
    <audio
      src={audioDownloadURL}
      use:captureAudioPlayer
      on:play={() => {
        hasPlaybackStarted = true;
        isPlaying = true;
        startTimer();
      }}
      on:pause={() => isPlaying = false}
      on:seeking={handleSeeking}
      on:timeupdate={() => publishClock()}
      on:loadedmetadata={handleLoadedMetadata}
      controls
      style={`width: ${canvasWidth}px; height: 50px`}
    >
    <!-- ${Math.min(90 * scaleFactor, 50)}px; -->
    </audio>
  </div>
</div>

<script>
  // we try to let `currentTime` represent `AudioPlayer.currentTime` as closely
  // as possible with reactive statements, so then we can use 
  // a reactive / declarative way to write the rest of this component
  import { revertToBoard } from '/src/helpers/unifiedDeleteAPI.js'
  import { onMount, onDestroy, createEventDispatcher } from 'svelte'
  import { lazyCallable } from '/src/helpers/actions.js'
  import { assumedCanvasWidth, user } from '/src/store.js' // note `canvasWidth` was misleading
  import MultiboardSlide from '$lib/DoodleVideo/MultiboardSlide.svelte'
  import FetchStrokes from '$lib/Renderless/FetchStrokes.svelte'
  import MultiboardSlideChanger from '$lib/DoodleVideo/MultiboardSlideChanger.svelte'
  import BaseTransparentButton from '$lib/Reusable/BaseTransparentButton.svelte'
  import ListenToDoc from '$lib/Renderless/ListenToDoc.svelte'
  import { playbackPathOf, publishPlayback, registerPlayback } from '/src/helpers/playbackBridge.js'

  export let propToDeleteVideo = false
  export let audioDownloadURL
  export let boardDoc

  export let classID
  export let canvasWidth
  export let canvasHeight

  export let timingOfSlideChanges
  export let showSlideChanger

  const dispatch = createEventDispatcher()
  let intervalID = ''
  let hasAudioSliderJumped = false
  let idxOfFocusedSlide = 0
  let playbackSpeed = 1

  let slideIDToStrokesArray = {}

  let AudioPlayer
  let hasPlaybackStarted = false

  let currentTime = 0
  const ONE_HUNDRED_MILLISECS = 100
  let isPlaying = false

  let updateViewMinutesTimeoutID
  let isElementVisible = false
  let queuedSeek = null
  let unregisterPlayback = () => {}

  $: scaleFactor = canvasWidth / $assumedCanvasWidth

  $: if (propToDeleteVideo) {
    handleVideoDelete(boardDoc)
  }

  $: if (currentTime > 0) {
    syncSlideIdxToTime()
  }

  function togglePlayPause () {
    if (isPlaying) AudioPlayer.pause()
    else if (AudioPlayer) AudioPlayer.play() // let the on:play event handle the rest, so the user can play from the video or the audio player
  }
  
  // NOTE: doesn't need to be optimized yet , there are only about 10-20 slide changes at most
  function syncSlideIdxToTime () {
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
    unregisterPlayback = registerPlayback(playbackPathOf(boardDoc), {
      seek: seekTo
    })
  })

  onDestroy(() => {
    unregisterPlayback()
    if (intervalID) clearInterval(intervalID)
    if (updateViewMinutesTimeoutID) clearTimeout(updateViewMinutesTimeoutID)
  })

  function captureAudioPlayer(node) {
    AudioPlayer = node
  }

  function publishClock(reason) {
    if (!AudioPlayer) return
    publishPlayback(
      playbackPathOf(boardDoc),
      AudioPlayer.currentTime || 0,
      AudioPlayer.duration || 0,
      reason === 'seek' ? 'seek' : 'tick'
    )
  }

  function handleSeeking() {
    currentTime = AudioPlayer.currentTime
    hasAudioSliderJumped = true
    publishClock('seek')
  }

  function handleLoadedMetadata() {
    applyQueuedSeek()
    publishClock()
  }

  function seekTo(time) {
    queuedSeek = time
    applyQueuedSeek()
  }

  function applyQueuedSeek() {
    if (!AudioPlayer || queuedSeek == null || AudioPlayer.readyState < 1) return
    AudioPlayer.currentTime = queuedSeek
    queuedSeek = null
  } 

  function togglePlaySpeed () {
    if (AudioPlayer.playbackRate === 2) {
      AudioPlayer.playbackRate = 1 
    } else {
      AudioPlayer.playbackRate = 2
    }
  }

  function startTimer () {
    intervalID = setInterval(
      () => { 
        if (AudioPlayer) {
          currentTime = AudioPlayer.currentTime
          publishClock()
        }
      }, // note this is a floating point calculation 
      ONE_HUNDRED_MILLISECS
    )
  }
  function createAndCopyShareLink () {
    const shareLink = window.location.href
    navigator.clipboard.writeText(shareLink)
    alert('Share link has been copied, you can now paste it anywhere.')
  }

  async function handleVideoDelete (boardDoc) {
    dispatch('deletion-request-received')

    if (!confirm('Are you sure you want to revert this video to a blackboard?')) {
      return
    }

    revertToBoard({ boardDoc, slideIDToStrokesArray })
  }
</script>

<style>
  audio::-webkit-media-controls-enclosure {
    border-radius: 0;
  }
</style>


