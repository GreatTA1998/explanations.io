<div class={$videoCinemaLayout} 
  style="width: 100%; position: relative;"
  use:trackWidth={exactWidth => availableWidth = exactWidth}
>
  <slot name="video" />

  {#if $videoCinemaLayout === VIDEO_LAYOUT.TRANSPARENT_OVERLAY}
    {#if isDrawerOpen}
      <button on:click={toggleDrawer} 
        class="hide-drawer-button material-symbols-outlined" 
        style="position: absolute; top: 48px; right: 200px; color: rgba(255, 255, 255, 0.7);"
      >
        keyboard_double_arrow_right
      </button>
    {:else}
      <!--  for future display:{video.numOfComments || 0} -->
      <button on:click={toggleDrawer} class="expand-drawer-floating-button material-symbols-outlined">
        forum
      </button>
    {/if}
  {/if}

  <!-- no parent, so that the client can decide whether to render the comments section without any unwanted parent divs -->
  <slot name="comments-section" 
    toggleDrawer={toggleDrawer}
    commentsSectionStyle="display: {isDrawerOpen ? 'block' : 'none'}; {commentsSectionStyle[$videoCinemaLayout]}"
  />
</div>

<script>
  import { VIDEO_LAYOUT } from '/src/helpers/dimensions.js'
  import { videoCinemaLayout, videoPreviewWidth } from '/src/store.js'
  import { trackWidth } from '/src/helpers/actions.js'

  let isDrawerOpen = true
  let availableWidth

  $: determineLayout(availableWidth, $videoPreviewWidth)

  function determineLayout () {
    const { SIDE_BY_SIDE, TRANSPARENT_OVERLAY, MOBILE_VERTICAL } = VIDEO_LAYOUT
    const drawerWidth = 200
    const remainingWidth = availableWidth - $videoPreviewWidth

    if (drawerWidth <= remainingWidth) videoCinemaLayout.set(SIDE_BY_SIDE)
    else if ((drawerWidth - remainingWidth) <= ($videoPreviewWidth / 3)) videoCinemaLayout.set(TRANSPARENT_OVERLAY)
    else videoCinemaLayout.set(MOBILE_VERTICAL)
  }

  const commentsSectionStyle = {
    // used to be width: 25%
    [VIDEO_LAYOUT.TRANSPARENT_OVERLAY]: `
      position: absolute;
      top: 38px;
      right: 0; 
      left: auto;
      width: 200px; 
    `,
    [VIDEO_LAYOUT.SIDE_BY_SIDE]: `
      flex-basis: 0; 
      flex-grow: 1;
      max-width: 54ch;
    `,
    [VIDEO_LAYOUT.MOBILE_VERTICAL]: `
      max-height: 140px;
      overflow-y: auto;
      max-width: 38ch; 
    `
    // max-width: 38ch; is just chosen to quickly satisfy the desktop profile page
  }

  function toggleDrawer () {
    isDrawerOpen = !isDrawerOpen
  }
</script>

<style>
  :global(.side-by-side) {
    display: flex;
  }

  :global(.mobile-vertical) {
    display: flex;
    flex-direction: column;
  }

  .reflect-y-axis {
    transform: rotateY(180deg);
  }

  .expand-drawer-floating-button {
    border: 2px solid rgb(122, 122, 122);
    border-radius: 24px;
    padding: 4px;
    top: 48px; 
    right: 10px;
    z-index: 10; 
    position: absolute; 
    color: rgb(122, 122, 122);
  }
</style>