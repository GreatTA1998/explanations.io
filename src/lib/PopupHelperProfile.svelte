<BasePopup on:popup-close style="min-height: 90vh; min-width: 95vw;">
  <!-- justify-content: space-between -->
  <div slot="title" style="margin-top: 12px; display: flex; flex-wrap: wrap; gap: 24px; width: 95%; align-items: center;">
    <h2 style="font-family: sans-serif; font-size: 2.8rem; margin-top: 0px; margin-bottom: 0;">
      {helperDoc.name}
    </h2> 
    
    <input readonly={$user.uid !== helperDoc.uid} style="margin-left: 24px;" value={helperDoc.venmo || ''} on:input={(e) => debouncedUpdateTutorVenmo(e.target.value)} placeholder="venmo">

    <div style="margin-top: 12px;"></div>

    <TextAreaAutoResizing 
      value={helperDoc.bio}
      on:input={(e) => debouncedUpdateBio(e)}
      placeholder="Short intro of yourself"
      readonly={$user.uid !== helperDoc.uid}
    />
  </div>

  <div slot="popup-content" style="font-family: sans-serif; padding: 12px;">
    <!-- Basic statistics -->
    <div style="display: flex; align-items: center; justify-content: space-evenly">
      <div>
        <div style="font-size: 4rem">
          { shopVideosDocs ? shopVideosDocs.length : 0}
        </div>
        free videos
      </div>
      <div>
        <div style="font-size: 4rem">
          0
        </div>
        subscriber videos
      </div>
      <div>
        <div style="font-size: 4rem">
          { roundedToFixed(totalViewMinutes, 0) }
        </div>
        minutes viewed
      </div>
      <div>
        <div style="font-size: 4rem">
          0
        </div>
        subscriptions
      </div>
    </div>

    <div style="margin-top: 24px;"></div>

    {#if isSubscribePopupOpen}
      <PopupConfirmSubscription
        selectedTutorDoc={helperDoc}
        {classID}
        on:confirm-clicked={() => handleConfirmSubscription(helperDoc)}
        on:popup-close={() => isSubscribePopupOpen = false}
      />
    {/if}

    <ReusableButton on:click={() => isSubscribePopupOpen = true} color="secondary" style="color: white;">
      Directly ask {helperDoc.name} for new videos + access subscriber videos for $10/month
    </ReusableButton> 

    <div style="margin-top: 36px;"></div>

    <!-- Video portfolio here -->
    <ToCommunityOrHelpersBoardsAndVideos
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
  import { roundedToFixed, debounce } from '../helpers/utility.js'
  import { sendTextMessage } from '../helpers/cloudFunctions.js'
  import Button from '@smui/button'
  import { getFirestore, collection, query, where, orderBy, getDocs, arrayUnion, increment } from "firebase/firestore";
  import ToCommunityOrHelpersBoardsAndVideos from '/src/routes/signup/[class]/ToCommunityOrHelpersBoardsAndVideos.svelte'
  import ReusableButton from '$lib/ReusableButton.svelte'
  import PopupConfirmSubscription from '$lib/PopupConfirmSubscription.svelte'
  import { goto } from '$app/navigation'
  import TextAreaAutoResizing from '$lib/TextAreaAutoResizing.svelte'

  export let classTutorsDocs
  export let helperDoc 
  export let classID

  const dispatch = createEventDispatcher()

  let isSubscribePopupOpen = false

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

  const debouncedUpdateTutorVenmo = debounce(
    updateTutorVenmo, 
    1000
  )

  function updateTutorVenmo (venmo) {
    const idNotUID = helperDoc.id
    updateFirestoreDoc(`classes/${classID}/tutors/${idNotUID}`, {
      venmo
    })
  }
    
  const debouncedUpdateBio = debounce(
    updateTutorBio,
    1000
  ) 

  async function updateTutorBio ({ detail }) {
    const idNotUID = helperDoc.id
    updateFirestoreDoc(`classes/${classID}/tutors/${idNotUID}`, {
      bio: detail
    })
  }

  async function handleConfirmSubscription (tutor) {
    isSubscribePopupOpen = false
    const promises = []

    // NOTE: Twilio's requirement differs from Firebase Auth, which requires +1 XXX-XXX-XXX hyphen format
    const eltonMobileNumber = '+15032503868'
    await promises.push(
      sendTextMessage({ 
        content: `New student ${$user.name} subscribed for $10/month, confirm on Venmo`,
        toWho: tutor.phoneNumber
      }),
      sendTextMessage({
        content: `Welcome ${$user.name.split(' ')[0]}! To ask your question, just rename a room to your question, your helper will be text notified.
          
          If you don't know how to use the website, here's a 1-min screenshare tutorial: https://youtu.be/Yo7aPxLropU?t=58. 
          Your tutor's phone is ${tutor.phoneNumber}. Texting is the fallback communication when there are unexpected problems e.g. ask for their email to
          send the pset PDF, Explain's website broke down, or to follow-up sometimes if response time is unusually long etc.


          If there's anything terribly inconvenient about the website, it probably is a bug, or a flawed design. You can call me/Elton (503 250 3868) 
          (please don't hesitate, Explain is my full-time job and you're a paying customer, and more often than not I can change the code 
          to incorporate your ideas within 1 week.)
        `,
        toWho: $user.phoneNumber
      }),
      sendTextMessage({
        content: `Student ${$user.name} subscribed to tutor ${tutor.name}`,
        toWho: eltonMobileNumber
      }),
      updateFirestoreDoc(`/users/${$user.uid}`, {
        idsOfSubscribedClasses: arrayUnion(classID)
      }),
      updateFirestoreDoc(`/classes/${classID}/tutors/${tutor.id}`, {
        numOfStudents: increment(1)
      })
    )
    goto(`/${classID}/${classID}`)
  }
</script>