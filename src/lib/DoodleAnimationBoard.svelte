<div class="doodle-animation-board">
  {#if isMultislide}
    <div style="margin-bottom: 8px; width: {canvasWidth}px;">
      <MultiboardSlideChanger
        slideIDs={boardDoc.slideIDs}
        {idxOfFocusedSlide}
        on:click={(e) => idxOfFocusedSlide = e.detail.newIdx}
      />
    </div>
  {/if}

  {#key strokePath}
    <ListenToDoc docPath={slideDocPath} autoListen={isMultislide} let:theDoc={slideDoc}>
      <FetchStrokes dbPath={strokePath} autoFetchStrokes={true} let:strokesArray>
        {#if strokesArray}
          <DoodleAnimation
            {strokesArray}
            {canvasWidth}
            {canvasHeight}
            backgroundImageDownloadURL={(isMultislide ? slideDoc && slideDoc.backgroundImageDownloadURL : boardDoc.backgroundImageDownloadURL) || ''}
            on:revert={revert}
          />
        {:else}
          <div class="loading" style="width: {canvasWidth}px; height: {canvasHeight}px;"></div>
        {/if}
      </FetchStrokes>
    </ListenToDoc>
  {/key}
</div>

<script>
  import DoodleAnimation from '$lib/DoodleAnimation.svelte'
  import FetchStrokes from '$lib/Renderless/FetchStrokes.svelte'
  import ListenToDoc from '$lib/Renderless/ListenToDoc.svelte'
  import MultiboardSlideChanger from '$lib/DoodleVideo/MultiboardSlideChanger.svelte'
  import { revertAnimationToBoard } from '/src/helpers/doodleAnimation.js'
  import { user } from '/src/store.js'

  export let boardDoc
  export let classID
  export let canvasWidth
  export let canvasHeight

  let idxOfFocusedSlide = 0

  $: boardPath = boardDoc.path || `classes/${classID}/blackboards/${boardDoc.id}`
  $: isMultislide = Boolean(boardDoc.isMultiboard && boardDoc.slideIDs && boardDoc.slideIDs.length)
  $: focusedSlideID = isMultislide ? boardDoc.slideIDs[idxOfFocusedSlide] : ''
  $: slideDocPath = isMultislide ? `${boardPath}/slides/${focusedSlideID}` : boardPath
  $: strokePath = isMultislide ? `${boardPath}/slides/${focusedSlideID}` : boardPath

  function revert () {
    revertAnimationToBoard({ boardDoc, userDoc: $user })
  }
</script>

<style>
  .loading {
    background-color: hsl(0, 0%, 0%, 0.8);
  }
</style>
