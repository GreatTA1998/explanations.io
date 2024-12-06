<div class:fullscreen-mode={isFullscreen}>
  <DynamicLayout>
    <div slot="video">
      <slot {toggleFullscreen} {canvasWidth} {canvasHeight} {isFullscreen}>

      </slot>
    </div>

    <div slot="title-comment-transcript-section" style="height: 100%;">
      {#if isFullscreen}
        {#if !isDrawerClosed}
          <div transition:fly={{ duration: 300 }} style="flex-basis: 45ch; flex-grow: 1; height: 100%;">
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
      <button on:click={() => isDrawerClosed = !isDrawerClosed}
        class="material-symbols-outlined overlay-toggle-button" 
        style="transform: {isDrawerClosed ? 'rotateY(180deg)' : 'rotateY(0deg)'}"
      >  
        { isDrawerClosed ? 'start' :'keyboard_tab'}
      </button>
    {/if}

    <button on:click={toggleFullscreen(boardDoc)} class="exit-button material-symbols-outlined">
      close
    </button>
  {/if}
</div>

<script>
  import { onMount } from 'svelte'
  import { fly } from 'svelte/transition'
  import { VIDEO_LAYOUT } from '/src/helpers/dimensions.js'
  import { videoCinemaWidth, videoCinemaLayout } from '/src/store.js'
  import CommentsColumn from '$lib/DoodleVideo/CommentsColumn.svelte'
  import DynamicLayout from '$lib/DoodleVideo/DynamicLayout.svelte'

  export let previewWidth = window.innerWidth * 0.35
  export let boardDoc

  let isFullscreen = false
  let canvasWidth = previewWidth
  let canvasHeight = canvasWidth * 3/4
  let isDrawerClosed = false

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
  .overlay-toggle-button {
    position: absolute; 
    top: calc(var(--board-changer-height) - 12px + 1vw); 
    bottom: auto;
    right: 1vw;
    left: auto;
    z-index: 10;   
    font-size: var(--fs-l); 

    background-color: hsla(0, 100%, 100%, 0.7); /* used to be var(--bg-off-white); */
    border-radius: 24px;
    padding: 4px;
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
