<BasePopup on:popup-close>
  <h2 slot="title" style="font-family: sans-serif;">
    How to get started
  </h2>
  <div slot="popup-content" style="font-family: sans-serif;">
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

    <div>
      Refund policy: Explain covers refunds anytime for oany reason, so both students and tutors are protected.
    </div>

    <div style="height: 20px; display: flex;">
      <Checkbox bind:checked touch />I've venmo'ed the tutor
    </div>
  </div>

  <div slot="popup-buttons">
    <ReusableButton 
      disabled={!checked || !$user.phoneNumber}
      on:click={() => dispatch('confirm-clicked')}
    >
      Confirm
    </ReusableButton>
    <ReusableButton>Cancel</ReusableButton>
  </div>
</BasePopup>

<script>
  import PhoneLogin from '$lib/PhoneLogin.svelte'
  import BasePopup from '$lib/BasePopup.svelte'
  import ReusableButton from '$lib/ReusableButton.svelte'
  import Checkbox from '@smui/checkbox'
  import { createEventDispatcher, onMount } from 'svelte'
  import { user } from '../store.js'
  import { updateFirestoreDoc } from '../helpers/crud.js'
  import Button from '@smui/button'

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