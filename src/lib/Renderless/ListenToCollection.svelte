<slot {listenToCollection} {collectionDocs}>

</slot>

<script>
  import { onMount, onDestroy } from 'svelte'
  import { collection, query, where, onSnapshot, getFirestore } from "firebase/firestore"

  export let collectionPath
  export let autoListen = true

  let collectionDocs = null
  let unsubListener = null

  onMount(() => {
    if (autoListen) listenToCollection()
  })

  onDestroy(() => {
    if (unsubListener) unsubListener()
  })

  function listenToCollection () {
    const db = getFirestore()
    const ref = collection(db, collectionPath)

    unsubListener = onSnapshot(ref, (snap) => {
      const temp = []
      for (const doc of snap.docs) {
        temp.push({ id: doc.id, ...doc.data() })
      }
      collectionDocs = temp
    })
  }
</script>

