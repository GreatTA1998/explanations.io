<div class="popup-window" style={$$props.style}>
  <div style="display: flex; align-items: center;">
    <slot name="title">

    </slot>

    <button on:click={() => dispatch('popup-close')} class="material-icons" style="margin-right: 0px; margin-left: auto; color: black; cursor: pointer;">
      close
    </button>
  </div>

  <slot name="popup-content">

  </slot>

  <slot name="popup-buttons">
    <div style="display: flex; margin-left: 4px; margin-bottom: 0px; margin-top: auto">

    </div> 
  </slot></div>
 
<script>
  import { createEventDispatcher, onMount } from 'svelte'

	const dispatch = createEventDispatcher()

  onMount(() => {
    
  })
</script>

<style>
  .popup-window {
    overflow: auto;
    position: fixed; 
    z-index: 10;
    background-color: white; 
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 26px; 

    /* center it within the page */
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;

    /* dimensions */
    height: fit-content;
    min-height: 10vh;
    max-height: 90vh;
    min-width: 380px;
    width: 40vw; 
    max-width: 600px;
    overflow-y: auto;
  }
</style>