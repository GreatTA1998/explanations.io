{#if $drawerWidth === 0}
  <button on:click={() => drawerWidth.set(WIDTHS.DRAWER_EXPANDED)} 
    class="material-icons expand-collapse-button" 
    style="font-size: 3rem;"
  >
    start
  </button>
{:else}   
  <!-- transform: rotateY(180deg) -->
  <button on:click={() => drawerWidth.set(0)} 
    class="material-icons expand-collapse-button" 
    style="font-size: 2rem;"
  >
    keyboard_double_arrow_left
  </button>
{/if}

<script>
  import { drawerWidth } from '../store.js'
  import { WIDTHS } from '../helpers/CONSTANTS.js'
</script>

<style>
  /* 
    sticky positioning creates a poor experience
    because it overlaps with important control buttons e.g. 2x speed toggle of a video, 
    depending on the scroll position

    static positioning is flawed but we bias towards not changing things when we're unsure
  */
  .expand-collapse-button {
    width: fit-content;
    padding: 0px 2px;
    border-radius: 8px;

    z-index: 1;

    cursor: pointer;
    color: rgb(100, 100, 100);
  }
</style>