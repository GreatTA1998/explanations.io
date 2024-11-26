<div 
  class:red-alert-border={needsTeachers}
  class="overall-container core-shadow"
  style="position: relative; display: flex; width: 240px; border-radius: {8 * 2}px; padding: 0px; overflow: hidden;" 
  on:click|stopPropagation={handleServerCardClick} on:keydown
>
  <div style="position: absolute; top: 8px; left: 16px; color: rgb(248, 249, 249); z-index: 1;">
    <div style="color: white; font-weight: 600;">
      {serverObj.name}
    </div>
  </div>

  <!-- {#if needsTeachers}
    <div style="background-color: red; color: white; position: absolute; top: 36px; left: 16px; padding: 4px 8px; border-radius: 4px; font-size: 14px;">
      Needs teachers
    </div>
  {/if} -->

  <div style="width: 100%; z-index: 1; position: absolute; bottom: 8px; color: rgb(248, 249, 249);">
    <div style="display: flex; align-items: center; justify-content: space-around; font-size: 16px; opacity: 1.0; font-weight: 500;"
    >
      <BaseStatDisplayIcon
        statName=""
        iconName="person"
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
      opacity: 0.9;
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
    <div class="core-shadow" style="opacity: 0.9; background-color: hsl(0,0%,0%, 0.80); margin-right: -12px; margin-top: -12px; margin-bottom: -12px; box-sizing: border-box; border: 1px dashed #000; min-width: {thumbnailWidth}px; height: {thumbnailWidth * 1/thumbnailAspectRatio}px; border-top-right-radius: {8*3}px; border-bottom-right-radius: {8*3}px;">

    </div>
  {/if}
</div>

<script>
  import RenderlessListenToBoard from '$lib/RenderlessListenToBoard.svelte'
  import RenderlessFetchStrokes from '$lib/RenderlessFetchStrokes.svelte'
  import BaseStatDisplayIcon from '$lib/BaseStatDisplayIcon.svelte'
  import HDBlackboard from '$lib/HDBlackboard.svelte'
  import { updateFirestoreDoc } from '/src/helpers/crud.js'
  import { assumedCanvasWidth, assumedCanvasHeight, user } from '/src/store.js'
  import { handleServerRedirect } from '/src/helpers/everythingElse.js'

  export let serverObj

  let thumbnailWidth = 240
  let thumbnailAspectRatio = 1 / 0.7

  $: needsTeachers = serverObj.numOfPrepaidLearners > 0 && !serverObj.numOfTeachers

  const highDefinitionWidth = $assumedCanvasWidth

  async function handleServerCardClick () {
    handleServerRedirect(serverObj)

    updateFirestoreDoc(`/users/${$user.uid}`, {
      recentSearchedServerID: serverObj.id
    })
  }
</script>


<style lang="scss">
  .two-lines-maximum {
    width: 100%;
    display: -webkit-box;
    line-clamp: 2;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical; 
    overflow: hidden; 
  }

  .high-elevation-cast-shadow {
    box-shadow: 0px 18px 36px rgba(0, 0, 0, 0.08)
  }

  .server-card {
    border-radius: 32px;
    min-width: 200px;
    width: 100%;
    height: fit-content; 
    
    padding-left: 12px;
    padding-top: 6px;
    padding-right: 12px;

     /* Tweek this to change all the children font-sizes */
     font-size: 0.9em;
  }

  .overall-container:hover {
    outline: 2px solid #F7C686;
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
</style>