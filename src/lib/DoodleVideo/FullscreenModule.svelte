<!-- Conditions for success -->
 <!-- 
  1. No DOM destroyed, causing layout shift and a slight delay for the fullscreen transition => CSS hotswap
  2. Toggle button and drawer states aren't distributed strangely across components
  3. The drawer isn't rendered when it isn't fullscreen, thereby blocking elements behind it (which was the original bug we tried to fix this morning)
 -->

<div 
  class:fullscreen-mode={isFullscreen} 
  style="position: {isFullscreen ? 'fixed' : 'relative'}; margin-right: -12px;"
>
  <DynamicLayout>
    <slot slot="video" {toggleFullscreen} {canvasWidth} {canvasHeight} {isFullscreen}>
      <!-- VIDEO GOES HERE -->
    </slot>

    <!-- In the future, the comments should be decoupled from this component -->
    <div slot="comments-section" 
      class:hidden={!isFullscreen} 
      let:commentsSectionStyle={commentsSectionStyle}
      let:toggleDrawer={toggleDrawer}
      style={commentsSectionStyle}
    >
      {#if $videoCinemaLayout === VIDEO_LAYOUT.TRANSPARENT_OVERLAY}
        <button on:click={toggleDrawer}
          class="hide-drawer-button material-symbols-outlined"
        >
          start
        </button>
      {/if}

      <CommentsColumn videoDoc={boardDoc}>
        {#if isFullscreen}
          <p>{boardDoc.description || ''}</p>       
        {/if}
      </CommentsColumn>
    </div>
  </DynamicLayout>
</div>

<script>
  import { onMount } from 'svelte'
  import { videoCinemaWidth, videoCinemaLayout } from '/src/store.js'
  import { VIDEO_LAYOUT } from '/src/helpers/dimensions.js'
  import CommentsColumn from '$lib/DoodleVideo/CommentsColumn.svelte'
  import DynamicLayout from '$lib/DoodleVideo/DynamicLayout.svelte'

  export let previewWidth = window.innerWidth * 0.35
  export let boardDoc

  let isFullscreen = false
  let canvasWidth = previewWidth

  $: canvasHeight = canvasWidth * 3/4

  $: {
    if (isFullscreen) canvasWidth = $videoCinemaWidth
    else canvasWidth = previewWidth
  }

  onMount(() => {})

  function toggleFullscreen () {
    isFullscreen = !isFullscreen
  }
</script>

<style>
  .hide-drawer-button {
    z-index: 10; 
    position: absolute; 
    top: 12px; 
    left: 6px;
    color: rgb(100, 100, 100);
  }

  .hidden {
    display: none;
  }

  .fullscreen-mode {
    position: fixed;		
    left: 0; 
		top: 0;
		z-index: 7;
		width: 100vw;
		height: 100%;
		background-color: rgb(250, 250, 250);
		display: flex;
    flex-wrap: wrap;    
    align-content: start;
	}
</style>
