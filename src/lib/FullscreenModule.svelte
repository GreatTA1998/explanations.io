<script>
  export let previewWidth
  export let previewHeight

  // TO-DO: 
  // - will transform the height during fullscreen
  // - interacts with DoodleVideo via `canvasWeight` and `canvasHeight`
  // - provides the modular "fullscreen popup" that doesn't require assumptions about other components (other than z-index < 10)
  // - also provides the transcript / comment mode (which is exclusively for fullscreen mode anyway, so this coupled behavior is reasonable)
</script>