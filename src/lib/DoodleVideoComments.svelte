<div>
  {#each allComments as comment} 
    <div class="copied-from-old-explain">{comment.content}</div>
    <div class="copied-from-old-explain-2">
      {displayDate(comment.isoStringOfDate)} by {comment.creatorName || comment.creatorUID}
    </div>
  {/each}
</div>

<script>
  // Disallow empty comments
  import { displayDate } from '../helpers/utility.js'

  export let allComments = []

  $: allComments
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