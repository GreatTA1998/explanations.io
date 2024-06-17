<div>
  Cross server profile page

  TO-DO:
    - Show watch time
    - Show subscribers
    - Show name 
    - Also multislide vs single-slide compatibility.
  {#if allVideos}
    <div class="profile-videos-grid">
      {#each allVideos as video}
      <div>
        <div style="height: 24px; overflow: hidden;">
          {video.description}
        </div>

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

  export let profileUID

  let allVideos = null

  fetchTop10Videos()

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
  .profile-videos-grid {
    display: grid; 
		grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
		gap: 1vw;
		padding: 1vw;
  }
</style>