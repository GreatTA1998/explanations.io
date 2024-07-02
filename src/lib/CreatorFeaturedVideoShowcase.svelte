<div style="width: fit-content;">
  <div class="youtube-video-title" style="width: {previewWidth}px;">
    {originalQuestion}
  </div>

  <div style="width: {previewWidth}px; margin: 6px 0px; color: rgb(80, 80, 80); display: flex; align-items: center;">
    Answered by:
    <div on:click={() => goto(`/user/${uid}`)}  style="margin-left: 0.5vw; display: flex; cursor: pointer; align-items: center;">
      <CreatorChannelCard
        {firstNameAndKeyInfo}    
        {collegeAndYear}
        {bio}
      />
    </div>
  </div>

  <RenderlessListenToBoard 
    dbPath={boardDbPath}
    let:boardDoc={boardDoc}
  >	
    <FullscreenModule {boardDoc} {previewWidth}
      let:toggleFullscreen={toggleFullscreen}
      let:canvasWidth={canvasWidth}
      let:canvasHeight={canvasHeight}
      let:isFullscreen={isFullscreen}
    >
      <ReusableDoodleVideo
        {boardDoc}
        {canvasWidth}
        {canvasHeight}
        showEditDeleteButtons={false}
        boardDbPath={boardDbPath}
      />

      {#if !isFullscreen}
        <div style="width: {canvasWidth}px">
          <VideoFooterInfo video={boardDoc}>
            <div on:click={toggleFullscreen(boardDoc)} class="my-round-button"
              style="margin-right: 0; margin-left: auto; font-size: var(--fs-300); font-weight: 600;"
            >
              Full View
            </div>
          </VideoFooterInfo>
        </div>
      {/if}
    </FullscreenModule>
  </RenderlessListenToBoard>
</div>

<script>
  import CreatorChannelCard from '$lib/CreatorChannelCard.svelte'
  import RenderlessListenToBoard from '$lib/RenderlessListenToBoard.svelte'
  import FullscreenModule from '$lib/FullscreenModule.svelte'
  import ReusableDoodleVideo from '$lib/ReusableDoodleVideo.svelte'
  import VideoFooterInfo from '$lib/VideoFooterInfo.svelte'
  import { goto } from '$app/navigation'

  export let originalQuestion = ''
  export let boardDbPath = ''
  export let firstNameAndKeyInfo = '' 
  export let collegeAndYear = ''
  export let bio = ''
  export let uid = ''
  export let previewWidth = 0
</script>

<style>
  .youtube-video-title {
    font-size: var(--fs-s);
    font-weight: 500;
	}

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
	}
</style>