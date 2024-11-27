<!-- DANGER: functions like `makePaid` differ between this file and [room].svelte
  Refactor and unify these files soon.
-->
<!-- TO-DO: write explanation about this -->
{#if boardDoc}
  <RenderlessFetchStrokes dbPath={boardDbPath}
    let:fetchStrokes={fetchStrokes}
    {autoFetchStrokes}
    let:strokesArray={strokesArray}
  >
    <div use:lazyCallable={fetchStrokes} 
      style={`width: ${canvasWidth}px; height: ${canvasHeight + Math.min(54, (80 * scaleFactor))}px; position: relative`}
    >

      <HDDoodleVideo 
        visualWidth={canvasWidth}
        visualHeight={canvasHeight}
        {strokesArray} 
        audioDownloadURL={boardDoc.audioDownloadURL}
        backgroundImageDownloadURL={boardDoc.backgroundImageDownloadURL}
        isPaid={!!boardDoc.isPaid}
        creatorUID={boardDoc.creatorUID}
        {classID}
        on:six-seconds-elapsed
        on:video-start
        on:video-pause
      > 

        {#if showEditDeleteButtons}
          <!-- <div style="
            margin-left: {canvasWidth - 240 - 164}px; 
            display: flex; 
            align-items: center; 
            flex-direction: row-reverse"
          > -->
          <div style="display: flex; align-items: center">
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

            <!-- boardDoc will always have a creatorUID because anonymous login -->
            {#if $user.uid === boardDoc.creatorUID || !boardDoc.creatorUID || $adminUIDs.includes($user.uid)}
              <Button 
                on:click={() => dispatch('video-rearrange')}
                style="margin-right: 6px; background-color: rgb(90 90 90 / 100%); color: white">
                Rearrange
              </Button>  

              <Button 
                on:click={async () => { 
                }} 
                style="background-color: rgb(90 90 90 / 100%); color: white; margin-right: 10px;">
                Delete
              </Button>
            {/if}
          </div>
        {/if}
      </HDDoodleVideo>
    </div>
  </RenderlessFetchStrokes>
{/if}

<script>
  import HDDoodleVideo from '$lib/HDDoodleVideo.svelte'
  import RenderlessFetchStrokes from '$lib/RenderlessFetchStrokes.svelte'
  import { maxAvailableWidth, maxAvailableHeight, assumedCanvasWidth } from '../store.js'
  import { lazyCallable } from '../helpers/actions.js'
  import Button, { Icon } from '@smui/button'
  import { user, adminUIDs } from '../store.js'
  import { updateFirestoreDoc } from '../helpers/crud.js'
  import { createEventDispatcher } from 'svelte'
  import { getFirestore, increment, collection, query, where, getDocs } from 'firebase/firestore';

  export let autoFetchStrokes = true
  export let boardDoc
  export let boardDbPath = '' // 
  export let canvasWidth = maxAvailableWidth
  export let canvasHeight = maxAvailableHeight

  export let showEditDeleteButtons = true

  export let classID

  $: scaleFactor = canvasWidth / $assumedCanvasWidth

  const dispatch = createEventDispatcher()

  async function makePaid (boardDoc) {
    updateFirestoreDoc(boardDoc.path, {
      isPaid: true
    })
    incrementHelperPaidVideosCountBy(1)
  }

  function makeFree (boardDoc) {
    updateFirestoreDoc(boardDoc.path, {
      isPaid: false
    })
    incrementHelperPaidVideosCountBy(-1)
  }

  async function incrementHelperPaidVideosCountBy (amount) {
    const db = getFirestore()
    const helpersRef = collection(db, `classes/${classID}/tutors`)
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
</script>