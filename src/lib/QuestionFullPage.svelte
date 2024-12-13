<script>
  import { doc, getFirestore, onSnapshot } from 'firebase/firestore'
  import GeneralizedBlackboardDisplay from '$lib/GeneralizedBlackboardDisplay.svelte'
  import LeftDrawerToggleButton from '$lib/LeftDrawerToggleButton.svelte'
  import TextAreaAutoResizing from '$lib/TextAreaAutoResizing.svelte'
  import { createDebouncedFunction } from '/src/helpers/debounce.js'
  import { createNewMultiboard, updateFirestoreDoc } from '/src/helpers/crud.js'
  import { maxAvailableWidth, maxAvailableHeight, user, blackboardWidth, videoPreviewWidth } from '/src/store.js'
  import { SIDE_PADDING } from '/src/helpers/dimensions.js'

  export let classID
  export let questionID

  const debouncedUpdateQuestionTitle = createDebouncedFunction(updateQuestionTitle, 1000)
  const debouncedUpdateQuestionDescription = createDebouncedFunction(updateQuestionDescription, 1000)
  let questionDoc = {}
  let unsub = null

  // note questionDoc.path already exists, although `questionDoc` could be undefined
  $: questionPath = `/classes/${classID}/questions/${questionID}/`

  $: questionRef = doc(getFirestore(), questionPath)
  $: questionID, createQuestionListener()

  function createQuestionListener () {
    if (unsub) unsub() // assume it's not async
    unsub = onSnapshot(questionRef, (snapshot) => {
      questionDoc = { 
        id: snapshot.id, 
        path: snapshot.ref.path, 
        ...snapshot.data() 
      }
    })
  }

  function updateQuestionTitle ({ srcElement }) {
    updateFirestoreDoc(questionPath, {
      title: srcElement.value
    })
  }

  async function updateQuestionDescription ({ detail, path }) {
    updateFirestoreDoc(path, {
      description: detail
    })
  }
</script>

{#if questionDoc.id}
  <div style="position: relative;">
    <LeftDrawerToggleButton/>

    <div style="padding: {SIDE_PADDING}px; overflow-y: auto;">
      <div class="question-container" style="display: flex; flex-direction: column; row-gap: 12px;">
        <input 
          value={questionDoc.title} 
          on:input={(e) => debouncedUpdateQuestionTitle(e)}
          readonly={$user.uid !== questionDoc.askerUID}
          placeholder="Title"
          style="width: {$blackboardWidth}px;"
          class="room-title question" 
        >

        {#if questionDoc.description || questionDoc.askerUID === $user.uid}
          <div style="width: {$blackboardWidth}px; margin-top: 14px; margin-bottom: 0px">
            <TextAreaAutoResizing 
              value={questionDoc.description} 
              on:input={(e) => debouncedUpdateQuestionDescription({ detail: e.detail, path: questionDoc.path })}
              placeholder="Description..." 
              readonly={$user.uid !== questionDoc.askerUID}
            />
          </div>
        {/if}

        {#if questionDoc.attachmentsDownloadURLs} 
          <div style="display: flex; column-gap: 16px">
            {#each questionDoc.attachmentsDownloadURLs as attachmentURL, i}
              {#if questionDoc.attachmentsNames[i].includes('.pdf')}
                <a href={attachmentURL} target="_blank" style="cursor: pointer;">
                  {questionDoc.attachmentsNames[i]}
                </a>
              {:else}
                <a href={attachmentURL} target="_blank" style="cursor: pointer;">
                  <img 
                    src={questionDoc.attachmentsDownloadURLs[i]} 
                    style="
                      border-radius: 4px; 
                      width: auto; 
                      height: {0.5 * 1/questionDoc.attachmentsNames.length * $maxAvailableHeight}px;
                    "
                    alt={questionDoc.attachmentsNames[i]}
                  >
                </a>
              {/if}
            {/each}
          </div>
        {/if}
      </div>

      <div style="display: flex; align-items: center; column-gap: 12px; margin: 24px 0px;">
        <div style="border-bottom: 1px solid lightgrey; flex-grow: 3;"></div>

        <div class="question-metadata">
          {questionDoc.blackboardIDs?.length} {questionDoc.blackboardIDs?.length === 1 ? "reply" : "replies"}
        </div>

        <div style="border-bottom: 1px solid lightgrey; flex-grow: 10;"></div>
      </div>

      <!-- Blackboards section -->
      <div style="display: flex; flex-direction: column; gap: 40px;">
        {#if questionDoc.blackboardIDs}
          {#each questionDoc.blackboardIDs as boardID (boardID)}
            <GeneralizedBlackboardDisplay 
              {boardID}
              {classID}
              roomDoc={questionDoc}
            />
          {/each}

          <!-- PROBLEM: don't show until the blackboards have rendered, otherwise it causes a layout jump -->
          <div 
            on:click={() => createNewMultiboard({ 
              baseDocPath: questionPath,
              boardsPath: `/classes/${classID}/blackboards/`
            })} on:keydown
            class="new-blackboard-button"
            style="width: {$blackboardWidth}px;"
          >
            RESPOND WITH A BLACKBOARD
          </div>
        {/if}
      </div>
    </div>
  </div>
{/if}

<style>
  .question-metadata {
    font-size: 0.875rem; 
    color: rgb(80, 80, 80); 
    font-weight: 400;
  }

  .new-blackboard-button {
    display: flex; 
    justify-content: center; 
    align-items: center;
    background-color: #2e3131; 
    text-transform: uppercase;
    color: white;
    height: 35px;
    opacity: 2.0s ease-in;
    opacity: 1;

    cursor: pointer;
  }
  
  :global(.room-title input) {
    font-size: 2rem;
  }

  .room-title {
    font-size: 2rem;

    /* reset input's default styling */
    border: none;
    padding: 0px;
    background: transparent;
  }

  .room-title:focus {
    outline: none;
  }

  .room-title:read-only {
    cursor: default;
  }
</style>