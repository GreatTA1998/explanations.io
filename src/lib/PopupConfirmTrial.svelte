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
      While video-based help is more efficient, meeting your helper once can help you decide if you want to hire them.

      Text them to schedule a 30-min. tutoring session: { selectedTutorDoc.phoneNumber }
      <br><br>
      Tips are greatly appreciated but not expected
      <!-- Tips are optional, and a great way to give your helper more confidence and encourage them to continue their pursuit of creating more and better videos. -->
    </div>

    <div style="display: flex; height: 20px; margin-top: 20px;">
      <Checkbox bind:checked touch />
      I've venmo'ed $1 to @{selectedTutorDoc.venmo || "(check Venmo in teachers's bio (press the v-shaped arrow on the teacher's rectangle)"} 
    </div>
  </div>

  <div slot="popup-buttons" style="direction: rtl; margin-bottom: 12px; margin-right: 4px;">
    <Button 
      disabled={!checked || !$user.phoneNumber}
      on:click={() => dispatch('confirm-clicked')}
      color="secondary"
    >
      DONE
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