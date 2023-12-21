<div on:click
  class="reusable-round-button"
  style="
    display: flex; 
    align-items: center; 
    padding: 10px 18px 10px 18px; 
    border-radius: 24px; 
    color: {textColor}; 
    background-color: {backgroundColor};
    cursor: pointer;  
  "
>
  <slot>


  </slot>
</div> 

<script>
  import Button, { Label } from '@smui/button'

  export let backgroundColor = ''
  export let textColor = ''
</script>

<style>
  .reusable-round-button:hover {
    filter: brightness(105%);
  }
</style>