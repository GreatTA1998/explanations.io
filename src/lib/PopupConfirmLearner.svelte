<slot 
  {isPopupOpen} 
  {setIsPopupOpen}
>

</slot>

{#if isPopupOpen}
  <BasePopup on:popup-close={() => isPopupOpen = false} style="padding: 24px;">
    <div slot="title" style="font-size: 24px; font-weight: 500; display: flex; align-items: center;">
      Sign up to learn
    </div>

    <div slot="popup-content">    
      {#if activeTabName === 'old'}
        <div style="font-size: 14px; color: rgb(100, 100, 100); margin-top: 10px; line-height: 1.5;">
          Ask your teacher questions directly, join other committed learners, and browse the pool of explanations you build up together. 
          Unsure about something? Feel free to <a target="_blank" href="https://cal.com/eltonlin1998/setup-call"> book a setup call</a> instead.
        </div>
      {:else}
        <div style="font-size: 14px; color: rgb(100, 100, 100); margin-top: 10px;">
          By paying early, you get a 10% discount permanently,
          and increase the chance of the server attracting more teaching talent.
        </div>
      {/if}

      <hr style="
        margin-top: 16px; margin-bottom: 16px; height: 1px;
        color: rgb(220, 220, 220);
        background-color: rgb(220, 220, 220);
        border: none;
      "
      >

      <div style="padding: 24px; row-gap: 36px; display: flex; flex-direction: column">
        <div style="display: flex; gap: 12px; align-items: center; justify-content: space-between; color: black; width: 340px; box-sizing: border-box;">
          <button on:click={() => activeTabName = 'old'} 
            class="tab-item-container" 
            class:active-underline-indicator={activeTabName === 'old'}
          >
            <span class="material-symbols-outlined" style="font-size: 32px; color: {activeTabName === 'old' ? 'black' : 'rgb(80, 80, 80)'}">
              psychology
            </span>
            <div style="font-size: 16px; margin-top: 0px;" class:active-bold={activeTabName === 'old'}>
              Pick a teacher
            </div>
          </button>
      
          <button on:click={() => activeTabName = 'new'} 
            class="tab-item-container" 
            class:active-underline-indicator={activeTabName === 'new'}
          >
            <span class="material-symbols-outlined" style="font-size: 32px; color: {activeTabName === 'new' ? 'black' : 'rgb(80, 80, 80)'}">
              wb_twilight
            </span>
            <div style="font-size: 16px;" class:active-bold={activeTabName === 'new'}>
              Request new teachers
            </div>
          </button>
        </div>

        {#if !!!$user.uid}
          <ReusableSignInButton/>
        {/if}
      </div>

      <div style="font-size: 16px;" class:greyed-out-section={!!!$user.uid || !memberDoc}>
        {#if activeTabName === 'old'}
          <ol style="display: flex; flex-direction: column; gap: 36px;">
            <div>
              <li>
                I want to directly learn & ask questions for 1 week from this teacher:
              </li>

              <div style="display: flex; flex-wrap: wrap; gap: 6px; margin-top: 12px;">
                {#each teacherDocs as teacherDoc}
                  <button on:click={() => chosenTeacherUID = teacherDoc.uid} 
                    class:highlighted-chip={teacherDoc.uid === chosenTeacherUID}
                    style="cursor: pointer; border-radius: 16px; padding: 6px 16px; border: 2px solid black; width: fit-content;"
                  >
                    {teacherDoc.name.split(" ")[0]}
                  </button>
                {/each}
              </div>
            </div>
  
            <div>
              <li>
                What'd be the ideal learning experience for you?
              </li>
              
              {#if memberDoc}
                <UXFormTextArea
                  value={memberDoc.reasonForLearning}
                  on:input={(e) => debouncedUpdateBio({ newVal: e.detail })}
                  fieldLabel="Ideal learning experience"
                  placeholder="Type here..."
                />
              {/if}
            </div>
            
            <div>
              <li>
                Pay $10
              </li>
              
              <div style="font-size: 14px; margin-bottom: 8px;">
                Payments are handled by Stripe. 
                To refund, simply email elton@explanations.io
              </div>
  
              <a target="_blank" href="https://buy.stripe.com/3cs03Ng4V4D66yY3cg"
                style="text-decoration: none;"
              > 
                <Button variant="outlined"> 
                  Go to payment
                </Button>
              </a>      
            </div>
        
            <div style="margin-bottom: 24px;"></div>
          </ol>
        {:else if activeTabName === 'new'}
          <ol>
            <li>
              Describe your ideal teacher
            </li>

            {#if memberDoc}
              <UXFormTextArea fieldLabel="What kind of explanations are you looking for?"        
                value={memberDoc.reasonForLearning}
                on:input={(e) => debouncedUpdateBio({ newVal: e.detail })}
                placeholder=""
              />
            {/if}

            <div style="margin-bottom: 24px;"></div>
          <li>
            Prepay $10
          </li>
          
          <div style="font-size: 14px; margin-bottom: 8px;">
            Payments are handled by Stripe. 
            To refund, simply email elton@explanations.io
          </div>
            <a target="_blank" href="https://buy.stripe.com/3cs03Ng4V4D66yY3cg"
              style="text-decoration: none;"
            > 
              <Button 
                variant="outlined"
              > 
                Go to payment
              </Button>
            </a>

            <div style="margin-bottom: 24px;"></div>
          </ol>
        {/if}
      </div>

      <br>

    </div>

    <div slot="popup-buttons" style="display: flex; justify-content: flex-end">
      {#if activeTabName === 'old'}
        <ReusableRoundButton on:click={doSubscriberSignUp}
          backgroundColor="#5d0068" 
          textColor="white"
          isDisabled={!!!$user.uid || !memberDoc || !chosenTeacherUID || !quickfix || memberDoc.subscribedTeacherUID}
        >
          Confirm sign-up
        </ReusableRoundButton>

      {:else if activeTabName === 'new'}
        <ReusableRoundButton on:click={doPrepaidLearnerSignUp}
          backgroundColor="#5d0068" 
          textColor="white"
          isDisabled={!!!$user.uid || !memberDoc || !quickfix || memberDoc.isLearner}
        >
          Confirm sign-up
        </ReusableRoundButton>
      {/if}
    </div>
  </BasePopup>
{/if}

<script>  
  import BasePopup from '$lib/BasePopup.svelte'
  import Button from '@smui/button'
  import { createEventDispatcher, onMount } from 'svelte'
  import { user } from '../store.js'
  import { getFirestoreDoc, setFirestoreDoc, updateFirestoreDoc } from '../helpers/crud.js'
  import ReusableSignInButton from '$lib/ReusableSignInButton.svelte'
  import UXFormTextArea from '$lib/UXFormTextArea.svelte'
  import ReusableRoundButton from '$lib/ReusableRoundButton.svelte';
  import { createDebouncedFunction } from '/src/helpers/debounce.js'
  import { getMemberDocSchema } from '/src/helpers/schema.js'
  import { arrayUnion, increment } from 'firebase/firestore'

  export let teacherDocs = [{
    bio: `Hello, I'm a senior at MIT majoring in math. I've been tutoring students in math and physics for 6 years now. One of my clients received an Honors award (32nd place) in this year's USAJMO, despite only being in 7th grade! Feel free to check out my website at tinyurl.com/ShimEdu for more information.`,
    email: 'benshim333@gmail.com',
    firstName: 'Benjamin',
    isTeacher: true,
    lastName: 'Shimabukuro',
    maxShopGalleryOrder: 3,
    minutesViewed: '789',
    name: 'Benjamin Shimabukuro',
    numOfVideos: 44,
    phoneNumber: '+16198475091',
    subscriberUIDs: ['F6G4rHhKYtShN5aV2rqm9JRTbHB3'],
    uid: 'lX5yMlh4abTJycsFyLySoRhUItE3'
  }]
  export let classID = 'I90n3qyz45VmY0azjbhh'

  // TO-DO: this IS unnecessarily complicated but keep it for now
  export let currentTeacherUID = 'lX5yMlh4abTJycsFyLySoRhUItE3' // i.e. the teacher selected in the Server Page

  let chosenTeacherUID = currentTeacherUID

  let activeTabName = 'old'
  let quickfix = ''
  
  $: if (isPopupOpen && $user.uid) {
    handleMemberDocLogic($user)
  }

  $: if (memberDoc) {
    quickfix = memberDoc.reasonForLearning
  }

  const dispatch = createEventDispatcher()

  let isPopupOpen = false 
  function setIsPopupOpen ({ newVal }) {
    isPopupOpen = newVal
  }

  let memberDoc = null

  const debouncedUpdateBio = createDebouncedFunction(
    updateTeacherBio,
    1000
  ) 

  // assumes `chosenTeacherUID` is hydrated because the button is disabled otherwise.
  async function doPrepaidLearnerSignUp () {
    dispatch('confirm-clicked')
    isPopupOpen = false

    // update learner metadata
    updateFirestoreDoc(`classes/${classID}/members/${$user.uid}`, {
      isLearner: true,
      subscribedTeacherUID: ''
    })

    // update server metadata
    updateFirestoreDoc(`classes/${classID}`, {
      numOfPrepaidLearners: increment(1)
    })
  }

  // TO-DO: also update server statistics
  async function doSubscriberSignUp () {
    dispatch('confirm-clicked')
    isPopupOpen = false

    // update learner metadata
    updateFirestoreDoc(`classes/${classID}/members/${$user.uid}`, {
      isLearner: true,
      subscribedTeacherUID: chosenTeacherUID
    })
    
    // update teacher metadata
    updateFirestoreDoc(`classes/${classID}/members/${chosenTeacherUID}`, {
      subscriberUIDs: arrayUnion($user.uid)
    })

    // update server metadata
    updateFirestoreDoc(`classes/${classID}`, {
      numOfSubscribers: increment(1)
    })
  }
  
  async function updateTeacherBio ({ newVal }) {
    quickfix = newVal
    updateFirestoreDoc(`classes/${classID}/members/${memberDoc.uid}`, {
      reasonForLearning: newVal
    })
  }

  async function handleMemberDocLogic (userDoc) {
    const membersPath = `classes/${classID}/members/`
    
    let result
    try {
      result = await getFirestoreDoc(membersPath + userDoc.uid)
      memberDoc = result
    }
    catch (error) {
      console.log('error =', error)
      const memberDocSchema = getMemberDocSchema({ userDoc })
      await setFirestoreDoc(
        membersPath + userDoc.uid,
        memberDocSchema
      )
      result = memberDocSchema
      memberDoc = result
    }
  }
</script>

<style>
  .active-bold {
    font-weight: 600;
  }

  .active-underline-indicator {
    border-bottom: 2px solid #F7C686;
  }

  .highlighted-chip {
    background-color: black; 
    color: white;
  }

  .tab-item-container {
    cursor: pointer; text-align: center; height: 72px; box-sizing: border-box; padding: 8px 6px 8px 6px;
  }

  .greyed-out-section {
    opacity: 0.5;
  }

  li {
    margin-bottom: 6px;
    margin-top: 6px;
    font-weight: 500;
  }
</style>