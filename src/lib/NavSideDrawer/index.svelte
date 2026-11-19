<div class="nav-cluster" class:floating>
  <section class="nav-panel" aria-label="Server navigation">
    <div class="server-row">
      <button
        type="button" class="logo-button" aria-label="Open app menu" aria-haspopup="menu"
        style:anchor-name={logoAnchor} popovertarget={logoMenuId}
      >
        <img src="/app-logo-no-bg.png" width="36" height="33" alt="">
      </button>
      <div popover="auto" id={logoMenuId} class="anchored-menu" style:position-anchor={logoAnchor}
        style:position-area="block-end span-inline-end" style:position-try-fallbacks="flip-block, flip-inline, flip-inline flip-block"
        on:toggle={(e) => { if (e.newState === 'open') closeServerMenu() }}
      >
        <div class="server-actions" role="menu" tabindex="-1" on:click={hideLogoMenu} on:keydown={(e) => { if (e.key === 'Enter' || e.key === ' ') hideLogoMenu() }}>
          <a class="menu-row" role="menuitem" href="/">Home</a>
          {#if $user.uid}
            <button type="button" class="menu-row" role="menuitem" on:click={handleSignout}>Log out</button>
          {:else}
            <div class="menu-row"><ReusableSignInButton /></div>
          {/if}
          <a class="menu-row" role="menuitem" href="https://github.com/greatTA1998/explain" target="_blank" rel="noreferrer">
            <img src="/github-logo-dark-mode-no-bg.png" width="24" height="24" alt="Github"> GitHub
          </a>
        </div>
      </div>

      <div class="server-anchor">
        <button
          type="button" class="server-name"
          style:anchor-name={serverAnchor} popovertarget={serverMenuId}
          aria-haspopup="true" title={currentServerName}
          on:click={closeOtherMenus}
        >
          <span class="server-name-label">{currentServerName}</span>
          <span class="server-name-caret" aria-hidden="true"></span>
        </button>

        <div
          bind:this={serverMenuEl}
          popover="auto" id={serverMenuId} class="server-menu"
          style:position-anchor={serverAnchor}
          style:position-area="block-end span-inline-start"
          style:position-try-fallbacks="flip-inline, flip-block, flip-inline flip-block"
          style:--server-menu-max-h={serverMenuMaxH}
          on:toggle={onServerMenuToggle}
        >
          <div class="search-slot">
            <span class="material-icons search-icon" aria-hidden="true">search</span>
            <input type="search" name="search" maxlength="100" aria-label="Find server" placeholder="search servers" autocomplete="off" bind:value={searchVal}>
          </div>
          <SubNavTabs
            tabs={menuViewTabs}
            value={menuView}
            tabbed
            ariaLabel="Server menu view"
            on:change={(e) => { menuView = e.detail }}
          />
          <div class="server-list">
            {#if $user.uid && recentMenuServers.length && !searchVal.trim()}
              <div class="recent-block" aria-label="Recently visited servers">
                <div class="recent-label">Recently visited</div>
                {#if menuView === 'thumbnails'}
                  <div class="server-grid recent-grid">
                    {#each recentMenuServers as server (server.id)}
                      <CompactServerCard serverObj={server} on:pick={(e) => pickServer(e.detail)} />
                    {/each}
                  </div>
                {:else}
                  <div class="server-name-list recent-list">
                    {#each recentMenuServers as server (server.id)}
                      <button type="button" class="server-list-row" on:click={() => pickServer(server)}>
                        {server.name || 'Untitled server'}
                      </button>
                    {/each}
                  </div>
                {/if}
              </div>
            {/if}
            {#if menuView === 'thumbnails'}
              <div class="server-grid">
                {#each menuServers as server (server.id)}
                  <CompactServerCard serverObj={server} on:pick={(e) => pickServer(e.detail)} />
                {/each}
                <button type="button" class="create-server" on:click={openCreateServer}>Create new server</button>
              </div>
            {:else}
              <div class="server-name-list">
                {#each menuServers as server (server.id)}
                  <button type="button" class="server-list-row" on:click={() => pickServer(server)}>
                    {server.name || 'Untitled server'}
                  </button>
                {/each}
                <button type="button" class="server-list-row create-server-row" on:click={openCreateServer}>Create new server</button>
              </div>
            {/if}
          </div>
        </div>
      </div>
    </div>

    {#if !floating}
      <SubNavTabs tabs={drawerTabs} value={$drawerNavTab} ariaLabel="Server sections" on:change={(e) => drawerNavTab.set(e.detail)}>
        <button
          type="button" class="settings-button" aria-label="Open settings" aria-haspopup="true"
          style:anchor-name={settingsAnchor} popovertarget={settingsMenuId}
          on:click={closeServerMenu}
        >
          <span class="material-icons" aria-hidden="true">settings</span>
        </button>
        <div
          popover="auto" id={settingsMenuId} class="anchored-menu settings-menu"
          style:position-anchor={settingsAnchor}
          style:position-area="block-end span-inline-end"
          style:position-try-fallbacks="flip-block, flip-inline, flip-inline flip-block"
        >
          <button
            type="button" class="privacy-toggle" role="switch" aria-checked={isPrivate} aria-label="Private server"
            disabled={savingVisibility || !canTogglePrivacy} on:click|stopPropagation={setServerVisibility}
          >
            <span>Private</span>
            <span class="switch-track" class:on={isPrivate} aria-hidden="true"><span class="switch-thumb"></span></span>
          </button>
        </div>
        <button type="button" class="hide-drawer-button" aria-label="Hide drawer" title="Hide drawer" on:click={() => sidebarFullscreen.set(true)}>
          <span class="hand-arrow left" aria-hidden="true"></span>
        </button>
      </SubNavTabs>

      <div class="rooms-actions">
        <label class="name-filter">
          <span class="material-icons" aria-hidden="true">search</span>
          <input type="search" aria-label="Filter by name" autocomplete="off" maxlength="80" bind:value={$drawerNameQuery}>
        </label>
        <button type="button" class="new-pill" on:click={createNew} disabled={creating}>
          <span class="material-symbols-outlined" aria-hidden="true">add</span>
          {$drawerNavTab === 'forum' ? 'new question' : 'new room'}
        </button>
      </div>

      <div class="room-drawer">
        <div style="position: absolute; overflow-y: auto; inset: 0;">
          {#if $drawerNavTab === 'forum'}
            <QuestionsSection {classID} />
          {:else if nameQ}
            {#each roomHits as room (room.id)}
              <button type="button" class="room-hit" class:selected={room.id === roomID} on:click={() => goto(`/${classID}/${room.id}`)}>
                {room.name || '(untitled)'}
              </button>
            {/each}
          {:else}
            {#each rootRooms as room, i (room.id)}
              {#if !room.parentRoomID}
                <RecursiveRoom {room} {roomID} {classID} {ancestorRoomIds} orderWithinLevel={i} roomsInThisLevel={rootRooms} parentRoomIDs={['']} />
              {/if}
            {/each}
            <div style="padding: 6px;">
              <RecursiveRoomReorderDropzone orderWithinLevel={rootRooms.length} parentRoomIDs={['']} roomsInThisLevel={rootRooms} {classID} />
            </div>
          {/if}
        </div>
      </div>
    {/if}
  </section>
</div>

<PopupNewServer bind:this={newServerPopup} showTrigger={false} />

<script>
  import QuestionsSection from './QuestionsSection.svelte'
  import RecursiveRoom from './RecursiveRoom.svelte'
  import RecursiveRoomReorderDropzone from './RecursiveRoomReorderDropzone.svelte'
  import CompactServerCard from '$lib/TheTopNavbar/CompactServerCard.svelte'
  import PopupNewServer from '$lib/TheTopNavbar/PopupNewServer.svelte'
  import ReusableSignInButton from '$lib/Reusable/ReusableSignInButton.svelte'
  import SubNavTabs from '$lib/Reusable/SubNavTabs.svelte'
  import { fuzzyFilter } from '/src/helpers/fuzzyName.js'
  import { getFirestoreCollection, createRoomDoc, updateFirestoreDoc } from '/src/helpers/crud.js'
  import { user, classServerDoc, recentSearchedServerDoc, sidebarFullscreen, drawerNavTab, drawerNameQuery } from '/src/store.js'
  import { page } from '$app/stores'
  import { goto } from '$app/navigation'
  import { getAuth, signOut } from 'firebase/auth'
  import { collection, getDoc, doc, getFirestore, onSnapshot, orderBy, query } from 'firebase/firestore'
  import {
    serversForMenu, recentServersForMenu, pushRecentVisitedServerID,
    serverIsPublic, viewerCanTogglePrivacy
  } from './serverMenu.js'
  import { homepageServerPath } from '/src/helpers/visitorEntry.js'
  import { getRandomID } from '/src/helpers/utility.js'
  import { onDestroy, onMount } from 'svelte'

  const drawerTabs = [{ id: 'rooms', label: 'rooms' }, { id: 'forum', label: 'forum' }]
  const menuViewTabs = [{ id: 'list', label: 'list' }, { id: 'thumbnails', label: 'thumbnails' }]
  const uid = getRandomID()
  const logoMenuId = `logo-menu-${uid}`
  const serverMenuId = `server-menu-${uid}`
  const settingsMenuId = `settings-menu-${uid}`
  const logoAnchor = `--logo-${uid}`
  const serverAnchor = `--server-${uid}`
  const settingsAnchor = `--settings-${uid}`

  export let floating = false

  let savingVisibility = false, searchVal = '', menuView = 'list'
  let allServers = [], creating = false, newServerPopup
  let classDoc = null, unsubFuncs = [], rooms = [], lastClassID = ''
  let ancestorRoomIds = new Set()
  let serverMenuEl = null
  /** Locked at open so iPad keyboard cannot crush the menu via vh resize. */
  let serverMenuMaxH = 'min(70vh, 36rem)'
  let serverMenuOpen = false

  $: classID = $page.params.class
  $: roomID = $page.params.roomID
  $: menuServers = serversForMenu(allServers, searchVal, $user.uid)
  $: recentVisitedIDs = Array.isArray($user.recentVisitedServerIDs)
    ? $user.recentVisitedServerIDs
    : pushRecentVisitedServerID(
      [$user.mostRecentServerID, $user.recentSearchedServerID].filter(Boolean),
      ''
    )
  $: recentMenuServers = $user.uid
    ? recentServersForMenu(allServers, recentVisitedIDs, $user.uid)
    : []
  $: isPrivate = !serverIsPublic($classServerDoc)
  $: canTogglePrivacy = viewerCanTogglePrivacy($classServerDoc, $user.uid)
  $: currentServerName = nameForCurrentServer(classID, allServers, $classServerDoc, $recentSearchedServerDoc)
  $: if (!floating && classID) initializeRooms()
  $: if (!floating && classID && classID !== lastClassID) {
    lastClassID = classID; drawerNavTab.set('rooms'); drawerNameQuery.set('')
  }
  $: nameQ = $drawerNameQuery.trim()
  $: roomHits = nameQ ? fuzzyFilter(rooms, nameQ, r => r.name) : []
  $: rootRooms = rooms.filter(room => room.parentRoomID === '')
  $: {
    const nextAncestors = ancestorIdsForRoom(rooms, roomID)
    if (!sameIdSet(ancestorRoomIds, nextAncestors)) ancestorRoomIds = nextAncestors
  }

  getFirestoreCollection('classes').then(docs => { allServers = docs })
  onMount(() => {
    const vv = window.visualViewport
    if (!vv) return
    // Ignore keyboard-driven visualViewport shrink while the menu is open.
    const onVvResize = () => {
      if (serverMenuOpen) return
      serverMenuMaxH = lockedMenuMaxHeight()
    }
    vv.addEventListener('resize', onVvResize)
    return () => vv.removeEventListener('resize', onVvResize)
  })
  onDestroy(unsubDbListeners)

  function lockedMenuMaxHeight () {
    const vv = window.visualViewport
    const h = Math.round(vv?.height || window.innerHeight || 0)
    // Keep a usable floor even if something reports a tiny viewport.
    return `${Math.max(280, Math.min(h - 24, Math.round(h * 0.7)))}px`
  }

  function onServerMenuToggle (e) {
    if (e.newState === 'open') {
      serverMenuOpen = true
      serverMenuMaxH = lockedMenuMaxHeight()
      return
    }
    serverMenuOpen = false
    searchVal = ''
  }

  function ancestorIdsForRoom (roomList, roomId) {
    const ancestors = new Set()
    if (!roomId || !roomList?.length) return ancestors
    const byId = new Map(roomList.map(room => [room.id, room]))
    let current = byId.get(roomId)
    while (current?.parentRoomID) {
      if (ancestors.has(current.parentRoomID)) break
      ancestors.add(current.parentRoomID)
      current = byId.get(current.parentRoomID)
    }
    return ancestors
  }

  function sameIdSet (a, b) {
    if (a === b) return true
    if (!a || !b || a.size !== b.size) return false
    for (const id of a) if (!b.has(id)) return false
    return true
  }

  function nameForCurrentServer (classId, servers, classDoc, recent) {
    return servers.find(s => s.id === classId)?.name || (classId && classDoc?.name) || recent?.name || 'Find server'
  }

  function hidePopover (id) {
    const el = typeof document !== 'undefined' ? document.getElementById(id) : null
    if (el?.matches?.(':popover-open')) el.hidePopover()
  }

  function closeServerMenu () { hidePopover(serverMenuId); searchVal = '' }
  function hideLogoMenu () { hidePopover(logoMenuId) }
  function closeOtherMenus () { hidePopover(logoMenuId); hidePopover(settingsMenuId) }

  async function pickServer (server) {
    const path = homepageServerPath(server)
    if ($user.uid && server?.id) {
      const recentVisitedServerIDs = pushRecentVisitedServerID($user.recentVisitedServerIDs, server.id)
      updateFirestoreDoc(`/users/${$user.uid}`, {
        recentSearchedServerID: server.id,
        mostRecentServerID: server.id,
        recentVisitedServerIDs
      })
    }
    if (path) await goto(path)
    closeServerMenu()
  }

  function handleSignout () {
    signOut(getAuth()).then(() => { window.location.reload() })
  }

  async function setServerVisibility () {
    const classID = $page.params.class
    if (savingVisibility || !classID || !canTogglePrivacy) return
    const nextPublic = !serverIsPublic($classServerDoc)
    savingVisibility = true
    try {
      await updateFirestoreDoc(`classes/${classID}`, { isPublic: nextPublic })
      classServerDoc.update(doc => ({ ...(doc || {}), isPublic: nextPublic }))
      allServers = allServers.map(server => server.id === classID
        ? { ...server, isPublic: nextPublic, creatorUID: server.creatorUID || $classServerDoc.creatorUID || '' }
        : server)
    } finally { savingVisibility = false }
  }

  function openCreateServer () { closeServerMenu(); newServerPopup?.openPopup() }

  async function createNew () {
    if (creating) return
    if (!classID) { newServerPopup?.openPopup(); return }
    if ($drawerNavTab === 'forum') { await goto('/' + classID + '/question'); return }
    creating = true
    try {
      const newRoomID = await createRoomDoc(`classes/${classID}/`)
      await goto('/' + classID + '/' + newRoomID)
    } finally { creating = false }
  }

  async function initializeRooms () {
    unsubDbListeners()
    classDoc = (await getDoc(doc(getFirestore(), `classes/${classID}`))).data()
    const memberUIDs = [...new Set([...(classDoc?.memberUIDs || []), ...($user.uid ? [$user.uid] : [])])]
    await updateFirestoreDoc(`classes/${classID}/`, { memberUIDs, numOfMembers: memberUIDs.length })
    unsubFuncs.push(onSnapshot(
      query(collection(getFirestore(), `classes/${classID}/rooms`), orderBy('classServerOrder', 'asc')),
      (snapshot) => { rooms = snapshot.docs.map(d => ({ id: d.id, path: d.ref.path, ...d.data() })) }
    ))
  }

  function unsubDbListeners () { for (const u of unsubFuncs) u(); unsubFuncs = [] }
</script>

<style>
  .nav-cluster { position: relative; z-index: 5; width: 100%; height: 100%; min-height: 0; }
  .floating { position: fixed; top: 8px; left: 8px; z-index: 30; width: 280px; height: auto; }
  .nav-panel { position: relative; display: flex; flex-direction: column; height: 100%; min-height: 0; }
  /* Floating cluster: translucent fill, no blur, out of flow (fixed). */
  .floating .nav-panel {
    height: auto;
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    background: hsla(0, 8%, 11%, 0.5);
    color: #fff;
    box-shadow: none;
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
  }
  .floating .server-name,
  .floating .menu-row { color: rgba(255, 255, 255, 0.92); }
  .floating .server-name-caret { border-top-color: rgba(255, 255, 255, 0.85); }
  .room-drawer { position: relative; flex: 1; min-height: 0; overflow: hidden; }
  .room-hit { display: block; width: 100%; padding: 8px 12px; border-radius: 5px; text-align: left; font-size: var(--fs-400); color: black; }
  .room-hit:hover { background: lightgrey; }
  .room-hit.selected { font-weight: 700; background-color: #F7C686; }
  .server-row, .rooms-actions { flex-shrink: 0; }
  .server-row { display: flex; align-items: center; gap: 4px; padding: 8px; border-bottom: 1px solid rgba(0, 0, 0, 0.12); }
  .logo-button, .settings-button, .hide-drawer-button { display: flex; align-items: center; justify-content: center; padding: 0; border-radius: 8px; }
  .logo-button { flex: 0 0 auto; width: 36px; height: 36px; }
  .logo-button:hover, .settings-button:hover, .hide-drawer-button:hover, .menu-row:hover { background: rgba(0, 0, 0, 0.06); }
  .logo-button img { display: block; filter: brightness(80%); }
  .server-anchor { position: relative; flex: 1; min-width: 0; }
  .server-name { display: flex; align-items: center; width: 100%; min-width: 0; text-align: left; padding: 6px 4px; color: rgb(45, 45, 45); font-size: 24px; font-weight: 600; line-height: 1.2; text-decoration: none; }
  .server-name-label { min-width: 0; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; }
  .server-name-caret { flex: 0 0 auto; width: 0; height: 0; margin-left: 8px; border-left: 5px solid transparent; border-right: 5px solid transparent; border-top: 6px solid currentColor; }
  .rooms-actions { display: flex; align-items: center; gap: 6px; padding: 6px 12px 8px; }
  .name-filter, .search-slot { display: flex; align-items: center; min-width: 0; height: 36px; border-radius: 18px; background: rgba(0, 0, 0, 0.045); gap: 2px; padding: 0 8px 0 6px; }
  .name-filter { flex: 1; }
  .name-filter .material-icons, .search-slot .search-icon { flex: 0 0 auto; color: rgb(120, 120, 120); }
  .name-filter .material-icons { font-size: 1.4rem; }
  .name-filter input, .search-slot input { flex: 1; min-width: 0; border: 0; outline: none; background: transparent; color: black; }
  .name-filter input { font-size: 13px; }
  .search-slot { width: min(240px, 100%); }
  .search-slot .search-icon { font-size: 22px; }
  .search-slot input { font-size: 1rem; }
  .new-pill { display: flex; flex: 0 0 auto; align-items: center; gap: 4px; height: 36px; padding: 4px 12px; border-radius: 24px; background-color: #f1e8f3; color: black; font-size: 13px; white-space: nowrap; }
  .new-pill .material-symbols-outlined { font-size: 1.4rem; }
  .settings-button, .hide-drawer-button { width: 32px; height: 32px; margin-left: 4px; color: rgb(80, 80, 80); }
  .settings-button .material-icons { font-size: 20px; }
  .anchored-menu {
    margin: 0; inset: auto; margin-block-start: 4px; padding: 6px; border: none; border-radius: 12px; background: white;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
  .anchored-menu:not(:popover-open) { display: none; }
  .settings-menu { min-width: 180px; padding: 6px 8px; }
  .privacy-toggle, .menu-row { display: flex; align-items: center; width: 100%; min-height: 36px; padding: 8px 10px; border-radius: 8px; text-align: left; color: black; font-size: 14px; font-weight: 500; }
  .privacy-toggle { justify-content: space-between; gap: 8px; }
  .privacy-toggle:disabled { opacity: 0.45; cursor: not-allowed; }
  .menu-row { gap: 8px; text-decoration: none; }
  .switch-track { position: relative; width: 36px; height: 20px; border-radius: 999px; background: rgba(0, 0, 0, 0.22); transition: background 0.15s ease; }
  .switch-track.on { background: #f69637; }
  .switch-thumb { position: absolute; top: 2px; left: 2px; width: 16px; height: 16px; border-radius: 50%; background: white; transition: transform 0.15s ease; }
  .switch-track.on .switch-thumb { transform: translateX(16px); }
  .server-actions { display: flex; flex-direction: column; min-width: 232px; text-align: left; }
  .server-menu {
    margin: 0; inset: auto; margin-block-start: 4px; z-index: 40; width: min(calc(100vw - 24px), 42rem);
    max-width: calc(100vw - 24px); max-height: var(--server-menu-max-h, min(70vh, 36rem));
    display: flex; flex-direction: column; overflow: hidden;
    background: var(--bg-off-white); padding: 12px; border: none; border-radius: 12px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
  .server-menu:not(:popover-open) { display: none; }
  .server-menu::backdrop { background: rgba(0, 0, 0, 0.28); }
  .server-menu :global(.sub-nav) { margin: 8px 0 0; flex: 0 0 auto; }
  .search-slot { flex: 0 0 auto; }
  .server-list {
    flex: 1 1 auto; min-height: 0; max-height: none; overflow: auto; padding: 8px 0 0;
    scrollbar-width: none; -ms-overflow-style: none;
  }
  .recent-block { padding: 0 0 8px; border-bottom: 1px solid rgba(0, 0, 0, 0.1); margin-bottom: 4px; }
  .recent-label {
    padding: 2px 16px 6px; font-size: 0.7rem; font-weight: 600; letter-spacing: 0.04em;
    text-transform: uppercase; color: rgb(120, 120, 120);
  }
  .recent-grid { padding-bottom: 4px; }
  .recent-list { padding-bottom: 2px; }
  .server-list::-webkit-scrollbar { display: none; width: 0; height: 0; }
  .server-grid { display: flex; flex-wrap: wrap; gap: 8px; }
  /* Column-major fill so A–Z reads top-to-bottom, then next column. */
  .server-name-list {
    display: block;
    columns: 11rem auto;
    column-gap: 4px;
  }
  .server-list-row {
    display: block; width: 100%; min-width: 0; min-height: 40px;
    margin: 0 0 4px; break-inside: avoid; -webkit-column-break-inside: avoid;
    padding: 10px 12px; border-radius: 10px; text-align: left; background: rgba(255, 255, 255, 0.92);
    color: black; font-size: 16px; font-weight: 500; overflow: hidden; white-space: nowrap; text-overflow: ellipsis;
  }
  .server-list-row:hover { background: rgba(255, 255, 255, 1); }
  .create-server-row { color: #5d0068; }
  .create-server { display: flex; align-items: center; width: 240px; max-width: 100%; min-height: 44px; text-align: left; padding: 8px 12px; border-radius: 12px; background: rgba(255, 255, 255, 0.88); color: #5d0068; font-weight: 500; }
</style>
