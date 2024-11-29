<div>
  {#if isSignInPopupOpen}
    <PopupSignInWithOptions on:popup-close={() => isSignInPopupOpen = false}/>
  {/if} 

  <LeftDrawerToggleButton/>

  <div style="padding: 16px;">
    <CodepenInput
      value={questionTitleInput}
      on:input={(e) => questionTitleInput = e.target.value}
    />
    <span class="underline"></span>
    <!-- style={`width: ${$maxAvailableWidth}px;`} -->

    <div style="margin-bottom: 12px;"></div>

    <TextAreaAutoResizing
      value={questionDescriptionInput} 
      on:input={(e) => questionDescriptionInput = e.detail}
      placeholder="Details"
      numberOfInitialRowsIfEmpty={4}
    />

    <div style="margin-bottom: 12px;"></div>

    <div>
      <PsetPDFUploader
        on:files-attached={(e) => attachments = [...attachments, ...e.detail]}
      />

      {#each attachments as attachment}
        <div style="margin-top: 12px;">
          <div style="font-size: 12px; color: #0066cc">
            {attachment.name}
          </div>
        </div>
      {/each}
    </div>

    <!-- purple: '#5d0068' -->
    <!-- blackboard color: hsl(0,0%,0%, 0.80) -->
      <div>
        <div style="margin-top: 24px;"></div>
        {#if !!!$user.uid}
          <ReusableSignInButton frameworkColor="secondary"/>
        {/if}

        <div style="margin-top: 24px;"></div>

        <Button disabled={!!!$user.uid || isUploadingQuestion} 
          on:click={submitQuestion} 
          color="secondary"
          style="border-radius: 40px; color: white; background-color: {!!!$user.uid ? 'lightgrey' : '#5d0068' }; padding: 0px 24px;"
        >
          {isUploadingQuestion ? 'Submitting question...' : 'Post my question to server'}
        </Button>

        <div style="margin-top: 60px;"></div>
      </div>
  </div>
</div>

<script>
  import { user } from '../store.js'
  import Button from '@smui/button'
  import TextAreaAutoResizing from '$lib/TextAreaAutoResizing.svelte'
  import PsetPDFUploader from '$lib/PsetPDFUploader.svelte'
  import LeftDrawerToggleButton from '$lib/LeftDrawerToggleButton.svelte'
  import { 
    updateFirestoreDoc, 
    setFirestoreDoc,
    createNewMultiboard
  } from '../helpers/crud.js'

  import { arrayUnion, increment } from "firebase/firestore"
  import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage"
  import { getRandomID } from "../helpers/utility.js";
  import { mixpanelLibrary } from '/src/mixpanel.js'
  import CodepenInput from '$lib/CodepenInput.svelte'
  import PopupSignInWithOptions from '$lib/PopupSignInWithOptions.svelte'
  import ReusableSignInButton from '$lib/ReusableSignInButton.svelte'
  import { goto } from '$app/navigation'
  import { page } from '$app/stores'
  import { handleNewQuestionNotifications } from '/src/helpers/everythingElse.js'
  import { serverTimestamp } from 'firebase/firestore'

  export let classID 

  let isSignInPopupOpen = false
  let questionTitleInput = ''
  let questionDescriptionInput = ''

  let attachments = []

  let isUploadingQuestion = false

  async function submitQuestion () {
    if (questionTitleInput === '') {
      alert('Question title cannot be blank')
      return
    }
    isUploadingQuestion = true

    const questionUpdateObj = {
      name: questionTitleInput,
      askerName: $user.name,
      askerUID: $user.uid,
      dateAsked: new Date().toISOString(),
      title: questionTitleInput,
      description: questionDescriptionInput,
      timestamp: serverTimestamp(),
      blackboardIDs: [],
      isAnswered: false
    }

    // UPLOADING ATTACHMENTS
    const uploadPromises = []
    const downloadURLs = []
    const fileNames = []

    for (const attachment of attachments) {
      uploadPromises.push(
        uploadFileToStorage(attachment).then(({ fileName, fileDownloadURL }) => {
          downloadURLs.push(fileDownloadURL)
          fileNames.push(fileName)
        })
      )
    }

    questionUpdateObj.attachmentsDownloadURLs = downloadURLs
    questionUpdateObj.attachmentsNames = fileNames
    // END OF UPLOADING ATTACHMENTS

    await Promise.all(uploadPromises)

    const newQuestionID = getRandomID()

    mixpanelLibrary.track('Question asked', {
      title: questionTitleInput 
    })

    await handleNewQuestionNotifications({ 
      userDoc: $user, 
      questionTitleInput,
      linkToQuestion: `${$page.url.origin}/${classID}/question/${newQuestionID}`,
      classID,
      questionID: newQuestionID
    })

    // wait till notification resolves,
    // otherwise UI updates so fast they think it's already done 

    const promises = []
    
    const classPath = `classes/${classID}/`

    promises.push(
      setFirestoreDoc(classPath + `questions/${newQuestionID}`, questionUpdateObj)
    )

    promises.push(
      // initialize the first blackboard, this function will also update the `questionDoc` itself
      createNewMultiboard({ 
        baseDocPath: `${classPath}questions/${newQuestionID}`,
        boardsPath:`${classPath}blackboards/`
      })
    )
      
    promises.push(
      updateFirestoreDoc(`classes/${classID}`, {
        numOfUnresolvedQuestions: increment(1)
      })
    )

    await Promise.all(promises)
    isUploadingQuestion = false
    alert('Question submitted! Your teacher will usually reply within 2 days')
    goto(`/${classID}/question/${newQuestionID}`)
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