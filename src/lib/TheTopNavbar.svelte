<div id="the-top-navbar">
	<div class="top-app-bar-container">
		<div bind:this={topAppBar} 
			style="border-bottom: 1px solid lightgrey;"
		>
			<Row style="height: var(--navbar-height); background-color: var(--bg-off-white); padding-left: 2%; padding-right: 2%;">
				<div class="prepare-to-appear" class:increase-opacity={!isHomeScreenVisible} 
					style="padding: 6px 12px 8px 0px; box-sizing: border-box; width: {50 + 20}px; height: {46 + 14}px"
				>
          <GlobalAppPopup let:setIsPopupOpen={setIsPopupOpen} >
						<img on:click={() => setIsPopupOpen(true)} on:keydown
							src="/app-logo-no-bg.png" width="50" height="46" style="filter: brightness(80%); margin-right: 6px; cursor: pointer;"
							alt="app logo"
						>
					</GlobalAppPopup>
				</div>
	
				<slot name="tab-section">
					<div style="display: flex; column-gap: 24px;" class="prepare-to-appear" class:increase-opacity={!isHomeScreenVisible}>
						{#each mathServers as mathServer}
							<button
								on:click={() => handleServerRedirect(mathServer)} 
								class:orange-underline={$page.params.class === mathServer.id} 
								class="tab-item"
							>
								{mathServer.name}
							</button>
						{/each}

						{#if $recentSearchedServerDoc.name}
							<button 
								on:click={() => handleServerRedirect($recentSearchedServerDoc)} 
								class:orange-underline={$page.params.class === $recentSearchedServerDoc.id} 
								class="tab-item"
							>
								{$recentSearchedServerDoc.name}
							</button>
						{/if}
					</div>
				</slot>

				<Section align="end" toolbar style="padding-right: 0;">
					<div style="position: relative" class="prepare-to-appear" class:increase-opacity={!isHomeScreenVisible}>
						<SearchBar 
							{searchVal} 
							on:focus-change={(e) => isFocused = e.detail} 
							on:input={(e) => searchWithinClassNames(e.detail)}
						/>

						{#if isFocused}
							<div class="search-results grid-layout">
								{#each searchMatchedServers as matchedServer}
									<CompactServerCard serverObj={matchedServer}/>
								{/each}
							</div>
						{/if}

						<!-- just re-use <PopupNewServer/> to for creating new servers -->
					</div>
				</Section>
			</Row>
		</div>
	</div>
</div>

<script>
	import GlobalAppPopup from '$lib/GlobalAppPopup.svelte'
	import SearchBar from '$lib/SearchBar.svelte'
	import CompactServerCard from '$lib/CompactServerCard.svelte'
	import { getFirestoreCollection } from '/src/helpers/crud.js'
  import TopAppBar, { Row, Section, Title, AutoAdjust } from '@smui/top-app-bar'
	import { page } from '$app/stores'
	import { classServerDoc, recentSearchedServerDoc } from '/src/store.js'
	import { handleServerRedirect } from '/src/helpers/everythingElse.js'

	export let isHomeScreenVisible

	let searchVal = ''
  let topAppBar = null
	let allServers = []
	let mathServers = []
	let searchMatchedServers = []
	let isFocused = false
	let isPopupOpen = false

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

	.prepare-to-appear {
		opacity: 0.2;
		transition: opacity 0.5s ease-in-out;
	}

	.increase-opacity {
		opacity: 1;
	}

	.tab-item {
		color: black; 
		height: 100%; 
		display: flex; 
		align-items: center;
		cursor: pointer;
	}

	.orange-underline {
		border-bottom: 2px solid orange;
		/* left drawer server item's lighter orange #f7c686; */
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