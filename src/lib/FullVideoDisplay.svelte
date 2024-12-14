<TopNavbar>
  {#if video}
    <div style="display: flex;">
      {#if video.isMultiboard}
        <OnlineMultislideVideo
          canvasWidth={window.innerWidth * 0.7}
          canvasHeight={window.innerWidth * 0.7 * 3/4}
          boardDoc={video}
          classID={quickfixClassIDFrom(video)}
          audioDownloadURL={video.audioDownloadURL}
          timingOfSlideChanges={video.timingOfSlideChanges}
          showEditDeleteButtons={true}
          on:six-seconds-elapsed={(e) => incrementViewMinutes(video.id, e.detail.playbackSpeed)}
        />
      {:else}
        <RenderlessListenToBoard
          dbPath={video.path}
          let:boardDoc={boardDoc}
        >
          <ReusableDoodleVideo
            autoFetchStrokes={false}
            {boardDoc}
            canvasWidth={window.innerWidth * 0.7}
            canvasHeight={window.innerWidth * 0.7 * 3/4}
            showEditDeleteButtons={false}
            boardDbPath={video.path}
          />
        </RenderlessListenToBoard>
      {/if}

      <div>
        <CommentsColumn
          videoDoc={video}
        />
      </div>
    </div>
  {/if}

</TopNavbar>

<script>
  import ReusableDoodleVideo from '$lib/ReusableDoodleVideo.svelte'
  import RenderlessListenToBoard from '$lib/RenderlessListenToBoard.svelte'
  import CommentsColumn from '$lib/CommentsColumn.svelte'
  import OnlineMultislideVideo from '$lib/OnlineMultislideVideo.svelte'
  import { onMount } from 'svelte'
  import { getFirestoreDoc } from '/src/helpers/crud.js'
  import TopNavbar from '$lib/TopNavbar.svelte'

  export let videoPath 

  let video = null 

  onMount(async () => {
    const videoDoc = await getFirestoreDoc(videoPath)
    video = videoDoc
  })  
  
  function quickfixClassIDFrom (video) {
    const classID = video.path.split('/')[1]
    return classID
  }

  function incrementViewMinutes (boardID, playbackSpeed) {
    const blackboardRef = doc(getFirestore(), boardsDbPath + boardID)
    updateDoc(blackboardRef, {
      viewMinutes: increment(0.1 * playbackSpeed)
    })
  }
</script>