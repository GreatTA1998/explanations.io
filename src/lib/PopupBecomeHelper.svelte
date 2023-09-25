<BasePopup on:popup-close width={1000}>
  <!-- <h2 slot="title" style="font-family: sans-serif;">
    {helperDoc.name}
  </h2> -->
  <div slot="popup-content" style="font-family: sans-serif; padding: 12px;">
    {#if !$user.phoneNumber}
      <h2 class="mdc-typography--headline6" style="margin: 0; font-family: sans-serif;">
        1. Log in with phone
      </h2>
      <LoginPhone/>
    {:else}
      <div>
        Welcome { $user.name || '' }.
        <br>
        <br>
        When you become a helper, students can pay you $10/month to:
          <ol>
            <li>
              Request new videos from you 
            </li>
            <li>
              Access your subscriber-only videos
            </li>
          </ol>        
        Subscriber-only videos aren't selfish. On the contrary, they enable quality content to be available to everyone for cheap prices (that otherwise wouldn't exist)     
        <br>
        <br>
        Lastly, 
        <i>"People subscribe not for a particular video necessarily, but because they 
        fall in love with your particular perspective on explaining the subject matter"</i>
        <a href="https://on.substack.com/p/why-free-posts-pay-avoiding-a-tempting" target="_blank"> read more here</a>
        <br>
        <br>
        <div>
          Recommendation: make your best videos free, and the rest subscriber-only.
          
          <br>
          <br>

          Get started by making some free example videos that: 
          <ol>
            <li>Showcase your unique way of understanding the class</li>
            <li>Answer an existing question in the server</li>
          </ol>    
        </div> 

        <ReusableButton on:click={createTutorDoc({ classID, firstName: $user.name.split(' ')[0], lastName: $user.name.split(' ')[1]})}>
          Confirm sign-up as helper
        </ReusableButton>
        <br>
        <br>
      </div>
      
      {#if !$user.name || ($user.name && $user.name.split(' ')[0] === 'Beaver')}
        <div>First name</div>
        <input bind:value={firstNameInput} placeholder="Alice, Bob, Charlie"/>

        <div>Last name</div>
        <input bind:value={lastNameInput} placeholder=""/>

        <Button on:click={createTutorDoc({ classID, firstName: firstNameInput, lastName: lastNameInput })}>
          Submit
        </Button>
      {/if}
    {/if}
  </div>
</BasePopup>

<script>
  import LoginPhone from '$lib/LoginPhone.svelte'
  import BasePopup from '$lib/BasePopup.svelte'
  import Checkbox from '@smui/checkbox'
  import { createEventDispatcher, onMount, tick } from 'svelte'
  import { user } from '../store.js'
  import { updateFirestoreDoc, createRoomDoc } from '../helpers/crud.js'
  import Button from '@smui/button'
  import { doc, getFirestore, collection, query, where, orderBy, getDocs, setDoc, arrayUnion, increment, } from "firebase/firestore";
  import { portal } from '../helpers/actions.js'
  import { getRandomID } from '../helpers/utility.js'
  import ReusableButton from '$lib/ReusableButton.svelte'

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
    updateFirestoreDoc(`classes/${classID}`, {
      numOfHelpers: increment(1)
    })
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