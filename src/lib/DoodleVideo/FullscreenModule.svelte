<div class:fullscreen-mode={isFullscreen}>
  <DynamicLayout>
    <div slot="video">
      <slot {toggleFullscreen} {canvasWidth} {canvasHeight} {isFullscreen}>

      </slot>
    </div>

    <div slot="title-comment-transcript-section" style="height: 100%;">
      {#if isFullscreen}
        {#if !isDrawerClosed}
          <div style="flex-basis: 45ch; flex-grow: 1; height: 100%;">
            <CommentsColumn videoDoc={boardDoc}>
              <p style="color: black;">
                {boardDoc.description}
              </p>       
            </CommentsColumn>
            </div>
        {/if}
      {/if}
    </div>
  </DynamicLayout>

  {#if isFullscreen}
    {#if $videoCinemaLayout === VIDEO_LAYOUT.TRANSPARENT_OVERLAY}
      <button class="material-symbols-outlined overlay-toggle-button"on:click={() => isDrawerClosed = !isDrawerClosed}>
        Toggle
      </button>
    {/if}

    <button on:click={toggleFullscreen(boardDoc)} class="exit-button material-symbols-outlined">
      close
    </button>
  {/if}
</div>

<script>
  import { onMount } from 'svelte'
  import { VIDEO_LAYOUT } from '/src/helpers/dimensions.js'
  import { videoCinemaWidth, videoCinemaLayout } from '/src/store.js'
  import CommentsColumn from '$lib/DoodleVideo/CommentsColumn.svelte'
  import DynamicLayout from '$lib/DoodleVideo/DynamicLayout.svelte'

  export let previewWidth = window.innerWidth * 0.35
  export let boardDoc

  let isFullscreen = false
  let canvasWidth = previewWidth
  let canvasHeight = canvasWidth * 3/4
  let fullscreenWidth = 0
  let isDrawerClosed = false

  $: canvasHeight = canvasWidth * 3/4

  $: {
    if (isFullscreen) canvasWidth = $videoCinemaWidth
    else canvasWidth = previewWidth
  }

  onMount(() => {
    calculateLayout()
  })

  function toggleFullscreen () {
    isFullscreen = !isFullscreen
  }

  function calculateLayout () {
    const minCommentsSectionWidth = 320
    if (0.3 * window.innerWidth > minCommentsSectionWidth) {
      // 68% instead of 70% to take into account that multislide videos take more space
      fullscreenWidth = 0.68 * window.innerWidth
    } else {
      fullscreenWidth = 1.00 * window.innerWidth
    }
  }
</script>

<style>
  .overlay-toggle-button {
    background-color: red;
    position: absolute; 
    top: 1vw; 
    bottom: auto;
    right: 4vw;
    left: auto;
    z-index: 10;   
    font-size: var(--fs-l); 
    background-color: var(--bg-off-white);
  }

  .exit-button {
    position: absolute; 
    top: 1vw; 
    bottom: auto; 
    right: 1vw; 
    left: auto; 
    cursor: pointer; 

    font-size: var(--fs-l); 
    z-index: 10;
    background-color: var(--bg-off-white);
    border-radius: 24px;
  }

  .fullscreen-mode {
    position: fixed;		
    left: 0; 
		top: 0;
		z-index: 7;
		width: 100%;
		height: 100%;
		background-color: rgb(250, 250, 250);
		display: flex;
    flex-wrap: wrap;    
    align-content: start;
	}
</style>
