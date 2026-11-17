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

    <div slot="board-float">
      {#if boardDoc && boardDoc.isMultiboard}
        <DrawerEdgeToggle
          floating
          wash
          edge="right"
          open={false}
          pointing={sideBySide ? 'right' : 'left'}
          look={overlayLook}
          lookHue={overlayHue}
          lookOpacity={overlayOpacity}
          label="Show transcript and comments"
          on:click={toggleComments}
        />
      {/if}
    </div>

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
</div>

<script>
  import CommentsColumn from '$lib/DoodleVideo/CommentsColumn.svelte'
  import DynamicLayout from '$lib/DoodleVideo/DynamicLayout.svelte'
  import DrawerEdgeToggle from '$lib/NavSideDrawer/DrawerEdgeToggle.svelte'
  import { readOverlayLook } from '/src/helpers/overlayLook.js'

  export let previewWidth = window.innerWidth * 0.35
  export let boardDoc

  // Multiboard has the hide/show control, so open by default there.
  // Legacy single-board has no CommentsPanelButton — keep closed.
  let commentsOpen = Boolean(boardDoc && boardDoc.isMultiboard)
  let sideBySide = false
  let overlayLook = 1
  let overlayHue = 0
  let overlayOpacity = 0.5

  $: canvasWidth = previewWidth
  $: canvasHeight = canvasWidth * 3/4
  // Refresh wash when the panel hides (look may have changed while open).
  $: if (!commentsOpen) syncOverlayLook()

  function syncOverlayLook () {
    const next = readOverlayLook()
    overlayLook = next.look
    overlayHue = next.h
    overlayOpacity = next.a
  }

  function toggleComments () {
    commentsOpen = !commentsOpen
  }
</script>

<style>
  .player {
    position: relative;
  }
</style>
