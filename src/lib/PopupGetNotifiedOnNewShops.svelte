<BasePopup on:popup-close>
  <h2 slot="title" style="font-family: sans-serif;">
    Get notified on new shops
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
      <br><br>
    </div>
  </div>

  <div slot="popup-buttons" style="direction: rtl; margin-bottom: 12px; margin-right: 4px;">
    {#if !isWatching}
      <Button 
        on:click={watch}
        color="secondary"
      >
        Watch
      </Button>
    {:else}
      <Button 
        on:click={unwatch}
        color="secondary"
      >
        Unwatch
      </Button>
    {/if}

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
  import { increment, arrayUnion, arrayRemove } from 'firebase/firestore';

  export let classID

  const dispatch = createEventDispatcher()

  let inputFieldFirstName = ''
  let inputFieldLastName = ''

  let isWatching = false

  $: {
    if ($user.idsOfWatchingClasses) {
      if ($user.idsOfWatchingClasses.includes(classID)) {
        isWatching = true
      }
    }
  }

  function watch () {
    updateFirestoreDoc(`users/${$user.uid}`, {
      idsOfWatchingClasses: arrayUnion(classID)
    })
    updateFirestoreDoc(`classes/${classID}`, {
      numOfWatchers: increment(1)
    })
  }

  function unwatch () {
    updateFirestoreDoc(`users/${$user.uid}`, {
      idsOfWatchingClasses: arrayRemove(classID)
    })
    updateFirestoreDoc(`classes/${classID}`, {
      numOfWatchers: increment(-1)
    })
  }

  function updateUserName () {
    updateFirestoreDoc(`users/${$user.uid}`, {
      name: inputFieldFirstName + ' ' + inputFieldLastName
    })
  }
</script>