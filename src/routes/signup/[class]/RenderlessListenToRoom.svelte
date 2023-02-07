<slot {roomDoc}>

</slot>

<script>
  import { getFirestore, onSnapshot, doc } from 'firebase/firestore'
 
  export let dbPath

  let roomDoc

  const roomRef = doc(getFirestore(), dbPath)
  onSnapshot(roomRef, (snapshot) => {
    roomDoc = { id: snapshot.id, ...snapshot.data(), path: snapshot.ref.path }
  })
</script>