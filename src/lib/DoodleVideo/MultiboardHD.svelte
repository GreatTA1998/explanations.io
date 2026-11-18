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
    <div style="position: relative; height: {canvasHeight}px; width: {canvasWidth}px;">
      {#if !hasPlaybackStarted}
        <button on:click={startAudioPlayer}
          class="material-icons overlay-center"
          style="color: rgba(230, 230, 230, 0.8); width: {240 * scaleFactor}px; height: {240 * scaleFactor}px; z-index: 5; font-size: {15 * scaleFactor}rem;"
        >
          play_circle
        </button>
      {/if}
      {#if onToggleComments && !commentsOpen}
        <div class="transcript-reopen">
          <CommentsPanelButton open={false} on:click={onToggleComments} />
        </div>
      {/if}
      {#each boardDoc.slideIDs as slideID, i (slideID)}
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
    <div class="playbar" style="width: {canvasWidth}px;">
      <button type="button" class="play" aria-label={isPlaying ? 'Pause' : 'Play'} on:click={onPlayClick}>
        {#if isPlaying}
          <svg viewBox="0 0 12 12" aria-hidden="true"><path d="M2 1h3v10H2zm5 0h3v10H7z"/></svg>
        {:else}
          <svg viewBox="0 0 12 12" aria-hidden="true"><path d="M3 1.2v9.6L10.2 6z"/></svg>
        {/if}
      </button>
      <span class="time">{formatTime(currentTime)}</span>
      <input
        class="seek"
        type="range"
        min="0"
        max={duration || 0}
        step="0.01"
        value={currentTime}
        style="--p:{seekRatio}"
        aria-label="Seek"
        on:pointerdown={claimThis}
        on:input={onSeek}
      />
      <span class="time">{formatTime(duration)}</span>
      <button type="button" class="speed-btn" on:click={togglePlaySpeed}>{playbackSpeed}x</button>
      {#if onToggleComments && commentsOpen}
        <CommentsPanelButton open={true} on:click={onToggleComments} />
      {/if}
    </div>
    <audio
      class="clock" src={audioDownloadURL} bind:this={AudioPlayer} aria-hidden="true"
      data-playback-path={playbackPathOf(boardDoc)}
      on:focusin={() => claimPlayback(playbackPathOf(boardDoc))}
      on:play={() => { hasPlaybackStarted = true; isPlaying = true; startTimer() }}
      on:pause={() => { isPlaying = false }}
      on:seeking={() => { currentTime = AudioPlayer.currentTime; hasAudioSliderJumped = true }}
      on:timeupdate={() => {
        if (!AudioPlayer) return
        currentTime = AudioPlayer.currentTime || 0
        if (Number.isFinite(AudioPlayer.duration)) duration = AudioPlayer.duration
      }}
      on:loadedmetadata={() => {
        if (AudioPlayer && Number.isFinite(AudioPlayer.duration)) duration = AudioPlayer.duration
        applyQueuedSeek()
      }}
    ></audio>
  </div>
</div>

<script>
  import { revertToBoard } from '/src/helpers/unifiedDeleteAPI.js'
  import { onMount, onDestroy, createEventDispatcher } from 'svelte'
  import { lazyCallable } from '/src/helpers/actions.js'
  import { assumedCanvasWidth } from '/src/store.js'
  import MultiboardSlide from '$lib/DoodleVideo/MultiboardSlide.svelte'
  import FetchStrokes from '$lib/Renderless/FetchStrokes.svelte'
  import MultiboardSlideChanger from '$lib/DoodleVideo/MultiboardSlideChanger.svelte'
  import CommentsPanelButton from '$lib/DoodleVideo/CommentsPanelButton.svelte'
  import ListenToDoc from '$lib/Renderless/ListenToDoc.svelte'
  import { claimPlayback, playAudioFrom, playbackPathOf, registerPlayback } from '/src/helpers/playbackClock.js'

  export let propToDeleteVideo = false
  export let audioDownloadURL
  export let boardDoc
  export let classID
  export let canvasWidth
  export let canvasHeight
  export let timingOfSlideChanges
  export let showSlideChanger
  export let commentsOpen = false
  export let onToggleComments = undefined

  const dispatch = createEventDispatcher()
  const ONE_HUNDRED_MILLISECS = 100
  let intervalID = '', hasAudioSliderJumped = false, idxOfFocusedSlide = 0, playbackSpeed = 1
  let slideIDToStrokesArray = {}, AudioPlayer, hasPlaybackStarted = false
  let currentTime = 0, duration = 0, isPlaying = false
  let updateViewMinutesTimeoutID, queuedSeek = null, applyingSeek = false
  let unregisterPlayback = () => {}

  $: scaleFactor = canvasWidth / $assumedCanvasWidth
  $: if (propToDeleteVideo) handleVideoDelete(boardDoc)
  $: if (currentTime > 0) {
    let temp = 0
    for (const change of timingOfSlideChanges) {
      if (change.timing < currentTime) temp = change.toIdx
      else if (change.timing > currentTime) break
    }
    idxOfFocusedSlide = temp
  }
  $: if (AudioPlayer) playbackSpeed = AudioPlayer.playbackRate
  $: seekRatio = duration > 0 ? Math.min(1, Math.max(0, currentTime / duration)) : 0

  onMount(() => {
    AudioPlayer.playbackRate = playbackSpeed
    const tick = () => {
      updateViewMinutesTimeoutID = setTimeout(() => {
        if (isPlaying) dispatch('six-seconds-elapsed', { playbackSpeed })
        tick()
      }, 6000)
    }
    tick()
    unregisterPlayback = registerPlayback(playbackPathOf(boardDoc), {
      get audio () { return AudioPlayer },
      seek: seekTo, play: playVideo, toggle: togglePlayPause
    })
  })

  onDestroy(() => {
    unregisterPlayback()
    if (intervalID) clearInterval(intervalID)
    if (updateViewMinutesTimeoutID) clearTimeout(updateViewMinutesTimeoutID)
  })

  function formatTime (seconds) {
    const s = Number.isFinite(seconds) && seconds > 0 ? Math.floor(seconds) : 0
    return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`
  }

  const claimThis = () => claimPlayback(playbackPathOf(boardDoc))
  function onPlayClick (event) { event.stopPropagation(); claimThis(); togglePlayPause() }
  function onSeek (event) {
    const next = Number(event.currentTarget.value)
    if (!AudioPlayer || !Number.isFinite(next)) return
    claimThis(); currentTime = next; hasAudioSliderJumped = true; AudioPlayer.currentTime = next
  }
  const playVideo = (time) => playAudioFrom(AudioPlayer, time)
  const togglePlayPause = () => { isPlaying ? AudioPlayer.pause() : AudioPlayer?.play() }
  const seekTo = (time) => { queuedSeek = time; applyQueuedSeek() }
  function applyQueuedSeek () {
    if (applyingSeek || !AudioPlayer || queuedSeek == null || AudioPlayer.readyState < 1) return
    const target = queuedSeek
    applyingSeek = true; AudioPlayer.currentTime = target; applyingSeek = false
    const now = AudioPlayer.currentTime || 0
    if (AudioPlayer.seeking || Math.abs(now - target) < 0.3) queuedSeek = null
  }
  const togglePlaySpeed = () => { AudioPlayer.playbackRate = AudioPlayer.playbackRate === 2 ? 1 : 2 }
  const startAudioPlayer = () => { claimThis(); AudioPlayer?.play() }
  function startTimer () {
    intervalID = setInterval(() => {
      if (!AudioPlayer) return
      currentTime = AudioPlayer.currentTime
      if (Number.isFinite(AudioPlayer.duration)) duration = AudioPlayer.duration
    }, ONE_HUNDRED_MILLISECS)
  }
  async function handleVideoDelete (boardDoc) {
    dispatch('deletion-request-received')
    if (!confirm('Are you sure you want to revert this video to a blackboard?')) return
    revertToBoard({ boardDoc, slideIDToStrokesArray })
  }
</script>

<style>
  .clock { position: absolute; width: 0; height: 0; opacity: 0; pointer-events: none; }
  .transcript-reopen { position: absolute; top: 12px; right: 12px; z-index: 7; pointer-events: auto; }
  .transcript-reopen :global(.my-round-button) {
    margin: 0; width: 48px; height: 48px; min-width: 48px; min-height: 48px; border-radius: 24px;
    background: rgba(0, 0, 0, 0.55); border-color: rgba(255, 255, 255, 0.35);
    color: rgba(255, 255, 255, 0.95); box-shadow: 0 4px 12px rgba(0, 0, 0, 0.16);
  }
  .playbar {
    position: absolute; left: 0; right: 0; bottom: 0; z-index: 6; height: 50px;
    display: flex; align-items: center; gap: 6px; padding: 0 8px; box-sizing: border-box;
    background: rgba(0, 0, 0, 0.55); color: #fff;
  }
  .play {
    display: flex; align-items: center; justify-content: center;
    width: 28px; height: 28px; flex: 0 0 auto; color: #fff; background: transparent; border: 0; cursor: pointer;
  }
  .play svg { display: block; width: 12px; height: 12px; fill: currentColor; }
  .time { flex: 0 0 auto; font-size: 0.7rem; font-variant-numeric: tabular-nums; opacity: 0.9; }
  .seek {
    appearance: none; -webkit-appearance: none; flex: 1 1 auto; min-width: 0; height: 16px; margin: 0; cursor: pointer;
    background:
      linear-gradient(#fff, #fff) left center / calc(var(--p, 0) * 100%) 2px no-repeat,
      linear-gradient(rgba(255,255,255,.35), rgba(255,255,255,.35)) center / 100% 2px no-repeat;
  }
  .seek::-webkit-slider-runnable-track { height: 2px; background: transparent; }
  .seek::-webkit-slider-thumb {
    -webkit-appearance: none; appearance: none; width: 10px; height: 10px; margin-top: -4px;
    border-radius: 50%; background: #fff; border: 0;
  }
  .seek::-moz-range-track { height: 2px; background: rgba(255,255,255,.35); }
  .seek::-moz-range-progress { height: 2px; background: #fff; }
  .seek::-moz-range-thumb { width: 10px; height: 10px; border-radius: 50%; background: #fff; border: 0; }
  .speed-btn {
    flex: 0 0 auto; height: 28px; min-width: 2rem; padding: 0 4px; border: 0;
    background: transparent; color: rgba(255,255,255,.9); font-size: 0.75rem; font-weight: 500; cursor: pointer;
  }
  .playbar :global(.my-round-button) {
    width: 28px; height: 28px; min-width: 28px; min-height: 28px; margin-left: 0;
    border-color: rgba(255,255,255,.35); color: rgba(255,255,255,.9); background: transparent;
  }
  .overlay-center { position: absolute; width: 20px; height: 20px; inset: 0; margin: auto; }
</style>
