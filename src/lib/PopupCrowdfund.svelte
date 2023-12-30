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
        Signal to the world that teachers are needed here, encouraging them to try creating explanation videos.
        <br>
        <br>
        When you finally decide to subscribe to a particular teacher, the amount you paid here will reduce your total cost. 
        In addition, all crowdfunders get a special 10% discount rate permanently. 
        <br>
        <br>
        Initially, we will experiment with subscriptions costing $10/month
      </div>

      {#if !$user.phoneNumber}
        <h2 class="mdc-typography--headline6" style="margin: 0; font-family: sans-serif;">
          1. Log in with phone
        </h2>
        <LoginPhone/>
      {:else}
        <div>
          <!-- <div style="font-weight: 500; font-size: 16px; margin-top: 24px; margin-bottom: 6px;">
            What do you hope to get out of the server?
          </div> -->
          <div style="width: 25%;">
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

          <input type="checkbox">I pledge that I will pay the amount above when a payment system is integrated to this website.
        </div>

        <div style="display: flex; justify-content: flex-end;">
          <ReusableRoundButton on:click={() => handleEarlyCrowdfunder()}
            backgroundColor="#036E15" textColor="white"
          >
            Confirm Pledge
          </ReusableRoundButton>
        </div>
      {/if}
    </div>
  </BasePopup>
{/if}

<script>
  import LoginPhone from '$lib/LoginPhone.svelte'
  import BasePopup from '$lib/BasePopup.svelte'
  import Checkbox from '@smui/checkbox'
  import { createEventDispatcher, onMount, tick } from 'svelte'
  import { user } from '../store.js'
  import { updateFirestoreDoc, createRoomDoc } from '../helpers/crud.js'
  import Button from '@smui/button'
  import ReusableRoundButton from '$lib/ReusableRoundButton.svelte'
  import { doc, getFirestore, collection, query, where, orderBy, getDocs, setDoc, arrayUnion, increment, } from "firebase/firestore";
  import { portal } from '../helpers/actions.js'
  import { getRandomID } from '../helpers/utility.js'
  import UXFormField from '$lib/UXFormField.svelte'

  export let classID

  let isPopupOpen = false
  let crowdfundAmount = ''
  let reasonForCrowdfunding = ''

  function setIsPopupOpen ({ newVal }) {
    isPopupOpen = newVal 
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