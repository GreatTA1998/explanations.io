<!-- 
  TO-DO:
    - Re-introduce ability to toggle videos as free vs paid
    - Re-introduce ability to re-arrange videos
    - Re-introduce ability for nano questions
    - Re-introduce ability to share video as a link
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
      <MultiboardHD boardDoc={video}
        {canvasWidth}
        {canvasHeight}
        {classID}
        audioDownloadURL={video.audioDownloadURL}
        timingOfSlideChanges={video.timingOfSlideChanges}
        showSlideChanger={!willHideSliderForPreview || isFullscreen}
        propToDeleteVideo={propToDeleteVideo}
        on:six-seconds-elapsed={(e) => incrementViewMinutes(e.detail.playbackSpeed)}
        on:deletion-request-received={() => propToDeleteVideo = false}
      >
        {#if willDisplayCreatorCard}
          <div style="min-width: 240px; margin-right: 8px;">
            <!-- TO-DO: make this dynamic -->
            <CreatorChannelCard
              uid={video.creatorUID}
              firstNameAndKeyInfo={video.creatorName}
              collegeAndYear="MIT '25"
              bio="Top 21 USA(J)MO"
            />
          </div>
        {/if}

        <div slot="after" class="button-group-flexbox">
          <VideoFooterInfo {video} />

          <EurekaButton boardDoc={video} {canvasWidth} />

          <ToggleFullscreenButton on:click={toggleFullscreen}
            isFullscreen={isFullscreen} 
            {canvasWidth}
          />

          {#if $user.uid === video.creatorUID || !video.creatorUID}
            <VideoDropdownMenu 
              on:delete-video={() => propToDeleteVideo = true} 
            />
          {/if}
        </div>
      </MultiboardHD>
    {:else}
      <LegacyHDReusableSingleBoard
        autoFetchStrokes={false}
        boardDoc={video}
        {canvasWidth}
        {canvasHeight}
        {showEditDeleteButtons}
        boardDbPath={video.path}
        {classID}
        on:six-seconds-elapsed={(e) => incrementViewMinutes(e.detail.playbackSpeed)}
      />
    {/if}
  </FullscreenModule>
{/if}

<script>
  import VideoDropdownMenu from '$lib/DoodleVideo/VideoDropdownMenu.svelte'
  import ToggleFullscreenButton from '$lib/DoodleVideo/ToggleFullscreenButton.svelte'
  import EurekaButton from '$lib/DoodleVideo/EurekaButton.svelte'
  import LegacyHDReusableSingleBoard from '$lib/DoodleVideo/LegacyHDReusableSingleBoard.svelte'
  import VideoFooterInfo from './VideoFooterInfo.svelte'
  import FullscreenModule from '$lib/DoodleVideo/FullscreenModule.svelte'
  import MultiboardHD from '$lib/DoodleVideo/MultiboardHD.svelte'
  import CreatorChannelCard from '$lib/DoodleVideo/CreatorChannelCard.svelte'

  import { updateFirestoreDoc } from '/src/helpers/crud.js'
  import { increment } from 'firebase/firestore'
  import { user } from '/src/store.js'

  export let video
  export let videoWidth
  export let willDisplayCreatorCard = true
  export let willHideSliderForPreview = false
  export let showEditDeleteButtons = false
  export let classID

  let propToDeleteVideo = false

  function incrementViewMinutes (playbackSpeed) {
    updateFirestoreDoc(video.path, {
      viewMinutes: increment(0.1 * playbackSpeed)
    })
  }
</script>

<style>
  .button-group-flexbox {
    display: flex; 
    margin-left: auto; 
    margin-right: 0px; 
    align-items: center;
    column-gap: 8px;
  }
</style>
