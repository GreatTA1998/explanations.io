<script>
  import Menu from '@smui/menu'
  import List from '@smui/list'
  import { createEventDispatcher, onMount } from 'svelte'
  import { h264Mp4MimeType, savedFileIsH264Mp4, H264_RECORDING_UNSUPPORTED } from '../../helpers/recordingMime.js'

  export let video

  let DropdownMenu
  let isSharingMp4 = false
  let canRecordH264 = null

  const dispatch = createEventDispatcher()

  onMount(() => {
    canRecordH264 = typeof MediaRecorder !== 'undefined'
      && !!h264Mp4MimeType(type => MediaRecorder.isTypeSupported(type))
  })

  function downloadName () {
    return video?.title || video?.description || 'video'
  }

  function handleDeleteClick () {
    dispatch('delete-video')
    DropdownMenu.setOpen(false)
  }

  async function handleShareMp4 () {
    DropdownMenu.setOpen(false)
    if (!savedFileIsH264Mp4(video) || !video?.webmDownloadURL) return

    isSharingMp4 = true
    try {
      const response = await fetch(video.webmDownloadURL)
      if (!response.ok) {
        throw new Error(`Could not download the video (${response.status})`)
      }
      const blob = await response.blob()
      const filename = `${downloadName()}.mp4`
      const file = new File([blob], filename, { type: 'video/mp4' })
      const canShareFile = navigator.canShare && navigator.canShare({ files: [file] })

      if (canShareFile) {
        await navigator.share({
          files: [file],
          title: downloadName()
        })
      } else {
        downloadBlob(blob, filename)
      }
    } catch (error) {
      if (error && error.name === 'AbortError') return
      console.error('Failed to share MP4:', error)
      alert(`Could not share the MP4. ${error.message || ''}`.trim())
    } finally {
      isSharingMp4 = false
    }
  }

  function downloadBlob (blob, filename) {
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = filename
    document.body.appendChild(link)
    link.click()
    link.remove()
    URL.revokeObjectURL(url)
  }
</script>

<div style="position: relative">
  <button type="button" on:click|stopPropagation={() => DropdownMenu.setOpen(true)} class="menu-surface-anchor">
    <span class="material-symbols-outlined" style="font-size: 20px;">
      more_vert
    </span>
  </button>

  <Menu bind:this={DropdownMenu} style="width: 260px">
    <List>
      {#if canRecordH264 === false}
        <p class="menu-note">{H264_RECORDING_UNSUPPORTED}</p>
      {/if}

      {#if savedFileIsH264Mp4(video)}
        <button type="button" on:click={handleShareMp4} class="menu-list-item" disabled={isSharingMp4}>
          <span class="material-icons">share</span>
          {#if isSharingMp4}
            Preparing MP4...
          {:else}
            Share MP4
          {/if}
        </button>
      {/if}

      <button type="button" on:click={handleDeleteClick} class="menu-list-item">
        <span class="material-icons">delete_forever</span>
        Delete video
      </button>
    </List>
  </Menu>
</div>

<style>
  .menu-note {
    margin: 0;
    padding: 8px 16px;
    font-size: 13px;
    line-height: 1.35;
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

  .menu-list-item:disabled {
    opacity: 0.6;
  }
</style>
