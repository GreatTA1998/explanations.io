<slot {listenToDoc} {theDoc}>

</slot>

<script>
  import { onMount, onDestroy } from 'svelte'
  import { doc, onSnapshot, getFirestore } from "firebase/firestore"

  export let docPath
  export let autoListen = false

  let theDoc = null
  let unsubListener = null

  onMount(() => {
    if (autoListen) listenToDoc()
  })

  onDestroy(() => {
    if (unsubListener) unsubListener()
  })

  function listenToDoc() {
    const db = getFirestore()
    const ref = doc(db, docPath)

    unsubListener = onSnapshot(ref, (snap) => {
      if (snap.exists()) {
        theDoc = { 
          id: snap.id, 
          path: snap.ref.path,
          ...snap.data() 
        }
      } else {
        theDoc = null
      }
    })
  }
</script>