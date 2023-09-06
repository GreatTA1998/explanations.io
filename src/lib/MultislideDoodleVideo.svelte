<!-- <audio 
  on:play={initSyncing} 
  on:seeking={syncStrokesToAudio}
  bind:this={AudioPlayer} 
  src={audioDownloadURL} 
  controls={!isLocked}
  style={`width: ${canvasWidth}px; height: 40px; position: absolute; bottom: 0; top: auto;`}>
</audio> -->

<MultislideDoodleVideoVisualSlide
  {currentTime}
  strokesArray={strokesArray1}
  {hasPlaybackStarted}
/>
<MultislideDoodleVideoVisualSlide
  {currentTime}
  strokesArray={strokesArray2}
  {hasPlaybackStarted}
/>
<MultislideDoodleVideoVisualSlide
  {currentTime}
  strokesArray={strokesArray3}
  {hasPlaybackStarted}
/>

<audio
  bind:this={AudioPlayer}
  on:play={() => hasPlaybackStarted = true}
  on:seeking={() => currentTime = AudioPlayer.currentTime}
>
</audio>

<div>current time: {currentTime}</div>
<div>has playback started: {hasPlaybackStarted}</div>

<script>
  // we try to let `currentTime` represent `AudioPlayer.currentTime` as closely
  // as possible with reactive statements, so then we can use 
  // a reactive / declarative way to write the rest of this component


  // TO-DO:
  //   - an audio element that plays and dictates the time
  //   - all the doodle visuals will play simultaneously
  //   - finally, just have a spotlight on one
  import { connectTwoPoints, drawStroke, renderBackground } from '../helpers/canvas.js'
  import { onMount, onDestroy, createEventDispatcher } from 'svelte'
  import { maxAvailableWidth, maxAvailableHeight, assumedCanvasWidth, user } from '../store.js' // note `canvasWidth` was misleading
  import Button, { Label } from '@smui/button'
  import MultislideDoodleVideoVisualSlide from '$lib/MultislideDoodleVideoVisualSlide.svelte'

  let AudioPlayer
  let hasPlaybackStarted = false

  let strokesArray1 = [] 
  let strokesArray2 = []
  let strokesArray3 = []

  let currentTime = 0
  const ONE_HUNDRED_MILLISECS = 100

  setInterval(
    () => { currentTime += 0.1 }, // note this is a floating point calculation 
    ONE_HUNDRED_MILLISECS
  )
</script>


