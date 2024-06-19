<div class:fullscreen-mode={isFullscreen} style="outline: 2px solid red;">
  <slot {toggleFullscreen} {canvasWidth} {canvasHeight} {isFullscreen}>

  </slot>

  {#if isFullscreen}
    <span on:click={toggleFullscreen(boardDoc)} class="material-symbols-outlined" 
      style="position: absolute; top: 1vw;  bottom: auto; right: 1vw; left: auto; cursor: pointer; font-size: 2vw;"
    >
      close
    </span>

    <CommentsColumn videoDoc={boardDoc}/>
  {/if}
</div>

<script>
  export let previewWidth = window.innerWidth * 0.72
  export let previewHeight = previewWidth * 3/4
  
  export let boardDoc

  import CommentsColumn from '$lib/CommentsColumn.svelte'

  let canvasWidth = window.innerWidth * 0.72
  let canvasHeight = canvasWidth * 3/4

  let isFullscreen = false

  $: {
    if (isFullscreen) canvasWidth = window.innerWidth * 0.72
    else canvasWidth = window.innerWidth * 0.3
    canvasHeight = canvasWidth * 3/4
  }

  function toggleFullscreen () {
    isFullscreen = !isFullscreen
  }
</script>

<style>
  .fullscreen-mode {
		z-index: 10;
		width: 100%;
		height: 100%;
		background-color: rgb(250, 250, 250);
		position: fixed;
		left: 0; 
		top: 0;
		display: flex;
	}
</style>
