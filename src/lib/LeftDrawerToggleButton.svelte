{#if $drawerWidth === 0}
  <span on:click={() => drawerWidth.set(DRAWER_EXPANDED_WIDTH)} 
    class="material-icons expand-collapse-button" 
    style="font-size: 3rem;"
  >
    start
  </span>
{:else}   
  <span on:click={() => drawerWidth.set(0)} 
    class="material-icons expand-collapse-button" 
    style="font-size: 3rem; transform: rotateY(180deg)"
  >
    keyboard_tab
  </span>
{/if}

<script>
  import { drawerWidth } from '../store.js'
  import { DRAWER_EXPANDED_WIDTH } from '../helpers/CONSTANTS.js'
</script>

<style>
  .expand-collapse-button {
    width: fit-content;
    padding: 0px 2px;
    border-radius: 8px;

    z-index: 1;
    /* 
      position: sticky; 
      top: 12px; 
      left: 0px;  
    */
    margin-top: 12px; 

    cursor: pointer;
    color: rgb(100, 100, 100);
  }
</style>