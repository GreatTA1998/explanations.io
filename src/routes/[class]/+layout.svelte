<div 
  class="grid-layout robust-ios-space-filling"
  style="--drawer-width: {$drawerWidth}px;"
>
  <div class="top-navbar">
    <TopNavbar />
  </div>

  <div class="left-drawer">
    {#key classID}
      <TheLeftDrawer 
        {classID}
        {roomID}
      />
    {/key}
  </div>

  <!-- this element's used to compute the max available dimensions -->
  <div id="main-content">
    <slot>

    </slot>
  </div>
</div>

<script> 
  import TheLeftDrawer from '$lib/TheLeftDrawer.svelte'
  import TopNavbar from '$lib/TopNavbar.svelte'
  import { user, drawerWidth, classServerDoc, recentSearchedServerDoc } from '/src/store.js'
  import { getFirestoreDoc,updateFirestoreDoc } from '/src/helpers/crud.js'
  import { doc, onSnapshot, getFirestore } from 'firebase/firestore'
  import { onMount, onDestroy } from 'svelte'
  import '$lib/_Elevation.scss'
  import { blackboardWidth, videoPreviewWidth, videoCinemaWidth } from '/src/store.js';
  import { getBlackboardModuleSize, getPreviewVideoWidth, getCinemaVideoSize } from '/src/helpers/dimensions.js'

  export let data

  let { classID, roomID } = data
  let unsubClassDocListener = null
  let resizeObserver = null
  let MainContent = null

  onMount(() => {
    MainContent = document.getElementById('main-content')

    resizeObserver = new ResizeObserver(entries => {
      // we don't debounce this because we don't want to trade-off a laggy drawer resize experience
      // for a more performant inspector resize experience (which is not how the user uses the app)
      computeDimensionsForBlackboardsAndVideos()
    })
    resizeObserver.observe(MainContent, { box: 'border-box' })
  })

  $: ({ classID, roomID } = data); // this line triggers whenever `data` changes  

  $: {
    listenToClassDoc(classID)
    handleClassDocChange(classID)
    fetchRecentlySearchedClassDoc()
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

  .grid-layout {
    display: grid;
    grid-template-rows: 56px 1fr;
    grid-template-columns: var(--drawer-width) 1fr;
    grid-template-areas: 'navbar navbar'
                         'sidebar main';
    background-color: var(--bg-off-white);
  }

  .robust-ios-space-filling {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .top-navbar {
    grid-area: navbar;
  }

  .left-drawer {
    grid-area: sidebar;
  }

  #main-content {
    grid-area: main;
    overflow-y: auto;
  }
</style>

