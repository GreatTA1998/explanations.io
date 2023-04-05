<BasePopup on:popup-close width={1000}>
  <div slot="title" style="margin-top: 12px; display: flex; flex-wrap: wrap; width: 95%; align-items: center; justify-content: space-between">
    <h2 style="font-family: sans-serif; font-size: 2.8rem; margin-top: 0px; margin-bottom: 0;">
      {helperDoc.name}
    </h2> 
    
    <div>
      {helperDoc.bio}
    </div>
  </div>

  <div slot="popup-content" style="font-family: sans-serif; padding: 12px;">
    <!-- Basic statistics -->
    <div style="display: flex; align-items: center; justify-content: space-evenly">
      <div>
        <div style="font-size: 2.5rem">
          { shopVideosDocs ? shopVideosDocs.length : 0}
        </div>
        free videos
      </div>
      <div>
        <div style="font-size: 2.5rem">
          0
        </div>
        subscriber-only videos
      </div>
      <div>
        <div style="font-size: 2.5rem">
          { roundedToFixed(totalViewMinutes, 1) }
        </div>
        minutes viewed
      </div>
      <div>
        <div style="font-size: 2.5rem">
          0
        </div>
        subscribers
      </div>
    </div>

    <div style="margin-top: 24px;"></div>

    <ReusableButton color="secondary" style="color: white;">
      Directly ask {helperDoc.name} for new videos + unlock subscriber-only videos for $10/month
    </ReusableButton> 

    <div style="margin-top: 24px;"></div>

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
  import { roundedToFixed } from '../helpers/utility.js'
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
  let shopVideosDocs = [] 
  let totalViewMinutes = null

  onMount(async () => {
    const temp = await shopifyFetch()
    shopVideosDocs = temp
    shopVideosIDs = shopVideosDocs.map((doc) => doc.id)
    computeTotalViewMinutes()

    // update preview statistics for the tutor/helper 
    updateFirestoreDoc(`classes/${classID}/tutors/${helperDoc.id}`, {
      minutesViewed: roundedToFixed(totalViewMinutes, 0),
      numOfVideos: shopVideosDocs.length
    })
  })

  function computeTotalViewMinutes () {
    let total = 0
    shopVideosDocs.forEach((doc) => {
      total += doc.viewMinutes
    })
    totalViewMinutes = total
    return total
  }

  async function shopifyFetch () {
    console.log("shopifyFetch()")
    return new Promise(async (resolve) => {
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
        output.push({ id: doc.id, path: doc.ref.path, ...doc.data() })
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