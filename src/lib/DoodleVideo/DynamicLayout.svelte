<div
  class="measure"
  class:open={isDrawerOpen}
  class:ready={videoWidth > 0}
  class:layout-stack={layoutMode === 'stack'}
  class:layout-overlay={layoutMode === 'overlay'}
  class:layout-side={layoutMode === 'side'}
  style="--video-w: {videoWidth || 0}px; --panel-w: {PANEL_WIDTH}px; --board-inset: {boardInset}px; --audio-h: {HEIGHTS.AUDIO_SLIDER}px;"
  use:observeInset={{ videoWidth, isDrawerOpen }}
>
  <div class="frame">
    <div class="stage" style="width: {videoWidth ? videoWidth + 'px' : 'auto'};">
      <slot name="video" />
    </div>
    <div class="panel">
      <slot name="comments-section" />
    </div>
  </div>
</div>

<script>
  import { HEIGHTS } from '/src/helpers/CONSTANTS.js'

  export let videoWidth = 0
  export let isDrawerOpen = false

  const PANEL_WIDTH = 320
  let boardInset = 0
  let layoutMode = 'stack'

  // Measure .measure width for layout mode + board top inset for overlay alignment.
  // Chromium does not resolve CSS var() inside @container conditions, so mode is JS-driven.
  function observeInset (node, params) {
    const measure = () => {
      const { videoWidth: vw, isDrawerOpen: open } = params || {}
      const width = node.getBoundingClientRect().width
      let nextMode = 'stack'
      if (open && vw > 0) {
        const overlayMin = PANEL_WIDTH + (2 * vw) / 3
        const sideMin = vw + PANEL_WIDTH
        if (width >= sideMin) nextMode = 'side'
        else if (width >= overlayMin) nextMode = 'overlay'
      }
      if (nextMode !== layoutMode) layoutMode = nextMode

      const frame = node.querySelector('.frame')
      const board = node.querySelector('.board-surface')
      const next = board && frame
        ? Math.max(0, Math.round(board.getBoundingClientRect().top - frame.getBoundingClientRect().top))
        : 0
      if (next !== boardInset) boardInset = next
    }
    measure()
    const ro = new ResizeObserver(() => requestAnimationFrame(measure))
    ro.observe(node)
    const t1 = setTimeout(measure, 50)
    const t2 = setTimeout(measure, 300)
    return {
      update (nextParams) {
        params = nextParams
        measure()
      },
      destroy () { ro.disconnect(); clearTimeout(t1); clearTimeout(t2) }
    }
  }
</script>

<style>
  .measure { width: 100%; }

  .frame {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .stage { position: relative; flex: 0 0 auto; }

  .panel {
    display: none;
    width: 100%;
    overflow-y: auto;
  }

  .measure.open .panel { display: block; }

  @media (max-width: 767px) {
    .measure.open .panel { max-height: 42vh; }
  }

  /*
   * Overlay only when shortfall ≤ ⅓ video and not full side-by-side.
   * Twitch scrim: semi-transparent dark fill, sharp edges, no blur (opacity ~0.5).
   */
  .measure.layout-overlay .frame {
    width: fit-content;
    max-width: 100%;
  }

  .measure.layout-overlay .panel {
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
    --panel-fg: #fff;
    --panel-fg-muted: rgba(255, 255, 255, 0.72);
    --comment-ink: #fff;
    --comment-placeholder: rgba(255, 255, 255, 0.6);
    background: hsla(0, 8%, 11%, 0.5);
    color: var(--panel-fg);
    border: 0;
    outline: none;
    box-shadow: none;
  }

  .measure.layout-overlay .panel :global(.comments-column) {
    background: transparent;
    min-height: 100%;
    border-radius: 0;
    color: inherit;
  }
  .measure.layout-overlay .panel :global(.sub-nav-tab) {
    color: var(--panel-fg-muted);
    border-bottom-color: rgba(180, 180, 180, 0.45);
  }
  .measure.layout-overlay .panel :global(.sub-nav-tab:hover) {
    background: rgba(255, 255, 255, 0.06);
    color: var(--panel-fg);
  }
  .measure.layout-overlay .panel :global(.sub-nav-tab.active) {
    color: var(--panel-fg);
    border-bottom-color: orange;
  }
  .measure.layout-overlay .panel :global(.submit-button) {
    color: var(--panel-fg);
    background: transparent;
    border: 0;
  }
  .measure.layout-overlay .panel :global(.copied-from-old-explain-2) {
    color: var(--panel-fg-muted) !important;
  }

  /* Side-by-side: panel height tracks stage; scroll inside. */
  .measure.layout-side .frame {
    display: grid;
    grid-template-columns: auto minmax(var(--panel-w), min(72ch, 1fr));
    width: 100%;
  }

  .measure.layout-side .panel {
    overflow-y: auto;
    height: 0;
    min-height: 100%;
  }
</style>
