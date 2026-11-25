<script>
  import { createEventDispatcher, onDestroy } from 'svelte'
  import { isWidelyPlayableVideo } from '../../helpers/recordingMime.js'

  export let video
  export let classID = ''

  let isSharingVideo = false
  let copied = false
  let copiedTimer
  const uid = Math.random().toString(36).slice(2, 9)
  const popoverId = `video-share-${uid}`
  const anchorName = `--video-share-btn-${uid}`
  const dispatch = createEventDispatcher()

  function downloadName () {
    return video?.title || video?.description || 'video'
  }

  function resolvedClassID () {
    const fromPath = video && typeof video.path === 'string' ? video.path.split('/')[1] : ''
    return classID || fromPath
  }

  function standaloneVideoUrl () {
    const id = video && video.id
    const cid = resolvedClassID()
    if (!cid || !id) return typeof window !== 'undefined' ? window.location.href : ''
    return `${window.location.origin}/video/${cid}:${id}`
  }

  function closePopover () {
    document.getElementById(popoverId)?.hidePopover?.()
  }

  async function handleShareLink () {
    const url = standaloneVideoUrl()
    const title = downloadName()
    closePopover()
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

  async function handleShareVideo () {
    closePopover()
    if (!video?.webmDownloadURL) {
      alert('This video has no file yet.')
      return
    }
    if (!isWidelyPlayableVideo(video)) {
      alert([
        'This video is not a widely playable MP4.',
        `Saved file: ${video.videoContentType || 'WebM'}.`,
        'WhatsApp and Line need H.264 + AAC. Share the link or download the file instead.'
      ].join('\n\n'))
      return
    }

    isSharingVideo = true
    try {
      const response = await fetch(video.webmDownloadURL)
      if (!response.ok) throw new Error(`Could not download the video (${response.status})`)
      const blob = await response.blob()
      const filename = `${downloadName()}.mp4`
      const file = new File([blob], filename, { type: 'video/mp4' })
      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        await navigator.share({ files: [file], title: downloadName() })
      } else {
        const url = URL.createObjectURL(blob)
        const link = document.createElement('a')
        link.href = url
        link.download = filename
        document.body.appendChild(link)
        link.click()
        link.remove()
        URL.revokeObjectURL(url)
      }
    } catch (error) {
      if (error && error.name === 'AbortError') return
      console.error('Failed to share video:', error)
      alert(`Could not share the video. ${error.message || ''}`.trim())
    } finally {
      isSharingVideo = false
    }
  }

  function handleDownloadClick () {
    closePopover()
    dispatch('export-video')
  }

  onDestroy(() => clearTimeout(copiedTimer))
</script>

<div class="share-anchor">
  <button
    type="button"
    class="share-button"
    style:anchor-name={anchorName}
    popovertarget={popoverId}
    aria-label="Share"
  >
    <span class="material-symbols-outlined share-button-icon">share</span>
  </button>

  <div
    popover="auto"
    id={popoverId}
    class="share-panel"
    style:position-anchor={anchorName}
    style:position-area="block-end span-inline-end"
    style:position-try-fallbacks="flip-block, flip-inline, flip-inline flip-block"
    role="dialog"
    aria-label="Share"
  >
    <button type="button" class="share-action" on:click={handleShareLink}>
      <span class="material-icons">link</span>
      Share link
    </button>

    {#if video?.webmDownloadURL}
      {#if isWidelyPlayableVideo(video)}
        <button type="button" class="share-action" on:click={handleShareVideo} disabled={isSharingVideo}>
          <span class="material-icons">share</span>
          {isSharingVideo ? 'Preparing…' : 'Share video'}
        </button>
      {/if}

      <button type="button" class="share-action" on:click={handleDownloadClick}>
        <span class="material-icons">download</span>
        Download
      </button>
    {/if}

    <div class="share-footer">
      <span class="share-url" title={standaloneVideoUrl()}>{standaloneVideoUrl()}</span>
      <button type="button" class="copy-link" on:click={copyVideoLink}>
        {copied ? 'Copied' : 'Copy'}
      </button>
    </div>
  </div>
</div>

<style>
  .share-anchor { position: relative; }
  .share-button {
    display: flex; align-items: center; justify-content: center;
    width: fit-content; padding: 5px; border: 1px solid lightgrey; border-radius: 24px;
    color: black; cursor: pointer; font-size: 0.8rem;
  }
  .share-button-icon { font-size: 1.3rem; }
  .share-panel {
    margin: 0; inset: auto; margin-block-start: 4px; width: 260px; max-width: calc(100vw - 16px);
    padding: 0; border: 1px solid lightgrey; border-radius: 12px; background: white;
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.08); text-align: left; overflow: hidden;
  }
  .share-panel:not(:popover-open) { display: none; }
  .share-action {
    padding: 4px 14px; height: 40px; width: 100%;
    display: flex; align-items: center; column-gap: 8px;
    font-size: 0.8rem; color: rgb(60, 60, 60); text-align: left;
  }
  .share-action .material-icons { font-size: 20px; }
  .share-action:hover { background-color: rgb(241, 241, 241); }
  .share-action:disabled { opacity: 0.6; }
  .share-footer {
    display: flex; align-items: center; gap: 8px; margin-top: 4px; padding: 8px;
    border-top: 1px solid rgb(241, 241, 241); background: #f8f9f9;
  }
  .share-url {
    flex: 1; min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
    font-size: 0.75rem; color: rgb(90, 90, 90); user-select: text;
  }
  .copy-link {
    flex: none; border: 1px solid lightgrey; border-radius: 24px;
    padding: 4px 10px; background: white; font-size: 0.75rem; font-weight: 500; color: black;
  }
  .copy-link:hover { background-color: rgb(241, 241, 241); }
</style>
