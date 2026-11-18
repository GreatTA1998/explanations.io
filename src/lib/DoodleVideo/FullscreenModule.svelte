<div class="player">
  <DynamicLayout videoWidth={canvasWidth} isDrawerOpen={commentsOpen}>
    <slot slot="video" {toggleComments} {commentsOpen} {canvasWidth} {canvasHeight}>
    </slot>

    <div slot="board-float">
      {#if boardDoc && boardDoc.isMultiboard}
        <CommentsPanelButton open={false} on:click={toggleComments} />
      {/if}
    </div>

    <div slot="comments-section"
      let:commentsSectionStyle={commentsSectionStyle}
      let:overBoard
      style={commentsSectionStyle}
    >
      <CommentsColumn videoDoc={boardDoc} {overBoard} onHide={toggleComments} />
    </div>
  </DynamicLayout>
</div>

<script>
  import CommentsColumn from '$lib/DoodleVideo/CommentsColumn.svelte'
  import CommentsPanelButton from '$lib/DoodleVideo/CommentsPanelButton.svelte'
  import DynamicLayout from '$lib/DoodleVideo/DynamicLayout.svelte'

  export let previewWidth = window.innerWidth * 0.35
  export let boardDoc

  // Multiboard has the hide/show control, so open by default there.
  // Legacy single-board has no CommentsPanelButton — keep closed.
  let commentsOpen = Boolean(boardDoc && boardDoc.isMultiboard)

  $: canvasWidth = previewWidth
  $: canvasHeight = canvasWidth * 3/4

  function toggleComments () {
    commentsOpen = !commentsOpen
  }
</script>

<style>
  .player {
    position: relative;
  }
</style>
