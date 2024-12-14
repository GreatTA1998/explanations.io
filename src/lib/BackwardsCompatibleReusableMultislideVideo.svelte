{#if boardDoc}
  {#if boardDoc.isMultiboard}
    <OnlineMultislideVideo
      {canvasWidth}
      {canvasHeight}
      {boardDoc}
      {classID}
      {showSlideChanger}
      audioDownloadURL={boardDoc.audioDownloadURL}
      timingOfSlideChanges={boardDoc.timingOfSlideChanges}
      {showEditDeleteButtons}
      on:six-seconds-elapsed={(e) => incrementViewMinutes(boardDoc.id, e.detail.playbackSpeed)}
      on:subscribe-to-helper={() => { 
        isSubscribePopupOpen = true
        creatorDoc = { uid: boardDoc.creatorUID, name: boardDoc.creatorName, phoneNumber: boardDoc.creatorPhoneNumber}
      }}
    />
  {:else}
    <ReusableDoodleVideo
      {boardDoc}
      {canvasWidth}
      {canvasHeight}
      {showEditDeleteButtons}
      boardDbPath={boardDoc.path}
    />
  {/if}
{/if}

<script>
  import ReusableDoodleVideo from '$lib/ReusableDoodleVideo.svelte'
  import OnlineMultislideVideo from '$lib/OnlineMultislideVideo.svelte'
  import { getFirestore, increment, updateDoc, doc } from 'firebase/firestore'

  export let boardDoc
  export let canvasWidth
  export let canvasHeight
  export let classID
  export let showSlideChanger = true
  export let showEditDeleteButtons = false

  let isSubscribePopupOpen = false
  let creatorDoc = {}

  $: boardsDbPath = `classes/${classID}/blackboards/`

  function incrementViewMinutes (boardID, playbackSpeed) {
    const blackboardRef = doc(getFirestore(), boardsDbPath + boardID)
    updateDoc(blackboardRef, {
      viewMinutes: increment(0.1 * playbackSpeed)
    })
  }
</script>