<div bind:this={ServerLayout} id="server-layout" class="robust-ios-space-filling" style="--drawer-width: {$sidebarFullscreen ? 0 : $drawerWidth}px;">
  {#if !$sidebarFullscreen}
    <div id="left-drawer">
      <NavSideDrawer />
      <div class="room-drawer">
        {#key classID}
          <TheLeftDrawer 
            {classID}
            {roomID}
          />
        {/key}
      </div>
    </div>
  {/if}

  <div id="main-content" class:sidebar-fullscreen={$sidebarFullscreen} bind:this={MainContent}>
    {#if !$sidebarFullscreen && $drawerWidth === 0}
      <button on:click={() => drawerWidth.set(WIDTHS.DRAWER_EXPANDED)} 
        class="material-icons expand-collapse-button" 
        style="color: rgb(100, 100, 100); font-size: 2rem; position: fixed; top: 8px; left: 0; z-index: 10;"
      >
        keyboard_double_arrow_right
      </button>
    {/if}

    <slot />
  </div>
</div>

<script> 
  import TheLeftDrawer from '$lib/TheLeftDrawer/index.svelte'
  import NavSideDrawer from '$lib/NavSideDrawer/index.svelte'
  import { getBlackboardModuleSize, getPreviewVideoWidth, getCinemaVideoSize } from '/src/helpers/dimensions.js'
  import { getFirestoreDoc,updateFirestoreDoc } from '/src/helpers/crud.js'
  import { WIDTHS } from '/src/helpers/CONSTANTS.js'

  import { 
    user, drawerWidth, classServerDoc, recentSearchedServerDoc, 
    blackboardWidth, videoPreviewWidth, videoCinemaWidth, isFullServerMode, sidebarFullscreen
  } from '/src/store.js'

  import { onMount } from 'svelte'
  import { doc, onSnapshot, getFirestore } from 'firebase/firestore'

  export let data

  let { classID, roomID } = data
  let unsubClassDocListener = null
  let resizeObserver = null
  let MainContent = null
  let ServerLayout

  $: if ($isFullServerMode && MainContent && ServerLayout) {
    transformToFullServerPage()
  }

  $: ({ classID, roomID } = data); // this line triggers whenever `data` changes  

  $: {
    listenToClassDoc(classID)
    handleClassDocChange(classID)
    fetchRecentlySearchedClassDoc($user)
  }


  onMount(() => {
    resizeObserver = new ResizeObserver(entries => {
      // we don't debounce this because we don't want to trade-off a laggy drawer resize experience
      // for a more performant inspector resize experience (which is not how the user uses the app)
      computeDimensionsForBlackboardsAndVideos()
    })
    resizeObserver.observe(MainContent, { box: 'border-box' })
  })

  function transformToFullServerPage () {
    MainContent.style.overflowY = 'auto'
    ServerLayout.style.marginTop = '0px'
  }

  function computeDimensionsForBlackboardsAndVideos () {
    requestAnimationFrame(() => {
      blackboardWidth.set(
        getBlackboardModuleSize({ 
          containerWidth: MainContent.offsetWidth,
          containerHeight: MainContent.offsetHeight
        })
      )
      videoPreviewWidth.set(
        getPreviewVideoWidth({    
          containerWidth: MainContent.offsetWidth,
          containerHeight: MainContent.offsetHeight
        })
      )
      videoCinemaWidth.set(
        getCinemaVideoSize()
      )
    })
  }

  async function handleClassDocChange () {
    if ($user.uid) {
      updateFirestoreDoc(`/users/${$user.uid}`, {
        mostRecentServerID: classID 
      })
    }  
  }

  async function fetchRecentlySearchedClassDoc () {
    if (!$user.recentSearchedServerID) return {}

    const recentServerDoc = await getFirestoreDoc(`/classes/${$user.recentSearchedServerID}`)
    recentSearchedServerDoc.set(recentServerDoc)
  }

  function listenToClassDoc (classID) {
    if (unsubClassDocListener) unsubClassDocListener()
    const db = getFirestore()
    unsubClassDocListener = onSnapshot(doc(db, `/classes/${classID}`), snapshot => {
      classServerDoc.set(snapshot.data())
    })
  }
</script>

<style> 
  :root {
    --navbar-height: 0px;
  }

  #server-layout {
    display: grid;
    grid-template-columns: var(--drawer-width) 1fr; 
    grid-template-areas: 'sidebar main';
    height: 100vh;
    background-color: var(--bg-off-white);
  }

  #left-drawer {
    grid-area: sidebar;
    display: flex;
    flex-direction: column;
    min-height: 0;
    height: 100%;
    overflow: hidden;
  }

  .room-drawer {
    flex: 1;
    min-height: 0;
  }

  #main-content {
    grid-area: main;
    position: relative;
    min-width: 0;
  }

  #main-content.sidebar-fullscreen {
    padding-top: 72px;
  }
</style>

