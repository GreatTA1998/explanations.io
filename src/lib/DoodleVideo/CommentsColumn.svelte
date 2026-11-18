<div
  class="comments-column"
  class:over-board={overBoard}
  class:glass-surface={overBoard}
  data-look={overBoard ? '1' : undefined}
  >
  <slot/>

  <SubNavTabs
    tabs={panelTabs}
    bind:value={activeTab}
    ariaLabel="Transcript and comments"
    tabbed={true}
    onDark={overBoard}
  />

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
  import ListenToCollection from '$lib/Renderless/ListenToCollection.svelte'
  import CommentsColumnComment from '$lib/DoodleVideo/CommentsColumnComment.svelte'
  import TranscriptPanel from '$lib/DoodleVideo/TranscriptPanel.svelte'
  import { handleNewCommentEmailNotifications } from '/src/helpers/everythingElse.js'
  import { getRandomID } from '/src/helpers/utility.js'
  import { getFirestore, writeBatch, doc, increment } from 'firebase/firestore'
  import { user } from '/src/store.js'
  import TextAreaAutoResizing from '$lib/Reusable/TextAreaAutoResizing.svelte'
  import SubNavTabs from '$lib/Reusable/SubNavTabs.svelte'
  import { page } from '$app/stores'

  export let videoDoc
  export let overBoard = false

  const panelTabs = [
    { id: 'transcript', label: 'transcript' },
    { id: 'comments', label: 'comments' }
  ]

  let newInputComment = ''
  let activeTab = 'transcript'
  let openedVideo = ''
  $: if ((videoDoc?.path || '') !== openedVideo) {
    openedVideo = videoDoc?.path || ''
    activeTab = 'transcript'
  }

  $: lightInk = !overBoard

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
    position: relative; width: 100%; max-height: inherit; min-height: 0; overflow: auto; border-radius: 2px;
  }
  .comments-column:not(.over-board) { background-color: hsla(0, 100%, 100%, 0.4); }
  .comments-column.over-board { border-radius: 0; min-height: 100%; }
  .submit-button {
    border-radius: 24px; border: 1px solid lightgrey; padding: 6px 12px;
    background-color: rgba(255, 255, 255, 0.6); width: fit-content; font-size: var(--fs-300);
  }
  .panel-body { padding: 12px; display: flex; flex-direction: column; row-gap: 12px; }
  .panel-hidden { display: none; }
  .over-board .submit-button { color: var(--panel-fg); background: transparent; border: 0; }
  .over-board :global(.copied-from-old-explain-2) { color: var(--panel-fg-muted) !important; }
</style>
