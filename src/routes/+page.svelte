<div class="flexy">
	<div class="top-app-bar-container flexor">
		<TopAppBar bind:this={topAppBar} variant="standard" style="background-color: hsl(0,0%,0%, 0.80);">
			<Row>
				<Section>
					<img src="logo.png" alt="logo" width="52" height="46" style="margin-left: 0px;">
					<Title style="font-size: 1.95rem; padding-left: 6px">
						Explain
					</Title>
					<!-- <a href="https://medium.com/mit-soul" target="_blank" style="text-decoration-color: transparent;">
						<Button style="margin-left: 40px;">
							Blog
						</Button>
					</a> -->
				</Section>

				<Section align="end" toolbar>
					<a href="https://github.com/verypopularguy/explain" target="_blank" style="text-decoration-color: transparent;">
						<div style="margin-left: 20px; margin-right: 20px;">
							<svg
								style="color: white; filter: invert(1); width: 40px; height: 50px; margin-top: 16px; margin-left: 10px;"
								xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 700"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>
						</div>
					</a>
					<Button variant="outlined">
						Log in
					</Button>
				</Section>
			</Row>
		</TopAppBar>
	</div>
</div>

<AutoAdjust {topAppBar}>
	<TabBar tabs={tabs} let:tab bind:active style="background-color: rgb(238, 238, 238)" variant="dense">
		<Tab {tab} stacked minWidth indicatorSpanOnlyContent>
			<Icon class="material-icons">{tab.icon}</Icon>
			<Label>{tab.label}</Label>
		</Tab>
	</TabBar>
	
	<div class="webflow-container">
		{#if active.label === 'Students'}
			<div class="header-flex">
				<p class="header-title">
					The help you want — without wasted time
				</p>
				<div class="header-subcopy-wrapper">
					<div class="header-subcopy">
						Your psets should be an enjoyable challenge, not an overwhelming timesink.
					</div>
					<Button on:click={redirectToSignUpPage} color="secondary" variant="raised" style="height: 60px; margin-top: 16px; margin-bottom: 2rem; border-radius: 0px;">
						<Label style="text-transform: none; padding-left: 16px; padding-right: 16px; padding-top: 10px; padding-bottom: 10px; font-size: 1rem; font-weight: 600">
							Explore shops
						</Label>
					</Button>
				</div>
			</div>
		{:else}
			<div class="header-flex">
				<p class="header-title">Less hours, more flexibility, unbounded pay</p>	
				<div class="header-subcopy-wrapper">
					<div class="header-subcopy">
						Let video explanations multiply your impact
						and earn money for you
					</div>
				
					<Button on:click={redirectToSignUpPage} color="secondary" variant="raised" style="height: 60px; margin-top: 16px; margin-bottom: 2rem; border-radius: 0px;">
						<Label style="text-transform: none; padding-left: 16px; padding-right: 16px; padding-top: 10px; padding-bottom: 10px; font-size: 1rem; font-weight: 600">
							Setup shop
						</Label>
					</Button>
				</div>
			</div>			
		{/if}

		<!-- ROTATING GALLERY -->
		<div class="image-gallery-container">
			<ImageGallery/>
		</div>

		{#if active.label === 'Students'}
			<div class="webflow-section">
				<div class="webflow-intro-type">
					Here you can hire former students for pset help, using a mix of blackboard videos and remote 1-on-1 tutoring,
					for classes with overcrowded Office Hours.
				</div>
			</div>

			<!-- HOW IT WORKS SECTION-->
			<div bind:clientWidth={w} class="webflow-section">
				<div class="webflow-h1" style="font-family: sans-serif; font-weight: 600; color: hsl(0,0%,0%, 0.80); margin-bottom: 10px;">
					How it works
				</div>
				
				<div class="webflow-paragraph-1" style="font-family: UberMoveText, system-ui, Helvetica Neue, Helvetica, Arial, sans-serif; font-weight: 400; margin-top: 1px; opacity: 0.8;">
					We actively recruit former students who can explain things with a fresh perspective from how classes normally present the material; because the videos can efficiently benefit everyone with no additional effort, 
					it is then possible for tutors to personally address your remaining questions, until nothing is left unexplained.
					<br>
					<br>

					<!-- Alternative: It's tutoring that uses helper videos whenever efficient, and personal one-on-one time for everything else. -->
				</div>

				<!-- <div style="font-family: UberMoveText, system-ui, Helvetica Neue, Helvetica, Arial, sans-serif; font-weight: 400; font-size: 1.8rem; margin-top: 1px; margin-bottom: 100px; opacity: 0.8;">
		
				</div> -->
				<HowItWorksStep
					title="Step 1"
					subtitle="Open the website to type a question"
					description="Ask about pset questions, important concepts, anything."
				>					
					<img src="https://i.imgur.com/TYkGFHO.gif" width="{Math.min(w, 600)}" height="{Math.min(w, 600) * 1/5}" style="margin-top: 50px;">

				</HowItWorksStep>

				<HowItWorksStep
					title="Step 2"
					subtitle="Your tutor responds with a blackboard video"
					description="Reponse time differs depending on the arrangement set by you and your tutor. It will also depend on the situation e.g. faster response when there's an upcoming pset deadline."
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
					subtitle="Follow-up over comments & voice chat"
					description="You can ask follow-up questions via the comments section on the video.
					You can also directly voice chat over shared blackboards."
				>
					<img src="https://i.imgur.com/8tnRfRB.gif" height="{Math.min(0.5 * w, 0.5 * 600) * 4/10}" width="{Math.min(0.5 * w, 0.5 * 600)}" style="margin-top: 50px;">
				</HowItWorksStep>

				<HowItWorksStep
					title="Step 4"
					subtitle="Re-watch any explanations in the server"
					description="Within the server, all explanations are shared. This means every student benefits from each others' questions and their tutors' resultant videos. The server is restricted to paying students during the semester; afterwards it becomes freely accessible on the internet."	
				>
					<Button on:click={redirectToExampleClass} color="primary" variant="raised" class="button-shaped-round" style="margin-top: 25px;">
						Explore last semester's 14.01 server
					</Button>
				</HowItWorksStep>
			</div>
		{:else}
			<div class="webflow-section">
				<div class="webflow-intro-type">
					Here you can directly create videos on your stylus-tablet and upload them within <i>seconds</i>. 
					You also have use voice chat + shared blackboards to directly communicate with students.
				</div>
			</div>

		<div class="webflow-section">
			<div class="webflow-h1" style="font-family: sans-serif; font-weight: 600; color: hsl(0,0%,0%, 0.80); margin-bottom: 10px;">
				How pay works
			</div>

			<div style="font-family: UberMoveText, system-ui, Helvetica Neue, Helvetica, Arial, sans-serif; font-weight: 400; font-size: 1.8rem; margin-top: 1px; opacity: 0.8;">
				Because you get paid proportional to how many students you help, there's no limit on how high you get paid.
				When starting with just 1 student, Explain subsidizes a minimum wage of $20/hr to match HKN ($17/hour) and Math Learning Center ($19/hour).
				<br>
				<br>

				<!-- It's tutoring that uses helper videos whenever efficient, and personal one-on-one time for everything else. -->
			</div>

			<div style="font-family: UberMoveText, system-ui, Helvetica Neue, Helvetica, Arial, sans-serif; font-weight: 400; font-size: 1.8rem; margin-top: 1px; margin-bottom: 100px; opacity: 0.8;">
	
			</div>

			<HowItWorksStep
				title="Step 1"
				subtitle="Start with 1 student"
				description="Depending on preferenes, you can tutor in-person, remotely, or asynchronously via videos"
			/>

			<HowItWorksStep
				title="Step 2"
				subtitle="Leverage video explanations wisely"
				description="You start to use more video explanations (like Sal Khan and his nephew),
						this brings more flexibility into your work hours e.g. get your work out of the way in the morning,
						and commuting in the snow is no longer necessary"
			>
				<iframe 
					src="https://giphy.com/embed/NrtarMHJrLU4sRO5mG" width="{Math.min(w, 600)}" height="{0.6 * Math.min(w, 600)}"
					style="display:block; margin-top: 20px;" frameBorder="0" class="giphy-embed" allowFullScreen>
				</iframe> 
			</HowItWorksStep>

			<HowItWorksStep
				title="Step 3"
				subtitle="Adjust as you get more students"
				description="
				Different students will have different needs, but their common concerns about a pset problem, or a fundamental concept 
				is often addressable with a recorded explanation. Your salary scales O(n). 
				This can be challenging, but it can also be easy. It requires a little bit of experimentation.
				
				1 student = $19/hour (up to 2 hours)
				2 students: $19/hour (up to 3 hours)
				3 students: $20/hour (3 hours)
				4 students, $21/hour (up to 3 hours)
				10 students: $38/hour, 4 hours
				20 students: $60/hour, 5 hours
				30 students: $90/hour, 5 hours
				"
			>

			</HowItWorksStep>
		</div>
	{/if}
	<!-- END OF TEACHER/DRIVER SECTION -->

	<!-- BLOG SECTION -->
	<!-- <div>
		<p style="font-size: 4rem; font-family: sans-serif; font-weight: 600; color: hsl(0,0%,0%, 0.80);">
			Recent blogs
		</p>

		<div class="one-blog-container" style="display: flex; justify-content: space-between; flex-wrap: wrap; padding-bottom: 0; margin-bottom: 10px">
			<iframe style="margin-bottom: 30px;" width="560" height="300" src="https://www.youtube-nocookie.com/embed/QNDT5hhEhYU?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
			
			<div class="blog-text-section-container">
				<h1 style="font-size: 2rem; margin-top: 0; color: hsl(0,0%,0%, 0.80)" class="step-title-font-styles">
					The impact of reducing workload on student life
				</h1>
				<div style="margin-bottom: 20px; opacity: 0.8" class="blog-description-font-styles">
					I just think I would like to be at a place where everyone gets an A, when they take off, like double O six or six. Because that means we're doing I mean, that's better for everyone, right? Like, I don't want to lower the standard. Right? I want people to understand it. But if we can do a better job of getting people to understand it quicker, and better, and you that's a win, because then they can move on to more complicated things, and be in a better situation.
				</div>			
				<Button variant="outlined">
					Read story
				</Button>		
			</div>	
		</div>

		<div class="one-blog-container" style="display: flex; justify-content: space-between; flex-wrap: wrap; padding-bottom: 0; margin-bottom: 10px">
			<iframe width="560" height="300" style="margin-bottom: 30px" src="https://www.youtube.com/embed/ED3K-X8iaEU?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
			
			<div class="blog-text-section-container">
				<h1 style="font-size: 2rem; margin-top: 0; color: hsl(0,0%,0%, 0.80)" class="step-title-font-styles">
					Preventative help vs reactive help on Piazza
				</h1>
				<div style="margin-bottom: 20px; opacity: 0.8" class="blog-description-font-styles">
					There were a couple of questions about Adadelta, it's one approach to make machine learning gradient descent better. Course note explanation was a paragraph long. Nobody had any idea what it meant. I looked at it and realized, all the information you need is technically there. They didn't miss anything, it's just ridiculously dense and not. Broke it apart, several pieces, it was a lengthy piece of work. I understand how that happens, but at the same time staff should be more careful about these sorts of things. 
				</div>			
				<Button variant="outlined">
					Read story
				</Button>		
			</div>	
		</div>

		<div class="one-blog-container" style="display: flex; justify-content: space-between; flex-wrap: wrap; padding-bottom: 0; margin-bottom: 10px">
			<iframe width="560" height="300" style="margin-bottom: 30px" src="https://www.youtube.com/embed/PVBRjv9Sdz0?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

			<div class="blog-text-section-container" style="width: 48vw; max-width: 800px;">
				<h1 style="font-size: 2rem; margin-top: 0; color: hsl(0,0%,0%, 0.80)" class="step-title-font-styles">
					Tutorial system of Oxford & Cambridge
				</h1>
				<div style="margin-bottom: 20px; opacity: 0.8" class="blog-description-font-styles">
					A lot of the overhead is one copy right, it turns out if you use an image unlicensed, they have all licenses taken from some website where you can run into this issue where people sue you for using content. The second thing is that when they're thinking about is accessibility. There is a mandate for school where you have to have a transcript for a video. So hard of hearing can still access the entire lecture. As a result, these official channels have to work hard to have a big team of lawyers and editors go over the, fine-comb every screenshot used, textbook, then the transcripts, a ton of money, some subject matter to transcribe that lecture. Amazon mechanical turk to do it or something.
				</div>			
				<Button variant="outlined">
					Read story
				</Button>		
			</div>	
		</div>

		<div class="one-blog-container" style="display: flex; justify-content: space-between; flex-wrap: wrap; padding-bottom: 0; margin-bottom: 10px">
			<iframe width="560" height="300" style="margin-bottom: 30px;" src="https://www.youtube-nocookie.com/embed/PozzlsHw87w?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

			<div class="blog-text-section-container">
				<h1 style="font-size: 2rem; margin-top: 0; color: hsl(0,0%,0%, 0.80)" class="step-title-font-styles">
					The complex debate around recorded lectures
				</h1>
				<div style="margin-bottom: 20px; opacity: 0.8" class="blog-description-font-styles">
					The goal of this essay is to provide an educated guess - from the naive student perspective - as to whether the cost outweighs the benefits. 

					To guess the size of these arrows, we need a criteria, which is some utility function of each individual student's learning experience. Here are naïve examples:
					Total unweighted grade - number of unhappy students + number of very happy students
					Average class satisfaction - number of failed students
					What's important is not the exact coefficients of each variable, but rather what they reflect about college education's core goals. We'll discuss utility functions more in later essays.									
				</div>			
				<Button variant="outlined">
					Read story
				</Button>		
			</div>	
		</div>

		<div class="one-blog-container" style="display: flex; justify-content: space-between; flex-wrap: wrap;">
			<iframe style="margin-bottom: 30px;" width="560" height="300" src="https://www.youtube-nocookie.com/embed/tZ1Cbqs5WF0?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

			<div class="blog-text-section-container">
				<h1 style="font-size: 2rem; margin-top: 0; color: hsl(0,0%,0%, 0.80)" class="step-title-font-styles">
					The story of teaching at a research university
				</h1>
				<div style="margin-bottom: 20px; opacity: 0.8" class="blog-description-font-styles">
					I had an inkling that the teaching at MIT didn’t live up to its world-class status. Yes, there were some great classes — but the quality was inconsistent.

					To figure out why that is, I’ve talked to various faculty & students and went down rabbit holes. We talked about lots of specific things, things like how to keep semesters consistent despite rotating teachers, how we lose the TA explanations and student notes, pedagogical beliefs on attendance and collaboration, what does good material look like etc.

					But after some recent interviews, I've come to believe that the most fundamental problem is incentives: what faculty would be so crazy as to focus on teaching, when their main focus should be research?
				</div>
				<a href="https://medium.com/@eltonlin1998/the-hidden-story-of-teaching-at-a-research-university-8bcd47bac62" target="_blank" style="text-decoration: none !important;">
					<Button variant="outlined">
						Read story
					</Button>
				</a>
			</div>
		</div>
	</div> -->
</AutoAdjust>

<script>	
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

	let w
	let topAppBar

	let tabs = [{ label: 'Students', icon: 'hail'}, { label: 'Tutors', icon: 'local_taxi'}]
	let active = tabs[0]

	$: if ($user.phoneNumber) {
      // TO-DO: MOVE THIS BACK TO +LAYOUT.SVELTE

		  // if you visit the root page, you will be redirected
			// but this should reside in the home page itself, so it doesn't affect other pages
			// also this test for home page is not accurate - it just tests that it's not in a class page, doesn't mean
			// it's necessarily in a home page
			// this is just legacy code
			// const { params } = $page 
			// if (!params.class && !params.room) { 
			// 	if ($user.mostRecentClassAndRoomID && $user.phoneNumber) { // quick-fix
			// 		console.log("redirecting to most recent class")
			// 		goto($user.mostRecentClassAndRoomID)
			// 	}
			// }
	}
	
	function resumeToMostRecentServer () {
		goto($user.mostRecentClassAndRoomID, { replaceState: true })
	}

	function redirectToSignUpPage () {
		goto('/signup')
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
	line-height: 1.25;
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
	line-height: 1.25;
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

.blog-description-font-styles {
	font-family: UberMoveText, system-ui, Helvetica Neue, Helvetica, Arial, sans-serif;; font-weight: 400; font-size: 1.1rem;
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

	.blog-text-section-container {
		width: 48vw; max-width: 800px;
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
