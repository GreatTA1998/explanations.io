<!-- purple #5d0068; background-color: white; -->
<!-- "color: #5d0068; border: 1px solid #5d0068;" -->
<!--green:  #028858; -->
<!-- border: 1px solid hsl(0,0%,0%, 0.80);  -->
<!-- 
<CodepenCardShadows/> -->
  <!-- class=card style=--elevation:1 -->

  <!-- class:my-low-elevation card -->
  <!-- style:--elevation: 0;  -->
  <div 
    class="overall-container core-shadow"
    style="position: relative; display: flex; min-width: 760px; width: 60%; max-width: 1000px; border-radius: {8 * 3}px; padding: 12px; overflow: hidden;
  " 
    on:click={() => goto(`/${serverObj.id}/overview`)}
  >

  <div class="server-card">
    <div style="display: flex; position: relative; align-items: center;">
      <div style="font-size: 24px; font-weight: 700;">
        {serverObj.name}
      </div>
    </div>

    <div style="margin-top: 12px;"></div>

    <div class="two-lines-maximum" style="color: rgb(80, 80, 80); font-size: 16px; height: 40px; max-height: 42px; font-weight: 400; opacity: 0.96;">
      {#if serverObj.description}
        {serverObj.description}
      {:else if serverObj.name === 'Microeconomics'}
          You don't need to memorize a bunch of rules like "MRTS = MRS; AVC > MC". 
          You just need to understand how to maximize f(x, y).
      {:else}
        An open server where anyone can ask questions and teach through blackboard videos
      {/if}
    </div>

      <div style="margin-top: 24px;"></div>

      <!-- position: absolute; top: auto; bottom: 20px; -->
    <div style="min-width: 380px; width: 100%; max-width: 500px; color: rgb(30, 30, 30); margin-left: -6px;">
      <div style="display: flex; align-items: center; justify-content: space-between; font-size: 16px; opacity: 1.0; font-weight: 500; 
        padding-left: -12px;"
      >
        <div style="display: flex; align-items: center;" class:teacher-purple={serverObj.numOfTeachers > 0}>
          <!-- brush -->
          <span class="material-symbols-outlined footer-data-icon" style="font-size: 1.45rem;">
            draw
          </span>
          <div style="margin-right: 4px;"></div>
          <div class="footer-data-value">{serverObj.numOfTeachers || 0} teachers</div>
        </div>

        <div style="display: flex; align-items: center;" class:video-orange={serverObj.numOfVideos > 0}>
          <span class="material-symbols-outlined footer-data-icon" style="font-size: 1.60rem; ">
            smart_display
            </span>
          <div style="margin-right: 4px;"></div>
          <div class="footer-data-value">{serverObj.numOfVideos} videos</div>
        </div>

        <div style="display: flex; align-items: center;">
          <span class="material-symbols-outlined footer-data-icon" style="font-size: 1.5rem; ">
            wb_twilight
            </span>
          <div style="margin-right: 4px;"></div>
          
          <div class="footer-data-value">{serverObj.numOfPrepaidLearners || 0} prepaid learners</div>
        </div>
        
        <div style="display: flex; align-items: center;">
          <span class="material-symbols-outlined footer-data-icon" style="font-size: 1.5rem;">
            sentiment_very_satisfied
            </span>
          <div style="margin-right: 4px;"></div>
          <div class="footer-data-value">{serverObj.numOfSubscribers || 0} subscribers</div>
        </div>
      </div>
    <!-- END OF FOOTER METADATA FLEXBOX-->
    </div>

    <div style="margin-top: 0px;"></div>
  </div>


  <!-- The total padding from card to left and card to thumbnail should both be 24px; -->
  <div style="margin-left: 12px;"></div>

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
      border-bottom-left-radius: 0;"
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
    <div style="margin-right: -12px; margin-top: -12px; margin-bottom: -12px; box-sizing: border-box; border: 1px dashed #000; min-width: {thumbnailWidth}px; height: {thumbnailWidth * 1/thumbnailAspectRatio}px; border-top-right-radius: {8*3}px; border-bottom-right-radius: {8*3}px;">

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
    min-width: 340px;
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