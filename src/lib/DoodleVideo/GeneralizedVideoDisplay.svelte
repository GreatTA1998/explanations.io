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
      <MultiboardHD
        {canvasWidth}
        {canvasHeight}
        boardDoc={video}
        classID={quickfixClassIDFrom(video)}
        audioDownloadURL={video.audioDownloadURL}
        timingOfSlideChanges={video.timingOfSlideChanges}
        {showEditDeleteButtons}
        showSlideChanger={!willHideSliderForPreview || isFullscreen}
        propToDeleteVideo={propToDeleteVideo}
        on:six-seconds-elapsed={(e) => incrementViewMinutes(e.detail.playbackSpeed)}
        on:deletion-request-received={() => propToDeleteVideo = false}
      >
         {#if !isFullscreen}
          <div style="margin-left: 0px;">
            <div style="min-width: 240px; margin-right: 8px;">
              <!-- TO-DO: make this dynamic -->
              <CreatorChannelCard
                uid={video.creatorUID}
                firstNameAndKeyInfo={video.creatorName}
                collegeAndYear="MIT '25"
                bio="Top 21 USA(J)MO"
              />
            </div>
          </div>
        {/if}

        <div slot="after" class="button-group-flexbox">
          <VideoFooterInfo {video}/>

          <EurekaButton boardDoc={video}/>

          <button
            on:click={toggleFullscreen} 
            class="my-round-button" 
            style="margin-right: 0; margin-left: auto; height: 32px;"
          >
            <span class="material-symbols-outlined" style="font-size: 20px;">
              {isFullscreen ? 'close_fullscreen' : 'open_in_full'}
            </span>

            {isFullscreen ? 'Exit' : 'Enter'} full view
          </button>

          {#if $user.uid === video.creatorUID || !video.creatorUID}
            <div style="position: relative">
              <button 
                class="menu-surface-anchor" 
                on:click={(e) => {
                  e.stopPropagation();
                  DropdownMenu.setOpen(true);
                }}
              >
                <span class="material-symbols-outlined" style="font-size: 20px;">
                  more_vert
                </span>
              </button>

              <Menu 
                bind:this={DropdownMenu} 
                style="width: 160px"
              >
                <List>
                  <button on:click={handleDeleteClick} class="menu-list-item">
                    <span class="material-icons">delete_forever</span>
                    Delete video
                  </button>
                </List>
              </Menu>
            </div>
          {/if}
        </div>
      </MultiboardHD>
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
  import ReusableDoodleVideo from '$lib/DoodleVideo/LegacyHDReusableSingleBoard.svelte'
  import VideoFooterInfo from '$lib/VideoFooterInfo.svelte'
  import FullscreenModule from '$lib/DoodleVideo/FullscreenModule.svelte'
  import MultiboardHD from '$lib/DoodleVideo/MultiboardHD.svelte'
  import CreatorChannelCard from '$lib/CreatorChannelCard.svelte'
  import Menu from '@smui/menu'
  import List from '@smui/list'

  import { updateFirestoreDoc } from '/src/helpers/crud.js'
  import { increment } from 'firebase/firestore'
  import { user } from '/src/store.js'

  export let video
  export let videoWidth
  export let willHideSliderForPreview = false
  export let showEditDeleteButtons = false

  let propToDeleteVideo = false
  let DropdownMenu

  function handleDeleteClick () {
    propToDeleteVideo = true
    DropdownMenu.setOpen(false)
  }

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
  .menu-list-item {
    padding: 4px 16px; 
    border-radius: 4px; 
    height: 48px;
    width: 100%;

    display: flex; 
    align-items: center;
    column-gap: 6px;
  }

  .menu-list-item:hover {
    background-color: rgb(241, 241, 241);
  }

  .button-group-flexbox {
    display: flex; 
    margin-left: auto; 
    margin-right: 0px; 
    align-items: center;
    column-gap: 8px;
  }

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
