<script>
  import { onMount } from 'svelte'
  import { doc, getFirestore, onSnapshot } from 'firebase/firestore'
  import GeneralizedBlackboardDisplay from '$lib/GeneralizedBlackboardDisplay.svelte'
  import LeftDrawerToggleButton from '$lib/LeftDrawerToggleButton.svelte'
  import TextAreaAutoResizing from '$lib/TextAreaAutoResizing.svelte'
  import { createNewMultiboard, updateFirestoreDoc } from '/src/helpers/crud.js'
  import { maxAvailableWidth, user } from '/src/store.js'
  import Textfield from '@smui/textfield'
  import HelperText from '@smui/textfield/helper-text'
  import { DateTime } from 'luxon'

  export let data

  let { classID, questionID } = data
  let questionDoc = {}
  let unsub = null

  $: ({ classID, questionID } = data) // so it stays in sync when `data` changes
  $: questionPath = `/classes/${classID}/questions/${questionID}/`
  $: questionRef = doc(getFirestore(), questionPath)
  
  $: questionID, createQuestionListener()

  onMount(async () => {
    
  })

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

  async function debouncedUpdateQuestionDescription ({ detail }) {
    const debouncedVersion = debounce(
      () => updateQuestionDescription({ detail }),
      1000
    ) 
    debouncedVersion({ detail })
  }

  async function updateQuestionDescription ({ detail }) {
    updateFirestoreDoc(questionPath, {
      description: detail
    })
  }

  let t = { promise: null, cancel: _ => void 0 }

  // Snippet from: https://stackoverflow.com/a/68228099/7812829
  // NOTE: this literally returns a function (you still have to call it)
  function debounce (task, ms) {
    return async (...args) => {
      try {
        t.cancel()
        t = deferred(ms)
        await t.promise
        await task(...args)
      }
      catch (_) { 
        /* prevent memory leak */ 
      }
    }
  }

  function deferred (ms) {
    let cancel, promise = new Promise((resolve, reject) => {
      cancel = reject
      setTimeout(resolve, ms)
    })
    return { promise, cancel }
  }

  function displayMonthDayYYYY (serverTimestamp) {
    const dt = DateTime.fromMillis(serverTimestamp.toMillis())
    return dt.toLocaleString({ month: 'short', day: 'numeric', year: 'numeric'})
  }
</script>

{#if questionDoc.id}
  <!-- <LeftDrawerToggleButton/> -->

  <div style="padding: 16px; overflow-y: auto;">
    <!-- <Textfield 
      disabled={$user.uid !== questionDoc.askerUID}
      value={questionDoc.title} on:input={(e) => updateQuestionTitle(e)}
      class="room-title question" 
      style={`width: ${$maxAvailableWidth}px;`}
    >
    </Textfield> -->

    <div class="question-container" style="display: flex; flex-direction: column; row-gap: 12px;">
      <div class="room-title question" style:width={`${$maxAvailableWidth}px`}>
        {questionDoc.title}
      </div>

      {#if questionDoc.description}
        <div style="width: {$maxAvailableWidth}px; margin-top: 14px; margin-bottom: 0px">
          <TextAreaAutoResizing 
            value={questionDoc.description} 
            on:input={(e) => debouncedUpdateQuestionDescription(e)}
            placeholder=""
            readonly={$user.uid !== questionDoc.askerUID}
          />
        </div>
      {/if}

      <!-- <div style="margin-top: 6px;"></div> -->

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
                  width: {0.5 * 1/questionDoc.attachmentsNames.length * $maxAvailableWidth}px; 
                  height: auto;"
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
        {questionDoc.blackboardIDs?.length} replies
      </div>

      <!-- <div style="border-bottom: 1px solid lightgrey; flex-grow: 1;"></div> -->

      <div style="border-bottom: 1px solid lightgrey; flex-grow: 10;"></div>
      <!-- 
        <div class="question-metadata">
          Asked by {questionDoc.askerName}
          {#if questionDoc.timestamp}
            <span class="question-metadata">
              {displayMonthDayYYYY(questionDoc.timestamp)}
            </span>
          {/if}      
        </div>

        <div style="border-bottom: 1px solid lightgrey; flex-grow: 1;"></div>
       -->


    </div>
    <!-- <div style="width: {$maxAvailableWidth}px; border-bottom: 2px dashed black; margin-top: 16px; margin-bottom: 16px;"></div> -->

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

        <div on:click={() => createNewMultiboard({ 
            baseDocPath: questionPath,
            boardsPath: `/classes/${classID}/blackboards/`
          })}
          class="new-blackboard-button"
          style="width: {$maxAvailableWidth}px;">
            RESPOND WITH A BLACKBOARD
        </div>
      {/if}
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
  }
</style>