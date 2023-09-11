<div style="display: flex;">
  {#each [0, 1, 2] as i}
    <div 
      class:highlighted-glow={idxOfFocusedSlide === i}
      style="width: 80px; height: 50px; border: 1px solid black; display: flex; align-items: center; justify-content: center; box-sizing: border-box;"
    >
      Slide { i + 1}
    </div>
  {/each}

  <div style="margin-left: 20px">

  </div>

  <button on:click={() => dispatch('recording-retry')}
    style="height: 50px; font-size: 1.1em"
  >
    Discard video and reset
  </button>

</div>

<div style="
  position: relative; 
  box-sizing: border-box;
  width: {canvasWidth}px; 
  height: {canvasHeight + 40}px;
"
>
  {#if !hasPlaybackStarted}
    <span on:click={startAudioPlayer} 
      class="material-icons overlay-center" 
      style="color: white;
      width: {180 * scaleFactor}px; 
      height: {180 * scaleFactor}px; 
      z-index: 5;
      font-size: {10 * scaleFactor}rem;"
    >
      play_circle
    </span>
  {/if}

  <div style="display: {idxOfFocusedSlide === 0 ? '' : 'none'}">
    <MultislideDoodleVideoVisualSlide
      {currentTime}
      strokesArray={strokesArray1}
      {canvasWidth}
      {canvasHeight}
      {hasPlaybackStarted}
      {hasAudioSliderJumped}
      on:slider-jump-sync={() => hasAudioSliderJumped = false}
    />
  </div>

  <div style="display: {idxOfFocusedSlide === 1 ? '' : 'none'}">
    <MultislideDoodleVideoVisualSlide
      {currentTime}
      strokesArray={strokesArray2}
      {canvasWidth}
      {canvasHeight}
      {hasPlaybackStarted}
      {hasAudioSliderJumped}
      on:slider-jump-sync={() => hasAudioSliderJumped = false}
    />
  </div>

  <div style="display: {idxOfFocusedSlide === 2 ? '' : 'none'}">
    <MultislideDoodleVideoVisualSlide
      {currentTime}
      strokesArray={strokesArray3}
      {canvasWidth}
      {canvasHeight}
      {hasPlaybackStarted}
      {hasAudioSliderJumped}
      on:slider-jump-sync={() => hasAudioSliderJumped = false}
    />
  </div>

  <audio
    bind:this={AudioPlayer}
    on:play={() => {
      hasPlaybackStarted = true;
      startTimer();
    }}
    on:seeking={() => {
      currentTime = AudioPlayer.currentTime;
      hasAudioSliderJumped = true
    }}
    controls
    style={`width: ${canvasWidth}px; height: 40px; position: absolute; bottom: 0; top: auto;`}
  >
  <!-- top: auto -->
  </audio>
</div>

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

  export let audioBlob

  export let strokesArray1
  export let strokesArray2
  export let strokesArray3
  export let canvasWidth
  export let canvasHeight

  export let timingOfSlideChanges

  // $: blobURL = URL.createObjectURL(audioBlob)

  $: scaleFactor = canvasWidth / $assumedCanvasWidth

  const dispatch = createEventDispatcher()
  const classID = 't5ZxK9RQcWBCHBeKFhcc'
  const powerpointID = 'QWERTYUIOP'
  let intervalID = ''
  let hasAudioSliderJumped = false
  let idxOfFocusedSlide = 0

  let slideIDs = [
    '123456789',
    'abcdefghi',
    'ABCDEFGHI'
  ]

  let AudioPlayer
  let hasPlaybackStarted = false

  let currentTime = 0
  const ONE_HUNDRED_MILLISECS = 100

  // Ensure we change `idxOfFocusedSlide` 
  // NOTE: doesn't need to be optimized yet , there are only about 10-20 slide changes at most
  $: {
    if (currentTime > 0) {
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
  }

  onMount(() => {
    const blobURL = URL.createObjectURL(audioBlob)
    console.log('blobURL =', blobURL)
    AudioPlayer.src = blobURL
  })

  onDestroy(() => {
    if (intervalID) clearInterval(intervalID)
  }) 

  function startAudioPlayer () {
    if (AudioPlayer) {
      AudioPlayer.play()
    }
  }

  function startTimer () {
    intervalID = setInterval(
      () => { currentTime = AudioPlayer.currentTime }, // note this is a floating point calculation 
      ONE_HUNDRED_MILLISECS
    )
  }
</script>

<style>
   .highlighted-glow {
    background-color: orange;
    color: white;
  }

  .overlay-center {
    position: absolute; 
    width: 20px; 
    height: 20px;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto; 
    color: white
  }
</style>


