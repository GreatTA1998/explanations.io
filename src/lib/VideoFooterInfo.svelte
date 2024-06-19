{#if video}
  <div class="below-video-section" style="font-size: 0.8vw; margin-top: 0.2vw; padding: 0.2vw;">
    <div style="color: black; display: flex; align-items: center;">
      <span class="material-symbols-outlined video-footer-icon">
        hourglass
      </span>
      <div style="margin-left: 4px;">
        {video.viewMinutes ? roundedToFixed(video.viewMinutes, 0): 0} minutes viewed
      </div>            
    </div>

    <div style="margin-left: 24px;"></div>

    <div style="color: black; display: flex;">
      <span class="material-symbols-outlined video-footer-icon">
        forum
      </span>
      <div style="margin-left: 4px;">
        {video.numOfComments || 0} comments
      </div>
    </div>

    <slot>

    </slot>
  </div>
{/if}

<script>
  import { goto } from '$app/navigation'
  import { roundedToFixed } from '/src/helpers/utility.js'

  export let video

  function createRedirectURL (video) {
    const classID = video.path.split('/')[1]
    const blackboardID = video.path.split('/')[3]
    return '/video/' + classID + ':' + blackboardID
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
    padding: 0.5vw; 
    border: 1px solid black;
    cursor: pointer;
  }

  .below-video-section {
    display: flex; align-items: center;
  }

  .video-footer-icon {
    font-size: 16px;
  }
</style>