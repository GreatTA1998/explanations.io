<!-- if it's a real-time blackboard, the stroke would also have a server timestamp value-->
<!-- Also reactivity won't trigger, but that's fine because visually the canvas is already udpated, and
  when playing back the video, strokesArray1 is silently correct value -->
{#if !localAudioBlob}
  {#if canvasWidth && canvasHeight}
    <MultislideBlackboardOffline
      {strokesArray1}
      {strokesArray2}
      {strokesArray3}
      {canvasWidth}
      {canvasHeight}
      on:stroke-drawn1={(e) => strokesArray1 = [...strokesArray1, e.detail.newStroke]}
      on:stroke-drawn2={(e) => strokesArray2 = [...strokesArray2, e.detail.newStroke]}
      on:stroke-drawn3={(e) => strokesArray3 = [...strokesArray3, e.detail.newStroke]}
      on:recording-finished={(e) => localAudioBlob = e.detail.audioBlob}
      on:timing-of-slide-changes-ready={(e) => timingOfSlideChanges = e.detail.timingOfSlideChanges}
      on:board-wipe-1={() => strokesArray1 = []}
      on:board-wipe-2={() => strokesArray2 = []}
      on:board-wipe-3={() => strokesArray3 = []}
    />
  {/if}
{:else}
  <MultislideDoodleVideoOffline
    {strokesArray1}
    {strokesArray2}
    {strokesArray3}
    {canvasWidth}
    {canvasHeight}
    audioBlob={localAudioBlob}
    {timingOfSlideChanges}
    on:recording-retry={() => {
      strokesArray1 = []
      strokesArray2 = []
      strokesArray3 = [] 
      localAudioBlob = null 
      timingOfSlideChanges = []
    }}
  />
{/if}

<script>
  import MultislideBlackboardOffline from '$lib/MultislideBlackboardOffline.svelte'
  import MultislideDoodleVideoOffline from '$lib/MultislideDoodleVideoOffline.svelte'
  import { getFirestoreDoc } from '/src/helpers/crud.js'
  import { computeMaxAvailableDimensionsGeneral } from '/src/helpers/canvas.js'
  import { onMount } from 'svelte'

  const classID = 't5ZxK9RQcWBCHBeKFhcc'
  const powerpointID = 'QWERTYUIOP'

  let audioDownloadURL

  let localAudioBlob = null
  
  let strokesArray1 = []
  let strokesArray2 = [] 
  let strokesArray3 = [] 
  let timingOfSlideChanges = []

  let canvasWidth 
  let canvasHeight

  onMount(async () => {
    const { height, width } = computeMaxAvailableDimensionsGeneral(0.8 * window.screen.availWidth, 0.8 * window.screen.availHeight)
    canvasWidth = width
    canvasHeight = height
  })

  let slideIDs = [
    '123456789',
    'abcdefghi',
    'ABCDEFGHI'
  ]
</script>