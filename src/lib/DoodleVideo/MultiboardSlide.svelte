<div 
  style={`
    position: relative; 
    width: ${canvasWidth}px; 
    height: ${canvasHeight}px;
  `}
>
  <canvas 
    bind:this={FrontCanvas} 
    style={`
      position: absolute; 
      z-index: 1; 
      margin-top: 0; 
      margin-left: 0; 
      width: ${canvasWidth}px; 
      height: ${canvasHeight}px; 
      background-color: transparent`
    }
  >
  </canvas>

  <canvas 
    bind:this={BackCanvas} 
    style={`
      position: absolute;
      z-index: 0;
      top: 0;
      left: 0;
      display: block;
      width: ${canvasWidth}px; 
      height: ${canvasHeight}px;
      background-color: hsl(0,0%,0%, 0.80);`
    }
  >
  </canvas>
</div>

<script>
  import { connectTwoPoints, drawStroke, renderBackground } from '/src/helpers/canvas.js'
  import { onMount, onDestroy, createEventDispatcher } from 'svelte'
  import { assumedCanvasWidth } from '/src/store.js'

  export let strokesArray
  export let currentTime
  export let hasPlaybackStarted
  export let canvasWidth
  export let canvasHeight
  export let hasAudioSliderJumped

  export let backgroundImageDownloadURL

  const dispatch = createEventDispatcher()

  let FrontCanvas
  let BackCanvas
  let frontCtx
  let backCtx

  let recursiveSyncer
  let sequenceOfDots = []
  let nextDotIdx = 0
  let playbackSyncArmed = false
  let playbackSpeed = 1

  // Arm stroke sync once when playback begins. Clearing inside a reactive that
  // also calls syncRecursively() re-runs on every currentTime tick (Svelte
  // tracks that read), wiping the bitmap while incremental sync skips past
  // strokes — blank board while audio plays (standalone /video "crash").
  $: if (hasPlaybackStarted && frontCtx && FrontCanvas && !playbackSyncArmed) {
    playbackSyncArmed = true
    if (recursiveSyncer) clearTimeout(recursiveSyncer)
    frontCtx.clearRect(0, 0, FrontCanvas.width, FrontCanvas.height)
    nextDotIdx = 0
    queueMicrotask(() => syncRecursively())
  }

  $: if (hasAudioSliderJumped) {
    if (recursiveSyncer) clearTimeout(recursiveSyncer)
    queueMicrotask(() => syncRecursively())
    dispatch('slider-jump-sync')
  }

  $: if (FrontCanvas && BackCanvas) {
    handleResize(canvasWidth, canvasHeight)
  }

  $: if (backCtx && backgroundImageDownloadURL) {
    backCtx.clearRect(0, 0, BackCanvas.scrollWidth, BackCanvas.scrollHeight)
    renderBackground(backgroundImageDownloadURL, FrontCanvas, backCtx)
  }

  onMount(() => {
    frontCtx = FrontCanvas.getContext('2d')
    backCtx = BackCanvas.getContext('2d')

    for (const stroke of strokesArray) {
      drawStroke(stroke, null, frontCtx, FrontCanvas, canvasWidth)
    }

    computeSequenceOfDotsToTraceAsTimeProgresses()
  })

  onDestroy(() => {
    if (recursiveSyncer) clearTimeout(recursiveSyncer)
  })

  function syncRecursively () {
    syncVisualsToCurrentTime(currentTime)
    if (nextDotIdx >= sequenceOfDots.length) return
    const nextFrame = sequenceOfDots[nextDotIdx]
    let timeTilNextStroke = 1000 * (nextFrame.startTime - currentTime) / playbackSpeed
    // Cap sleep so a bad startTime cannot stall the syncer for minutes.
    timeTilNextStroke = Math.min(Math.max(0, timeTilNextStroke), 2000)
    recursiveSyncer = setTimeout(syncRecursively, timeTilNextStroke)
  }

  // TO-DO: video explanation
  // NOTE: we store queueOfDots := { strokeIdx, pointIdx} to find
  //   the `previousDot` to connect the `currentDot` from. 
  //   otherwise We lose the information if we store {x, y} only
  // ASSUMPTIONS: `strokesArray` is immutable

  // the key is, we're connecting a line between two points,
  // there is no dot to connect the 1st dot to, 
  // the initial drawing is just 2nd dot connect to 1st dot
  function computeSequenceOfDotsToTraceAsTimeProgresses () {
    const allDots = [] 
    for (let i = 0; i < strokesArray.length; i++) {
      // why `j` starts from 1: 
      //   we draw by connecting two dots: 2nd to 1st, 3rd to 2nd, ..., n-1 to n
      //   so j starts from index `1`
      for (let j = 1; j < strokesArray[i].points.length; j++) {
        const frame = { strokeIndex: i, pointIndex: j };
        allDots.push({ 
          startTime: getStartTime(frame),
          ...frame, 
        }); 
      }
    }
    // sorting is necessary because while you're drawing, others might draw in the middle of your stroke
    // maybe disallow that behavior in the future?
    sequenceOfDots = allDots.sort((d1, d2) => d1.startTime - d2.startTime)
  }

  function syncVisualsToCurrentTime (t) {
    if (!frontCtx) return
    const nextDot = sequenceOfDots[nextDotIdx]
    // !nextFrame: nextFrame is undefined after a video finishes
    // ahead of video now (maybe because we slid back the audio player): nextFrame.startTime > AudioPlayer.currentTime 
    if (!nextDot || nextDot.startTime > t) { 
      frontCtx.clearRect(0, 0, FrontCanvas.width, FrontCanvas.height)
      nextDotIdx = 0
    }
    traceThroughDotsUntilCurrentTime(t)
  }

  function traceThroughDotsUntilCurrentTime (t) {
    for (let i = nextDotIdx; i < sequenceOfDots.length; i++) {
      const dot = sequenceOfDots[i]
      if (dot.startTime > t) { 
        break
      }
      traceToDot(dot)
      nextDotIdx += 1
    }
  }

  function traceToDot ({ strokeIndex, pointIndex }) {
    const stroke = strokesArray[strokeIndex]
    const normalizedLineWidth = stroke.lineWidth * (canvasWidth / $assumedCanvasWidth)
    connectTwoPoints(
      stroke.points, 
      pointIndex, 
      stroke.isErasing, 
      frontCtx,
      stroke.color,
      normalizedLineWidth,
      FrontCanvas
    )
  }

  function handleResize (nextWidth, nextHeight) {
    if (!FrontCanvas || !BackCanvas) return
    FrontCanvas.width = nextWidth
    FrontCanvas.height = nextHeight
    BackCanvas.width = nextWidth
    BackCanvas.height = nextHeight
    if (!frontCtx) return
    restoreVisualBoardState()
  }

  function restoreVisualBoardState () {
    if (!frontCtx || !FrontCanvas) return
    if (playbackSyncArmed || recursiveSyncer) {
      nextDotIdx = 0
      syncVisualsToCurrentTime(currentTime)
      return
    }
    for (const stroke of strokesArray || []) {
      drawStroke(stroke, null, frontCtx, FrontCanvas, canvasWidth)
    }
  }

  function getStartTime ({ strokeIndex, pointIndex }) {
    const stroke = strokesArray[strokeIndex];
    return stroke.startTime + (pointIndex - 1) * getPointDuration(stroke);
  }

  function getPointDuration (stroke) {
    const strokePeriod = (stroke.endTime - stroke.startTime);
    return strokePeriod / stroke.points.length;
  }

</script>
