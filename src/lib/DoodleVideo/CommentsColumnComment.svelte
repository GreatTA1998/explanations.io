<div>
  <div class="copied-from-old-explain">
    {comment.content}
  </div>

  <div class="copied-from-old-explain-2" style="display: flex; align-items: center;">
    {displayDate(comment.isoStringOfDate)} by {comment.creatorName || comment.creatorUID}
    {#if comment.creatorUID === $user.uid || !comment.creatorUID}
      <span style="margin-left: 6px; cursor: pointer; font-size: 16px;" 
        on:click={() => dispatch('comment-delete', { id: comment.id })} class="material-icons"
        on:keydown
      >
        delete_forever
      </span>
    {/if}
  </div>
</div>

<script>
  import { displayDate } from '../../helpers/utility.js'
  import { user } from '../../store.js'
  import { createEventDispatcher } from 'svelte';

  export let comment

  const dispatch = createEventDispatcher()
</script>

<style>
  .copied-from-old-explain {
    font-size: .875rem;
    font-weight: 400;
    line-height: 1.375rem;
    letter-spacing: .0071;
  }

  .copied-from-old-explain-2 {
    color: rgba(0,0,0,.6) !important;
    font-size: 0.75rem !important;
  }
</style>