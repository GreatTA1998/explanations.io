<script>
  import QuestionsSectionItem from './QuestionsSectionItem.svelte'
  import { onMount } from 'svelte'
  import { collection, getFirestore, onSnapshot, query, orderBy } from 'firebase/firestore'
  import { drawerNameQuery } from '/src/store.js'
  import { fuzzyFilter } from '/src/helpers/fuzzyName.js'

  export let classID

  let unsub = null
  let allQuestions = null

  $: shown = fuzzyFilter(allQuestions || [], $drawerNameQuery, q => q.title)

  onMount(() => {
    listenToQuestions()
    return () => unsub?.()
  })

  function listenToQuestions () {
    const questionsQuery = query(
      collection(getFirestore(), `/classes/${classID}/questions`),
      orderBy('timestamp', 'desc')
    )
    unsub = onSnapshot(questionsQuery, (snapshot) => {
      const docs = []
      snapshot.forEach(docSnap => {
        docs.push({ id: docSnap.id, path: docSnap.ref.path, ...docSnap.data() })
      })
      allQuestions = docs
    })
  }
</script>

<div class="q-list-container">
  {#if allQuestions}
    {#each shown as question (question.id)}
      <QuestionsSectionItem {question} {classID}/>
    {/each}
  {/if}
</div>

<style>
  .q-list-container {
    padding: 4px 6px;
  }
</style>
