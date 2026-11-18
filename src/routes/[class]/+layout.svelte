<div
  bind:this={ServerLayout}
  id="server-layout"
  class="robust-ios-space-filling"
  class:overlay-drawer={overlayDrawer}
  style="--drawer-width: {$sidebarFullscreen || overlayDrawer ? 0 : $drawerWidth}px;"
>
  {#if !$sidebarFullscreen}
    {#if overlayDrawer}
      <button type="button" class="drawer-backdrop" aria-label="Dismiss drawer" on:click={() => sidebarFullscreen.set(true)}></button>
    {/if}
    <div id="left-drawer">
      <NavSideDrawer />
      <div class="room-drawer">
        {#key classID}<TheLeftDrawer {classID} {roomID} />{/key}
      </div>
    </div>
  {/if}
  <div id="main-content" class:sidebar-fullscreen={$sidebarFullscreen} bind:this={MainContent}><slot /></div>
</div>

<script>
  import TheLeftDrawer from '$lib/TheLeftDrawer/index.svelte'
  import NavSideDrawer from '$lib/NavSideDrawer/index.svelte'
  import { getBoardWidth } from '/src/helpers/dimensions.js'
  import { getFirestoreDoc, updateFirestoreDoc } from '/src/helpers/crud.js'
  import {
    user, drawerWidth, classServerDoc, recentSearchedServerDoc,
    blackboardWidth, videoPreviewWidth, videoCinemaWidth, isFullServerMode, sidebarFullscreen
  } from '/src/store.js'
  import { viewport } from '/src/storeFolder/viewport.js'
  import { onMount } from 'svelte'
  import { doc, onSnapshot, getFirestore } from 'firebase/firestore'

  export let data

  let { classID, roomID } = data
  let unsubClassDocListener = null
  let resizeObserver = null
  let MainContent = null
  let ServerLayout

  $: overlayDrawer = !$sidebarFullscreen && $viewport.width > 0 && $viewport.width < 768
  $: if ($isFullServerMode && MainContent && ServerLayout) transformToFullServerPage()
  $: ({ classID, roomID } = data)
  $: {
    listenToClassDoc(classID)
    handleClassDocChange(classID)
    fetchRecentlySearchedClassDoc($user)
  }

  onMount(() => {
    resizeObserver = new ResizeObserver(() => computeDimensionsForBlackboardsAndVideos())
    resizeObserver.observe(MainContent, { box: 'border-box' })
  })

  function transformToFullServerPage () {
    MainContent.style.overflowY = 'auto'
    ServerLayout.style.marginTop = '0px'
  }

  function computeDimensionsForBlackboardsAndVideos () {
    requestAnimationFrame(() => {
      const boardWidth = getBoardWidth({
        containerWidth: MainContent.offsetWidth,
        containerHeight: MainContent.offsetHeight
      })
      blackboardWidth.set(boardWidth)
      videoPreviewWidth.set(boardWidth)
      videoCinemaWidth.set(getBoardWidth({
        containerWidth: window.innerWidth,
        containerHeight: window.innerHeight,
        pageInset: false
      }))
    })
  }

  async function handleClassDocChange () {
    if ($user.uid) {
      updateFirestoreDoc(`/users/${$user.uid}`, { mostRecentServerID: classID })
    }
  }

  async function fetchRecentlySearchedClassDoc () {
    if (!$user.recentSearchedServerID) return {}
    recentSearchedServerDoc.set(await getFirestoreDoc(`/classes/${$user.recentSearchedServerID}`))
  }

  function listenToClassDoc (classID) {
    if (unsubClassDocListener) unsubClassDocListener()
    unsubClassDocListener = onSnapshot(doc(getFirestore(), `/classes/${classID}`), snapshot => {
      classServerDoc.set(snapshot.data())
    })
  }
</script>

<style>
  :root { --navbar-height: 0px; }

  #server-layout {
    display: grid;
    grid-template-columns: var(--drawer-width) 1fr;
    grid-template-areas: 'sidebar main';
    height: 100vh;
    background-color: var(--bg-off-white);
  }

  #server-layout.overlay-drawer { grid-template-columns: 1fr; grid-template-areas: 'main'; }
  .drawer-backdrop { position: fixed; inset: 0; z-index: 35; border: 0; padding: 0; margin: 0; background: rgba(0,0,0,.4); cursor: pointer; }
  #left-drawer {
    grid-area: sidebar; display: flex; flex-direction: column; min-height: 0; height: 100%;
    position: relative; z-index: 2; overflow: visible; background-color: var(--bg-off-white);
    box-shadow: 4px 0 6px -2px rgba(0, 0, 0, 0.1);
  }
  .overlay-drawer #left-drawer { position: fixed; top: 0; left: 0; bottom: 0; width: min(300px, 86vw); z-index: 40; }
  .room-drawer { flex: 1; min-height: 0; overflow: hidden; }
  #main-content { grid-area: main; position: relative; z-index: 0; min-width: 0; }
</style>
