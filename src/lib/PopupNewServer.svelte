<Button 
  on:click={() => isPopupOpen = true}
  color="secondary" variant="outlined" class="call-to-action-button" 
  style="	
    height: 3vw; 
    min-height: 42px;
    margin-top: 0.85vw; 
    margin-bottom: 0.8vw; 
    border-radius: 1.5vw;
  "
>
  <Label style="text-transform: none; padding-left: 16px; padding-right: 16px; padding-top: 10px; padding-bottom: 10px; font-size: 1.4em; font-weight: 600">
    Create new server
  </Label>
</Button>

{#if isPopupOpen}
  <BasePopup on:popup-close={() => isPopupOpen = false} style="min-width: 340px; width: 60%; max-width: 620px; padding: 24px;">
    <div slot="title" style="margin: 0; font-size: 28px; font-weight: 600;">
      New server
    </div> 

    <div slot="popup-content">
      <div style="display: flex; justify-content: center;">
        <div style="margin-top: 24px; background-color: #f5f5f5; border-radius: 12px; width: 90%; height: fit-content; padding: 24px; box-sizing: border-box;">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 24px;"
          >  
            <div style="margin-right: 6px;; flex: 1">
              <UXFormField
                fieldLabel="Full class name"       
              />
            </div>
            
            <div style="margin-left: 6px; flex: 1">
              <UXFormField
                fieldLabel="College version"
              />
            </div>
          </div>


        <!-- What's the goal of this server, how will it help its members -->
        <div style="flex: 1">
          <UXFormField
            fieldLabel="Server description"
          />
        </div>
      </div>
    </div>

      <div style="display: flex; justify-content: flex-end; align-items: center; margin-top: 24px;">
        <Button color="secondary" variant="raised" class="call-to-action-button" 
          style="	
            height: 1.5vw; 
            min-height: 42px;
            border-radius: 36px;
            margin-right: 2px;
          "
        >
          <Label style="text-transform: none; padding-left: 8px; padding-right: 8px; padding-top: 10px; padding-bottom: 10px; font-size: 16px; font-weight: 600">
            Create server
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
  import UXFormField from '$lib/UXFormField.svelte'
 
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