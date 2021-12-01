
<canvas 
  bind:this={canvas} 
  use:resizable={{strokesArray, handleResize}}
  on:resized={handleResize}
>

</canvas>
<audio 
  on:play={initSyncing} 
  bind:this={AudioPlayer} 
  src={audioDownloadURL} 
  controls 
  style="width: 100%;">
</audio>

<script>
  import { resizable } from '../helpers/canvasHelpers.js'
  import { connectTwoPoints } from '../helpers/canvasDraw.js'
  import { onMount, onDestroy } from 'svelte'

  export let strokesArray
  export let audioDownloadURL

  let allFrames
  let nextFrameIdx = 0
  let canvas
  let ctx
  let AudioPlayer
  let recursiveSyncer
  let playbackSpeed = 1

  onDestroy(() => {
    if (recursiveSyncer) clearTimeout(recursiveSyncer)
  })

  onMount(() => {
    ctx = canvas.getContext('2d')

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

  function getStartTime ({ strokeIndex, pointIndex }) {
    const stroke = strokesArray[strokeIndex];
    return stroke.startTime + (pointIndex - 1) * getPointDuration(stroke);
  }

  function getPointDuration (stroke) {
    const strokePeriod = (stroke.endTime - stroke.startTime);
    return strokePeriod / stroke.points.length;
  }

  function initSyncing () {
    nextFrameIdx = 0;
    ctx.clearRect(0, 0, canvas.width, canvas.height) // video could already be rendered as an initial preview or completed video
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
        this.syncStrokesToAudio();
      } else {
        this.renderFramesUntilCurrentTime()
      }
      resolve();
    })
  }
</script>
