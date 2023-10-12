<BasePopup on:popup-close>
  <!-- <h2 slot="title" style="font-family: sans-serif; margin-left: 12px;">
    Why subscribe?
  </h2> -->
  <div slot="popup-content" style="font-family: sans-serif; padding: 24px; padding-top: 12px;">    
    <h2 style="font-family: sans-serif; margin-top: 0px; margin-bottom: 16px; font-size: 32px;">
      Pre-subscribe to server
    </h2>


    <div style="font-size: 24px; opacity: 0.9">
      "I'd subscribe if the right teacher for me exists"
    </div>
    <div style="margin-top: 36px;"></div>

    <div style="margin-bottom: 24px;"></div>

    <div style="font-size: 20px;">
      <div style="font-weight: 600;">How to get started:</div>

      <ol>
        <li>
          Send $1 - 10 to the founder (call 503 250 3868 or email elton@explanations.app to refund anytime)
        </li>

        <div style="margin-top: 12px; font-size: 14px;">
          Venmo: elton-lin-2 
          <br>
          CashApp: $eltonlin1998
        </div>
    
        <div style="margin-top: 12px;">
    
        </div>

        <div style="display: flex">
          <div class="prepay-amount-box" class:highlighted-box={prepayAmount === 1} on:click={() => prepayAmount = 1}>
            $1
          </div>

          <div style="margin-right: 12px; "></div>
          <div class="prepay-amount-box" class:highlighted-box={prepayAmount === 5} on:click={() => prepayAmount = 5}>
            $5
          </div>
          <div style="margin-right: 12px; "></div>
          <div class="prepay-amount-box" class:highlighted-box={prepayAmount === 10} on:click={() => prepayAmount = 10}>
            $10
          </div>
        </div>

        <div style="margin-top: 12px"></div>

        <div style="display: flex; align-items: center;">
          <input type="checkbox"> <div style="font-size: 14px">I sent the payment</div>
        </div>

        <div style="margin-bottom: 24px;"></div>

        <li>
          Write 1-3 sentences describing why you signed up 
        </li>

        <TextAreaAutoResizing placeholder='This will be posted on the forum so teachers know how to be most helpful to you)' fontSizeIncludeUnits={'1rem'}/>

        {#if !!!$user}
          <div style="margin-bottom: 24px;"></div>

          <li>
            Sign in 
          </li>
          <ReusableSignInButton></ReusableSignInButton>
        {/if}
    
        <div style="margin-bottom: 24px;"></div>
        <li>
          Done. You will be notified when new teachers sign up, and you can use your pre-paid amount for future subscriptions.
        </li>
      </ol>
   
    </div>

    <br>
  

    <!-- <div style="height: 20px; display: flex; align-items: center; margin-top: 20px;">
      <Checkbox bind:checked touch />
      I've venmo'ed $10
      to 
    </div> -->
  </div>

  <div slot="popup-buttons" style="direction: rtl; margin-bottom: 12px; margin-right: 4px;">
    <Button 
      disabled={prepayAmount === 0}
      on:click={() => dispatch('confirm-clicked')}
      color="secondary"
    >
      CONFIRM PRE-SUBSCRIPTION
    </Button>
    <Button on:click={() => dispatch('popup-close')}>
      Cancel
    </Button>
  </div>
</BasePopup>

<script>
  import BasePopup from '$lib/BasePopup.svelte'
  import Checkbox from '@smui/checkbox'
  import { createEventDispatcher, onMount } from 'svelte'
  import { user } from '../store.js'
  import { updateFirestoreDoc } from '../helpers/crud.js'
  import Button from '@smui/button'
  import TextAreaAutoResizing from '$lib/TextAreaAutoResizing.svelte'
  import ReusableSignInButton from '$lib/ReusableSignInButton.svelte'

  export let selectedTutorDoc

  const dispatch = createEventDispatcher()

  let inputFieldFirstName = ''
  let inputFieldLastName = ''
  let checked = false

  let prepayAmount = 1

  function updateUserName () {
    updateFirestoreDoc(`users/${$user.uid}`, {
      name: inputFieldFirstName + ' ' + inputFieldLastName
    })
  }


  // BELOW CODE WAS PASTED FROM <ToCommunityOrHelperCards/>, does not work as it is
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
</script>

<style>
  li {
    margin-bottom: 6px;
    margin-top: 6px;
    font-weight: 500;
  }

  .prepay-amount-box {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px; 
    height: 40px;
    border: 1px solid #3D8C4F;
  }

  .highlighted-box {
    background-color: #3D8C4F;
    color: white;
  }

</style>