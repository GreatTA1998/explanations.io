<script>
  import { onMount } from 'svelte'
  import { collection, getFirestore, onSnapshot, query, orderBy } from 'firebase/firestore'
  import { user } from '/src/store.js'
  import { goto } from '$app/navigation'
  import { page } from '$app/stores'
  import { DateTime } from 'luxon'

  export let classID

  let unsub = null
  let allQuestions = null

  onMount(() => {
    listenToQuestions()
  })
    
  function listenToQuestions () {
    const questionsRef = collection(
      getFirestore(),
      `/classes/${classID}/questions`
    )
    const questionsQuery = query(
      questionsRef,
      orderBy('timestamp', 'desc')
    )

    unsub = onSnapshot(questionsQuery, async (snapshot) => { // onSnapshot does NOT return a promise
      const docs = []
      snapshot.forEach(doc => { 
        docs.push({ 
          id: doc.id, 
          path: doc.ref.path, 
          ...doc.data()  
        })
      })
      allQuestions = docs
    })
  }

  function getDaysAgo (serverTimestamp) {
    return DateTime.fromMillis(
      serverTimestamp.toMillis()
    ).toRelative()
  }
</script>

<div class="q-section-container">
  <slot>

  </slot>

  <div class="q-list-container">
    <div style="margin-top: 0px;">
      {#if allQuestions}
        {#each allQuestions as question (question.id)}
          <div 
            on:click={() => goto(`/${classID}/question/${question.id}`)} 
            class:selected={question.id === $page.params.questionID} 
            class="q-list-item"
          >
            <div class="q-title my-truncated-text">
              {question.title}
            </div>

            <!-- <div class="q-description">
              {question.description}
            </div> -->

            <div class="q-asker">
              {question.askerName} asked {getDaysAgo(question.timestamp)}
            </div>
          </div>

          <div style="width: 100%; border-bottom: 1px solid lightgrey;"></div>
        {/each}
      {/if}
    </div>
  </div>
</div>

<style>
  .q-list-container {
    padding: 4px 8px;
  }

  .q-list-item {
    padding: 8px; 
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .q-title {
    font-size: 1rem;
  }

  .q-description {
    font-size: 0.875rem;
    color: rgb(120, 120, 120);
    line-height: 1.2;
  }

  /* Copied from Firebase's section header */
  .q-asker {
    font-size: 12px;
    line-height: 16px;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.6);
  }

  .selected {
    background-color: #F7C686;
    transition: background 20ms ease-in 0s;
  }
</style>