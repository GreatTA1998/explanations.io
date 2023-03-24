<BasePopup on:popup-close>
  <h2 slot="title" style="font-family: sans-serif;">
    Get notified on new shops
  </h2>
  <div slot="popup-content" style="font-family: sans-serif; padding: 12px;">
    {#if !$user.phoneNumber}
      1. Log in with mobile number
      <PhoneLogin/>
    {:else}
      <div>
        What are you looking for in <i>Explain</i> that'd be better than your experience with existing resources e.g. more availability, more thorough help, more intution, more flexibility etc.? What problems 
        do you face when you use existing resources like Office Hours, Piazza etc.?
        <br>
        <br>
        This helps potential helpers shape their videos around what you really want

        <br>
        <br>
        Examples:
          "I understand concepts but don't know how to approach the problems"
          "I can't go to Office Hours because it's 1 hour and a long walk there, so by the time I get there it's done"
          "I'm lost in all the details of the class and have no simple intuition for why we're learning all these things"

        <Textfield style="width: 100%" textarea bind:value placeholder="e.g. Don't know how to approach a new problem in general, can't make it to Office Hours, want more high-level intuition for the class before the daunting details">
          <HelperText slot="helper">What gap should Explain fill?</HelperText>
        </Textfield>
        <br><br>
      </div>
    {/if}
  </div>

  <div slot="popup-buttons" style="direction: rtl; margin-bottom: 12px; margin-right: 4px;">
    {#if !isWatching}
      <Button 
        disabled={!$user.phoneNumber}
        on:click={watch}
        color="secondary"
      >
        Watch
      </Button>
    {:else}
      <Button 
        disabled={!$user.phoneNumber}
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
  import { debounce } from '../helpers/utility.js'
  import Button from '@smui/button'
  import { doc, increment, arrayUnion, arrayRemove, updateDoc, setDoc, getFirestore, deleteDoc } from 'firebase/firestore';
  import Textfield from '@smui/textfield';
  import HelperText from '@smui/textfield/helper-text';

  export let classID

  const dispatch = createEventDispatcher()

  let value = ''

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
    const db = getFirestore()
    const watcherRef = doc(db, `classes/${classID}/watchers/${$user.uid}`)
    setDoc(watcherRef, {
      name: $user.name,
      phoneNumber: $user.phoneNumber,
      reasonForWatching: value
    })
    updateFirestoreDoc(`users/${$user.uid}`, {
      idsOfWatchingClasses: arrayUnion(classID)
    })
    updateFirestoreDoc(`classes/${classID}`, {
      numOfWatchers: increment(1)
    })
    dispatch('popup-close')
  }

  function unwatch () {
    const db = getFirestore()
    const watcherRef = doc(db, `classes/${classID}/watchers/${$user.uid}`)
    deleteDoc(watcherRef)
    updateFirestoreDoc(`users/${$user.uid}`, {
      idsOfWatchingClasses: arrayRemove(classID)
    })
    updateFirestoreDoc(`classes/${classID}`, {
      numOfWatchers: increment(-1)
    })
    dispatch('popup-close')
  }

  function updateUserName () {
    updateFirestoreDoc(`users/${$user.uid}`, {
      name: inputFieldFirstName + ' ' + inputFieldLastName
    })
  }
</script>