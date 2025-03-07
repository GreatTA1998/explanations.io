<script>
  import Menu from '@smui/menu'
  import List from '@smui/list'
  import { createEventDispatcher } from 'svelte'
  import { uploadToYoutube } from '../../helpers/cloudFunctions'

  export let video
  export let creatorName = 'Anonymous'
  
  let DropdownMenu
  let isUploading = false
  let uploadProgress = ''

  const dispatch = createEventDispatcher()

  function handleDeleteClick () {
    dispatch('delete-video')
    DropdownMenu.setOpen(false)
  }

  function handleExportVideoClick () {
    dispatch('export-video')
    DropdownMenu.setOpen(false)
  }

  async function handleUploadToYoutubeClick() {
    if (!video?.webmDownloadURL) return
    
    isUploading = true
    uploadProgress = 'Preparing upload...'
    DropdownMenu.setOpen(false)
    
    try {
      uploadProgress = 'Uploading to YouTube...'
      const result = await uploadToYoutube({
        videoUrl: video.webmDownloadURL,
        title: video.title || 'Explanations.io Video',
        description: 'Video created on Explanations.io',
        creatorName: creatorName
      })
      
      // Notify user of successful upload
      uploadProgress = ''
      alert(`Video successfully uploaded to YouTube!\n\nYou can view it at: ${result.youtubeUrl}`)
      
      // Optionally, you could dispatch an event to notify parent components
      dispatch('youtube-upload-success', { 
        youtubeUrl: result.youtubeUrl,
        videoId: result.videoId
      })
    } catch (error) {
      console.error('Failed to upload to YouTube:', error)
      alert('Failed to upload to YouTube. Please try again later.')
    } finally {
      isUploading = false
      uploadProgress = ''
    }
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
        
        <button on:click={handleUploadToYoutubeClick} class="menu-list-item" disabled={isUploading}>
          <span class="material-icons">upload</span>
          {#if isUploading}
            {uploadProgress || 'Uploading...'}
          {:else}
            Upload to YouTube
          {/if}
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