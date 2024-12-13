<div bind:this={ServerLayout} id="server-layout" class="robust-ios-space-filling" style="--drawer-width: {$drawerWidth}px;">
  <div id="left-drawer">
    {#key classID}
      <TheLeftDrawer 
        {classID}
        {roomID}
      />
    {/key}
  </div>

  <div id="main-content">
    <slot />
  </div>
</div>

<script> 
  import TheLeftDrawer from '$lib/TheLeftDrawer.svelte'
  import { user, drawerWidth, classServerDoc, recentSearchedServerDoc } from '/src/store.js'
  import { getFirestoreDoc,updateFirestoreDoc } from '/src/helpers/crud.js'
  import { doc, onSnapshot, getFirestore } from 'firebase/firestore'
  import { onMount } from 'svelte'
  import '$lib/_Elevation.scss'
  import { 
    blackboardWidth, 
    videoPreviewWidth, 
    videoCinemaWidth,
    isFullServerMode
  } from '/src/store.js';
  import { getBlackboardModuleSize, getPreviewVideoWidth, getCinemaVideoSize, HEIGHTS } from '/src/helpers/dimensions.js'

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
    fetchRecentlySearchedClassDoc()
  }

  onMount(() => {
    initializeCSSVariables()

    MainContent = document.getElementById('main-content')

    resizeObserver = new ResizeObserver(entries => {
      // we don't debounce this because we don't want to trade-off a laggy drawer resize experience
      // for a more performant inspector resize experience (which is not how the user uses the app)
      computeDimensionsForBlackboardsAndVideos()
    })
    resizeObserver.observe(MainContent, { box: 'border-box' })
  })

  function transformToFullServerPage () {
    MainContent.style.overflowY = 'auto'
    const navbarHeight = 56
    ServerLayout.style.marginTop = `${navbarHeight}px`
  }

  function initializeCSSVariables () {
    document.documentElement.style.setProperty('--title-height', `${HEIGHTS.TITLE}px`);
    document.documentElement.style.setProperty('--board-changer-height', `${HEIGHTS.BOARD_CHANGER}px`);
    document.documentElement.style.setProperty('--audio-slider-height', `${HEIGHTS.AUDIO_SLIDER}px`);
  }

  function computeDimensionsForBlackboardsAndVideos () {
    requestAnimationFrame(() => {
      MainContent = document.getElementById('main-content')
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
    if (!$user.recentSearchedServerID) return

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
    --navbar-height: 56px;
  }

  #server-layout {
    display: grid;
    grid-template-columns: var(--drawer-width) 1fr; 
    grid-template-areas: 'sidebar main';
    height: calc(100vh - var(--navbar-height));
    background-color: var(--bg-off-white);
  }

  #left-drawer {
    grid-area: sidebar;
  }

  #main-content {
    grid-area: main;
  }
</style>

