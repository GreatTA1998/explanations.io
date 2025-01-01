<button on:click|stopPropagation={handleServerCardClick}
  class="server-card core-shadow"
  class:red-alert-border={needsTeachers}
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
    <div style="display: flex; align-items: center; justify-content: space-around; font-size: 16px; font-weight: 500;">
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
      opacity: 0.8;
    "
    >
      <ListenToDoc docPath={`/classes/${serverObj.id}/blackboards/${serverObj.featuredBlackboardID}`} 
        let:theDoc={boardDoc}
      >
        {#if boardDoc}
          {#if boardDoc.isMultiboard}
            <FetchStrokes autoFetchStrokes={false}
              dbPath={`/classes/${serverObj.id}/blackboards/${serverObj.featuredBlackboardID}/slides/${boardDoc.slideIDs[0]}`}
              let:fetchStrokes={fetchStrokes}
              let:strokesArray={strokesArray}
            > 
              <NewHDBlackboard
                {strokesArray}
                {thumbnailWidth}
                on:intersect={fetchStrokes}
              />
            </FetchStrokes>
          {:else}
            <FetchStrokes autoFetchStrokes={false}
              dbPath={`/classes/${serverObj.id}/blackboards/${serverObj.featuredBlackboardID}`}
              let:fetchStrokes={fetchStrokes}
              let:strokesArray={strokesArray}
            > 
              <NewHDBlackboard
                {strokesArray}
                {thumbnailWidth}
                on:intersect={fetchStrokes}
              />
            </FetchStrokes>
          {/if}
        {/if}
      </ListenToDoc>
    </div>
  {:else}
    <div class="core-shadow" style="opacity: 0.8; background-color: hsl(0,0%,0%, 0.80); margin-right: -12px; margin-top: -12px; margin-bottom: -12px; box-sizing: border-box; border: 1px dashed #000; min-width: {thumbnailWidth}px; height: {thumbnailWidth * 1/thumbnailAspectRatio}px; border-top-right-radius: {8*3}px; border-bottom-right-radius: {8*3}px;">

    </div>
  {/if}
</button>

<script>
  import ListenToDoc from '$lib/Renderless/ListenToDoc.svelte'
  import FetchStrokes from '$lib/Renderless/FetchStrokes.svelte'
  import BaseStatDisplayIcon from '$lib/Reusable/BaseStatDisplayIcon.svelte'
  import NewHDBlackboard from '$lib/Blackboard/NewHD.svelte'
  import { updateFirestoreDoc } from '/src/helpers/crud.js'
  import { user } from '/src/store.js'
  import { handleServerRedirect } from '/src/helpers/everythingElse.js'

  export let serverObj

  let thumbnailWidth = 240
  let thumbnailAspectRatio = 1 / 0.7

  $: needsTeachers = serverObj.numOfPrepaidLearners > 0 && !serverObj.numOfTeachers

  async function handleServerCardClick () {
    handleServerRedirect(serverObj)

    updateFirestoreDoc(`/users/${$user.uid}`, {
      recentSearchedServerID: serverObj.id
    })
  }
</script>


<style lang="scss">
  .server-card {
    position: relative; 
    display: flex; 
    width: 240px; 
    border-radius: 16px; 
    padding: 0px; 
    overflow: hidden;
  }

  .server-card:hover {
    outline: 2px solid #F7C686;
    @extend .high-elevation-cast-shadow;
  }

  .high-elevation-cast-shadow {
    box-shadow: 0px 18px 36px rgba(0, 0, 0, 0.08)
  }

  // might come in handy in the future
  .two-lines-maximum {
    width: 100%;
    display: -webkit-box;
    line-clamp: 2;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical; 
    overflow: hidden; 
  }
</style>