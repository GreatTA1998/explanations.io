<div 
  style={`
    position: relative; 
    width: ${canvasWidth}px; 
    height: ${canvasHeight}px;
  `}
>
  <!-- on:click={togglePlayPause} -->
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
  <!-- rgb(46, 49, 49) -->
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
  import { connectTwoPoints, drawStroke, renderBackground } from '../helpers/canvas.js'
  import { onMount, onDestroy, createEventDispatcher } from 'svelte'
  import { maxAvailableWidth, maxAvailableHeight, assumedCanvasWidth, user } from '../store.js' // note `canvasWidth` was misleading
  import Button, { Label } from '@smui/button'
  import { sequence } from '@sveltejs/kit/hooks';

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
  let nextDotIdx

  let playbackSpeed = 1

  // when video starts playing, erase the full video preview
  // the `syncer` will naturally take over the visual state
  $: if (hasPlaybackStarted) {
    if (FrontCanvas) {
      frontCtx.clearRect(0, 0, canvasWidth, canvasHeight)
      syncRecursively()
    }
  }

  $: if (hasAudioSliderJumped) { // meaning `currentTime` has changed
    if (recursiveSyncer) clearTimeout(recursiveSyncer)
    syncRecursively()

    dispatch('slider-jump-sync')
  }

  // syncing happens everytime `currentTime` changes, which is updated every 0.1 seconds. 
  // note we no longer have the efficient "sleep til next timing" recursion
  // OPTION 1: we do it reactively to every currentTime change
  // OPTION 2 (if OPTION 1 doesn't work): we just run the continuous recursion once (and it will keep recursing)
  // $: if (FrontCanvas && BackCanvas && hasPlaybackStarted) {
  //   syncVisualsToCurrentTime(currentTime)
  // }

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

    // display full preview before user starts video
    for (const stroke of strokesArray) {
      drawStroke(stroke, null, frontCtx, FrontCanvas, canvasWidth)
    }

    // one-time preparation
    computeSequenceOfDotsToTraceAsTimeProgresses()
  })

  onDestroy(() => {
    if (recursiveSyncer) clearTimeout(recursiveSyncer)
  })

  function syncRecursively () {
    // if (!AudioPlayer) return
    syncVisualsToCurrentTime(currentTime)
    // syncStrokesToAudio()
    if (nextDotIdx < sequenceOfDots.length) {
      // calculate sleep duration
      const nextFrame = sequenceOfDots[nextDotIdx]
      let timeTilNextStroke = 1000 * (nextFrame.startTime - currentTime)
      timeTilNextStroke = timeTilNextStroke / playbackSpeed
      // quickfix: sometimes the timeTilNextStroke is ridiculously long
      // probably due to calculation error in `nextFrame.startTime`
      timeTilNextStroke = Math.min(timeTilNextStroke, 2000)
      recursiveSyncer = setTimeout(syncRecursively, timeTilNextStroke) // use recursion instead of `setInterval` to prevent overlapping calls
    }
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

  function handleResize (canvasWidth, canvasHeight) {
    FrontCanvas.width = canvasWidth
    FrontCanvas.height = canvasHeight
    BackCanvas.width = canvasWidth
    BackCanvas.height = canvasHeight

    restoreVisualBoardState()
  }

  function restoreVisualBoardState () {
    return new Promise(async (resolve) => {
      if (recursiveSyncer) {
        // video was playing: resume to previous progress
        nextDotIdx = 0

        syncVisualsToCurrentTime(currentTime)
        // syncStrokesToAudio()
      }
      // else if (hasPlayedOnce) {
      //   traceThroughDotsUntilCurrentTime()
      // } 
      else {
        for (const stroke of strokesArray) {
          drawStroke(stroke, null, frontCtx, FrontCanvas, canvasWidth)
        }
      }
      resolve();
    })
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