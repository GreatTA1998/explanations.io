<div style={$$props.style}>
  <div on:click
    style="
      padding: 12px;
      align-items: center;
      border-radius: 12px;
      width: 100%;
      max-width: 440px;
      max-height: 360px;
      cursor: pointer;
    "
    class="teacher-card core-shadow"
    class:highlighted={currentTeacherUID === helperDoc.uid}
  >
    <div style="display: flex; align-items: center;">
      <span class="material-symbols-outlined" style="color: black">
        psychology
      </span>

      <a style="color: black; font-weight: 500; margin-left: 6px; font-size: 20px;">
        {helperDoc.name.split(' ')[0]}
      </a>     
    </div>

    <div style="margin-left: auto; margin-top: 12px; margin-right: 2px; color: black; font-size: 12px; max-width: 480px;">
      {helperDoc.bio || ''}
    </div>

    <div style="margin-top: 16px; margin-bottom; 4px; position: relative; background-color: #e4ebe4; height: 4px; width: 100%; border-radius: 4px;">
      <div style="position: absolute; background-color: darkgreen; width: {(numJoined / numNeeded) * 100}%; height: 4px; border-radius: 4px;"></div>
    </div>  

    <li style="font-size: 12px; color: darkgreen; font-weight: 400; margin-top: 4px; margin-right: 0px; margin-left: auto;">
      {numJoined}/{numNeeded} to start teaching group
    </li>

    <div style="display: flex; justify-content: space-between; margin-top: 16px; align-items: center;">
      <li>
        <b></b>    
        <BaseStatDisplayIcon
          iconName="smart_display"
          statName="Videos"
          statValue={helperDoc.numOfVideos || 0}
        />
      </li>

      <li>
        <BaseStatDisplayIcon
          iconName="timer"
          statName="Watch time"
          statValue={(helperDoc.minutesViewed || 0) + ' minutes'}
        />
      </li>

      <li>
        <BaseStatDisplayIcon
          iconName="lightbulb"
          statName="Upvotes"
          statValue={helperDoc.upvotes || 'n'}
        />
      </li>

      <div on:click={() => goto(`/profile/${classID}/${helperDoc.uid}`)} style="font-size: 14px; border-radius: 8px; outline: 2px solid grey; padding: 4px 8px;">
        View full profile
      </div>
    </div>
  </div>
</div>

<script>
  import { goto } from '$app/navigation'
  import BaseStatDisplayIcon from '$lib/BaseStatDisplayIcon.svelte';

  export let helperDoc
  export let currentTeacherUID
  export let classID

  $: numJoined = helperDoc.subscriberUIDs ? helperDoc.subscriberUIDs.length : 0
  $: numNeeded = helperDoc.minGroupSize ? helperDoc.minGroupSize : 1
</script>

<style lang="scss">
  li {
    margin-bottom: 0px;
    display: flex;
    align-items: center;
  }

  .my-icon {
    margin-right: 4px;
  }

  .teacher-card:hover {
    border: 2px solid #F7C686;
    @extend .high-elevation-cast-shadow;
  }

  .highlighted {
    // background-color: rgb(247, 198, 134);
    border: 2px solid #F7C686;
    @extend .high-elevation-cast-shadow;

  }

  .high-elevation-cast-shadow {
    box-shadow: 0px 18px 36px rgba(0, 0, 0, 0.08)
  }
</style>