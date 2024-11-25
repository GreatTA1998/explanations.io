<div class="flexy">
	<div class="top-app-bar-container flexor">
		<TopAppBar bind:this={topAppBar} 
			style="border-bottom: 1px solid lightgrey;"
		>
			<Row style="height: var(--navbar-height); background-color: var(--bg-off-white); padding-left: 2%; padding-right: 2%;">
				<div style="padding: 6px 12px 8px 0px; box-sizing: border-box;">
					<img 
						on:click={() => goto('/')}
						src="/app-logo-no-bg.png" width="50" height="46" style="filter: brightness(80%); margin-right: 6px; cursor: pointer;"
					>
	
				</div>

				<slot name="tab-section">
					<div style="display: flex; column-gap: 16px;">
						{#each mathServers as mathServer}
							<div 
								on:click={() => goto(`/${mathServer.id}/overview`)} 
								class:orange-underline={$page.params.class === mathServer.id} 
								style="color: black; height: 100%; display: flex; align-items: center;"
							>
								{mathServer.name}
							</div>
						{/each}
					</div>
				</slot>

				<Section align="end" toolbar style="padding-right: 0;">
						<SearchBar searchVal={''}/>
					
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
			</Row>
		</TopAppBar>
	</div>
</div>

<AutoAdjust {topAppBar} style="background-color: var(--bg-off-white);">
	<div style="">
		<slot>

		</slot>
	</div>
</AutoAdjust>

<script>
  import TopAppBar, { Row, Section, Title, AutoAdjust } from '@smui/top-app-bar'
	import Button, { Label } from '@smui/button'
	import ReusableSignInButton from '$lib/ReusableSignInButton.svelte'
	import { goto } from '$app/navigation'
  import { getFirestoreCollection } from '/src/helpers/crud.js'
	import { page } from '$app/stores'
	import SearchBar from '$lib/SearchBar.svelte'

  let topAppBar = null

	let mathServers = [] 

	getFirestoreCollection('classes').then(docs => {
		mathServers = docs.filter(doc => doc.subjectTag === 'Competition Math')
		console.log('mathServers =', mathServers)
	})
</script>

<style>
	.hide-on-mobile {
		display: flex;
	}

	@media only screen and (max-width: 767px) {
		.hide-on-mobile {
			display: none;
		}
	}

	.orange-underline {
		border-bottom: 2px solid orange;
	}
</style>