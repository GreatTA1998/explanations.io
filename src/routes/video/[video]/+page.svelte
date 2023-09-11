<RenderlessListenToBoard dbPath="classes/{classID}/blackboards/{blackboardID}" let:boardDoc={boardDoc}>
  <ReusableDoodleVideo
    canvasWidth={600}
    canvasHeight={450}
    {boardDoc}
    boardDbPath="classes/{classID}/blackboards/{blackboardID}"
  />
</RenderlessListenToBoard>

<script>
  import RenderlessListenToBoard from '$lib/RenderlessListenToBoard.svelte'
  import ReusableDoodleVideo from '$lib/ReusableDoodleVideo.svelte'

  export let data;

  let { videoID } = data;
  $: ({ videoID } = data); // so it stays in sync when `data` changes

  const classID = videoID.split(':')[0]
  const blackboardID = videoID.split(':')[1]
  
  const epsilon = 40
</script>