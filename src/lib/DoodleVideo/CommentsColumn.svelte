<div
  class="comments-column"
  class:over-board={overBoard}
  class:glass-surface={overBoard}
  data-look={overBoard ? look : undefined}
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

  let newInputComment = ''
  let activeTab = 'transcript'
  let openedVideo = ''
  let look = 1

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
  })

  function cycleLook () {
    look = look % 3 + 1
    try { localStorage.setItem(LOOK_KEY, String(look)) } catch (_) {}
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
