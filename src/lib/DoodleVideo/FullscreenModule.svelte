<div class="player">
  <DynamicLayout videoWidth={canvasWidth} isDrawerOpen={commentsOpen}>
    <slot slot="video" {toggleComments} {commentsOpen} {canvasWidth} {canvasHeight}>
    </slot>

    <div slot="comments-section"
      let:commentsSectionStyle={commentsSectionStyle}
      let:overBoard
      style={commentsSectionStyle}
    >
      <CommentsColumn videoDoc={boardDoc} {overBoard} />
    </div>
  </DynamicLayout>
</div>

<script>
  import CommentsColumn from '$lib/DoodleVideo/CommentsColumn.svelte'
  import DynamicLayout from '$lib/DoodleVideo/DynamicLayout.svelte'

  export let previewWidth = window.innerWidth * 0.35
  export let boardDoc

  let commentsOpen = false

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
