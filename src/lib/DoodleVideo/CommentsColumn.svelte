<div
  class="comments-column"
  class:over-board={overBoard}
  class:glass-surface={overBoard}
  data-look={overBoard ? look : undefined}
  style={overBoard
    ? `--look-hue:${lookTunes[look].h};--look-opacity:${lookTunes[look].a}`
    : undefined}
>
  <slot/>

  <div class="panel-tabs" role="tablist" aria-label="Transcript and comments">
    <button
      type="button"
      role="tab"
      class="my-tab-item"
      class:my-active-tab={activeTab === 'transcript'}
      aria-selected={activeTab === 'transcript'}
      on:click={() => activeTab = 'transcript'}
    >
      <span class="material-symbols-outlined" aria-hidden="true">subtitles</span>
      Transcript
    </button>
    <button
      type="button"
      role="tab"
      class="my-tab-item"
      class:my-active-tab={activeTab === 'comments'}
      aria-selected={activeTab === 'comments'}
      on:click={() => activeTab = 'comments'}
    >
      <span class="material-symbols-outlined" aria-hidden="true">forum</span>
      Comments
    </button>
    {#if overBoard}
      <button
        type="button"
        class="look-cycle"
        title="Overlay look {look}/3 (click to cycle)"
        aria-label="Cycle overlay look, currently {look} of 3"
        on:click={cycleLook}
      >{look}</button>
    {/if}
  </div>

  {#if overBoard}
    <div class="look-tune-row">
      <label>H <input type="range" min="0" max="360" bind:value={lookTunes[look].h} on:input={persistLookTune} aria-label="Overlay hue" /></label>
      <label>A <input type="range" min="0" max="1" step="0.01" bind:value={lookTunes[look].a} on:input={persistLookTune} aria-label="Overlay opacity" /></label>
    </div>
  {/if}

  <div class="panel-body" class:panel-hidden={activeTab !== 'comments'}>
    <ListenToCollection collectionPath={videoDoc.path + '/comments'}
      let:collectionDocs={commentDocs}
    >
      <TextAreaAutoResizing
        value={newInputComment} 
        on:input={(e) => newInputComment = e.detail}
        placeholder="New comment..."
        placeholderColor={lightInk ? 'rgb(60, 60, 60)' : 'rgba(255, 255, 255, 0.6)'}
        color={lightInk ? 'rgb(60, 60, 60)' : '#fff'}
        nonFocusedPlaceholderOpacity={0.5}
      />
      
      <button on:click={createComment} class="submit-button">
        SUBMIT
      </button>

      {#if commentDocs}
        {#each commentDocs as commentDoc (commentDoc.id)}
          <CommentsColumnComment 
            comment={commentDoc} 
            on:comment-delete={() => deleteComment(commentDoc)}
          />
        {/each}
      {/if}
    </ListenToCollection>  
  </div>

  {#if activeTab === 'transcript'}
    <TranscriptPanel {videoDoc} />
  {/if}
</div>

<script>
  import { onMount } from 'svelte'
  import ListenToCollection from '$lib/Renderless/ListenToCollection.svelte'
  import CommentsColumnComment from '$lib/DoodleVideo/CommentsColumnComment.svelte'
  import TranscriptPanel from '$lib/DoodleVideo/TranscriptPanel.svelte'
  import { handleNewCommentEmailNotifications } from '/src/helpers/everythingElse.js'
  import { getRandomID } from '/src/helpers/utility.js'
  import { getFirestore, writeBatch, doc, increment } from 'firebase/firestore'
  import { user } from '/src/store.js'
  import TextAreaAutoResizing from '$lib/Reusable/TextAreaAutoResizing.svelte'
  import { page } from '$app/stores'

  export let videoDoc
  export let overBoard = false

  const LOOK_KEY = 'transcriptOverlayLook'
  const LOOK_TUNE_KEYS = { 1: 'transcriptLook1', 2: 'transcriptLook2', 3: 'transcriptLook3' }
  const LOOK_DEFAULTS = { 1: { h: 0, a: 0.18 }, 2: { h: 0, a: 0.62 }, 3: { h: 46, a: 0.66 } }

  let newInputComment = ''
  let activeTab = 'transcript'
  let openedVideo = ''
  let look = 1
  let lookTunes = {
    1: { ...LOOK_DEFAULTS[1] },
    2: { ...LOOK_DEFAULTS[2] },
    3: { ...LOOK_DEFAULTS[3] }
  }

  // Opening a video shows the transcript. Comments stay one tab away.
  $: if ((videoDoc?.path || '') !== openedVideo) {
    openedVideo = videoDoc?.path || ''
    activeTab = 'transcript'
  }

  // Looks 2–3: dark ink; 1: light ink.
  $: lightInk = !overBoard || look === 2 || look === 3

  onMount(() => {
    const q = new URLSearchParams(location.search).get('look')
      || (location.hash.match(/look=([1-3])/) || [])[1]
    const n = Number(q || localStorage.getItem(LOOK_KEY))
    if (n >= 1 && n <= 3) look = n
    for (const i of [1, 2, 3]) {
      try {
        const t = JSON.parse(localStorage.getItem(LOOK_TUNE_KEYS[i]) || 'null')
        if (t && t.h >= 0 && t.h <= 360) lookTunes[i].h = +t.h
        if (t && t.a >= 0 && t.a <= 1) lookTunes[i].a = +t.a
      } catch (_) {}
    }
  })

  function cycleLook () {
    look = look % 3 + 1
    try { localStorage.setItem(LOOK_KEY, String(look)) } catch (_) {}
  }

  function persistLookTune () {
    const t = lookTunes[look]
    try { localStorage.setItem(LOOK_TUNE_KEYS[look], JSON.stringify({ h: +t.h, a: +t.a })) } catch (_) {}
  }
  
  function createComment () {
    if (!newInputComment) return

    const promises = []
    const db = getFirestore()
    const batch = writeBatch(db)

    const newCommentID = getRandomID()
    const commentRef = doc(db, `${videoDoc.path}/comments/${newCommentID}`)
    batch.set(commentRef, {  
      content: newInputComment,
      isoStringOfDate: new Date().toISOString(),
      creatorUID: $user.uid || '',
      creatorName: $user.name || ''
    })

    const blackboardRef = doc(db, videoDoc.path)
    batch.update(blackboardRef, { numOfComments: increment(1) })

    promises.push(
      batch.commit()
    )

    const { params, url } = $page
    handleNewCommentEmailNotifications({ 
      boardDoc: videoDoc, 
      userDoc: $user, 
      classID: params.class, // don't know why there is no ID in this case...
      questionID: params.questionID,
      commentString: newInputComment,
      linkToQuestion: `${url.origin}/${params.class}/question/${params.questionID}`
    })
    newInputComment = '' 
  }

  async function deleteComment ({ id }) {
    const db = getFirestore()
    const batch = writeBatch(db)
    batch.delete(
      doc(db, `${videoDoc.path}/comments/${id}`)
    )
    batch.update(
      doc(db, videoDoc.path), 
      { numOfComments: increment(-1)}
    )
    await batch.commit()
  }
</script>

<style>
  .comments-column {
    position: relative;
    width: 100%;
    border-radius: 2px;
  }

  /* Side panel fill; over-board overlay uses shared .glass-surface scrim */
  .comments-column:not(.over-board) {
    background-color: hsla(0, 100%, 100%, 0.4);
  }

  .comments-column.over-board {
    border-radius: 0;
    /* Fill the overlay; grow with long transcript so the scrim scrolls with it. */
    min-height: 100%;
  }

  .submit-button {
    border-radius: 24px; 
    border: 1px solid lightgrey;
    padding: 6px 12px;
    background-color: rgba(255, 255, 255, 0.6); 
    width: fit-content;
    font-size: var(--fs-300);
  }

  .panel-tabs {
    display: flex;
    width: 100%;
    align-items: stretch;
  }

  .panel-body {
    padding: 12px;
    display: flex;
    flex-direction: column;
    row-gap: 12px;
  }

  .panel-hidden {
    display: none;
  }

  .my-tab-item {
    font-size: 0.8125rem;
    border-bottom: 2px solid rgb(160, 160, 160);
    padding: 8px 4px;
    color: rgb(160, 160, 160);
    flex-grow: 1;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
  }

  .my-tab-item .material-symbols-outlined {
    font-size: 18px;
  }

  .my-active-tab {
    border-bottom: 2px solid black;
    color: black;
    font-weight: 600;
  }

  .look-cycle {
    flex: 0 0 auto;
    align-self: center;
    margin: 0 6px 0 0;
    min-width: 1.25rem;
    height: 1.25rem;
    padding: 0 4px;
    font-size: 0.65rem;
    line-height: 1;
    color: var(--panel-fg-muted);
    background: transparent;
    border: 0;
    opacity: 0.7;
    cursor: pointer;
  }

  .look-cycle:hover {
    opacity: 1;
    color: var(--panel-fg);
  }

  .look-tune-row {
    display: flex;
    width: 100%;
    align-items: center;
    gap: 8px;
    padding: 2px 6px;
    font-size: 0.6rem;
    color: var(--panel-fg-muted);
    opacity: 0.85;
  }
  .look-tune-row label { display: inline-flex; align-items: center; gap: 3px; }
  .look-tune-row input { width: 4.5rem; height: 1rem; margin: 0; accent-color: var(--panel-fg); }

  .over-board .my-tab-item,
  .over-board .my-active-tab {
    border-bottom: 0;
    color: var(--panel-fg-muted);
    font-weight: 400;
  }

  .over-board .my-active-tab {
    color: var(--panel-fg);
    font-weight: 600;
  }

  .over-board .submit-button {
    color: var(--panel-fg);
    background: transparent;
    border: 0;
  }

  .over-board :global(.copied-from-old-explain-2) {
    color: var(--panel-fg-muted) !important;
  }
</style>
