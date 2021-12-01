<canvas 
  use:resizable={{strokesArray, onResize}}
  bind:this={canvas}
>

</canvas>

<Button on:click={syncRecursively}>Play</Button>
<Slider
  bind:value={nextFrameIdx}
  min={0}
  max={allFrames.length + 1}
  step={1}
  discrete
/>
 
<script>
  import { resizable } from '../helpers/canvasHelpers.js'
  import { connectTwoPoints } from '../helpers/canvasDraw.js'
  import Slider from '@smui/slider';
  import Button from '@smui/button'
  import { onMount, onDestroy } from 'svelte'

  export let strokesArray;

  let canvas
  let ctx
  let allFrames = []
  let currentFrameIdx = 0
  let nextFrameIdx = 0

  let playbackSpeed = 1
  let recursiveSyncer 

  onDestroy(() => {
    if (recursiveSyncer) clearTimeout(recursiveSyncer)
  })
  
  onMount(() => {
    ctx = canvas.getContext('2d')
    const allPoints = [];
    for (let i = 0; i < strokesArray.length; i++) {
      for (let j = 1; j < strokesArray[i].points.length; j++) {
        const frame = { strokeIndex: i, pointIndex: j };
        allPoints.push(frame);
      }
    }
    allFrames = allPoints
  })

  // can potentially throttle
  // I don't really understand what's going on here
  $: {
    // if (!recursiveSyncer && ctx) {
    //   ctx.clearRect(0, 0, canvas.width, canvas.height);
    //   for (let i = 0; i < Math.min(nextFrameIdx, allFrames.length); i++) {
    //     renderFrame(allFrames[i], true)
    //   }
    // }
    
    if (currentFrameIdx < nextFrameIdx) {
      for (let i = currentFrameIdx; i < Math.min(nextFrameIdx, allFrames.length); i++) {
        renderFrame(allFrames[i], false) // `await` might be necessary
      }
    } 
    else if (currentFrameIdx > nextFrameIdx) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < Math.min(nextFrameIdx, allFrames.length); i++) {
        renderFrame(allFrames[i], true)
      }
    }

    currentFrameIdx = nextFrameIdx 
  }

  async function syncRecursively () {
    console.log('sync recursively')
    if (!recursiveSyncer) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      currentFrameIdx = 0
      nextFrameIdx = 0
    }
    console.log('nextFrameIdx =', currentFrameIdx)
    // syncAnimation()
    if (currentFrameIdx < allFrames.length - 1) {
      // play around with sleep duration,
      const timeTilNextStroke = 0
      nextFrameIdx += 1
      recursiveSyncer = setTimeout(syncRecursively, timeTilNextStroke/playbackSpeed); // use recursion instead of `setInterval` to prevent overlapping calls
    }
    else {
      clearTimeout(recursiveSyncer)
      recursiveSyncer = null
      console.log('I expect it to be null recursiveSyncer =', recursiveSyncer)
    }
  }

  // Figure out why `resize` is not getting called
  async function onResize () {
    console.log('resized')
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i <= currentFrameIdx; i++) {
      await renderFrame(allFrames[i], true); // draw 1 stroke per event loop
    }
  }

  async function renderFrame ({ strokeIndex, pointIndex }, instantly = false) {
    const stroke = strokesArray[strokeIndex];
    const lineWidth = stroke.lineWidth 
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
    if (!instantly) {
      await new Promise(resolve => setTimeout(resolve, 10/playbackSpeed)); // Here the second parameter 10/this.playbackSpeed determines the number of frames rendered per second
    }
  }
</script>

