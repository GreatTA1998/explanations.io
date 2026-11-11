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

        <AnchoredPopover
          bind:this={actionsPopover}
          positionArea="block-end span-inline-start"
          on:toggle={onActionsToggle}
          let:close
        >
          <button
            slot="activator"
            let:popoverId
            let:anchorName
            type="button"
            class="menu-button"
            aria-label="Open menu"
            aria-haspopup="menu"
            aria-expanded={actionsOpen}
            aria-controls={popoverId || undefined}
            popovertarget={popoverId || undefined}
            style={anchorName ? `anchor-name: ${anchorName}` : undefined}
          >
            <span class="material-icons" aria-hidden="true">more_vert</span>
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
      </div>
    </GlobalAppPopup>
  </section>

  <div class="action-row">
    <button type="button" class="new-pill" on:click={createNew} disabled={creating}>
      <span class="material-symbols-outlined" aria-hidden="true">add</span>
      New
    </button>

    <button type="button" class="hide-drawer-button" aria-label="Hide drawer" on:click={() => sidebarFullscreen.set(true)}>
      <HandDrawnDrawerArrow pointing="left" />
      <span>Hide drawer</span>
    </button>
  </div>
</div>

<PopupNewServer bind:this={newServerPopup} showTrigger={false} />

<script>
  import HandDrawnDrawerArrow from './HandDrawnDrawerArrow.svelte'
  import CompactServerCard from '$lib/TheTopNavbar/CompactServerCard.svelte'
  import SearchBar from '$lib/TheTopNavbar/SearchBar.svelte'
  import PopupNewServer from '$lib/TheTopNavbar/PopupNewServer.svelte'
  import GlobalAppPopup from '$lib/GlobalAppPopup/index.svelte'
  import AnchoredPopover from '$lib/Reusable/AnchoredPopover.svelte'
  import CalEmbed from '$lib/GlobalAppPopup/CalEmbed.svelte'
  import ReusableSignInButton from '$lib/Reusable/ReusableSignInButton.svelte'
  import { getFirestoreCollection, createRoomDoc, updateFirestoreDoc } from '/src/helpers/crud.js'
  import { user, classServerDoc, recentSearchedServerDoc, isFullServerMode, sidebarFullscreen } from '/src/store.js'
  import { viewport } from '/src/storeFolder/viewport.js'
  import { page } from '$app/stores'
  import { goto } from '$app/navigation'
  import { getAuth, signOut } from 'firebase/auth'
  import { CARD_WIDTH, CARD_GAP, serversForMenu, menuColumnCount, serverNameLeft, serverIsPublic, viewerIsServerCreator, visibilityActionLabel } from './serverMenu.js'

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
  let actionsPopover
  let savingVisibility = false
  let searchVal = ''
  let allServers = []
  let creating = false
  let newServerPopup
  let clusterEl

  $: visibleServers = serversForMenu(allServers, searchVal, $user.uid)
  $: visibilityLabel = visibilityActionLabel($classServerDoc)
  $: canChangeVisibility = !!$page.params.class && viewerIsServerCreator($classServerDoc, $user.uid)
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
    actionsPopover?.close()
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

  function onActionsToggle (event) {
    actionsOpen = event.newState === 'open'
    if (actionsOpen) closeServerMenu()
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

</style>
