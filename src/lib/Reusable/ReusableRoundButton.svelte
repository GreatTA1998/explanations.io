{#if isDisabled}
  <div class="reusable-round-button disabled-button-styling">
    <slot> </slot>
  </div>
{:else}
  <button
    on:click
    class="reusable-round-button glow-on-hover ux-low-elevation"
    style="
      color: {textColor}; 
      background-color: {backgroundColor};
      cursor: pointer;  
      border: {isBordered ? '3px solid cyan' : ''};
    "
  >
    <slot> </slot>
  </button> 
{/if}

<script>
  export let backgroundColor = ''
  export let textColor = ''
  export let isBordered = false
  export let isDisabled = false
</script>

<style>
  .reusable-round-button {
    display: flex; 
    align-items: center; 
    padding: 4px 16px;
    border-radius: 999px; 
  }

  .glow-on-hover:hover {
    filter: brightness(105%);
  }

  .disabled-button-styling {
    background-color: grey; 
    color: rgb(100, 100, 100); 
    cursor: default;
  }
</style>