<div style="width: fit-content;">
  <div class="youtube-video-title" style="width: {previewWidth}px;">
    {originalQuestion}
  </div>

  <div style="width: {previewWidth}px; margin: 6px 0px; color: rgb(80, 80, 80); display: flex; align-items: center; gap: 8px;">
    Answered by

    <CreatorChannelCard on:click={() => goto(`/user/${uid}`)}
      {firstNameAndKeyInfo}    
      {collegeAndYear}
      {bio}
    />
  </div>
  
  <RenderlessListenToBoard dbPath={boardDbPath} let:boardDoc={boardDoc}>
    <GeneralizedVideoDisplay
      video={boardDoc}
      videoWidth={previewWidth}
      willHideSliderForPreview={true}
    />
  </RenderlessListenToBoard>
</div>

<script>
  import CreatorChannelCard from '$lib/CreatorChannelCard.svelte'
  import RenderlessListenToBoard from '$lib/RenderlessListenToBoard.svelte'
  import GeneralizedVideoDisplay from '$lib/DoodleVideo/GeneralizedVideoDisplay.svelte'
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