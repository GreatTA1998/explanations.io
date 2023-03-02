<slot {galleryBoardIDs}>

</slot>

<script>
import { orderBy, getFirestore, collection, query, where, getDocs } from "firebase/firestore";
import { user } from '../../../store.js'

export let selectedTutorUID
export let classID

let galleryBoardIDs

async function justDoIt () {
  let temp
  if ($user.uid === selectedTutorUID) {
    temp = await fetchVideosAndEmptyBoards()
  } else {
    temp = await shopifyFetch()
  }
  galleryBoardIDs = temp
}

justDoIt()

// NEW VERSION: do a query
async function shopifyFetch () {
  return new Promise(async (resolve) => {
    const shopVideoIDs = [] 
    const db = getFirestore()
    const blackboardsRef = collection(db, `classes/${classID}/blackboards`)
    const q = query(
      blackboardsRef, 
      where('creatorUID', '==', selectedTutorUID),
      orderBy('shopGalleryOrder')
    )
    const querySnapshot = await getDocs(q) 
    if (querySnapshot.empty) {
      alert('Shop is empty')
      return
    }
    querySnapshot.forEach((doc) => {
      shopVideoIDs.push(doc.id)
    })
    resolve(shopVideoIDs)
  })
}

async function fetchVideosAndEmptyBoards () {
  return new Promise(async (resolve) => {
    const shopVideoIDs = [] 
    const db = getFirestore()
    const blackboardsRef = collection(db, `classes/${classID}/blackboards`)
    const q = query(blackboardsRef, orderBy('shopGalleryOrder'))
    const querySnapshot = await getDocs(q) 
    console.log('querySnapshot =', querySnapshot)
    if (querySnapshot.empty) {
      alert('Shop is empty')
      return
    }
    querySnapshot.forEach((doc) => {
      shopVideoIDs.push(doc.id)
    })
    resolve(shopVideoIDs)
  })
}
</script>