{#if boardDoc}
  <RenderlessFetchStrokes dbPath={boardDbPath}
    let:fetchStrokes={fetchStrokes}
    autoFetchStrokes
    let:strokesArray={strokesArray}
  >
    <div use:lazyCallable={fetchStrokes} 
      style={`width: ${canvasWidth}px; height: ${canvasHeight + 40}px; position: relative`}
    >
      <DoodleVideo 
        {canvasWidth}
        {canvasHeight}
        {strokesArray} 
        audioDownloadURL={boardDoc.audioDownloadURL}
        backgroundImageDownloadURL={boardDoc.backgroundImageDownloadURL}
      > 
      </DoodleVideo>
    </div>
  </RenderlessFetchStrokes>
{/if}

<script>
  import { maxAvailableWidth, maxAvailableHeight } from '../store.js'
  import DoodleVideo from '$lib/DoodleVideo.svelte'
  import RenderlessListenToBoard from '$lib/RenderlessListenToBoard.svelte'
  import RenderlessFetchStrokes from '$lib/RenderlessFetchStrokes.svelte'
  import { lazyCallable } from '../helpers/actions.js'

  export let boardDoc
  export let boardDbPath = '' // 
  export let canvasWidth = maxAvailableWidth
  export let canvasHeight = maxAvailableHeight
</script>