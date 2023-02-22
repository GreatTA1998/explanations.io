
<div bind:clientWidth={carouselWidth} bind:clientHeight={carouselHeight} style="margin-left: 1%; height: 100%;">
  {#if computedBoardWidth && computedBoardHeight}
    {#each galleryBoardIDs as boardID} 
      <div class="card">
        <RenderlessListenToBoard dbPath={boardsCollectionDbPath + boardID} let:boardDoc={boardDoc}> 
          {#if boardDoc}
            {#if boardDoc.audioDownloadURL}
              <DoodleVideoCommentsSection
                boardDoc={boardDoc}
              />
              <div style="width: {computedBoardWidth}px; margin-top: 0px; margin-bottom: 0px">
                <TextAreaAutoResizing 
                  value={boardDoc.description || ''} 
                  on:input={(e) => debouncedUpdateBoardDescription(e, boardID)}
                  placeholder={textAreaPlaceholder}
                  readonly={boardDoc.audioDownloadURL && $user.uid !== boardDoc.creatorUID}
                  nonFocusedPlaceholderOpacity={0.6}
                  numberOfInitialRowsIfEmpty=3
                />
              </div>
              <div style="font-family: sans-serif !important; color: grey; font-size: 0.7rem; margin-left: 2px; margin-top: 8px; margin-bottom: 4px;">
                Minutes viewed: {boardDoc.viewMinutes ? boardDoc.viewMinutes.toFixed(1) : 0}
              </div>
              <ReusableDoodleVideo 
                {boardDoc}
                boardDbPath={boardsCollectionDbPath + boardID}
                canvasWidth={computedBoardWidth}
                canvasHeight={computedBoardHeight}
                on:six-seconds-elapsed={(e) => incrementViewMinutes(boardID, e.detail.playbackSpeed)}
                on:video-deleted={() => incrementNumOfVideos(-1, selectedTutorDoc)}
              />
            {:else if $user.uid === selectedTutorUID}
              <div style="width: {computedBoardWidth}px; margin-top: 0px; margin-bottom: 0px">
                <TextAreaAutoResizing 
                  value={boardDoc.description || ''} 
                  on:input={(e) => debouncedUpdateBoardDescription(e, boardID)}
                  placeholder={textAreaPlaceholder}
                  readonly={boardDoc.audioDownloadURL && $user.uid !== boardDoc.creatorUID}
                  nonFocusedPlaceholderOpacity={0.6}
                  numberOfInitialRowsIfEmpty=3
                />
              </div>
              <ReusableLiveBlackboard
                {boardDoc}
                boardID={boardID}
                boardsDbPath={boardsCollectionDbPath}
                canvasWidth={computedBoardWidth}
                canvasHeight={computedBoardHeight}
                hasFullscreenButton={false}
                on:video-uploading={() => {
                  incrementNumOfVideos(1, selectedTutorDoc)
                  createNewBoard()
                }}
              />
            {/if}
          {/if}
        </RenderlessListenToBoard>
      </div>
    {/each}
    
    {#if $user.uid === selectedTutorUID}
      <div class="card">
        <div on:click={createNewBoard}
          style="
            display: flex; 
            justify-content: center; 
            align-items: center;
            margin-top: 40px; 
            background-color: #2e3131; 
            font-family: Roboto, sans-serif; text-transform: uppercase;
            color: white;
            height: 35px;
            width: {computedBoardWidth}px;
        ">
          New blackboard
        </div>
      </div>
    {/if}
  {/if}
</div>

<script>
  import { user, classDetailsDrawerWidth  } from '../../../store.js'
  import { onSnapshot, collection, query, orderBy, limit, getDoc, getDocs, getFirestore, updateDoc, arrayUnion, arrayRemove, increment, doc, setDoc, where } from 'firebase/firestore'
  import { createRoomDoc, createBoardDoc, updateFirestoreDoc } from '../../../helpers/crud.js'
  import { computeMaxAvailableDimensionsGeneral } from '../../../helpers/canvas.js'
  import { drawerExpandedWidth } from '../../../helpers/everythingElse.js'
  import { debounce } from '../../../helpers/utility.js'
  import RenderlessListenToBoard from '$lib/RenderlessListenToBoard.svelte'
  import TextAreaAutoResizing from '$lib/TextAreaAutoResizing.svelte';
  import ReusableDoodleVideo from '$lib/ReusableDoodleVideo.svelte'
  import ReusableLiveBlackboard from '$lib/ReusableLiveBlackboard.svelte'
  import DoodleVideoCommentsSection from '$lib/DoodleVideoCommentsSection.svelte'
  import { createEventDispatcher, onMount } from 'svelte';

  export let classID
  export let selectedTutorUID 
  export let selectedTutorDoc
  export let galleryBoardIDs
  export let classTutorsDocs

  const dispatch = createEventDispatcher()
  let carouselWidth
  let carouselHeight

  let computedBoardWidth
  let computedBoardHeight

  let debouncedResizeHandler = debounce(resizeHandler, 500)

  $: if ($classDetailsDrawerWidth === 0 || $classDetailsDrawerWidth === drawerExpandedWidth) {
    debouncedResizeHandler()
  }

  function resizeHandler () {
    const { height, width} = computeMaxAvailableDimensionsGeneral(carouselWidth, carouselHeight) // 4.4 is not a typo // carouselWidth * 3/4.4
    computedBoardWidth = width
    computedBoardHeight = height 
  }

  const boardsCollectionDbPath = `classes/${classID}/blackboards/`
  // Video ideas: give big picture of the class, explain a commonly misunderstood concept, solve an example question, include links to your outside work.
  let textAreaPlaceholder = `Tip #1: when you run out of space, instead of erasing the board, just create a new board and new video. Small videos, with minimal erasing, makes your overall explanation easier to navigate and re-record in small parts`

  function incrementViewMinutes (boardID, playbackSpeed) {
    const blackboardRef = doc(getFirestore(), boardsCollectionDbPath + boardID)
    updateDoc(blackboardRef, {
      viewMinutes: increment(0.1 * playbackSpeed)
    })
  }

  function incrementNumOfVideos (howMuch, tutorDoc) {
    updateFirestoreDoc(`classes/${classID}/tutors/${tutorDoc.id}`, {
      numOfVideos: increment(howMuch)
    })  
  }

  async function createNewBoard () {
    const db = getFirestore()

    let tutor
    for (const t of classTutorsDocs) {
      if (t.uid === selectedTutorUID) {
        tutor = t 
      }
    }
    if (!tutor) {
      alert("tutor is undefined, can't update new blackboard location")
      return 
    }
    const boardsDbPath = `classes/${classID}/blackboards/`
    const roomRef = doc(db, `classes/${classID}/rooms/${tutor.designatedRoomID}`)
    await createBoardDoc(boardsDbPath, roomRef)

    // because everything is re-rendered, the video portfolio will be refetched, and the new blackboard location will be re-decided
    // all we had to do is just create the docs here
  }

  let debouncedUpdateBoardDescription = debounce(updateBoardDescription, 2000)

  async function updateBoardDescription ({ detail }, id) {
    const boardsDbPath = `classes/${classID}/blackboards/`
    const boardRef = doc(getFirestore(), boardsDbPath + id)

    await updateDoc(boardRef, {
      description: detail
    })
  }
</script>

<style>

</style>
