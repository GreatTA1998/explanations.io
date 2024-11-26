<RenderlessFetchComments 
  dbPath={boardDoc.path} 
  {boardDoc}
  {roomDoc}
  {classID}
  {roomID}
  let:listenToComments={listenToComments} 
  let:allComments={allComments}
  let:newComment={newComment}
  let:bindLocalValue={bindLocalValue}
  let:submitNewComment={submitNewComment}
  let:isShowingComments={isShowingComments}
  let:hideComments={hideComments}
  let:deleteComment={deleteComment}
  >  
  <div style="display: flex; align-items: center">
    <div 
      style="color: grey; font-size: 0.7rem; margin-left: 2px; margin-top: 4px; margin-bottom: 4px;"
    >
      <!-- {boardDoc.eurekaUIDs ? boardDoc.eurekaUIDs.length : 0} upvotes,  -->
      {boardDoc.viewMinutes ? boardDoc.viewMinutes.toFixed(1) : 0} minutes viewed,
      {boardDoc.numOfComments || 0} comments
    </div>
    {#if !isShowingComments}
      <Button on:click={listenToComments} >
        <Icon class="material-icons" style="margin-right: 0">
          expand_more
        </Icon>
      </Button>
    {:else}
      <Button on:click={hideComments}>
        <Icon class="material-icons" style="margin-right: 0">
          expand_less
        </Icon>
      </Button>
    {/if}
  </div>

  {#if isShowingComments}
    <div style="width: {$maxAvailableWidth - 20}px; margin-left: 20px;">
      <DoodleVideoComments 
        {allComments}
        on:comment-delete={(e) => deleteComment(e.detail)}
      />
      
      <div style="margin-bottom: 4px;"></div>

      <TextAreaAutoResizing
        value={newComment} 
        on:input={(e) => bindLocalValue(e.detail)}
        placeholder="New comment..."
      />

      <Button on:click={submitNewComment}>
        SUBMIT
      </Button>
    </div>
    <div style="margin-bottom: 10px;"></div>
  {/if}
</RenderlessFetchComments>

<script>
import '$lib/_FourColor.scss'
import Button, { Icon } from '@smui/button'
import { maxAvailableWidth } from '../store.js'
import TextAreaAutoResizing from '$lib/TextAreaAutoResizing.svelte'
import RenderlessFetchComments from '$lib/RenderlessFetchComments.svelte'
import DoodleVideoComments from '$lib/DoodleVideoComments.svelte'

export let boardDoc

export let roomDoc = null
export let classID = null
export let roomID = null
</script>