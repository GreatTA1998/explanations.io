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
  class="overall-container core-shadow cast-shadow"
  style="position: relative; display: flex; min-width: 600px; width: 60%; max-width: 800px; border-radius: {20}px; padding: 12px; overflow: hidden;
    
  " 
  on:click={() => goto(`/overview/${serverObj.id}`)}
>

  
{#if serverObj.featuredBlackboardID}
  <div style="min-width: {thumbnailWidth}px; max-width: {thumbnailWidth}px; height: {thumbnailWidth * 1/thumbnailAspectRatio}px; overflow: hidden; border-radius: 8px;">
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
  <div style="box-sizing: border-box; border: 1px dashed #000; min-width: {thumbnailWidth}px; height: {thumbnailWidth * 1/thumbnailAspectRatio}px; border-radius: 8px;">

  </div>
{/if}

<div style="margin-left: 16px;"></div>

  <div class="server-card" style="">
    <div style="display: flex; position: relative;">
      <div style="font-size: 24px; font-weight: 600; font-family: 'Inter'">
        {serverObj.name}
        <!-- {#if serverObj.description}
          {serverObj.description}
        {/if} -->
        
      </div>
    </div>

    <div style="margin-top: 12px;"></div>

    <div style="color: hsl( 223 calc( 1 *6.7%) 20.6% /1); font-size: 16px;">
        {#if serverObj.name === 'Microeconomics'}
          You don't need to memorize a bunch of rules like "MRTS = MRS; AVC > MC". 
          You just need to understand how to maximize f(x, y).
      {:else}
        Learn simpler, alternative 
        ways to understand the class.
      {/if}
    </div>

       <div style="margin-top: 12px;"></div>

    <div style="display: flex;">
      <div style="margin-top: 12px;"></div>
        {#if serverObj.syllabusVersion}
          <div style="font-size: 12px; border-radius: 4px; background-color: #2E3162; color: white; display: flex; align-items: center; width: fit-content; justify-content: center; right: 8px; top: 2px; left: auto; padding-left: 6px; padding-right: 6px; padding-top: 6px; padding-bottom: 6px;">
            {serverObj.syllabusVersion}
          </div>

          <div style="margin-left: 12px;"></div>
        {/if}
          
        <div style="font-size: 12px; border-radius: 4px; background-color: #A46910; color: white; display: flex; align-items: center; width: fit-content; justify-content: center; right: 8px; top: 2px; left: auto; padding-left: 6px; padding-right: 6px; padding-top: 6px; padding-bottom: 6px;">
          Cross-college 
        </div>
      </div>

    <div style="position: absolute; top: auto; bottom: 20px; width: 460px; color: #2f3030;">
      <div style="display: flex; align-items: center; justify-content: space-between; font-size: 14px; opacity: 1">
        <div style="display: flex;" class:teacher-purple={serverObj.numOfTeachers > 0}>
          <span class="material-icons" style="font-size: 17px;">brush</span>
          <div style="margin-right: 4px;"></div>
          <div>{serverObj.numOfTeachers} teachers</div>
        </div>

        <div style="display: flex;" class:video-orange={serverObj.numOfVideos > 0}>
          <span class="material-icons" style="font-size: 19px;">smart_display</span>
          <div style="margin-right: 4px;"></div>
          <div>{serverObj.numOfVideos} videos</div>
        </div>

        <div style="display: flex;" class:money-green={serverObj.crowdfundAmount > 0}>
          <span class="material-icons" style="font-size: 19px;">credit_card</span>
          <div style="margin-right: 4px;"></div>
          <div>{serverObj.crowdfundAmount || 0} pre-subscribers</div>
        </div>
        
        <div style="display: flex;" class:question-red={serverObj.numOfUnresolvedQuestions > 0}>
          <span class="material-icons" style="font-size: 18px;">question_mark</span>
          <div style="margin-right: 2px;"></div>
          <div>{serverObj.numOfUnresolvedQuestions} questions</div>
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

  let thumbnailWidth = 270
  let thumbnailAspectRatio = 1 / 0.62
</script>


<style lang="scss">
  /* https://uxmovement.substack.com/p/how-to-use-surface-elevation-to-elevate
    We base low, medium and high elevation on this essay.
  */

  .my-low-elevation {
    box-shadow: 1px 1px 1px 1px;
  }

  .overall-container:hover {
    @extend .core-shadow;
  }

  .core-shadow {
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1)
  }

  .cast-shadow {
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.08);
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
    padding-top: 8px;
    padding-left: 0px;
    padding-right: 12px;
    padding-bottom: 4px;
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