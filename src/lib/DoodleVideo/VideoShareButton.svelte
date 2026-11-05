<script>
  import { createEventDispatcher, onDestroy } from 'svelte'
  import { lightDismiss } from '/src/helpers/lightDismiss.js'
  import { uploadToYoutube } from '../../helpers/cloudFunctions'
  import { isWidelyPlayableVideo } from '../../helpers/recordingMime.js'

  export let video
  export let classID = ''
  export let creatorName = 'Anonymous'

  let open = false
  let isUploading = false
  let uploadProgress = ''
  let isSharingMp4 = false
  let copied = false
  let copiedTimer

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

  function toggleShare () {
    open = !open
  }

  async function copyVideoLink () {
    const url = standaloneVideoUrl()
    try {
      await navigator.clipboard.writeText(url)
      copied = true
      clearTimeout(copiedTimer)
      copiedTimer = setTimeout(() => { copied = false }, 2000)
    } catch (error) {
      alert(url)
    }
  }

  async function handleShareLink () {
    const url = standaloneVideoUrl()
    const title = downloadName()
    open = false

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
    open = false
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

  function handleExportVideoClick () {
    open = false
    dispatch('export-video')
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

  async function handleUploadToYoutubeClick () {
    if (!video?.webmDownloadURL) return

    isUploading = true
    uploadProgress = 'Preparing upload...'
    open = false

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

  onDestroy(() => clearTimeout(copiedTimer))
</script>

<div
  class="share-anchor"
  use:lightDismiss={{ close: () => { open = false }, always: open }}
>
  <button
    type="button"
    class="share-button"
    aria-expanded={open}
    aria-haspopup="dialog"
    on:click|stopPropagation={toggleShare}
  >
    <span class="material-symbols-outlined share-button-icon">share</span>
    Share
  </button>

  {#if open}
    <div class="share-panel" role="dialog" aria-label="Share">
      <div class="share-heading">
        <span>Share</span>
        <button type="button" class="share-close" aria-label="Close" on:click={() => open = false}>
          <span class="material-icons">close</span>
        </button>
      </div>

      <button type="button" class="share-action" on:click={handleShareLink}>
        <span class="material-icons">link</span>
        Share link
      </button>

      {#if video?.webmDownloadURL}
        <button type="button" class="share-action" on:click={handleShareMp4} disabled={isSharingMp4}>
          <span class="material-icons">share</span>
          {#if isSharingMp4}
            Preparing MP4...
          {:else}
            Share MP4
          {/if}
        </button>

        <button type="button" class="share-action" on:click={handleExportVideoClick}>
          <span class="material-icons">download</span>
          Export video
        </button>

        <button type="button" class="share-action" on:click={handleUploadToYoutubeClick} disabled={isUploading}>
          <span class="material-icons">upload</span>
          {#if isUploading}
            {uploadProgress || 'Uploading...'}
          {:else}
            Upload to YouTube
          {/if}
        </button>
      {/if}

      <div class="share-footer">
        <span class="share-url" title={standaloneVideoUrl()}>{standaloneVideoUrl()}</span>
        <button type="button" class="copy-link" on:click={copyVideoLink}>
          {copied ? 'Copied' : 'Copy'}
        </button>
      </div>
    </div>
  {/if}
</div>

<style>
  .share-anchor {
    position: relative;
  }

  .share-button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    height: 32px;
    padding: 5px 12px;
    border: 1px solid lightgrey;
    border-radius: 24px;
    color: black;
    cursor: pointer;
    font-size: 0.8rem;
    font-weight: 500;
  }

  .share-button[aria-expanded="true"] {
    background-color: rgb(241, 241, 241);
  }

  .share-button-icon {
    font-size: 20px;
  }

  .share-panel {
    position: absolute;
    top: calc(100% + 6px);
    right: 0;
    z-index: 30;
    width: 280px;
    max-width: calc(100vw - 16px);
    background: white;
    border: 1px solid lightgrey;
    border-radius: 12px;
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.08);
    text-align: left;
    overflow: hidden;
  }

  .share-heading {
    display: flex;
    align-items: center;
    padding: 8px 8px 4px 14px;
    font-size: 0.8rem;
    font-weight: 500;
    color: rgb(60, 60, 60);
  }

  .share-close {
    margin-left: auto;
    width: 28px;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    color: rgb(60, 60, 60);
  }

  .share-close:hover {
    background-color: rgb(241, 241, 241);
  }

  .share-close .material-icons {
    font-size: 18px;
  }

  .share-action {
    padding: 4px 14px;
    height: 40px;
    width: 100%;
    display: flex;
    align-items: center;
    column-gap: 8px;
    font-size: 0.8rem;
    color: rgb(60, 60, 60);
    text-align: left;
  }

  .share-action .material-icons {
    font-size: 20px;
  }

  .share-action:hover {
    background-color: rgb(241, 241, 241);
  }

  .share-action:disabled {
    opacity: 0.6;
  }

  .share-footer {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 4px;
    padding: 8px;
    border-top: 1px solid rgb(241, 241, 241);
    background: #f8f9f9;
  }

  .share-url {
    flex: 1;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 0.75rem;
    color: rgb(90, 90, 90);
    user-select: text;
  }

  .copy-link {
    flex: none;
    border: 1px solid lightgrey;
    border-radius: 24px;
    padding: 4px 10px;
    background: white;
    font-size: 0.75rem;
    font-weight: 500;
    color: black;
  }

  .copy-link:hover {
    background-color: rgb(241, 241, 241);
  }
</style>
