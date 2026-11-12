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
    
    <div
      role="button"
      tabindex="0"
      data-playback-path={playbackPathOf(boardDoc)}
      on:click={togglePlayPause}
      on:keydown={onPlaybackKeydown}
      on:focusin={() => claimPlayback(playbackPathOf(boardDoc))}
      on:pointerdown={() => claimPlayback(playbackPathOf(boardDoc))}
      style="position: relative; height: {canvasHeight}px; width: {canvasWidth}px;"
    >
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

    <div class="playback-bar">
      <button
        type="button"
        class="play"
        aria-label={isPlaying ? 'Pause' : 'Play'}
        on:click={onPlayClick}
      >
        {#if isPlaying}
          <svg viewBox="0 0 12 12" aria-hidden="true"><path d="M2 1h3v10H2zm5 0h3v10H7z" /></svg>
        {:else}
          <svg viewBox="0 0 12 12" aria-hidden="true"><path d="M3 1.2v9.6L10.2 6z" /></svg>
        {/if}
      </button>
      <span class="time">{formatTime(currentTime)} / {formatTime(duration)}</span>
      <div class="seek-track">
        <div class="seek-fill" style="width: {seekRatio * 100}%"></div>
        <input
          class="seek"
          type="range"
          min="0"
          max={duration || 0}
          step="0.01"
          value={currentTime}
          aria-label="Seek"
          on:pointerdown={claimThis}
          on:input={onSeek}
        />
      </div>
    </div>

    <audio
      class="playback-source"
      src={audioDownloadURL}
      aria-hidden="true"
      data-playback-path={playbackPathOf(boardDoc)}
      on:focusin={() => claimPlayback(playbackPathOf(boardDoc))}
      use:captureAudioPlayer
      on:play={() => {
        hasPlaybackStarted = true;
        isPlaying = true;
        startTimer();
        publishClock();
      }}
      on:pause={() => {
        isPlaying = false;
        publishClock();
      }}
      on:seeking={handleSeeking}
      on:timeupdate={() => publishClock()}
      on:loadedmetadata={handleLoadedMetadata}
      on:canplay={applyQueuedSeek}
    ></audio>
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
  let isElementVisible = false
  let queuedSeek = null
  let applyingSeek = false
  let unregisterPlayback = () => {}

  $: scaleFactor = canvasWidth / $assumedCanvasWidth

  $: if (propToDeleteVideo) {
    handleVideoDelete(boardDoc)
  }

  $: if (currentTime > 0) {
    syncSlideIdxToTime()
  }

  $: seekRatio = duration > 0 ? Math.min(1, Math.max(0, currentTime / duration)) : 0

  function formatTime (seconds) {
    const safe = Number.isFinite(seconds) && seconds > 0 ? seconds : 0
    const whole = Math.floor(safe)
    const minutes = Math.floor(whole / 60)
    const secs = whole % 60
    return `${minutes}:${String(secs).padStart(2, '0')}`
  }

  function claimThis () {
    claimPlayback(playbackPathOf(boardDoc))
  }

  function onPlayClick (event) {
    event.stopPropagation()
    claimThis()
    togglePlayPause()
  }

  function onSeek (event) {
    const next = Number(event.currentTarget.value)
    if (!AudioPlayer || !Number.isFinite(next)) return
    claimThis()
    currentTime = next
    // The slider replaces a clicked word so a later canplay does not seek back to it.
    queuedSeek = next
    AudioPlayer.currentTime = next
    const now = AudioPlayer.currentTime || 0
    if (AudioPlayer.seeking || Math.abs(now - next) < 0.3) queuedSeek = null
  }

  function togglePlayPause () {
    if (isPlaying) AudioPlayer.pause()
    else if (AudioPlayer) AudioPlayer.play() // let the on:play event handle the rest, so the user can play from the video or the audio player
  }

  function onPlaybackKeydown (event) {
    // Space is handled once, for the current video, and must not scroll the page.
    if (event.key === ' ' || event.code === 'Space') return
    togglePlayPause()
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
      seek: seekTo,
      play: playVideo,
      toggle: togglePlayPause
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
    if (Number.isFinite(AudioPlayer.duration)) duration = AudioPlayer.duration
    publishPlayback(
      playbackPathOf(boardDoc),
      AudioPlayer.currentTime || 0,
      AudioPlayer.duration || 0,
      reason === 'seek' ? 'seek' : 'tick',
      !AudioPlayer.paused
    )
  }

  function playVideo(time) {
    // playAudioFrom keeps this word in place. A queued copy is written back
    // by a later canplay, after playback or the slider has moved on.
    queuedSeek = null
    return playAudioFrom(AudioPlayer, time)
  }

  function handleSeeking() {
    if (!applyingSeek) queuedSeek = null
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
    if (applyingSeek || !AudioPlayer || queuedSeek == null || AudioPlayer.readyState < 1) return
    const target = queuedSeek
    applyingSeek = true
    AudioPlayer.currentTime = target
    applyingSeek = false
    // An ignored assignment leaves the playhead at 0. Keep the target so a
    // later canplay can try again instead of starting from the beginning.
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
  .playback-source {
    position: absolute;
    width: 1px;
    height: 1px;
    opacity: 0;
    pointer-events: none;
    overflow: hidden;
  }

  .playback-bar {
    position: absolute;
    z-index: 6;
    left: 8px;
    right: 8px;
    bottom: 6px;
    display: flex;
    align-items: center;
    gap: 8px;
    height: 32px;
    color: #fff;
    pointer-events: none;
  }

  .playback-bar > * {
    pointer-events: auto;
  }

  .play {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    flex: 0 0 auto;
    color: #fff;
  }

  .play svg {
    display: block;
    width: 12px;
    height: 12px;
    fill: currentColor;
  }

  .time {
    flex: 0 0 auto;
    font-size: 0.75rem;
    font-variant-numeric: tabular-nums;
    white-space: nowrap;
  }

  .seek-track {
    position: relative;
    flex: 1 1 auto;
    height: 16px;
  }

  .seek-track::before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    height: 2px;
    transform: translateY(-50%);
    background: rgba(255, 255, 255, 0.4);
  }

  .seek-fill {
    position: absolute;
    left: 0;
    top: 50%;
    height: 2px;
    transform: translateY(-50%);
    background: #fff;
    pointer-events: none;
  }

  .seek-fill::after {
    content: '';
    position: absolute;
    right: 0;
    top: 50%;
    width: 8px;
    height: 8px;
    transform: translate(50%, -50%);
    border-radius: 50%;
    background: #fff;
  }

  .seek {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    margin: 0;
    opacity: 0;
    cursor: pointer;
    appearance: none;
  }

  .seek:focus {
    outline: none;
  }

  .seek-track:focus-within {
    outline: 1px solid rgba(255, 255, 255, 0.8);
    outline-offset: 2px;
  }
</style>


