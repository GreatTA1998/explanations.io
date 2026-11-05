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
  import { getBlackboardModuleSize, getCinemaVideoSize, getPreviewVideoWidth } from '/src/helpers/dimensions.js'
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
  // so the player, including the audio bar, fits in the window.
  const TOP_CLEARANCE = 136
  let ready = false

  function measure () {
    const containerWidth = window.innerWidth - 2 * PAGE_PADDING
    const containerHeight = window.innerHeight - TOP_CLEARANCE - PAGE_PADDING
    blackboardWidth.set(getBlackboardModuleSize({ containerWidth, containerHeight }))
    videoPreviewWidth.set(getPreviewVideoWidth({ containerWidth, containerHeight }))
    videoCinemaWidth.set(getCinemaVideoSize())
  }

  onMount(() => {
    measure()
    ready = true
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  })
</script>
