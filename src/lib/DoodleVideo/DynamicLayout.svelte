<div
  class="measure"
  class:open={isDrawerOpen}
  class:ready={videoWidth > 0}
  style="--video-w: {videoWidth || 0}px; --panel-w: {PANEL_WIDTH}px;"
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
  export let videoWidth = 0
  export let isDrawerOpen = false

  const PANEL_WIDTH = 320
</script>

<style>
  .measure { width: 100%; }

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

  /* Side-by-side when container fits video + panel; otherwise stack below. */
  @container doodle-layout (min-width: calc(var(--video-w) + var(--panel-w))) {
    .frame {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      width: 100%;
    }

    .panel {
      flex: 1 1 0;
      min-width: var(--panel-w);
      max-width: 72ch;
      width: auto;
      max-height: none;
      overflow-y: auto;
    }
  }
</style>
