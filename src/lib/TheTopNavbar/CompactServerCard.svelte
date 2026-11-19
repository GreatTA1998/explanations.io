<button on:click|stopPropagation={handleServerCardClick}
  class="server-card core-shadow"
>
  <div class="server-name-overlay">
    <div class="server-name-text">{serverObj.name}</div>
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
              <NewHDBlackboard {strokesArray} {thumbnailWidth} on:intersect={fetchStrokes} />
            </FetchStrokes>
          {:else}
            <FetchStrokes autoFetchStrokes={false}
              dbPath={`/classes/${serverObj.id}/blackboards/${blackboardID}`}
              let:fetchStrokes={fetchStrokes}
              let:strokesArray={strokesArray}
            >
              <NewHDBlackboard {strokesArray} {thumbnailWidth} on:intersect={fetchStrokes} />
            </FetchStrokes>
          {/if}
        {/if}
      </ListenToDoc>
    </div>
  {:else if thumbnailSrc}
    <img class="server-thumb" alt="" src={thumbnailSrc} />
  {:else}
    <div class="preview-fallback"></div>
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
  function handleServerCardClick () { dispatch('pick', serverObj) }
</script>

<style>
  .server-card {
    position: relative; display: flex; width: 240px; flex: 0 0 auto; border-radius: 16px;
    padding: 0; overflow: hidden; text-align: left; background-color: var(--bg-off-white, #f8f9f9);
  }
  .server-card::before {
    content: ''; position: absolute; inset: 0; z-index: 0;
    background-color: hsl(0, 0%, 0%, 0.80); pointer-events: none;
  }
  .server-name-overlay {
    position: absolute; top: 8px; left: 16px; right: 16px; color: rgb(248, 249, 249);
    z-index: 1; pointer-events: none;
  }
  .server-name-text { color: white; font-weight: 600; }
  .preview-frame, .preview-fallback, .server-thumb {
    position: relative; z-index: 0; width: 100%; aspect-ratio: 10 / 7; pointer-events: none;
  }
  .preview-frame, .preview-fallback { margin: -12px -12px -12px 0; }
  .preview-frame { overflow: hidden; border-radius: 0 8px 8px 0; background: transparent; }
  .preview-fallback { border-top-right-radius: 24px; border-bottom-right-radius: 24px; background-color: hsl(0, 0%, 0%, 0.80); }
  .server-thumb { display: block; height: auto; object-fit: cover; border-radius: 0 8px 8px 0; }
  .server-card:hover { outline: 2px solid #F7C686; box-shadow: 0px 18px 36px rgba(0, 0, 0, 0.08); }
</style>
