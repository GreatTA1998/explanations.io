<button on:click|stopPropagation={handleServerCardClick}
  class="server-card core-shadow"
  class:red-alert-border={needsTeachers}
>
  <div class="server-name-overlay">
    <div class="server-name-text">
      {serverObj.name}
    </div>
  </div>

  {#if blackboardID}
    <div class="preview-frame">
      <ListenToDoc docPath={`/classes/${serverObj.id}/blackboards/${blackboardID}`} 
        let:theDoc={boardDoc}
      >
        {#if boardDoc}
          {#if boardDoc.isMultiboard}
            <FetchStrokes autoFetchStrokes={false}
              dbPath={`/classes/${serverObj.id}/blackboards/${blackboardID}/slides/${boardDoc.slideIDs[0]}`}
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
              dbPath={`/classes/${serverObj.id}/blackboards/${blackboardID}`}
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
  {:else if thumbnailSrc}
    <img
      class="server-thumb"
      alt=""
      src={thumbnailSrc}
      style="min-width: {thumbnailWidth}px; width: {thumbnailWidth}px; height: {thumbnailWidth * 1/thumbnailAspectRatio}px;"
    />
  {:else}
    <div class="preview-fallback" style="min-width: {thumbnailWidth}px; height: {thumbnailWidth * 1/thumbnailAspectRatio}px;"></div>
  {/if}
</button>

<script>
  import ListenToDoc from '$lib/Renderless/ListenToDoc.svelte'
  import FetchStrokes from '$lib/Renderless/FetchStrokes.svelte'
  import NewHDBlackboard from '$lib/Blackboard/NewHD.svelte'
  import { createEventDispatcher } from 'svelte'
  import { CARD_WIDTH, previewBlackboardID, thumbnailImageURL } from '$lib/NavSideDrawer/serverMenu.js'

  export let serverObj

  const dispatch = createEventDispatcher()

  let thumbnailWidth = CARD_WIDTH
  $: blackboardID = previewBlackboardID(serverObj)
  $: thumbnailSrc = blackboardID ? '' : thumbnailImageURL(serverObj)
  let thumbnailAspectRatio = 1 / 0.7

  $: needsTeachers = serverObj.numOfPrepaidLearners > 0 && !serverObj.numOfTeachers

  function handleServerCardClick () {
    dispatch('pick', serverObj)
  }
</script>


<style lang="scss">
  .server-card {
    position: relative; 
    display: flex; 
    width: 240px; 
    flex: 0 0 240px;
    border-radius: 16px; 
    padding: 0px; 
    overflow: hidden;
    /* Live board: translucent paint over --bg-off-white (readable before thumb loads). */
    background-color: var(--bg-off-white, #f8f9f9);
  }

  .server-card::before {
    content: '';
    position: absolute;
    inset: 0;
    z-index: 0;
    background-color: hsl(0, 0%, 0%, 0.80);
    pointer-events: none;
  }

  .server-name-overlay {
    position: absolute;
    top: 8px;
    left: 16px;
    right: 16px;
    color: rgb(248, 249, 249);
    z-index: 1;
    pointer-events: none;
  }

  .server-name-text {
    color: white;
    font-weight: 600;
  }

  .preview-frame {
    position: relative;
    z-index: 0;
    margin-right: -12px;
    margin-top: -12px;
    margin-bottom: -12px;
    min-width: 240px;
    max-width: 240px;
    /* thumbnailAspectRatio is 1/0.7 → height = width * 0.7 */
    height: calc(240px * 0.7);
    overflow: hidden;
    border-radius: 8px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    background: transparent;
    pointer-events: none;
  }

  .preview-fallback {
    position: relative;
    z-index: 0;
    margin-right: -12px;
    margin-top: -12px;
    margin-bottom: -12px;
    box-sizing: border-box;
    border-top-right-radius: 24px;
    border-bottom-right-radius: 24px;
    background-color: hsl(0, 0%, 0%, 0.80);
    pointer-events: none;
  }

  .server-thumb {
    position: relative;
    z-index: 0;
    display: block;
    object-fit: cover;
    border-radius: 8px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    pointer-events: none;
  }

  .server-card:hover {
    outline: 2px solid #F7C686;
    box-shadow: 0px 18px 36px rgba(0, 0, 0, 0.08);
  }
</style>
