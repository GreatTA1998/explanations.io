<slot {boardDoc}>

</slot>

<script>
  import { getFirestore, onSnapshot, doc } from 'firebase/firestore'
 
  export let dbPath

  let boardDoc

  const boardRef = doc(getFirestore(), dbPath)
  onSnapshot(boardRef, (snapshot) => {
    boardDoc = { id: snapshot.id, ...snapshot.data(), path: snapshot.ref.path }
  })
</script>