<slot {galleryBoardIDs}>

</slot>

<script>
import { orderBy, getFirestore, collection, query, where, getDocs } from "firebase/firestore";

export let fetchVideosFunc
export let selectedTutorUID
export let classID

let galleryBoardIDs

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

async function justDoIt () {
  const temp = await shopifyFetch()
  galleryBoardIDs = temp
}

justDoIt()
</script>