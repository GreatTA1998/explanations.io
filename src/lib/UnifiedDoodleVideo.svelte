<!-- 
  TO-DO:
    - Re-introduce ability to toggle videos as free vs paid
    - Re-introduce ability to re-arrange videos
    - Re-introduce ability for nano questions
    - Re-introduce ability to share video as a link
    - Display the creator card somewhere
-->
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
        {showEditDeleteButtons}
        showSlideChanger={!willHideSliderForPreview || isFullscreen}
        on:six-seconds-elapsed={(e) => incrementViewMinutes(e.detail.playbackSpeed)}
      >
         {#if !isFullscreen}
          <div style="margin-left: 0px;">
            <div style="min-width: 240px; margin-right: 8px;">
              <!-- TO-DO: make this dynamic -->
              <CreatorChannelCard
                firstNameAndKeyInfo={video.creatorName}
                collegeAndYear="MIT '25"
                bio="Top 21 USA(J)MO"
              />
            </div>
          </div>
        {/if}

        <div slot="after" 
          style="
            display: flex; 
            margin-left: auto; 
            margin-right: 0px; 
            align-items: center;
            column-gap: 8px;
          "
        >
  
          <VideoFooterInfo {video}/>

          <div
            on:click={toggleFullscreen} on:keydown
            class="my-round-button" 
            style="margin-right: 0; margin-left: auto; height: 24px;"
          >
            <span class="material-symbols-outlined" style="font-size: 20px;">
              open_in_full
            </span>

            Full View
          </div>

          <EurekaButton boardDoc={video}/>
        </div>
      </HDMultislideVideo>
    {:else}
      <ReusableDoodleVideo
        autoFetchStrokes={false}
        boardDoc={video}
        {canvasWidth}
        {canvasHeight}
        {showEditDeleteButtons}
        boardDbPath={video.path}
        on:six-seconds-elapsed={(e) => incrementViewMinutes(e.detail.playbackSpeed)}
      />
    {/if}
  </FullscreenModule>
{/if}

<script>
  import EurekaButton from '$lib/EurekaButton.svelte'
  import ReusableDoodleVideo from '$lib/ReusableDoodleVideo.svelte'
  import VideoFooterInfo from '$lib/VideoFooterInfo.svelte'
  import FullscreenModule from '$lib/FullscreenModule.svelte'
  import HDMultislideVideo from '$lib/HDMultislideVideo.svelte'
  import CreatorChannelCard from '$lib/CreatorChannelCard.svelte'

  import { updateFirestoreDoc } from '/src/helpers/crud.js'
  import { increment } from 'firebase/firestore'

  export let video
  export let videoWidth
  export let willHideSliderForPreview = false
  export let showEditDeleteButtons = false

  function quickfixClassIDFrom (video) {
    const classID = video.path.split('/')[1]
    return classID
  }

  function incrementViewMinutes (playbackSpeed) {
    updateFirestoreDoc(video.path, {
      viewMinutes: increment(0.1 * playbackSpeed)
    })
  }
</script>

<style>
  .my-round-button {
    display: flex; 
    align-items: center; 
    justify-content: center; 
    gap: 4px;

    border-radius: 24px; 
    min-width: 0px; 
    min-height: 16px; 
    padding: 4px 8px; 
    border: 1px solid lightgrey;
    color: black;
    cursor: pointer;

    font-size: var(--fs-300); 
    font-weight: 400;
	}
</style>
