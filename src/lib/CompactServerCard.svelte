<div 
  class="overall-container core-shadow"
  style="position: relative; display: flex; width: 240px; border-radius: {8 * 2}px; padding: 0px; overflow: hidden;" 
  on:click={() => goto(`/${serverObj.id}/overview`)}
>
  <div style="position: absolute; top: 8px; left: 16px; color: rgb(248, 249, 249); z-index: 1;">
    <div style="color: white; font-weight: 600;">
      {serverObj.name}
    </div>
  </div>

  <div style="width: 100%; z-index: 1; position: absolute; bottom: 8px; color: rgb(248, 249, 249);">
    <div style="display: flex; align-items: center; justify-content: space-around; font-size: 16px; opacity: 1.0; font-weight: 500;"
    >

      <BaseStatDisplayIcon
        iconName="draw"
        statName=""
        statValue={serverObj.numOfTeachers || 0}
      />

      <BaseStatDisplayIcon
        statName=""
        iconName="smart_display"
        statValue={serverObj.numOfVideos || 0}
      />

      <BaseStatDisplayIcon
        statName=""
        iconName="wb_twilight"
        statValue={serverObj.numOfPrepaidLearners || 0}
      />

      <BaseStatDisplayIcon
        statName=""
        iconName="sentiment_very_satisfied"
        statValue={serverObj.numOfSubscribers || 0}
      />
    </div>
  </div>

  {#if serverObj.featuredBlackboardID}
    <div style="
      margin-right: -12px; 
      margin-top: -12px; 
      margin-bottom: -12px; 
      min-width: {thumbnailWidth}px; 
      max-width: {thumbnailWidth}px; 
      height: {thumbnailWidth * 1/thumbnailAspectRatio}px; 
      overflow: hidden;
      border-radius: 8px;
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
      opacity: 0.95;
      "
    >
      <RenderlessListenToBoard
        dbPath={`/classes/${serverObj.id}/blackboards/${serverObj.featuredBlackboardID}`}
        let:boardDoc={boardDoc}
      >
        {#if boardDoc}
          {#if boardDoc.isMultiboard}
            <RenderlessFetchStrokes 
              dbPath={`/classes/${serverObj.id}/blackboards/${serverObj.featuredBlackboardID}/slides/${boardDoc.slideIDs[0]}`}
              let:fetchStrokes={fetchStrokes}
              let:strokesArray={strokesArray}
              autoFetchStrokes={false}
            > 
              <HDBlackboard
                {strokesArray}
                canvasWidth={highDefinitionWidth * 0.7}
                canvasHeight={highDefinitionWidth * 3/4 * 0.7}
                {thumbnailWidth}
                thumbnailHeight={thumbnailWidth * 3/4}
                hideToolbar={true}
                on:intersect={fetchStrokes}
              />
            </RenderlessFetchStrokes>
          {:else}
            <RenderlessFetchStrokes 
              dbPath={`/classes/${serverObj.id}/blackboards/${serverObj.featuredBlackboardID}`}
              let:fetchStrokes={fetchStrokes}
              let:strokesArray={strokesArray}
              autoFetchStrokes={false}
            > 
              <HDBlackboard
                {strokesArray}
                canvasWidth={highDefinitionWidth * 0.7}
                canvasHeight={highDefinitionWidth * 3/4 * 0.7}
                {thumbnailWidth}
                thumbnailHeight={thumbnailWidth * 3/4}
                hideToolbar={true}
                on:intersect={fetchStrokes}
              />
            </RenderlessFetchStrokes>
          {/if}
        {/if}
      </RenderlessListenToBoard>
    </div>
  {:else}
    <div style="opacity: 0.2; background-color: hsl(0,0%,0%, 0.80); margin-right: -12px; margin-top: -12px; margin-bottom: -12px; box-sizing: border-box; border: 1px dashed #000; min-width: {thumbnailWidth}px; height: {thumbnailWidth * 1/thumbnailAspectRatio}px; border-top-right-radius: {8*3}px; border-bottom-right-radius: {8*3}px;">

    </div>
  {/if}
</div>

<script>
  export let serverObj

  import RenderlessListenToBoard from '$lib/RenderlessListenToBoard.svelte'
  import RenderlessFetchStrokes from '$lib/RenderlessFetchStrokes.svelte'
  import { goto } from '$app/navigation'
  import { assumedCanvasWidth, assumedCanvasHeight } from '/src/store.js'
  import HDBlackboard from '$lib/HDBlackboard.svelte'
  import BaseStatDisplayIcon from '$lib/BaseStatDisplayIcon.svelte'

  let thumbnailWidth = 240
  let thumbnailAspectRatio = 1 / 0.7

  const highDefinitionWidth = $assumedCanvasWidth
</script>


<style lang="scss">
  .two-lines-maximum {
    width: 100%;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical; 
    overflow: hidden; 
  }

  .footer-data-value {
    font-size: 14px;
    opacity: 0.8;
  }

  .footer-data-icon {
    opacity: 0.9
  }

  .college-chip {
    font-size: 12px; 
    font-weight: 700; 
    border: 1px solid rgb(40, 14, 82);
    border-radius: 4px; 
    background-color: transparent; 
    color: rgb(40, 14, 82);   
    display: flex; 
    align-items: center; 
    width: fit-content; 
    justify-content: center; 
    right: 8px; top: 2px; left: auto; 
    padding-left: 6px; 
    padding-right: 6px; 
    padding-top: 3px; 
    padding-bottom: 3px;
    text-transform: uppercase;
  }

  /* https://uxmovement.substack.com/p/how-to-use-surface-elevation-to-elevate
    We base low, medium and high elevation on this essay.
  */

  // SEE image
  // https://www.notion.so/Design-e87b085e3e0c4910b8ef770bb1268dfb?pvs=4#34e8c3917fca4a78b23f869647f452a9
  .my-low-elevation {
    box-shadow: 1px 1px 1px 1px;
  }

  .core-shadow {
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1)
  }

  .cast-shadow {
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.08);
  }

  .high-elevation-cast-shadow {
    box-shadow: 0px 18px 36px rgba(0, 0, 0, 0.08)
  }

  .paper-shadow {
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.2), 1px 1px 1px 1px rgba(0, 0, 0, 0.19);
  }

  .server-card {
    /* Tweek this to change all the children font-sizes */
    font-size: 0.9em;

    border-radius: 32px;
    min-width: 200px;
    width: 100%;
    /* margin-bottom: 20px; */

    // reset the padding
    // margin-top: -12px;
    // margin-bottom: -12px;
    
    padding-left: 12px;
    padding-top: 6px;
    padding-right: 12px;
    /* margin-left: 8%; */
    /* height: 160px; */
    height: fit-content; 
  }

  .money-green {
    color: #3D8C4F;
    font-weight: 500;
  }

  /* .teacher-purple {
    color: #5d0068;
    font-weight: 500;
  } */

  /* .video-orange {
    color: #f78940;
    font-weight: 500;
  } */

  /* .question-red {
    color: red;
    font-weight: 500;
  } */

  .overall-container:hover {
    border: 2px solid #F7C686;
    @extend .high-elevation-cast-shadow;
  }

/* From Codepen */
/* https://codepen.io/mrrain/pen/wvMEbJz */
.card {
  --elevation: 0;
  --epx: calc(var(--elevation) * 1px);
  
  /* these 2 shadows serve as a border for  0-1 elevation    */
  --shadow1: 0 0 1px rgba(0, 0, 0, .1);
  --shadow2: 0 1px 2px rgba(0, 0, 0, .08);
  
  --offset-y: calc(var(--epx) + 1px);
  --blur: calc(var(--epx) * 2);
  --spread: calc(var(--epx) * .3);
  --shadow3: 
      0 var(--offset-y) 
      var(--blur) 
      var(--spread) 
      rgba(0, 0, 0, 0.2);
  
  box-shadow: 
    var(--shadow1),
    var(--shadow2),
    var(--shadow3);
}

/* .card:hover {
  --elevation: calc(var(--elevation) + 4)
} */

/* .card {
  line-height:200px;
  text-align:center;
  background: white;
  border-radius: 4px;
  width: 200px;
  height: 200px;
} */
</style>