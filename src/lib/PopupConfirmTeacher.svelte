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

      {#if !!!$user.uid}
        <ReusableSignInButton/>
      {/if}

      <div style="margin-bottom: 24px;"></div>

      <div style="font-size: 16px;" class:greyed-out-section={!!!$user.uid || !memberDoc}>
        <ol>
          <li>
            Setup basic info
          </li>

          <div>
            {#if memberDoc}
              <div style="margin-bottom: 12px;"></div>

              <UXFormField 
                fieldLabel="Bio"
                value={memberDoc.bio}
                on:input={(e) => debouncedUpdateBio({ newVal: e.target.value })}                
              />

              <div style="margin-bottom: 12px;"></div>
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
            Initial setup complete!
          </li>
          <div style="font-size: 14px;">
            As time goes on, you can accept paid subscribers (you'll receive an email to setup payment info), record more explanations, organize your content in folders, reply to follow-up questions in your video comments, edit your profile, etc.
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
  import { createEventDispatcher, onMount } from 'svelte'
  import { user } from '/src/store.js'
  import { updateFirestoreDoc, createFirestoreQuery, getFirestoreQuery, getFirestoreDoc, setFirestoreDoc } from '../helpers/crud.js'
  import { getMemberDocSchema } from '/src/helpers/schema.js'
  import { debounce } from '/src/helpers/utility.js'
  import ReusableSignInButton from '$lib/ReusableSignInButton.svelte'
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
    handleMemberDocLogic($user)
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
</script>

<style>
  .greyed-out-section {
    opacity: 0.5;
  }

  li {
    margin-bottom: 6px;
    margin-top: 4px;
    font-weight: 500;
  }
</style>