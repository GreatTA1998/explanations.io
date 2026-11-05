<script>
  import Menu from '@smui/menu'
  import List from '@smui/list'
  import { createEventDispatcher } from 'svelte'
  import { lightDismiss } from '/src/helpers/lightDismiss.js'
  import VideoShareButton from '$lib/DoodleVideo/VideoShareButton.svelte'

  export let video
  export let classID = ''
  export let creatorName = 'Anonymous'

  let DropdownMenu

  const dispatch = createEventDispatcher()

  function handleDeleteClick () {
    dispatch('delete-video')
    DropdownMenu.setOpen(false)
  }
</script>

<div class="video-actions">
  <VideoShareButton
    {video}
    {classID}
    {creatorName}
    on:export-video
    on:youtube-upload-success
  />

  <div style="position: relative" use:lightDismiss={() => DropdownMenu?.setOpen(false)}>
    <button type="button" on:click|stopPropagation={() => DropdownMenu.setOpen(true)} class="menu-surface-anchor">
      <span class="material-symbols-outlined" style="font-size: 20px;">
        more_vert
      </span>
    </button>

    <Menu bind:this={DropdownMenu} style="width: 160px">
      <List>
        <button type="button" on:click={handleDeleteClick} class="menu-list-item">
          <span class="material-icons">delete_forever</span>
          Delete video
        </button>
      </List>
    </Menu>
  </div>
</div>

<style>
  .video-actions {
    display: flex;
    align-items: center;
    column-gap: 8px;
  }

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
