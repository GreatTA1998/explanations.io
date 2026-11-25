<div class="doodle-animation" style="width: {canvasWidth}px;">
  <div
    class="stage"
    style="width: {canvasWidth}px; height: {canvasHeight}px;"
  >
    <canvas class="background-canvas" use:mountBack></canvas>
    <canvas class="front-canvas" use:mountFront></canvas>

    {#if !isPlaying}
      <button type="button" class="replay-button" on:click={pausePlay}>
        Replay
      </button>
    {/if}

    <div class="extra-controls">
      <div class="menu-wrap" use:lightDismiss={() => DropdownMenu?.setOpen(false)}>
        <button
          type="button"
          class="menu-surface-anchor"
          aria-label="More actions"
          on:click|stopPropagation={() => DropdownMenu.setOpen(true)}
        >
          <span class="material-symbols-outlined">more_vert</span>
        </button>
        <Menu bind:this={DropdownMenu} style="width: 200px">
          <List>
            <button type="button" class="menu-list-item" on:click={handleRevertClick}>
              <span class="material-icons">undo</span>
              Revert to blackboard
            </button>
          </List>
        </Menu>
      </div>
    </div>

    <div class="playbar">
      <button type="button" class="play" aria-label={isPlaying ? 'Pause' : 'Play'} on:click={pausePlay}>
        {#if isPlaying}
          <svg viewBox="0 0 12 12" aria-hidden="true"><path d="M2 1h3v10H2zm5 0h3v10H7z"/></svg>
        {:else}
          <svg viewBox="0 0 12 12" aria-hidden="true"><path d="M3 1.2v9.6L10.2 6z"/></svg>
        {/if}
      </button>
      {#if frames.length}
        <input
          class="seek"
          type="range"
          min="0"
          max={Math.max(frames.length - 1, 0)}
          step="1"
          value={seekValue}
          style="--p:{seekRatio}"
          aria-label="Animation progress"
          on:input={onSeek}
          on:change={onSeekEnd}
        />
      {/if}
      <button type="button" class="speed-btn" on:click={togglePlaySpeed}>{playbackSpeed}x</button>
    </div>
  </div>
</div>

<script>
  import { onDestroy, createEventDispatcher } from 'svelte'
  import { get } from 'svelte/store'
  import Menu from '@smui/menu'
  import List from '@smui/list'
  import { connectTwoPoints, drawStroke, renderBackground } from '/src/helpers/canvas.js'
  import { lightDismiss } from '/src/helpers/lightDismiss.js'
  import { assumedCanvasWidth } from '/src/store.js'

  export let strokesArray = []
  export let canvasWidth
  export let canvasHeight
  export let backgroundImageDownloadURL = ''

  const dispatch = createEventDispatcher()
  const speedOptions = [0.25, 0.5, 1, 2, 4]

  // Mutated in place so the playback loop can advance frames without
  // retriggering the canvas layout effect on every point.
  const playback = {
    replay: false,
    frame: -1
  }

  let canvas
  let bgCanvas
  let ctx
  let bgCtx
  let currentFrameIdx = -1
  let isPlaying = false
  let isInReplayMode = false
  let playbackSpeed = 1
  let playToken = 0
  let pendingTimer
  let frames = []
  let DropdownMenu

  $: frames = buildFrames(strokesArray || [])
  $: seekValue = isInReplayMode
    ? Math.max(currentFrameIdx, 0)
    : Math.max(frames.length - 1, 0)
  $: seekRatio = frames.length > 1
    ? Math.min(1, Math.max(0, seekValue / (frames.length - 1)))
    : (frames.length ? 1 : 0)

  onDestroy(() => {
    playToken += 1
    clearTimeout(pendingTimer)
  })

  $: if (canvas && bgCanvas && canvasWidth && canvasHeight && strokesArray) {
    applyCanvasSize(canvasWidth, canvasHeight, strokesArray, backgroundImageDownloadURL || '')
  }

  function mountFront (node) {
    canvas = node
    return {
      destroy () {
        if (canvas === node) canvas = null
      }
    }
  }

  function mountBack (node) {
    bgCanvas = node
    return {
      destroy () {
        if (bgCanvas === node) bgCanvas = null
      }
    }
  }

  // One frame per segment within a stroke (pointIndex starts at 1), matching
  // v3 / explain.mit.edu DoodleAnimation and beta's connectTwoPoints API.
  function buildFrames (strokes) {
    const nextFrames = []
    for (let i = 0; i < strokes.length; i++) {
      const points = strokes[i].points || []
      for (let pointIndex = 1; pointIndex < points.length; pointIndex++) {
        nextFrames.push({ strokeIndex: i, pointIndex })
      }
    }
    return nextFrames
  }

  function applyCanvasSize (w, h, strokes, backgroundUrl) {
    const sizeChanged = canvas.width !== w || canvas.height !== h || !ctx
    if (sizeChanged) {
      canvas.width = w
      canvas.height = h
      bgCanvas.width = w
      bgCanvas.height = h
      ctx = canvas.getContext('2d')
      bgCtx = bgCanvas.getContext('2d')
    }
    paintBackground(backgroundUrl)
    if (!playback.replay) {
      redrawAll(strokes)
    } else if (sizeChanged) {
      paintUpTo(playback.frame)
    }
  }

  function paintBackground (backgroundUrl) {
    if (!bgCtx) return
    bgCtx.clearRect(0, 0, bgCanvas.width, bgCanvas.height)
    if (backgroundUrl) {
      renderBackground(backgroundUrl, canvas, bgCtx)
    }
  }

  function redrawAll (strokes) {
    if (!ctx) return
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    for (let i = 0; i < strokes.length; i++) {
      drawStroke(strokes[i], null, ctx, canvas, canvasWidth)
    }
  }

  function lineWidthFor (stroke) {
    return stroke.lineWidth * (canvasWidth / get(assumedCanvasWidth))
  }

  function paintCompletedStrokes (strokeIndex) {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    for (let i = 0; i < strokeIndex; i++) {
      drawStroke(strokesArray[i], null, ctx, canvas, canvasWidth)
    }
  }

  function paintPartialStroke (frame) {
    const stroke = strokesArray[frame.strokeIndex]
    connectTwoPoints(
      stroke.points,
      frame.pointIndex,
      stroke.isErasing,
      ctx,
      stroke.color,
      lineWidthFor(stroke),
      canvas
    )
  }

  function paintUpTo (frameIndex) {
    if (!ctx || !frames.length || frameIndex < 0) {
      if (ctx) ctx.clearRect(0, 0, canvas.width, canvas.height)
      return
    }
    const end = Math.min(frameIndex, frames.length - 1)
    paintCompletedStrokes(frames[end].strokeIndex)
    for (let i = 0; i <= end; i++) {
      const frame = frames[i]
      if (frame.strokeIndex !== frames[end].strokeIndex) continue
      paintPartialStroke(frame)
    }
  }

  function sleep (ms) {
    return new Promise((resolve) => {
      pendingTimer = setTimeout(resolve, ms)
    })
  }

  async function playAnimation (fromReplayButton) {
    if (!ctx) return
    const token = ++playToken
    isPlaying = true
    isInReplayMode = true
    playback.replay = true

    if (fromReplayButton && playback.frame >= frames.length - 1) {
      playback.frame = -1
      currentFrameIdx = -1
    }

    // After seek/resize, rebuild completed strokes then advance segment-by-segment.
    if (playback.frame < 0) {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
    } else {
      paintUpTo(playback.frame)
    }

    for (let i = playback.frame + 1; i < frames.length; i++) {
      if (token !== playToken || !isPlaying) return
      paintPartialStroke(frames[i])
      playback.frame = i
      currentFrameIdx = i
      await sleep(10 / playbackSpeed)
    }

    if (token !== playToken) return
    isPlaying = false
  }

  function pausePlay () {
    if (isPlaying) {
      isPlaying = false
      playToken += 1
      return
    }
    playAnimation(true)
  }

  function onSeek (event) {
    const index = Number(event.currentTarget.value)
    playToken += 1
    isPlaying = false
    isInReplayMode = true
    playback.replay = true
    playback.frame = index
    currentFrameIdx = index
    paintUpTo(index)
  }

  function onSeekEnd (event) {
    const index = Number(event.currentTarget.value)
    playback.frame = index
    currentFrameIdx = index
    playAnimation(false)
  }

  function togglePlaySpeed () {
    const i = speedOptions.indexOf(playbackSpeed)
    playbackSpeed = speedOptions[(i < 0 ? 0 : i + 1) % speedOptions.length]
  }

  function handleRevertClick () {
    DropdownMenu?.setOpen(false)
    revertToBoard()
  }

  function revertToBoard () {
    playToken += 1
    isPlaying = false
    dispatch('revert')
  }
</script>

<style>
  .doodle-animation { position: relative; }
  .stage { position: relative; }
  .front-canvas, .background-canvas {
    position: absolute; top: 0; left: 0; width: 100%; height: 100%;
  }
  .front-canvas { z-index: 1; background-color: transparent; }
  .background-canvas { z-index: 0; background-color: hsl(0, 0%, 0%, 0.8); }

  .replay-button {
    position: absolute; z-index: 3; top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    min-width: 96px; height: 48px; border: 0; border-radius: 24px;
    background: white; color: black; font-size: 1rem; cursor: pointer;
  }

  .extra-controls {
    position: absolute; z-index: 7; top: 8px; right: 8px;
  }
  .menu-wrap { position: relative; }
  .menu-surface-anchor {
    display: flex; align-items: center; justify-content: center;
    width: 32px; height: 32px; padding: 0; border: 0;
    background: transparent; color: #fff; cursor: pointer;
  }
  .menu-surface-anchor .material-symbols-outlined { font-size: 20px; }
  .menu-list-item {
    display: flex; align-items: center; column-gap: 6px;
    width: 100%; height: 48px; padding: 4px 16px; border: 0; border-radius: 4px;
    background: transparent; cursor: pointer;
  }
  .menu-list-item:hover { background-color: rgb(241, 241, 241); }

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
</style>
