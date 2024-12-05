<div class="comments-column">
  <div style="padding: 12px;">
    <slot/>
  </div>

  <div style="display: flex; margin-bottom: 2vw; width: 100%; justify-content: space-between;">
    <!-- Transcript  -->
    <div class="my-tab-item">
      <span class="material-symbols-outlined" style="cursor: not-allowed;">
        translate
      </span>
    </div>      
    <!-- Comments -->
    <div class="my-tab-item"class:my-active-tab={true}  style="margin-bottom: 0; margin-top: auto;" >
      <span class="material-symbols-outlined" style="cursor: pointer;">
        forum
      </span>
    </div>
  </div>

  <div style="padding: 12px;">
    <RenderlessListenToCollection
      collectionPath={videoDoc.path + '/comments'}
      let:listenToCollection={listenToCollection}  
      let:collectionDocs={commentDocs}
      autoListen={true}
    >
      <TextAreaAutoResizing
        value={newInputComment} 
        on:input={(e) => newInputComment = e.detail}
        placeholder="New comment..."
      />
      
      <button on:click={createComment}>SUBMIT</button>

      {#if commentDocs}
        {#each commentDocs as commentDoc}
          <CommentsColumnComment 
            comment={commentDoc} 
            on:comment-delete={() => deleteComment(commentDoc)}
          />
        {/each}
      {/if}
    </RenderlessListenToCollection>  
  </div>
</div>

<script>
  import RenderlessListenToCollection from '$lib/RenderlessListenToCollection.svelte'
  import CommentsColumnComment from '$lib/DoodleVideo/CommentsColumnComment.svelte'
  import { handleNewCommentEmailNotifications } from '/src/helpers/everythingElse.js'
  import { getRandomID, displayDate } from '/src/helpers/utility.js'
  import { getFirestore, writeBatch, doc, increment } from 'firebase/firestore'
  import { user } from '/src/store.js'
  import TextAreaAutoResizing from '$lib/TextAreaAutoResizing.svelte'
  import { page } from '$app/stores'

  export let videoDoc

  let newInputComment = ''
  
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

    const { params } = $page
    handleNewCommentEmailNotifications({ 
      boardDoc: videoDoc, 
      userDoc: $user, 
      classID: params.class, // don't know why there is no ID in this case...
      questionID: params.questionID,
      commentString: newInputComment,
      linkToQuestion: `${$page.url.origin}/${params.class}/question/${params.questionID}`
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
    height: 100%;
    background-color: hsla(0, 100%, 100%, 0.7);
  }

  .my-tab-item {
    font-size: 1.4rem;
    border-bottom: 2px solid rgb(160, 160, 160);
    padding: 1vw;
    color: rgb(160, 160, 160);
    flex-grow: 1;
    text-align: center;
  }

  .my-active-tab {
    border-bottom: 2px solid black;
    color: black;
    font-weight: 600;
  }
</style>