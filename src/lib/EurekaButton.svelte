<button on:click={eureka(boardDoc)} 
  class="my-round-button" 
  class:wide-padding={canvasWidth > TABLET_MIN_WIDTH}
  disabled={!$user.uid}
>
  <span class="material-symbols-outlined" 
    style="color: {boardDoc.eurekaUIDs ? (boardDoc.eurekaUIDs.includes($user.uid) ? 'orange' : 'black') : 'black'}; 
    font-size: 1.3rem;"
  >
    lightbulb
  </span>

  {#if canvasWidth > TABLET_MIN_WIDTH}
    <span class="button-text">
      I understood this video
    </span>

    <div style="color: black; font-weight: 500;">
      {boardDoc.eurekaUIDs ? boardDoc.eurekaUIDs.length : 0}
    </div>
  {/if}
</button>

<script>
  import { user } from '/src/store.js'
  import { getFirestoreDoc } from '/src/helpers/crud.js'
  import { updateDoc, arrayUnion, arrayRemove, getFirestore, doc } from 'firebase/firestore'
  import { sendEmail } from '/src/helpers/cloudFunctions.js'
  import { TABLET_MIN_WIDTH } from '/src/helpers/CONSTANTS.js'

  export let boardDoc
  export let canvasWidth

  function eureka (boardDoc) {
    const boardRef = doc(getFirestore(), boardDoc.path) // boardsDbPath + boardDoc.id
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

    getFirestoreDoc(`/users/${boardDoc.creatorUID}`)
      .then(creatorDoc => {
        console.log('sending email to =', creatorDoc.email)
        sendEmail({
          toWho: creatorDoc.email,
          subject: `[explanations.io] ${$user.name} understood your video`,
          content: `Just a quick email to let you know ${$user.name} clicked "I understand this video" for your ${boardDoc.description} video.`
        })
      })
  }
</script>

<style>
  .my-round-button {
    display: flex; 
    justify-content: space-around; 
    align-items: center; 
    column-gap: 4px; 
    
    width: fit-content;
    border: 1px solid lightgrey;
    border-radius: 24px; 

    padding: 5px;

    cursor: pointer; 
    font-size: 0.8rem;
  }

  .my-round-button:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  .wide-padding {
    padding-left: 12px;
    padding-right: 12px;
  }
</style>