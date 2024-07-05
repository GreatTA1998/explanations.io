{#if video}
  <div 
    class="below-video-section" 
    style="font-size: var(--fs-300); padding: 6px"
  >
    <div style="display: flex; align-items: center;">
      <span class="material-symbols-outlined video-footer-icon">
        hourglass_bottom
      </span>
      <div class="stat-number">
        {video.viewMinutes ? roundedToFixed(video.viewMinutes, 0) : 0} 
      </div>            
    </div>

    <div style="color: black; display: flex; align-items: center;">
      <span class="material-symbols-outlined video-footer-icon" style="font-size: 20px; padding-top: 0px; margin-right: 2px;">
        forum
      </span>
      <div class="stat-number">
        {video.numOfComments || 0}
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
  .stat-number {
    font-size: 12px;
    font-weight: 500;
  }

  .below-video-section {
    display: flex; 
    align-items: center;
    gap: 12px;
  }

  .video-footer-icon {
    font-size: 20px;
  }
</style>