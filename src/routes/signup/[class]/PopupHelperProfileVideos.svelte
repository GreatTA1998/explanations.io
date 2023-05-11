
<div bind:clientWidth={carouselWidth} bind:clientHeight={carouselHeight} 
  style="display: flex; flex-wrap: wrap; gap: 20px; justify-content: space-evenly; height: 100%; min-height: 300px; width: 100%; box-sizing: border-box;"
>
  {#if computedBoardWidth && computedBoardHeight}
    {#each galleryBoardIDs as boardID} 
      <div class="card">
        <RenderlessListenToBoard dbPath={boardsCollectionDbPath + boardID} let:boardDoc={boardDoc}> 
          {#if boardDoc}
            {#if boardDoc.audioDownloadURL}
              <!-- <DoodleVideoCommentsSection
                boardDoc={boardDoc}
              /> -->
              <div on:click={() => goto(`/embed/${classID}/${boardDoc.id}`)}  
                style="width: {computedBoardWidth}px; margin-top: 0px; margin-bottom: 0px; cursor: pointer"
              >
                <div 
                  class="my-truncated-text" 
                  class:purple-text={boardDoc.isPaid}
                  style="width: {computedBoardWidth}; font-weight: 600;"
                >
                  {boardDoc.description}
                </div>
                <div style="font-family: sans-serif !important; color: grey; font-size: 0.7rem; margin-left: 2px; margin-top: 8px; margin-bottom: 4px;">
                  Minutes viewed: {boardDoc.viewMinutes ? boardDoc.viewMinutes.toFixed(1) : 0}
                </div>
              </div>
         
              <ReusableDoodleVideo 
                showEditDeleteButtons={false}
                {boardDoc}
                boardDbPath={boardsCollectionDbPath + boardID}
                canvasWidth={computedBoardWidth}
                canvasHeight={computedBoardHeight}
                {classID}
                on:six-seconds-elapsed={(e) => incrementViewMinutes(boardID, e.detail.playbackSpeed)}
                on:video-rearrange
                on:video-deleted={() => incrementNumOfVideos(-1, selectedTutorDoc)}
              />
            {/if}
          {/if}
        </RenderlessListenToBoard>
      </div>
    {/each}

    <div style="display: flex; justify-content: space-between;">
      {#if $user.uid === selectedTutorUID}
        {#if isEditProfileVideosPopupOpen}
          <!-- we dispatch 'video-rearranged' to rerender the helper profile  -->
          <PopupEditProfileVideos 
            helperDoc={selectedTutorDoc}
            {classID}
            on:popup-close={() => {
              isEditProfileVideosPopupOpen = false
              dispatch('video-rearranged')
            }}
          /> 
        {/if}

        <button on:click={() => isEditProfileVideosPopupOpen = true}>
          Add/remove profile videos
        </button>

        {#if isRearrangeVideosPopupOpen}
          <PopupRearrangeProfileVideos
            {classID}
            {galleryBoardIDs}
            {selectedTutorDoc}
            on:popup-close={() => isRearrangeVideosPopupOpen = false}
            on:video-rearranged={() => dispatch('video-rearranged')}
          />
        {/if}

        <button on:click={() => isRearrangeVideosPopupOpen = true}>
          Rearrange profile videos
        </button>
      {/if}
    </div>
  {/if}
</div>

<script>
  import { user, classDetailsDrawerWidth  } from '../../../store.js'
  import { onSnapshot, collection, query, orderBy, limit, getDoc, getDocs, getFirestore, updateDoc, arrayUnion, arrayRemove, increment, doc, setDoc, where } from 'firebase/firestore'
  import { createRoomDoc, createBoardDoc, updateFirestoreDoc } from '../../../helpers/crud.js'
  import { computeMaxAvailableDimensionsGeneral } from '../../../helpers/canvas.js'
  import { DRAWER_EXPANDED_WIDTH } from '/src/helpers/CONSTANTS.js'
  import { debounce } from '../../../helpers/utility.js'
  import RenderlessListenToBoard from '$lib/RenderlessListenToBoard.svelte'
  import TextAreaAutoResizing from '$lib/TextAreaAutoResizing.svelte';
  import ReusableDoodleVideo from '$lib/ReusableDoodleVideo.svelte'
  import ReusableLiveBlackboard from '$lib/ReusableLiveBlackboard.svelte'
  import DoodleVideoCommentsSection from '$lib/DoodleVideoCommentsSection.svelte'
  import PopupEditProfileVideos from '$lib/PopupEditProfileVideos.svelte'
  import PopupRearrangeProfileVideos from '$lib/PopupRearrangeProfileVideos.svelte'
  import { createEventDispatcher, onMount } from 'svelte'
  import { goto } from '$app/navigation'

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

  const boardsCollectionDbPath = `classes/${classID}/blackboards/`
  // Video ideas: give big picture of the class, explain a commonly misunderstood concept, solve an example question, include links to your outside work.
  let textAreaPlaceholder = `Tip #1: when you run out of space, instead of erasing the board, just create a new board and new video. Small videos, with minimal erasing, makes your overall explanation easier to navigate and re-record in small parts`

  let isEditProfileVideosPopupOpen = false
  let isRearrangeVideosPopupOpen = false

  $: if ($classDetailsDrawerWidth === 0 || $classDetailsDrawerWidth === DRAWER_EXPANDED_WIDTH) {
    debouncedResizeHandler()
  }

  function shopifyBoard (boardPath) {
    const initialNumericalDifference = 3
    const newVal =  (selectedTutorDoc.maxOrder || 3) + initialNumericalDifference
    updateFirestoreDoc(boardPath, {
      shopGalleryOrder: newVal
    })
    updateFirestoreDoc(selectedTutorDoc.path, {
      maxShopGalleryOrder: newVal
    })
  }


  function resizeHandler () {
    const { height, width} = computeMaxAvailableDimensionsGeneral(carouselWidth, carouselHeight) // 4.4 is not a typo // carouselWidth * 3/4.4
    computedBoardWidth = 400
    computedBoardHeight = 400 * 3/4
    // computedBoardWidth = width
    // computedBoardHeight = height 
  }

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


  // NOTE: the blackboards created here are automatically shopified
  async function createNewShopBoard () {
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
    const newBoardID = await createBoardDoc(boardsDbPath, roomRef)
    shopifyBoard(boardsDbPath + newBoardID)
    
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
.purple-text {
  color: purple;
}
</style>
