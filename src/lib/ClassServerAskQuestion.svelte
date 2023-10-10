<div use:portal={'main-content'}>
  {#if isSignInPopupOpen}
    <PopupSignInWithOptions on:popup-close={() => isSignInPopupOpen = false}/>
  {/if} 

  <LeftDrawerToggleButton/>

  <div style="padding: 16px;" on:click={checkIfUserSignedIn}>
    <CodepenInput
      readonly={!!!$user.uid}
      value={questionTitleInput}
      on:input={(e) => questionTitleInput = e.target.value}
    />
    <span class="underline"></span>
    <!-- style={`width: ${$maxAvailableWidth}px;`} -->

    <div style="margin-bottom: 12px;"></div>

    <TextAreaAutoResizing
      value={questionDescriptionInput} 
      on:input={(e) => questionDescriptionInput = e.detail}
      placeholder="Question description..."
      numberOfInitialRowsIfEmpty={4}
      readonly={!!!$user.uid}
    />

    <div style="margin-bottom: 12px;"></div>

    <div>
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
    </div>

    <ClassServerAskQuestionAllMembers 
      {classID}
    />  

    <!-- purple: '#5d0068' -->
    <!-- blackboard color: hsl(0,0%,0%, 0.80) -->
    <Button 
      on:click={submitQuestion} 
      variant="raised"
      style="
        border-radius: 0px; 
        margin-top: 36px; 
        width: 300px;
        height: 60px;
        font-size: 1.5em;
        color: white;
        background-color: #5d0068;
      "
    >
      Submit question
    </Button>
  </div>
</div>

<script>
  import { user } from '../store.js'
  import { portal } from '../helpers/actions.js'
  import { getFirestoreCollection, getFirestoreDoc, updateFirestoreDoc } from '../helpers/crud.js'
  import ClassServerAskQuestionAllMembers from '$lib/ClassServerAskQuestionAllMembers.svelte'
  import Button from '@smui/button'
  import TextAreaAutoResizing from '$lib/TextAreaAutoResizing.svelte'
  import Textfield from '@smui/textfield'
  import HelperText from '@smui/textfield/helper-text'
  import PsetPDFUploader from '$lib/PsetPDFUploader.svelte'
  import LeftDrawerToggleButton from '$lib/LeftDrawerToggleButton.svelte'
  import { createRoomDoc } from '../helpers/crud.js'

  import { arrayUnion, increment } from "firebase/firestore"
  import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage"
  import { getRandomID } from "../helpers/utility.js";
  import { createEventDispatcher } from 'svelte'
  import { sendTextMessage } from '../helpers/cloudFunctions.js';
  import { mixpanelLibrary } from '/src/mixpanel.js'
  import CodepenInput from '$lib/CodepenInput.svelte'
  import PopupSignInWithOptions from '$lib/PopupSignInWithOptions.svelte'

  export let classID 
  // export let roomID
  // export let data
  // let { classID, roomID } = data
  // $: ({ classID, roomID } = data) // so it stays in sync when `data` changes

  console.log('class server ask question mounting')

  let isSignInPopupOpen = false
  let questionTitleInput = ''
  let questionDescriptionInput = ''
  $: isAskingCommunityOrHelper = ($user.idsOfSubscribedClasses && $user.idsOfSubscribedClasses.includes(classID)) ? 'helper' : 'community'
  let pdfOrImageAttachment = null

  function checkIfUserSignedIn () {
    if (!$user.uid) {
      isSignInPopupOpen = true
    }
  }

  async function submitQuestion () {
    if (questionTitleInput === '') {
      alert('Question title cannot be blank')
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

    // Update stats/metadata that are affected by this operation
    updateFirestoreDoc(`classes/${classID}`, {
      numOfUnresolvedQuestions: increment(1)
    })

    mixpanelLibrary.track('Question asked', {
      title: questionTitleInput 
    })

    // Handle notifications
    // const classDoc = await getFirestoreDoc(`classes/${classID}`)
    // const classHelpers = await getFirestoreCollection(`classes/${classID}/tutors`)
    // for (const helper of classHelpers) {
    //   sendTextMessage({
    //     toWho: helper.phoneNumber,
    //     content: `New question in ${classDoc.name}: ${questionTitleInput} https://beavers.app/${classID}/${newRoomDocID}. Email eltonlin@mit.edu UNSUB PLS to stop notifications`
    //   })
    // }

    alert('Question submitted! Helpers will be notified')
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