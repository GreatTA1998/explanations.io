<div style="margin-top: var(--height-navbar); padding: 2vw;">
  <div style="padding: 0vw 2vw; display: flex; gap: 12px;">
    <div style="flex-basis: 48px;">
      <CreatorCircularAvatar seed={profileUID} color={creatorDoc.beaverProfilePicColor || ''} />
    </div>

    <div style="display: flex; flex-direction: column; gap: 4px;">
      <div style="font-size: var(--fs-l);">
        {creatorDoc.name || ''}
      </div>

      <div style="max-width: 60ch;">
        <TextAreaAutoResizing value={creatorDoc.bio}/>
      </div>

      <div style="display: flex; align-items: center; gap: 8px; padding: 12px 0px; flex-wrap: wrap;">
        {#if teachingServers}
          <button on:click={() => currentServerID = ''} 
            class="ux-filter-chip" class:highlighted-chip={currentServerID === ''}
          >
            Recent videos
          </button>  

          {#each teachingServers as server (server.id)}
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

  {#if allVideos}
    <div class="video-grid" bind:clientWidth={gridWidth}>
      {#each allVideos as video (video.id)}
        <div>
          <div class="youtube-video-title limit-to-three-lines">
            {video.description}
          </div>

          {#if videoWidth}
            <GeneralizedVideoDisplay
              {video} 
              {videoWidth}
              forceCommentsClosed={true}
              classID={quickGetClassIDFrom(video)}
              willDisplayCreatorCard={false}
            />
          {/if}
        </div> 
      {/each}
    </div>
  {/if}
</div>

<script>
  import { onMount } from 'svelte'
  import { collection, collectionGroup, query, where, orderBy, limit, getFirestore } from "firebase/firestore"
  import { getFirestoreQuery } from '/src/helpers/crud.js'
  import CreatorCircularAvatar from '$lib/DoodleVideo/CreatorCircularAvatar.svelte'
  import GeneralizedVideoDisplay from '$lib/DoodleVideo/GeneralizedVideoDisplay.svelte'
  import ReusableSubscribeButton from '$lib/Reusable/ReusableSubscribeButton.svelte'
  import TextAreaAutoResizing from '$lib/Reusable/TextAreaAutoResizing.svelte'
  import { getFirestoreDoc } from '/src/helpers/crud.js'

  export let profileUID

  const GRID_MIN = 336
  const GRID_GAP = 48

  let allVideos = null
  let gridWidth = 0
  let creatorDoc = {} // AF {} is not a creator
  let teachingServers = null

  let currentServerID = ''

  onMount(() => {
    fetchCreatorAndServers()
  })

  $: videoWidth = deriveVideoWidth(gridWidth)

  $: {
    if (currentServerID) {
      fetchCreatorVideosFromServer(currentServerID)
    } else {
      fetchMostRecentVideos()
    }
  }

  function deriveVideoWidth (w) {
    if (!w) return 0
    const cols = Math.max(1, Math.floor((w + GRID_GAP) / (GRID_MIN + GRID_GAP)))
    return Math.floor((w - GRID_GAP * (cols - 1)) / cols)
  }

  function quickGetClassIDFrom (video) {
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

  .video-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(336px, 1fr));
    gap: 48px;
  }

  @media (max-width: 767px) {
    .video-grid {
      gap: 24px;
    }
  }

  .youtube-video-title {
    font-weight: 600; 
    font-size: var(--fs-xs);
    width: 100%;
    margin-bottom: 0.2vw;
  }

  /* https://stackoverflow.com/questions/33058004/applying-an-ellipsis-to-multiline-text */
  .limit-to-three-lines {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
</style>
