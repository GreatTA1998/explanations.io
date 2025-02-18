{#if video}
  <div 
    class="below-video-section" 
    style="font-size: var(--fs-300); padding: 6px"
  >
    <div style="display: flex; align-items: center;">
      <slot>

      </slot>

      <span class="material-symbols-outlined video-footer-icon">
        hourglass_bottom
      </span>
      <div class="stat-number">
        {video.viewMinutes ? roundedToFixed(video.viewMinutes, 0) : 0} 
      </div>            
    </div>
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