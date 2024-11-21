<div class="input-container" style="position: relative; width: 100%;">
  <span 
    class="material-icons my-search-icon"
  >
    search
  </span>

  <input 
    bind:this={SearchBar}
    name="search" 
    maxlength="100" 
    placeholder="Search all servers" 
    autocomplete="off" 
    type="text" 
    value={searchVal}
    on:input
    class="my-search-bar"
  >
</div>

<script>
  import { onMount } from "svelte"

  export let searchVal

  let SearchBar

  onMount(() => {
    SearchBar.focus()
  })
</script>

<style>
  .my-search-icon {
    position: absolute;
    top: 4px;
    left: 18px;
    font-size: 32px;
    color: rgb(100, 100, 100);
    /* color: #5D0068; */
  }

  .my-search-bar {
    outline: none;
    border: none;

    padding-left: 40px;
    width: 300px; 
    height: 36px; 
    font-size: 1.4em; 
    box-sizing: border-box;
    border-radius: 32px; 
    padding: 12px;
    padding-left: 70px;
  }
</style>