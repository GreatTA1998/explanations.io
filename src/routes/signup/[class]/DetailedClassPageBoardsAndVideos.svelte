
<div bind:clientWidth={carouselWidth} style="margin-left: 1%;">
  {#each galleryBoardIDs as boardID} 
    <div class="card">
      <RenderlessListenToBoard dbPath={boardsCollectionDbPath + boardID} let:boardDoc={boardDoc}> 
        {#if boardDoc}
          {#if boardDoc.audioDownloadURL}
            <div style="width: {carouselWidth}px; margin-top: 0px; margin-bottom: 0px">
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
              canvasWidth={carouselWidth}
              canvasHeight={carouselWidth * 3/4 - 100}
            />
          {:else if $user.uid === selectedTutorUID}
            <div style="width: {carouselWidth}px; margin-top: 0px; margin-bottom: 0px">
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
              canvasWidth={carouselWidth}
              canvasHeight={carouselWidth * 3/4 - 100}
              hasFullscreenButton={false}
              on:video-uploaded={updateNewBlackboardLocation}
            />
          {/if}
        {/if}
      </RenderlessListenToBoard>
    </div>
  {/each}
  
  {#if $user.uid === selectedTutorUID}
    <div class="card">
      <div on:click={updateNewBlackboardLocation}
        style="
          display: flex; 
          justify-content: center; 
          align-items: center;
          margin-top: 40px; 
          background-color: #2e3131; 
          font-family: Roboto, sans-serif; text-transform: uppercase;
          color: white;
          height: 35px;
          width: {carouselWidth}px;
      ">
        New blackboard
      </div>
    </div>
  {/if}
</div>

<script>
  import { user } from '../../../store.js'
  import { onSnapshot, collection, query, orderBy, limit, getDoc, getDocs, getFirestore, updateDoc, arrayUnion, arrayRemove, increment, doc, setDoc, where } from 'firebase/firestore'
  import { createRoomDoc, createBoardDoc } from '../../../helpers/crud.js'
  import RenderlessListenToBoard from '$lib/RenderlessListenToBoard.svelte'
  import TextAreaAutoResizing from '$lib/TextAreaAutoResizing.svelte';
  import ReusableDoodleVideo from '$lib/ReusableDoodleVideo.svelte'
  import ReusableLiveBlackboard from '$lib/ReusableLiveBlackboard.svelte'
  import { createEventDispatcher } from 'svelte';

  export let classID
  export let selectedTutorUID 
  export let galleryBoardIDs
  export let classTutorsDocs

  const dispatch = createEventDispatcher()
  let carouselWidth
  const boardsCollectionDbPath = `classes/${classID}/blackboards/`
  // Video ideas: give big picture of the class, explain a commonly misunderstood concept, solve an example question, include links to your outside work.
  let textAreaPlaceholder = `Tip #1: when you run out of space, instead of erasing the board, just create a new board and new video. Small videos, with minimal erasing, makes your overall explanation easier to navigate and re-record in small parts`

  async function updateNewBlackboardLocation () {
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

  // DEBOUNCED RELATED FUNCTIONS 
  async function debouncedUpdateBoardDescription ({ detail }, id) {
    const debouncedVersion = debounce(
      () => updateBoardDescription({ detail }, id),
      3000
    ) 
    debouncedVersion({ detail }, id)
  }

  async function updateBoardDescription ({ detail }, id) {
    const boardsDbPath = `classes/${classID}/blackboards/`
    const boardRef = doc(getFirestore(), boardsDbPath + id)

    await updateDoc(boardRef, {
      description: detail
    })
  }

  async function debouncedUpdateTutorBio ({ detail }, id) {
    const debouncedVersion = debounce(
      () => updateTutorBio({ detail }, id),
      3000
    ) 
    debouncedVersion({ detail }, id)
  }

  async function updateTutorBio ({ detail }, idNotUID) {
    const tutorRef = doc(getFirestore(), `classes/${classID}/tutors/${idNotUID}`)
    updateDoc(tutorRef, {
      bio: detail
    })
  }

  // WARNING: COULD BE DANGEROUS THAT THE DEBOUNCED VARIABLE T IS SHARED BETWEEN TWO FUNCTIONS, THEY COULD DEBOUNCE EACH OTHER WHICH IS BAD
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
</script>

<style>

</style>
