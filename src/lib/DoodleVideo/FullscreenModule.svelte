<div class="player">
  <DynamicLayout
    videoWidth={canvasWidth}
    isDrawerOpen={commentsOpen}
    bind:sideBySide
  >
    <slot
      slot="video"
      {toggleComments}
      {commentsOpen}
      {canvasWidth}
      {canvasHeight}
      {sideBySide}
    >
    </slot>

    <div slot="comments-section"
      let:commentsSectionStyle={commentsSectionStyle}
      let:overBoard
      style={commentsSectionStyle}
    >
      <CommentsColumn
        videoDoc={boardDoc}
        {overBoard}
        onHide={boardDoc?.isMultiboard ? toggleComments : undefined}
      />
    </div>
  </DynamicLayout>

  {#if !commentsOpen && boardDoc && boardDoc.isMultiboard}
    <DrawerEdgeToggle
      floating
      edge="right"
      open={false}
      pointing={sideBySide ? 'right' : 'left'}
      label="Show transcript and comments"
      on:click={toggleComments}
    />
  {/if}
</div>

<script>
  import CommentsColumn from '$lib/DoodleVideo/CommentsColumn.svelte'
  import DynamicLayout from '$lib/DoodleVideo/DynamicLayout.svelte'
  import DrawerEdgeToggle from '$lib/NavSideDrawer/DrawerEdgeToggle.svelte'

  export let previewWidth = window.innerWidth * 0.35
  export let boardDoc

  // Multiboard has the hide/show control, so open by default there.
  // Legacy single-board has no CommentsPanelButton — keep closed.
  let commentsOpen = Boolean(boardDoc && boardDoc.isMultiboard)
  let sideBySide = false

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
