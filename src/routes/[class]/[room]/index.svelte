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

{#if roomDoc}
  <!-- Give a 5-seconds countdown UI feedback before pinging the server -->
	<div use:portal={'main-content'} style="height: 100vh" class:question-room={'?' === roomDoc.name.charAt(roomDoc.name.length - 1)}>
    <!-- TODO: placeholder & larger text size -->
    <Textfield value={roomDoc.name} on:input={(e) => updateRoomName(e)} style="width: 100%; margin-bottom: 20px;">

    </Textfield>
		{#each roomDoc.blackboards as boardID (boardID) }
			<RenderlessBoardMethods dbPath={boardsDbPath + boardID} 
				let:boardDoc={boardDoc}
				let:fetchStrokes={fetchStrokes}
        let:listenToStrokes={listenToStrokes}
				let:strokesArray={strokesArray}
        let:handleNewlyDrawnStroke={handleNewlyDrawnStroke}
        let:deleteAllStrokesFromDb={deleteAllStrokesFromDb}
			>
        {#if boardDoc}
          <Textfield textarea value={boardDoc.description || ''} on:input={(e) => updateBoardDescription(e, boardID)} style="width: 100%; margin-bottom: 10px">

          </Textfield>

          {#if boardDoc.audioDownloadURL }
            <div use:lazyCallable={fetchStrokes} style={`width: 100%; height: ${$canvasHeight + 80}px`}>
              {#if strokesArray}
                <DoodleVideo 
                  {strokesArray} 
                  audioDownloadURL={boardDoc.audioDownloadURL}
                >
                  <Button on:click={revertToBoard(boardDoc)}>
                    Revert to board
                  </Button>
                </DoodleVideo>
              {/if}
            </div>
          {:else}
            <div use:lazyCallable={listenToStrokes} style={`width: 100%; height: ${$canvasHeight + 80}px`}>
              {#if strokesArray}
                <RenderlessAudioRecorder
                  let:startRecording={startRecording} 
                  let:stopRecording={stopRecording}
                  let:currentTime={currentTime}
                  on:record-end={(e) => saveVideo(e.detail.audioBlob, boardID)}
                >
                  <Blackboard {strokesArray} {currentTime} on:stroke-drawn={(e) => handleNewlyDrawnStroke(e.detail.newStroke)}> 
                    {#if $recordState === 'pre_record'}
                      <Button on:click={startRecording}>Record</Button>          
                      <Button on:click={deleteAllStrokesFromDb}>Wipe board</Button>
                    {:else if $recordState === 'mid_record'}
                      <Button on:click={stopRecording}>Stop</Button>
                    {:else}
                      Uploading...
                    {/if}
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
  import { recordState, user, canvasHeight } from '../../../store.js'
  import { getRandomID } from '../../../helpers/utility.js'
  import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject, } from 'firebase/storage'
  import { doc, getFirestore, updateDoc, deleteField, onSnapshot } from '@firebase/firestore';
  import Textfield from '@smui/textfield'

  export let classID
  export let roomID

  let roomDoc
  // reactivity not necessary: `classID` is constant here 
  const boardsDbPath = `classes/${classID}/blackboards/`
  const roomsDbPath = `classes/${classID}/rooms/`
  $: roomRef = doc(getFirestore(), roomsDbPath + roomID)

  if (!$user.uid) {
    goto('/')
  }

  async function updateRoomName (e) {
    const { value } = e.srcElement
    await updateDoc(roomRef, {
      name: value
    })
  }

  async function updateBoardDescription (e, id) {
    const { value } = e.srcElement 
    const boardRef = doc(getFirestore(), boardsDbPath + id)
    await updateDoc(boardRef, {
      description: value
    })
  }

  // slugify the classID if it contains '.', convert to '-' regenerate 6.036 and 6.046's class
  onMount(async () => {
    onSnapshot(roomRef, (snapshot) => {
      roomDoc = { id: snapshot.id, ...snapshot.data() }
    })
  })

  $: roomID, updateRoomDoc() 

  async function updateRoomDoc () {
    roomDoc = await fetchDoc(roomsDbPath + roomID)
  }

  async function saveVideo (audioBlob, boardID) {
    console.log('saveVideo(), audioBlob =', audioBlob)
    const storage = getStorage()
    const audioRef = ref(storage, `audio/${getRandomID()}`)
    await uploadBytes(audioRef, audioBlob)
    const downloadURL = await getDownloadURL(audioRef)

    const blackboardRef = doc(getFirestore(), boardsDbPath + boardID)
    await updateDoc(blackboardRef, {
      creatorUID: $user.uid,
      creatorPhoneNumber: $user.phoneNumber,
      date: new Date().toISOString(),
      audioDownloadURL: downloadURL,
      audioRefFullPath: audioRef.fullPath
    })
  }

  async function revertToBoard ({ id, audioRefFullPath }) {
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
    await Promise.all(promises)
  }
</script>

<style>
.question-room {
  background-color: red;
}
</style>

