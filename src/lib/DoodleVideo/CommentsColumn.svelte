<div class="comments-column">
  <slot/>

  <SubNavTabs
    tabs={panelTabs}
    bind:value={activeTab}
    ariaLabel="Transcript and comments"
    tabbed={true}
  />

  <div class="panel-body" class:panel-hidden={activeTab !== 'comments'}>
    <ListenToCollection collectionPath={videoDoc.path + '/comments'}
      let:collectionDocs={commentDocs}
    >
      <TextAreaAutoResizing
        value={newInputComment}
        on:input={(e) => newInputComment = e.detail}
        placeholder="New comment..."
        placeholderColor="rgb(60, 60, 60)"
        color="rgb(60, 60, 60)"
        nonFocusedPlaceholderOpacity={0.5}
      />

      <button on:click={createComment} class="submit-button">SUBMIT</button>

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

  function createComment () {
    if (!newInputComment) return

    const db = getFirestore()
    const batch = writeBatch(db)
    const newCommentID = getRandomID()
    batch.set(doc(db, `${videoDoc.path}/comments/${newCommentID}`), {
      content: newInputComment,
      isoStringOfDate: new Date().toISOString(),
      creatorUID: $user.uid || '',
      creatorName: $user.name || ''
    })
    batch.update(doc(db, videoDoc.path), { numOfComments: increment(1) })
    batch.commit()

    const { params, url } = $page
    handleNewCommentEmailNotifications({
      boardDoc: videoDoc,
      userDoc: $user,
      classID: params.class,
      questionID: params.questionID,
      commentString: newInputComment,
      linkToQuestion: `${url.origin}/${params.class}/question/${params.questionID}`
    })
    newInputComment = ''
  }

  async function deleteComment ({ id }) {
    const db = getFirestore()
    const batch = writeBatch(db)
    batch.delete(doc(db, `${videoDoc.path}/comments/${id}`))
    batch.update(doc(db, videoDoc.path), { numOfComments: increment(-1) })
    await batch.commit()
  }
</script>

<style>
  .comments-column {
    position: relative; width: 100%; max-height: inherit; min-height: 0; overflow: auto;
    border-radius: 2px; background-color: hsla(0, 100%, 100%, 0.4);
  }
  .submit-button {
    border-radius: 24px; border: 1px solid lightgrey; padding: 6px 12px;
    background-color: rgba(255, 255, 255, 0.6); width: fit-content; font-size: var(--fs-300);
  }
  .panel-body { padding: 12px; display: flex; flex-direction: column; row-gap: 12px; }
  .panel-hidden { display: none; }
</style>
