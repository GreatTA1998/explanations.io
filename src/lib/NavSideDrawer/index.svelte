<svelte:window on:click|capture={onWindowClick} on:keydown={onWindowKey} />

<div class="nav-cluster" class:floating>
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
          <span class="server-name-label">{currentServerName}</span>
          <span class="server-name-caret" aria-hidden="true"></span>
        </button>

        {#if menuOpen}
          <button type="button" class="server-menu-scrim" aria-label="Dismiss server menu" on:click={closeServerMenu}></button>
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
            <button
              type="button"
              class="menu-row privacy-toggle"
              role="switch"
              aria-checked={isPrivate}
              aria-label="Private server"
              disabled={savingVisibility}
              on:click|stopPropagation={setServerVisibility}
            >
              <span>Private</span>
              <span class="switch-track" class:on={isPrivate} aria-hidden="true"><span class="switch-thumb"></span></span>
            </button>
          </div>
        </AnchoredPopover>

        <button
          type="button"
          class="hide-drawer-button"
          aria-label="Hide drawer"
          title="Hide drawer"
          on:click={() => sidebarFullscreen.set(true)}
        >
          <HandDrawnDrawerArrow pointing="left" />
        </button>
      </nav>

      <div class="rooms-actions">
        <label class="name-filter">
          <span class="material-icons" aria-hidden="true">search</span>
          <input
            type="search"
            aria-label="Filter by name"
            autocomplete="off"
            maxlength="80"
            bind:value={$drawerNameQuery}
          >
        </label>
        <button type="button" class="new-pill" on:click={createNew} disabled={creating}>
          <span class="material-symbols-outlined" aria-hidden="true">add</span>
          {$drawerNavTab === 'forum' ? 'new question' : 'new room'}
        </button>
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
  import ReusableSignInButton from '$lib/Reusable/ReusableSignInButton.svelte'
  import { getFirestoreCollection, createRoomDoc, updateFirestoreDoc } from '/src/helpers/crud.js'
  import { user, classServerDoc, recentSearchedServerDoc, sidebarFullscreen, drawerNavTab, drawerNameQuery } from '/src/store.js'
  import { viewport } from '/src/storeFolder/viewport.js'
  import { page } from '$app/stores'
  import { goto } from '$app/navigation'
  import { getAuth, signOut } from 'firebase/auth'
  import { CARD_WIDTH, CARD_GAP, partitionServersForMenu, menuColumnCount, serverNameLeft, serverIsPublic } from './serverMenu.js'
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
  let serverNameEl
  let menuTop = 0
  let menuLeft = 0

  $: ({ previewServers, listServers } = partitionServersForMenu(allServers, searchVal, $user.uid))
  $: isPrivate = !serverIsPublic($classServerDoc)
  $: menuOffset = serverNameLeft(floating)
  $: columnCount = menuColumnCount(
    $viewport.width,
    Math.max(previewServers.length + 1, listServers.length),
    menuOffset
  )
  $: menuWidth = columnCount * CARD_WIDTH + Math.max(columnCount - 1, 0) * CARD_GAP
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
    // Skip picks (capture-close aborted goto) and the name toggle.
    if (!menuOpen || event.target.closest('.server-card, .server-pick, .create-server, #server-switch-menu, .server-name')) return
    closeServerMenu()
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
    if (savingVisibility || !classID) return
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
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
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
    display: flex; align-items: center;
    width: 100%;
    min-width: 0;
    text-align: left;
    padding: 6px 4px;
    color: rgb(45, 45, 45);
    font-size: 24px;
    font-weight: 600;
    line-height: 1.2;
    text-decoration: none;
  }

  .server-name-label { min-width: 0; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; }
  .server-name-caret { flex: 0 0 auto; width: 0; height: 0; margin-left: 8px; border-left: 5px solid transparent; border-right: 5px solid transparent; border-top: 6px solid currentColor; }

  .sub-nav {
    display: flex;
    align-items: stretch;
    gap: 0;
    margin: 0 8px;
    padding: 0;
  }

  .sub-nav-tab {
    flex: 1;
    padding: 10px 12px 8px;
    border-radius: 0;
    border-bottom: 2px solid rgb(180, 180, 180);
    color: rgb(100, 100, 100);
    font-size: 18px;
    font-weight: 500;
    line-height: 1.2;
    text-transform: lowercase;
  }

  .sub-nav .settings-button,
  .sub-nav .hide-drawer-button {
    flex: 0 0 auto;
    align-self: center;
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
    gap: 6px;
    padding: 6px 12px;
  }

  .name-filter {
    display: flex;
    flex: 1;
    align-items: center;
    gap: 2px;
    min-width: 0;
    height: 36px;
    padding: 0 8px 0 6px; border-radius: 18px; background: rgba(0, 0, 0, 0.045);
  }

  .name-filter .material-icons { flex: 0 0 auto; font-size: 1.4rem; color: rgb(120, 120, 120); }

  .name-filter input {
    flex: 1; min-width: 0; border: 0; outline: none;
    background: transparent; color: black; font-size: 13px;
  }

  .new-pill {
    display: flex; flex: 0 0 auto; align-items: center; gap: 4px;
    height: 36px; padding: 4px 12px; border-radius: 24px;
    background-color: #f1e8f3; color: black; font-size: 13px; white-space: nowrap;
  }

  .new-pill .material-symbols-outlined {
    font-size: 1.4rem;
  }

  .settings-button,
  .hide-drawer-button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    margin-left: 4px;
    padding: 0;
    border-radius: 8px;
    color: rgb(80, 80, 80);
  }

  .settings-button:hover,
  .hide-drawer-button:hover {
    background: rgba(0, 0, 0, 0.06);
  }

  .settings-button .material-icons {
    font-size: 20px;
  }

  .settings-menu {
    min-width: 180px;
    padding: 6px 8px;
  }

  .privacy-toggle {
    justify-content: space-between;
  }

  .switch-track {
    position: relative;
    width: 36px;
    height: 20px;
    border-radius: 999px;
    background: rgba(0, 0, 0, 0.22);
    transition: background 0.15s ease;
  }

  .switch-track.on { background: #f69637; }

  .switch-thumb {
    position: absolute;
    top: 2px;
    left: 2px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: white;
    transition: transform 0.15s ease;
  }

  .switch-track.on .switch-thumb { transform: translateX(16px); }

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

  .server-menu-scrim { position: fixed; inset: 0; z-index: 39; margin: 0; padding: 0; border: 0; border-radius: 0; background: rgba(0, 0, 0, 0.28); }

  .server-menu {
    /* Fixed: absolute inside the drawer clipped the grid and ate card hits. */
    position: fixed;
    z-index: 40;
    /* Opaque plate: no glass wash over board / transcript / room list. */
    background: var(--bg-off-white);
  }

  .search-slot {
    padding: 0;
  }

  .search-slot :global(.my-search-bar) {
    width: 240px;
    height: 36px;
    font-size: 1rem;
    padding-left: 34px;
    background: rgba(0, 0, 0, 0.045);
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
    display: grid;
    grid-template-columns: repeat(auto-fill, 240px);
    gap: 4px 8px;
    margin-top: 8px;
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
    font-size: 16px;
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
