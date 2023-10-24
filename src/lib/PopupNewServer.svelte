<Button 
  on:click={() => isPopupOpen = true}
  color="secondary" variant="outlined" class="call-to-action-button" 
  style="	
    height: 4.2vw; 
    min-height: 42px;
    margin-top: 0.85vw; 
    margin-bottom: 0.8vw; 
    border-radius: 0px;
  "
>
  <Label style="text-transform: none; padding-left: 16px; padding-right: 16px; padding-top: 10px; padding-bottom: 10px; font-size: 1.4em; font-weight: 600">
    Create new server
  </Label>
</Button>

{#if isPopupOpen}
  <BasePopup on:popup-close={() => isPopupOpen = false} style="min-width: 340px; width: 60%;">
    <h2 slot="title" style="font-family: sans-serif; padding-left: 14px;">
      Create new class server
    </h2> 

    <div style="padding: 24px;" slot="popup-content">

      <div style="background-color: #f5f5f5; border-radius: 12px; width: 90%; height: fit-content; padding: 16px;">
        <Textfield variant="outlined" bind:value={valueA} label="Official class name" style="background-color: white;">
          <HelperText slot="helper">Colleges sometimes use code names e.g. 18.06, MAT 271</HelperText>
        </Textfield>

        <Textfield variant="outlined" bind:value={valueA} label="Readable name" style="background-color: white;">
          <HelperText slot="helper">The name that most of the world understands e.g. Linear Algebra, Multivariable Calculus</HelperText>
        </Textfield>

        <Textfield variant="outlined" bind:value={valueA} label="College" style="background-color: white;">
          <HelperText slot="helper">This affects the syllabus version</HelperText>
        </Textfield>

        <Textfield
          style="width: 100%;  background-color: white;"
          helperLine$style="width: 100%;"
          textarea
          bind:value
          label="Server description"
        >
          <HelperText slot="helper">What's the goal of this server, how will it help its members</HelperText>
        </Textfield>

        <input type="checkbox" value="true"> cross-college server
      </div>

      <div style="display: flex; justify-content: flex-end; align-items: center;">
        <Button on:click={() => isPopupOpen = false}>
          Cancel
        </Button>

        <Button color="secondary" variant="raised" class="call-to-action-button" 
          style="	
            height: 3vw; 
            min-height: 42px;
            margin-top: 0.85vw; 
            margin-bottom: 0.8vw; 
            border-radius: 36px;
          "
        >
          <Label style="text-transform: none; padding-left: 16px; padding-right: 16px; padding-top: 10px; padding-bottom: 10px; font-size: 1.4em; font-weight: 600">
            Create this server
          </Label>
        </Button>
        </div>
    </div>
  </BasePopup>
{/if}

<script>
  import BasePopup from '$lib/BasePopup.svelte'
  import { createEventDispatcher, onMount } from 'svelte'
  import { user } from '../store.js'
  import { updateFirestoreDoc, setFirestoreDoc } from '../helpers/crud.js'
  import Button, { Label } from '@smui/button'
  import { getRandomID } from '../helpers/utility.js'
  import Textfield from '@smui/textfield'
  import HelperText from '@smui/textfield/helper-text';
 
  let valueA = '';
  let valueB = '';
  let valueC = '';
  let valueD = '';
  let value = ''

  const dispatch = createEventDispatcher()

  let classNameInputField
  let classDescInput

  let isPopupOpen = false

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
        numOfSubscriptions: 0, // keep it +1 whenever someone subscribes to the class
        numOfUnresolvedQuestions: 0,
        numOfResolvedQuestions: 0,
        numOfCreators: 0
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