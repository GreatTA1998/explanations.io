<div style="z-index: 0; position: relative;">
  {#if showSlideChanger}
    <div style="margin-bottom: 1px; display: flex; align-items: center; width: {canvasWidth}px; flex-wrap: wrap; row-gap: 2px;">
      <slot />
      <MultiboardSlideChanger on:click={(e) => idxOfFocusedSlide = e.detail.newIdx}
        slideIDs={boardDoc.slideIDs}
        {idxOfFocusedSlide}
      />
      <slot name="after" />
    </div>
  {/if}

  <div
    class="board-surface"
    style="position: relative; box-sizing: border-box;"
    data-playback-path={playbackPathOf(boardDoc)}
    on:focusin={() => claimPlayback(playbackPathOf(boardDoc))}
    on:pointerdown={() => claimPlayback(playbackPathOf(boardDoc))}
  >
    <div style="position: absolute; top: 8px; left: 8px; z-index: 6; display: flex; align-items: center;">
      <BaseTransparentButton on:click={togglePlaySpeed} style="font-weight: 500;">
        {playbackSpeed}x 
      </BaseTransparentButton>
    </div>
    <div style="position: relative; height: {canvasHeight}px; width: {canvasWidth}px;">
      {#if !hasPlaybackStarted}
        <button on:click={startAudioPlayer}
          class="material-icons overlay-center"
          style="color: rgba(230, 230, 230, 0.8); width: {240 * scaleFactor}px; height: {240 * scaleFactor}px; z-index: 5; font-size: {15 * scaleFactor}rem;"
        >
          play_circle
        </button>
      {/if}
      {#each boardDoc.slideIDs as slideID, i}
        <ListenToDoc docPath={`/classes/${classID}/blackboards/${boardDoc.id}/slides/${slideID}`}
          let:theDoc={slideDoc}
        >
          <FetchStrokes dbPath="/classes/{classID}/blackboards/{boardDoc.id}/slides/{slideID}"
            let:fetchStrokes={fetchStrokes}
            let:strokesArray={strokesArray}
            on:mounted={(e) => {
              slideIDToStrokesArray[slideID] = e.detail.strokesArray
            }}
          > 
            <div use:lazyCallable={fetchStrokes}
              style="position: absolute; transform: scale(0.5); transform-origin: top left; display: {idxOfFocusedSlide === i ? '' : 'none'}; width: {canvasWidth * 2}px; height: {canvasHeight * 2}px;"
            >
              {#if strokesArray && slideDoc}
                <MultiboardSlide
                  {currentTime} {strokesArray}
                  canvasWidth={canvasWidth * 2} canvasHeight={canvasHeight * 2}
                  {hasPlaybackStarted} {hasAudioSliderJumped}
                  backgroundImageDownloadURL={slideDoc.backgroundImageDownloadURL}
                  on:slider-jump-sync={() => hasAudioSliderJumped = false}
                />
              {/if}
            </div>
          </FetchStrokes>
        </ListenToDoc>
      {/each}
    </div>
    <audio
      src={audioDownloadURL}
      bind:this={AudioPlayer}
      data-playback-path={playbackPathOf(boardDoc)}
      on:focusin={() => claimPlayback(playbackPathOf(boardDoc))}
      on:play={() => { hasPlaybackStarted = true; isPlaying = true; startTimer(); publishClock(); }}
      on:pause={() => { isPlaying = false; publishClock(); }}
      on:seeking={() => { currentTime = AudioPlayer.currentTime; hasAudioSliderJumped = true; publishClock('seek') }}
      on:timeupdate={() => publishClock()}
      on:loadedmetadata={() => { applyQueuedSeek(); publishClock() }}
      controls
      style={`width: ${canvasWidth}px; height: 50px; position: absolute; left: 0; bottom: 0; z-index: 6;`}
    ></audio>
  </div>
</div>

<script>
  import { revertToBoard } from '/src/helpers/unifiedDeleteAPI.js'
  import { onMount, onDestroy, createEventDispatcher } from 'svelte'
  import { lazyCallable } from '/src/helpers/actions.js'
  import { assumedCanvasWidth, user } from '/src/store.js' // note `canvasWidth` was misleading
  import MultiboardSlide from '$lib/DoodleVideo/MultiboardSlide.svelte'
  import FetchStrokes from '$lib/Renderless/FetchStrokes.svelte'
  import MultiboardSlideChanger from '$lib/DoodleVideo/MultiboardSlideChanger.svelte'
  import BaseTransparentButton from '$lib/Reusable/BaseTransparentButton.svelte'
  import ListenToDoc from '$lib/Renderless/ListenToDoc.svelte'
  import { claimPlayback, playAudioFrom, playbackPathOf, publishPlayback, registerPlayback } from '/src/helpers/playbackBridge.js'

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
  let duration = 0
  const ONE_HUNDRED_MILLISECS = 100
  let isPlaying = false

  let updateViewMinutesTimeoutID
  let queuedSeek = null
  let applyingSeek = false
  let unregisterPlayback = () => {}

  $: scaleFactor = canvasWidth / $assumedCanvasWidth

  $: if (propToDeleteVideo) {
    handleVideoDelete(boardDoc)
  }

  $: if (currentTime > 0) {
    let temp = 0
    for (const change of timingOfSlideChanges) {
      if (change.timing < currentTime) temp = change.toIdx
      else if (change.timing > currentTime) break
    }
    idxOfFocusedSlide = temp
  }

  $: if (AudioPlayer) playbackSpeed = AudioPlayer.playbackRate

  onMount(() => {
    AudioPlayer.playbackRate = playbackSpeed
    const sixSeconds = 6000
    function updateViewMinutes () {
      updateViewMinutesTimeoutID = setTimeout(() => {
        if (isPlaying) dispatch('six-seconds-elapsed', { playbackSpeed })
        updateViewMinutes()
      }, sixSeconds)
    }
    updateViewMinutes()
    unregisterPlayback = registerPlayback(playbackPathOf(boardDoc), {
      seek: seekTo, play: playVideo, toggle: togglePlayPause
    })
  })

  onDestroy(() => {
    unregisterPlayback()
    if (intervalID) clearInterval(intervalID)
    if (updateViewMinutesTimeoutID) clearTimeout(updateViewMinutesTimeoutID)
  })

  function publishClock (reason) {
    if (!AudioPlayer) return
    if (Number.isFinite(AudioPlayer.duration)) duration = AudioPlayer.duration
    publishPlayback(
      playbackPathOf(boardDoc),
      AudioPlayer.currentTime || 0,
      AudioPlayer.duration || 0,
      reason === 'seek' ? 'seek' : 'tick',
      !AudioPlayer.paused
    )
  }

  function playVideo (time) {
    return playAudioFrom(AudioPlayer, time)
  }

  function togglePlayPause () {
    if (isPlaying) AudioPlayer.pause()
    else if (AudioPlayer) AudioPlayer.play()
  }

  function seekTo (time) {
    queuedSeek = time
    applyQueuedSeek()
  }

  function applyQueuedSeek () {
    if (applyingSeek || !AudioPlayer || queuedSeek == null || AudioPlayer.readyState < 1) return
    const target = queuedSeek
    applyingSeek = true
    AudioPlayer.currentTime = target
    applyingSeek = false
    const now = AudioPlayer.currentTime || 0
    if (AudioPlayer.seeking || Math.abs(now - target) < 0.3) queuedSeek = null
  }

  function togglePlaySpeed () {
    if (AudioPlayer.playbackRate === 2) {
      AudioPlayer.playbackRate = 1 
    } else {
      AudioPlayer.playbackRate = 2
    }
  }

  function startAudioPlayer () {
    claimPlayback(playbackPathOf(boardDoc))
    if (AudioPlayer) {
      AudioPlayer.play()
    }
  }

  function startTimer () {
    intervalID = setInterval(() => {
      if (AudioPlayer) {
        currentTime = AudioPlayer.currentTime
        publishClock()
      }
    }, ONE_HUNDRED_MILLISECS)
  }

  async function handleVideoDelete (boardDoc) {
    dispatch('deletion-request-received')

    if (!confirm('Are you sure you want to revert this video to a blackboard?')) {
      return
    }

    revertToBoard({ boardDoc, slideIDToStrokesArray})
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
