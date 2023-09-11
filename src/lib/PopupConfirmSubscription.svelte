<BasePopup on:popup-close>
  <h2 slot="title" style="font-family: sans-serif;">
    Become a subscriber
  </h2>
  <div slot="popup-content" style="font-family: sans-serif; padding: 12px;">    

    <div style="font-size: 1rem;">
      <b>Benefits of subscribing:</b>
      <div style="padding-left: 8px;">
        <li>
          Directly communicate with {selectedTutorDoc.name.split(' ')[0]} in their subscribers-only group chat
        </li>
        <li>Access to subscriber-only videos</li>
        <li>Gain pioneer subscriber badge permanently</li>
        <li>Fund creation of affordable education content for the internet</li>
      </div>
    </div>

    <br>
    
    <b>Refund policy: </b> full refund any time, any reason before end of month. 

    <div style="height: 20px; display: flex; align-items: center; margin-top: 20px;">
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