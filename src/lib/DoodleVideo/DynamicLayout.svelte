<div style="position: relative;" class={$videoCinemaLayout}>
  <div class="video">
    <slot name="video" />
  </div>

  <div class="title-comment-transcript-section" style="--title-height: {HEIGHTS.BOARD_CHANGER - padding}px; height: 100%;">
    <slot name="title-comment-transcript-section" />
  </div>
</div>

<script>
  import { videoCinemaLayout } from '/src/store.js'
  import { HEIGHTS } from '/src/helpers/CONSTANTS.js'

  const padding = 16
</script>

<style>
  :global(.side-by-side) {
    display: flex;
  }

  :global(.side-by-side) :global(.title-comment-transcript-section) {
    flex-basis: 0; 
    flex-grow: 1; 
  }

  :global(.transparent-overlay) {
    position: relative;
  }

  :global(.transparent-overlay) :global(.title-comment-transcript-section) {
    position: absolute;
    top: var(--title-height);
    right: 0; 
    left: auto;
    width: 25%; 
    height: 100%;
  } 

  :global(.mobile-vertical) {
    display: flex;
    flex-direction: column;
  }
</style>