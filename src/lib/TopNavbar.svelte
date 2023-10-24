<div class="flexy">
	<div class="top-app-bar-container flexor">
		<!-- background-color: hsl(0,0%,0%, 0.75); -->
		<TopAppBar bind:this={topAppBar} variant="standard" style="background-color: white; border-bottom: 0px solid lightgrey;">
			<Row>
				<Section>
					<img 
						on:click={() => goto('/')}
						src="/app-logo-no-bg.png" width="48" height="44" style="margin-left: 4px; margin-right: 8px; margin-top: 4px; cursor: pointer;"
					>
					<div style="font-weight: 400; font-size: 20px; color: black;">
						explanations.app
					</div>

				</Section>

				<Section align="end" toolbar>
					<a href="" target="_blank" 
						style="margin-left: 8px; text-decoration-color: transparent;"
					>
						<Button
							class="button-shaped-round"
							style="font-size: 12px; color: black;"
						>
							<Label>CONTACT</Label>
							<!-- Phone & email -->
						</Button>
					</a>

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

					<div style="margin-right: 18px;"></div>


					<ReusableSignInButton outlined={false} style="color: black;">
						<div style="color: black; font-size: 12px;">
							Log in
						</div>
					</ReusableSignInButton>

					
				</Section>
			</Row>
		</TopAppBar>
	</div>
</div>

<AutoAdjust {topAppBar}>
  <slot>

  </slot>
</AutoAdjust>

<script>
  import TopAppBar, { Row, Section, Title, AutoAdjust } from '@smui/top-app-bar'
	import Button, { Label } from '@smui/button'
	import ReusableSignInButton from '$lib/ReusableSignInButton.svelte'
	import { goto } from '$app/navigation'

  let topAppBar = null
</script>