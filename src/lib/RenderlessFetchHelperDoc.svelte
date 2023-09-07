<slot {helperDoc}>

</slot>

<script>
  import { getFirestore, doc, setDoc, onSnapshot, collection, query, where } from 'firebase/firestore'
  import { updateFirestoreDoc } from '/src/helpers/crud.js'
  import { getRandomID } from '/src/helpers/utility.js'
  import { user } from '/src/store.js'
  import { tick } from 'svelte'
  
  export let classID 
  export let creatorUID

  let helperDoc

  const helperRef = collection(getFirestore(), `classes/${classID}/tutors`)
  const q = query(helperRef, where('uid', '==', creatorUID))
  onSnapshot(q, (snapshot) => {
    if (snapshot.empty) {
      console.log('No matching documents.')
      // TO-DO: throw an explicit error
      createInitialDoc()
      return
    }
    snapshot.docs.forEach(doc => {
      helperDoc = { id: doc.id, ...doc.data(), path: doc.ref.path }
    })
  })

  function createInitialDoc () {
    console.log('creating initialDoc')
    createTutorDoc({ classID, firstName: $user.name.split(' ')[0] , lastName: $user.name.split(' ')[1] })
  }

  // "tutor" is a legacy naming term
  async function createTutorDoc ({ classID, firstName, lastName }) {
    console.log("firstName =", firstName)
    console.log('lastName =', lastName)


    if (!firstName || !lastName) return
    const classDbPath = `classes/${classID}/`
    const id = getRandomID()
    const classTutorDocPath = classDbPath + `tutors/${id}`

    // updateFirestoreDoc(`users/${$user.uid}`, {
    //   idsOfTutoringClasses: arrayUnion(classID)
    // })
    // const designatedRoomID = await createRoomDoc(`classes/${classID}/`) 

    // shopify the room board
    const initialNumericalDifference = 3
    // updateFirestoreDoc(`classes/${classID}/blackboards/${designatedRoomID}`, {
    //   shopGalleryOrder: initialNumericalDifference
    // }) 
    
    const tutorObject = {
      uid: $user.uid,
      name: firstName + ' ' + lastName,
      phoneNumber: $user.phoneNumber || '',
      email: $user.email || '',
      // designatedRoomID,
      maxShopGalleryOrder: initialNumericalDifference 
    }
    const db = getFirestore()

    await setDoc(
      doc(db, classTutorDocPath), 
      tutorObject
    )
    await tick()
    // updateFirestoreDoc(`classes/${classID}`, {
    //   numOfHelpers: increment(1)
    // })
    // selectedTutorUID = tutorObject.uid
  }

</script>