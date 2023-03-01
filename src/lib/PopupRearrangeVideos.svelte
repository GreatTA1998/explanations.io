<BasePopup on:popup-close>
  <h2 slot="title" style="font-family: sans-serif;">
    Rearrange videos
  </h2>
  <div slot="popup-content" style="font-family: sans-serif; padding: 12px;">
    {#each [1, 2, 3] as videoIdx}
      <div 
        on:drop={(e) => drop_handler(e)}
        on:dragover={(e) => dragover_handler(e)}
      >
        Drop zone
      </div>

      <div style="display: flex; align-items: center;">
        <div 
          draggable="true" 
          on:dragstart={(e) => dragstart_handler(e, videoIdx)} 
          style="background-color: rgb(62, 66, 66); height: 30px; width: 60px; margin-bottom: 5px;"
        >
          {videoIdx}
        </div>
        <div>
          Lorem ipsum, description of the video to help identify
        </div>
      </div>
    {/each}
    <div 
      on:drop={(e) => drop_handler(e)}
      on:dragover={(e) => dragover_handler(e)}
    >
      Last drop zone
    </div>
  </div>
</BasePopup>

<script>
  import BasePopup from '$lib/BasePopup.svelte'
  import { createEventDispatcher, onMount } from 'svelte'
  import { user } from '../store.js'
  import { updateFirestoreDoc } from '../helpers/crud.js'
  import Button from '@smui/button'

  const dispatch = createEventDispatcher()

  function dragstart_handler (e, id) {
    e.dataTransfer.setData("text/plain", id)
  } 

  async function drop_handler (e) {
    const id = e.dataTransfer.getData('text/plain')
    console.log('id =', id)
    // const i = draggedFrom
    // const j = droppedTo



    // const blackboardsCopy = [...this.room.blackboards]
    // const draggedBoardID = blackboardsCopy[i]
    // // remove 
    // const removeOneElement = 1
    // blackboardsCopy.splice(i, removeOneElement)
    // // insert
    // const removeNoElement = 0
    // blackboardsCopy.splice(j, removeNoElement, draggedBoardID)  
      
    // // make an update operation
    // await this.roomRef.update({
    //   blackboards: blackboardsCopy
    // })
  }
  
  function dragover_handler (e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move'
  }
</script>