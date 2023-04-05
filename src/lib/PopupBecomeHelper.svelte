<BasePopup on:popup-close width={1000}>
  <!-- <h2 slot="title" style="font-family: sans-serif;">
    {helperDoc.name}
  </h2> -->
  <div slot="popup-content" style="font-family: sans-serif; padding: 12px;">
    {#if !$user.phoneNumber}
    <h2 class="mdc-typography--headline6" style="margin: 0; font-family: sans-serif;">
      1. Log in with phone
    </h2>
    <PhoneLogin/>
  {:else}
    <div>
      Welcome { $user.name || '' }.
      <br>
      <br>
      Thanks for considering to be a helper - here's a quick guide to help you think about it.
      <br>
      <br>
      <i>"People subscribe not for a particular video necessarily, but because they 
      fall in love with your particular perspective on explaining the subject matter"</i>
      <a href="https://on.substack.com/p/why-free-posts-pay-avoiding-a-tempting" target="_blank"> read more here</a>
      <br>
      <br>
      <div>
        If you become a helper, students can subscribe to you for $10/month.
        
        Regardless of whether you're a helper, you can still answer questions and upload videos in the server and build up your profile.
        You can become a helper whenever you want.  
      </div>
<!-- 
      <button on:click={createTutorDoc}>Confirm sign-up as helper</button> -->

      <br>
      <br>
    </div>
    
    {#if !$user.name || ($user.name && $user.name.split(' ')[0] === 'Beaver')}
      <div>First name</div>
      <input bind:value={firstNameInput} placeholder="Alice, Bob, Charlie"/>

      <div>Last name</div>
      <input bind:value={lastNameInput} placeholder=""/>

      <!-- TO-DO:
        1. Bio
        2. Venmo
        3. Can create more videos  
      -->
      <Button on:click={createTutorDoc({ classID, firstName: firstNameInput, lastName: lastNameInput })}>
        Submit
      </Button>
    {/if}
  {/if}
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
  import Button from '@smui/button'
  import { getFirestore, collection, query, where, orderBy, getDocs } from "firebase/firestore";
  import ToCommunityOrHelpersBoardsAndVideos from '/src/routes/signup/[class]/ToCommunityOrHelpersBoardsAndVideos.svelte'

  import { portal } from '../helpers/actions.js'

  let firstNameInput 
  let lastNameInput
  let venmoInput 

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
  })

  async function createTutorDoc ({ classID, firstName, lastName }) {
    if (!firstName || !lastName) return
    const classDbPath = `classes/${classID}/`
    const id = getRandomID()
    const classTutorDocPath = classDbPath + `tutors/${id}`

    updateFirestoreDoc(`users/${$user.uid}`, {
      idsOfTutoringClasses: arrayUnion(classID)
    })

    const designatedRoomID = await createRoomDoc(`classes/${classID}/`) 

    // shopify the room board
    const initialNumericalDifference = 3
    updateFirestoreDoc(`classes/${classID}/blackboards/${designatedRoomID}`, {
      shopGalleryOrder: initialNumericalDifference
    }) 
    
    const tutorObject = {
      uid: $user.uid,
      name: firstName + ' ' + lastName,
      phoneNumber: $user.phoneNumber,
      designatedRoomID,
      maxShopGalleryOrder: initialNumericalDifference 
    }
    const db = getFirestore()

    await setDoc(
      doc(db, classTutorDocPath), 
      tutorObject
    )
    await tick()
    selectedTutorUID = tutorObject.uid
  }

  async function shopifyFetch () {
    return new Promise(async (resolve) => {
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
      resolve(output)
    })
  }

  function updateUserName () {
    updateFirestoreDoc(`users/${$user.uid}`, {
      name: inputFieldFirstName + ' ' + inputFieldLastName
    })
  }
</script>