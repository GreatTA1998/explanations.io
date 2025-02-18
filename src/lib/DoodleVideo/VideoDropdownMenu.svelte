<script>
  import Menu from '@smui/menu'
  import List from '@smui/list'
  import { createEventDispatcher } from 'svelte'

  export let video
  
  let DropdownMenu

  const dispatch = createEventDispatcher()

  function handleDeleteClick () {
    dispatch('delete-video')
    DropdownMenu.setOpen(false)
  }

  function handleExportVideoClick () {
    dispatch('export-video')
    DropdownMenu.setOpen(false)
  }
</script>

<div style="position: relative">
  <button on:click|stopPropagation={() => DropdownMenu.setOpen(true)} class="menu-surface-anchor">
    <span class="material-symbols-outlined" style="font-size: 20px;">
      more_vert
    </span>
  </button>

  <Menu bind:this={DropdownMenu} style="width: 160px">
    <List>
      {#if video?.webmDownloadURL}
        <button on:click={handleExportVideoClick} class="menu-list-item">
          <a href={video.webmDownloadURL} target="_blank" download={`${video.title || 'video'}.webm`}>
            <span class="material-icons">download</span>
            Export video
          </a>
        </button>
      {/if}
      
      <button on:click={handleDeleteClick} class="menu-list-item">
        <span class="material-icons">delete_forever</span>
        Delete video
      </button>
    </List>
  </Menu>
</div>

<style>
  .menu-list-item {
    padding: 4px 16px; 
    border-radius: 4px; 
    height: 48px;
    width: 100%;

    display: flex; 
    align-items: center;
    column-gap: 6px;
  }

  .menu-list-item:hover {
    background-color: rgb(241, 241, 241);
  }
</style>