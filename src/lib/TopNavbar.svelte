<div style="width: 100%;">
	<div class="top-app-bar-container">
		<div bind:this={topAppBar} 
			style="border-bottom: 1px solid lightgrey;"
		>
			<Row style="height: var(--navbar-height); background-color: var(--bg-off-white); padding-left: 2%; padding-right: 2%;">
					<div class="prepare-to-appear" class:increase-opacity={!isHomeScreenVisible} 
						style="padding: 6px 12px 8px 0px; box-sizing: border-box; width: {50 + 20}px; height: {46 + 14}px"
					>
						<img 
							on:click={() => goto('/')} 
							on:keydown
							src="/app-logo-no-bg.png" width="50" height="46" style="filter: brightness(80%); margin-right: 6px; cursor: pointer;"
							alt="app logo"
						>
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
						
							<SearchBar {searchVal} on:focus-change={(e) => isFocused = e.detail} on:input={(e) => searchWithinClassNames(e.detail)}/>

							{#if isFocused}
								<div class="search-results grid-layout">
									{#each searchMatchedServers as matchedServer}
										<CompactServerCard serverObj={matchedServer}/>
									{/each}
								</div>
							{/if}

							<!-- just re-use <PopupNewServer/> to for creating new servers -->
						</div>
						
						<!-- THESE will be moved to the splash screen logo "app hub" instead -->
						<!-- <div class="hide-on-mobile">
							<a href="https://eltonlin.substack.com/archive" target="_blank" 
								style="margin-left: 8px; text-decoration-color: transparent;"
							>
								<Button
									class="button-shaped-round"
									style="font-size: 12px; color: black;"
								>
									<Label>blog</Label>
								</Button>
							</a>

							<a href="https://github.com/greatTA1998/explain" target="_blank" 
								style="margin-left: 20px; text-decoration-color: transparent;"
							>
								<div style="width: 38px; height: 38px; border-radius: 19px; background-color: white; display: flex; align-items: center; justify-content: center; box-sizing: border-box;">
									<img src="/github-logo-dark-mode-no-bg.png"
									style="width: 54px; height: 54px;"
									>
								</div>
							</a>
						</div>

						<div style="margin-right: 18px;"></div>

						<ReusableSignInButton outlined={false} style="color: black;">
							<div style="color: black; font-size: 12px;">
								Log in
							</div>
						</ReusableSignInButton>					 -->
					</Section>
				<!-- {/if} -->
			</Row>
		</div>
	</div>
</div>

<script>
	import SearchBar from '$lib/SearchBar.svelte'
	import CompactServerCard from '$lib/CompactServerCard.svelte'
	import { getFirestoreCollection } from '/src/helpers/crud.js'
  import TopAppBar, { Row, Section, Title, AutoAdjust } from '@smui/top-app-bar'
	import { goto } from '$app/navigation'
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
	.prepare-to-appear {
		opacity: 0.2;
		transition: opacity 0.5s linear;
	}

	.increase-opacity {
		opacity: 1;
	}

	.hide-on-mobile {
		display: flex;
	}

	@media only screen and (max-width: 767px) {
		.hide-on-mobile {
			display: none;
		}
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