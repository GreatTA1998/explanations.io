<button on:click class="my-round-button" class:wide-padding={canvasWidth > TABLET_MIN_WIDTH}>
  <span class="material-symbols-outlined" style="font-size: 20px;">
    {isFullscreen ? 'close_fullscreen' : 'open_in_full'}
  </span>

  {#if canvasWidth > TABLET_MIN_WIDTH}
    <span class="button-text">
      {isFullscreen ? 'Exit' : 'Enter'} full view
    </span>
  {/if}
</button>

<script>
  import { TABLET_MIN_WIDTH } from '/src/helpers/CONSTANTS.js'

  export let isFullscreen
  export let canvasWidth
</script>

<style>
  .my-round-button {
    display: flex; 
    align-items: center; 
    justify-content: center; 
    gap: 4px;

    border-radius: 24px; 
    min-width: 0px; 
    min-height: 16px; 
    padding: 5px;
    border: 1px solid lightgrey;
    color: black;
    cursor: pointer;

    font-size: var(--fs-300); 
    font-weight: 400;

    margin-right: 0; 
    margin-left: auto; 
    height: 32px;
	}

  .wide-padding {
    padding-left: 12px;
    padding-right: 12px;
  }
</style>