<TopNavbar>
	<!-- <TopBannerWarnExperimental/> -->
	<div class="webflow-container" style="padding-top: 1%;">
		<!-- '#F1F1F1' -->
		<TabBar tabs={tabs} let:tab bind:active style="color: purple; margin-left: 0%;">
			<Tab {tab} 
				stacked minWidth style="color: orange; border: 0px solid grey; border-radius: 0px; overflow: hidden;
					background-color: {active.label === tab.label ? '' : ''};
					border-bottom: {active.label === tab.label ? 'purple 0px solid' : ''}
				"
			>
				<Icon class="material-icons" style="color: {active.label === tab.label ? 'black' : 'grey'}; padding-top: 25px;">
					{tab.icon}
				</Icon>
				<Label style="color: {active.label === tab.label ? 'black' : 'rgba(0, 0, 0, 0.9)'};
						font-weight: {active.label === tab.label ? '600' : '400'};
						margin-top: 5px; padding-bottom: 30px;">
					{tab.label}
				</Label>
			</Tab>
		</TabBar>

		<div style="margin-bottom: 58px"></div>

		{#if active.label === 'Learn'}
			<div class="header-flex">
				<div>
					<p class="header-title" style="line-height: 1.2">
						Ask question, get video.
					</p>
					<div style="margin-top: 24px;"></div>
					<div style="font-size: 22px; max-width: 900px; line-height: 1.4; font-weight: 500;">
						Crowdfund a “Youtube Teacher” for your hardest classes in college.<br>
						Get clear explanations for all your questions — together with other subscribers.
					</div>

				</div>
				<div class="header-subcopy-wrapper">
					<Button on:click={redirectToSignUpPage} color="secondary" variant="raised" class="call-to-action-button" 
						style="	
							height: 4.2vw; 
							min-height: 42px;
							margin-top: 0.85vw; 
							margin-bottom: 0.8vw; 
							border-radius: 2.1vw;
						"
					>
						<Label style="text-transform: none; padding-left: 16px; padding-right: 16px; padding-top: 10px; padding-bottom: 10px; font-size: 1.4em; font-weight: 600">
							Explore class servers
						</Label>
					</Button>
				</div>
			</div>

			<!-- ROTATING GALLERY -->
			<div class="image-gallery-container">
				{#if randomlyChosenExemplarVideos.length > 0}
					<ImageGallery galleryVideos={randomlyChosenExemplarVideos}/>
				{/if}
			</div>
		{:else}
			<div class="header-flex">
				<p class="header-title" style="font-size: 4em;">Teach what you love - supported by subscribers</p>	
				<div class="header-subcopy-wrapper">
				
					<Button on:click={redirectToSignUpPage} color="secondary" variant="raised" style="height: 60px; margin-top: 16px; margin-bottom: 2rem; border-radius: 0px;">
						<Label style="text-transform: none; padding-left: 16px; padding-right: 16px; padding-top: 10px; padding-bottom: 10px; font-size: 1rem; font-weight: 600">
							Explore communities
						</Label>
					</Button>
				</div>
			</div>			
			<!-- MultislideRecordingDemo -->
			<OfflineMultislideRecordingDemo/>
		{/if}

			{#if active.label === 'Learn'}
			<div class="webflow-section">
				<div class="webflow-intro-type">
					<div style="font-weight: 500;">
						explanations.app = Youtube + Kickstarter for college classes 
					</div>

					<div style="margin-bottom: 24px;"></div>

					<ol style="font-weight: 400;">
						<li>
							Colleges classes aren't always well-taught; class resources aren't always good enough.
						</li>
						<li>
							To do well in any class, <u>we just need someone good at explaining things and gives a sh*t about us.</u>
							Many former TAs & students all over the world are great at explaining things, but don’t know <i>where</i> they're needed
						</li>

						<li>
							Pre-pay $10 to crowdfund potential teachers to tryout for your class. You get permanent free subscriptions for paying early.
						</li>

						<li>
							Pick the most helpful "Youtuber" for you. It's a win-win: students get really good help for low prices of $10/month, 
							while teachers can support themselves via economies-of-scale. 
						</li>
					</ol>
				</div>

<!-- 							
			<div style="display: flex; justify-content: space-around;">
				<img src="/roxbury-small-logo.jpg" width="300" height="165">
				<img src="/small mit.png" width="260" height="120" style="margin-top: 14px;">
				<img src="/bunkerhill.png" width="300" height="110" style="margin-top: 20px;">
			</div> -->
			</div>

			{/if}

			{#if active.label === 'Teach'}
				<div class="webflow-section">
					<div class="webflow-intro-type">
						This website lets you teach people all over the world with blackboard videos (without additional responsibilities like grading). 

			
						Just draw and talk on the blackboard - that's it. 
						You can help free viewers and <b style="color: #5d0068">$10/month subscribers</b>.
						<br><br>					
						It's the unique way you explain the subject that matters.


						<!-- The video-format means that, instead of needing to reply quickly to questions over text, you can take your time to deeply
						explain a small number of things during <b style="color: navy">flexible times</b> of your week. -->

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

			{#if active.label === 'Students deprecate for now'}

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
		{:else if active.label === 'Teach' && false}
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
	import ReusableIncomeCalculator from '$lib/ReusableIncomeCalculator.svelte'
	import TopBannerWarnExperimental from '$lib/TopBannerWarnExperimental.svelte'
	import ImageGallery from '../lib/ImageGallery.svelte'
	import RenderlessListenToBoard from '$lib/RenderlessListenToBoard.svelte'
	import ReusableDoodleVideo from '$lib/ReusableDoodleVideo.svelte'
	import HowItWorksStep from '$lib/HowItWorksStep.svelte';
	import Button, { Label } from '@smui/button';
	import { goto } from '$app/navigation'
	import { user } from '../store.js'
	import TabBar from '@smui/tab-bar';
	import Tab, { Icon } from '@smui/tab';
	import { onMount, tick, onDestroy } from 'svelte'
	import { page } from '$app/stores'
	import OfflineMultislideRecordingDemo from '$lib/OfflineMultislideRecordingDemo.svelte'
	import { mixpanelLibrary } from '/src/mixpanel.js'
	import TopNavbar from '$lib/TopNavbar.svelte'

	onMount(() => {
		mixpanelLibrary.track('Home page visited')
	})

	// RANDOMLY CHOOSE DEMO VIDEOS
	const exemplarVideos = [
		{ titleForDebugging: 'Free body diagrams' ,
			dbPath: 'classes/qfWJFR2xTm9vYOJFXYfJ/blackboards/eSScStbUyFOtWZPaSWvu',
			creatorName: 'Noam Buckman',
			className: 'Mechanics of Materials',
			classID: 'qfWJFR2xTm9vYOJFXYfJ'
		},
		{ titleForDebugging: 'Where should you make your cuts along the bar?' ,
			dbPath: 'classes/qfWJFR2xTm9vYOJFXYfJ/blackboards/js7wFnC1YTPND10cNdiZ',
			creatorName: 'Noam Buckman',
			className: 'Mechanics of Materials',
			classID: 'qfWJFR2xTm9vYOJFXYfJ'
		},
		{ titleForDebugging: 'Keeping the left or right side of the bar for a FBD?',
			dbPath: 'classes/qfWJFR2xTm9vYOJFXYfJ/blackboards/0KBOPYgWUbK3VZTGyuUi',
			creatorName: 'Noam Buckman',
			className: 'Mechanics of Materials',
			classID: 'qfWJFR2xTm9vYOJFXYfJ'
		},
		{ titleForDebugging: 'HW3 Problem 8' ,
			dbPath: 'classes/lvzQqyZIV1wjwYnRV9hn/blackboards/pKRiHHADBzNgXp1nxJLB',
			creatorName: 'Ben Shimabukuro',
			className: 'Linear Algebra',
			classID: 'lvzQqyZIV1wjwYnRV9hn'
		},
		{ titleForDebugging: 'Eigenmatrices' ,
			dbPath: 'classes/lvzQqyZIV1wjwYnRV9hn/blackboards/5uM4TNDPOwmicFKZBsO7',
			creatorName: 'Ben Shimabukuro',
			className: 'Linear Algebra',
			classID: 'lvzQqyZIV1wjwYnRV9hn'
		},
		{
			titleForDebugging: 'Intuition behind why eignenvalue must be 1 or 0 here',
			dbPath: 'classes/lvzQqyZIV1wjwYnRV9hn/blackboards/UwXpkXqKTYfrnz5FybRp',
			creatorName: 'Ben Shimabukuro',
			className: 'Linear Algebra',
			classID: 'lvzQqyZIV1wjwYnRV9hn'
		},
		{ titleForDebugging: 'Theory of change of basis',
			dbPath: 'classes/lvzQqyZIV1wjwYnRV9hn/blackboards/cYVtScLxq3AIaC91HUNW',
			creatorName: 'Ammar Fayad',
			className: 'Linear Algebra',
			classID: 'lvzQqyZIV1wjwYnRV9hn'
		},
		{ titleForDebugging: 'Application of change of basis ' ,
			dbPath: 'classes/lvzQqyZIV1wjwYnRV9hn/blackboards/GYpahmE2ULQ2ry34tBDv',
			creatorName: 'Ammar Fayad',
			className: 'Linear Algebra',
			classID: 'lvzQqyZIV1wjwYnRV9hn'
		},
		{ titleForDebugging: 'Why is f(x, y) maximized when indifference curve meets the budget constraint?' ,
			dbPath: 'classes/Mev5x66mSMEvNz3rijym/blackboards/GEdj8PlbdTb3tHj5MqlJ',
			creatorName: 'Elton Lin',
			className: 'Microeconomics',
			classID: 'Mev5x66mSMEvNz3rijym'
		},
		{ titleForDebugging: 'Practice Finals: Fall 2018 Problem 11 (Value Iteration)',
			dbPath: 'classes/AsUl1VWQ7zzxZsD5epL7/blackboards/o',
			creatorName: 'Tony Wang',
			className: 'Intro to Machine Learning',
			classID: 'Mev5x66mSMEvNz3rijym'
		},
		{ titleForDebugging: 'Step 1 of 2: transforming circular separation to linear separation',
			dbPath: 'classes/AsUl1VWQ7zzxZsD5epL7/blackboards/JP7ucWZm3TRu9yKodDzW',
			creatorName: 'Tony Wang',
			className: 'Intro to Machine Learning',
			classID: 'Mev5x66mSMEvNz3rijym'
		},
		{ titleForDebugging: 'Midterm Review: Disjoint Dimensions (recursion)' ,
			dbPath: 'classes/USb1mGxeLqufbgbPhSbV/blackboards/K7kZAAhGIhlcYWTjzh4q',
			creatorName: 'Caleb Noble',
			className: 'Intro to Algorithms',
			classID: 'USb1mGxeLqufbgbPhSbV'
		}
	]

	function getRandomIntInclusive({ min, max }) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
	}

	let randomlyChosenExemplarVideos = null
	const nums = new Set();
	while (nums.size < 4) {
		nums.add(getRandomIntInclusive({ min: 0, max: exemplarVideos.length - 1 }));
	}
	const temp = [] 
	const uniqueIndices = [...nums]
	for (const uniqueIdx of uniqueIndices) {
		temp.push(exemplarVideos[uniqueIdx])
	}
	randomlyChosenExemplarVideos = temp

	// END OF GENERATING DEMO VIDEOS

	let w

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
	margin-top: 10%; 
	margin-bottom: 24%;
	// margin-left: 2%;
}

.webflow-section {
	padding-top: 8%; 
	padding-bottom: 8%;
}

.header-title {
	// max-width: 52vw; /* webflow is 52vw, but explanations is a long word */
	margin-top: 0; 
	margin-bottom: 0;
	font-size: 6vw; /* was 6vw */
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

@media only screen and (min-width: 1550px) {
	.header-title {
		font-size: 4.5vw; /** webflow used 7rem*/
	}
}

@media only screen and (max-width: 991px) {
	.header-title {
		max-width: 85vw;
		font-size: 11vw;
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
	display: -webkit-box;
	display: -webkit-flex;
	display: -ms-flexbox;
	display: flex;
	margin-top: 2%;
	margin-bottom: 40px;
	-webkit-box-pack: justify;
	-ms-flex-pack: justify;
	/* -webkit-justify-content: space-between;
	// justify-content: space-between; */
	justify-content: space-between;

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
	margin-left: 5vw;
	width: 90%;
	max-width: 310px; 

	// additional attributes
	margin-right: 24px;
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
		width: 90%; /* 90% */
		// max-width: 1400px; /* webflow's value is 1280, partly because their scrollbar takes up width */
		margin-right: auto;
		margin-left: auto; 

		box-sizing: border-box;

		// additional properties
		margin-top: 20px;

		background-color: transparent;
	}
	
	@media screen and (max-width: 991px) {
		.webflow-container {
			width: 85%;
		}
	}

	li {
		margin-bottom: 24px;
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
