<script>
  import { onMount } from "svelte"
  import { createEventDispatcher } from 'svelte'

  export let searchVal

  let SearchBar
  let isFocused = false
  let dispatch = createEventDispatcher()

  $: {
    setTimeout(() => {
      dispatch('focus-change', isFocused)
    }, 100)
  } 

  onMount(() => {
    // SearchBar.focus()
  })
</script>

<div style="position: relative;">
  <span class="material-icons my-search-icon">
    search
  </span>

  <!-- on:input on its own doesn't work -->
  <input 
    bind:this={SearchBar}
    name="search" 
    maxlength="100" 
    placeholder="Find server..." 
    autocomplete="off" 
    type="text" 
    value={searchVal}
    on:input={(e) => dispatch('input', e.target.value)}
    on:focus={() => isFocused = true}  
    on:blur={() => isFocused = false}    
    class="my-search-bar"
  >
</div>

<style>
  .my-search-icon {
    position: absolute;
    top: 4px;
    left: 18px;
    font-size: 32px;
    color: rgb(100, 100, 100);
  }

  .my-search-bar {
    outline: none;
    border: none;

    padding-left: 40px;
    width: 240px; 
    height: 36px; 
    font-size: 1.4em; 
    box-sizing: border-box;
    border-radius: 32px; 
    padding: 12px;
    padding-left: 70px;
  }

  @media (max-width: 768px) {
    .my-search-bar {
      width: 172px;
      padding-left: 40px;
      font-size: 1.2rem;
    }

    .my-search-icon {
      font-size: 24px; 
      top: 6px;
      left: 12px;
    }
  }
</style>