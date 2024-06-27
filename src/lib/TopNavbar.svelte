<div class="flexy">
	<div class="top-app-bar-container flexor">
		<TopAppBar bind:this={topAppBar} style="border-bottom: 1px solid lightgrey;">
			<!-- 4% padding matches 92% container width -->
			<Row style="height: var(--navbar-height); background-color: #f8f9f9; padding-left: 4%; padding-right: 4%;">
				<div style="padding: 6px 12px 8px 0px; box-sizing: border-box;">
					<img 
						on:click={() => goto('/')}
						src="/app-logo-no-bg.png" width="50" height="46" style="filter: brightness(80%); margin-right: 6px; cursor: pointer;"
					>
	
				</div>

				<slot name="tab-section">

				</slot>

				<Section align="end" toolbar style="padding-right: 0;">
					<div class="hide-on-mobile">
						<Button on:click={() => goto('/servers')} style="color: black; font-size: 12px;" class="button-shaped-round">
							<Label>
								Servers
							</Label>
						</Button>

						<a on:click={() => alert("For absolutely anything, call 503 250 3868 or email eltonlin@alum.mit.edu, I can reply immediately unless it's past midnight / before 8 am.")}
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
					</div>

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

<AutoAdjust {topAppBar} style="background-color: #f8f9f9;">
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

  let topAppBar = null
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
</style>