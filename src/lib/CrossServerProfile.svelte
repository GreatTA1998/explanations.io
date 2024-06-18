<div>
  <div style="padding: 2vw;">
    <div style="font-size: 2vw;">
      Ben Shimabukuro
    </div>
    <div>
      Subscribed 5 times, 20 videos
    </div>
    <div>
      Linear Algebra, Probabilities, Statistics, Calculus
    </div>
    <div>
      MIT'25, LinkedIn
    </div>
  </div>

  <!-- TO-DO: show individual video watch-time, and comments -->
  {#if allVideos}
    <div class="alternative-flexbox">
      {#each allVideos as video}
        <div style="align-self: end;">
          <div class="youtube-video-title" style="width: {window.innerWidth * 0.3}px; margin-bottom: 0.2vw;">
            {video.description}
          </div>

          {#if video.isMultiboard}
            <OnlineMultislideVideo
              canvasWidth={window.innerWidth * 0.3}
              canvasHeight={window.innerWidth * 0.3 * 3/4}
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
                canvasWidth={window.innerWidth * 0.3}
                canvasHeight={window.innerWidth * 0.3 * 3/4}
                showEditDeleteButtons={false}
                boardDbPath={video.path}
              />
            </RenderlessListenToBoard>
          {/if}
          <VideoFooterInfo {video}></VideoFooterInfo>
        </div> 
      {/each}
    </div>
  {/if}

</div>

<script>
  import { collectionGroup, query, where, getDocs, limit, getFirestore } from "firebase/firestore"
  import { getFirestoreQuery } from '/src/helpers/crud.js'
  import ReusableDoodleVideo from '$lib/ReusableDoodleVideo.svelte'
  import RenderlessListenToBoard from '$lib/RenderlessListenToBoard.svelte'
  import OnlineMultislideVideo from '$lib/OnlineMultislideVideo.svelte'
  import VideoFooterInfo from '$lib/VideoFooterInfo.svelte'

  export let profileUID

  let allVideos = null

  fetchTop10Videos()

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

  async function fetchTop10Videos () {
    const db = getFirestore()

    const museums = query(
      collectionGroup(db, 'blackboards'), 
      where('creatorUID', '==', 'lX5yMlh4abTJycsFyLySoRhUItE3')
    )
    
    const finalResult = await getFirestoreQuery(museums)
    for (const doc of finalResult) {
      console.log('doc =', doc)
    }
    allVideos = finalResult
  }
</script>

<style>
  .alternative-flexbox {
    display: flex; 
    flex-wrap: wrap;
    gap: 2vw;
    justify-content: space-evenly;
  }

  .youtube-video-title {
    font-weight: 600; 
    font-size: 0.8vw;
  }
</style>