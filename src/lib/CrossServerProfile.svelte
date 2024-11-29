<TopNavbar>
  <div style="padding-top: 2vw;">
    <div style="padding: 0vw 2vw; display: flex; gap: 12px;">
      <div style="flex-basis: 48px;">
        <CreatorCircularAvatar/>
      </div>

      <div style="display: flex; flex-direction: column; gap: 4px;">
        <div style="font-size: var(--fs-l);">
          {creatorDoc.name || ''}
        </div>

        <div style="max-width: 60ch;">
          {creatorDoc.bio || ''}
        </div>

        <div style="display: flex; align-items: center; gap: 8px; padding: 12px 0px; flex-wrap: wrap;">
          {#if teachingServers}
            <div class="ux-filter-chip" class:highlighted-chip={currentServerID === ''}
              on:click={() => currentServerID = ''}
            >
              All videos
            </div>  

            {#each teachingServers as server}
              <div class="ux-filter-chip" class:highlighted-chip={currentServerID === server.id}
                on:click={() => currentServerID = server.id}
              >
                {server.name}
              </div>
            {/each}
          {/if}
        </div>
      </div>
    </div>

    <div style="margin-top: 36px"></div>

    <!-- TO-DO: show individual video watch-time, and comments -->
    {#if filteredVideos && videoWidth}
      <div class="alternative-flexbox">
        {#each filteredVideos as video (video.id)}
          <div style="align-self: end;">
            <div class="youtube-video-title limit-to-three-lines" style="width: {videoWidth}px; margin-bottom: 0.2vw;">
              {video.description}
            </div>

            <GeneralizedVideoDisplay
              {video} 
              {videoWidth}
            />
          </div> 
        {/each}
      </div>
    {/if}
  </div>
</TopNavbar>

<script>
  import { onMount } from 'svelte'
  import { collectionGroup, query, where, getDocs, limit, getFirestore } from "firebase/firestore"
  import { getFirestoreQuery } from '/src/helpers/crud.js'
  import CreatorCircularAvatar from '$lib/CreatorCircularAvatar.svelte'
  import GeneralizedVideoDisplay from '$lib/DoodleVideo/GeneralizedVideoDisplay.svelte'
  import TopNavbar from '$lib/TopNavbar.svelte'
  import { getFirestoreDoc } from '/src/helpers/crud.js'

  export let profileUID

  let allVideos = null
  let videoWidth = 0
  let videoHeight = 0
  let creatorDoc = {} // AF {} is not a creator
  let teachingServers = null
  let filteredVideos = null

  let currentServerID = ''

  onMount(() => {
    calculateVideoSizes()
    fetchTop10Videos()
    fetchCreator()
  })

  $: if (teachingServers) {
    filterDisplayedVideos(currentServerID)
  }

  function filterDisplayedVideos () {
    if (currentServerID === '') {
      filteredVideos = allVideos
    } else {
      filteredVideos = allVideos.filter(video => {
        const classID = video.path.split('/')[1]
        return classID === currentServerID
      })
    }
  }

  async function fetchCreator () {
    const temp = await getFirestoreDoc(`/users/${profileUID}`)
    creatorDoc = temp
    console.log('creatorDoc =', creatorDoc)

    // fetch servers
    const temp2 = []
    for (const serverID of creatorDoc.teachingServerIDs) {
      const classDoc = await getFirestoreDoc(`/classes/${serverID}`)
      temp2.push(classDoc)
    }
    teachingServers = temp2
  }

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
    const sorted = finalResult.sort((a, b) => new Date(b.date) - new Date(a.date))
    allVideos = sorted
  }
</script>

<style>
  .ux-filter-chip {
    border-radius: 24px;
    font-size: var(--fs-300);
    padding: 6px 12px;
    background-color: white;
    color: rgb(49, 44, 70);
  }

  .highlighted-chip {
    color: white;
    background-color: rgb(49, 44, 70);
  }

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

  /* https://stackoverflow.com/questions/33058004/applying-an-ellipsis-to-multiline-text */
  .limit-to-three-lines {
    display: -webkit-box;
    /* max-width: 200px; */
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
</style>