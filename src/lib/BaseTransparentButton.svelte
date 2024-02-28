<div class="transparent-button" {...$$props} on:click>
  <slot>
    
  </slot>
</div>

<style>
  .transparent-button {
    background: rgba(120, 120, 120, 0.2); 
    border-radius: 4px; 
    color: white; 
    margin-left: 6px; 
    margin-top:0px; 
    padding: 6px;
    cursor: pointer;
  }
</style>