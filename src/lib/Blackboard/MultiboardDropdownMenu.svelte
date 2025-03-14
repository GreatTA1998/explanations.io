<script>
  import Menu from '@smui/menu'
  import List from '@smui/list'
  import { createEventDispatcher } from 'svelte'

  export let boardDoc
  export let roomDoc
  
  let DropdownMenu
  const dispatch = createEventDispatcher()

  function handleDeleteClick() {
    dispatch('delete-multiboard')
    DropdownMenu.setOpen(false)
  }
</script>

<div style="position: relative">
  <button on:click|stopPropagation={() => DropdownMenu.setOpen(true)} class="menu-surface-anchor">
    <span class="material-symbols-outlined" style="font-size: 20px;">
      more_vert
    </span>
  </button>

  <Menu bind:this={DropdownMenu} style="width: 200px">
    <List>
      <button on:click={handleDeleteClick} class="menu-list-item">
        <span class="material-icons" style="color: #d32f2f;">delete_forever</span>
        <span style="color: #d32f2f;">Delete multiboard</span>
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
    flex-wrap: nowrap;
  }

  .menu-list-item:hover {
    background-color: rgb(241, 241, 241);
  }
  
  .menu-surface-anchor {
    background: none;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style> 