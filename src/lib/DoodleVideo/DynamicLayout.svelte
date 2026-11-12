<div
  class="measure"
  use:trackWidth={exactWidth => availableWidth = exactWidth}
>
  <!--
    The frame matches the video unless the panel fits in the margin.
    Overlay is positioned on this frame, so its right edge is the video edge.
    A full-column frame would pin the panel to the page edge and straddle both.
  -->
  <div class="frame" class:side-by-side={sideBySide} style="width: {frameWidth};">
    <div class="stage" style="width: {videoWidth ? videoWidth + 'px' : 'auto'};">
      <slot name="video" />
    </div>

    <slot name="comments-section"
      commentsSectionStyle="display: {isDrawerOpen ? 'block' : 'none'}; {panelStyle}"
    />
  </div>
</div>

<script>
  import { HEIGHTS } from '/src/helpers/CONSTANTS.js'
  import { trackWidth } from '/src/helpers/actions.js'

  // Rendered canvas width. The column is often wider, because the 4:3 board
  // is height-limited and the spare width is the white margin.
  export let videoWidth = 0
  export let isDrawerOpen = false

  const PANEL_WIDTH = 200
  // Clears the one-line title row. The audio bar stays usable below the panel.
  const HEADER_CLEARANCE = 38

  let availableWidth = 0

  $: margin = availableWidth - videoWidth
  $: sideBySide = videoWidth > 0 && margin >= PANEL_WIDTH
  $: frameWidth = sideBySide || !videoWidth ? '100%' : `${videoWidth}px`
  $: panelStyle = sideBySide
    ? `flex: 1 1 0; min-width: ${PANEL_WIDTH}px; max-width: 54ch;`
    : `
      position: absolute;
      top: ${HEADER_CLEARANCE}px;
      right: 0;
      bottom: ${HEIGHTS.AUDIO_SLIDER}px;
      width: ${PANEL_WIDTH}px;
      overflow-y: auto;
      z-index: 5;
    `
</script>

<style>
  .measure {
    width: 100%;
  }

  .frame {
    position: relative;
  }

  .side-by-side {
    display: flex;
    align-items: flex-start;
  }

  .stage {
    flex: 0 0 auto;
  }
</style>
