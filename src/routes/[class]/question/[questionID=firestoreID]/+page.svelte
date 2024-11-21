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

  <div style="padding: 16px; border: 2px solid blue; overflow-y: auto;">
    <!-- <Textfield 
      disabled={$user.uid !== questionDoc.askerUID}
      value={questionDoc.title} on:input={(e) => updateQuestionTitle(e)}
      class="room-title question" 
      style={`width: ${$maxAvailableWidth}px;`}
    >
    </Textfield> -->

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

    <div style="margin-top: 6px;"></div>

    {#if questionDoc.attachmentsDownloadURLs} 
      <div style="display: flex; column-gap: 8px">
        {#each questionDoc.attachmentsDownloadURLs as attachmentURL, i}
          <a href={attachmentURL} target="_blank">
            {questionDoc.attachmentsNames[i]}
          </a>
          <img src={questionDoc.attachmentsDownloadURLs[i]} style="width: {0.5 *$maxAvailableWidth}px; height: auto;">
        {/each}
      </div>
    {/if}

    {#if questionDoc.timestamp}
      <span style="font-size: 0.875rem;">
        {displayMonthDayYYYY(questionDoc.timestamp)}
      </span>
    {/if}

    <div style="margin-top: 48px; margin-bottom: 48px; font-size: 1.6rem; font-weight: 500;">
      {questionDoc.blackboardIDs.length} responses
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

  /* :global(.question input) {
    color: red !important;
  } */
</style>