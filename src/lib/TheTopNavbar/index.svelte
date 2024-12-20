<div id="the-top-navbar">
	<Row style="height: var(--navbar-height); background-color: var(--bg-off-white); border-bottom: 1px solid lightgrey; padding-left: 2%; padding-right: 2%;">
		<div style="padding: 6px 12px 8px 0px; box-sizing: border-box; width: {50 + 20}px; height: {46 + 14}px">
			<GlobalAppPopup let:setIsPopupOpen={setIsPopupOpen} >
				<img on:click={() => setIsPopupOpen(true)} on:keydown
					class="prepare-to-appear" class:increase-opacity={!isHomeScreenVisible} 
					src="/app-logo-no-bg.png" width="50" height="46" style="filter: brightness(80%); margin-right: 6px; cursor: pointer;"
					alt="app logo"
				>
			</GlobalAppPopup>
		</div>

		<slot name="tab-section">
			<div class="prepare-to-appear my-flex-row" class:increase-opacity={!isHomeScreenVisible}>
				{#if $viewport.isDesktop}
					{#each mathServers as mathServer, i (mathServer.id)}
						<Tab server={mathServer} />
					{/each}
				{:else if $viewport.isMobile || $viewport.isTablet}
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
					</div>
				{/if}
				<!-- just re-use <PopupNewServer/> to for creating new servers -->
			</div>
		</Section>
	</Row>
</div>

<script>
	import Tab from '$lib/TheTopNavbar/Tab.svelte'
	import GlobalAppPopup from '$lib/GlobalAppPopup.svelte'
	import SearchBar from '$lib/SearchBar.svelte'
	import CompactServerCard from '$lib/CompactServerCard.svelte'
	import { getFirestoreCollection } from '/src/helpers/crud.js'
  import TopAppBar, { Row, Section, Title, AutoAdjust } from '@smui/top-app-bar'
	import { recentSearchedServerDoc } from '/src/store.js'
	import { viewport } from '/src/storeFolder/viewport.js'

	export let isHomeScreenVisible

	let searchVal = ''
	let allServers = []
	let mathServers = []
	let searchMatchedServers = []
	let isFocused = false

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
  }

	.my-flex-row {
		display: flex; 
		column-gap: 24px;
	}

	.prepare-to-appear {
		opacity: 0.2;
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
</style>