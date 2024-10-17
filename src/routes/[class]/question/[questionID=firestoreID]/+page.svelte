<script>
  import { onMount} from 'svelte'
  import { doc, getFirestore, onSnapshot } from 'firebase/firestore'
  import GeneralizedBlackboardDisplay from '$lib/GeneralizedBlackboardDisplay.svelte'
  import { createNewMultiboard } from '/src/helpers/crud.js'
  import { maxAvailableWidth } from '/src/store.js'

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
      console.log('questionDoc =', questionDoc)
    })
  }
</script>

{#if questionDoc.id}
  <div style="padding: 8px 16px;">
    <div class="full-q-title">
      {questionDoc.title}
    </div>  

    <div style="margin-top: 8px;">
      {questionDoc.description}
    </div>

    {#if questionDoc.attachmentsDownloadURLs} 
      {#each questionDoc.attachmentsDownloadURLs as attachmentURL, i}
        <a href={attachmentURL} target="_blank">
          {questionDoc.attachmentsNames[i]}
        </a>
      {/each}
    {/if}

    <div style="width: 100%; border-bottom: 2px solid black; margin-top: 16px; margin-bottom: 16px;"></div>

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
            New multiboard
        </div>
      {/if}
    </div>
  </div>
{/if}

<style>
  .full-q-title {
    font-size: 1.8rem;
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
  }
</style>