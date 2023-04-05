{#if isPopupOpen}
  <PopupHelperProfile
    {helperDoc}
    {classID}
    on:popup-close={() => isPopupOpen = false}
  />
{/if}

<div style={$$props.style}>
  <div on:click={() => isPopupOpen = true} style="display: flex; align-items: center; background-color: rgb(208 213 207); cursor: pointer; padding-right: 8px;">
    <span class="material-icons" style="font-size: 2rem;">cruelty_free</span>

    <div>
      <div>
        <a>
        {helperDoc.name}
        </a>
      </div>
      <div>{ helperDoc.numOfVideos || 0 } videos, { helperDoc.minutesViewed || 0 } minutes viewed</div>
    </div>
  </div>
</div>

<script>
  import PopupHelperProfile from "$lib/PopupHelperProfile.svelte";

  export let helperDoc
  export let classID

  let isPopupOpen = false
</script>
