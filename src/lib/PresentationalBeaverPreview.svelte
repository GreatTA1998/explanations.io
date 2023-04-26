{#if isPopupOpen}
  <PopupHelperProfile
    {helperDoc}
    {classID}
    on:popup-close={() => isPopupOpen = false}
  />
{/if}

<div style={$$props.style}>
  <div on:click={() => isPopupOpen = true} 
    style="display: flex; align-items: center; background-color: #5d0068; cursor: pointer; padding-right: 8px; padding-top: 4px; padding-bottom: 4px;
      border-radius: 4px;
    "
    class="paper-shadow"
  >
    <span class="material-icons" style="font-size: 2rem; margin-left: 4px; margin-right: 4px; color: white;">
      engineering
    </span>

    <div>
      <div>
        <a style="color: white">
        {helperDoc.name}
        </a>
      </div>
      <div style="color: white">{ helperDoc.numOfVideos || 0 } videos, { helperDoc.minutesViewed || 0 } minutes viewed</div>
    </div>
  </div>
</div>

<script>
  import PopupHelperProfile from "$lib/PopupHelperProfile.svelte";

  export let helperDoc
  export let classID

  let isPopupOpen = false
</script>

<style>
  .paper-shadow {
    box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
</style>