<div on:click
  class="reusable-round-button"
  style="
    display: flex; 
    width: fit-content;
    justify-content: center;
    align-items: center; 
    padding: 10px 18px 10px 18px; 
    border-radius: 24px; 
    color: {textColor}; 
    background-color: {backgroundColor};
    cursor: pointer;  
    border: {isBordered ? '3px solid cyan' : ''};
  "
>
  <slot>


  </slot>
</div> 

<script>

  export let backgroundColor = ''
  export let textColor = ''
  export let isBordered = false
</script>

<style>
  .reusable-round-button:hover {
    filter: brightness(105%);
  }
</style>