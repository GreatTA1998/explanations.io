{#if classTutorsDocs}
  <div style="margin-top: 3%; margin-bottom: 1%">
    <h2 style="font-family: sans-serif; color: grey; font-size: 1.3rem; font-weight: 400;">
      Video gallery
    </h2>

    <div style="display: flex; overflow-x: auto;">
      {#each classTutorsDocs as tutorDoc}
        <div class="tutor-business-card" style="margin-right: 1%;" class:orange-border={selectedTutorUID === tutorDoc.uid}>
          <Card style="height: 600px;" variant="outlined">
            <PrimaryAction on:click={() => { dispatch('input', { selectedTutorUID: tutorDoc.uid, selectedTutorDoc: tutorDoc })}} padded style="height: 100%">
              <h2 class="mdc-typography--headline6" style="margin: 0; font-family: sans-serif;">
                { tutorDoc.name }
              </h2>

              <div style="margin-top: 16px;"></div>

              {#if $user.uid === tutorDoc.uid}
                <TextAreaAutoResizing 
                  value={tutorDoc.bio || ''} 
                  on:input={(e) => debouncedUpdateTutorBio(e, tutorDoc.id)}
                  placeholder="e.g. year, major, your teaching style/philosophy"
                  readonly={$user.uid !== tutorDoc.uid}
                  nonFocusedPlaceholderOpacity={0.6}
                  numberOfInitialRowsIfEmpty={2}
                  fontSizeIncludeUnits={'1rem'}
                />
              {:else}
                <div style="font-family: sans-serif; font-size: 1rem;">{tutorDoc.bio || 'No bio yet'}</div>
              {/if}
            </PrimaryAction>
            <div>
              {#if $user.uid === tutorDoc.uid && price}
                <ReusableIncomeCalculator weeklyPrice={price} on:subscribe-click={handleSubscribeButtonClick}>
                  <Slider
                    bind:value={price}
                    min={5}
                    max={30}
                    step={1}
                    discrete
                    tickMarks
                  />
                </ReusableIncomeCalculator>
              {:else}
                <ReusableButton on:click={handleSubscribeButtonClick}>
                  Subscribe for ${ tutorDoc.weeklyPrice || 15 }/week
                </ReusableButton>
              {/if}

              {#if isSubscribePopupOpen}
                <BasePopup on:popup-close={() => isSubscribePopupOpen = false}>
                  <h2 slot="title" style="font-family: sans-serif;">
                    How to get started
                  </h2>
                  <div slot="popup-content">
                    How to join

                    1. Log in with mobile number
                    2. Venmo 
                    3. Confirm, you'll receive an email
                    4. Enter the server

                    <div style="height: 20px; display: flex;">
                      <Checkbox bind:checked touch />I have venmo'ed {tutorDoc.name.split(" ")[0]}
                    </div>
                  </div>

                  <div slot="popup-buttons">
                    <ReusableButton 
                      disabled={!checked || !$user.phoneNumber}
                      on:click={() => handleConfirmSubscription(tutorDoc)}
                    >
                      Confirm
                    </ReusableButton>
                    <ReusableButton>Cancel</ReusableButton>
                  </div>
                </BasePopup>
              {/if}
            </div>           
          </Card>
        </div>
      {/each}

      {#if !didUserAlreadySignUpAsTutor}
        <div class="tutor-business-card" style="" class:orange-border={selectedTutorUID === ''}>
          {#if selectedTutorUID !== ''}
            <Card style="height: 200px;" variant="outlined">
              <PrimaryAction on:click={() => { dispatch('input', { selectedTutorUID: '' })}} padded style="height: 100%;">
                <h2 class="mdc-typography--headline6" style="margin: 0; font-family: sans-serif;">
                  Setup your shop
                </h2>
                <div style="font-family: sans-serif;">
                  <ol>
                    <li>Log in with phone</li>
                    <li>Record example videos</li>
                    <li>Add your Venmo</li>
                    <li>Technical issues? Call 503 250 3868</li>
                  </ol>
                </div>
              </PrimaryAction>
            </Card>
          {:else}
            {#if !$user.phoneNumber}
              <Content>
                <h2 class="mdc-typography--headline6" style="margin: 0; font-family: sans-serif;">
                  1. Log in with phone
                </h2>
                <PhoneLogin/>
              </Content>
            {:else}
              <Content>
                <div>
                  Welcome { $user.name || '' }, create shop?
                </div>
          
                {#if !$user.name || ($user.name && $user.name.split(' ')[0] === 'Beaver')}
                  <div>First name</div>
                  <input bind:value={inputFieldFirstName} placeholder="Alice, Bob, Charlie"/>

                  <div>Last name</div>
                  <input bind:value={inputFieldLastName} placeholder=""/>

                  <Button on:click={createTutorDoc({ classID, firstName: inputFieldFirstName, lastName: inputFieldLastName })}>
                    Submit
                  </Button>
                {:else if $user.name && !didUserAlreadySignUpAsTutor}
                  <Button on:click={createTutorDoc({ classID, firstName: $user.name.split(" ")[0], lastName: $user.name.split(" ")[1] })}>
                    Create shop
                  </Button>
                {/if}
              </Content>
            {/if}
          {/if}
        </div>
      {/if}
    </div>
  </div>
{/if}

<script>
  import Card, { PrimaryAction, Content } from '@smui/card'
  import Button, { Label } from '@smui/button';
  import { user } from '../../../store.js'
  import { createEventDispatcher, onMount, tick } from 'svelte'
  import PhoneLogin from '$lib/PhoneLogin.svelte'
  import { onSnapshot, collection, query, orderBy, limit, getDoc, getDocs, getFirestore, updateDoc, arrayUnion, arrayRemove, increment, doc, setDoc, where } from 'firebase/firestore'
  import { getRandomID, debounce } from '../../../helpers/utility.js'
  import { createRoomDoc, createBoardDoc, updateFirestoreDoc } from '../../../helpers/crud.js'
  import { sendTextMessage } from '../../../helpers/cloudFunctions.js';
  import TextAreaAutoResizing from '$lib/TextAreaAutoResizing.svelte';
  import BasePopup from '$lib/BasePopup.svelte'
  import ReusableIncomeCalculator from '$lib/ReusableIncomeCalculator.svelte'
  import Checkbox from '@smui/checkbox';
  import ReusableButton from '$lib/ReusableButton.svelte'
  import Slider from '@smui/slider'

  export let classTutorsDocs
  export let selectedTutorUID
  export let classID

  const dispatch = createEventDispatcher()
  let checked = false
  let price
  let inputFieldFirstName = '' 
  let inputFieldLastName = ''
  let didUserAlreadySignUpAsTutor = false
  let isSubscribePopupOpen = false

  // DOES THIS COMPONENT ASSUME CLASS DOCS IS ALREADY HYDRATED?
  $: if (classTutorsDocs) {
    didUserAlreadySignUpAsTutor = false
    for (const tutor of classTutorsDocs) {
      if (tutor.uid === $user.uid) {
        didUserAlreadySignUpAsTutor = true
        if (!price) price = tutor.weeklyPrice || 15
      }
    }
  }

  $: if (price) {
    let tutorDocID 
    if (classTutorsDocs) {
      for (const tutorDoc of classTutorsDocs) {
        if (tutorDoc.uid === $user.uid) {
          tutorDocID = tutorDoc.id
        }
      }
    }
    debouncedUpdateTutorWeeklyPrice(price, tutorDocID)
  }
  
  async function handleConfirmSubscription (tutor) {
    isSubscribePopupOpen = false
    const promises = []

    // NOTE: Twilio's requirement differs from Firebase Auth, which requires +1 XXX-XXX-XXX hyphen format
    const eltonMobileNumber = '+15032503868'
    await promises.push(
      sendTextMessage({ 
        content: `New student ${$user.name} subscribed for $${price}, confirm on Venmo`,
        toWho: tutor.phoneNumber
      }),
      sendTextMessage({
        content: `Confirmed for class, you can now enter the server and start asking questions`,
        toWho: $user.phoneNumber
      }),
      sendTextMessage({
        content: `Student ${$user.name} subscribed to tutor ${tutor.name}`,
        toWho: eltonMobileNumber
      })
    )

    await updateFirestoreDoc(`/users/${$user.uid}`, {
      idsOfSubscribedClasses: arrayUnion(classID)
    })
  }

  function handleSubscribeButtonClick () {
    isSubscribePopupOpen = true
  }
  
  const debouncedUpdateTutorWeeklyPrice = debounce(
    updateTutorWeeklyPrice,
    2000
  )

  function updateTutorWeeklyPrice (weeklyPrice, idNotUID) {
    const tutorRef = doc(getFirestore(), `classes/${classID}/tutors/${idNotUID}`)
    updateDoc(tutorRef, {
      weeklyPrice
    })
  }
  
  const debouncedUpdateTutorBio = debounce(
    ({ detail }, id) => updateTutorBio({ detail }, id),
    2000
  ) 

  async function updateTutorBio ({ detail }, idNotUID) {
    const tutorRef = doc(getFirestore(), `classes/${classID}/tutors/${idNotUID}`)
    updateDoc(tutorRef, {
      bio: detail
    })
  }

  async function createTutorDoc ({ classID, firstName, lastName }) {
    if (!firstName || !lastName) return
    // const userDbPath = `users/${$user.uid}/`
    const classDbPath = `classes/${classID}/`
    const classTutorDocPath = classDbPath + `tutors/${getRandomID()}`
    const designatedRoomID = await createRoomDoc(`classes/${classID}/`) 
    const tutorObject = {
      uid: $user.uid,
      name: firstName + ' ' + lastName,
      phoneNumber: $user.phoneNumber,
      designatedRoomID
    }
    const db = getFirestore()

    await setDoc(doc(db, classTutorDocPath), tutorObject)
    await tick()
    selectedTutorUID = tutorObject.uid
  }
</script>

<style>
  .tutor-business-card {
    max-width: 400px; 

    width: 90%;
    /* This is to match SMUI's card's border radius */
    border-radius: 5px;
  }

  .orange-border {
    border: 2px solid orange;
  }
</style>
