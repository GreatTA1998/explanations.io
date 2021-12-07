<slot>

</slot>

{#if !recursiveSyncer && isPlaying === false}
  <span on:click={startAudioPlayer} class="material-icons overlay-center" style="color: white; font-size: 6rem; width: 120px; height: 120px">
    play_circle
  </span>
{/if}

<canvas 
  bind:this={canvas} 
  style={`background-color: #2e3131; width: ${$canvasWidth}; height: ${$canvasHeight}`}
>
</canvas>

<audio 
  on:play={initSyncing} 
  on:seeking={syncStrokesToAudio}
  bind:this={AudioPlayer} 
  src={audioDownloadURL} 
  controls 
  style={`width: ${$canvasWidth}px; height: 40px`}>
</audio>

<script>
  import { connectTwoPoints, drawStroke } from '../helpers/canvas.js'
  import { onMount, onDestroy } from 'svelte'
  import { canvasWidth, canvasHeight } from '../store.js'
  // import IconButton from '@smui/icon-button';

  export let strokesArray
  export let audioDownloadURL
 
  let hasPlayedOnce = false
  let isPlaying = false

  let allFrames
  let nextFrameIdx
  let canvas
  let ctx
  let AudioPlayer
  let recursiveSyncer
  let playbackSpeed = 1

  // handle resizing
  $: if (ctx) {
    canvas.width = $canvasWidth
    canvas.height = $canvasHeight
    handleResize()
  }

  onDestroy(() => {
    if (recursiveSyncer) clearTimeout(recursiveSyncer)
  })

  onMount(() => {
    ctx = canvas.getContext('2d')
    for (const stroke of strokesArray) {
      drawStroke(stroke, null, ctx, canvas)
    }

    const allPoints = [];
    for (let i = 0; i < strokesArray.length; i++) {
      for (let j = 1; j < strokesArray[i].points.length; j++) {
        const frame = { strokeIndex: i, pointIndex: j };
        allPoints.push({ 
          startTime: getStartTime(frame),
          ...frame, 
        }); 
      }
    }
    allFrames = allPoints.sort((p1, p2) => p1.startTime - p2.startTime);
  })

  function startAudioPlayer () {
    AudioPlayer.play()
  }

  function getStartTime ({ strokeIndex, pointIndex }) {
    const stroke = strokesArray[strokeIndex];
    return stroke.startTime + (pointIndex - 1) * getPointDuration(stroke);
  }

  function getPointDuration (stroke) {
    const strokePeriod = (stroke.endTime - stroke.startTime);
    return strokePeriod / stroke.points.length;
  }

  function initSyncing () {
    isPlaying = true
    nextFrameIdx = 0;
    ctx.clearRect(0, 0, $canvasWidth, $canvasHeight) // video could already be rendered as an initial preview or completed video
    syncRecursively()
  }
  
  function syncRecursively () {
    if (!AudioPlayer) return;
    syncStrokesToAudio();
    if (nextFrameIdx < allFrames.length) {
      // calculate sleep duration
      const nextFrame = allFrames[nextFrameIdx];
      const timeTilNextStroke = 1000 * (nextFrame.startTime - AudioPlayer.currentTime); 
      recursiveSyncer = setTimeout(syncRecursively, timeTilNextStroke/playbackSpeed); // use recursion instead of `setInterval` to prevent overlapping calls
    }
  }

  function syncStrokesToAudio () {
    if (!AudioPlayer) return;
    const nextFrame = allFrames[nextFrameIdx];
    if (!nextFrame || nextFrame.startTime > AudioPlayer.currentTime) { // !nextFrame: nextFrame is undefined after a video finishes
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      nextFrameIdx = 0;
    }
    renderFramesUntilCurrentTime();
  }

  function renderFramesUntilCurrentTime () {
    const { currentTime } = AudioPlayer;
    for (let i = nextFrameIdx; i < allFrames.length; i++) {
      const frame = allFrames[i];
      if (frame.startTime > currentTime) { 
        break; 
      }
      renderFrame(frame);
      nextFrameIdx += 1;
    }
  }

  function renderFrame ({ strokeIndex, pointIndex }) {
    const stroke = strokesArray[strokeIndex];
    const lineWidth = stroke.lineWidth; 
    const normalizedLineWidth = lineWidth * (canvas.scrollWidth / 1000);
    connectTwoPoints(
      stroke.points, 
      pointIndex, 
      stroke.isErasing, 
      ctx,
      stroke.color,
      normalizedLineWidth,
      canvas
    )
  }

  function handleResize () {
    return new Promise(async (resolve) => {
      if (recursiveSyncer) {
        // video was playing: resume to previous progress
        nextFrameIdx = 0;
        syncStrokesToAudio();
      } else if (hasPlayedOnce) {
        renderFramesUntilCurrentTime()
      } else {
        for (const stroke of strokesArray) {
          drawStroke(stroke, null, ctx, canvas)
        }
      }
      resolve();
    })
  }
</script>

<style>
.overlay-center {
  position: absolute; width: 20px; height: 20px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto; 
  color: white
}
</style>