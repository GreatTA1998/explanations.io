<!-- purple #5d0068; background-color: white; -->
<!-- "color: #5d0068; border: 1px solid #5d0068;" -->
<!--green:  #028858; -->
<!-- border: 1px solid hsl(0,0%,0%, 0.80);  -->
<div 
  class="overall-container"
  style="position: relative; display: flex; min-width: 800px; width: 40%; border-radius: 8px; padding: 12px; overflow: hidden;
    
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
      <div style="font-size: 24px; font-weight: 600;">
        {serverObj.name}
        <!-- {#if serverObj.description}
          {serverObj.description}
        {/if} -->
        
      </div>

      <div style="border-radius: 4px; background-color: grey; color: white; display: flex; align-items: center; justify-content: center; position: absolute; right: 8px; left: auto; padding-left: 6px; padding-right: 6px; padding-top: 6px; padding-bottom: 6px;">
       <!-- {serverObj.syllabusVersion} -->
       Cross-college 
      </div>
    </div>

    <div style="margin-top: 8px;"></div>

    <div style="color: #7A7A7A; font-size: 16px;">
        {#if serverObj.name === 'Microeconomics'}
          You don't need to memorize a bunch of rules like "MRTS = MRS; AVC > MC". 
          All you need to understand is the maximization of f(x, y), which laughably takes 10 minutes.
      {:else}
        <!-- No description -->
        This server has no description yet. Usually teachers who sign up
        will provide clear visualization of the class concepts, and try to reframe 
        a simpler way to think about the class especially when it's taught in an overcomplicated way.
      {/if}
      <!-- {serverObj.syllabusVersion || 'Cross-college compatible'} -->
    </div>

    <div style="margin-top: 36px;"></div>

    <div style="display: flex; font-size: 16px;">
    </div>

    <div style="margin-top: 12px;"></div>

    <!-- <hr style="position: absolute; top: auto; bottom: 20px;"> -->

    <div style="position: absolute; top: auto; bottom: 32px; width: 500px; color: #2f3030;">
<!--       
      <hr> -->
      <div style="margin-bottom: 12px;"></div>  

      

      <div style="display: flex; align-items: center; justify-content: space-evenly; font-size: 16px;">
            
        <div style="display: flex;" class:money-green={serverObj.crowdfundAmount > 0}>
          <span class="material-icons" style="font-size: 20px;">payments</span>
          <div style="margin-right: 4px;"></div>
          <div>${serverObj.crowdfundAmount || 0} crowdfund</div>
        </div>
        <div style="margin-right: 8px;"></div>
        
        <div style="display: flex;" class:teacher-purple={serverObj.numOfTeachers > 0}>
          <span class="material-icons" style="font-size: 20px;">brush</span>
          <div style="margin-right: 4px;"></div>
          <div>{serverObj.numOfTeachers} teachers</div>
        </div>

        <div style="margin-right: 8px;"></div>


        <div style="display: flex;" class:video-orange={serverObj.numOfVideos > 0}>
          <span class="material-icons" style="font-size: 20px;">smart_display</span>
          <div style="margin-right: 4px;"></div>
          <div>{serverObj.numOfVideos} videos</div>
        </div>

        
        <div style="margin-right: 8px;"></div>


        <div style="display: flex;" class:question-red={serverObj.numOfUnresolvedQuestions > 0}>
          <span class="material-icons" style="font-size: 18px;">question_mark</span>
          <div style="margin-right: 2px;"></div>
          <div>{serverObj.numOfUnresolvedQuestions} questions</div>
      </div>
  
      </div>
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

  let thumbnailWidth = 260
  let thumbnailAspectRatio = 1 / 0.62
</script>


<style>
  .paper-shadow {
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.19);
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

  .teacher-purple {
    color: #5d0068;
    font-weight: 500;
  }

  .video-orange {
    color: #f78940;
    font-weight: 500;
  }

  .question-red {
    color: red;
    font-weight: 500;
  }

  .overall-container:hover {
    background-color: rgba(106,116,128,.16);
  } 
</style>