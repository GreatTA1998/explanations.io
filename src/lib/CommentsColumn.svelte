<div style="padding: 1vw;">
  <h2>Comments</h2>

  <RenderlessListenToCollection
    collectionPath={videoDoc.path + '/comments'}
    let:listenToCollection={listenToCollection}  
    let:collectionDocs={commentDocs}
    autoListen={true}
  >
    <TextAreaAutoResizing
      value={newInputComment} 
      on:input={(e) => newInputComment = e.detail}
      placeholder="New follow-up question..."
    />
    
    <button on:click={createComment}>SUBMIT</button>

    {#if commentDocs}
      {#each commentDocs as commentDoc}
        <div class="copied-from-old-explain">{commentDoc.content}</div>

        <div class="copied-from-old-explain-2" style="display: flex; align-items: center;">
          {displayDate(commentDoc.isoStringOfDate)} by {commentDoc.creatorName || commentDoc.creatorUID}
          {#if commentDoc.creatorUID === $user.uid}
            <span style="margin-left: 6px; cursor: pointer; font-size: 16px;" on:click={() => deleteComment(commentDoc)} class="material-icons">
              delete_forever
            </span>
          {/if}
        </div>
      {/each}
    {/if}
  </RenderlessListenToCollection>
</div>

<script>
  import RenderlessListenToCollection from '$lib/RenderlessListenToCollection.svelte'
  import { getRandomID, displayDate } from '/src/helpers/utility.js'
  import { getFirestore, writeBatch, doc, increment } from 'firebase/firestore'
  import { user } from '/src/store.js'
  import TextAreaAutoResizing from '$lib/TextAreaAutoResizing.svelte'

  export let videoDoc

  let newInputComment = ''
  
  function createComment () {
    if (!newInputComment) return

    const promises = []

    const db = getFirestore()
    const batch = writeBatch(db)
    const commentRef = doc(db, `${videoDoc.path}/comments/${getRandomID()}`)
    batch.set(commentRef, {  
      content: newInputComment,
      isoStringOfDate: new Date().toISOString(),
      creatorUID: $user.uid,
      creatorName: $user.name
    })

    const blackboardRef = doc(db, videoDoc.path)
    batch.update(blackboardRef, { numOfComments: increment(1) })

    promises.push(
      batch.commit()
    )

    // TO-DO: handle email notifications based on video ID
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
  .copied-from-old-explain {
    font-size: .875rem;
    font-weight: 400;
    line-height: 1.375rem;
    letter-spacing: .0071;
    margin-top: 1vw;
  }

  .copied-from-old-explain-2 {
    color: rgba(0,0,0,.6) !important;
    font-size: 0.75rem !important;
  }
</style>