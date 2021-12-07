<script context="module">
  export async function load ({ page }) {
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
	<div use:portal={'main-content'} style="padding: 16px;" class:question={'?' === roomDoc.name.charAt(roomDoc.name.length - 1)}>
    <Textfield 
      value={roomDoc.name} on:input={(e) => updateRoomName(e)}
      class="room-title" 
      style={`width: ${$canvasWidth}px; margin-bottom: 20px;`}
    >
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
          {#if strokesArray}
            <TextAreaAutoResizing 
              value={boardDoc.description || ''} 
              on:input={(e) => updateBoardDescription(e, boardID)}
            >

            </TextAreaAutoResizing>
            <!-- <div class="grow-wrap" bind:this={autoGrowElem} use:initValue={ boardDoc } style="font-family: Roboto, sans-serif; margin: 12px 0px;">
              <textarea 
                value={boardDoc.description || ''}
                on:input={(e) => { 
                  autoGrowElem.dataset.replicatedValue = e.target.value; 
                  updateBoardDescription(e, boardID) 
                }} 
                style="box-sizing: border-box; width: {$canvasWidth}px; padding: 6px; border-radius: 2px;
                  font-family: Roboto, sans-serif; color: rgb(60 55 56 / 87%);"
              />
            </div> -->
          {/if}

          {#if boardDoc.audioDownloadURL }
            <div use:lazyCallable={fetchStrokes} style={`width: ${$canvasWidth}px; height: ${$canvasHeight + 80}px; position: relative`}>
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
            <div use:lazyCallable={listenToStrokes} style={`width: ${$canvasWidth}px; height: ${$canvasHeight}px; position: relative`}>
              {#if strokesArray}
                <RenderlessAudioRecorder
                  let:startRecording={startRecording} 
                  let:stopRecording={stopRecording}
                  let:currentTime={currentTime}
                  on:record-end={(e) => saveVideo(e.detail.audioBlob, boardID)}
                >
                  <Blackboard {strokesArray} {currentTime} on:stroke-drawn={(e) => handleNewlyDrawnStroke(e.detail.newStroke)}> 
                    {#if $recordState === 'pre_record'}
                      <Button on:click={startRecording} style="color: #f5862c">Record</Button>    
                      
                      <span on:click={() => blackboardMenu.setOpen(true)} class="material-icons" style="margin-right: 10px; color: white;">
                        more_horiz
                      </span>
                      <Menu bind:this={blackboardMenu} style="left: 100px; top: 50px; width: 300px">
                        <List>
                          <!-- <Button on:click={deleteAllStrokesFromDb} color="secondary">Wipe</Button> -->
                          <!-- {#each mitClasses as mitClass } -->
                            <Item on:SMUI:action={deleteAllStrokesFromDb}>
                              Wipe board
                            </Item>
                          <!-- {/each} -->
                        </List>
                      </Menu>

                    {:else if $recordState === 'mid_record'}
                      <Button on:click={stopRecording} color="secondary">Stop</Button>
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

    <Button
      on:click={createNewBlackboard}
      variant="unelevated"
      color="#2e3131"
      style={`width: ${$canvasWidth}px; margin-top: 40px`}
    >
      <Label>New blackboard</Label>
    </Button>
	</div>
{/if}

<script>
  import RenderlessBoardMethods from '$lib/RenderlessBoardMethods.svelte'
  import RenderlessAudioRecorder from '$lib/RenderlessAudioRecorder.svelte'
  import Blackboard from '../../../lib/Blackboard.svelte'
  import DoodleVideo from '$lib/DoodleVideo.svelte'
  import { fetchDoc, fetchDocs } from '../../../database.js'
  import { onMount, tick } from 'svelte'
  import Button, { Group, Label }from '@smui/button'
  import { portal, lazyCallable } from '../../../helpers/actions.js'
  import { goto } from '$app/navigation';
  import { recordState, user, canvasHeight, canvasWidth } from '../../../store.js'
  import { getRandomID } from '../../../helpers/utility.js'
  import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject, } from 'firebase/storage'
  import { doc, getFirestore, updateDoc, deleteField, onSnapshot, setDoc, arrayUnion } from '@firebase/firestore';
  import Textfield from '@smui/textfield'
  import Menu from '@smui/menu';
  import List, { Item, Text } from '@smui/list'
  import TextAreaAutoResizing from '$lib/TextAreaAutoResizing.svelte'

  export let classID
  export let roomID

  let blackboardMenu

  let roomDoc
  // reactivity not necessary: `classID` is constant here 
  const boardsDbPath = `classes/${classID}/blackboards/`
  const roomsDbPath = `classes/${classID}/rooms/`

  let autoGrowElem

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

  async function createNewBlackboard () {
    const newID = getRandomID();  
    const blackboardRef = doc(getFirestore(), boardsDbPath + newID)
    // TODO: use batch operation
    await Promise.all([
      setDoc(blackboardRef, {}),
      updateDoc(roomRef, {
        blackboards: arrayUnion(newID)
      })
    ]);  
    await tick()
    // this.scrollToThisBoard(newID)
  }
</script>

<style>
:global(.room-title input) {
  font-size: 2rem;
}

:global(.question input) {
  color: rgb(19, 145, 230) !important;
}

.grow-wrap {
  /* easy way to plop the elements on top of each other and have them both sized based on the tallest one's height */
  display: grid;
}
.grow-wrap::after {
  /* Note the weird space! Needed to preventy jumpy behavior */
  content: attr(data-replicated-value) " ";

  /* This is how textarea text behaves */
  white-space: pre-wrap;

  /* Hidden from view, clicks, and screen readers */
  visibility: hidden;
}
.grow-wrap > textarea {
  /* You could leave this, but after a user resizes, then it ruins the auto sizing */
  resize: none;

  /* Firefox shows scrollbar on growth, you can hide like this. */
  overflow: hidden;
}
.grow-wrap > textarea,
.grow-wrap::after {
  /* Identical styling required!! */
  border: 1px solid black;
  padding: 0.5rem;
  font: inherit;

  /* Place on top of each other */
  grid-area: 1 / 1 / 2 / 2;
}
</style>

