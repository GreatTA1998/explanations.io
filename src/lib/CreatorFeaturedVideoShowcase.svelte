<div class="youtube-video-title" style="width: {previewWidth}px;">
  {originalQuestion}
</div>

<div style="width: {previewWidth}px; margin-top: 0.4vw; margin-bottom: 8px; color: rgb(80, 80, 80); display: flex; align-items: center;">
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
          <div on:click={toggleFullscreen(boardDoc)} class="my-round-button" style="margin-right: 0; margin-left: auto;">
            Full View
          </div>
        </VideoFooterInfo>
      </div>
    {/if}
  </FullscreenModule>
</RenderlessListenToBoard>

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

  const previewWidth = 0.28 * window.innerWidth
</script>

<style>
  .youtube-video-title {
		font-size: 20px;
	}

  .my-round-button {
    display: flex; 
    align-items: center; 
    justify-content: center; 
    border-radius: 24px; 
    min-width: 48px; 
    min-height: 16px; 
    padding: 0.5vw; 
    border: 1px solid black;
    cursor: pointer;
	}
</style>