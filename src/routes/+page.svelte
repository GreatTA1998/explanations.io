<TopNavbar>
	<div slot="tab-section" style="margin-left: 24px; margin-right: auto; display: flex; align-items: center; justify-content: space-evenly; color: black; width: 160px; box-sizing: border-box;">
		<div on:click={() => activeTabName = 'Learn'} style="text-align: center; box-sizing: border-box; height: 64px; padding: 8px 6px 4px 6px" class:active-underline-indicator={activeTabName === 'Learn'}>
			<span class="material-symbols-outlined" style="font-size: 26px; color: rgb(30, 30, 30)">
				smart_display
			</span>
			<div style="font-size: 14px; margin-top: -2px;" class:active-bold={activeTabName === 'Learn'}>
				Learn
			</div>
		</div>

		<div on:click={() => activeTabName = 'Teach'} style="text-align: center; height: 64px; box-sizing: border-box; padding: 8px 6px 4px 6px" class:active-underline-indicator={activeTabName === 'Teach'}>
			<span class="material-symbols-outlined" style="font-size: 26px; color: rgb(30, 30, 30)">
				stylus_note
			</span>
			<div style="font-size: 14px; margin-top: -2px;" class:active-bold={activeTabName === 'Teach'}>
				Teach
			</div>
		</div>
	</div>

	<div class="webflow-container" style="padding-top: 2%;">
		{#if activeTabName === 'Learn'}
			<HomePageForLearner/>
		{:else}
			<HomePageForTeacher/>
		{/if}

		{#if activeTabName === 'Learn'}

			{/if}

			{#if activeTabName === 'Teach'}
				<div class="webflow-section">
					<div class="webflow-intro-type">
						This website lets you teach people all over the world with blackboard videos (without additional responsibilities like grading). 

						Just draw and talk on the blackboard - that's it. 
						You can help free viewers and <b style="color: #5d0068">$10/month subscribers</b>.
						<br><br>					
						It's the unique way you explain the subject that matters.

						<!-- 
							The video-format means that, instead of needing to reply quickly to questions over text, you can take your time to deeply
							explain a small number of things during <b style="color: navy">flexible times</b> of your week. 
						-->
					</div>
				</div>

				<div class="webflow-section">
					<div style="text-align: center; font-size: 3rem;">Frequently Asked Questions</div>

					<div style="margin-bottom: 100px;"></div>

					<div style="display: flex; align-items: start; flex-wrap: wrap; justify-content: space-between">
						<div style="font-size: 2rem;">
							What situations is this good for?
						</div>

						<div style="font-size: 1.2rem; min-width: 400px; width: 45vw;">
							<div>
								<b>Youtube project</b> Always considered to start a Youtube Channel / Substack blog. 
								Enjoy explaining things in your field, but don't have the right setup and social environment to get started.
								The student questions here can help guide the initial content you create.
							</div>
							<br>
							<div>
								<b>Light hobby</b> Enjoy answering questions on Stackoverflow and Quora, just want a flexible, low-time commitment hobby to 
								engage with what you know
							</div>
							<br>
							<div>
								<b>Teaching/tutoring as full-time job</b> $10/month subscriptions are much lower initially, but with scale, 
								the earnings could potentially be like that of top earners on Substack, Twitch etc.
							</div>
						</div>
					</div>
				</div>

				<div style="text-align: center">
					<Button on:click={redirectToSignUpPage} color="secondary" variant="raised" style="height: 60px; margin-top: 16px; margin-bottom: 2rem; border-radius: 0px;">
						<Label style="text-transform: none; padding-left: 16px; padding-right: 16px; padding-top: 10px; padding-bottom: 10px; font-size: 1rem; font-weight: 600">
							Create your channel
						</Label>
					</Button>
				</div>
			{/if}

			{#if activeTabName === 'Students deprecate for now'}

			<!-- HOW IT WORKS SECTION-->
			<div bind:clientWidth={w} class="webflow-section">
				<div class="webflow-h1" style="font-weight: 600; color: hsl(0,0%,0%, 0.80); margin-bottom: 10px;">
					How it works
				</div>
				<!-- from how classes normally present the material -->
				<!-- to hear things explained with a different perspective -->
				<div class="webflow-paragraph-1" style="font-family: UberMoveText, system-ui, Helvetica Neue, Helvetica, Arial, sans-serif; font-weight: 400; margin-top: 1px; opacity: 0.8;">
					<!-- Here you can hire classmates, former students & TAs for pset help; because video help is efficient, 
					it also frees up time for your tutor to help you until nothing is left unexplained.  -->
					<br>
					<br>

					<!-- Alternative: It's tutoring that uses helper videos whenever efficient, and personal one-on-one time for everything else. -->
				</div>

				<!-- <div style="font-family: UberMoveText, system-ui, Helvetica Neue, Helvetica, Arial, sans-serif; font-weight: 400; font-size: 1.8rem; margin-top: 1px; margin-bottom: 100px; opacity: 0.8;">
		
				</div> -->
				<HowItWorksStep
					title="Step 1"
					subtitle="Request videos for anything you want"
					description="Ask about pset questions, important concepts, anything."
				>					
					<img src="https://i.imgur.com/TYkGFHO.gif" width="{Math.min(w, 600)}" height="{Math.min(w, 600) * 1/5}" style="margin-top: 50px;">

				</HowItWorksStep>

				<HowItWorksStep
					title="Step 2"
					subtitle="Your helper responds"
					description="Reponse time differs depending on the arrangement set by you and your helper. It will also depend on the situation e.g. faster response when there's an upcoming pset deadline."
				>
					<div style="display: flex; justify-content: space-evenly; justify-content: space-between">
						<div style="width: 90%; height: 70%; margin-top: 50px;">
							<RenderlessListenToBoard let:boardDoc={boardDoc} dbPath={'classes/Mev5x66mSMEvNz3rijym/blackboards/B0npFZMsV3PMAxapkGy1'} >
								<ReusableDoodleVideo
									{boardDoc}
									canvasWidth={Math.min(w, 600)}
									canvasHeight={Math.min(w, 600) * 3/4}
									boardDbPath={'classes/Mev5x66mSMEvNz3rijym/blackboards/B0npFZMsV3PMAxapkGy1'}
								/>
							</RenderlessListenToBoard>
						</div>
					</div>
				</HowItWorksStep>

				<HowItWorksStep
					title="Step 3"
					subtitle="Ask further questions about the video using comments"
					description="Every video has a comments section. If you and your helper are 
					on the comments section at the same time, you can instead choose to
					join the voice chat and talk over any shared board"
				>
					<img src="https://i.imgur.com/8tnRfRB.gif" height="{Math.min(0.5 * w, 0.5 * 600) * 4/10}" width="{Math.min(0.5 * w, 0.5 * 600)}" style="margin-top: 50px;">
				</HowItWorksStep>

				<HowItWorksStep
					title="Step 4"
					subtitle="Setup a regular upload-schedule"
					description="Suppose you start 18.06 psets every Friday, because it's due Sunday.
					Knowing this, your tutor can regularly upload videos before Friday WITHOUT you even having to ask questions, and reactively upload more videos and reply to comments 
					over Saturday and Sunday."
				>					
				</HowItWorksStep>
			</div>
		{:else if activeTabName === 'Teach' && false}
			<div class="webflow-section">
				<div class="webflow-intro-type">
					Just draw & talk on blackboards directly - videos will upload within seconds.
					Blackboard videos are lightweight, easily re-organizable and (soon to be) editable even after it's uploaded.
				</div>
			</div>

			<div class="webflow-section">
				<HowItWorksStep
					title="Step 1"
					subtitle="Setup a shop with your example videos"
					description="Putting up examples of how you explain things give potential subscribers a low pressure way to get to know your style of teaching and
					whether it will be helpful for them. They do *not* need to be neat and well-edited, you can just talk and draw as if explaining to someone beside you casually.
					"
				>
					<iframe 
						src="https://giphy.com/embed/NrtarMHJrLU4sRO5mG" width="{Math.min(w, 600)}" height="{0.6 * Math.min(w, 600)}"
						style="display:block; margin-top: 20px;" frameBorder="0" class="giphy-embed" allowFullScreen>
					</iframe> 
				</HowItWorksStep>

				<HowItWorksStep
					title="Step 2"
					subtitle="Agree on a regular upload schedule with your earliest subscribers"
					description="For example, you and your subscribers could agree to have pre-uploaded videos every Friday
					and reactively upload videos and reply to comments as needed until the deadline on Sunday."
				>
			
				</HowItWorksStep>

				<HowItWorksStep
					title="Step 3"
					subtitle="Adjust as you get more students"
					description="
					Different students have different needs, so it can be challenging to ensure every student gets what they need.
					But it could also be easy, with a little experimentation. For example, their common concerns about a pset problem, or a fundamental concept 
					is often addressable with a recorded explanation. 

					You don't need 1 million viewers to earn side-income - instead, just an engaged community of 5 - 20 subscribers paying affordable prices. 
					"
				>
				</HowItWorksStep>
			</div>
		{/if}
	</TopNavbar>

<script>	
	import RenderlessListenToBoard from '$lib/RenderlessListenToBoard.svelte'
	import ReusableDoodleVideo from '$lib/ReusableDoodleVideo.svelte'
	import HowItWorksStep from '$lib/HowItWorksStep.svelte';
	import Button, { Label } from '@smui/button';
	import { goto } from '$app/navigation'
	import { onMount, tick, onDestroy } from 'svelte'
	import { mixpanelLibrary } from '/src/mixpanel.js'
	import TopNavbar from '$lib/TopNavbar.svelte'
	import HomePageForLearner from '$lib/HomePageForLearner.svelte'
	import HomePageForTeacher from '$lib/HomePageForTeacher.svelte'

	let activeTabName = 'Learn'
	let w

	onMount(() => {
		mixpanelLibrary.track('Home page visited')
	})

	function redirectToSignUpPage () {
		goto('/servers')
	}
</script>

<style lang="scss">
	strong {
		color: rgb(30, 30, 30)	
	}

	.active-bold {
		font-weight: 600;
	}

	.webflow-container {
		width: 90%; /* 90% */
		// max-width: 1400px; /* webflow's value is 1280, partly because their scrollbar takes up width */
		margin-right: auto;
		margin-left: auto; 

		box-sizing: border-box;

		// additional properties
		margin-top: 20px;

		background-color: transparent;
	}
		
	.active-underline-indicator {
		border-bottom: 2px solid #F7C686;
	}

	.webflow-h1 {
		font-size: 4rem;
	}

	@media screen and (max-width: 767px) {
		.webflow-h1 {
			font-size: 3rem;
	  }	
	}

	@media screen and (max-width: 479px) {
		.webflow-h1 {
			font-size: 2.6rem;
		}
	}


.image-gallery-container {
	margin-top: 6%; 
	margin-bottom: 20%; // was 24%
	// margin-left: 2%;
}

@media screen and (max-width: 991px) {
	.image-gallery-container {
		margin-top: 0% !important;
		margin-bottom: 8% !important;
	}
}

.webflow-section {
	padding-top: 8%; 
	padding-bottom: 8%;
}

.header-title {
	// max-width: 52vw; /* webflow is 52vw, but explanations is a long word */
	margin-top: 0; 
	margin-bottom: 0;
	font-size: 4vw; /* was 6vw */
	/* line-height: 1.1; /* webflow's is 1.0, but squishes the text on Explain, looks good on Webflow though */
	font-weight: 500;

	/* This turns to prevent <p> from taking additional height for no reason */
	margin-top: 0;
	margin-bottom: 0;

	// BELOW ARE CSS ATTRIBUTES I PUT IN ADDITION TO BASE ATTRIBUTES
	box-sizing: border-box;

	/* The -0.02em is the secret sauce for making sans-serif fonts look good **/
	letter-spacing: -.02em; 
	font-weight: 600; 

	color: #1b1b1b; // exact complement of Webflow's contrast black/white contrast
	line-height: 1.0; // used to be 1.25 but GF suggests otherwise
}

// As soon as we achieve minimum width of 1280,
// the layout will make use of horizontal space 
@media only screen and (min-width: 1280px) {
	.header-title {
		font-size: 5.6vw; // webflow's original is 7rem
		max-width: calc(100vw - 380px);
	}
	.header-subtitle {
		max-width: calc(100vw - 480px);
	}
	.webflow-container {
		width: 92%;
	}
}

@media only screen and (max-width: 991px) {
	.header-title {
		max-width: 85vw;
		font-size: 4vw;
	}
	.webflow-container {
		width: 85%;
	}
}

.call-to-action-button {
	height: 4.2vw; 
	margin-top: 0.8vw; 
	margin-bottom: 0.8vw;
}

@media only screen and (max-width: 991px) {
	.call-to-action-button {
		height: 60px;
		margin-top: 16px;
		margin-bottom: 2rem;
	}	
}

.webflow-intro-type {
	// font-family: sans-serif; 
	font-size: 2.4rem; // used to be 5 rem
 	// line-height: 1.125; // used to be 1.25 but you know what happened last time
	font-weight: 500;
	// letter-spacing: -.02em;
	max-width: 100%;
}

@media screen and (max-width: 991px) {
	.webflow-intro-type {
		font-size: 2.6rem;
	}
}

@media screen and (max-width: 479px) {
	.webflow-intro-type {
		font-size: 1.6rem;
	}
}

.header-flex {
	display: flex;
	margin-top: 2%;
	margin-bottom: 40px;
	-webkit-box-pack: justify;
	-ms-flex-pack: justify;
	/* -webkit-justify-content: space-between;
	// justify-content: space-between; */
	justify-content: space-between;
	align-items: center;

	flex-wrap: wrap;
	

	// additional properties: 
	// margin-top: 60px;
}

@media screen and (max-width: 767px) {
	.header-flex {
		margin-top: 40px;
	}
}

@media screen and (max-width: 479px) {
	.header-flex {
		margin-bottom: 0px;
	}
}

.header-subcopy {
	max-width: 20vw;
	margin-top: 0;
	margin-bottom: 0.4em;
	font-size: 1.2rem;
	line-height: 1.5;

	// ADDITIONAL PROPERTIES I ADDED ON TOP OF WEBFLOW
	font-family: sans-serif;
}

@media screen and (max-width: 991px) {
.header-subcopy {
		max-width: 55vw;
		font-size: 1.3rem;
	}
}

@media screen and (max-width: 479px) {
	.header-subcopy {
		max-width: 90vw;
		font-size: 1rem;
	}
}

.header-subcopy-wrapper {
	// margin-left: 5vw;
	margin-left: 0.5vw;
	width: 90%;
	max-width: 280px; 

	// additional attributes
	margin-right: 0px;
	display: flex; 
	flex-direction: column;
	// justify-content: flex-end; 
	// align-items: flex-start;

	-webkit-flex-direction: column; 
	-webkit-align-items: flex-start;
}


@media screen and (max-width: 991px) {
.header-subcopy-wrapper {
    max-width: 700px;
    margin-top: 30px;
    margin-left: 0;
    font-size: 1.2rem;
	}
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


	li {
		margin-bottom: 24px;
	}
</style>
