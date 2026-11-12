<div style="padding: {PAGE_PADDING}px; padding-top: {TOP_CLEARANCE}px;">
  {#if ready && classID && blackboardID}
    {#key classID + ':' + blackboardID}
      <GeneralizedBlackboardVideoDisplay
        {classID}
        boardID={blackboardID}
        roomDoc={{}}
      />
    {/key}
  {/if}
</div>

<script>
  import { onMount } from 'svelte'
  import GeneralizedBlackboardVideoDisplay from '$lib/GeneralizedBlackboardVideoDisplay.svelte'
  import { getBoardWidth } from '/src/helpers/dimensions.js'
  import { blackboardWidth, videoCinemaWidth, videoPreviewWidth } from '/src/store.js'
  import { PAGE_PADDING } from '/src/helpers/CONSTANTS.js'

  export let data

  let { videoID } = data
  $: ({ videoID } = data) // so it stays in sync when `data` changes
  $: classID = videoID ? videoID.split(':')[0] : ''
  $: blackboardID = videoID ? videoID.split(':')[1] : ''

  // The class layout is what normally measures the player. This route is outside
  // that layout, and a 0-width canvas never intersects, so strokes never load.
  // The root layout also floats a server menu over this page. Leave room for it
  // so the board fits in the window.
  const TOP_CLEARANCE = 136
  let ready = false

  function measure () {
    const containerWidth = window.innerWidth - 2 * PAGE_PADDING
    const containerHeight = window.innerHeight - TOP_CLEARANCE - PAGE_PADDING
    const boardWidth = getBoardWidth({ containerWidth, containerHeight })
    blackboardWidth.set(boardWidth)
    videoPreviewWidth.set(boardWidth)
    videoCinemaWidth.set(getBoardWidth({
      containerWidth: window.innerWidth,
      containerHeight: window.innerHeight
    }))
  }

  onMount(() => {
    measure()
    ready = true
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  })
</script>
