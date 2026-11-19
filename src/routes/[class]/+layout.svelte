<div
  bind:this={ServerLayout}
  id="server-layout"
  class="robust-ios-space-filling"
  class:sidebar-hidden={$sidebarFullscreen}
  style="--drawer-width: {$sidebarFullscreen ? 0 : $drawerWidth}px;"
>
  {#if !$sidebarFullscreen}
    <button type="button" class="drawer-backdrop" aria-label="Dismiss drawer" on:click={() => sidebarFullscreen.set(true)}></button>
    <div id="left-drawer">
      {#key classID}<NavSideDrawer />{/key}
    </div>
  {/if}
  <div id="main-content" bind:this={MainContent}><slot /></div>
</div>

<script>
  import NavSideDrawer from '$lib/NavSideDrawer/index.svelte'
  import { pushRecentVisitedServerID } from '$lib/NavSideDrawer/serverMenu.js'
  import { getBoardWidth } from '/src/helpers/dimensions.js'
  import { getFirestoreDoc, updateFirestoreDoc } from '/src/helpers/crud.js'
  import {
    user, drawerWidth, classServerDoc, recentSearchedServerDoc,
    blackboardWidth, videoPreviewWidth, videoCinemaWidth, isFullServerMode, sidebarFullscreen
  } from '/src/store.js'
  import { onMount } from 'svelte'
  import { doc, onSnapshot, getFirestore } from 'firebase/firestore'

  export let data

  let { classID } = data
  let unsubClassDocListener = null
  let resizeObserver = null
  let MainContent = null
  let ServerLayout

  $: if ($isFullServerMode && MainContent && ServerLayout) transformToFullServerPage()
  $: ({ classID } = data)
  $: listenToClassDoc(classID)
  $: if (classID && $user?.uid) persistRecentVisit(classID, $user)
  $: fetchRecentlySearchedClassDoc($user)

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

  function persistRecentVisit (classID, u) {
    if (!u?.uid || !classID) return
    const next = pushRecentVisitedServerID(u.recentVisitedServerIDs, classID)
    const prev = Array.isArray(u.recentVisitedServerIDs) ? u.recentVisitedServerIDs : []
    if (u.mostRecentServerID === classID && prev.length === next.length && prev.every((id, i) => id === next[i])) return
    updateFirestoreDoc(`/users/${u.uid}`, { mostRecentServerID: classID, recentVisitedServerIDs: next })
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
    display: grid; grid-template-columns: var(--drawer-width) 1fr; grid-template-areas: 'sidebar main';
    height: 100vh; background-color: var(--bg-off-white);
  }
  .drawer-backdrop { display: none; }
  #left-drawer {
    grid-area: sidebar; display: flex; flex-direction: column; min-height: 0; height: 100%;
    position: relative; z-index: 2; overflow: visible; background-color: var(--bg-off-white);
    box-shadow: 4px 0 6px -2px rgba(0, 0, 0, 0.1);
  }
  #main-content { grid-area: main; position: relative; z-index: 0; min-width: 0; }

  /* Mobile: overlay drawer + light-dismiss backdrop; main stays full width. */
  @media (max-width: 767px) {
    #server-layout:not(.sidebar-hidden) {
      grid-template-columns: 1fr;
      grid-template-areas: 'main';
      --drawer-width: 0px;
    }
    .drawer-backdrop {
      display: block; position: fixed; inset: 0; z-index: 35; border: 0; padding: 0; margin: 0;
      background: rgba(0,0,0,.4); cursor: pointer;
    }
    #left-drawer {
      position: fixed; top: 0; left: 0; bottom: 0; width: min(300px, 86vw); z-index: 40;
    }
  }
</style>
