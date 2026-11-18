<div
  class="measure"
  use:trackWidth={exactWidth => availableWidth = exactWidth}
>
  <div
    class="frame"
    class:side-by-side={sideBySide}
    class:stack-below={stackBelow}
    style="width: {frameWidth};"
    use:trackBoardInset
  >
    <div class="stage" style="width: {videoWidth ? videoWidth + 'px' : 'auto'};">
      <slot name="video" />
    </div>

    <slot name="comments-section"
      commentsSectionStyle="display: {isDrawerOpen ? 'block' : 'none'}; {panelStyle}"
      overBoard={overlay}
    />
  </div>
</div>

<script>
  import { HEIGHTS } from '/src/helpers/CONSTANTS.js'
  import { trackWidth } from '/src/helpers/actions.js'
  import { viewport } from '/src/storeFolder/viewport.js'

  export let videoWidth = 0
  export let isDrawerOpen = false

  const PANEL_WIDTH = 320

  let availableWidth = 0
  let boardInset = 0
  // Beta three-way: side-by-side | shortfall≤⅓ video → overlay | else stack below.
  $: margin = availableWidth - videoWidth
  $: sideBySide = videoWidth > 0 && margin >= PANEL_WIDTH
  $: overlay = videoWidth > 0 && !sideBySide && (PANEL_WIDTH - margin) <= videoWidth / 3
  $: stackBelow = videoWidth > 0 && !sideBySide && !overlay
  $: frameWidth = sideBySide || stackBelow || !videoWidth ? '100%' : `${videoWidth}px`
  // 42vh cap only for mobile stack-below — never side-by-side/overlay/desktop.
  $: panelStyle = sideBySide
    ? `flex: 1 1 0; min-width: ${PANEL_WIDTH}px; max-width: 72ch;`
    : overlay
    ? `position:absolute;top:${boardInset}px;right:0;bottom:${HEIGHTS.AUDIO_SLIDER}px;width:${PANEL_WIDTH}px;overflow-y:auto;scrollbar-width:thin;scrollbar-color:rgba(128,128,128,0.5) transparent;z-index:5;`
    : `width: 100%; overflow-y: auto;${$viewport.isMobile ? ' max-height: 42vh;' : ''}`

  $: if (isDrawerOpen || videoWidth || sideBySide || stackBelow) queueMeasure()

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

  .stack-below {
    display: flex;
    flex-direction: column;
  }

  .stage {
    position: relative;
    flex: 0 0 auto;
  }

</style>
