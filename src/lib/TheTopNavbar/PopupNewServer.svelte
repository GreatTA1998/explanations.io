<ReusableRoundButton on:click={() => isPopupOpen = true} backgroundColor="" textColor="purple">
  <span class="material-symbols-outlined" style="margin-right: 6px;">
    add
  </span>
  <div style="font-weight: 500;">
    Create new server
  </div>
</ReusableRoundButton>

{#if isPopupOpen}
  <BasePopup on:popup-close={() => {
    isPopupOpen = false;
    dispatch('popup-close');
  }} style="min-width: 340px; width: 60%; max-width: 620px; padding: 24px;">
    <div slot="title" style="margin: 0; font-size: 28px; font-weight: 600;">
      New server
    </div> 

    <div slot="popup-content">
      <div style="display: flex; justify-content: center;">
        <div style="margin-top: 24px; background-color: #f5f5f5; border-radius: 12px; width: 90%; height: fit-content; padding: 24px; box-sizing: border-box;">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 24px;">  
            <div style="flex: 1">
              <UXFormField
                value={serverFullName}
                on:input={(e) => serverFullName = e.target.value}
                fieldLabel="Server name"    
                placeholder=""   
              />
            </div>
          </div>
                     


          <!-- What's the goal of this server, how will it help its members -->
          <div style="flex: 1">
            <UXFormField
              value={serverGoalDescription}
              on:input={(e) => serverGoalDescription = e.target.value}
              fieldLabel="(OPTIONAL) Server description"
              placeholder=""
            />
          </div>
        </div>
      </div>

      <div style="display: flex; justify-content: flex-end; align-items: center; margin-top: 24px;">
        <ReusableRoundButton on:click={createNewClassServer} backgroundColor="#5d0068" textColor="white" isDisabled={!serverFullName}>
          <span class="material-symbols-outlined" style="margin-right: 6px;">
            add
          </span>
          <div style="font-weight: 500;">Create server</div>
        </ReusableRoundButton>
      </div>
    </div>
  </BasePopup>
{/if}

<script>
  import BasePopup from '$lib/Reusable/BasePopup.svelte'
  import UXFormField from '$lib/Reusable/UXFormField.svelte'
  import ReusableRoundButton from '$lib/Reusable/ReusableRoundButton.svelte'
  import { createEventDispatcher, onMount } from 'svelte'
  import { updateFirestoreDoc, setFirestoreDoc } from '/src/helpers/crud.js'
  import { getRandomID } from '/src/helpers/utility.js'

  // Accept an external isOpen prop with default value of undefined
  export let isOpen = undefined;

  let serverFullName = '' 
  let serverGoalDescription = ''
  let serverSyllabusVersion = ''

  const dispatch = createEventDispatcher()

  // Internal state for when component controls its own visibility
  let isPopupOpen = false;
  
  // Make isPopupOpen reactive to isOpen when provided
  $: if (isOpen !== undefined) {
    isPopupOpen = isOpen;
  }

  // ASSUMES NAME & DESCRIPTION ARE NOT EMPTY STRINGS (BECAUSE THE SUBMIT BUTTON IS DISABLED OTHERWISE)
  async function createNewClassServer () {
    const newClassID = getRandomID()
    await Promise.all([
      setFirestoreDoc(`/classes/${newClassID}`, {
        name: serverFullName,
        description: serverGoalDescription,
        syllabusVersion: serverSyllabusVersion,
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
    dispatch('popup-close')
  }
</script>