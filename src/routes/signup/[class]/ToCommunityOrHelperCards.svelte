<!-- TO-DO: make it mobile responsive -->
{#if classTutorsDocs && classDoc}
  <div style="margin-top: 0%; margin-bottom: 0%">
    <div style="display: flex">
    </div>

    {#if isWatchingForNewShopPopupOpen}
      <PopupGetNotifiedOnNewShops 
        on:popup-close={() => isWatchingForNewShopPopupOpen = false}
        {classID}
      />
    {/if}

    {#if isTrialPopupOpen}
      <PopupConfirmTrial
        {selectedTutorDoc}
        on:popup-close={() => isTrialPopupOpen = false}
        on:confirm-clicked={() => handleConfirmTrial(tutorDocBeingConsidered)}
      />
    {/if}

    <br>

    <div style="display: flex; align-items: center; margin-top: 2%">
      <b style="font-size: 1.2rem; font-family: sans-serif;">
        There are {classTutorsDocs.length} explainers and `n` members in this server:
      </b>
    </div>

    {#if isBecomeHelperPopupOpen}
      <PopupBecomeHelper
        {classID}
        on:popup-close={() => isBecomeHelperPopupOpen = false}
      />
    {/if}

    <div style="display: flex; font-family: sans-serif; margin-top: 1%; flex-wrap: wrap;">
        {#each classTutorsDocs as helper}
          <!-- <div style="width: 300px;"> -->
            <!--   on:click={() => { dispatch('input', { selectedTutorUID: helper.uid, selectedTutorDoc: helper })}} -->
            <PresentationalBeaverPreview 
              helperDoc={helper}
              {classID}
              style="margin-bottom: 8px; margin-right: 20px; width: 280px;"
            >
            </PresentationalBeaverPreview>
          <!-- </div> -->
        {/each} 
      <!-- </div> -->

      <!-- <div class="tutor-business-card-1" style="margin-left: 2%" on:click={() => dispatch('community-asking')} class:orange-border={isAskingCommunityOrHelper === 'community'}>
        <Card padded style="width: 400px; box-sizing: border-box">
          <div style="display: flex; align-items: center">
            <input type="checkbox" checked={isAskingCommunityOrHelper === 'community'} style="accent-color: hsl(0,0%,0%, 0.80); height: 25px; width: 25px; font-size: 5rem;"/>

            <b style="font-size: 1.2rem; margin-left: 8px;">
              Free question
            </b>
          </div>
          <Content>
            Your question will appear on the leftside as a blackboard room, where anyone
            can answer your question
          </Content>
        </Card>
      </div> -->

      <!-- 
      <div style="margin-left: 2%;" class="tutor-business-card-2" on:click={() => dispatch('helper-asking')} class:purple-border={isAskingCommunityOrHelper === 'helper'}>
        <Card padded style="width: 400px; box-sizing: border-box; ">
          <div style="display: flex; align-items: center">
            <input type="checkbox" checked={isAskingCommunityOrHelper === 'helper'} style="accent-color: #5d0068; height: 25px; width: 25px; font-size: 5rem;"/>
            <b style="font-size: 1.2rem; margin-left: 8px;">
              Subscriber question
            </b>
          </div>
        
          <Content>
            Benefits:
              <ol>
                <li>Faster, more reliable reply</li>
                <li>Supports your favorite creator</li>
                <li>Funds affordable learning material for the internet</li>
              </ol>
          </Content>
        </Card>
      </div> 
      -->
    </div>

    <div style="display: flex; overflow-x: auto; margin-top: 12px;">
      <!-- {#each sortedClassTutorsDocs as tutorDoc}
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
                    Subscribe for $10/month
                    ${ tutorDoc.weeklyPrice || 15 }/week
                  </div>
                </ReusableButton>
              </div>

              {#if $user.uid === tutorDoc.uid && price && isCardExpanded}
                <div style="margin-top: 12px;"></div>
                <ReusableIncomeCalculator weeklyPrice={price}>
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
      {/each} -->
    </div>
  </div>
{/if}

<script>
  import PresentationalBeaverPreview from '$lib/PresentationalBeaverPreview.svelte'
  import RenderlessLocalVariables from '$lib/RenderlessLocalVariables.svelte'
  import PhoneLogin from '$lib/PhoneLogin.svelte'
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
  import PopupBecomeHelper from '$lib/PopupBecomeHelper.svelte'
  import Checkbox from '@smui/checkbox';
  import Paper, { Title, Subtitle} from '@smui/paper';
  import FormField from '@smui/form-field';
 
  let checked = false

  export let classTutorsDocs
  export let selectedTutorDoc
  export let selectedTutorUID
  export let classID
  export let classDoc
  export let isAskingCommunityOrHelper
  
  let isBecomeHelperPopupOpen = false
  let classWatchers = null
  let sortedClassTutorsDocs 
  const dispatch = createEventDispatcher()
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

  function getWatcherBudget (watcher) {
    if (!watcher.budgetCategoryNumber) {
      return 'N/A'
    }
    const { budgetCategoryNumber } = watcher
    if (budgetCategoryNumber === 1) {
      return '$5 - $10/week'
    } else if (budgetCategoryNumber === 2) {
      return '$5 - $20/week'
    } else if (budgetCategoryNumber === 3) {
      return '$5 - $50/week'
    } 
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

  const debouncedUpdateTutorWeeklyPrice = debounce(
    updateTutorWeeklyPrice,
    1000
  )

  function updateTutorWeeklyPrice (weeklyPrice, idNotUID) {
    const tutorRef = doc(getFirestore(), `classes/${classID}/tutors/${idNotUID}`)
    updateDoc(tutorRef, {
      weeklyPrice
    })
  }
</script>

<style>
  .tutor-business-card-1 {
    /* 400 + epsilon, otherwise it doesn't wrap around the <Card> properly */
    max-width: 404px; 
    width: 100%;
    height: fit-content;
    
    /* This is to match SMUI's card's border radius */
    border-radius: 5px;
    box-sizing: border-box;
  }

  .tutor-business-card-2 {
    /* 400 + epsilon, otherwise it doesn't wrap around the <Card> properly */
    max-width: 404px; 
    width: 100%;
    height: fit-content;
    
    /* This is to match SMUI's card's border radius */
    border-radius: 5px;
    box-sizing: border-box;
  }

  .orange-border {
    border: 2px solid hsl(0,0%,0%, 0.80);
  }

  .purple-border {
    /* used to be purple  */
    border: 2px solid #5d0068;  
  }
  
  .red-text {
    color: red;
  }

  input[type="checkbox"] {
    cursor: pointer;
  }
</style>
