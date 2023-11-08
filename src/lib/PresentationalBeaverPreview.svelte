<div style={$$props.style}>
  <!-- background-color: #5d0068; (that's a purple color)-->
  <div on:click={() => goto(`/profile/${classID}/${helperDoc.uid}`)} 
    style="display: flex; align-items: center; cursor: pointer; padding-left: 8px; padding-right: 8px; padding-top: 4px; padding-bottom: 4px;
      border-radius: 4px;
    "
    class="core-shadow"
  >
    <ClassServerMyProfilePicture
      radiusInPixels={20}
      circleBorderColor={$user.beaverProfilePicColor}
    />
    <!-- purple color: #5d0068; -->

    <!-- colors used to be white -->
    <div style="margin-left: 4px;">
      <div>
        <a style="color: black; font-weight: 500;">
        {helperDoc.name}
        </a>
      </div>
      <div style="font-size: 0.9rem;">
        { helperDoc.numOfVideos || 0 } videos, { helperDoc.minutesViewed || 0 } minutes viewed
      </div>
    </div>
  </div>
</div>

<script>
  import ClassServerMyProfilePicture from '$lib/ClassServerMyProfilePicture.svelte'
  import { user } from '/src/store.js'
  import { goto } from '$app/navigation'

  export let helperDoc
  export let classID

  let isPopupOpen = false
</script>

<style>
  /* .paper-shadow {
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  } */
</style>