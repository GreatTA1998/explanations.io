<div
  class="comments-column"
  class:over-board={overBoard}
  class:glass-surface={overBoard}
  data-look={overBoard ? look : undefined}
  >
  <slot/>

  <div class="panel-switch" role="tablist" aria-label="Transcript and comments">
    <button
      type="button"
      role="tab"
      class="switch-btn"
      class:active={activeTab === 'transcript'}
      aria-selected={activeTab === 'transcript'}
      on:click={() => activeTab = 'transcript'}
    >Transcript</button>
    <button
      type="button"
      role="tab"
      class="switch-btn"
      class:active={activeTab === 'comments'}
      aria-selected={activeTab === 'comments'}
      on:click={() => activeTab = 'comments'}
    >Comments</button>
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
  $: if ((videoDoc?.path || '') !== openedVideo) {
    openedVideo = videoDoc?.path || ''
    activeTab = 'transcript'
  }

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
    max-height: inherit;
    min-height: 0;
    overflow: auto;
    border-radius: 2px;
  }

  .comments-column:not(.over-board) {
    background-color: hsla(0, 100%, 100%, 0.4);
  }

  .comments-column.over-board {
    border-radius: 0;
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

  .panel-switch {
    display: flex;
    align-items: center;
    gap: 2px;
    padding: 4px 6px;
  }

  .switch-btn {
    border: 0;
    background: transparent;
    padding: 2px 6px;
    font-size: 0.7rem;
    color: rgb(120, 120, 120);
    cursor: pointer;
  }

  .switch-btn.active {
    color: black;
    font-weight: 600;
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

  .look-cycle {
    flex: 0 0 auto;
    margin-left: auto;
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

  .over-board .switch-btn {
    color: var(--panel-fg-muted);
    font-weight: 400;
  }

  .over-board .switch-btn.active {
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
