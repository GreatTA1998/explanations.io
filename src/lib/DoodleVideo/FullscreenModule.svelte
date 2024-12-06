<div class:fullscreen-mode={isFullscreen}>
  <DynamicLayout>
    <div slot="video" style="width: {canvasWidth}px;">
      {#if isFullscreen && $videoCinemaLayout === VIDEO_LAYOUT.TRANSPARENT_OVERLAY && !isDrawerOpen}
        <button on:click={() => isDrawerOpen = true} 
          class="material-symbols-outlined expand-drawer-floating-button" 
        >
          start
        </button>
      {/if}

      <slot {toggleFullscreen} {canvasWidth} {canvasHeight} {isFullscreen}>

      </slot>
    </div>

    <div slot="title-comment-transcript-section" style="height: 100%;">
      {#if isFullscreen}
        {#if isDrawerOpen || $videoCinemaLayout !== VIDEO_LAYOUT.TRANSPARENT_OVERLAY}
          <div transition:fly={{ duration: 300 }} style="flex-basis: 45ch; flex-grow: 1; height: 100%;">
            <CommentsColumn videoDoc={boardDoc}>
              {#if $videoCinemaLayout === VIDEO_LAYOUT.TRANSPARENT_OVERLAY}
                <button on:click={() => isDrawerOpen = false} class="material-symbols-outlined" style="z-index: 10;">
                  keyboard_tab
                </button>
              {/if}

              <p>{boardDoc.description || ''}</p>       
            </CommentsColumn>
          </div>
        {/if}
      {/if}
    </div>
  </DynamicLayout>
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
  let isDrawerOpen = false

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
  .expand-drawer-floating-button {
    z-index: 10; 
    transform: rotateY(180deg); 
    position: absolute; 
    top: var(--board-changer-height); 
    right: 4vw; 
    color: white;
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
