{#if video}
  <div 
    class="below-video-section" 
    style="font-size: var(--fs-300); margin-top: 0.2vw; padding: 0.2vw;"
  >
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
  import { roundedToFixed } from '/src/helpers/utility.js'

  export let video
</script>

<style>

  .below-video-section {
    display: flex; align-items: center;
  }

  .video-footer-icon {
    font-size: 16px;
  }
</style>