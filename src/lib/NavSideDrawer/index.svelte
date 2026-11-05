<svelte:window on:click|capture={onWindowClick} on:keydown={onWindowKey} />

<div class="nav-cluster" class:floating bind:this={clusterEl}>
  <section class="nav-panel" aria-label="Server navigation">
    <GlobalAppPopup let:setIsPopupOpen={setIsPopupOpen}>
      <div class="server-row">
        <button
          type="button"
          class="logo-button"
          on:click={() => {
            if ($user.uid) setIsPopupOpen(true)
            else isFullServerMode.set(false)
          }}
        >
          <img
            src="/app-logo-no-bg.png"
            width="36"
            height="33"
            alt="app logo"
          >
        </button>

        <div class="server-anchor">
          <button
            type="button"
            class="server-name"
            aria-haspopup="true"
            aria-expanded={menuOpen}
            aria-controls="server-switch-menu"
            title={currentServerName}
            on:click={toggleServerMenu}
          >
            {currentServerName}
          </button>

          {#if menuOpen}
            <div class="server-menu" id="server-switch-menu" style="width: {menuWidth}px;">
              <div class="search-slot">
                <SearchBar
                  {searchVal}
                  on:input={(e) => onSearchInput(e.detail)}
                />
              </div>

              <div class="server-list" style="--menu-columns: {columnCount};">
                {#each visibleServers as server (server.id)}
                  <CompactServerCard serverObj={server} />
                {/each}

                <button type="button" class="create-server" on:click={openCreateServer}>
                  Create new server
                </button>
              </div>
            </div>
          {/if}
        </div>

        <button
          type="button"
          class="menu-button"
          aria-label="Open menu"
          on:click={() => setIsPopupOpen(true)}
        >
          <span class="material-icons" aria-hidden="true">more_vert</span>
        </button>
      </div>
    </GlobalAppPopup>
  </section>

  <div class="action-row">
    <button type="button" class="new-pill" on:click={createNew} disabled={creating}>
      <span class="material-symbols-outlined" aria-hidden="true">add</span>
      New
    </button>

    <button type="button" class="hide-drawer-button" aria-label="Hide drawer" on:click={() => sidebarFullscreen.set(true)}>
      <span class="material-symbols-outlined" aria-hidden="true">left_panel_close</span>
      <span>Hide drawer</span>
    </button>
  </div>
</div>

<PopupNewServer bind:this={newServerPopup} showTrigger={false} />

<script>
  import CompactServerCard from '$lib/TheTopNavbar/CompactServerCard.svelte'
  import SearchBar from '$lib/TheTopNavbar/SearchBar.svelte'
  import PopupNewServer from '$lib/TheTopNavbar/PopupNewServer.svelte'
  import GlobalAppPopup from '$lib/GlobalAppPopup/index.svelte'
  import { getFirestoreCollection, createRoomDoc } from '/src/helpers/crud.js'
  import { user, classServerDoc, recentSearchedServerDoc, isFullServerMode, sidebarFullscreen } from '/src/store.js'
  import { viewport } from '/src/storeFolder/viewport.js'
  import { page } from '$app/stores'
  import { goto } from '$app/navigation'
  import { CARD_WIDTH, CARD_GAP, serversForMenu, menuColumnCount, serverNameLeft } from './serverMenu.js'

  export let floating = false

  let menuOpen = false
  let searchVal = ''
  let allServers = []
  let creating = false
  let newServerPopup
  let clusterEl

  $: visibleServers = serversForMenu(allServers, searchVal)
  $: menuOffset = serverNameLeft(floating)
  $: columnCount = menuColumnCount($viewport.width, visibleServers.length + 1, menuOffset)
  $: menuWidth = columnCount * CARD_WIDTH + Math.max(columnCount - 1, 0) * CARD_GAP
  $: currentServerName = nameForCurrentServer($page.params.class, allServers, $classServerDoc, $recentSearchedServerDoc)

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

  function toggleServerMenu () {
    menuOpen = !menuOpen
    if (!menuOpen) searchVal = ''
  }

  function closeServerMenu () {
    menuOpen = false
    searchVal = ''
  }

  function onWindowClick (event) {
    if (!menuOpen || !clusterEl) return
    const pickedCard = event.target.closest('.server-card')
    const outside = !clusterEl.contains(event.target)
    if (pickedCard || outside) queueMicrotask(closeServerMenu)
  }

  function onWindowKey (event) {
    if (event.key === 'Escape' && menuOpen) closeServerMenu()
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
    flex: 0 0 auto;
    padding: 0;
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
    white-space: normal;
    /* text-decoration draws a separate line on each wrapped line */
    text-decoration: none;
    border-bottom: 2px solid orange;
  }

  .menu-button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    flex: 0 0 auto;
    border-radius: 8px;
    color: rgb(80, 80, 80);
  }

  .server-menu {
    position: absolute;
    top: calc(100% + 4px);
    left: 0;
    z-index: 30;
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
    display: grid;
    grid-template-columns: repeat(var(--menu-columns), 240px);
    gap: 8px;
    max-height: 70vh;
    overflow-y: auto;
    padding: 8px 0 4px;
    background: transparent;
  }

  .server-list :global(.server-card) {
    height: auto;
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

  .action-row {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 12px 4px;
  }

  .new-pill {
    display: flex;
    align-items: center;
    gap: 4px;
    height: 44px;
    padding: 4px 16px;
    border-radius: 24px;
    background-color: #f1e8f3;
    color: black;
    font-size: 14px;
  }

  .new-pill .material-symbols-outlined {
    font-size: 1.4rem;
  }

  .hide-drawer-button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    height: 44px;
    min-width: 44px;
    padding: 4px 12px;
    border-radius: 24px;
    border: 1px solid lightgrey;
    background-color: white;
    color: black;
    font-size: 14px;
    font-weight: 500;
    white-space: nowrap;
  }

  .hide-drawer-button .material-symbols-outlined {
    font-size: 22px;
  }
</style>
