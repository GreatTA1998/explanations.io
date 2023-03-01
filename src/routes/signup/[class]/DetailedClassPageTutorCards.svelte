{#if classTutorsDocs}
  <div style="margin-top: 3%; margin-bottom: 1%">
    <h2 style="font-family: sans-serif; color: grey; font-size: 1.3rem; font-weight: 400;">
      Available shops
    </h2>

    {#if isSubscribePopupOpen}
      <PopupConfirmSubscription
        on:popup-close={() => isSubscribePopupOpen = false}
        on:confirm-clicked={() => handleConfirmSubscription(tutorDocBeingConsidered)}
      />
    {/if}   

    {#if isTrialPopupOpen}
      <PopupConfirmTrial
        on:popup-close={() => isTrialPopupOpen = false}
        on:confirm-clicked={() => handleConfirmTrial(tutorDocBeingConsidered)}
      />
    {/if}

    <div style="display: flex; overflow-x: auto;">
      {#each sortedClassTutorsDocs as tutorDoc}
        <div class="tutor-business-card" style="margin-right: 1%;" class:orange-border={selectedTutorUID === tutorDoc.uid}>
          <Card on:click={() => { dispatch('input', { selectedTutorUID: tutorDoc.uid, selectedTutorDoc: tutorDoc })}} padded style="min-height: 100px;" variant="outlined">
            <RenderlessLocalVariables let:isCardExpanded={isCardExpanded} let:toggleIsCardExpanded={toggleIsCardExpanded}>
              <h2 class="mdc-typography--headline6" style="margin: 0; font-family: sans-serif;">
                { tutorDoc.name.split(' ')[0] }
                <br>
                { tutorDoc.name.split(' ')[1] }
              </h2>

              <div style="font-family: sans-serif; display: flex; align-items: center;">
                Subscribed {tutorDoc.numOfStudents || 0} times, {tutorDoc.numOfVideos || 0} videos

                <div style="margin-right: 0; margin-left: auto;">
                  {#if !isCardExpanded}
                    <Icon on:click={toggleIsCardExpanded} class="material-icons" style="margin-right: 0; font-size: 2.2rem;">
                      expand_more
                    </Icon>
                  {:else}
                    <Icon on:click={toggleIsCardExpanded} class="material-icons" style="margin-right: 0; font-size: 2.2rem;">
                      expand_less
                    </Icon>
                  {/if}
                </div>
              </div>

              <div style="text-align: center; padding: 0; margin-top: 12px;">
                <ReusableButton on:click={() => handleSubscribeButtonClick(tutorDoc)}>
                  <div style="font-size: 0.8rem;">
                    Subscribe for ${ tutorDoc.weeklyPrice || 15 }/week
                  </div>
                </ReusableButton>
              </div>

              <div style="text-align: center; padding: 0; margin-top: 12px;">
                <ReusableButton on:click={() => handleTrialButtonClick(tutorDoc)} variant="outlined">
                  <div style="font-size: 0.8rem;">
                    Try for $1 + tip
                  </div>
                </ReusableButton>
              </div>

              {#if $user.uid === tutorDoc.uid && price}
                <div style="margin-top: 12px;"></div>
                <ReusableIncomeCalculator weeklyPrice={price}>
                  <!-- <Slider/> doesn't emit events properly so I'm just avoiding the issue with <slot> -->
                  <div style="display: flex; align-items: center;">
                    <div style="font-family: sans-serif;">
                      price
                    </div>
                    <Slider
                      style="flex-grow: 1"
                      bind:value={price}
                      min={5}
                      max={30}
                      step={1}
                      discrete
                    />
                  </div>
                </ReusableIncomeCalculator>
              {/if}

              {#if isCardExpanded}
                <div style="margin-top: 16px;"></div>

                {#if $user.uid === tutorDoc.uid}
                  <input value={tutorDoc.venmo || ''} on:input={(e) => debouncedUpdateTutorVenmo(e.target.value, tutorDoc.id)} placeholder="venmo here e.g. elton-lin-2"/>
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
                  <div style="font-family: sans-serif; font-size: 1rem;">
                    Venmo: {tutorDoc.venmo || '[Venmo listed in bio]'}
                  </div>
                  <div style="margin-top: 12px; font-family: sans-serif; font-size: 1rem;">
                    {tutorDoc.bio || 'No bio yet'}
                  </div>
                {/if}
              {/if}  
            </RenderlessLocalVariables>    
          </Card>
        </div>
      {/each}

      {#if !didUserAlreadySignUpAsTutor}
        <div class="tutor-business-card" style="" class:orange-border={selectedTutorUID === ''}>
          {#if selectedTutorUID !== ''}
            <Card style="min-height: 100px;" variant="outlined">
              <PrimaryAction on:click={() => { dispatch('input', { selectedTutorUID: '' })}} padded style="height: 100%;">
                <h2 class="mdc-typography--headline6" style="margin: 0; font-family: sans-serif;">
                  Setup your shop
                </h2>
                <div style="font-family: sans-serif; display: flex; align-items: center;">
                  Or just log back in
                  <Icon class="material-icons" style="margin-right: 0; font-size: 2.2rem; margin-left: auto;">
                    expand_more
                  </Icon>
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
  import RenderlessLocalVariables from '$lib/RenderlessLocalVariables.svelte'
  import Card, { PrimaryAction, Content } from '@smui/card'
  import Button, { Label, Icon } from '@smui/button';
  import { user } from '../../../store.js'
  import { createEventDispatcher, onMount, tick } from 'svelte'
  import PhoneLogin from '$lib/PhoneLogin.svelte'
  import { onSnapshot, collection, query, orderBy, limit, getDoc, getDocs, getFirestore, updateDoc, arrayUnion, arrayRemove, increment, doc, setDoc, where } from 'firebase/firestore'
  import { getRandomID, debounce } from '../../../helpers/utility.js'
  import { createRoomDoc, createBoardDoc, updateFirestoreDoc } from '../../../helpers/crud.js'
  import { sendTextMessage } from '../../../helpers/cloudFunctions.js';
  import TextAreaAutoResizing from '$lib/TextAreaAutoResizing.svelte';
  import ReusableIncomeCalculator from '$lib/ReusableIncomeCalculator.svelte'
  import ReusableButton from '$lib/ReusableButton.svelte'
  import Slider from '@smui/slider'
  import PopupConfirmSubscription from '$lib/PopupConfirmSubscription.svelte';
  import PopupConfirmTrial from '$lib/PopupConfirmTrial.svelte'

  export let classTutorsDocs
  export let selectedTutorDoc
  export let selectedTutorUID
  export let classID

  let sortedClassTutorsDocs 
  const dispatch = createEventDispatcher()
  let checked = false
  let price
  let inputFieldFirstName = '' 
  let inputFieldLastName = ''
  let didUserAlreadySignUpAsTutor = false
  let isSubscribePopupOpen = false
  let isTrialPopupOpen = false
  let tutorDocBeingConsidered
  let inputFieldVenmo = ''

  $: if (inputFieldVenmo) {
    debouncedUpdateTutorVenmo(inputFieldVenmo, selectedTutorDoc.id)
  }

  // DOES THIS COMPONENT ASSUME CLASS DOCS IS ALREADY HYDRATED?
  $: if (classTutorsDocs) {
    didUserAlreadySignUpAsTutor = false
    for (const tutor of classTutorsDocs) {
      if (tutor.uid === $user.uid) {
        didUserAlreadySignUpAsTutor = true
        if (!price) price = tutor.weeklyPrice || 15
      }
    }
    const copy = [...classTutorsDocs]
    sortedClassTutorsDocs = copy.sort((t1, t2) => (t2.numOfVideos || 0) - (t1.numOfVideos || 0))
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

  async function handleConfirmTrial (tutor) {
    isTrialPopupOpen = false
    const promises = [] 

  // NOTE: Twilio's requirement differs from Firebase Auth, which requires +1 XXX-XXX-XXX hyphen format
    const eltonMobileNumber = '+15032503868'
    await promises.push(
      sendTextMessage({ 
        content: `New student ${$user.name} signed up for "$1 + tip" trial, confirm on Venmo`,
        toWho: tutor.phoneNumber
      }),
      sendTextMessage({
        content: `Confirmed for class, you can now enter the server and start asking questions`,
        toWho: $user.phoneNumber
      }),
      sendTextMessage({
        content: `Student ${$user.name} is trialing with tutor ${tutor.name}`,
        toWho: eltonMobileNumber
      }),
      updateFirestoreDoc(`/users/${$user.uid}`, {
        idsOfSubscribedClasses: arrayUnion(classID)
      }),
      updateFirestoreDoc(`/classes/${classID}/tutors/${tutor.id}`, {
        numOfStudents: increment(1)
      })
    )
  }

  async function handleConfirmSubscription (tutor) {
    isSubscribePopupOpen = false
    const promises = []

    // NOTE: Twilio's requirement differs from Firebase Auth, which requires +1 XXX-XXX-XXX hyphen format
    const eltonMobileNumber = '+15032503868'
    await promises.push(
      sendTextMessage({ 
        content: `New student ${$user.name} subscribed for $${price || 15}, confirm on Venmo`,
        toWho: tutor.phoneNumber
      }),
      sendTextMessage({
        content: `Confirmed for class, you can now enter the server and start asking questions`,
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
  }

  function handleSubscribeButtonClick (tutorDoc) {
    isSubscribePopupOpen = true
    tutorDocBeingConsidered = tutorDoc 
  }
  
  function handleTrialButtonClick (tutorDoc) {
    isTrialPopupOpen = true
    tutorDocBeingConsidered = tutorDoc
  }

  const debouncedUpdateTutorWeeklyPrice = debounce(
    updateTutorWeeklyPrice,
    1000
  )

  const debouncedUpdateTutorVenmo = debounce(
    updateTutorVenmo, 
    1000
  )

  function updateTutorVenmo (venmo, idNotUID) {
    updateFirestoreDoc(`classes/${classID}/tutors/${idNotUID}`, {
      venmo
    })
  }

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
    const id = getRandomID()
    const classTutorDocPath = classDbPath + `tutors/${id}`

    updateFirestoreDoc(`classes/${classID}/tutors/${id}`, {
      idsOfTutoringClasses: arrayUnion(classID)
    })

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
    max-width: 260px; 
    width: 100%;
    height: fit-content;
    
    /* This is to match SMUI's card's border radius */
    border-radius: 5px;
  }

  .orange-border {
    border: 2px solid orange;
  }
</style>
