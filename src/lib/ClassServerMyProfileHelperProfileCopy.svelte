<!-- justify-content: space-between -->
<!-- <div style="margin-top: 12px; display: flex; flex-wrap: wrap; gap: 24px; width: 95%; align-items: center;"> -->
<div style="display: flex">
  <slot>

  </slot>
  <div style="margin-left: 12px; margin-top: 8px;">
    <h2 style="font-family: sans-serif; font-size: 2rem; margin-top: 0px; margin-bottom: 0;">
      {helperDoc.name}
    </h2> 

    <div style="margin-top: 2px"></div>
    <!-- Basic statistics -->
    <div style="display: flex; align-items: center; justify-content: space-evenly">
      <div style="margin-right: 16px;">
        { helperDoc.numOfVideos - (helperDoc.numPaidVideos || 0) || 0}
        free videos
      </div>
      <div style="margin-right: 16px;">
        { helperDoc.numPaidVideos || 0}
        subscriber videos
      </div>
      <div style="margin-right: 16px;">
        { helperDoc.minutesViewed || 0}
        minutes viewed
      </div>
      <div style="margin-right: 16px;">
        { helperDoc.numOfStudents || 0}
        subscriptions
      </div>
    </div>

    <div style="margin-top: 6px;"></div>

    <!-- bio -->
    <TextAreaAutoResizing 
      value={helperDoc.bio}
      fontSizeIncludeUnits="1rem"
      on:input={(e) => debouncedUpdateBio(e)}
      placeholder="Short intro of yourself"
      readonly={$user.uid !== helperDoc.uid}
    />
  </div>
</div>
  
  <div style="display: flex; align-items: center">
    <div style="width: 300px">
      <ReusableButton on:click={() => isSubscribePopupOpen = true} color="secondary" style="color: white;">
        Subscribe for $10/month
      </ReusableButton> 
    </div>

    {#if isSubscribePopupOpen}
      <PopupConfirmSubscription
        selectedTutorDoc={helperDoc}
        {classID}
        on:confirm-clicked={() => handleConfirmSubscription(helperDoc)}
        on:popup-close={() => isSubscribePopupOpen = false}
      />
    {/if}


    <input readonly={$user.uid !== helperDoc.uid} style="margin-left: 24px;" value={helperDoc.venmo || ''} on:input={(e) => debouncedUpdateTutorVenmo(e.target.value)} placeholder="venmo">
  </div>

  <div style="margin-top: 12px;"></div>




<div style="font-family: sans-serif; padding: 12px;">


  <div style="margin-top: 24px;"></div>

  <div style="margin-top: 36px;"></div>

  <!-- Video portfolio here -->
  <!-- on:video-rearrange={() => isRearrangeVideosPopupOpen = true} -->
  <b style="font-size: 1.5rem; margin-left: 2px;">
    Profile videos
  </b>

  <br>
  <br>
  <br>
  
  {#key incrementWhenGalleryRearranged}
    <PopupHelperProfileVideos
      on:video-rearranged={() => {
        incrementWhenGalleryRearranged += 
        fetchProfileVideos()
      }}
      galleryBoardIDs={shopVideosIDs}
      {classID}
      {classTutorsDocs}
      selectedTutorUID={helperDoc.uid}
      selectedTutorDoc={helperDoc}
    />
  {/key}
</div>

<script>
  import { createEventDispatcher, onMount } from 'svelte'
  import { user } from '../store.js'
  import { updateFirestoreDoc, getFirestoreQuery } from '../helpers/crud.js'
  import { roundedToFixed, debounce } from '../helpers/utility.js'
  import { sendTextMessage } from '../helpers/cloudFunctions.js'
  import { getFirestore, collection, query, where, orderBy, getDocs, arrayUnion, increment } from "firebase/firestore";
  import PopupHelperProfileVideos from '/src/routes/signup/[class]/PopupHelperProfileVideos.svelte'
  import ReusableButton from '$lib/ReusableButton.svelte'
  import PopupConfirmSubscription from '$lib/PopupConfirmSubscription.svelte'
  import { goto } from '$app/navigation'
  import TextAreaAutoResizing from '$lib/TextAreaAutoResizing.svelte'

  export let classTutorsDocs
  export let helperDoc 
  export let classID

  const dispatch = createEventDispatcher()

  console.log('helperDoc =', helperDoc)

  let incrementWhenGalleryRearranged = 0
  let isSubscribePopupOpen = false

  let inputFieldFirstName = ''
  let inputFieldLastName = ''
  let checked = false

  let shopVideosIDs = [] 
  let shopVideosDocs = [] 
  let totalViewMinutes = null

  onMount(async () => {
    fetchProfileVideos()
    updatePreviewStatistics()
  })

  async function fetchProfileVideos () {
    const temp = await shopifyFetch()
    shopVideosDocs = temp
    shopVideosIDs = shopVideosDocs.map((doc) => doc.id)
  }

  async function updatePreviewStatistics () {
    const db = getFirestore()
    const blackboardsRef = collection(db, `classes/${classID}/blackboards`)
    const q = query(
      blackboardsRef, 
      where('creatorUID', '==', helperDoc.uid)
    )
    const videos = await getFirestoreQuery(q)

    let total = 0
    for (const video of videos) {
      total += video.viewMinutes || 0
    }
    updateFirestoreDoc(`classes/${classID}/tutors/${helperDoc.id}`, {
      minutesViewed: roundedToFixed(total, 0),
      numOfVideos: videos.length
    })
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