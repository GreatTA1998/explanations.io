<!-- TO-DO: make it mobile responsive -->
{#if classTutorsDocs && classDoc}
  <div style="margin-top: 0%; margin-bottom: 0%">
    <div style="display: flex">
      <h2 style="font-family: sans-serif; color: black; font-size: 1.8rem; font-weight: 400; margin-top: 0; margin-bottom: 12px;">
        Hire someone based on their example videos (scroll down)
      </h2>
    </div>

    {#if isWatchingForNewShopPopupOpen}
      <PopupGetNotifiedOnNewShops 
        on:popup-close={() => isWatchingForNewShopPopupOpen = false}
        {classID}
      />
    {/if}

    <div style="display: flex; font-family: sans-serif;" class:red-text={classDoc.numOfWatchers}>
      { classDoc.numOfWatchers || 0 } people still looking for a new helper
      
      <div style="margin-right: 12px;"></div>
      
      {#if !isUserWatchingClass}
        <button on:click={() => isWatchingForNewShopPopupOpen = true}>
          Notify me when new helper opens shop
        </button>
      {:else}
        <button on:click={() => isWatchingForNewShopPopupOpen = true}>
          Remove myself from watchlist
        </button>
      {/if}
    </div>

    {#if classWatchers}
      <ol style="margin-top: 2px;">
        {#each classWatchers as watcher}
          <li>{watcher.name}: {watcher.reasonForWatching}</li>
        {/each}
      </ol>
    {/if}

    <div style="display: flex; font-family: sans-serif">
      {#if classDoc.psetPDFsDownloadURLs && classDoc.psetPDFsNames}
        Pset PDFs (as prompts for videos)
      {:else}
        <div style="color: red">
          Pset files missing for helpers to make example videos
        </div>
      {/if}

      <div style="margin-right: 12px;"></div>

      <PsetPDFUploader {classID}/>
    </div>

    <div>
      {#if classDoc.psetPDFsDownloadURLs && classDoc.psetPDFsNames}
        {#each classDoc.psetPDFsDownloadURLs as downloadURL, i}
          <a style="margin-left: 24px;" href={downloadURL} target="_blank">
            {classDoc.psetPDFsNames[i]}
          </a>
        {/each} 
      {/if}
    </div>

    {#if isSubscribePopupOpen}
      <PopupConfirmSubscription
        {selectedTutorDoc}
        on:popup-close={() => isSubscribePopupOpen = false}
        on:confirm-clicked={() => handleConfirmSubscription(tutorDocBeingConsidered)}
      />
    {/if}   

    {#if isTrialPopupOpen}
      <PopupConfirmTrial
        {selectedTutorDoc}
        on:popup-close={() => isTrialPopupOpen = false}
        on:confirm-clicked={() => handleConfirmTrial(tutorDocBeingConsidered)}
      />
    {/if}

    <div style="display: flex; overflow-x: auto; margin-top: 12px;">
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
                Hired {tutorDoc.numOfStudents || 0} times, {tutorDoc.numOfVideos || 0} videos

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
                  <div style="margin-top: 12px; font-family: sans-serif; font-size: 1rem;">
                    {tutorDoc.bio || 'No bio yet'}
                  </div>
                {/if}
              {/if}  

              <div style="text-align: center; padding: 0; margin-top: 12px;">
                <ReusableButton on:click={() => handleSubscribeButtonClick(tutorDoc)}>
                  <div style="font-size: 0.8rem;">
                    Hire for ${ tutorDoc.weeklyPrice || 15 }/week
                  </div>
                </ReusableButton>
              </div>

              <!-- <div style="text-align: center; padding: 0; margin-top: 12px;">
                <ReusableButton on:click={() => handleTrialButtonClick(tutorDoc)} variant="outlined">
                  <div style="font-size: 0.8rem;">
                    In-person tutoring "trial" for $1
                  </div>
                </ReusableButton>
              </div> -->

              {#if $user.uid === tutorDoc.uid && price && isCardExpanded}
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
  import PhoneLogin from '$lib/PhoneLogin.svelte'
  import PopupConfirmSubscription from '$lib/PopupConfirmSubscription.svelte';
  import PopupConfirmTrial from '$lib/PopupConfirmTrial.svelte'
  import TextAreaAutoResizing from '$lib/TextAreaAutoResizing.svelte';
  import ReusableIncomeCalculator from '$lib/ReusableIncomeCalculator.svelte'
  import PsetPDFUploader from '$lib/PsetPDFUploader.svelte';
  import Card, { PrimaryAction, Content } from '@smui/card'
  import Button, { Label, Icon } from '@smui/button';
  import { user } from '../../../store.js'
  import { createEventDispatcher, onMount, tick, onDestroy } from 'svelte'
  import { onSnapshot, collection, query, orderBy, limit, getDoc, getDocs, getFirestore, updateDoc, arrayUnion, arrayRemove, increment, doc, setDoc, where } from 'firebase/firestore'
  import { getRandomID, debounce } from '../../../helpers/utility.js'
  import { createRoomDoc, createBoardDoc, updateFirestoreDoc } from '../../../helpers/crud.js'
  import { sendTextMessage } from '../../../helpers/cloudFunctions.js';
  import ReusableButton from '$lib/ReusableButton.svelte'
  import Slider from '@smui/slider'
  import { goto } from '$app/navigation';
  import PopupGetNotifiedOnNewShops from '$lib/PopupGetNotifiedOnNewShops.svelte';

  export let classTutorsDocs
  export let selectedTutorDoc
  export let selectedTutorUID
  export let classID
  export let classDoc
  
  let classWatchers = null
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
  let isWatchingForNewShopPopupOpen = false
  let unsubClassWatchersListener

  listenToClassWatchers()

  onDestroy(() => {
    if (unsubClassWatchersListener) {
      unsubClassWatchersListener()
    }
  })

  let isUserWatchingClass = false

  $: {
    isUserWatchingClass = false
    if ($user.idsOfWatchingClasses) {
      if ($user.idsOfWatchingClasses.includes(classID)) {
        isUserWatchingClass = true
      }
    }
  }

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

  function listenToClassWatchers () {
    const db = getFirestore()
    const watchersRef = collection(db, `classes/${classID}/watchers`)
    unsubClassWatchersListener = onSnapshot(watchersRef, (snap) => {
      const temp = [] 
      snap.docs.forEach(doc => {
        temp.push({ id: doc.id, path: doc.ref.path, ...doc.data() })
      })
      classWatchers = temp
    })
  }

  async function handleConfirmTrial (tutor) {
    isTrialPopupOpen = false
    const promises = [] 

  // NOTE: Twilio's requirement differs from Firebase Auth, which requires +1 XXX-XXX-XXX hyphen format
    const eltonMobileNumber = '+15032503868'
    await promises.push(
      sendTextMessage({ 
        content: `${$user.name} signed up for your "$1 + tip" 30 minute in-person tutoring trial, confirm on Venmo and they should text you shortly to schedule a time.`,
        toWho: tutor.phoneNumber
      }),
      sendTextMessage({
        content: `Welcome ${$user.name.split(' ')[0]}! 
        Schedule a time and place to meet with your tutor e.g. give 3 distinct times like 1 pm Wednesday, Friday 3 pm, Tuesday 12 pm, student center 5th floor etc.)
        and decide afterwards whether to hire them for youtube-style help : )
        `,
        toWho: $user.phoneNumber
      }),
      sendTextMessage({
        content: `Student ${$user.name} is trialing with tutor ${tutor.name}`,
        toWho: eltonMobileNumber
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
  
  .red-text {
    color: red;
  }
</style>
