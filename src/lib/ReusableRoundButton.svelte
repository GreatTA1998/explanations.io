{#if isDisabled}
  <div class="reusable-round-button disabled-button-styling">
    <slot> </slot>
  </div>
{:else}
  <div 
    on:click
    class="reusable-round-button glow-on-hover"
    style="
      color: {textColor}; 
      background-color: {backgroundColor};
      cursor: pointer;  
      border: {isBordered ? '3px solid cyan' : ''};
    "
  >
    <slot> </slot>
  </div> 
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
    width: fit-content;
    justify-content: center;
    align-items: center; 
    padding: 10px 18px 10px 18px; 
    border-radius: 24px; 
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