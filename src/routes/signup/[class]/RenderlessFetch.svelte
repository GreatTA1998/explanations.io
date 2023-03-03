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
    
    // fetch all the shop videos and boards (this will include videos made by other helpers)
    const q = query(blackboardsRef, orderBy('shopGalleryOrder'))
    const querySnapshot = await getDocs(q) 

    if (querySnapshot.empty) {
      alert('Class has no shop videos')
      return
    }
    querySnapshot.forEach((doc) => {
      const data = doc.data()
      // then weed out the shop videos created by other helpers
      if (data.creatorUID && data.creatorUID !== selectedTutorUID) {
        return
      }
      shopVideoIDs.push(doc.id)
    })
    resolve(shopVideoIDs)
  })
}
</script>