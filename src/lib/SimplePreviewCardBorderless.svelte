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
    class="overall-container"
    style="position: relative; display: flex; min-width: 600px; width: 60%; max-width: 800px; border-radius: {8}px; padding: 12px; overflow: hidden;
  " 
  on:click={() => goto(`/overview/${serverObj.id}`)}
>

  
{#if serverObj.featuredBlackboardID}
  <div style="
    margin-left: -12px; 
    margin-top: -12px; 
    margin-bottom: -12px; 
    min-width: {thumbnailWidth}px; 
    max-width: {thumbnailWidth}px; 
    height: {thumbnailWidth * 1/thumbnailAspectRatio}px; 
    overflow: hidden;
    border-radius: 8px;"
  >
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
  </div>
{:else}
  <div style="margin-left: -12px; margin-top: -12px; margin-bottom: -12px; box-sizing: border-box; border: 1px dashed #000; min-width: {thumbnailWidth}px; height: {thumbnailWidth * 1/thumbnailAspectRatio}px; border-top-left-radius: 0px; border-bottom-left-radius: 0px;">

  </div>
{/if}

<div style="margin-left: 16px;"></div>

  <div class="server-card">
    <div style="display: flex; position: relative; align-items: center;">
      <div style="font-size: 24px; font-weight: 700; font-family: 'Inter'">
        {serverObj.name}
      </div>

      <div style="right: 8px; left: auto; position: absolute;">
        {#if serverObj.syllabusVersion}
          {#if serverObj.syllabusVersion === 'MIT'}
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/MIT_logo.svg/2560px-MIT_logo.svg.png" width="30" height="15">
          {:else if ['RCC', 'Roxbury Community College'].includes(serverObj.syllabusVersion)}
            <img src="https://res.cloudinary.com/doa6grfya/image/upload/v1549032496/bw8nu2czsyxszrpc6age.jpg" width="24" height="24">
          {:else}
            <div class='college-chip'>
              {serverObj.syllabusVersion}
            </div>
          {/if}
        {:else}
          <div class="college-chip">
            cross-college
          </div>
        {/if}
      </div>

    </div>

    <div style="margin-top: 4px;"></div>

    <div style="color: hsl( 223 calc( 1 *6.7%) 20.6% /1); font-size: 16px; height: 36px;">
        {#if serverObj.name === 'Microeconomics'}
          You don't need to memorize a bunch of rules like "MRTS = MRS; AVC > MC". 
          You just need to understand how to maximize f(x, y).
      {:else}
        Learn simpler, alternative 
        ways to understand the class.
      {/if}
    </div>

       <div style="margin-top: 12px;"></div>

    <div style="display: flex; align-items: center;">
      <div style="margin-top: 12px;"></div>

    
    </div>

      <div style="margin-top: 12px;"></div>

      <!-- position: absolute; top: auto; bottom: 20px; -->
    <div style="min-width: 360px; width: 100%; max-width: 500px; color: #2f3030;">
      <div style="display: flex; align-items: center; justify-content: space-between; font-size: 14px; opacity: 1; font-weight: 500">

        
        <div style="display: flex; align-items: center;">
          <span class="material-icons" style="font-size: 1.5rem;">attach_money</span>
          <div style="margin-right: -1px;"></div>
          <div>{serverObj.crowdfundAmount || 0} crowdfunded</div>
        </div>

        <div style="display: flex; align-items: center;" class:teacher-purple={serverObj.numOfTeachers > 0}>
          <!-- brush -->
          <span class="material-symbols-outlined" style="font-size: 1.6rem;">
            draw
          </span>
          <div style="margin-right: 4px;"></div>
          <div>{serverObj.numOfTeachers} teachers</div>
        </div>

        <div style="display: flex; align-items: center;" class:video-orange={serverObj.numOfVideos > 0}>
          <span class="material-symbols-outlined" style="font-size: 1.65rem;">
            smart_display
            </span>
          <!-- <span class="material-icons" style="font-size: 19px; color: white;">smart_display</span> -->
          <div style="margin-right: 4px;"></div>
          <div>{serverObj.numOfVideos} videos</div>
        </div>
        
        <div style="display: flex; align-items: center;">
          <span class="material-symbols-outlined" style="font-size: 1.6rem;">
            sentiment_very_satisfied
            </span>
          <!-- <span class="material-icons" style="font-size: 18px;">mood</span> -->
          <div style="margin-right: 4px;"></div>
          <div>0 subscribers</div>
        </div>
    
      </div>
      <!-- </div> -->
    <!-- END OF FOOTER METADATA FLEXBOX-->
    </div>

    <div style="margin-top: 0px;"></div>
  </div>

</div>

<script>
  export let serverObj

  import Blackboard from '$lib/Blackboard.svelte'
  import RenderlessFetchStrokes from '$lib/RenderlessFetchStrokes.svelte'
  import { goto } from '$app/navigation'
  import CodepenCardShadows from '$lib/CodepenCardShadows.svelte';
  import { assumedCanvasWidth, assumedCanvasHeight } from '/src/store.js'
  import HDBlackboard from '$lib/HDBlackboard.svelte'

  let thumbnailWidth = 240
  let thumbnailAspectRatio = 1 / 0.7

  const highDefinitionWidth = $assumedCanvasWidth
</script>


<style lang="scss">
  .college-chip {
    font-size: 14px; 
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
    
    padding-left: 0px;
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