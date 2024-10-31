<script>
  import { onMount } from 'svelte'
  import { collection, getFirestore, onSnapshot, query, orderBy, increment} from 'firebase/firestore'
  import { getFirestoreDoc, updateFirestoreDoc, 
    deleteFirestoreDoc, deleteArbitraryBlackboard, deleteFromStorage 
  } from '/src/helpers/crud.js'
  import QuestionsSectionItem from '$lib/QuestionsSectionItem.svelte'
  import { goto } from '$app/navigation'

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

  // TO-DO: also delete attachments in the future
  async function deleteQuestion (questionDoc) {
    if (!confirm('Are you sure you want to delete this question?')) {
      return
    }

    alert('Initiated a delete, this might take 10 seconds, the UI will update')

    const classPath = `classes/${classID}/`
    const db = getFirestore()

    // DELETE BLACKBOARDS
    const boardDeletePromises = []
    for (const boardID of questionDoc.blackboardIDs) {
      boardDeletePromises.push(
        getFirestoreDoc(classPath + `blackboards/${boardID}/`)
          .then(boardDoc => deleteArbitraryBlackboard({ boardDoc, classID }))
          .catch(error => console.log(error))
      )
    }
    await Promise.all(boardDeletePromises)

    // TO-DO: needs fixing in the future, but not urgent
    // DELETE ATTACHMENTS (note the double plural)
    // if (questionDoc.attachmentsDownloadURLs) {
    //   for (const downloadURL of questionDoc.attachmentsDownloadURLs) {
    //     // find path
    //     // https://firebasestorage.googleapis.com/v0/b/(project id).appspot.com/o/(storage path)?alt=media
    //     // original answer: https://stackoverflow.com/a/58443247/7812829
    //     const path = downloadURL.substring(downloadURL.indexOf('/o/') + 3, downloadURL.indexOf('?'))
    //     deleteFromStorage({ path })
    //   }
    // }

    // UPDATE METADATA/STATS
    if (questionDoc.isAnswered) {
      updateFirestoreDoc(`classes/${classID}`, {
        numOfResolvedQuestions: increment(-1)
      })
    }
    else {
      updateFirestoreDoc(`classes/${classID}/`,{
        numOfUnresolvedQuestions: increment(-1)
      })
    }

     // finally delete the room doc itself
    await deleteFirestoreDoc(classPath + `questions/${questionDoc.id}/`)

    goto(`/${classID}/question`)
  }
</script>

<div class="q-section-container">
  <slot>

  </slot>

  <div class="q-list-container">
    <div style="margin-top: 0px;">
      {#if allQuestions}
        {#each allQuestions as question (question.id)}
          <QuestionsSectionItem {question} {deleteQuestion} {classID}/>
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