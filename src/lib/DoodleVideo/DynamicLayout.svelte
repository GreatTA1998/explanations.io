<div
  class="measure"
  class:open={isDrawerOpen}
  class:ready={videoWidth > 0}
  style="--video-w: {videoWidth || 0}px; --panel-w: {PANEL_WIDTH}px; --board-inset: {boardInset}px; --audio-h: {HEIGHTS.AUDIO_SLIDER}px;"
  use:observeChrome={{ isDrawerOpen, videoWidth }}
>
  <div class="frame">
    <div class="stage" style="width: {videoWidth ? videoWidth + 'px' : 'auto'};">
      <slot name="video" />
    </div>
    <div class="panel">
      <slot name="comments-section" overBoard={overBoard} />
    </div>
  </div>
</div>

<script>
  import { HEIGHTS } from '/src/helpers/CONSTANTS.js'

  export let videoWidth = 0
  export let isDrawerOpen = false

  const PANEL_WIDTH = 320

  let boardInset = 0
  let overBoard = false

  function measureChrome (node) {
    const frame = node.querySelector('.frame')
    const board = node.querySelector('.board-surface')
    const nextInset = board && frame
      ? Math.max(0, Math.round(board.getBoundingClientRect().top - frame.getBoundingClientRect().top))
      : 0
    if (nextInset !== boardInset) boardInset = nextInset

    const w = node.clientWidth
    const vw = videoWidth
    let nextOver = false
    if (vw > 0 && isDrawerOpen) {
      const sideBySide = w >= vw + PANEL_WIDTH
      nextOver = !sideBySide && w >= PANEL_WIDTH + (2 / 3) * vw
    }
    if (nextOver !== overBoard) overBoard = nextOver
  }

  function observeChrome (node) {
    measureChrome(node)
    // Read-only: boardInset (absolute top) + overBoard flag — never writes widths.
    const ro = new ResizeObserver(() => {
      requestAnimationFrame(() => measureChrome(node))
    })
    ro.observe(node)
    const t1 = setTimeout(() => measureChrome(node), 50)
    const t2 = setTimeout(() => measureChrome(node), 300)
    return {
      update () { measureChrome(node) },
      destroy () {
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

  /* Container only when layout modes matter — CQ selectors target descendants. */
  .measure.open.ready {
    container-type: inline-size;
    container-name: doodle-layout;
  }

  .frame {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .stage {
    position: relative;
    flex: 0 0 auto;
  }

  .panel {
    display: none;
    width: 100%;
    overflow-y: auto;
  }

  .measure.open .panel {
    display: block;
  }

  @media (max-width: 767px) {
    .measure.open .panel {
      max-height: 42vh;
    }
  }

  /* Overlay: shortfall ≤ ⅓ video, not full side-by-side. */
  @container doodle-layout (min-width: calc(var(--panel-w) + 2 * var(--video-w) / 3)) {
    .frame {
      width: fit-content;
      max-width: 100%;
    }

    .panel {
      position: absolute;
      top: var(--board-inset);
      right: 0;
      bottom: var(--audio-h);
      width: var(--panel-w);
      max-height: none;
      overflow-y: auto;
      scrollbar-width: thin;
      scrollbar-color: rgba(128, 128, 128, 0.5) transparent;
      z-index: 5;
    }
  }

  /* Side-by-side: container fits video + panel. */
  @container doodle-layout (min-width: calc(var(--video-w) + var(--panel-w))) {
    .frame {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      width: 100%;
    }

    .panel {
      position: static;
      top: auto;
      right: auto;
      bottom: auto;
      flex: 1 1 0;
      min-width: var(--panel-w);
      max-width: 72ch;
      width: auto;
      max-height: none;
      z-index: auto;
      overflow-y: auto;
    }
  }
</style>
