<BasePopup on:popup-close>
  <h2 slot="title" style="font-family: sans-serif;">
    Create new class server
  </h2>
  <div slot="popup-content" style="font-family: sans-serif; padding: 12px;">
    <input bind:value={classNameInputField} placeholder="e.g. 18.02">

    <input bind:value={classDescInput} placeholder="e.g. Multivariable Calculus">
  </div>

  <div slot="popup-buttons" style="direction: rtl; margin-bottom: 12px; margin-right: 4px;"> 
    <Button on:click={createNewClassServer} disabled={!classNameInputField || !classDescInput }>
      Create new class
    </Button>
    <Button on:click={() => dispatch('popup-close')}>
      Cancel
    </Button>
  </div>
</BasePopup>

<script>
  import BasePopup from '$lib/BasePopup.svelte'
  import { createEventDispatcher, onMount } from 'svelte'
  import { user } from '../store.js'
  import { updateFirestoreDoc, setFirestoreDoc } from '../helpers/crud.js'
  import Button from '@smui/button'
  import { getRandomID } from '../helpers/utility.js'

  const dispatch = createEventDispatcher()

  let classNameInputField
  let classDescInput

  async function createNewClassServer () {
    if (!(classNameInputField && classDescInput)) {
      alert('Need class number and class name')
      return
    }
    const newClassID = getRandomID()
    await Promise.all([
      setFirestoreDoc(`/classes/${newClassID}`, {
        name: classNameInputField,
        description: classDescInput,
        isYoutubeClass: true,
        numOfMembers: 0, // has a phoneNumber
        numOfHelpers: 0, // sign up as helper
        numOfQuestions: 0, 
        numOfVideos: 0, // keep +=1 on the metadata, initialize it to the right value
        numOfSubscriptions: 0 // keep it +1 whenever someone subscribes to the class
      }),
      setFirestoreDoc(`classes/${newClassID}/rooms/${newClassID}}`, {
        blackboards: [newClassID]
      }),
      setFirestoreDoc(`classes/${newClassID}/rooms/${newClassID}}/blackboards/${newClassID}`, {
        // empty object
      })
    ])
    window.location.reload()
  }
</script>