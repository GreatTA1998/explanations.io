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
  <LeftDrawerToggleButton/>

  <div style="padding: 16px;">
    <Textfield 
      disabled={$user.uid !== questionDoc.askerUID}
      value={questionDoc.title} on:input={(e) => updateQuestionTitle(e)}
      class="room-title question" 
      style={`width: ${$maxAvailableWidth}px;`}
    >
      <HelperText slot="helper" persistent>
        {#if questionDoc.timestamp}
          Question asked by {questionDoc.askerName} on {displayMonthDayYYYY(questionDoc.timestamp)}.
          There are {questionDoc.blackboardIDs.length} blackboards.
        {/if}
      </HelperText>
    </Textfield>

    <div style="width: {$maxAvailableWidth}px; margin-top: 14px; margin-bottom: 0px">
      <TextAreaAutoResizing 
        value={questionDoc.description} 
        on:input={(e) => debouncedUpdateQuestionDescription(e)}
        placeholder=""
        readonly={$user.uid !== questionDoc.askerUID}
      />
    </div>

    {#if questionDoc.attachmentsDownloadURLs} 
      {#each questionDoc.attachmentsDownloadURLs as attachmentURL, i}
        <a href={attachmentURL} target="_blank">
          {questionDoc.attachmentsNames[i]}
        </a>
      {/each}
    {/if}

    <div style="width: {$maxAvailableWidth}px; border-bottom: 2px dashed black; margin-top: 16px; margin-bottom: 16px;"></div>

    <!-- Blackboards section -->
    <div style="display: flex; flex-direction: column; gap: 40px;">
      {#if questionDoc.blackboardIDs}
        {#each questionDoc.blackboardIDs as boardID}
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

  /* :global(.question input) {
    color: red !important;
  } */
</style>