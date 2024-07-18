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
        <div style="font-size: 14px; color: rgb(100, 100, 100); margin-top: 10px;">
          Ask your teacher questions directly, join other committed learners, and browse the pool of explanations you build up together. 
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

      <div style="margin-left: 24px;margin-bottom: 12px; display: flex; gap: 12px; align-items: center; justify-content: space-between; color: black; width: 340px; box-sizing: border-box;">
        <div on:click={() => activeTabName = 'old'} 
          class="tab-item-container" 
          class:active-underline-indicator={activeTabName === 'old'}
        >
          <span class="material-symbols-outlined" style="font-size: 32px; color: {activeTabName === 'old' ? 'black' : 'rgb(80, 80, 80)'}">
            psychology
          </span>
          <div style="font-size: 16px; margin-top: 0px;" class:active-bold={activeTabName === 'old'}>
            Pick a teacher
          </div>
        </div>
    
        <div on:click={() => activeTabName = 'new'} 
          class="tab-item-container" 
          class:active-underline-indicator={activeTabName === 'new'}
        >
          <span class="material-symbols-outlined" style="font-size: 32px; color: {activeTabName === 'new' ? 'black' : 'rgb(80, 80, 80)'}">
            wb_twilight
          </span>
          <div style="font-size: 16px;" class:active-bold={activeTabName === 'new'}>
            Request new teachers
          </div>
        </div>
      </div>

      <div style="margin-top: 24px;"></div>

      {#if !!!$user.uid}
        <ReusableSignInButton/>
      {/if}

      <div style="margin-bottom: 24px;"></div>

      <div style="font-size: 16px;" class:greyed-out-section={!!!$user.uid || !memberDoc}>
        {#if activeTabName === 'old'}
          <ol>
            <li>
              I want to directly learn & ask questions for 1 week from this teacher:
            </li>
            
            <div style="display: flex; flex-wrap: wrap; gap: 6px; margin-top: 12px;">
              {#each teacherDocs as teacherDoc}
                <div on:click={() => chosenTeacherUID = teacherDoc.uid} 
                  class:highlighted-chip={teacherDoc.uid === chosenTeacherUID}
                  style="cursor: pointer; border-radius: 16px; padding: 6px 16px; border: 2px solid black; width: fit-content;"
                >
                  {teacherDoc.name.split(" ")[0]}
                </div>
              {/each}
            </div>

            <div style="margin-bottom: 36px;"></div>
  
            <li>
              What'd be the ideal learning experience for you?
            </li>
            
            {#if memberDoc}
              <UXFormTextArea
                value={memberDoc.reasonForLearning}
                on:input={(e) => debouncedUpdateBio({ newVal: e.detail })}
                fieldLabel="Ideal learning experience"
                placeholder="There are some concepts that I just don't understand, 
                I want to finally understand them. "
              />
            {/if}

            <div style="margin-top: 36px"></div> 
            
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
                <Button 
                  variant="outlined"
                > 
                  Go to payment
                </Button>
              </a>
            <div style="margin-bottom: 24px;"></div>
          </ol>
        {:else if activeTabName === 'new'}
          <ol>
            <li>
              Describe your ideal teacher
            </li>

            {#if memberDoc}
              <UXFormTextArea
                value={memberDoc.reasonForLearning}
                on:input={(e) => debouncedUpdateBio({ newVal: e.detail })}
                fieldLabel="What kind of explanations are you looking for?"
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
        <ReusableRoundButton 
          on:click={doSubscriberSignUp}
          backgroundColor="#5d0068" 
          textColor="white"
          isDisabled={!!!$user.uid || !memberDoc || !chosenTeacherUID || !quickfix || memberDoc.subscribedTeacherUID}
        >
          Confirm sign-up
        </ReusableRoundButton>

      {:else if activeTabName === 'new'}
        <ReusableRoundButton  
          on:click={doPrepaidLearnerSignUp}
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
  import { debounce } from '/src/helpers/utility.js'
  import { getMemberDocSchema } from '/src/helpers/schema.js'
  import { arrayUnion, increment } from 'firebase/firestore'

  export let teacherDocs
  export let classID
  export let currentTeacherUID // i.e. the teacher selected in the Server Page

  let chosenTeacherUID = currentTeacherUID

  let activeTabName = 'old'
  let quickfix = ''
  
  $: if (isPopupOpen) {
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

  const debouncedUpdateBio = debounce(
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