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
  
  <RenderlessListenToBoard dbPath={boardDbPath}
    let:boardDoc={boardDoc}
  >	
    <UnifiedDoodleVideo
      video={boardDoc}
      videoWidth={previewWidth}
      willHideSliderForPreview={true}
    />
  </RenderlessListenToBoard>
</div>

<script>
  import CreatorChannelCard from '$lib/CreatorChannelCard.svelte'
  import RenderlessListenToBoard from '$lib/RenderlessListenToBoard.svelte'
  import UnifiedDoodleVideo from '$lib/UnifiedDoodleVideo.svelte'
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
</style>