<!-- TO-DO: show full problem description -->
{#if video}
  <FullscreenModule 
    boardDoc={video} 
    previewWidth={videoWidth}
    let:toggleFullscreen={toggleFullscreen}
    let:canvasWidth={canvasWidth}
    let:canvasHeight={canvasHeight}
    let:isFullscreen={isFullscreen}
  >
    {#if video.isMultiboard}
      <HDMultislideVideo
        {canvasWidth}
        {canvasHeight}
        boardDoc={video}
        classID={quickfixClassIDFrom(video)}
        audioDownloadURL={video.audioDownloadURL}
        timingOfSlideChanges={video.timingOfSlideChanges}
        showEditDeleteButtons={true}
        showSlideChanger={willShowSlideChanger}
        on:six-seconds-elapsed={(e) => incrementViewMinutes(video.id, e.detail.playbackSpeed)}
      />
    {:else}
      <ReusableDoodleVideo
        autoFetchStrokes={false}
        boardDoc={video}
        {canvasWidth}
        {canvasHeight}
        showEditDeleteButtons={false}
        boardDbPath={video.path}
      />
    {/if}

    {#if !isFullscreen}
      <div style="width: {canvasWidth}px">
        <VideoFooterInfo {video}>
          <div 
            on:click={toggleFullscreen} 
            class="my-round-button" 
            style="margin-right: 0; margin-left: auto;"
          >
            Full View
          </div>
        </VideoFooterInfo>
      </div>
    {/if}
  </FullscreenModule>
{/if}

<script>
  import ReusableDoodleVideo from '$lib/ReusableDoodleVideo.svelte'
  import VideoFooterInfo from '$lib/VideoFooterInfo.svelte'
  import FullscreenModule from '$lib/FullscreenModule.svelte'
  import HDMultislideVideo from '$lib/HDMultislideVideo.svelte'
  import OnlineMultislideVideo from '$lib/OnlineMultislideVideo.svelte'

  export let video
  export let videoWidth
  export let willShowSlideChanger = true

  function quickfixClassIDFrom (video) {
    const classID = video.path.split('/')[1]
    return classID
  }

  function incrementViewMinutes (boardID, playbackSpeed) {
    const blackboardRef = doc(getFirestore(), boardsDbPath + boardID)
    updateDoc(blackboardRef, {
      viewMinutes: increment(0.1 * playbackSpeed)
    })
  }
</script>

<style>
  .my-round-button {
    display: flex; 
    align-items: center; 
    justify-content: center; 
    border-radius: 24px; 
    min-width: 48px; 
    min-height: 16px; 
    padding: 4px 8px; 
    border: 2px solid black;
    color: black;
    cursor: pointer;

    font-size: var(--fs-300); 
    font-weight: 600;
	}
</style>
