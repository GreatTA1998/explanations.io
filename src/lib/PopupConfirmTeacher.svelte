<slot 
  {isPopupOpen} 
  {setIsPopupOpen}
>

</slot>

{#if isPopupOpen}
  <BasePopup on:popup-close={() => isPopupOpen = false} style="padding: 24px;">
    <div slot="title" style="font-size: 24px; font-weight: 500;">
      Teacher sign-up
    </div>

    <div slot="popup-content">    

      <div style="font-size: 14px; color: rgb(100, 100, 100); margin-top: 10px;">
        "People subscribe not for a particular [video] necessarily, but because they 
          fall in love with your particular perspective on explaining the subject matter"
          <a href="https://on.substack.com/p/why-free-posts-pay-avoiding-a-tempting" target="_blank">article from Substack</a>
      </div>

      <div style="margin-top: 12px"></div>

      <div style="font-size: 16px;">
        <div style="margin-bottom: 24px;"></div>
          <ol>
            <li>
              Setup basic info
            </li>

            {#if !!!$user.uid}
              <ReusableSignInButton/>
            {:else}

            {/if}


            <div style="opacity: {!!!$user.uid && memberDoc ? 0.1 : 1.0};">
              {#if memberDoc}
                <div style="margin-bottom: 12px;"></div>

                <UXFormField 
                  fieldLabel="Teaching style & background"
                  value={memberDoc.bio}
                  on:input={(e) => debouncedUpdateBio({ newVal: e.target.value })}                
                />

                <div style="margin-bottom: 12px;"></div>
                    
                <UXFormField 
                  value={memberDoc.venmo}
                  on:input={(e) => debouncedUpdateTeacherVenmo({ newVal: e.target.value })}
                  fieldLabel="Payment info (Stripe integration coming soon!)" 
                  placeholder="e.g. @venmo-username, $cashapp-username"
                />
              {/if}
            </div>

          <div style="margin-top: 16px;"></div>

          <li>
            <div style="display: flex; align-items: center; margin-top: 20px; position: relative; top: 5px;">
              <span class="material-symbols-outlined" style="margin-right: 6px;">
                stylus_note
              </span>
              Record your first explanation
            </div>
          </li>

          <div style="font-size: 14px;">
            On the left navigation pane, create a blackboard room for recording explanations. Or reply to existing questions.

          </div>

          <div style="margin-top: 24px;"></div>

          <li>
            Setup complete!
          </li>
          <div style="font-size: 14px;">
            As time goes on, you can accept paid subscribers, record more explanations, organize your content in folders, reply to follow-up questions in your video comments, edit your profile, etc.
          </div>
        </ol>
      </div>
      <br>
    </div>

    <div slot="popup-buttons" style="display: flex; justify-content: flex-end">
      {#if memberDoc}
        {#if !!!memberDoc.isTeacher}
          <ReusableRoundButton 
            on:click={doTeacherSignUp}
            backgroundColor="#5d0068" textColor="white"
          >
            Confirm sign-up
          </ReusableRoundButton>
        {:else}
          <ReusableRoundButton on:click={undoTeacherSignUp}
            backgroundColor="#5d0068" textColor="white"
          >
            Cancel sign-up
          </ReusableRoundButton>
        {/if}
      {/if}
    </div>
  </BasePopup>
{/if}

<script>
  import BasePopup from '$lib/BasePopup.svelte'
  import Checkbox from '@smui/checkbox'
  import { createEventDispatcher, onMount } from 'svelte'
  import { user } from '/src/store.js'
  import { updateFirestoreDoc, createFirestoreQuery, getFirestoreQuery, getFirestoreDoc, setFirestoreDoc } from '../helpers/crud.js'
  import { getMemberDocSchema } from '/src/helpers/schema.js'
  import { debounce } from '/src/helpers/utility.js'
  import Button from '@smui/button'
  import ReusableSignInButton from '$lib/ReusableSignInButton.svelte'
  import ReusableButton from '$lib/ReusableButton.svelte'
  import TextAreaAutoResizing from '$lib/TextAreaAutoResizing.svelte' 
  import Textfield from '@smui/textfield'
  import HelperText from '@smui/textfield/helper-text';
  import UXFormField from '$lib/UXFormField.svelte';
  import ReusableRoundButton from '$lib/ReusableRoundButton.svelte';

  export let classID
    
  let memberDoc = null
  let inputFieldFirstName = ''
  let inputFieldLastName = ''

  const membersPath = `classes/${classID}/members/`
  const dispatch = createEventDispatcher()
  let isPopupOpen = false

  $: if (memberDoc) {
    console.log("memberDoc =", memberDoc)
  }

  $: if (isPopupOpen) {
    fetchOrCreateMemberDoc()
  }

  function setIsPopupOpen ({ newVal }) {
    isPopupOpen = newVal
  }

  function doTeacherSignUp () {
    updateMemberAsTeacher();
    dispatch('confirm-clicked');
    isPopupOpen = false;
  }

  function undoTeacherSignUp () {
    updateMemberAsNotTeacher()
    dispatch('confirm-clicked')
    isPopupOpen = false
  }

  function updateMemberAsTeacher () {
    updateFirestoreDoc(membersPath + $user.uid, {
      isTeacher: true
    })
  }

  function updateMemberAsNotTeacher () {
    updateFirestoreDoc(membersPath + $user.uid, {
      isTeacher: false
    })
  }

  async function fetchOrCreateMemberDoc () {
    memberDoc = {}
    const membersPath = `classes/${classID}/members/${$user.uid}`
    const resultDoc = await getFirestoreDoc(membersPath)
    if (!resultDoc) {
      console.log('memberDoc does not exist!')
      const memberDocSchema = getMemberDocSchema({ userDoc: $user })
      await setFirestoreDoc(
        membersPath + $user.uid,
        memberDocSchema
      )
      memberDoc = memberDocSchema
    }
    else {
      memberDoc = resultDoc
    }
  }
  
  const debouncedUpdateBio = debounce(
    updateTeacherBio,
    1000
  ) 

  async function updateTeacherBio ({ newVal }) {
    updateFirestoreDoc(`classes/${classID}/members/${memberDoc.uid}`, {
      bio: newVal
    })
  }

  // TO-DO: should be throttled
  const debouncedUpdateTeacherVenmo = debounce(
    updateTeacherVenmo, 
    500
  )

  function updateTeacherVenmo ({ newVal }) {
    updateFirestoreDoc(`classes/${classID}/members/${memberDoc.uid}`, {
      venmo: newVal
    })
  }

  function updateTeacherCashApp (cashApp) {
    updateFirestoreDoc(`classes/${classID}/members/${memberDoc.uid}`, {
      cashApp
    })
  }

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
</script>

<style>
  li {
    margin-bottom: 6px;
    margin-top: 4px;
    font-weight: 500;
  }
</style>