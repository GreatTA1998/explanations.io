<div class:fullscreen-mode={isFullscreen}>
  <slot {toggleFullscreen} {canvasWidth} {canvasHeight} {isFullscreen}>

  </slot>

  {#if isFullscreen}
    <span on:click={toggleFullscreen(boardDoc)} class="material-symbols-outlined" 
      style="
      position: absolute; 
      top: 1vw; 
      bottom: auto; 
      right: 1vw; 
      left: auto; 
      cursor: pointer; 
      font-size: var(--fs-l); 
      z-index: 10;
      background-color: white;
      border-radius: 24px;"
    >
      close
    </span>

    <div style="width: 320px; height: fit-content;">
      <CommentsColumn videoDoc={boardDoc}/>
    </div>
  {/if}
</div>

<script>
  import { onMount } from 'svelte'
  import CommentsColumn from '$lib/CommentsColumn.svelte'

  export let previewWidth = window.innerWidth * 0.35
  export let boardDoc

  let isFullscreen = false
  let canvasWidth = previewWidth
  let canvasHeight = canvasWidth * 3/4
  let fullscreenWidth = 0

  $: canvasHeight = canvasWidth * 3/4

  $: {
    if (isFullscreen) canvasWidth = fullscreenWidth
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
      // 65% instead of 70% to take into account that multislide videos take more space
      fullscreenWidth = 0.65 * window.innerWidth
    } else {
      fullscreenWidth = 1.00 * window.innerWidth
    }
  }
</script>

<style>
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
    row-gap: 24px;

    overflow-y: auto;
	}
</style>
