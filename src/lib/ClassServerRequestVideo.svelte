<div use:portal={'main-content'} style="padding: 16px;">

  {#if !$user.phoneNumber}
    <div style="margin-left: 24px; display: flex; align-items: center; width: 95%; margin-left: auto; margin-right: auto;">
      Log in first
      <PhoneLogin/>
    </div>
  {/if}

  <Textfield 
    style="width: 100%;"
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
    numberOfInitialRowsIfEmpty={4}
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

  <ToCommunityOrHelper {classID} {isAskingCommunityOrHelper} 
    on:community-asking={() => isAskingCommunityOrHelper = 'community'}
    on:helper-asking={() => isAskingCommunityOrHelper = 'helper'}>
  </ToCommunityOrHelper>

  <Button 
    on:click={submitQuestion} 
    variant="raised"
    style="border-radius: 0px; margin-top: 12px; width: 100%; background-color: {isAskingCommunityOrHelper === 'community' ? 'orange' : '#5d0068'}; color: white;"
  >
    Submit question
  </Button>
</div>

<script>
  import { portal } from '../helpers/actions.js'
  import { getFirestoreCollection, getFirestoreDoc, updateFirestoreDoc } from '../helpers/crud.js'
  import ToCommunityOrHelper from '/src/routes/signup/[class]/ToCommunityOrHelper.svelte'
  import Button from '@smui/button'
  import TextAreaAutoResizing from '$lib/TextAreaAutoResizing.svelte'
  import Textfield from '@smui/textfield'
  import HelperText from '@smui/textfield/helper-text'
  import PsetPDFUploader from '$lib/PsetPDFUploader.svelte'
  import { createRoomDoc } from '../helpers/crud.js'

  import { arrayUnion, increment } from "firebase/firestore"
  import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage"
  import { getRandomID } from "../helpers/utility.js";
  import { createEventDispatcher } from 'svelte'
  import PhoneLogin from '$lib/PhoneLogin.svelte'
  import { user } from '../store.js'
  import { sendTextMessage } from '../helpers/cloudFunctions.js';

  export let classID 
  // export let roomID
  // export let data
  // let { classID, roomID } = data
  // $: ({ classID, roomID } = data) // so it stays in sync when `data` changes

  let questionTitleInput = 'Type in your question title here...' 
  let questionDescriptionInput = ''
  $: isAskingCommunityOrHelper = ($user.idsOfSubscribedClasses && $user.idsOfSubscribedClasses.includes(classID)) ? 'helper' : 'community'
  let pdfOrImageAttachment = null

  async function submitQuestion () {
    if (!$user.phoneNumber) {
      alert('Need to log in with phone number first')
      return
    }
    if (questionTitleInput === 'Type in your question title here...') {
      alert('Have to type a question title first')
      return
    }

    if (questionTitleInput.at(-1) !== '?') {
      questionTitleInput = questionTitleInput + '?'
    }
    const roomUpdateObj = {
      name: questionTitleInput,
      // because we know who asked the question,
      // we can notify them later whenever anyone replies
      askerName: $user.name,
      askerUID: $user.uid,
      dateAsked: new Date().toISOString()
    }
    if (pdfOrImageAttachment) {
      const { fileName, fileDownloadURL } = await uploadFileToStorage(pdfOrImageAttachment)
      roomUpdateObj.attachmentsDownloadURLs = arrayUnion(fileDownloadURL)
      roomUpdateObj.attachmentsNames = arrayUnion(fileName)
    }
    const newRoomDocID = await createRoomDoc(`classes/${classID}/`)
    updateFirestoreDoc(`classes/${classID}/rooms/${newRoomDocID}`, roomUpdateObj)
    updateFirestoreDoc(`classes/${classID}/blackboards/${newRoomDocID}`, {
      description: questionDescriptionInput,
    })
    updateFirestoreDoc(`classes/${classID}`, {
      numOfQuestions: increment(1)
    })

    // send text notification to all helpers
    const classDoc = await getFirestoreDoc(`classes/${classID}`)
    const classHelpers = await getFirestoreCollection(`classes/${classID}/tutors`)
    for (const helper of classHelpers) {
      sendTextMessage({
        toWho: helper.phoneNumber,
        content: `New question in ${classDoc.name}: ${questionTitleInput} https://beavers.app/${classID}/${newRoomDocID}. Email eltonlin@mit.edu UNSUB PLS to stop notifications`
      })
    }
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