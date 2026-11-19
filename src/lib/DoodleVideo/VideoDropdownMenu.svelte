<script>
  import Menu from '@smui/menu'
  import List from '@smui/list'
  import { createEventDispatcher } from 'svelte'

  export let video
  export let classID = ''
  export let creatorName = 'Anonymous'

  const dispatch = createEventDispatcher()
  let DropdownMenu
  const uid = Math.random().toString(36).slice(2, 9)
  const popoverId = `video-share-${uid}`
  const anchorName = `--video-share-btn-${uid}`

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

  function closeShare () {
    document.getElementById(popoverId)?.hidePopover?.()
  }

  async function shareLink () {
    const url = standaloneVideoUrl()
    const title = downloadName()
    closeShare()
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

  function exportVideo () {
    closeShare()
    dispatch('export-video')
  }

  function handleDeleteClick () {
    dispatch('delete-video')
    DropdownMenu.setOpen(false)
  }
</script>

<div class="video-actions" data-creator={creatorName}>
  <button
    type="button"
    class="share-button"
    style:anchor-name={anchorName}
    popovertarget={popoverId}
  >
    <span class="material-symbols-outlined share-button-icon">share</span>
    Share
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
    <button type="button" class="share-action" on:click={shareLink}>
      <span class="material-icons">link</span>
      Share link
    </button>
    {#if video?.webmDownloadURL}
      <button type="button" class="share-action" on:click={exportVideo}>
        <span class="material-icons">download</span>
        Export video
      </button>
    {/if}
  </div>

  <div style="position: relative">
    <button on:click|stopPropagation={() => DropdownMenu.setOpen(true)} class="menu-surface-anchor">
      <span class="material-symbols-outlined" style="font-size: 20px;">
        more_vert
      </span>
    </button>

    <Menu bind:this={DropdownMenu} style="width: 160px">
      <List>
        <button on:click={handleDeleteClick} class="menu-list-item">
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
  .share-button {
    display: flex; align-items: center; justify-content: center; gap: 4px;
    height: 32px; padding: 5px 12px; border: 1px solid lightgrey; border-radius: 24px;
    color: black; cursor: pointer; font-size: 0.8rem; font-weight: 500;
  }
  .share-button-icon { font-size: 20px; }
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
