<script>
  import Menu from '@smui/menu'
  import List from '@smui/list'
  import { createEventDispatcher } from 'svelte'
  import { lightDismiss } from '/src/helpers/lightDismiss.js'
  import { uploadToYoutube } from '../../helpers/cloudFunctions'
  import { isWidelyPlayableVideo } from '../../helpers/recordingMime.js'

  export let video
  export let classID = ''
  export let creatorName = 'Anonymous'

  let DropdownMenu
  let isUploading = false
  let uploadProgress = ''
  let isSharingMp4 = false

  const dispatch = createEventDispatcher()

  function downloadName () {
    return video?.title || video?.description || 'video'
  }

  function standaloneVideoUrl () {
    const id = video && video.id
    const fromPath = video && typeof video.path === 'string' ? video.path.split('/')[1] : ''
    const resolvedClassID = classID || fromPath
    if (!resolvedClassID || !id) return window.location.href
    return `${window.location.origin}/video/${resolvedClassID}:${id}`
  }

  function handleDeleteClick () {
    dispatch('delete-video')
    DropdownMenu.setOpen(false)
  }

  function handleExportVideoClick () {
    dispatch('export-video')
    DropdownMenu.setOpen(false)
  }

  async function handleShareLink () {
    const url = standaloneVideoUrl()
    const title = downloadName()
    DropdownMenu.setOpen(false)

    try {
      if (navigator.share) {
        await navigator.share({ title, url })
        return
      }
    } catch (error) {
      if (error && error.name === 'AbortError') return
    }

    try {
      await navigator.clipboard.writeText(url)
      alert(`Link copied:\n${url}`)
    } catch (error) {
      alert(url)
    }
  }

  async function handleShareMp4 () {
    DropdownMenu.setOpen(false)
    if (!video?.webmDownloadURL) {
      alert('This video has no exported file yet.')
      return
    }
    if (!isWidelyPlayableVideo(video)) {
      alert(mp4UnavailableMessage(video))
      return
    }

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

  function mp4UnavailableMessage (videoDoc) {
    const savedAs = videoDoc.videoContentType || 'WebM (video/webm)'
    return [
      'This video is not a widely playable MP4.',
      `Saved file: ${savedAs}.`,
      'WhatsApp and Line need H.264 + AAC (video/mp4;codecs=avc1,mp4a.40.2).',
      'MediaRecorder only writes that when the browser has those codecs. This project has no transcoder (no ffmpeg, mp4-muxer, or mediabunny), and the YouTube upload sends the file through unchanged.',
      'You can still share the link, download the current file, or use Upload to YouTube.'
    ].join('\n\n')
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

  async function handleUploadToYoutubeClick() {
    if (!video?.webmDownloadURL) return

    isUploading = true
    uploadProgress = 'Preparing upload...'
    DropdownMenu.setOpen(false)

    try {
      uploadProgress = 'Uploading to YouTube...'
      const result = await uploadToYoutube({
        videoUrl: video.webmDownloadURL,
        title: video.title || video.description || 'Explanations.io Video',
        description: 'Video created on Explanations.io',
        creatorName: creatorName
      })

      uploadProgress = ''
      alert(`Video successfully uploaded to YouTube!\n\nYou can view it at: ${result.youtubeUrl}`)

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

<div style="position: relative" use:lightDismiss={() => DropdownMenu?.setOpen(false)}>
  <button type="button" on:click|stopPropagation={() => DropdownMenu.setOpen(true)} class="menu-surface-anchor">
    <span class="material-symbols-outlined" style="font-size: 20px;">
      more_vert
    </span>
  </button>

  <Menu bind:this={DropdownMenu} style="width: 240px">
    <List>
      <button type="button" on:click={handleShareLink} class="menu-list-item">
        <span class="material-icons">link</span>
        Share link
      </button>

      {#if video?.webmDownloadURL}
        <button type="button" on:click={handleShareMp4} class="menu-list-item" disabled={isSharingMp4}>
          <span class="material-icons">share</span>
          {#if isSharingMp4}
            Preparing MP4...
          {:else}
            Share MP4
          {/if}
        </button>

        <button type="button" on:click={handleExportVideoClick} class="menu-list-item">
          <span class="material-icons">download</span>
          Export video
        </button>

        <button type="button" on:click={handleUploadToYoutubeClick} class="menu-list-item" disabled={isUploading}>
          <span class="material-icons">upload</span>
          {#if isUploading}
            {uploadProgress || 'Uploading...'}
          {:else}
            Upload to YouTube
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
