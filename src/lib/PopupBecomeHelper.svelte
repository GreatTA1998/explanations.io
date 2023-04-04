<BasePopup on:popup-close width={1000}>
  <h2 slot="title" style="font-family: sans-serif;">
    {helperDoc.name}
  </h2>
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
      You can now be paid as a helper. Establish your presence by creating a few free videos or responding to unresolved questions
      in the server. 

      "People subscribe not for a particular video necessarily, but because they 
      fall in love with your particular perspective on explaining the subject matter"
  
      https://on.substack.com/p/why-free-posts-pay-avoiding-a-tempting
      <br>
      <br>

      Your statistics and video portfolio will grow with your activity.

      This is your helper profile, 
      which contains your info, your statistics (number of free videos, number of paid videos), and your top videos, 
      <div style="color: purple">and allows students to subscribe to you.</div>
      <Button>Get subscribers-only videos and reliable reply time for $10/month</Button>
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
    
    <!-- Basic statistics -->
    <div>
      free videos, subscriber videos, total subscriptions
    </div>

  {/if}
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