
<div>
  <div style="display: flex; height: 40px; align-items: center; margin-top: 20px;">
    <Checkbox bind:checked touch />
    I confirm that I want to open a shop with videos in the new class
    - or - 
    I confirm that I want to request helpers in a new class
  </div>

  <div>
    <div>
      <input bind:value={classNameInputField} placeholder="e.g. 18.02">

      <input bind:value={classDescInput} placeholder="e.g. Multivariable Calculus">

      <ReusableButton on:click={createNewClassServer} disabled={!checked} on:click={createNewClassServer}>
        Create new class
      </ReusableButton>
    </div>
  </div>
</div>

<script>
  import ReusableButton from '$lib/ReusableButton.svelte';
  import Button, { Label } from '@smui/button';
  import OpenYourShop from "$lib/OpenYourShop.svelte";
  import { where } from 'firebase/firestore';
  import Checkbox from '@smui/checkbox'
  import { setFirestoreDoc } from '../../../helpers/crud.js'
  import { getRandomID } from '../../../helpers/utility.js'
  import PsetPDFUploader from '$lib/PsetPDFUploader.svelte'

  let classNameInputField
  let classDescInput

  let checked = false

  async function createNewClassServer () {
    if (!(classNameInputField && classDescInput)) {
      alert('Need class number and class name')
      return
    }
    const newClassID = getRandomID()
    // create class document
    await Promise.all([
      setFirestoreDoc(`/classes/${newClassID}`, {
        name: classNameInputField,
        description: classDescInput,
        isYoutubeClass: true
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