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
	<div style="display: flex; justify-content: center">
		<div class="card-container">
			<Card>
				<TabBar tabs={tabs} let:tab bind:active style="background-color: rgb(238, 238, 238)" variant="dense">
					<!-- Note: the `tab` property is required! -->
					<!-- stacked -->
					<Tab {tab} minWidth indicatorSpanOnlyContent>
						<!-- <Icon class="material-icons">{tab.icon}</Icon> -->
						<Label>{tab.label}</Label>
					</Tab>
				</TabBar>

				{#if active.label === 'Students'}
					<Content style="padding-left: 60px; padding-right: 60px;">
						<p style="font-size: 6rem; font-family: sans-serif; font-weight: 600; color: hsl(0,0%,0%, 0.90); margin-bottom: 110px; margin-top: 60px">
							Life-saving explanations <br> without the scheduling, walking & waiting
						</p>
						<p style="font-size: 1.8rem; font-family: sans-serif; font-weight: 500; color: hsl(0,0%,0%, 0.70); text-align: right; margin-right: 110px;">
							
						</p>

						<div style="display: flex;  align-items: end">


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

								<!-- TO-DO: say something e.g "is this for me" for oversubscribed classes with long Office Hour queues -->
								<div style="margin-left: auto; margin-right: 120px; display: flex; justify-content: flex-end; margin-bottom: 180px">
									<div>
										
									</div>
									<Button on:click={() => clicked++} color="secondary" variant="raised" style="height: 60px">
										<Label style="padding-left: 20px; padding-right: 20px; padding-top: 50px; padding-bottom: 50px; font-size: 1.2rem; border-radius: 6px;">
											See available classes
										</Label>
									</Button>
								</div>
						</div>

						<!-- Add foot-note for 14.01 subsidies -->
						<!-- <div style="float: right; margin-right: 100px;"> 
							<Button on:click={() => clicked++} color="secondary" variant="raised" style="height: 60px">
								<Label style="padding-left: 20px; padding-right: 20px; padding-top: 50px; padding-bottom: 50px; font-size: 1.2rem; border-radius: 6px;">
									See available classes
								</Label>
							</Button>
						</div> -->

						<!-- <div class="card-container">
							<Card> -->
								<!-- TO-DO: add a divider, maybe just use the card border -->
									<Content style="padding-left: 0px; padding-right: 0px; margin-top: 160px; border-top: 1px solid #eee;">
										<p style="font-size: 4rem; font-family: sans-serif; font-weight: 600; color: hsl(0,0%,0%, 0.80); margin-bottom: 10px;">
											How it works
										</p>
										
										<div style="font-family: UberMoveText, system-ui, Helvetica Neue, Helvetica, Arial, sans-serif; font-weight: 400; font-size: 2rem; margin-top: 1px; opacity: 0.8;">
											Inspired by KhanAcademy, we hire ex-TAs to explain hard things with easy-to-understand videos. 
											<br>
											Because the videos can efficiently help n students at no additional effort, 
											it is then possible for the tutors to address the remaining needs of every student <i>individually</i>, until nothing is left unexplained.
											<!-- It's tutoring that uses helper videos whenever efficient, and personal one-on-one time for everything else. -->
										</div>
				
										<div style="font-family: UberMoveText, system-ui, Helvetica Neue, Helvetica, Arial, sans-serif; font-weight: 400; font-size: 1.8rem; margin-top: 1px; margin-bottom: 100px; opacity: 0.8;">
								
										</div>
							

										
										<!-- <div class="step-container" style="padding-bottom: 84px;">
											<div style="width: 800px;">
												<div class="step-one-two-three-font">
													Step 0
												</div>
												<div style="margin-bottom: 12px; font-family: sans-serif; font-weight: 600; font-size: 1.7rem;">
													Pick the right tutor
												</div>
												<div style="font-family: UberMoveText, system-ui, Helvetica Neue, Helvetica, Arial, sans-serif; font-weight: 400; font-size: 1.5rem">
													We hire beavers who make things easy-to-understand. But you want to see if their explanation style suits you.
													Read their blog, their pedagogical beliefs.
												</div>
											</div>
										</div>									 -->

										<div class="step-container" style="margin-bottom: 160px;">
											<div style="width: 800px;">
												<div class="step-one-two-three-font">
													Step 1
												</div>
												<div class="step-title-font-styles">
													Type your question
												</div>
												<div class="step-description-font-styles">
													This is usually a pset problem "How do you setup pset 3b finding a firm's cost function"
													or a concept " can we review income & substitution effects?"
												</div>
											</div>
										</div>
				
										<div class="step-container" style="margin-bottom: 160px;">
											<div style="display: flex">
												<div>
													<div class="step-one-two-three-font">
														Step 2
													</div>
													<div class="step-title-font-styles">
														Your tutor will reply with a blackboard video
													</div>
													<div class="step-description-font-styles">
														How long will it take?

														<br><br>
														The rider enters their destination into the “Where to?” box; reviews each ride option for vehicle size, price, and estimated dropoff time; chooses the desired option; then confirms the pickup.
													</div>
												</div>

												<div style="display: flex; justify-content: space-evenly">
													<!-- position: static; margin: 0 auto;  -->
													<!-- <iframe 
														src="https://giphy.com/embed/NrtarMHJrLU4sRO5mG" width="400" height="450"
														style="display:block; margin-top: 20px;" frameBorder="0" class="giphy-embed" allowFullScreen>
													</iframe> -->

													<div style="width: 90%; height: 70%;">
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
											</div>
										</div>
				
										<div class="step-container" style="margin-bottom: 120px">
											<div class="step-one-two-three-font">
												Step 3
											</div>
											<div class="step-title-font-styles">
												Follow-up over voice chat
											</div>
											<div class="step-description-font-styles">
												You can ask follow-up questions via the comments section on the video
												<br><br>
												Even better, if both of you are active on the website at the same time, so you can just quickly voice chat. 
												This happens more often than you'd think, because you could be watching a video, writing a question, replying to a video comment, writing a comment,
												all of which you'll see each others names as being active in the server. 
										
												<!-- <br><br>
												In any case, there's always still the old-fashioned way of scheduling a time with your tutor via email. -->
											</div>
										</div>
				
										<div style="display: flex; align-content: center;">
											<div>
												<div class="step-one-two-three-font">
													Step 4
												</div>
												<div class="step-title-font-styles">
													Revisit explanations anytime
												</div>
												<div class="step-description-font-styles">
													This means when other students ask questions, you benefit from their resultant videos.
													The server is free to access after the semester finishes.
												</div>
											</div>

											<div>
												<Button on:click={() => clicked++} color="primary" variant="raised" class="button-shaped-round">
													Explore the 14.01 server
													<!-- <Label>Learn more</Label> -->
												</Button>
											</div>
										</div>
									</Content>
				
									<!-- <Actions>
										<Button on:click={() => clicked++} color="secondary">
										</Button>
										<Button on:click={() => clicked++}>
										</Button>
									</Actions> -->
						<div>

						</div>
					</Content>

					<Actions style="padding-left: 40px; padding-bottom: 15px;">
						<!-- Previewable -->

						<!-- Add foot-note for 14.01 subsidies -->
						<!-- <Button on:click={() => clicked++} color="secondary" variant="raised">
							<Label style="padding-left: 15px; padding-right: 15px; padding-top: 5px; padding-bottom: 5px; font-size: 1rem">
								Sign up for $10/week
							</Label>
						</Button> -->
					</Actions>
				{:else}
					<Content>
						<!-- font-size: 3.5rem; font-family: sans-serif; font-weight: 600; color: hsl(0,0%,0%, 0.80); margin-bottom: 20px; margin-top: 30px" -->
						<p style="font-size: 3.5rem; font-family: sans-serif; font-weight: 600; color: hsl(0,0%,0%, 0.80); margin-bottom: 20px; margin-top: 30px">
							Earn by impact, not time spent
						</p>
						<p>3-10 secs. upload time for 5 min. blackboard videos</p>

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


			<div style="width: 100%;">
				<Card>
					<Content style="padding-left: 60px; padding-right: 60px;">
						<p style="font-size: 4rem; font-family: sans-serif; font-weight: 600; color: hsl(0,0%,0%, 0.80);">
							Recent blogs
						</p>

						<div class="one-blog-container" style="display: flex;">
							<iframe width="700" height="480" src="https://www.youtube.com/embed/PVBRjv9Sdz0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
							<div style="width: 900px; margin-left: 50px;">
								<!-- blog title -->
								<h1 style="font-size: 2rem; margin-top: 0; color: hsl(0,0%,0%, 0.80)" class="step-title-font-styles">
									Teaching incentives at a research university
								</h1>
								<div style="margin-bottom: 20px; opacity: 0.8" class="step-description-font-styles">
									"As a tenure-track professor, teaching well won't get respect from your peers,
									nor will it help with promotion, or funding. Teaching simply isn't the job what you were hired to do"
								</div>
								<!-- blog preview -->
							</div>
						</div>
				
						<div class="one-blog-container" style="display: flex;padding-bottom: 0; margin-bottom: 10px">
							<iframe width="700" height="480" src="https://www.youtube.com/embed/QNDT5hhEhYU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
							
							<div style="width: 900px; margin-left: 50px;">
								<h1 style="font-size: 2rem; margin-top: 0; color: hsl(0,0%,0%, 0.80)" class="step-title-font-styles">
									Contrarian ideas in 6.006
								</h1>
								<div style="margin-bottom: 20px; opacity: 0.8" class="step-description-font-styles">
									I just think I would like to be at a place where everyone gets an A, when they take off, like double O six or six. Because that means we're doing I mean, that's better for everyone, right? Like, I don't want to lower the standard. Right? I want people to understand it. But if we can do a better job of getting people to understand it quicker, and better, and you that's a win, because then they can move on to more complicated things, and be in a better situation.
								</div>					
							</div>	
							<!-- <div style="font-family: sans-serif; margin-top: 50px; font-size: 0.8rem;">These video-essays were edited with permission from faculty and students
								to open a discussion about counterintuitive ideas about education, and are not endorsements of Explain as a paid service. 
								It's part of Students for Open & Universal Learning (SOUL)
							</div> -->
						</div>
					</Content>
				</Card>
			</div>
		<!-- </div> -->
		<!-- End of flexbox -->
	</div>
</AutoAdjust>

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

	canvasWidth.set(700)
	canvasHeight.set(460)

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
.step-one-two-three-font {
	color: #000000; opacity: 0.5; font-family: sans-serif; margin-bottom: 12px; font-size: 1.5rem;
}

.step-title-font-styles {
	margin-bottom: 12px; font-family: sans-serif; font-weight: 600; font-size: 1.7rem
}

.step-description-font-styles {
	font-family: UberMoveText, system-ui, Helvetica Neue, Helvetica, Arial, sans-serif;; font-weight: 400; font-size: 1.5rem;
}

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
		margin-top: 0px;
		width: 100%;
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
