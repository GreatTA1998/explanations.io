<!-- 
 NOTE: we don't use position relative because we want the fullscreen mode 
  container to be the true parent. 
-->
<div class={$videoCinemaLayout}>
  <slot name="video" />

  {#if $videoCinemaLayout === VIDEO_LAYOUT.TRANSPARENT_OVERLAY}
    {#if !isDrawerOpen}
      <button on:click={() => isDrawerOpen = true} class="expand-drawer-floating-button material-symbols-outlined">
        start
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
  import { videoCinemaLayout } from '/src/store.js'

  let isDrawerOpen = true

  const commentsSectionStyle = {
    [VIDEO_LAYOUT.TRANSPARENT_OVERLAY]: `
      position: absolute;
      top: 38px;
      right: 0; 
      left: auto;
      width: 25%; 
    `,
    [VIDEO_LAYOUT.SIDE_BY_SIDE]: `
      flex-basis: 0; 
      flex-grow: 1;
      max-width: 54ch;
    `,
    [VIDEO_LAYOUT.MOBILE_VERTICAL]: ``
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

  .expand-drawer-floating-button {
    border: 2px solid rgb(122, 122, 122);
    border-radius: 24px;
    padding: 4px;
    right: 12px;
    z-index: 10; 
    transform: rotateY(180deg); 
    position: absolute; 
    top: 48px; 
    color: rgb(156, 156, 156);
  }
</style>