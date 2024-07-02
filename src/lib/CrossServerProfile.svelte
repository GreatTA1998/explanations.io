<div style="padding-top: 2vw;">
  <!-- TO-DO: actually fetch the user  -->
  <!-- <div style="padding: 2vw;">
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
  </div> -->

  <!-- TO-DO: show individual video watch-time, and comments -->
  {#if allVideos && videoWidth}
    <div class="alternative-flexbox">
      {#each allVideos as video}
        <div style="align-self: end;">
          <div class="youtube-video-title" style="width: {videoWidth}px; margin-bottom: 0.2vw;">
            {video.description}
          </div>

          <UnifiedDoodleVideo 
            {video} 
            {videoWidth}
          />
        </div> 
      {/each}
    </div>
  {/if}

</div>

<script>
  import { onMount } from 'svelte'
  import { collectionGroup, query, where, getDocs, limit, getFirestore } from "firebase/firestore"
  import { getFirestoreQuery } from '/src/helpers/crud.js'
  import UnifiedDoodleVideo from '$lib/UnifiedDoodleVideo.svelte'

  export let profileUID

  let allVideos = null
  let videoWidth = 0
  let videoHeight = 0

  onMount(() => {
    calculateVideoSizes()
    fetchTop10Videos()
  })

  function calculateVideoSizes() {
    const containerWidth = 0.9 * window.innerWidth

		const videoAspectRatio = 16 / 9;

		// 320px is the minimum width needed for video title and description to stay on one-line
		// actually the min. width is different, because it depends on the font-size
		const minWidth = 320 + 0.04 * containerWidth
		videoWidth = minWidth
		videoHeight = Math.floor(videoWidth / videoAspectRatio);

		return { videoWidth, videoHeight };
	}

  async function fetchTop10Videos () {
    const db = getFirestore()

    const museums = query(
      collectionGroup(db, 'blackboards'), 
      where('creatorUID', '==', profileUID)
    )
    
    const finalResult = await getFirestoreQuery(museums)
    allVideos = finalResult
  }
</script>

<style>
  .alternative-flexbox {
    display: flex; 
    justify-content: space-evenly;
    flex-wrap: wrap;

    row-gap: 48px; 
  }

  .youtube-video-title {
    font-weight: 600; 
    font-size: var(--fs-xs);
  }
</style>