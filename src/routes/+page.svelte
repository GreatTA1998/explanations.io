<div class="flexy">
	<div class="top-app-bar-container flexor">
		<TopAppBar bind:this={topAppBar} variant="standard" style="background-color: hsl(0,0%,0%, 0.80);">
			<Row>
				<Section>
					<img src="logo.png" width="52" height="46" style="margin-left: 0px;">
					<Title style="font-size: 1.95rem; padding-left: 6px">
						Explain
					</Title>
					<a href="https://medium.com/mit-soul" target="_blank" style="text-decoration-color: transparent;">
						<Button style="margin-left: 40px;">
							Blog
						</Button>
					</a>
					<a href="https://github.com/verypopularguy/explain" target="_blank" style="text-decoration-color: transparent;">
						<Button style="margin-left: 20px;">
							Github
						</Button>
					</a>
				</Section>

				<Section align="end" toolbar>
					<Button variant="outlined">
						Log in
					</Button>
					<!-- 					
					<Button on:click={() => goto('login')} variant="outlined" style="margin-left: 25px; color: rgb(128, 0, 128); font-size: 1.05rem">
						Sign up
					</Button>	 -->
					<!-- <Button on:click={() => goto('login')}>Sign up</Button> -->
				</Section>
			</Row>
		</TopAppBar>
	</div>
</div>

<AutoAdjust {topAppBar}>
	<div style="display: flex">
		<div class="card-container" style="margin-top: 50px; margin-left: 50px;">
			<Card>
				<TabBar tabs={tabs} let:tab bind:active style="background-color: rgb(238, 238, 238)">
					<!-- Note: the `tab` property is required! -->
					<Tab {tab} minWidth indicatorSpanOnlyContent stacked>
						<Icon class="material-icons">{tab.icon}</Icon>
						<Label>{tab.label}</Label>
					</Tab>
				</TabBar>

				{#if active.label === 'Students'}
					<Content>
						<p style="font-size: 2.5rem; font-family: sans-serif; font-weight: 500">
							Spend less time studying, so you have space for other things in life
						</p>

						<!-- Dropdowns to select the class -->
						<div style="width: 100%">
							<Textfield value='' label="Which class do you want video explanations for?" style="width: 100%">
								
							</Textfield>
						</div>

						<!-- Then the relevant teachers -->
						<div>

						</div>
					</Content>

					<Actions>
						<!-- Previewable -->

						<!-- Add foot-note for 14.01 subsidies -->
						<Button on:click={() => clicked++} color="secondary">
							<Label>Sign up for $30/month</Label>
						</Button>
						<Button on:click={() => clicked++}>
							<!-- <Label>Learn more</Label> -->
						</Button>
					</Actions>
				{:else}
					<Content>
						<p style="font-size: 2.5rem; font-family: sans-serif; font-weight: 500">
							Get paid according to impact, not time spent.
						</p>

						</Content>

					<Actions>
						<Button on:click={() => clicked++} color="secondary">
							<Label>Schedule to interview</Label>
						</Button>
						<Button on:click={() => clicked++}>
							<Label>Learn more</Label>
						</Button>
					</Actions>
				{/if}
			</Card>
		</div>
	</div>


	<div>

	<div style="margin-left: 50px; margin-top: 50px; font-size: 3rem; font-weight: 600; font-family: sans-serif; color: hsl(0,0%,0%, 0.80)">
		How does it work?
	</div>
	<div style="margin-left: 50px; margin-right: 50px;">
		explain.mit.edu = blackboard videos + tutoring
	</div>
	<div style="font-family: sans-serif; margin-left: 50px; margin-right: 50px;">
		There's nothing that can't be understood - if explained right.
		Private tutoring is scarce & expensive (e.g. $50/hour) because the it just doesn't scale well. 
		
		<br><br>
		explain.mit.edu = video explanations + lil' bit of 1:1 help. You'd explanations for concepts you just can't understand, and problems you can't solve.

		This mean you don't need to schedule, and can review the explanation, and it allows the tutor to scale themselves beyond manual labor and provide cheaper rates.
	</div>
	
</div>

	<div style="margin-left: 50px; margin-top: 50px; font-size: 3rem; font-weight: 600; font-family: sans-serif; color: hsl(0,0%,0%, 0.80)">
		Why this exists
	</div>



</AutoAdjust>

<section style="height: 100vh; border-bottom: 1px solid #eee;">
	
	
	
	<div style="height: 84vh; display: flex; justify-content: center; align-items: center;">
		<div style="padding-bottom: 90px;">
			<div style="display: flex; justify-content: center;">
			</div>

			<!-- <iframe 
				src="https://giphy.com/embed/NrtarMHJrLU4sRO5mG" width="300" height="200"
				style="position: static; margin: 0 auto; display:block; margin-top: 20px;" frameBorder="0" class="giphy-embed" allowFullScreen>
			</iframe> -->

			<!-- This flex is just used to center horizontally -->
			<!-- <div style="display: flex; justify-content: center; margin-top: 50px">
				<Button on:click={redirectToExampleClass} variant="outlined" color="orange" style="color: rgb(246,130,13); font-size: 1.05rem">
					Look around
				</Button>	

				{#if !user.phoneNumber}
					<Button on:click={() => goto('login')} variant="outlined" style="margin-left: 25px; color: rgb(128, 0, 128); font-size: 1.05rem">
						Sign up
					</Button>	
				{:else}
					<Button on:click={resumeToMostRecentServer} variant="outlined" style="margin-left: 25px; color: rgb(128, 0, 128); font-size: 1.05rem">
						Resume
					</Button>	
				{/if}
			</div> -->
	</div>
</section>

<script>	
	import { getAuth, RecaptchaVerifier, signInWithPhoneNumber, signInAnonymously } from 'firebase/auth'
	import Button, { Label } from '@smui/button';
	import { onMount, tick, onDestroy } from 'svelte'
	import { goto } from '$app/navigation'
	import { user } from '../store.js'
	import TabBar from '@smui/tab-bar';
	import Tab, { Icon } from '@smui/tab';
	import TopAppBar, { Row, Section, Title, AutoAdjust } from '@smui/top-app-bar';
	import IconButton from '@smui/icon-button';
	import Card, {
    Content,
    PrimaryAction,
    Actions,
    ActionButtons,
    ActionIcons,
  } from '@smui/card';
	import Textfield from '@smui/textfield'

	let topAppBar

	let tabs = [{ label: 'Students', icon: 'hail'}, { label: 'Teachers', icon: 'local_taxi'}]
	let active = tabs[0]

	let foo

	function resumeToMostRecentServer () {
		goto($user.mostRecentClassAndRoomID, { replaceState: true })
	}

	// TO-DO: maybe just redirect
	function redirectToExampleClass () {
		const id = 'Mev5x66mSMEvNz3rijym' // 14.01
    goto(`/${id}/${id}`, { replaceState: true })
	}
</script>

<style>
:global(.room-title input) {
  font-size: 2rem;
}

:global(.question input) {
  color: rgb(19, 145, 230) !important
}

.copied-from-koa {
	font: 34px/1.7 "Lucida Grande", "Lucida Sans Unicode", Helvetica, Arial, Verdana, sans-serif
}

.copied-from-koa-2 {
	font: 17px/1.7 "Lucida Grande", "Lucida Sans Unicode", Helvetica, Arial, Verdana, sans-serif;
	font-weight: 600;
	color: grey;
}

#logo {
	/* NOTE: this font-size is overriden on top so doesn't do anything! */
    font: 300px 'Italiana', sans-serif;
    text-transform: lowercase;
}

.content {
	margin: 0 auto;
	/* min-width: 750px; 
	max-width: 750px; */
	text-align: left;
}

li {
	margin-bottom: 2px;
}

#make-your-own-video {

}

:global(#smui-app),
  :global(body),
  :global(html) {
    display: block !important;
    height: auto !important;
    width: auto !important;
    position: static !important;
  }


	.flexy {
    display: flex;
    flex-wrap: wrap;
  }
 
  .flexor {
    display: inline-flex;
    flex-direction: column;
  }

	.card-container {
		width: 600px;
	}

	.mdc-tab__text-label {
		color: orange;
	}

</style>

<!-- 	<picture>
				<source srcset="svelte-welcome.webp" type="image/webp" />
				<img src="svelte-welcome.png" alt="Welcome" />
			</picture> -->
<!-- 
<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style> -->
