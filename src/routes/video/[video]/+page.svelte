<div style="padding: {PAGE_PADDING}px; padding-top: {TOP_CLEARANCE}px;">
  {#if ready && classID && blackboardID}
    {#key classID + ':' + blackboardID}
      <!--
        Same in-room player path: GeneralizedBlackboardVideoDisplay →
        GeneralizedVideoDisplay → MultiboardHD (+ FetchStrokes autoFetch,
        playbackClock, MultiboardSlide playbackSyncArmed).

        WHY a thin wrapper used to diverge: `/video` sits outside `[class]`
        layout, so board width stayed 0 (IntersectionObserver never fired /
        strokes never fetched) and an older MultiboardSlide reactive cleared
        the canvas on every currentTime tick. Measuring into the shared
        width stores + the shared MultiboardHD tree keeps standalone identical
        to in-room playback.
      -->
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
  $: ({ videoID } = data)
  $: classID = videoID ? videoID.split(':')[0] : ''
  $: blackboardID = videoID ? videoID.split(':')[1] : ''

  // Match [class] layout measurement into the same stores MultiboardHD reads.
  const TOP_CLEARANCE = 136
  let ready = false

  function measure () {
    const containerWidth = window.innerWidth
    const containerHeight = window.innerHeight - TOP_CLEARANCE - PAGE_PADDING
    const boardWidth = getBoardWidth({ containerWidth, containerHeight })
    blackboardWidth.set(boardWidth)
    videoPreviewWidth.set(boardWidth)
    videoCinemaWidth.set(getBoardWidth({
      containerWidth: window.innerWidth,
      containerHeight: window.innerHeight,
      pageInset: false
    }))
  }

  onMount(() => {
    measure()
    ready = true
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  })
</script>
