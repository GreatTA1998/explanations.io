<BasePopup on:popup-close>
  <h2 slot="title" style="font-family: sans-serif;">
    Get notified on new shops
  </h2>
  <div slot="popup-content" style="font-family: sans-serif; padding: 12px;">
    {#if !$user.phoneNumber}
      1. Log in with mobile number
      <LoginPhone/>
    {:else}
      <div>
        MIT has free resources like Office Hours, Piazza, Math Learning Center, TSR^2, and departmental tutoring.
        So what exactly do you want out of Explain that you can't get out of existing resources?
        For example, convenience, flexibility, quality of help, more detail, etc.
        <br>
        <br>
        This helps potential helpers shape their videos around what you really want

        <br>
        <br>

        <Textfield style="width: 100%" textarea bind:value placeholder="e.g. Don't know how to approach a new problem in general, can't make it to Office Hours, want more high-level intuition for the class before the daunting details">
          <HelperText slot="helper">What gap should Explain fill?</HelperText>
        </Textfield>

        <div style="display: flex; align-items: center">
          Your budget:
          <button on:click={() => budgetCategoryNumber = 1} class:orange-highlight={budgetCategoryNumber === 1}>
            $5 - $10/week
          </button>
          <button on:click={() => budgetCategoryNumber = 2} class:orange-highlight={budgetCategoryNumber === 2}>
            $5 - $20/week
          </button>
          <button on:click={() => budgetCategoryNumber = 3} class:orange-highlight={budgetCategoryNumber === 3}>
            $5 - $50/week
          </button>
        </div>
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
  import LoginPhone from '$lib/LoginPhone.svelte'
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

  let budgetCategoryNumber = 2

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
      reasonForWatching: value,
      budgetCategoryNumber
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

<style>
  .orange-highlight {
    background-color: orange;
    color: white; 
  }
</style>