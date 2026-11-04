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

    {#if menuOpen}
      <div class="server-menu" id="server-switch-menu">
        <div class="search-slot">
          <SearchBar
            {searchVal}
            on:input={(e) => onSearchInput(e.detail)}
          />
        </div>

        <div class="server-list">
          {#if searchVal.trim()}
            {#each searchMatchedServers as matchedServer (matchedServer.id)}
              <CompactServerCard serverObj={matchedServer} />
            {/each}
          {:else}
            {#each listedServers as server (server.id)}
              <button
                type="button"
                class="server-link"
                class:current={$page.params.class === server.id}
                on:click={() => chooseServer(server)}
              >
                {server.name}
              </button>
            {/each}
          {/if}

          <button type="button" class="create-server" on:click={openCreateServer}>
            Create new server
          </button>
        </div>
      </div>
    {/if}
  </section>

  <div class="action-row">
    <button type="button" class="new-pill" on:click={createNew} disabled={creating}>
      <span class="material-symbols-outlined" aria-hidden="true">add</span>
      New
    </button>

    <button type="button" class="fullscreen-button" on:click={() => sidebarFullscreen.set(true)}>
      <span class="material-symbols-outlined" aria-hidden="true">open_in_full</span>
      <span>Fullscreen</span>
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
  import { handleServerRedirect } from '/src/helpers/everythingElse.js'
  import { user, classServerDoc, recentSearchedServerDoc, isFullServerMode, sidebarFullscreen } from '/src/store.js'
  import { viewport } from '/src/storeFolder/viewport.js'
  import { page } from '$app/stores'
  import { goto } from '$app/navigation'

  export let floating = false

  let menuOpen = false
  let searchVal = ''
  let allServers = []
  let mathServers = []
  let searchMatchedServers = []
  let creating = false
  let newServerPopup
  let clusterEl

  $: listedServers = serversForBar($viewport, mathServers, $recentSearchedServerDoc)
  $: currentServerName = nameForCurrentServer($page.params.class, allServers, $classServerDoc, $recentSearchedServerDoc)

  getFirestoreCollection('classes').then(docs => {
    allServers = docs
    mathServers = docs.filter(doc => doc.subjectTag === 'Competition Math')
    searchMatchedServers = allServers.sort((a, b) => a.featuredBlackboardID ? -1 : b.featuredBlackboardID ? 1 : 0)
  })

  function nameForCurrentServer (classId, servers, classDoc, recent) {
    const match = servers.find(server => server.id === classId)
    if (match?.name) return match.name
    if (classId && classDoc?.name) return classDoc.name
    if (recent?.name) return recent.name
    return 'Find server'
  }

  function serversForBar (currentViewport, competitionServers, recent) {
    const list = []
    if (currentViewport.isDesktop || currentViewport.isTablet) {
      list.push(...competitionServers)
    } else if (currentViewport.isMobile) {
      if (!recent?.name && competitionServers.length > 0) list.push(competitionServers[0])
      else if (recent?.id) list.push(recent)
    }

    if (currentViewport.isDesktop && recent?.name && recent.subjectTag !== 'Competition Math' && recent.id) {
      if (!list.some(server => server.id === recent.id)) list.push(recent)
    }

    return list.filter(server => server?.id)
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
    searchWithinClassNames(value)
  }

  function searchWithinClassNames (searchQuery) {
    const matches = []
    for (const searchTerm of searchQuery.split(' ')) {
      for (const server of allServers) {
        if (!server.name) continue
        if (server.name.toLowerCase().indexOf(searchTerm.toLowerCase()) === -1) continue
        if (!matches.includes(server)) matches.push(server)
      }
    }
    searchMatchedServers = matches
  }

  function chooseServer (server) {
    handleServerRedirect(server)
    queueMicrotask(closeServerMenu)
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
    width: calc(100% - 16px);
    margin: 8px 8px 0;
  }

  .floating {
    position: fixed;
    top: 8px;
    left: 8px;
    z-index: 30;
    width: 280px;
    margin: 0;
  }

  .nav-panel {
    position: relative;
    background-color: var(--bg-off-white);
    border-radius: 12px;
    box-shadow: 0 3px 5px -2px rgb(0 0 0 / 0.08), 0 2px 4px -2px rgb(0 0 0 / 0.06);
    border: 1px solid rgba(0, 0, 0, 0.06);
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

  .server-name {
    flex: 1;
    min-width: 0;
    text-align: left;
    padding: 6px 4px;
    color: black;
    font-size: 15px;
    font-weight: 600;
    line-height: 1.3;
    text-decoration: underline;
    text-decoration-color: orange;
    text-decoration-thickness: 2px;
    text-underline-offset: 3px;
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
    right: 0;
    z-index: 20;
    background-color: white;
    border-radius: 12px;
    border: 1px solid rgba(0, 0, 0, 0.08);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.16);
  }

  .search-slot {
    padding: 8px 8px 0;
  }

  .search-slot :global(.my-search-bar) {
    width: 100%;
    height: 36px;
    font-size: 1rem;
    padding-left: 34px;
  }

  .search-slot :global(.my-search-icon) {
    font-size: 22px;
    top: 6px;
    left: 8px;
  }

  .server-list {
    display: block;
    max-height: 50vh;
    overflow-y: auto;
    padding: 8px;
  }

  .server-list :global(.server-card) {
    margin-bottom: 8px;
    flex-shrink: 0;
    height: auto;
  }

  .server-link,
  .create-server {
    display: block;
    width: 100%;
    text-align: left;
    padding: 8px 10px;
    margin-bottom: 4px;
    border-radius: 8px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: black;
  }

  .server-link.current {
    border-bottom: 2px solid orange;
  }

  .create-server {
    color: #5d0068;
    font-weight: 500;
  }

  .action-row {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 8px;
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

  .fullscreen-button {
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
  }

  .fullscreen-button .material-symbols-outlined {
    font-size: 22px;
  }
</style>
