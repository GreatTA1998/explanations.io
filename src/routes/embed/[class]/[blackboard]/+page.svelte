{#if boardWidth && boardHeight}
  <div style="margin-left: auto; margin-right: auto; width: {boardWidth}px; height: {boardHeight}px">
    <RenderlessListenToBoard 
      dbPath={blackboardPath} 
      let:boardDoc={boardDoc}
    >
      <ReusableDoodleVideo
        {boardDoc}
        canvasWidth={width}
        canvasHeight={width * 3/4}
        boardDbPath={blackboardPath}
        {classID}
      />
    </RenderlessListenToBoard>
  </div>
{/if}

<script>
  import RenderlessListenToBoard from "$lib/RenderlessListenToBoard.svelte";
  import ReusableDoodleVideo from "$lib/ReusableDoodleVideo.svelte";
  import { computeMaxAvailableDimensionsGeneral } from '/src/helpers/canvas.js'

  export let data;
  let { classID, blackboardID } = data;
  $: ({ classID, blackboardID } = data); // so it stays in sync when `data` changes

  let boardWidth, boardHeight
  const blackboardPath = `classes/${classID}/blackboards/${blackboardID}`

  const websiteWidth  = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  const websiteHeight = window.innerHeight|| document.documentElement.clientHeight|| document.body.clientHeight;
  const audioSliderHeight = 88
  const { width, height } = computeMaxAvailableDimensionsGeneral(websiteWidth, websiteHeight - audioSliderHeight)
  boardWidth = width
  boardHeight = height
</script>