<slot {helperDoc}>

</slot>

<script>
  import { getFirestore, onSnapshot, collection, query, where } from 'firebase/firestore'
  
  export let classID 
  export let creatorUID

  let helperDoc

  const helperRef = collection(getFirestore(), `classes/${classID}/tutors`)
  const q = query(helperRef, where('uid', '==', creatorUID))
  onSnapshot(q, (snapshot) => {
    if (snapshot.empty) {
      console.log('No matching documents.')
      // TO-DO: throw an explicit error
      return
    }
    snapshot.docs.forEach(doc => {
      helperDoc = { id: doc.id, ...doc.data(), path: doc.ref.path }
    })
  })
</script>