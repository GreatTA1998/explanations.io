<slot 
  {isPopupOpen} 
  {setIsPopupOpen}
>

</slot>

{#if isPopupOpen}
  <BasePopup on:popup-close={() => isPopupOpen = false} width={1000} style="padding: 24px;">
    <div slot="title" style="font-size: 24px; font-weight: 500;">
      Crowdfund pledge
    </div>

    <div slot="popup-content">
      <div style="margin-top: 6px; margin-bottom: 24px; font-size: 14px; color: rgb(100, 100, 100); font-weight: 400;">
        Encourage teachers around the world to try creating explanation videos.
        <br>
        <br>
        When you finally decide to subscribe to a particular teacher, the amount you paid here will reduce your total cost. 
        In addition, all crowdfunders get a special 10% discount rate permanently. 
        <br>
        <br>
        Initially, we will experiment with subscriptions costing $10/month
      </div>

      {#if !!!$user.uid}
        <ReusableSignInButton/>
      {/if}

      <div class:greyed-out-section={!!!$user.uid || !memberDoc}>
        <div style="width: 25%;" >
          <UXFormField fieldLabel="How much?" placeholder="$10" 
            value={crowdfundAmount} 
            on:input={(e) => crowdfundAmount = e.target.value}
          />
        </div>


        <div style="margin-bottom: 24px;"></div>

        <UXFormField fieldLabel="What kind of explanations are you hoping for?" placeholder=""
          value={reasonForCrowdfunding}
          on:input={(e) => reasonForCrowdfunding = e.target.value}
        />

        <div style="margin-bottom: 24px;"></div>

        <input type="checkbox" bind:checked={isChecked}>I pledge that I will pay the amount above when a payment system is integrated to this website.
      </div>

      <div style="display: flex; justify-content: flex-end;">
        <ReusableRoundButton on:click={() => handleEarlyCrowdfunder()}
          backgroundColor="#036E15" textColor="white"
          isDisabled={!isChecked || !memberDoc}
        >
          Confirm Pledge
        </ReusableRoundButton>
      </div>
    </div>
  </BasePopup>
{/if}

<script>
  import BasePopup from '$lib/BasePopup.svelte'
  import Checkbox from '@smui/checkbox'
  import { createEventDispatcher, onMount, tick } from 'svelte'
  import { user } from '../store.js'
  import { updateFirestoreDoc, createRoomDoc, setFirestoreDoc } from '../helpers/crud.js'
  import Button from '@smui/button'
  import ReusableRoundButton from '$lib/ReusableRoundButton.svelte'
  import { doc, getFirestore, collection, query, where, orderBy, getDocs, setDoc, arrayUnion, increment, } from "firebase/firestore";
  import { portal } from '../helpers/actions.js'
  import { getRandomID } from '../helpers/utility.js'
  import UXFormField from '$lib/UXFormField.svelte'
  import ReusableSignInButton from '$lib/ReusableSignInButton.svelte'
  import { getMemberDocSchema } from '/src/helpers/schema.js'

  export let classID

  let isPopupOpen = false
  let crowdfundAmount = ''
  let reasonForCrowdfunding = ''
  let isChecked = false

  let memberDoc 

  $: if (isPopupOpen) {
    handleMemberDocLogic($user)
  }

  function setIsPopupOpen ({ newVal }) {
    isPopupOpen = newVal 
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
      setFirestoreDoc(
        membersPath + userDoc.uid,
        memberDocSchema
      )
      result = memberDocSchema
      memberDoc = result
    }
  }

  function handleEarlyCrowdfunder () {
    updateFirestoreDoc(`/classes/${classID}/members/${$user.uid}`, {
      crowdfundAmount,
      reasonForCrowdfunding,
      isLearner: true
    })
    isPopupOpen = false
  }

  let firstNameInput 
  let lastNameInput

  const dispatch = createEventDispatcher()
</script>

<style>
  .greyed-out-section {
    opacity: 0.5;
  }
</style>