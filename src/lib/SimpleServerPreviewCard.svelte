<!-- purple #5d0068; background-color: white; -->
<!-- "color: #5d0068; border: 1px solid #5d0068;" -->
<!--green:  #028858; -->
<div 
  class="overall-container"
  style="display: flex; min-width: 680px; width: 40%; padding: 12px; border-radius: 8px;" 
  on:click={() => goto(`/overview/${serverObj.id}`)}
>
  {#if serverObj.featuredBlackboardID}
    <div style="min-width: {thumbnailWidth}px; max-width: {thumbnailWidth}px; height: {thumbnailWidth * 0.62}px; overflow: hidden; border-radius: 8px;">
      <RenderlessFetchStrokes 
        dbPath={`/classes/${serverObj.id}/blackboards/${serverObj.featuredBlackboardID}`}
        let:fetchStrokes={fetchStrokes}
        let:strokesArray={strokesArray}
        autoFetchStrokes={false}
      > 
        <Blackboard
          {strokesArray}
          canvasWidth={460}
          canvasHeight={460 * 3/4}
          hideToolbar={true}
          on:intersect={fetchStrokes}
        />
      </RenderlessFetchStrokes>
    </div>
  {:else}
    <div style="box-sizing: border-box; border: 1px solid #000; min-width: {thumbnailWidth}px; height: {thumbnailWidth * 0.62}px;">

    </div>
  {/if}

  <div style="margin-left: 16px;"></div>

  <div class="server-card">
    <div style="font-size: 24px; font-weight: 600;">
      {serverObj.name}
      <!-- {#if serverObj.description}
        {serverObj.description}
      {/if} -->
    </div>

    <div style="margin-top: 8px;"></div>

    <div style="color: #7A7A7A; font-size: 16px;">
      {serverObj.syllabusVersion || 'Cross-college compatible'}
    </div>

    <div style="margin-top: 12px;"></div>

    <div style="display: flex; align-items: center; font-size: 16px;">
      <div>{serverObj.numOfTeachers} teachers</div>
      <span class="material-icons" style="font-size: 4px; margin: 12px;">circle</span>
      <div>{serverObj.numOfVideos} videos</div>
    </div>

    <div style="margin-top: 0px;"></div>

    <div style="display: flex; align-items: center; font-size: 16px;">
      <!-- subscribers, crowdfunded, unresolvedQuestions-->
      <!-- <div>{serverObj.totalSubscriptions} subscribers</div>
      <span class="material-icons" style="font-size: 4px; margin: 12px;">circle</span> -->
      <div class:money-green={serverObj.numOfPresubs > 0}>
        {serverObj.numOfPresubs || 0} pre-subscribers
      </div>
      <span class="material-icons" style="font-size: 4px; margin: 12px;">circle</span>
      <div>{serverObj.numOfUnresolvedQuestions} questions</div>
    </div>
  </div>
</div>

<script>
  export let serverObj

  import Blackboard from '$lib/Blackboard.svelte'
  import RenderlessFetchStrokes from '$lib/RenderlessFetchStrokes.svelte'
  import { goto } from '$app/navigation'

  let thumbnailWidth = 260
</script>


<style>
  .paper-shadow {
    box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  .server-card {
    /* Tweek this to change all the children font-sizes */
    font-size: 0.9em;

    border-radius: 32px;
    min-width: 300px;
    width: 100%;
    /* margin-bottom: 20px; */
    padding-top: 8px;
    padding-left: 0px;
    padding-right: 12px;
    padding-bottom: 4px;
    /* margin-left: 8%; */
    height: fit-content;
  }

  .money-green {
    color: #3D8C4F;
    font-weight: 500;
  }

  .overall-container:hover {
    background-color: rgba(106,116,128,.16);
  } 
</style>