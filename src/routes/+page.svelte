<div class="flexy">
	<div class="top-app-bar-container flexor">
		<TopAppBar bind:this={topAppBar} variant="standard" style="background-color: hsl(0,0%,0%, 0.80);">
			<Row>
				<Section>
					<Title style="font-size: 1.95rem; padding-left: 6px">
						Explain
					</Title>

					<a href="https://eltonlin.substack.com/archive" target="_blank" 
						style="margin-left: 40px; text-decoration-color: transparent;"
					>
						<Button
							class="button-shaped-round"
						>
							<Label>blog</Label>
							<Icon class="material-icons">auto_stories</Icon>
						</Button>
					</a>

					<a href="https://github.com/greatTA1998/explain" target="_blank" 
						style="margin-left: 20px; text-decoration-color: transparent;"
					>
						<Button
							class="button-shaped-round"
						>
							<Label>github</Label>
							<Icon class="material-icons">terminal</Icon>
						</Button>
					</a>
				</Section>

				<Section align="end" toolbar>
					<!-- <Button on:click={() => alert('You can now log-in in through the class server')} variant="outlined">
						Log in
					</Button> -->
				</Section>
			</Row>
		</TopAppBar>
	</div>
</div>

<AutoAdjust {topAppBar}>
	<TopBannerWarnExperimental/>
	<TabBar tabs={tabs} let:tab bind:active style="color: orange;">
		<Tab {tab} stacked minWidth indicatorSpanOnlyContent style="color: orange;">
			<Icon class="material-icons" style="color: rgba(0, 0, 0, 0.9); padding-top: 25px;">{tab.icon}</Icon>
			<Label style="color: rgba(0, 0, 0, 0.9); margin-top: 5px; padding-bottom: 30px;">{tab.label}</Label>
		</Tab>
	</TabBar>
	
	<div class="webflow-container">
		{#if active.label === 'Learn'}
			<div class="header-flex">
				<p class="header-title">
					<!-- Rediscover that learning can be enjoyable if you understand it -->
					Learn efficiently.
				</p>
				<div class="header-subcopy-wrapper">
					<!-- Sometimes 5-minute videos can save a semester of misunderstandings -->
					<div class="header-subcopy">
						Ask former TAs, students & classmates to explain things using <u>blackboard videos</u>
					</div>
					<Button on:click={redirectToSignUpPage} color="secondary" variant="raised" style="height: 60px; margin-top: 16px; margin-bottom: 2rem; border-radius: 0px;">
						<Label style="text-transform: none; padding-left: 16px; padding-right: 16px; padding-top: 10px; padding-bottom: 10px; font-size: 1rem; font-weight: 600">
							Join class servers
						</Label>
					</Button>
				</div>
			</div>

			<!-- ROTATING GALLERY -->
			<div class="image-gallery-container">
				<ImageGallery/>
			</div>
		{:else}
			<div class="header-flex">
				<p class="header-title">Explain things you enjoy</p>	
				<div class="header-subcopy-wrapper">
					<div class="header-subcopy">
						Teach what you love, supported by your subscribers
					</div>
				
					<Button on:click={redirectToSignUpPage} color="secondary" variant="raised" style="height: 60px; margin-top: 16px; margin-bottom: 2rem; border-radius: 0px;">
						<Label style="text-transform: none; padding-left: 16px; padding-right: 16px; padding-top: 10px; padding-bottom: 10px; font-size: 1rem; font-weight: 600">
							Create your channel
						</Label>
					</Button>
				</div>
			</div>			

			<div style="position: relative; width: 600px; height: 500px;">
				<Blackboard canvasWidth={600} canvasHeight={500} strokesArray={[]}/>
			</div>
		{/if}

			{#if active.label === 'Learn'}
				<div class="webflow-section">
					<div class="webflow-intro-type">
						<!-- Office Hours, Piazza and departmental tutoring are imperfect because of limited availability, long wait-times, and weak incentives to innovate.
						<br><br> -->
						<b style="color: navy">beavers.app</b> is like Youtube for MIT classes, where everyone can request blackboard videos
						that properly & deeply resolves your question.

						<br><br>
						If everyone is too busy to help out, you can pay $10/month to subscribe to teachers who are committed 
						to help you through the hardest weeks. 
					</div>
				</div>

				<div style="text-align: center">
					<Button on:click={redirectToSignUpPage} color="secondary" variant="raised" style="height: 60px; margin-top: 16px; margin-bottom: 2rem; border-radius: 0px;">
						<Label style="text-transform: none; padding-left: 16px; padding-right: 16px; padding-top: 10px; padding-bottom: 10px; font-size: 1rem; font-weight: 600">
							Join class servers
						</Label>
					</Button>
				</div>

				<div class="webflow-section">
					Frequently Asked Questions

					<ol>
						<li>What situations is this good for?</li>
						<div>
							course 6: agonizing wait-times in Office hours because the student size grew by 100%, the staff size only 10%. 
						</div>
						<div>
							ASEs: no Office Hours and Piazza available
						</div>
						<div>
							Classes in general: as an affordable, flexible resource for getting proper help
							used in conjunction with Office Hours and Piazza
						</div>

						<br>

						<li>Why does it cost money?</li>

						<div>
							I'm the founder (6-14, '20), and tried for 4 years to work with departments. It's hard because admin doesn't believe 
							it's necessary to introduce a new resource when there is already Office Hours. But I as a student know the actual experience on the day-to-day, and I've been throught the trenches. 

							I'll still try to collaborate with the departments to bring it for free, but until then, the subscriptions directly supports the former TAs. 
							In fact, this skin-in-the-game also brings benefits - people feel valued for helping others on this platform. The money isn't much, it's more the willingness to pay that says a lot. 
						</div>
					</ol>
				</div>

			{/if}

			{#if active.label === 'Teach'}
				<div class="webflow-section">
					<div class="webflow-intro-type">
						<b style="color: navy">beavers.app</b> provides infrastructure so you can easily record blackboard explanations for free viewers and $10/month subscribers

						<br><br>
						The video-format means that, instead of needing to reply quickly to shallow questions over text, you can take your time to deeply
						explain a small number of things during <u>flexible times</u> of your week.

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

			{#if active.label === 'Students deprecate for now'}

			<!-- HOW IT WORKS SECTION-->
			<div bind:clientWidth={w} class="webflow-section">
				<div class="webflow-h1" style="font-family: sans-serif; font-weight: 600; color: hsl(0,0%,0%, 0.80); margin-bottom: 10px;">
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
		{:else if active.label === 'helpers'}
			<div class="webflow-section">
				<div class="webflow-intro-type">
					Just draw & talk on blackboards directly - videos will upload within seconds.
					Blackboard videos are lightweight, easily re-organizable and (soon to be) editable even after it's uploaded.
				</div>
			</div>

		<div class="webflow-section">
			<!-- <div class="webflow-h1" style="font-family: sans-serif; font-weight: 600; color: hsl(0,0%,0%, 0.80); margin-bottom: 10px;">
				How pay works
			</div>

			<div style="font-family: UberMoveText, system-ui, Helvetica Neue, Helvetica, Arial, sans-serif; font-weight: 400; font-size: 1.8rem; margin-top: 1px; opacity: 0.8;">
				Because you get paid proportional to how many students you help, there's no limit on how high you get paid.
				You can set your own price from $5 - $50/week. Here's an income calculator assuming you charge $15/week.
				<br>
				<br>
			</div>

			<div style="font-family: UberMoveText, system-ui, Helvetica Neue, Helvetica, Arial, sans-serif; font-weight: 400; font-size: 1.8rem; margin-top: 1px; margin-bottom: 100px; opacity: 0.8;">
				<ReusableIncomeCalculator weeklyPrice={15}/>
			</div> -->

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
				"
			>
			</HowItWorksStep>
		</div>
	{/if}
</AutoAdjust>

<script>	
	import ReusableIncomeCalculator from '$lib/ReusableIncomeCalculator.svelte'
	import TopBannerWarnExperimental from '$lib/TopBannerWarnExperimental.svelte'
	import ImageGallery from '../lib/ImageGallery.svelte'
	import RenderlessListenToBoard from '$lib/RenderlessListenToBoard.svelte'
	import ReusableDoodleVideo from '$lib/ReusableDoodleVideo.svelte'
	import HowItWorksStep from '$lib/HowItWorksStep.svelte';
	import Button, { Label } from '@smui/button';
	import { goto } from '$app/navigation'
	import { user, } from '../store.js'
	import TabBar from '@smui/tab-bar';
	import Tab, { Icon } from '@smui/tab';
	import TopAppBar, { Row, Section, Title, AutoAdjust } from '@smui/top-app-bar';
	import Card, {
    Content,
    PrimaryAction,
    Actions,
    ActionButtons,
    ActionIcons,
  } from '@smui/card';
	import { onMount, tick, onDestroy } from 'svelte'
	import { page } from '$app/stores'
	import Blackboard from '$lib/Blackboard.svelte'

	let w
	let topAppBar

	let tabs = [{ label: 'Learn', icon: 'smart_display'}, { label: 'Teach', icon: 'draw'}]
	let active = tabs[0]
	
	function resumeToMostRecentServer () {
		goto($user.mostRecentClassAndRoomID, { replaceState: true })
	}

	function redirectToSignUpPage () {
		goto('/overview')
		// const linearAlgebraID = 'lvzQqyZIV1wjwYnRV9hn'
		// goto('/signup/' + linearAlgebraID)
	}

	// TO-DO: maybe just redirect
	function redirectToExampleClass () {
		const id = 'Mev5x66mSMEvNz3rijym' // 14.01
    goto(`/${id}/${id}`, { replaceState: true })
	}
</script>

<style lang="scss">
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

	@media screen and (max-width: 991px) {
		.image-gallery-container {
			margin-top: 0% !important;
			margin-bottom: 8% !important;
		}
	}

.image-gallery-container {
	margin-top: 12%; 
	margin-bottom: 24%;
}

.webflow-section {
	padding-top: 8%; 
	padding-bottom: 8%;
}

.header-title {
	max-width: 52vw; /* webflow is 52vw, but explanations is a long word */
	margin-top: 0; 
	margin-bottom: 0;
	font-size: 7vw;
	/* line-height: 1.1; /* webflow's is 1.0, but squishes the text on Explain, looks good on Webflow though */
	font-weight: 500;

	/* This turns to prevent <p> from taking additional height for no reason */
	margin-top: 0;
	margin-bottom: 0;


	// BELOW ARE CSS ATTRIBUTES I PUT IN ADDITION TO BASE ATTRIBUTES
	box-sizing: border-box;

	/* The -0.02em is the secret sauce for making sans-serif fonts look good **/
	letter-spacing: -.02em; 
	font-family: sans-serif; 
	font-weight: 600; 

	color: #1b1b1b; // exact complement of Webflow's contrast black/white contrast
	line-height: 1.0; // used to be 1.25 but GF suggests otherwise

}

@media only screen and (min-width: 1550px) {
	.header-title {
		font-size: 7rem;
	}
}

@media only screen and (max-width: 991px) {
	.header-title {
		max-width: 85vw;
		font-size: 11vw;
	}
}

.webflow-intro-type {
	font-family: sans-serif; 
	font-size: 5rem;
	line-height: 1.125; // used to be 1.25 but you know what happened last time
	font-weight: 500;
	letter-spacing: -.02em;
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
	display: -webkit-box;
	display: -webkit-flex;
	display: -ms-flexbox;
	display: flex;
	margin-top: 3%;
	margin-bottom: 40px;
	-webkit-box-pack: justify;
	-ms-flex-pack: justify;
	/* -webkit-justify-content: space-between;
	justify-content: space-between; */

	flex-wrap: wrap;
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
	margin-left: 5vw;
	width: 90%;
	max-width: 310px; 

	// additional attributes
	display: flex; 
	flex-direction: column;
	justify-content: flex-end; 
	align-items: flex-start;

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
		margin-top: 0px;
		width: 100%;
	}

	.mdc-tab__text-label {
		color: orange;
	}

	.webflow-container {
		width: 90%; 
		max-width: 1280px; /* webflow's value is 1280, partly because their scrollbar takes up width */
		margin-right: auto;
		margin-left: auto; 

		box-sizing: border-box;
	}
	
	@media screen and (max-width: 991px) {
		.webflow-container {
			width: 85%;
		}
	}
</style>

<!-- 	
	<picture>
		<source srcset="svelte-welcome.webp" type="image/webp" />
		<img src="svelte-welcome.png" alt="Welcome" />
	</picture> 
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
