<div class="comments-column">
  <slot/>

  <div class="panel-tabs" role="tablist" aria-label="Comments and transcript">
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
  </div>

  <div class="panel-body" class:panel-hidden={activeTab !== 'comments'}>
    <ListenToCollection collectionPath={videoDoc.path + '/comments'}
      let:collectionDocs={commentDocs}
    >
      <TextAreaAutoResizing
        value={newInputComment} 
        on:input={(e) => newInputComment = e.detail}
        placeholder="New comment..."
        placeholderColor="rgb(60, 60, 60)"
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
  import { page } from '$app/stores'

  export let videoDoc

  let newInputComment = ''
  let activeTab = 'comments'
  
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
    width: 100%;
    background-color: hsla(0, 100%, 100%, 0.4);
    border-radius: 2px;
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
</style>