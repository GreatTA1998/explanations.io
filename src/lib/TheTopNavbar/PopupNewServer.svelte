{#if showTrigger}
  <ReusableRoundButton on:click={() => isPopupOpen = true} backgroundColor="" textColor="purple">
    <span class="material-symbols-outlined" style="margin-right: 6px;">
      add
    </span>
    <div style="font-weight: 500;">
      Create new server
    </div>
  </ReusableRoundButton>
{/if}

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
        <ReusableRoundButton on:click={createNewClassServer} backgroundColor="#5d0068" textColor="white" isDisabled={!serverFullName || creating}>
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
  import { createEventDispatcher } from 'svelte'
  import { goto } from '$app/navigation'
  import { setFirestoreDoc, createRoomDoc } from '/src/helpers/crud.js'
  import { getRandomID } from '/src/helpers/utility.js'
  import { user } from '/src/store.js'

  export let isOpen = undefined
  export let showTrigger = true

  let serverFullName = ''
  let serverGoalDescription = ''
  let serverSyllabusVersion = ''
  let isPopupOpen = false
  let creating = false

  const dispatch = createEventDispatcher()

  $: if (isOpen !== undefined) {
    isPopupOpen = isOpen
  }

  export function openPopup () {
    isPopupOpen = true
  }

  async function createNewClassServer () {
    if (creating || !serverFullName) return
    creating = true
    const newClassID = getRandomID()
    try {
      await setFirestoreDoc(`/classes/${newClassID}`, {
        name: serverFullName,
        description: serverGoalDescription,
        syllabusVersion: serverSyllabusVersion,
        isYoutubeClass: true,
        isPublic: true,
        creatorUID: ($user && $user.uid) || '',
        featuredRoomID: newClassID,
        numOfMembers: 0,
        numOfHelpers: 0,
        numOfQuestions: 0,
        numOfVideos: 0,
        numOfSubscriptions: 0,
        numOfUnresolvedQuestions: 0,
        numOfResolvedQuestions: 0,
        numOfCreators: 0
      })
      await createRoomDoc(`classes/${newClassID}/`, newClassID)
      isPopupOpen = false
      dispatch('popup-close')
      await goto(`/${newClassID}/${newClassID}`)
    } finally {
      creating = false
    }
  }
</script>
