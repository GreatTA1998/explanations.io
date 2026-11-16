<div
  class="measure"
  use:trackWidth={exactWidth => availableWidth = exactWidth}
>
  <!--
    The frame matches the video unless the panel fits in the margin.
    Overlay is positioned on this frame, so its right edge is the video edge.
    A full-column frame would pin the panel to the page edge and straddle both.
    top tracks .board-surface so the panel kisses the blackboard, not the
    slide-changer / comments-toggle row above it.
  -->
  <div
    class="frame"
    class:side-by-side={sideBySide}
    style="width: {frameWidth};"
    use:trackBoardInset
  >
    <div class="stage" style="width: {videoWidth ? videoWidth + 'px' : 'auto'};">
      <slot name="video" />
    </div>

    <slot name="comments-section"
      commentsSectionStyle="display: {isDrawerOpen ? 'block' : 'none'}; {panelStyle}"
      overBoard={!sideBySide}
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

  const PANEL_WIDTH = 320

  let availableWidth = 0
  // Distance from frame top to .board-surface (slide-changer row height).
  let boardInset = 0

  $: margin = availableWidth - videoWidth
  $: sideBySide = videoWidth > 0 && margin >= PANEL_WIDTH
  $: frameWidth = sideBySide || !videoWidth ? '100%' : `${videoWidth}px`
  $: panelStyle = sideBySide
    ? `flex: 1 1 0; min-width: ${PANEL_WIDTH}px; max-width: 72ch;`
    : `
      position: absolute;
      top: ${boardInset}px;
      right: 0;
      bottom: ${HEIGHTS.AUDIO_SLIDER}px;
      width: ${PANEL_WIDTH}px;
      overflow-y: auto;
      z-index: 5;
    `

  // Remeasure when layout inputs change (drawer / width / side-by-side).
  $: if (isDrawerOpen || videoWidth || sideBySide) queueMeasure()

  let frameNode = null
  let measureQueued = false

  function queueMeasure () {
    if (!frameNode || measureQueued) return
    measureQueued = true
    requestAnimationFrame(() => {
      measureQueued = false
      measureBoardInset(frameNode)
    })
  }

  function measureBoardInset (node) {
    if (!node) return
    const board = node.querySelector('.board-surface')
    const next = board
      ? Math.max(0, Math.round(board.getBoundingClientRect().top - node.getBoundingClientRect().top))
      : 0
    if (next !== boardInset) boardInset = next
  }

  function trackBoardInset (node) {
    frameNode = node
    measureBoardInset(node)
    const ro = new ResizeObserver(() => measureBoardInset(node))
    ro.observe(node)
    const t1 = setTimeout(() => measureBoardInset(node), 50)
    const t2 = setTimeout(() => measureBoardInset(node), 300)
    return {
      destroy () {
        frameNode = null
        ro.disconnect()
        clearTimeout(t1)
        clearTimeout(t2)
      }
    }
  }
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
