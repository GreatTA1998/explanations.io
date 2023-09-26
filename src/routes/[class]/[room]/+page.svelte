<!-- This is a quickfix for routing -->
{#if roomID === 'request-video'}
  <ClassServerAskQuestion {classID}/>
{:else if roomID === 'my-profile'}
  <ClassServerMyProfile {classID} profileUID={$user.uid}/>
{:else}

{#if roomDoc}
	<div use:portal={'main-content'} >
    <LeftDrawerToggleButton/>
    <div style="padding: 16px;" class:question={hasQuestionMark(roomDoc.name)}>
 
    <div></div>

    <Textfield 
      disabled={hasQuestionMark(roomDoc.name) && roomDoc.askerUID && $user.uid !== roomDoc.askerUID && $user.uid !== 'xC05mXTCFIRxLnyxfKnxY7oNBPi2'}
      value={roomDoc.name} on:input={(e) => updateRoomName(e)}
      class="room-title" 
      style={`width: ${$maxAvailableWidth}px;`}
    >
      <HelperText slot="helper" persistent>
        {#if roomDoc.askerName && roomDoc.askerUID && roomDoc.date} 
          This question was asked by {roomDoc.askerName} on {displayDate(roomDoc.dateAsked)},
          and has {roomDoc.blackboards.length - 1} responses
        {:else if roomDoc.blackboards} 
          This room has {roomDoc.blackboards.length} boards
        {/if}
      </HelperText>
    </Textfield>

    {#if roomDoc.attachmentsDownloadURLs} 
      {#each roomDoc.attachmentsDownloadURLs as attachmentURL, i}
        <a href={attachmentURL} target="_blank">
          {roomDoc.attachmentsNames[i]}
        </a>
      {/each}
    {/if}

    <div style="margin-bottom: 14px;"></div>

    {#if roomDoc.blackboards}

		{#each roomDoc.blackboards as boardID, i (boardID) }
			<RenderlessListenToBoard dbPath={boardsDbPath + boardID} let:boardDoc={boardDoc}>
        {#if boardDoc}
          <div style="width: {$maxAvailableWidth}px; margin-top: 0px; margin-bottom: 0px">
            <TextAreaAutoResizing 
              value={boardDoc.description || ''} 
              on:input={(e) => debouncedUpdateBoardDescription(e, boardID)}
              placeholder="Describe the blackboard..."
              readonly={boardDoc.audioDownloadURL && $user.uid !== boardDoc.creatorUID}
            />
          </div>

          {#if boardDoc.audioDownloadURL }
            <RenderlessFetchStrokes dbPath={boardsDbPath + boardID}
              let:fetchStrokes={fetchStrokes}
              let:strokesArray={strokesArray}
              let:deleteNonInitialStrokesFromDb={deleteNonInitialStrokesFromDb}
            >
              <div use:lazyCallable={fetchStrokes} style={`width: ${$maxAvailableWidth}px; height: ${$maxAvailableHeight + 40}px; position: relative`}>
                <DoodleVideo 
                  {strokesArray} 
                  audioDownloadURL={boardDoc.audioDownloadURL}
                  backgroundImageDownloadURL={boardDoc.backgroundImageDownloadURL}
                  canvasWidth={$maxAvailableWidth}
                  canvasHeight={$maxAvailableHeight}
                  isPaid={!!boardDoc.isPaid}
                  creatorUID={boardDoc.creatorUID}
                  {classID}
                  on:six-seconds-elapsed={(e) => incrementViewMinutes(boardID, e.detail.playbackSpeed)}
                  on:subscribe-to-helper={() => { 
                    isSubscribePopupOpen = true
                    creatorDoc = { uid: boardDoc.creatorUID, name: boardDoc.creatorName, phoneNumber: boardDoc.creatorPhoneNumber}
                  }}
                > 
                  <div style="
                    margin-left: auto;
                    margin-right: 8px; 
                    display: flex; 
                    align-items: center; 
                    flex-direction: row-reverse"
                  >
                    <Button on:click={() => isShowingNanoQuestionPopup = true}
                      style="margin-right: 6px; background-color: rgb(90 90 90 / 100%); color: white;"
                    >
                      Nano-question
                    </Button>

                    {#if isShowingNanoQuestionPopup}
                      <PopupNanoQuestion 
                        isOriginalVideoCreator={$user.uid === boardDoc.creatorUID}
                        {boardDoc}
                        boardDbPath={boardsDbPath + boardID}
                        on:popup-close={() => isShowingNanoQuestionPopup = false}
                      />
                    {/if}

                    <Button on:click={() => createAndCopyShareLink(classID, boardDoc.id)}
                      style="margin-right: 6px; background-color: rgb(90 90 90 / 100%); color: white"
                    > 
                      Share
                    </Button>

                    <!-- boardDoc will always have a `creatorUID` because anonymous login -->
                    {#if $user.uid === boardDoc.creatorUID || !boardDoc.creatorUID || $adminUIDs.includes($user.uid)}
                      <Button 
                        on:click={() => revertToBoard(boardDoc, deleteNonInitialStrokesFromDb)} 
                        style="margin-right: 6px; background-color: rgb(90 90 90 / 100%); color: white">
                        Delete
                      </Button>

                      {#if isMoveVideoPopupOpen}
                        <PopupMoveBlackboardVideo
                          {classID}
                          blackboardIDs={roomDoc.blackboards}
                          {roomDoc}
                          on:popup-close={() => isMoveVideoPopupOpen = false}
                          on:video-rearranged={() => dispatch('video-rearranged')}
                        />
                      {/if}

                      <Button 
                        on:click={() => isMoveVideoPopupOpen = true}
                        style="margin-right: 6px; background-color: rgb(90 90 90 / 100%); color: white">
                        Move
                      </Button>

                      {#if $user.uid === boardDoc.creatorUID}
                        {#if !boardDoc.isPaid} 
                          <Button 
                            on:click={() => makePaid(boardDoc)}
                            style="margin-right: 6px; background-color: rgb(90 90 90 / 100%); color: white"
                          >
                            Freely available
                          </Button>
                        {:else}
                          <Button
                            on:click={() => makeFree(boardDoc)}
                            style="margin-right: 6px; background-color: purple; color: white"
                          >
                            Subscribers-only
                          </Button>
                        {/if}
                      {/if}
                    {/if}
                  </div>
                </DoodleVideo>
              </div>
            </RenderlessFetchStrokes>

            <!-- Comments section -->
            <RenderlessFetchComments 
              dbPath={boardsDbPath + boardID} 
              {boardDoc}
              {roomDoc}
              {classID}
              {roomID}
              let:listenToComments={listenToComments} 
              let:allComments={allComments}
              let:newComment={newComment}
              let:bindLocalValue={bindLocalValue}
              let:submitNewComment={submitNewComment}
              let:isShowingComments={isShowingComments}
              let:hideComments={hideComments}
              let:deleteComment={deleteComment}
            >  
              <div style="display: flex; align-items: center">
                <div 
                  style="display: flex; width: 100%; font-size: 1rem; margin-left: 0px; margin-top: 1%; margin-bottom: 4px; align-items: center;"
                >
                  <RenderlessFetchServerMemberDoc 
                    {classID}
                    memberUID={boardDoc.creatorUID}
                    let:serverMemberDoc={memberDoc}
                  >
                    {#if memberDoc}
                      <PresentationalBeaverPreview style="margin-left: 4px;"
                        helperDoc={memberDoc}
                        {classID}
                      />
                    {/if}

                    <div style="width: 250px; margin-left: 30px;">
                      <ReusableButton on:click={() => isSubscribePopupOpen = true} 
                        fontSize="0.8rem"
                        color="secondary" 
                        style="color: white;"
                      >
                        Subscribe for $10/month
                      </ReusableButton> 
                    </div>
                
                    {#if isSubscribePopupOpen}
                      <PopupConfirmSubscription
                        selectedTutorDoc={helperDoc}
                        {classID}
                        on:confirm-clicked={() => handleConfirmSubscription(helperDoc)}
                        on:popup-close={() => isSubscribePopupOpen = false}
                      />
                    {/if}      
                  </RenderlessFetchServerMemberDoc>

                  <div style="margin-left: 24px;"></div>

                  <div style="font-size: 1.1rem; color: black;">
                    {boardDoc.viewMinutes ? roundedToFixed(boardDoc.viewMinutes, 0): 0} minutes viewed
                  </div>

                  <div style="margin-left: 24px;"></div>

                  <div style="font-size: 1.1rem; color: black;">
                    {boardDoc.numOfComments || 0} comments
                  </div>

                  {#if !isShowingComments}
                    <span on:click={listenToComments} class="material-icons" style="color: hsl(0,0%,0%, 0.80); font-size: 2rem;">
                      expand_more
                    </span>
                  {:else}
                    <span on:click={hideComments} class="material-icons" style="color: hsl(0,0%,0%, 0.80); font-size: 2rem;">
                      expand_less
                    </span>
                  {/if}

                  {#if $user.uid}
                    <div style="
                      margin-left: 24px; 
                      display: flex; 
                      justify-content: space-around; 
                      align-items: center; 
                      min-width: 100px; 
                      border-radius: 12px; 
                      border: 2px solid orange; 
                      padding-left: 8px; 
                      padding-right: 8px; 
                      padding-top: 2px;
                      padding-bottom: 4px;"
                    >
                      <span on:click={eureka(boardDoc)} class="material-icons" style="color: {boardDoc.eurekaUIDs ? (boardDoc.eurekaUIDs.includes($user.uid) ? 'orange' : 'hsl(0,0%,0%, 0.80)') : 'hsl(0,0%,0%, 0.80)'}; font-size: 2rem;">
                        thumb_up
                      </span>

                      <div style="color: black; margin-left: 8px; font-weight: 500">
                        {boardDoc.eurekaUIDs ? boardDoc.eurekaUIDs.length : 0}
                      </div>

                      <div style="color: lightgrey; margin-left: 16px; margin-right:16px; font-size: 1.5rem;">|</div>

                      <span on:click={() => alert('To be implemented')} class="material-icons" style="color: hsl(0,0%,0%, 0.80); font-size: 2rem;">
                        thumb_down
                      </span>
                    </div>
                  {/if}
                </div>
              </div>

              {#if isShowingComments}
                <div style="width: {$maxAvailableWidth - 20}px; margin-left: 20px;">
                  <DoodleVideoComments 
                    {allComments}
                    on:comment-delete={(e) => deleteComment(e.detail)}
                  />
                  
                  <div style="margin-bottom: 4px;"></div>

                  <TextAreaAutoResizing
                    value={newComment} 
                    on:input={(e) => bindLocalValue(e.detail)}
                    placeholder="New comment..."
                  />

                  <Button on:click={submitNewComment}>
                    SUBMIT
                  </Button>
                </div>
                <div style="margin-bottom: 10px;"></div>
              {/if}
            </RenderlessFetchComments>
          {:else}
            <RenderlessListenToStrokes dbPath={boardsDbPath + boardID}
              let:listenToStrokes={listenToStrokes} 
              let:strokesArray={strokesArray}
              let:handleNewlyDrawnStroke={handleNewlyDrawnStroke}
              let:deleteAllStrokesFromDb={deleteAllStrokesFromDb}
            >
              <div use:lazyCallable={listenToStrokes} style={`width: ${$maxAvailableWidth}px; height: ${$maxAvailableHeight}px; position: relative`}>
                {#if boardDoc.recordState === 'post_record'}
                  <LinearProgress indeterminate/>
                {:else}
                  <Blackboard 
                    {strokesArray} 
                    backgroundImageDownloadURL={boardDoc.backgroundImageDownloadURL}
                    recordState={boardDoc.recordState}
                    {boardID}
                    canvasWidth={$maxAvailableWidth}
                    canvasHeight={$maxAvailableHeight}
                    originalIndex={i}
                    on:background-upload={(e) => handleWhatUserUploaded(e.detail.imageFile, boardID)}
                    on:background-reset={() => resetBackgroundImage(boardID)}
                    on:stroke-drawn={(e) => handleNewlyDrawnStroke(e.detail.newStroke)}
                    on:board-wipe={deleteAllStrokesFromDb}
                    on:board-delete={() => deleteBoard(boardID, deleteAllStrokesFromDb)}
                    let:currentTime={currentTime} 
                    let:startStopwatch={startStopwatch} 
                    let:stopStopwatch={stopStopwatch}
                  >
                    <RenderlessAudioRecorder
                      let:startRecording={startRecording} 
                      let:stopRecording={stopRecording}
                      on:record-end={(e) => uploadVideo(e.detail.audioBlob, strokesArray, boardID)}
                    >
                    <!-- 
                      if an recording is active (rather than an interrupted session that isn't actually recording,
                      currentTime will be incrementing 
                    -->
                    {#if boardDoc.recordState === 'pre_record' || currentTime === 0}
                      <span 
                        on:click={() => callManyFuncs(
                          startRecording, 
                          startStopwatch,
                          () => updateRecordState(boardID, 'mid_record'),
                          () => updateRecorderBrowserTabID(boardID),
                          () => willPreventPageLeave.set(true)
                        )}
                        style="
                          font-size: 1.2rem; color: cyan; margin-left: 28px; margin-right: 26px; font-family: sans-serif; border: 1px solid cyan; 
                          padding-top: 2px; 
                          padding-bottom: 4px;
                          padding-left: 10px;
                          padding-right: 9px; 
                          box-sizing: border-box;
                          border-radius: 1px;
                          cursor: pointer;"
                      >
                        record
                      </span>
                      <!-- color was `cyan`, icon was `album` -->
    
                    {:else if boardDoc.recordState === 'mid_record'}
                      <span 
                        on:click={() => callManyFuncs(
                          stopRecording,
                          stopStopwatch,
                          () => updateRecordState(boardID, 'post_record'),
                          () => willPreventPageLeave.set(false)
                        )}
                        class:unclickable={$browserTabID !== boardDoc.recorderBrowserTabID}
                        class="material-icons" 
                        style="font-size: 2.5rem; color: cyan; margin-left: 22px; margin-right: 26px"
                      >
                        stop_circle
                      </span>
                    {/if}

                    </RenderlessAudioRecorder>
                  </Blackboard>
                {/if}
              </div>
            </RenderlessListenToStrokes>
          {/if}

          <div
            style="width: {$maxAvailableWidth}px; height: 80px; box-sizing: border-box"
            on:dragover={(e) => dragover_handler(e)}
            on:drop={(e) => drop_handler(e, i+1)}
          >
      
          </div>
        {/if}
      </RenderlessListenToBoard>      
		{/each} 

    {/if}

    {#if roomDoc.blackboards}
      <!-- For some reason canvas has a tiny margin-right that is clearly visible but not traceable from the inspector --> 
     <div on:click={createNewBlackboard}
        style="
          display: flex; 
          justify-content: center; 
          align-items: center;
          background-color: #2e3131; 
          font-family: Roboto, sans-serif; text-transform: uppercase;
          color: white;
          height: 35px;
          width: {$maxAvailableWidth}px;
          opacity 2.0s ease-in;
          opacity: 1;
          "
        >
          {#if hasQuestionMark(roomDoc.name)}
            Respond to question
          {:else}
            New blackboard
          {/if}
     </div>
   {/if}
  </div>
</div>
{/if}

{/if}

<script>
  import '$lib/_FourColor.scss'
  import { browserTabID, user, maxAvailableWidth, maxAvailableHeight, willPreventPageLeave, drawerWidth, adminUIDs, whatIsBeingDragged } from '../../../store.js'
  import { portal, lazyCallable } from '../../../helpers/actions.js'
  import { getFirestoreDoc, updateFirestoreDoc, getFirestoreQuery } from '../../../helpers/crud.js'
  import { sendTextMessage } from '../../../helpers/cloudFunctions.js'
  import RenderlessListenToBoard from '$lib/RenderlessListenToBoard.svelte'
  import RenderlessAudioRecorder from '$lib/RenderlessAudioRecorder.svelte'
  import Blackboard from '../../../lib/Blackboard.svelte'
  import DoodleVideo from '$lib/DoodleVideo.svelte'
  import { onMount, tick, onDestroy } from 'svelte'
  import Button, { Icon } from '@smui/button'
  import { goto } from '$app/navigation';
  import { getRandomID, displayDate, roundedToFixed } from '../../../helpers/utility.js'
  import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject, } from 'firebase/storage'
  import { doc, getFirestore, updateDoc, deleteField, onSnapshot, setDoc, arrayUnion, collection, query, where, getDocs, deleteDoc, arrayRemove, increment, writeBatch, getDoc } from 'firebase/firestore';
  import Textfield from '@smui/textfield'
  import HelperText from '@smui/textfield/helper-text'
  import LinearProgress from '@smui/linear-progress'
  import TextAreaAutoResizing from '$lib/TextAreaAutoResizing.svelte'
  import RenderlessListenToStrokes from '$lib/RenderlessListenToStrokes.svelte'
  import RenderlessFetchStrokes from '$lib/RenderlessFetchStrokes.svelte'
  import RenderlessFetchComments from '$lib/RenderlessFetchComments.svelte'
  import DoodleVideoComments from '$lib/DoodleVideoComments.svelte'
  import PopupConfirmSubscription from '$lib/PopupConfirmSubscription.svelte'
  import PresentationalBeaverPreview from '$lib/PresentationalBeaverPreview.svelte'
  import RenderlessFetchServerMemberDoc from '$lib/RenderlessFetchServerMemberDoc.svelte'
  import ClassServerAskQuestion from '$lib/ClassServerAskQuestion.svelte'
  import LeftDrawerToggleButton from '$lib/LeftDrawerToggleButton.svelte'
  import PopupMoveBlackboardVideo from '$lib/PopupMoveBlackboardVideo.svelte'
  import PopupNanoQuestion from '$lib/PopupNanoQuestion.svelte'
  import ClassServerMyProfile from '$lib/ClassServerMyProfile.svelte'
  import ReusableButton from '$lib/ReusableButton.svelte'
  import { mixpanelLibrary } from '/src/mixpanel.js'

  export let data
  let { classID, roomID } = data
  $: ({ classID, roomID } = data) // so it stays in sync when `data` changes

  let unsubRoomListener
  let roomDoc = {
    name: '', 
    blackboards: null
  }
  let incrementKeyToDestroyComponent = 1
  let isSubscribePopupOpen = false
  let creatorDoc

  let isMoveVideoPopupOpen = false
  let isShowingNanoQuestionPopup = false

  $: membersDbPath = `classes/${classID}/members/`
  $: boardsDbPath = `classes/${classID}/blackboards/`
  $: roomsDbPath = `classes/${classID}/rooms/`
  $: roomRef = doc(getFirestore(), roomsDbPath + roomID)
  $: roomID, createRoomListener() // Yes, reactive statements DO trigger on initial assignment

  onDestroy(() => {
    unsubRoomListener()
  })

  function handleConfirmSubscription (param) {
    alert('Coming soon!')
  }

  function createAndCopyShareLink (classID, blackboardID) {
    // videoID is defined as classID:blackboardID
    // const shareLink = window.location.origin + '/video/' + classID + ':' + blackboardID 
    const shareLink = window.location.origin + '/embed/' + classID + '/' + blackboardID
    navigator.clipboard.writeText(shareLink)
    alert('Share link has been copied, you can now paste it anywhere.')
  }
  
  function makePaid (boardDoc) {
    updateFirestoreDoc(boardDoc.path, {
      isPaid: true
    })
    incrementHelperPaidVideosCountBy(1, boardDoc)
  }

  function makeFree (boardDoc) {
    updateFirestoreDoc(boardDoc.path, {
      isPaid: false
    })
    incrementHelperPaidVideosCountBy(-1, boardDoc)
  }

  async function incrementHelperPaidVideosCountBy (amount, boardDoc) {
    const db = getFirestore()
    const helpersRef = collection(db, `classes/${classID}/members`)
    const helperQuery = query(helpersRef, where('uid', '==', boardDoc.creatorUID))
    const helperQuerySnapshot = await getDocs(helperQuery)
    if (!helperQuerySnapshot.empty) {
      helperQuerySnapshot.docs.forEach(doc => {
        // note: we expect only one doc 
        const helperDoc = { id: doc.id, path: doc.ref.path, ...doc.data() }
        updateFirestoreDoc(helperDoc.path, {
          numPaidVideos: increment(amount)
        })
      })
    }
  }

  async function shopifyVideo (boardDoc) {
    // PART 1: all the code is for `maxShopGalleryOrder`
    let tutorDoc 
    const db = getFirestore()
    const membersRef = collection(db, membersDbPath)
    const q = query(membersRef, where('uid', '==', $user.uid)); 
    const querySnapshot = await getDocs(q) 
    if (querySnapshot.empty) {
      alert('Cannot shopify video as non-teacher')
      return
    }
    querySnapshot.forEach((doc) => {
      tutorDoc = { id: doc.id, path: doc.path, ...doc.data() }
    })

    const initialNumericalDifference = 3
    const newVal = (tutorDoc.maxShopGalleryOrder || 3) + initialNumericalDifference
    updateFirestoreDoc(boardDoc.path, {
      shopGalleryOrder: newVal
    })
    updateFirestoreDoc(tutorDoc.path, {
      maxShopGalleryOrder: newVal
    })
  }

  async function unshopifyVideo (boardDoc) {
    await updateFirestoreDoc(boardDoc.path, {
      shopGalleryOrder: deleteField()
    })
  }

  async function createRoomListener () {
    if (unsubRoomListener) unsubRoomListener() // assume it's not async
    unsubRoomListener = onSnapshot(roomRef, (snapshot) => {
      // a room can be deleted at any moment - when that happens, redirect
      if (!snapshot.exists()) {
        // goto(`/${classID}/${classID}`)
      } else {
        roomDoc = { 
          id: snapshot.id, 
          path: snapshot.ref.path, 
          ...snapshot.data() 
        }
      }
    })
  }

  // TODO: rename to reflect sequential nature of operations
  async function callManyFuncs (...funcs) {
    for (const func of funcs) {
      try {
        await func()
      } catch (error) {
        alert(error)
        return
      }
    }
  }

  function incrementViewMinutes (boardID, playbackSpeed) {
    const blackboardRef = doc(getFirestore(), boardsDbPath + boardID)
    updateDoc(blackboardRef, {
      viewMinutes: increment(0.1 * playbackSpeed)
    })
  }

  function updateRecorderBrowserTabID (boardID) {
    const blackboardRef = doc(getFirestore(), boardsDbPath + boardID)
    updateDoc(blackboardRef, {
      recorderBrowserTabID: $browserTabID
    })
  }

  function updateRecordState (boardID, newRecordState) {
    const blackboardRef = doc(getFirestore(), boardsDbPath + boardID)
    updateDoc(blackboardRef, {
      recordState: newRecordState
    })
  }

  async function handleWhatUserUploaded (imageFile, boardID) {
    const blackboardRef = doc(getFirestore(), boardsDbPath + boardID)
    if (!imageFile) return
    if (imageFile.type.split("/")[0] === 'image') {
      // rewrite
      const storage = getStorage()
      const imageRef = ref(storage, `images/${getRandomID()}`)
      await uploadBytes(imageRef, imageFile)
      const downloadURL = await getDownloadURL(imageRef)
      updateDoc(blackboardRef, {
        backgroundImageDownloadURL: downloadURL
      })
    } else {
      alert("Error: only images can be used")
    }
  }

  function resetBackgroundImage (boardID) {
    const blackboardRef = doc(getFirestore(), boardsDbPath + boardID)
    updateDoc(blackboardRef, {
      backgroundImageDownloadURL: deleteField() // Svelte doesn't react to change to empty string, for some reason
    })
  }
  //// END of background image logic

  let lockQuestionIntervalID = ''
  let lockQuestionCurrentTime = 5

  let resolveQuestionIntervalID
  let resolveQuestionCurrentTime = 5

  function hasQuestionMark (string) {
    // quickfix
    if (!string) return false

    return '?' === string.charAt(string.length - 1)
  }

  function isLockedAsQuestion (roomDoc) {
    return roomDoc.askerName && roomDoc.dateAsked && roomDoc.askerUID
  }

  // reserve #10 numbers
  async function updateRoomName ({ srcElement }) {
    const { value } = srcElement
    const roomUpdateObj = { name: value }
    // user typed ? 
    if (!hasQuestionMark(roomDoc.name) && hasQuestionMark(value) && !isLockedAsQuestion(roomDoc)) {
      initLockQuestionCountdown()
    }
    // user backtracked ? 
    else if (lockQuestionIntervalID && !hasQuestionMark(value)) {
      resetQuestionCountdown()
    }
    // resolve a locked question
    else if (!hasQuestionMark(value) && isLockedAsQuestion(roomDoc)) {
      initResolveQuestionCountdown()
    }
    // hasQuestionMark is probably not necessary
    else if (resolveQuestionIntervalID && hasQuestionMark(value) && isLockedAsQuestion(roomDoc)) {
      resetResolveQuestionCountdown()
    }
    await updateDoc(roomRef, roomUpdateObj)
  }

  function initLockQuestionCountdown () {
    lockQuestionCurrentTime = 5
    lockQuestionIntervalID = setInterval(() => {
      lockQuestionCurrentTime -= 1
      if (lockQuestionCurrentTime === 0) {
        lockRoomAsQuestion()
        textNotifyServerMembers()
        resetQuestionCountdown()
      }
    }, 1000)
  }

  function initResolveQuestionCountdown () {
    resolveQuestionCurrentTime = 5
    resolveQuestionIntervalID = setInterval(() => {
      resolveQuestionCurrentTime -= 1
      if (resolveQuestionCurrentTime === 0) {
        labelRoomAsResolved()
      }
    }, 1000)
  }

  function labelRoomAsResolved () {
    updateDoc(roomRef, {
      dateResolved: new Date().toISOString()
    })

    // update metadata
    updateFirestoreDoc(`classes/${classID}`, {
      numOfResolvedQuestions: increment(1),
      numOfUnresolvedQuestions: increment(-1)
    })  
  }

  function resetResolveQuestionCountdown () {
    clearTimeout(resolveQuestionIntervalID)
    resolveQuestionIntervalID = ''
  }

  function resetQuestionCountdown () {
    clearTimeout(lockQuestionIntervalID)
    lockQuestionIntervalID = ''
  }

  function lockRoomAsQuestion () {
    updateDoc(roomRef, {
      askerName: $user.name || 'Beaver #999',
      askerUID: $user.uid,
      dateAsked: new Date().toISOString()
    })
  }

  async function textNotifyServerMembers () {
    const promises = []
    const usersRef = collection(getFirestore(), 'users')
    const subscribersQuery = query(usersRef, where('idsOfSubscribedClasses', 'array-contains', classID))
    const subscribersSnap = await getDocs(subscribersQuery)
    const helpersQuery = query(usersRef, where('idsOfTutoringClasses', 'array-contains', classID))
    const helpersSnap = await getDocs(helpersQuery)
    for (const doc of [...subscribersSnap.docs, ...helpersSnap.docs]) {
      try {
        if (doc.id !== $user.uid) {
          console.log('texting =', doc.data().phoneNumber)
          promises.push(
            sendTextMessage({ 
              content: `${$user.name} asked ${roomDoc.name}: https://beavers.app/${classID}/${roomID}`, // assumes roomDoc.name is not ''
              toWho: doc.data().phoneNumber
            })
          )
        }
      } catch (error) {
        alert(error)
      }
    }
    await Promise.all(promises)
    console.log('success, sent all texts.')
  }

  let t = { promise: null, cancel: _ => void 0 }

  // Snippet from: https://stackoverflow.com/a/68228099/7812829
  // NOTE: this literally returns a function (you still have to call it)
  function debounce (task, ms) {
    return async (...args) => {
      try {
        t.cancel()
        t = deferred(ms)
        await t.promise
        await task(...args)
      }
      catch (_) { 
        /* prevent memory leak */ 
      }
    }
  }

  function deferred (ms) {
    let cancel, promise = new Promise((resolve, reject) => {
      cancel = reject
      setTimeout(resolve, ms)
    })
    return { promise, cancel }
  }

  async function debouncedUpdateBoardDescription ({ detail }, id) {
    const debouncedVersion = debounce(
      () => updateBoardDescription({ detail }, id),
      3000
    ) 
    debouncedVersion({ detail }, id)
  }

  async function updateBoardDescription ({ detail }, id) {
    const boardRef = doc(getFirestore(), boardsDbPath + id)
    await updateDoc(boardRef, {
      description: detail
    })
  }

  async function uploadVideo (audioBlob, strokesArray, boardID) {
    const db = getFirestore()

    // QUICK-FIX for concurrent drawings with no timestamp 
    // TODO: fails for edge case when all starting strokes are consecutively from other person
    function hasValidTimestamp (stroke) {
      // strokes from other people have an artificial stroke duration of 0.5 added by `RenderlessListenToStrokes`
      // and have `currentTime = 0` because they have no access to the recorder's timer
      // NOTE: even if the person recording does preview drawings, both `startTime` and `endTime` would be 0 (instead of 0 and 0.5)
      return stroke.startTime !== 0 && stroke.endTime !== artificialDuration
    }

    const artificialDuration = 0.5
    const indicesOfModifiedStrokes = []
    const n = strokesArray.length

    for (let i = 0; i < n; i++) {
      if (!hasValidTimestamp(strokesArray[i])) {
        // find the last valid stroke and base the `startTime` on it
        let j = i - 1
        while (j >= 0) {
          if (hasValidTimestamp(strokesArray[j])) {
            strokesArray[i].startTime = strokesArray[j].endTime
            strokesArray[i].endTime = strokesArray[i].startTime + artificialDuration
            indicesOfModifiedStrokes.push(i)
            break
          }
          j -= 1 
        }
      }

      for (let idx of indicesOfModifiedStrokes) {
        const stroke = strokesArray[idx]
        const dbPath = boardsDbPath + boardID
        const strokesRef = doc(db, `${dbPath}/strokes/${stroke.id}`)
        updateDoc(strokesRef, {
          startTime: stroke.startTime,
          endTime: stroke.endTime
        })
      }
    }

    // update metadata for tutor if it exists 
    let tutorDoc
    const q = query(
      collection(db, membersDbPath),
      where('uid', '==', $user.uid)
    )
    // base the member profile UID on the actual UID, so you don't need to do all these queries
    const classDocUpdateObj = {} 

    const snap = await getDocs(q) 
    if (!snap.empty) {
      // find the specific tutor doc
      snap.docs.forEach(doc => {
        tutorDoc = { id: doc.id, path: doc.ref.path, ...doc.data() }
      })
      // that means it's the member's first server video
      if (!tutorDoc.numOfVideos) {
        classDocUpdateObj.numOfCreators = increment(1)
      }
      updateFirestoreDoc(membersDbPath + tutorDoc.id, {
        numOfVideos: increment(1)
      })
    }
    classDocUpdateObj.numOfVideos = increment(1) 
    updateFirestoreDoc(`classes/${classID}`, classDocUpdateObj)

    // upload the audio file
    const storage = getStorage()
    const audioRef = ref(storage, `audio/${getRandomID()}`)
    await uploadBytes(audioRef, audioBlob)
    const downloadURL = await getDownloadURL(audioRef)

    const blackboardRef = doc(getFirestore(), boardsDbPath + boardID)
    await updateDoc(blackboardRef, {
      creatorUID: $user.uid || '',
      creatorName: $user.name || '',
      creatorPhoneNumber: $user.phoneNumber || '',
      date: new Date().toISOString(),
      audioDownloadURL: downloadURL,
      audioRefFullPath: audioRef.fullPath
    })
    updateRecordState(boardID, 'pre_record')

    mixpanelLibrary.track('Video created')

    // NOTIFICATION SYSTEM
    // TO-DO: change this back to email notifications
    // IF SOMEBODY ASKED A QUESTION, TEXT NOTIFY THEM
    // if (roomDoc.askerUID) {
    //   const askerDoc = await getFirestoreDoc(`users/${roomDoc.askerUID}`)
    //   sendTextMessage({
    //     content: `${$user.name || 'A helper'} replied with a video: https://beavers.app/${classID}/${roomDoc.id}`,
    //     toWho: askerDoc.phoneNumber
    //   })  
    // }

    // QUICKFIX
    // only reproducible on my iPad (yet old Explain works for some reason)
    // but this quickfix works well because iPad will correctly reload, whereas computers will display the prompt
    window.location.reload()
  }

  async function revertToBoard ({ id, audioRefFullPath, isPaid, creatorUID }, deleteAllStrokesFromDb) {
    if (!confirm('Are you sure you want to delete this video?')) {
      return
    }

    const promises = []
    const boardRef = doc(getFirestore(), boardsDbPath + id)
    if (audioRefFullPath) {
      const audioRef = ref(getStorage(), audioRefFullPath)
      promises.push(
        deleteObject(audioRef)
      )
    }
    promises.push(
      updateDoc(boardRef, {
        creator: deleteField(),
        creatorPhoneNumber: deleteField(),
        date: deleteField(),
        audioDownloadURL: deleteField(),
        audioRefFullPath: deleteField()
      })
    )
      
    // update class statistics
    updateFirestoreDoc(`classes/${classID}`, {
      numOfVideos: increment(-1)
    })

    // update helper video statistics
    const q = query(
      collection(getFirestore(), membersDbPath),
      where('uid', '==', creatorUID)
    )
    const [helperDoc] = await getFirestoreQuery(q)
    const updateObj = {
      numOfVideos: increment(-1)
    }
    if (isPaid) {
      updateObj.numPaidVideos = increment(-1)
    }
    updateFirestoreDoc(membersDbPath + helperDoc.id, updateObj)

    promises.push(deleteAllStrokesFromDb())
    await Promise.all(promises)
  }

  async function createNewBlackboard () {
    const newID = getRandomID();  
    const blackboardRef = doc(getFirestore(), boardsDbPath + newID)
    // TODO: use batch operation
    await Promise.all([
      setDoc(blackboardRef, { 
        recordState: 'pre_record' 
      }),
      updateDoc(roomRef, {
        blackboards: arrayUnion(newID)
      })
    ]);  
    // await tick()
    // this.scrollToThisBoard(newID)
  }

  // A blackboard does not have an audioDownloadURL,
  // otherwise it's a video
  function deleteBoard (boardID, deleteAllStrokesFromDb) {
    if (roomDoc.blackboards.length === 1) {
      alert("Can't delete the last blackboard")
      return
    }

    // 1. delete blackboard reference from parent
    updateDoc(roomRef, {
      blackboards: arrayRemove(boardID)
    })
    
    // 2. delete strokes
    deleteAllStrokesFromDb()
    
    // 3. delete board itself
    deleteDoc(
      doc(getFirestore(), boardsDbPath + boardID)
    )
  }

  function eureka (boardDoc) {
    const boardRef = doc(getFirestore(), boardsDbPath + boardDoc.id)
    if (boardDoc.eurekaUIDs instanceof Array) {
      if (boardDoc.eurekaUIDs.includes($user.uid)) {
        updateDoc(boardRef, {
          eurekaUIDs: arrayRemove($user.uid)
        })
        return 
      }
    } 
    updateDoc(boardRef, {
      eurekaUIDs: arrayUnion($user.uid)
    })
  }
</script>

<style>
:global(.room-title input) {
  font-size: 2rem;
}

:global(.question input) {
  color: red !important;
  /* color: rgb(19, 145, 230) !important; */
}

.unclickable {
  pointer-events: none;
}
</style>

