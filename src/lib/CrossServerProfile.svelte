<div style="margin-top: var(--height-navbar); padding: 2vw;">
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
          <button class="ux-filter-chip" class:highlighted-chip={currentServerID === ''}
            on:click={() => currentServerID = ''}
          >
            Recent videos
          </button>  

          {#each teachingServers as server}
            <button class="ux-filter-chip" class:highlighted-chip={currentServerID === server.id}
              on:click={() => currentServerID = server.id}
            >
              {server.name}
            </button>
          {/each}
        {/if}
      </div>
    </div>
  </div>

  <div style="margin-top: 36px"></div>

  {#if allVideos&& videoWidth}
    <div class="alternative-flexbox">
      {#each allVideos as video (video.id)}
        <div style="align-self: end;">
          <div class="youtube-video-title limit-to-three-lines" style="width: {videoWidth}px; margin-bottom: 0.2vw;">
            {video.description}
          </div>

          <GeneralizedVideoDisplay
            {video} 
            {videoWidth}
            willDisplayCreatorCard={false}
          />
        </div> 
      {/each}
    </div>
  {/if}
</div>

<script>
  import { onMount } from 'svelte'
  import { collection, collectionGroup, query, where, orderBy, getDocs, limit, getFirestore } from "firebase/firestore"
  import { getFirestoreQuery } from '/src/helpers/crud.js'
  import CreatorCircularAvatar from '$lib/CreatorCircularAvatar.svelte'
  import GeneralizedVideoDisplay from '$lib/DoodleVideo/GeneralizedVideoDisplay.svelte'
  import { getFirestoreDoc } from '/src/helpers/crud.js'

  export let profileUID

  let allVideos = null
  let videoWidth = 0
  let videoHeight = 0
  let creatorDoc = {} // AF {} is not a creator
  let teachingServers = null

  let currentServerID = ''

  onMount(() => {
    calculateVideoSizes()
    fetchCreatorAndServers()
  })

  $: {
    if (currentServerID) {
      fetchCreatorVideosFromServer(currentServerID)
    } else {
      fetchMostRecentVideos()
    }
  }

  async function fetchCreatorVideosFromServer (serverID) {
    allVideos = []
    const db = getFirestore()

    const q = query(
      collection(db, 'classes', serverID, 'blackboards'),
      where('creatorUID', '==', profileUID),
    )

    const finalResult = await getFirestoreQuery(q)
    const sorted = finalResult.sort((a, b) => new Date(b.date) - new Date(a.date))
    allVideos = sorted
  }

  async function fetchCreatorAndServers () {
    const temp = await getFirestoreDoc(`/users/${profileUID}`)
    creatorDoc = temp

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

  async function fetchMostRecentVideos () {
    const db = getFirestore()

    const museums = query(
      collectionGroup(db, 'blackboards'), 
      where('creatorUID', '==', profileUID),
      orderBy('date', 'desc'),
      limit(15)
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
    background-color: rgb(220, 220, 220);
    color: rgb(49, 44, 70);
  }

  .highlighted-chip {
    color: black;
    font-weight: 600;
    background-color: #F7C686;
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