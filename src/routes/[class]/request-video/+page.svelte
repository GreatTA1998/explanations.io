<div use:portal={'main-content'} style="padding: 16px;">
  <h2 style="font-family: sans-serif">
    Request video
  </h2>
  <ToCommunityOrHelper {classID} {isAskingCommunityOrHelper} 
    on:community-asking={() => isAskingCommunityOrHelper = 'community'}
    on:helper-asking={() => isAskingCommunityOrHelper = 'helper'}>
  </ToCommunityOrHelper>
  <!-- <div style="font-size: 24px; font-weight: 500; margin-bottom: 12px;">
    Ask a question
  </div> -->
  <!-- Here you can modify your information, like your bio, and your profile, top videos, statistics, etc. -->
  <!-- <div>Sign up as helper</div> -->
  <Textfield 
    style="width: 100%"
    value={questionTitleInput} on:input={(e) => questionTitleInput = e.target.value}
    class="room-title" 
  >
  </Textfield>
    <!-- style={`width: ${$maxAvailableWidth}px;`} -->

  <div style="margin-bottom: 12px;"></div>

  <TextAreaAutoResizing
    value={questionDescriptionInput} 
    on:input={(e) => questionDescriptionInput = e.detail}
    placeholder="Question description..."
  />

  <PsetPDFUploader
    on:file-uploaded={(e) => { 
      pdfOrImageAttachment = e.detail
    }}
  />
  {#if pdfOrImageAttachment}
    <div style="margin-top: 12px;">
      <div style="font-size: 12px; color: gray;">
        {pdfOrImageAttachment.name}
      </div>
    </div>
  {/if}

  <Button on:click={submitQuestion} style="margin-top: 24px; width: 100%; background-color: orange; color: white;">
    Submit question
  </Button>
</div>

<script>
  import { portal } from '../../../helpers/actions.js'
  import { getFirestoreCollection, updateFirestoreDoc } from '../../../helpers/crud.js'
  import ToCommunityOrHelper from '/src/routes/signup/[class]/ToCommunityOrHelper.svelte'
  import Button from '@smui/button'
  import TextAreaAutoResizing from '$lib/TextAreaAutoResizing.svelte'
  import Textfield from '@smui/textfield'
  import HelperText from '@smui/textfield/helper-text'
  import PsetPDFUploader from '$lib/PsetPDFUploader.svelte'
  import { createRoomDoc } from '../../../helpers/crud.js'

  import { arrayUnion } from "firebase/firestore"
  import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage"
  import { getRandomID } from "../../../helpers/utility.js";
  import { createEventDispatcher } from 'svelte'


  export let data
  let { classID, roomID } = data
  $: ({ classID, roomID } = data) // so it stays in sync when `data` changes

  let questionTitleInput = 'Question title' 
  let questionDescriptionInput = ''
  let isAskingCommunityOrHelper = 'community'
  let pdfOrImageAttachment = null

  async function submitQuestion () {
    if (questionTitleInput.at(-1) !== '?') {
      questionTitleInput = questionTitleInput + '?'
    }
    const roomUpdateObj = {
      name: questionTitleInput
    }
    if (pdfOrImageAttachment) {
      const { fileName, fileDownloadURL } = await uploadFileToStorage(pdfOrImageAttachment)
      roomUpdateObj.attachmentsDownloadURLs = arrayUnion(fileDownloadURL)
      roomUpdateObj.attachmentsNames = arrayUnion(fileName)
    }
    const newRoomDocID = await createRoomDoc(`classes/${classID}/`)
    updateFirestoreDoc(`classes/${classID}/rooms/${newRoomDocID}`, roomUpdateObj)
    updateFirestoreDoc(`classes/${classID}/blackboards/${newRoomDocID}`, {
      description: questionDescriptionInput
    })

    // TO-DO: send notification to subscribed helper
  }

  async function uploadFileToStorage (pdfOrImageFile) {
    return new Promise((resolve, reject) => {
      const storage = getStorage()
      const pdfRef = ref(storage, `questionAttachments/${getRandomID()}`)
      uploadBytes(pdfRef, pdfOrImageFile).then(() => {
        getDownloadURL(pdfRef).then((downloadURL) => {
          resolve({
            fileName: pdfOrImageFile.name,
            fileDownloadURL: downloadURL
          })
        })
      })
    })    
  }
</script>