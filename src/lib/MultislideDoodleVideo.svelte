
{#each slideIDs as slideID}
  <RenderlessFetchStrokes 
    dbPath={`/classes/${classID}/powerpoints/${powerpointID}/slides/${slideID}`}
    let:fetchStrokes={fetchStrokes}
    autoFetchStrokes
    let:strokesArray={strokesArray}
  >
    {#if strokesArray}
      <MultislideDoodleVideoVisualSlide
        {currentTime}
        strokesArray={strokesArray}
        {hasPlaybackStarted}
        {hasAudioSliderJumped}
        on:slider-jump-sync={() => hasAudioSliderJumped = false}
      />
    {/if}
  </RenderlessFetchStrokes>
{/each}

<audio
  bind:this={AudioPlayer}
  src={audioDownloadURL}
  on:play={() => {
    hasPlaybackStarted = true;
    startTimer();
  }}
  on:seeking={() => {
    currentTime = AudioPlayer.currentTime;
    hasAudioSliderJumped = true
  }}
  controls
  style={`width: ${400}px; height: 40px; position: absolute; bottom: 0; top: 800px;`}
>
<!-- top: auto -->
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
  import RenderlessFetchStrokes from '$lib/RenderlessFetchStrokes.svelte'

  export let audioDownloadURL

  const classID = 't5ZxK9RQcWBCHBeKFhcc'
  const powerpointID = 'QWERTYUIOP'
  let intervalID = ''
  let hasAudioSliderJumped = false

  let slideIDs = [
    '123456789',
    'abcdefghi',
    'ABCDEFGHI'
  ]

  let AudioPlayer
  let hasPlaybackStarted = false

  let currentTime = 0
  const ONE_HUNDRED_MILLISECS = 100

  onDestroy(() => {
    if (intervalID) clearInterval(intervalID)
  }) 

  function startTimer () {
    intervalID = setInterval(
      () => { currentTime += 0.1 }, // note this is a floating point calculation 
      ONE_HUNDRED_MILLISECS
    )
  }
</script>


