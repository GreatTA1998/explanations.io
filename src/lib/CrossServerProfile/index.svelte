<div style="margin-top: var(--height-navbar); padding: 2vw;">
  <button on:click={backToServers}>
    <span class="material-symbols-outlined">
      arrow_back
    </span>
  </button>

  <!-- NOTE: this if statement is necessary or else the resizing algorithm won't work -->
  {#if creatorDoc.bio}
    <TextAreaAutoResizing
      value={creatorDoc.bio} 
      on:input={(e) => debouncedUpdateBio(e.detail)}
      placeholder="Details"
      numberOfInitialRowsIfEmpty={1}
      readonly={!$user.uid || $user.uid !== creatorDoc.uid}
    />
  {/if}

  <span style="font-size: var(--fs-300);">
    {feedbackText}
  </span>

  <div style="padding: 0vw 2vw; display: flex; gap: 12px;">
    <div style="flex-basis: 48px;">
      <CreatorCircularAvatar/>
    </div>

    <div style="display: flex; flex-direction: column; gap: 4px;">
      <div style="font-size: var(--fs-l);">
        {creatorDoc.name || ''}
      </div>

      <div style="display: flex; align-items: center; gap: 8px; padding: 12px 0px; flex-wrap: wrap;">
        {#if teachingServers}
          <button on:click={() => currentServerID = ''} 
            class="ux-filter-chip" class:highlighted-chip={currentServerID === ''}
          >
            Recent videos
          </button>  

          {#each teachingServers as server}
            <button on:click={() => currentServerID = server.id} 
              class="ux-filter-chip" class:highlighted-chip={currentServerID === server.id}
            >
              {server.name}
            </button>
          {/each}
        {/if}
      </div>
    </div>
    
    <ReusableSubscribeButton>
      Subscribe & ask questions for $10/week
    </ReusableSubscribeButton>
  </div>

  <div style="margin-top: 36px"></div>

  {#if allVideos && videoWidth}
    <div class="alternative-flexbox">
      {#each allVideos as video (video.id)}
        <div style="align-self: end;">
          <div class="youtube-video-title limit-to-three-lines" style="width: {videoWidth}px; margin-bottom: 0.2vw;">
            {video.description}
          </div>

          <GeneralizedVideoDisplay
            {video} 
            {videoWidth}
            classID={quickfixClassIDFrom(video)}
            willDisplayCreatorCard={false}
          />
        </div> 
      {/each}
    </div>
  {/if}
</div>

<script>
  import { onMount } from 'svelte'
  import { user } from '/src/store.js'
  import { collection, collectionGroup, query, where, orderBy, getDocs, limit, getFirestore } from "firebase/firestore"
  import CreatorCircularAvatar from '$lib/DoodleVideo/CreatorCircularAvatar.svelte'
  import GeneralizedVideoDisplay from '$lib/DoodleVideo/GeneralizedVideoDisplay.svelte'
  import ReusableSubscribeButton from '$lib/Reusable/ReusableSubscribeButton.svelte'
  import TextAreaAutoResizing from '$lib/Reusable/TextAreaAutoResizing.svelte'
  import { createDebouncedFunction } from '/src/helpers/debounce.js'
  import { getFirestoreQuery, getFirestoreDoc, updateFirestoreDoc } from '/src/helpers/crud.js'
  import { goto } from '$app/navigation'

  export let profileUID

  let allVideos = null
  let videoWidth = 0
  let videoHeight = 0
  let creatorDoc = {} // AF {} is not a creator
  let teachingServers = null
  let feedbackText = ''

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

  async function backToServers () {
    if (window.history.length > 1) {
      window.history.back()
    } else {
      // though we don't expect visitors to directly visit a creator page
      goto('/')
    }
  }

  const debouncedUpdateBio = createDebouncedFunction(updateBio, 1000)

  function updateBio (newVal) {
    updateFirestoreDoc(`/users/${profileUID}`, { 
      bio: newVal 
    })
    feedbackText = 'Bio successfully saved.'
    setTimeout(() => feedbackText = '', 3000)
  }

  function quickfixClassIDFrom (video) {
    const classID = video.path.split('/')[1]
    return classID
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