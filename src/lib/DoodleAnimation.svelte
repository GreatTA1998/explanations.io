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
      <label>
        Speed
        <select class="doodle-speed" value={String(playbackSpeed)} on:change={changeSpeed}>
          {#each speedOptions as speed (speed)}
            <option value={String(speed)}>{speed}x</option>
          {/each}
        </select>
      </label>
      <button type="button" class="doodle-revert" on:click={revertToBoard}>
        Revert to blackboard
      </button>
    </div>
  </div>

  <div class="animation-controls">
    <button type="button" class="doodle-play" on:click={pausePlay}>
      {isPlaying ? 'Pause' : 'Play'}
    </button>
    {#if isInReplayMode}
      <input
        class="doodle-slider"
        type="range"
        min="0"
        max={Math.max(frames.length - 1, 0)}
        step="1"
        value={Math.max(currentFrameIdx, 0)}
        aria-label="Animation progress"
        on:input={onSeek}
        on:change={onSeekEnd}
      />
    {/if}
  </div>
</div>

<script>
  import { onDestroy, createEventDispatcher } from 'svelte'
  import { redrawStrokes, renderSmoothStroke, renderBackground } from '/src/helpers/canvas.js'

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

  $: frames = buildFrames(strokesArray || [])

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

  function buildFrames (strokes) {
    const nextFrames = []
    for (let i = 0; i < strokes.length; i++) {
      const count = (strokes[i].points || []).length
      if (count === 0) continue
      for (let pointCount = 1; pointCount <= count; pointCount++) {
        nextFrames.push({ strokeIndex: i, pointCount })
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
      redrawStrokes(strokes, ctx, canvas, w)
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

  function paintCompletedStrokes (strokeIndex) {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    for (let i = 0; i < strokeIndex; i++) {
      renderSmoothStroke(strokesArray[i], ctx, canvas, canvasWidth)
    }
  }

  function paintPartialStroke (frame) {
    const stroke = strokesArray[frame.strokeIndex]
    renderSmoothStroke(
      {
        ...stroke,
        points: (stroke.points || []).slice(0, frame.pointCount)
      },
      ctx,
      canvas,
      canvasWidth
    )
  }

  function paintUpTo (frameIndex) {
    if (!ctx || !frames.length || frameIndex < 0) {
      if (ctx) ctx.clearRect(0, 0, canvas.width, canvas.height)
      return
    }
    const frame = frames[Math.min(frameIndex, frames.length - 1)]
    paintCompletedStrokes(frame.strokeIndex)
    paintPartialStroke(frame)
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

    let snapshot = null
    let snapshotStroke = -2

    for (let i = playback.frame + 1; i < frames.length; i++) {
      if (token !== playToken || !isPlaying) return
      const frame = frames[i]
      if (snapshotStroke !== frame.strokeIndex) {
        paintCompletedStrokes(frame.strokeIndex)
        snapshot = ctx.getImageData(0, 0, canvas.width, canvas.height)
        snapshotStroke = frame.strokeIndex
      } else if (snapshot) {
        ctx.putImageData(snapshot, 0, 0)
      }
      paintPartialStroke(frame)
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

  function changeSpeed (event) {
    playbackSpeed = Number(event.currentTarget.value)
  }

  function revertToBoard () {
    playToken += 1
    isPlaying = false
    dispatch('revert')
  }
</script>

<style>
  .doodle-animation {
    position: relative;
  }

  .stage {
    position: relative;
  }

  .front-canvas {
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: transparent;
  }

  .background-canvas {
    position: absolute;
    z-index: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: hsl(0, 0%, 0%, 0.8);
  }

  .replay-button {
    position: absolute;
    z-index: 3;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    min-width: 96px;
    height: 48px;
    border: 0;
    border-radius: 24px;
    background: white;
    color: black;
    font-size: 1rem;
    cursor: pointer;
  }

  .extra-controls {
    position: absolute;
    z-index: 4;
    top: 8px;
    right: 8px;
    display: flex;
    gap: 8px;
    align-items: center;
  }

  .extra-controls label {
    display: flex;
    gap: 6px;
    align-items: center;
    color: white;
    font-size: 0.85rem;
  }

  .doodle-speed,
  .doodle-revert,
  .doodle-play {
    cursor: pointer;
  }

  .doodle-revert,
  .doodle-play {
    height: 32px;
    padding: 0 10px;
    border: 0;
    background: #333;
    color: white;
  }

  .animation-controls {
    display: flex;
    gap: 8px;
    align-items: center;
    width: 100%;
    padding: 6px 0;
    background: #eee;
  }

  .doodle-slider {
    flex: 1;
  }
</style>
