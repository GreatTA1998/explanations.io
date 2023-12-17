<slot 
  {isPopupOpen} 
  {setIsPopupOpen}
>

</slot>

{#if isPopupOpen}
  <BasePopup on:popup-close width={1000}>
    <div slot="popup-content" style="padding: 12px;">
      {#if !$user.phoneNumber}
        <h2 class="mdc-typography--headline6" style="margin: 0; font-family: sans-serif;">
          1. Log in with phone
        </h2>
        <LoginPhone/>
      {:else}
        <div>
          Welcome { $user.name || '' }.
          
          <!-- TO-DO
            1. Log-in first, if not logged in
            2. Way to choose how much to pay? 
            3. Write reason for choosing
            4. Way to confirm the pledge to pay system 
          -->

          <ReusableButton on:click={createTutorDoc({ classID, firstName: $user.name.split(' ')[0], lastName: $user.name.split(' ')[1]})}>
            Confirm sign-up as helper
          </ReusableButton>
          <br>
          <br>
        </div>
        
        {#if !$user.name || ($user.name && $user.name.split(' ')[0] === 'Beaver')}
          <div>First name</div>
          <input bind:value={firstNameInput} placeholder="Alice, Bob, Charlie"/>

          <div>Last name</div>
          <input bind:value={lastNameInput} placeholder=""/>

          <Button on:click={createTutorDoc({ classID, firstName: firstNameInput, lastName: lastNameInput })}>
            Submit
          </Button>
        {/if}
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
  import { doc, getFirestore, collection, query, where, orderBy, getDocs, setDoc, arrayUnion, increment, } from "firebase/firestore";
  import { portal } from '../helpers/actions.js'
  import { getRandomID } from '../helpers/utility.js'
  import ReusableButton from '$lib/ReusableButton.svelte'

  export let classID

  let isPopupOpen = false

  function setIsPopupOpen ({ newVal }) {
    isPopupOpen = newVal 
  } 

  let firstNameInput 
  let lastNameInput

  const dispatch = createEventDispatcher()
</script>