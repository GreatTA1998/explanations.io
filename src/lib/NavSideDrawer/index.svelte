<svelte:window on:click|capture={onWindowClick} on:keydown={onWindowKey} />

<div class="nav-cluster" class:floating bind:this={clusterEl}>
  <section class="nav-panel" aria-label="Server navigation">
    <div class="server-row">
      <AnchoredPopover
        bind:this={actionsPopover}
        positionArea="block-end span-inline-end"
        on:toggle={onActionsToggle}
        let:close
      >
        <button
          slot="activator"
          let:popoverId
          let:anchorName
          type="button"
          class="logo-button"
          aria-label="Open app menu"
          aria-haspopup="menu"
          aria-expanded={actionsOpen}
          aria-controls={popoverId || undefined}
          popovertarget={popoverId || undefined}
          style={anchorName ? `anchor-name: ${anchorName}` : undefined}
        >
          <img
            src="/app-logo-no-bg.png"
            width="36"
            height="33"
            alt=""
          >
        </button>

        <div class="server-actions" role="menu" use:dismissOnClick={close}>
          {#if $user.uid}
            <button type="button" class="menu-row" role="menuitem" on:click={handleSignout}>
              Log out
            </button>
          {:else}
            <div class="menu-row sign-in">
              <ReusableSignInButton />
            </div>
          {/if}

          <div class="menu-embed">
            <CalEmbed />
          </div>

          <a
            class="menu-row hide-on-mobile"
            role="menuitem"
            href="https://eltonlin.substack.com/archive"
            target="_blank"
            rel="noreferrer"
          >
            SUBSTACK BLOG
          </a>

          <a
            class="menu-row"
            role="menuitem"
            href="https://github.com/greatTA1998/explain"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/github-logo-dark-mode-no-bg.png" width="24" height="24" alt="Github">
            GitHub
          </a>

          <span class="menu-note">+1 503 250 3868</span>
          <span class="menu-note">elton@explanations.io</span>

          <button
            type="button"
            class="menu-row visibility-row"
            role="menuitem"
            disabled={!canChangeVisibility || savingVisibility}
            title={canChangeVisibility ? undefined : 'Only the person who created this server can change this'}
            on:click={setServerVisibility}
          >
            {visibilityLabel}
          </button>
        </div>
      </AnchoredPopover>

      <div class="server-anchor">
        <button
          type="button"
          class="server-name"
          bind:this={serverNameEl}
          aria-haspopup="true"
          aria-expanded={menuOpen}
          aria-controls="server-switch-menu"
          title={currentServerName}
          on:click={toggleServerMenu}
        >
          {currentServerName}
        </button>

        {#if menuOpen}
          <div
            class="server-menu"
            id="server-switch-menu"
            style="top: {menuTop}px; left: {menuLeft}px; width: {menuWidth}px;"
          >
            <div class="search-slot">
              <SearchBar
                {searchVal}
                on:input={(e) => onSearchInput(e.detail)}
              />
            </div>

            <div class="server-list">
              <div class="server-grid" style="--menu-columns: {columnCount};">
                {#each previewServers as server (server.id)}
                  <CompactServerCard serverObj={server} on:pick={(e) => pickServer(e.detail)} />
                {/each}

                <button type="button" class="create-server" on:click={openCreateServer}>
                  Create new server
                </button>
              </div>

              {#if listServers.length}
                <div class="server-name-list" role="list">
                  {#each listServers as server (server.id)}
                    <div role="listitem">
                      <button
                        type="button"
                        class="server-list-row server-pick"
                        on:click|stopPropagation={() => pickServer(server)}
                      >
                        {server.name || 'Untitled server'}
                      </button>
                    </div>
                  {/each}
                </div>
              {/if}
            </div>
          </div>
        {/if}
      </div>

      <button
        type="button"
        class="hide-drawer-button"
        aria-label="Hide drawer"
        title="Hide drawer"
        on:click={() => sidebarFullscreen.set(true)}
      >
        <HandDrawnDrawerArrow pointing="left" />
      </button>
    </div>

    {#if !floating}
      <nav class="sub-nav" aria-label="Server sections">
        <button
          type="button"
          class="sub-nav-tab"
          class:active={$drawerNavTab === 'rooms'}
          aria-current={$drawerNavTab === 'rooms' ? 'page' : undefined}
          on:click={() => drawerNavTab.set('rooms')}
        >
          rooms
        </button>
        <button
          type="button"
          class="sub-nav-tab"
          class:active={$drawerNavTab === 'forum'}
          aria-current={$drawerNavTab === 'forum' ? 'page' : undefined}
          on:click={() => drawerNavTab.set('forum')}
        >
          forum
        </button>
      </nav>

      <div class="rooms-actions">
        <button type="button" class="new-pill" on:click={createNew} disabled={creating}>
          <span class="material-symbols-outlined" aria-hidden="true">add</span>
          {$drawerNavTab === 'forum' ? 'new question' : 'new room'}
        </button>

        <AnchoredPopover
          bind:this={settingsPopover}
          positionArea="block-end span-inline-end"
          on:toggle={onSettingsToggle}
          let:close={closeSettings}
        >
          <button
            slot="activator"
            let:popoverId
            let:anchorName
            type="button"
            class="settings-button"
            aria-label="Open settings"
            aria-haspopup="menu"
            aria-expanded={settingsOpen}
            aria-controls={popoverId || undefined}
            popovertarget={popoverId || undefined}
            style={anchorName ? `anchor-name: ${anchorName}` : undefined}
          >
            <span class="material-icons" aria-hidden="true">settings</span>
          </button>

          <div class="settings-menu" role="menu" use:dismissOnClick={closeSettings}>
            <p class="settings-copy">
              Problems? Call/text 503 250 3868, reload the page, or force restart Safari.
            </p>
          </div>
        </AnchoredPopover>
      </div>
    {/if}
  </section>
</div>

<PopupNewServer bind:this={newServerPopup} showTrigger={false} />

<script>
  import HandDrawnDrawerArrow from './HandDrawnDrawerArrow.svelte'
  import CompactServerCard from '$lib/TheTopNavbar/CompactServerCard.svelte'
  import SearchBar from '$lib/TheTopNavbar/SearchBar.svelte'
  import PopupNewServer from '$lib/TheTopNavbar/PopupNewServer.svelte'
  import AnchoredPopover from '$lib/Reusable/AnchoredPopover.svelte'
  import CalEmbed from '$lib/GlobalAppPopup/CalEmbed.svelte'
  import ReusableSignInButton from '$lib/Reusable/ReusableSignInButton.svelte'
  import { getFirestoreCollection, createRoomDoc, updateFirestoreDoc } from '/src/helpers/crud.js'
  import { user, classServerDoc, recentSearchedServerDoc, sidebarFullscreen, drawerNavTab } from '/src/store.js'
  import { viewport } from '/src/storeFolder/viewport.js'
  import { page } from '$app/stores'
  import { goto } from '$app/navigation'
  import { getAuth, signOut } from 'firebase/auth'
  import { CARD_WIDTH, CARD_GAP, partitionServersForMenu, menuColumnCount, serverNameLeft, serverIsPublic, viewerIsServerCreator, visibilityActionLabel } from './serverMenu.js'
  import { homepageServerPath } from '/src/helpers/visitorEntry.js'

  export let floating = false

  function dismissOnClick (node, closeMenu) {
    const onClick = () => closeMenu?.()
    node.addEventListener('click', onClick)
    return {
      update (next) {
        closeMenu = next
      },
      destroy () {
        node.removeEventListener('click', onClick)
      }
    }
  }

  let menuOpen = false
  let actionsOpen = false
  let settingsOpen = false
  let actionsPopover
  let settingsPopover
  let savingVisibility = false
  let searchVal = ''
  let allServers = []
  let creating = false
  let newServerPopup
  let clusterEl
  let serverNameEl
  let menuTop = 0
  let menuLeft = 0

  $: ({ previewServers, listServers } = partitionServersForMenu(allServers, searchVal, $user.uid))
  $: visibilityLabel = visibilityActionLabel($classServerDoc)
  $: canChangeVisibility = !!$page.params.class && viewerIsServerCreator($classServerDoc, $user.uid)
  $: menuOffset = serverNameLeft(floating)
  $: columnCount = menuColumnCount($viewport.width, previewServers.length + 1, menuOffset)
  $: menuWidth = Math.max(
    columnCount * CARD_WIDTH + Math.max(columnCount - 1, 0) * CARD_GAP,
    listServers.length ? CARD_WIDTH : 0
  )
  $: currentServerName = nameForCurrentServer($page.params.class, allServers, $classServerDoc, $recentSearchedServerDoc)
  $: if (menuOpen) placeMenu($viewport.width, menuWidth)

  getFirestoreCollection('classes').then(docs => {
    allServers = docs
  })

  function nameForCurrentServer (classId, servers, classDoc, recent) {
    const match = servers.find(server => server.id === classId)
    if (match?.name) return match.name
    if (classId && classDoc?.name) return classDoc.name
    if (recent?.name) return recent.name
    return 'Find server'
  }

  function placeMenu () {
    if (!serverNameEl || typeof serverNameEl.getBoundingClientRect !== 'function') return
    const rect = serverNameEl.getBoundingClientRect()
    menuTop = rect.bottom + 4
    menuLeft = rect.left
  }

  function toggleServerMenu () {
    actionsPopover?.close()
    settingsPopover?.close()
    menuOpen = !menuOpen
    if (menuOpen) {
      requestAnimationFrame(placeMenu)
    } else {
      searchVal = ''
    }
  }

  function closeServerMenu () {
    menuOpen = false
    searchVal = ''
  }

  function onWindowClick (event) {
    if (!menuOpen || !clusterEl) return
    // Picks navigate themselves and close after goto. Closing here in capture
    // unmounted the card before navigation settled and aborted the redirect.
    if (event.target.closest('.server-card, .server-pick, .create-server, #server-switch-menu')) return
    if (!clusterEl.contains(event.target)) closeServerMenu()
  }

  async function pickServer (server) {
    const path = homepageServerPath(server)
    if ($user.uid) {
      updateFirestoreDoc(`/users/${$user.uid}`, {
        recentSearchedServerID: server.id
      })
    }
    if (path) await goto(path)
    closeServerMenu()
  }

  function onWindowKey (event) {
    if (event.key === 'Escape' && menuOpen) closeServerMenu()
  }

  function onActionsToggle (event) {
    actionsOpen = event.newState === 'open'
    if (actionsOpen) {
      closeServerMenu()
      settingsPopover?.close()
    }
  }

  function onSettingsToggle (event) {
    settingsOpen = event.newState === 'open'
    if (settingsOpen) {
      closeServerMenu()
      actionsPopover?.close()
    }
  }

  function handleSignout () {
    const auth = getAuth()
    signOut(auth).then(() => {
      window.location.reload()
    })
  }

  async function setServerVisibility () {
    const classID = $page.params.class
    if (savingVisibility || !classID || !viewerIsServerCreator($classServerDoc, $user.uid)) return
    const nextPublic = !serverIsPublic($classServerDoc)
    savingVisibility = true
    try {
      await updateFirestoreDoc(`classes/${classID}`, { isPublic: nextPublic })
      classServerDoc.update(doc => ({ ...(doc || {}), isPublic: nextPublic }))
      allServers = allServers.map(server => (
        server.id === classID
          ? { ...server, isPublic: nextPublic, creatorUID: server.creatorUID || $classServerDoc.creatorUID || '' }
          : server
      ))
    } finally {
      savingVisibility = false
    }
  }

  function onSearchInput (value) {
    searchVal = value
  }

  function openCreateServer () {
    newServerPopup?.openPopup()
  }

  async function createNew () {
    if (creating) return
    const classID = $page.params.class
    if (!classID) {
      newServerPopup?.openPopup()
      return
    }

    if ($drawerNavTab === 'forum') {
      await goto('/' + classID + '/question')
      return
    }

    creating = true
    try {
      const newRoomID = await createRoomDoc(`classes/${classID}/`)
      await goto('/' + classID + '/' + newRoomID)
    } finally {
      creating = false
    }
  }
</script>

<style>
  .nav-cluster {
    position: relative;
    z-index: 5;
    width: 100%;
  }

  .floating {
    position: fixed;
    top: 8px;
    left: 8px;
    z-index: 30;
    width: 280px;
  }

  .nav-panel {
    position: relative;
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  }

  .floating .nav-panel {
    background-color: var(--bg-off-white);
    border-radius: 12px;
    border: 1px solid rgba(0, 0, 0, 0.06);
    box-shadow: 0 3px 5px -2px rgb(0 0 0 / 0.08), 0 2px 4px -2px rgb(0 0 0 / 0.06);
  }

  .server-row {
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 8px;
  }

  .logo-button {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 0 0 auto;
    width: 36px;
    height: 36px;
    padding: 0;
    border-radius: 8px;
  }

  .logo-button:hover {
    background: rgba(0, 0, 0, 0.06);
  }

  .logo-button img {
    display: block;
    filter: brightness(80%);
  }

  .server-anchor {
    position: relative;
    flex: 1;
    min-width: 0;
  }

  .server-name {
    display: block;
    width: 100%;
    min-width: 0;
    text-align: left;
    padding: 6px 4px 3px;
    color: black;
    font-size: 15px;
    font-weight: 600;
    line-height: 1.3;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    text-decoration: none;
    border-bottom: 2px solid black;
  }

  .hide-drawer-button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    flex: 0 0 auto;
    padding: 0;
    border-radius: 8px;
    color: rgb(80, 80, 80);
  }

  .hide-drawer-button:hover {
    background: rgba(0, 0, 0, 0.06);
  }

  .sub-nav {
    display: flex;
    align-items: stretch;
    gap: 0;
    margin: 0 8px;
    padding: 0;
    border-bottom: 2px solid rgb(180, 180, 180);
  }

  .sub-nav-tab {
    flex: 1;
    padding: 10px 12px 8px;
    border-radius: 0;
    border-bottom: 2px solid transparent;
    margin-bottom: -2px;
    color: rgb(100, 100, 100);
    font-size: 18px;
    font-weight: 500;
    line-height: 1.2;
    text-transform: lowercase;
  }

  .sub-nav-tab:hover {
    background: rgba(0, 0, 0, 0.04);
    color: black;
  }

  .sub-nav-tab.active {
    color: black;
    font-weight: 600;
    border-bottom-color: orange;
  }

  .rooms-actions {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 4px 12px 8px;
  }

  .new-pill {
    display: flex;
    align-items: center;
    gap: 4px;
    height: 40px;
    padding: 4px 16px;
    border-radius: 24px;
    background-color: #f1e8f3;
    color: black;
    font-size: 14px;
  }

  .new-pill .material-symbols-outlined {
    font-size: 1.4rem;
  }

  .settings-button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 20px;
    color: rgb(80, 80, 80);
  }

  .settings-button:hover {
    background: rgba(0, 0, 0, 0.06);
  }

  .settings-button .material-icons {
    font-size: 22px;
  }

  .settings-menu {
    min-width: 220px;
    max-width: 280px;
    padding: 8px 10px;
  }

  .settings-copy {
    margin: 0;
    font-size: 13px;
    line-height: 1.4;
    color: rgb(60, 60, 60);
  }

  .server-actions {
    display: flex;
    flex-direction: column;
    min-width: 232px;
    text-align: left;
  }

  .menu-row {
    display: flex;
    align-items: center;
    gap: 8px;
    width: 100%;
    min-height: 36px;
    padding: 8px 10px;
    border-radius: 8px;
    text-align: left;
    text-decoration: none;
    color: black;
    font-size: 14px;
    font-weight: 500;
  }

  .menu-row:hover:not(:disabled) {
    background: rgba(0, 0, 0, 0.06);
  }

  .menu-row:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }

  .visibility-row {
    margin-top: 4px;
    border-top: 1px solid rgba(0, 0, 0, 0.08);
    border-radius: 0 0 8px 8px;
  }

  .menu-note {
    padding: 4px 10px;
    text-align: left;
    font-size: 13px;
    color: rgb(80, 80, 80);
  }

  .menu-embed {
    display: flex;
    padding: 4px 6px;
  }

  .hide-on-mobile {
    display: flex;
  }

  @media only screen and (max-width: 767px) {
    .hide-on-mobile {
      display: none;
    }
  }

  .server-menu {
    /* Fixed: absolute inside the drawer clipped the grid and ate card hits. */
    position: fixed;
    z-index: 40;
    background: transparent;
    border: none;
    box-shadow: none;
  }

  .search-slot {
    padding: 0;
    background: transparent;
  }

  .search-slot :global(.my-search-bar) {
    width: 240px;
    height: 36px;
    font-size: 1rem;
    padding-left: 34px;
    background: white;
  }

  .search-slot :global(.my-search-icon) {
    font-size: 22px;
    top: 6px;
    left: 8px;
  }

  .server-list {
    max-height: 70vh;
    overflow: auto;
    padding: 8px 0 4px;
    background: transparent;
    scrollbar-width: none;
    -ms-overflow-style: none;
  }

  .server-list::-webkit-scrollbar {
    display: none;
    width: 0;
    height: 0;
  }

  .server-grid {
    display: grid;
    grid-template-columns: repeat(var(--menu-columns), 240px);
    gap: 8px;
    width: max-content;
    min-width: 100%;
  }

  .server-grid :global(.server-card) {
    height: auto;
  }

  .server-name-list {
    display: flex;
    flex-direction: column;
    gap: 4px;
    margin-top: 8px;
    width: 100%;
    max-width: 100%;
  }

  .server-list-row {
    display: block;
    width: 100%;
    min-height: 40px;
    padding: 10px 12px;
    border-radius: 10px;
    text-align: left;
    background: rgba(255, 255, 255, 0.92);
    color: black;
    font-size: 14px;
    font-weight: 500;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .server-list-row:hover {
    background: rgba(255, 255, 255, 1);
  }

  .create-server {
    display: flex;
    align-items: center;
    width: 240px;
    min-height: 44px;
    text-align: left;
    padding: 8px 12px;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.88);
    color: #5d0068;
    font-weight: 500;
  }
</style>
