<div class="comments-column">
  <slot/>

  <!-- <div style="display: flex; margin-bottom: 2vw; width: 100%; justify-content: space-between;">
    <div class="my-tab-item">
      <span class="material-symbols-outlined" style="cursor: not-allowed;">
        translate
      </span>
      <p style="font-size: 12px;">
        (transcript coming soon)
      </p>
    </div>      

    <div class="my-tab-item"class:my-active-tab={true}  style="margin-bottom: 0; margin-top: auto;" >
      <span class="material-symbols-outlined" style="cursor: pointer;">
        forum
      </span>
      <p style="font-size: 12px;">
        Comments
      </p>
    </div>
  </div> -->

  <div style="padding: 12px; display: flex; flex-direction: column; row-gap: 12px;">
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
        {#each commentDocs as commentDoc}
          <CommentsColumnComment 
            comment={commentDoc} 
            on:comment-delete={() => deleteComment(commentDoc)}
          />
        {/each}
      {/if}
    </ListenToCollection>  
  </div>
</div>

<script>
  import ListenToCollection from '$lib/Renderless/ListenToCollection.svelte'
  import CommentsColumnComment from '$lib/DoodleVideo/CommentsColumnComment.svelte'
  import { handleNewCommentEmailNotifications } from '/src/helpers/everythingElse.js'
  import { getRandomID, displayDate } from '/src/helpers/utility.js'
  import { getFirestore, writeBatch, doc, increment } from 'firebase/firestore'
  import { user } from '/src/store.js'
  import TextAreaAutoResizing from '$lib/Reusable/TextAreaAutoResizing.svelte'
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

  .my-tab-item {
    font-size: 1.4rem;
    border-bottom: 2px solid rgb(160, 160, 160);
    padding: 0.5vw;
    color: rgb(160, 160, 160);
    flex-grow: 1;
    text-align: center;
    display: flex;
    align-items: center;
  }

  .my-active-tab {
    border-bottom: 2px solid black;
    color: black;
    font-weight: 600;
  }
</style>