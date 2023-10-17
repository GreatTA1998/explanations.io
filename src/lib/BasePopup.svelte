<div class="popup-window" style={$$props.style}>
  <div style="display: flex; align-items: center; margin-left: 10px; margin-right: 10px; margin-top: 10px;">
    <slot name="title">

    </slot>

    <span on:click={() => dispatch('popup-close')} class="material-icons" style="margin-right: 0; margin-left: auto; color: black;">
      close
    </span>
  </div>

  <slot name="popup-content">

  </slot>

  <slot name="popup-buttons">
    <div style="display: flex; margin-left: 4px; margin-bottom: 0px; margin-top: auto">

    </div> 
  </slot></div>
 
<script>
  import { createEventDispatcher, onMount } from 'svelte'

  export let width = 500

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
    border-radius: 8px; 

    /* center it within the page */
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;

    /* dimensions */
    width: 300px;
    height: fit-content;
    min-height: 10vh;
    max-height: 90vh;
    min-width: 33vw; 
    overflow-y: auto;
  }
</style>