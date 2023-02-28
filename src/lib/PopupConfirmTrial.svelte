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

    <div>
      During this trial week, you can ask questions in the server, and your helper will create videos in response.
      <br><br>
      At the end of week, if the help was very good, you can tip generously to let them know. This gives 
      your helper more confidence to know their worth and encourages them to continue their pursuit of creating more and better videos.
    </div>

    <div style="height: 20px; display: flex; margin-top: 20px;">
      <Checkbox bind:checked touch />I've venmo'ed my tutor $1
    </div>
  </div>

  <div slot="popup-buttons" style="direction: rtl; margin-bottom: 12px; margin-right: 4px;">
    <Button 
      disabled={!checked || !$user.phoneNumber}
      on:click={() => dispatch('confirm-clicked')}
      color="secondary"
    >
      Join the server
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