<script>
  import QuestionsSectionItem from '$lib/TheLeftDrawer/QuestionsSectionItem.svelte'
  import { onMount } from 'svelte'
  import { collection, getFirestore, onSnapshot, query, orderBy, increment} from 'firebase/firestore'

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
</script>

<div class="q-section-container">
  <slot>

  </slot>

  <div class="q-list-container">
    <div style="margin-top: 0px;">
      {#if allQuestions}
        {#each allQuestions as question (question.id)}
          <QuestionsSectionItem {question} {classID}/>
        {/each}
      {/if}
    </div>
  </div>
</div>

<style>
  .q-list-container {
    padding: 4px 8px;
  }
</style>