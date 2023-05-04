{#if $drawerWidth === 0}
  <Button on:click={() => drawerWidth.set(DRAWER_EXPANDED_WIDTH)} style="margin-right: 16px; margin-top: 12px; position: sticky; top: 12px; left: 0px; padding-left: 0px; padding-right: 0px; z-index: 10;">
    <span class="material-icons" style="font-size: 3rem;">
      start
    </span>
  </Button>  
{:else}   
  <Button on:click={() => drawerWidth.set(0)} style="position: sticky; top: 12px; left: 0px; margin-right: 0px; margin-top: 12px; margin-left: auto; padding-left: 0px; padding-right: 0px; z-index: 10;">
    <span class="material-icons" style="font-size: 3rem; transform: rotateY(180deg)" >
      keyboard_tab
    </span>
  </Button>
{/if}

<script>
  import { drawerWidth } from '../store.js'
  import Button from '@smui/button'
  import { DRAWER_EXPANDED_WIDTH } from '../helpers/CONSTANTS.js'
</script>