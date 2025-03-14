<div id="the-top-navbar">
	<div style="padding: 6px 12px 8px 0px; box-sizing: border-box; width: {50 + 20}px; height: {46 + 14}px">
		<GlobalAppPopup let:setIsPopupOpen={setIsPopupOpen}>
			<button on:click={() => {
				if ($user.uid) setIsPopupOpen(true)
				else isFullServerMode.set(false)
			}}>
				<img src="/app-logo-no-bg.png"
					class="prepare-to-appear" class:increase-opacity={!isHomeScreenVisible} 
					width="50" height="46" style="filter: brightness(80%); margin-right: 6px; cursor: pointer;"
					alt="app logo"
				>
			</button>
		</GlobalAppPopup>
	</div> 

	<slot name="tab-section">
		<div class="prepare-to-appear my-flex-row" class:increase-opacity={!isHomeScreenVisible}>
			{#if $viewport.isDesktop || $viewport.isTablet}
				{#each mathServers as mathServer, i (mathServer.id)}
					<Tab server={mathServer} />
				{/each}
			{:else if $viewport.isMobile}
				{#if !$recentSearchedServerDoc.name && mathServers.length > 0}
					<Tab server={mathServers[0]} />
				{:else}
					<Tab server={$recentSearchedServerDoc} />
				{/if}
			{/if}
		</div>
	</slot>

	<Section align="end" toolbar style="padding: 0; display: flex; column-gap: 24px;">
		{#if $viewport.isDesktop}
			<!-- TO-DO: fix this, it remains undefined when it shouldn't -->
			{#if $recentSearchedServerDoc.name && $recentSearchedServerDoc.subjectTag !== 'Competition Math'}
				<Tab server={$recentSearchedServerDoc} />
			{/if}
		{/if}

		<div style="position: relative" class="search-bar-container prepare-to-appear" class:increase-opacity={!isHomeScreenVisible}>
			<SearchBar {searchVal} 
				on:focus-change={(e) => isFocused = e.detail} 
				on:input={(e) => searchWithinClassNames(e.detail)}
			/>
				{#if isFocused}
					<div class="search-results grid-layout">
						{#each searchMatchedServers as matchedServer (matchedServer.id)}
							<CompactServerCard serverObj={matchedServer}/>
						{/each}

						<button class="new-server-button" on:click|stopPropagation={() => isPopupNewServerOpen = true}>
							<span class="material-symbols-outlined" style="margin-right: 6px;">add</span>
							<span>Create new server</span>
						</button>
					</div>
				{/if}
		</div>
	</Section>
</div>

{#if isPopupNewServerOpen}
	<div class="popup-overlay" on:click|self={() => isPopupNewServerOpen = false} on:keydown>
		<div class="popup-container" on:click|stopPropagation on:keydown>
			<PopupNewServer isOpen={isPopupNewServerOpen} on:popup-close={() => isPopupNewServerOpen = false} />
		</div>
	</div>
{/if}

<script>
	import CompactServerCard from './CompactServerCard.svelte'
	import Tab from './Tab.svelte'
	import SearchBar from './SearchBar.svelte'
	import PopupNewServer from './PopupNewServer.svelte'
	import GlobalAppPopup from '$lib/GlobalAppPopup/index.svelte'
	import { getFirestoreCollection } from '/src/helpers/crud.js'
  import { Section } from '@smui/top-app-bar'
	import { user, recentSearchedServerDoc, isFullServerMode } from '/src/store.js'
	import { viewport } from '/src/storeFolder/viewport.js'

	export let isHomeScreenVisible

	let searchVal = ''
	let allServers = []
	let mathServers = []
	let searchMatchedServers = []
	let isFocused = false
	let isPopupNewServerOpen = false

	getFirestoreCollection('classes').then(docs => {
		allServers = docs
		mathServers = docs.filter(doc => doc.subjectTag === 'Competition Math')

		// prioritize displaying servers with featured blackboards (good visual effect)
		searchMatchedServers = allServers.sort((a, b) => a.featuredBlackboardID ? -1 : b.featuredBlackboardID ? 1 : 0)
	})

  function searchWithinClassNames (searchQuery) {
    const uniqueSet = new Set()
    for (const searchTerm of searchQuery.split(' ')) {
      for (const server of allServers) {
        if (server.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1) {
          uniqueSet.add(server)
        }
      }
    }
    searchMatchedServers = [...uniqueSet]
    return [...uniqueSet]
  }
</script>

<style>
	#the-top-navbar {
    position: fixed;
    top: 0;
    width: 100%;
    height: var(--navbar-height);
    z-index: 1; /* without this the hero text will overlay on top of the navbar */

		display: flex;
		height: var(--navbar-height); 
		background-color: var(--bg-off-white); 
		padding-left: 2%; 
		padding-right: 2%;
		box-shadow: 0 3px 5px -2px rgb(0 0 0 / 0.08), 0 2px 4px -2px rgb(0 0 0 / 0.06);
  }

	.my-flex-row {
		display: flex; 
		column-gap: 24px;
	}

	.prepare-to-appear {
		opacity: 0;
		transition: opacity 0.5s ease-in-out;
	}

	.increase-opacity {
		opacity: 1;
	}

	.search-results {
		position: absolute;
		top: 100%;
		right: 0;
		background: transparent;
		border-radius: 16px;
		padding: 4px;
		z-index: 1000;
		margin-top: 4px;

		max-height: 90vh;
		overflow-y: auto;
	}

	.grid-layout {
		display: grid;
		grid-template-columns: repeat(2,auto);
		gap: 8px;
	}
	
	.new-server-button {
		display: flex;
		align-items: center;
		padding: 8px 12px;
		background-color: #f5f5f5;
		border: none;
		border-radius: 8px;
		cursor: pointer;
		font-weight: 500;
		color: purple;
	}
	
	.popup-overlay {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.5);
		z-index: 2000;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	
	.popup-container {
		background-color: white;
		border-radius: 16px;
		max-width: 90%;
		max-height: 90%;
		overflow: auto;
	}
</style>