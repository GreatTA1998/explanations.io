<slot serverMemberDoc={serverMemberDoc}>

</slot>

<script>
  import { getFirestore, doc, setDoc, onSnapshot, collection, query, where } from 'firebase/firestore'
  import { updateFirestoreDoc, getFirestoreDoc } from '/src/helpers/crud.js'
  import { getMemberDocSchema } from '/src/helpers/schema.js'
  import { user } from '/src/store.js'
  import { tick, onMount, onDestroy } from 'svelte'
  
  export let classID 
  export let memberUID

  let unsubSnapshotListener = null 
  let serverMemberDoc

  onMount(async () => {
    try {
      const memberDoc = await getFirestoreDoc(`classes/${classID}/members/${memberUID}`)
      serverMemberDoc = memberDoc
    } catch (error) {
      console.log('error =', error) // likely that getFirestoreDoc could not find the document
      if ($user.uid === memberUID) {
        createServerMemberDoc($user)
      } else {
        const userDoc = await getFirestoreDoc(`users/${memberUID}`)
        createServerMemberDoc(userDoc)
      }
    }
  })

  onDestroy(() => {
    if (unsubSnapshotListener) {
      unsubSnapshotListener()
    }
  })

  // { uid, classID, firstName, lastName, phoneNumber, email}
  async function createServerMemberDoc (userDoc) {
    const classDbPath = `classes/${classID}/`
    const memberDbPath = classDbPath + `members/${userDoc.uid}`

    const memberObj = getMemberDocSchema(userDoc)

    const db = getFirestore()

    await setDoc(
      doc(db, memberDbPath), 
      memberObj
    )
    // note we don't handle server members here, we handle it when users enter the server
    await tick()
  }
</script>