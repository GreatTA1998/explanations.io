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
	<div style="display: flex; justify-content: space-evenly;">
		<div class="card-container">
			<Card>
				<TabBar tabs={tabs} let:tab bind:active style="background-color: rgb(238, 238, 238)">
					<!-- Note: the `tab` property is required! -->
					<Tab {tab} minWidth indicatorSpanOnlyContent stacked>
						<Icon class="material-icons">{tab.icon}</Icon>
						<Label>{tab.label}</Label>
					</Tab>
				</TabBar>

				{#if active.label === 'Students'}
					<Content style="padding-left: 40px; padding-right: 40px;">
						<p style="font-size: 3.5rem; font-family: sans-serif; font-weight: 600; color: hsl(0,0%,0%, 0.80); margin-bottom: 20px; margin-top: 30px">
							KhanAcademy-style tutoring 
						</p>
						<p style="font-size: 1.5rem; font-family: sans-serif; font-weight: 600; color: hsl(0,0%,0%, 0.80);">
							Life-saving explanations - without the scheduling, walking and waiting
						</p>

						<!-- Dropdowns to select the class -->
						<div style="width: 100%">
							<Textfield value='14.01' label="Enter a class e.g. 14.01" style="width: 100%">
								
							</Textfield>
						</div>

						<div style="width: 400px; height: 450px;">
							<RenderlessListenToBoard dbPath={boardsDbPath + boardID} let:boardDoc={boardDoc}>
								{#if boardDoc}
									<RenderlessFetchStrokes dbPath={boardsDbPath + boardID}
										let:fetchStrokes={fetchStrokes}
										autoFetchStrokes
										let:strokesArray={strokesArray}
									>
										<div use:lazyCallable={fetchStrokes} style={`width: ${$canvasWidth}px; height: ${$canvasHeight + 40}px; position: relative`}>
											<DoodleVideo 
												{strokesArray} 
												audioDownloadURL={boardDoc.audioDownloadURL}
												backgroundImageDownloadURL={boardDoc.backgroundImageDownloadURL}
											> 
												<Button on:click={() => $drawerWidth === 1 ? drawerWidth.set(260) : drawerWidth.set(1)} style="background-color: rgb(90 90 90 / 100%); margin-left: 8px;">
													<span class="material-icons" style="color: white;">
														fullscreen
													</span>
												</Button>
											</DoodleVideo>
										</div>
									</RenderlessFetchStrokes>
								{/if}
							</RenderlessListenToBoard>
						</div>
						<!-- Then the relevant teachers -->
						<div>

						</div>
					</Content>

					<Actions style="padding-left: 40px; padding-bottom: 15px;">
						<!-- Previewable -->

						<!-- Add foot-note for 14.01 subsidies -->
						<Button on:click={() => clicked++} color="secondary" variant="raised">
							<Label style="padding-left: 15px; padding-right: 15px; padding-top: 5px; padding-bottom: 5px; font-size: 1rem">
								Sign up for $10/week
							</Label>
						</Button>
						<Button on:click={() => clicked++} color="primary">
							Explore last term's videos
							<!-- <Label>Learn more</Label> -->
						</Button>
					</Actions>
				{:else}
					<Content>
						<!-- font-size: 3.5rem; font-family: sans-serif; font-weight: 600; color: hsl(0,0%,0%, 0.80); margin-bottom: 20px; margin-top: 30px" -->
						<p style="font-size: 3.5rem; font-family: sans-serif; font-weight: 600; color: hsl(0,0%,0%, 0.80); margin-bottom: 20px; margin-top: 30px">
							Earn by impact, not time spent
						</p>

						<!-- <p>
							Wage is O(n)
							For example: 
							  - 10 students signed up, each for $10/week
								- You receive $100/week
						</p> -->

						</Content>

					<Actions>
						<Button on:click={() => clicked++} color="secondary">
							<Label>Schedule to interview</Label>
						</Button>
						<!-- <Button on:click={() => clicked++}>
							<Label>Learn more</Label>
						</Button> -->
					</Actions>
				{/if}
			</Card>

			<div style="width: 100%px; margin-top: 60px;">
				<Card>
					<Content style="padding-left: 40px; padding-right: 40px;">
						<p style="font-size: 2.5rem; font-family: sans-serif; font-weight: 600; color: hsl(0,0%,0%, 0.80);">
							Recent blogs
						</p>

						<div class="one-blog-container">
							<div style="font-family: sans-serif; margin-bottom: 20px;">
								The conflict between teaching and research: a story of money and opportunity
							</div>
							<iframe width="560" height="315" src="https://www.youtube.com/embed/PVBRjv9Sdz0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
						</div>
				
						<div class="one-blog-container" style="padding-bottom: 0; margin-bottom: 10px">
							<div style="font-family: sans-serif; margin-bottom: 20px;">
								The value of minimizing the amount of material students learn
							</div>
							<iframe width="560" height="315" src="https://www.youtube.com/embed/QNDT5hhEhYU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
							
							<div style="font-family: sans-serif; margin-top: 50px; font-size: 0.8rem;">These video-essays were edited with permission from faculty and students
								to open a discussion about counterintuitive ideas about education, and are not endorsements of Explain as a paid service. 
								It's part of Students for Open & Universal Learning (SOUL)
							</div>
						</div>
					</Content>
				</Card>
			</div>
		</div>

		<div class="card-container">
			<Card>
					<Content style="padding-left: 40px; padding-right: 40px;">
						<p style="font-size: 2.5rem; font-family: sans-serif; font-weight: 600; color: hsl(0,0%,0%, 0.80);">
							How it works
						</p>

						<div class="step-container" style="padding-bottom: 64px;">
							<div style="color: #000000; opacity: 0.5; font-family: sans-serif; margin-bottom: 12px;">
								Step 1
							</div>
							<div style="margin-bottom: 12px; font-family: sans-serif; font-weight: 600; font-size: 1.1rem;">
								A student opens the website
							</div>
							<div style="font-family: UberMoveText, system-ui, Helvetica Neue, Helvetica, Arial, sans-serif; font-weight: 400;">
								The rider enters their destination into the “Where to?” box; reviews each ride option for vehicle size, price, and estimated dropoff time; chooses the desired option; then confirms the pickup.
							</div>
						</div>

						<div class="step-container" style="padding-bottom: 64px;">
							<div style="color: #000000; opacity: 0.5; font-family: sans-serif; margin-bottom: 12px;">
								Step 2
							</div>
							<div style="margin-bottom: 12px; font-family: sans-serif; font-weight: 600; font-size: 1.1rem;">
								The tutor records a blackboard video with tablet and stylus
							</div>
							<div style="font-family: UberMoveText, system-ui, Helvetica Neue, Helvetica, Arial, sans-serif;; font-weight: 400;">
								The rider enters their destination into the “Where to?” box; reviews each ride option for vehicle size, price, and estimated dropoff time; chooses the desired option; then confirms the pickup.
							</div>
							<iframe 
								src="https://giphy.com/embed/NrtarMHJrLU4sRO5mG" width="300" height="200"
								style="position: static; margin: 0 auto; display:block; margin-top: 20px;" frameBorder="0" class="giphy-embed" allowFullScreen>
							</iframe>
						</div>

						<div class="step-container" style="padding-bottom: 64px">
							<div style="color: #000000; opacity: 0.5; font-family: sans-serif; margin-bottom: 12px;">
								Step 3
							</div>
							<div style="margin-bottom: 12px; font-family: sans-serif; font-weight: 600; font-size: 1.1rem;">
								They can follow-up over voice chat + live blackboard to resolve remaining questions
							</div>
							<div style="font-family: UberMoveText, system-ui, Helvetica Neue, Helvetica, Arial, sans-serif;; font-weight: 400;">
								You can ask follow-up questions via the comments section on the video
								<br><br>
								Even better, if both of you are active on the website at the same time, so you can just quickly voice chat. 
								This happens more often than you'd think, because you could be watching a video, writing a question, replying to a video comment, writing a comment,
								all of which you'll see each others names as being active in the server. 
						
								<br><br>
								In any case, there's always still the old-fashioned way of scheduling a time with your tutor via email.
							</div>
						</div>

						<div style="color: #000000; opacity: 0.5; font-family: sans-serif; margin-bottom: 12px;">
							Step 4
						</div>
						<div style="margin-bottom: 12px; font-family: sans-serif; font-weight: 600; font-size: 1.1rem;">
							At any time, students can review explanations that accumulated in the server
						</div>
						<div style="font-family: UberMoveText, system-ui, Helvetica Neue, Helvetica, Arial, sans-serif;; font-weight: 400;">
							This means when other students ask questions, you benefit from their resultant videos.
						</div>
					</Content>

					<Actions>
						<!-- Previewable -->

						<!-- Add foot-note for 14.01 subsidies -->
						<Button on:click={() => clicked++} color="secondary">
						</Button>
						<Button on:click={() => clicked++}>
						</Button>
					</Actions>
			</Card>
		</div>
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
	import { user, canvasWidth, canvasHeight, drawerWidth, adminUIDs } from '../store.js'
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
	import DoodleVideo from '$lib/DoodleVideo.svelte'
	import RenderlessFetchStrokes from '$lib/RenderlessFetchStrokes.svelte'
	import RenderlessListenToBoard from '$lib/RenderlessListenToBoard.svelte'
	import { lazyCallable } from '../helpers/actions.js'

	let boardsDbPath = `classes/Mev5x66mSMEvNz3rijym/blackboards/`
	let boardID = 'B0npFZMsV3PMAxapkGy1'

	let topAppBar

	let tabs = [{ label: 'Students', icon: 'hail'}, { label: 'Tutors', icon: 'local_taxi'}]
	let active = tabs[0]

	let foo

	// quickfix:

	canvasWidth.set(558)
	canvasHeight.set(380)

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

.one-blog-container {
	margin-bottom: 50px;
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
		margin-top: 60px;
		width: 40%;
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
