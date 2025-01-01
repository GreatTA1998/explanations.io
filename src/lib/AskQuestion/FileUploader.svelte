<input
  bind:this={FileUploadButton}
  on:change={(e) => uploadBackground(e)}
  style="display: none" 
  type="file" 
  accept="application/pdf, image/*" 
  multiple
>

<div style="display: flex; column-gap: 8px; align-items: center;">
  <button on:click={() => FileUploadButton.click()} class="upload-button">
    <span class="material-symbols-outlined" style="font-size: 32px; font-weight: 300; ">
      add_photo_alternate
    </span>
  </button>
  
  <span class="helper-text">or press Ctrl+v to paste an image</span>
</div>

<script>
  import { createEventDispatcher, onMount, onDestroy } from 'svelte'

  const dispatch = createEventDispatcher()
  let FileUploadButton

  onMount(() => {
    document.addEventListener('paste', handlePaste)
  })

  onDestroy(() => {
    document.removeEventListener('paste', handlePaste)
  })

  function uploadBackground (e) {
    dispatch('files-attached', e.target.files)
  }

  function handlePaste(e) {
    const items = e.clipboardData?.items
    if (!items) return

    const imageFiles = []
    for (let item of items) {
      if (item.type.indexOf('image') !== -1) {
        const file = item.getAsFile()
        imageFiles.push(file)
      }
    }

    if (imageFiles.length > 0) {
      dispatch('files-attached', imageFiles)
    }
  }
</script>

<style>
  .upload-button {
    /* Reset default button styles */
    border: none;
    background: none;
    padding: 0;
    margin: 0;
    cursor: pointer;

    border-radius: 24px;
    width: 42px;
    height: 42px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(254, 254, 254);
    border: 1px solid #dddcdc;    
  }

  .upload-button:hover {
    background: #e0e0e0;
  }

  /* Optional: style for focus state */
  .upload-button:focus {
    outline: none;
  }

  .helper-text {
    font-size: 12px;
    color: #666;
  }
</style>