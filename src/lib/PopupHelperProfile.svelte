<BasePopup on:popup-close width={1000}>
  <div slot="title" style="display: flex; flex-wrap: wrap">
    <h2  style="font-family: sans-serif;">
      {helperDoc.name}
    </h2> 
    <ReusableButton color="secondary" style="color: white;">
      Subscribe for $10/month
    </ReusableButton> 
  </div>

  <div slot="popup-content" style="font-family: sans-serif; padding: 12px;">
    <!-- Basic statistics -->
    <div>
      free videos, subscriber videos, total subscriptions
    </div>

    <br>

    <div>
      {helperDoc.bio}
    </div>

    <!-- Video portfolio here -->
    <DetailedClassPageBoardsAndVideos
      on:video-rearrange={() => isRearrangeVideosPopupOpen = true}
      galleryBoardIDs={shopVideosIDs}
      {classID}
      {classTutorsDocs}
      selectedTutorUID={helperDoc.uid}
      selectedTutorDoc={helperDoc}
    />
  </div>
</BasePopup>

<script>
  import PhoneLogin from '$lib/PhoneLogin.svelte'
  import BasePopup from '$lib/BasePopup.svelte'
  import Checkbox from '@smui/checkbox'
  import { createEventDispatcher, onMount } from 'svelte'
  import { user } from '../store.js'
  import { updateFirestoreDoc } from '../helpers/crud.js'
  import Button from '@smui/button'
  import { getFirestore, collection, query, where, orderBy, getDocs } from "firebase/firestore";
  import DetailedClassPageBoardsAndVideos from '/src/routes/signup/[class]/DetailedClassPageBoardsAndVideos.svelte'
  import ReusableButton from '$lib/ReusableButton.svelte'

  export let classTutorsDocs
  export let selectedTutorDocs
  export let helperDoc 
  export let helperUID
  export let classID

  const dispatch = createEventDispatcher()

  let inputFieldFirstName = ''
  let inputFieldLastName = ''
  let checked = false

  let shopVideosIDs = [] 

  onMount(async () => {
    const temp = await shopifyFetch()
    shopVideosIDs = temp
    console.log("shopVideosIds =", shopVideosIDs)
  })
  async function shopifyFetch () {
    console.log("shopifyFetch()")
    return new Promise(async (resolve) => {
      console.log('inside the promise')
      console.log("classID =", classID)
      console.log("helperDocUID =", helperDoc.uid)
      // const shopVideoIDs = [] 
      const output = [] 
      const db = getFirestore()
      const blackboardsRef = collection(db, `classes/${classID}/blackboards`)
      const q = query(
        blackboardsRef, 
        where('creatorUID', '==', helperDoc.uid),
        orderBy('shopGalleryOrder')
      )
      const querySnapshot = await getDocs(q) 
      if (querySnapshot.empty) {
        console.log("snapshot is empty")
        return
      }
      querySnapshot.forEach((doc) => {
        output.push(doc.id)
      })
      console.log('FINALLY FINISHEDshopVideoIDs =', output)
      resolve(output)
    })
  }

  function updateUserName () {
    updateFirestoreDoc(`users/${$user.uid}`, {
      name: inputFieldFirstName + ' ' + inputFieldLastName
    })
  }
</script>