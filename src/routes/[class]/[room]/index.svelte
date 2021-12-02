<script context="module">
  export function load ({ page }) {
    return {
      props: {
        classID: page.params.class,
        roomID: page.params.room
      }
    }
  }
</script>

<!-- Lazy loading -->
{#if roomDoc}
	<div use:portal={'main-content'} style="height: 100vh">
		{#each roomDoc.blackboards as boardID (boardID) }
			<RenderlessBoardMethods dbPath={boardsDbPath + boardID} 
				let:boardDoc={boardDoc}
				let:fetchStrokes={fetchStrokes}
        let:listenToStrokes={listenToStrokes}
				let:isFetchingStrokes={isFetchingStrokes}
				let:strokesArray={strokesArray}
        let:handleNewlyDrawnStroke={handleNewlyDrawnStroke}
        let:deleteAllStrokesFromDb={deleteAllStrokesFromDb}
			>
        {#if boardDoc}
          {#if boardDoc.audioDownloadURL }
            <div
              use:lazyCallable={fetchStrokes} 
              style={`width: ${placeholderWidth}px; height: ${placeholderHeight}px`}
            >
              {#if strokesArray}
                <DoodleVideo 
                  {strokesArray} 
                  audioDownloadURL={boardDoc.audioDownloadURL}
                />
              {/if}
            </div>
          {:else}
            <div use:lazyCallable={listenToStrokes} style={`width: ${placeholderWidth}px; height: ${placeholderHeight}px`}>
              {#if strokesArray}
                <RenderlessAudioRecorder
                  let:startRecording={startRecording} 
                  let:stopRecording={stopRecording}
                  let:currentTime={currentTime}
                  on:record-end={(e) => saveVideo(e.detail.audioBlob, boardID)}
                >
                  <Blackboard 
                    {strokesArray} 
                    {currentTime}
                    on:stroke-drawn={(e) => handleNewlyDrawnStroke(e.detail.newStroke)}
                  > 
                    {#if $recordState === 'pre_record'}
                      <Button on:click={startRecording}>
                        Record
                      </Button>
                    {:else if $recordState === 'mid_record'}
                      <Button on:click={stopRecording}>
                        Stop
                      </Button>
                    {:else}
                      Uploading...
                    {/if}

                    <Button on:click={deleteAllStrokesFromDb}>
                      Wipe board
                    </Button>
                  </Blackboard>
                </RenderlessAudioRecorder>
              {/if}
            </div>
          {/if}
        {/if}
      </RenderlessBoardMethods>
		{/each}
	</div>
{/if}

<script>
  import RenderlessBoardMethods from '$lib/RenderlessBoardMethods.svelte'
  import RenderlessAudioRecorder from '$lib/RenderlessAudioRecorder.svelte'
  import Blackboard from '../../../lib/Blackboard.svelte'
  import DoodleVideo from '$lib/DoodleVideo.svelte'
  import { fetchDoc, fetchDocs } from '../../../database.js'
  import { onMount } from 'svelte'
  import Button from '@smui/button'
  import { portal, lazyCallable } from '../../../helpers/actions.js'
  import { goto } from '$app/navigation';
  import { recordState, user } from '../../../store.js'
  import { getRandomID } from '../../../helpers/utility.js'
  import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'
  import { doc, getFirestore, updateDoc } from '@firebase/firestore';
  import { calculateCanvasDimensions } from '../../../helpers/canvasHelpers.js'

  export let classID
  export let roomID

  let roomDoc
  const boardsDbPath = `classes/${classID}/blackboards/`
  const roomsDbPath = `classes/${classID}/rooms/`
  let placeholderWidth
  let placeholderHeight

  if (!$user.uid) {
    console.log('redirecting to tutorial')
    goto('/')
  }

  // slugify the classID if it contains '.', convert to '-' regenerate 6.036 and 6.046's class
  onMount(async () => {
    roomDoc = await fetchDoc(roomsDbPath + roomID)
    // quick-fix
    const dimensions = calculateCanvasDimensions()
    placeholderWidth = dimensions.width + 50
    placeholderHeight = dimensions.height + 50
  })

  $: roomID, updateRoomDoc() 

  async function updateRoomDoc () {
    roomDoc = await fetchDoc(roomsDbPath + roomID)
  }

  async function saveVideo (audioBlob, boardID) {
    console.log('saveVideo(), audioBlob =', audioBlob)
    const storage = getStorage()
    const audioRef = ref(storage, `audio/${getRandomID()}`)
    console.log('audioRef =', audioRef)

    await uploadBytes(audioRef, audioBlob)
    const downloadURL = await getDownloadURL(audioRef)
    // await Promise.all([
    //   uploadBytes(audioRef, audioBlob),
    //   getDownloadURL(audioRef).then(URL => downloadURL = URL)
    // ])
    console.log('downloadURL =', downloadURL)

    const blackboardRef = doc(getFirestore(), boardsDbPath + boardID)
    await updateDoc(blackboardRef, {
      creatorUID: $user.uid,
      creatorPhoneNumber: $user.phoneNumber,
      date: new Date().toISOString(),
      audioDownloadURL: downloadURL
    })
    console.log('updated doc =', {
      creatorUID: $user.uid,
      creatorPhoneNumber: $user.phoneNumber,
      date: new Date().toISOString(),
      audioDownloadURL: downloadURL
    })
  }
</script>

