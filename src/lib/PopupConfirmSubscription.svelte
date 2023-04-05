<BasePopup on:popup-close>
  <h2 slot="title" style="font-family: sans-serif;">
    Get started
  </h2>
  <div slot="popup-content" style="font-family: sans-serif; padding: 12px;">
    {#if !$user.phoneNumber}
      1. Log in with mobile number
      <PhoneLogin/>
    {:else if !$user.name || ($user.name && $user.name.split(' ')[0] === 'Beaver')}
      <div>First name</div>
      <input bind:value={inputFieldFirstName} placeholder="Alice, Bob, Charlie"/>

      <div>Last name</div>
      <input bind:value={inputFieldLastName} placeholder=""/>

      <Button on:click={updateUserName}>Submit</Button>
    {/if}

    <div style="font-size: 1rem;">
      Refund policy: refund anytime for any reason; refunds are covered by Explain so it's painless for students and tutors if things don't work out.
    </div>

    <div style="height: 20px; display: flex; margin-top: 20px;">
      <Checkbox bind:checked touch />
      I've venmo'ed $10
      <!-- ${selectedTutorDoc.weeklyPrice || 15}  -->
      to 
      @{selectedTutorDoc.venmo || "(check Venmo in teachers's bio (press the v-shaped arrow on the teacher's rectangle)"}
    </div>
  </div>

  <div slot="popup-buttons" style="direction: rtl; margin-bottom: 12px; margin-right: 4px;">
    <Button 
      disabled={!checked || !$user.phoneNumber}
      on:click={() => dispatch('confirm-clicked')}
      color="secondary"
    >
      Confirm subscription
    </Button>
    <Button on:click={() => dispatch('popup-close')}>
      Cancel
    </Button>
  </div>
</BasePopup>

<script>
  import PhoneLogin from '$lib/PhoneLogin.svelte'
  import BasePopup from '$lib/BasePopup.svelte'
  import Checkbox from '@smui/checkbox'
  import { createEventDispatcher, onMount } from 'svelte'
  import { user } from '../store.js'
  import { updateFirestoreDoc } from '../helpers/crud.js'
  import Button from '@smui/button'

  export let selectedTutorDoc

  console.log("popup confirm subscription: ")

  const dispatch = createEventDispatcher()

  let inputFieldFirstName = ''
  let inputFieldLastName = ''
  let checked = false

  function updateUserName () {
    updateFirestoreDoc(`users/${$user.uid}`, {
      name: inputFieldFirstName + ' ' + inputFieldLastName
    })
  }
</script>