<div class="flexy">
	<div class="top-app-bar-container flexor">
		<TopAppBar bind:this={topAppBar} variant="standard" style="background-color: hsl(0,0%,0%, 0.80);">
			<Row>
				<Section>
					<img src="logo.png" alt="logo" width="52" height="46" style="margin-left: 0px;">
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
				</Section>
			</Row>
		</TopAppBar>
	</div>
</div>

<AutoAdjust {topAppBar}>
	<TabBar tabs={tabs} let:tab bind:active style="background-color: rgb(238, 238, 238)" variant="dense">
		<!-- stacked -->
		<Tab {tab} minWidth indicatorSpanOnlyContent>
			<Icon class="material-icons">{tab.icon}</Icon>
			<Label>{tab.label}</Label>
		</Tab>
	</TabBar>
	
	<div class="webflow-container">

	{#if active.label === 'Students'}
		<div class="header-flex">
			<p class="header-title">Life-saving explanations <br> without the wait</p>
			<div class="header-subcopy-wrapper" style="display: flex; -webkit-flex-direction: column; justify-content: flex-end; -webkit-align-items: flex-start;">
				<div class="header-subcopy">
					Classes are an enjoyable challenge, not an unbounded timesink.
				</div>
			
				<Button on:click={redirectToSignUpPage} color="secondary" variant="raised" style="height: 60px; margin-bottom: 2rem; border-radius: 0px;">
					<Label style="text-transform: none; padding-left: 16px; padding-right: 16px; padding-top: 10px; padding-bottom: 10px; font-size: 1rem; font-weight: 600">
						Explore shops
					</Label>
				</Button>
			</div>
		</div>

		<div style="margin-top: 140px; display: flex; justify-content: center; align-items: end;">
			<ImageGallery/>
		</div>

		<!-- Copied from Webflow's website -->
		<div class="webflow-intro-type">
			Designed to complement classes with busy Office Hours, explain.mit.edu answers your long-unresolved questions
			with simple videos and a sprinkle of personal tutoring.
		</div>

			<!-- HOW IT WORKS SECTION: border-top: 1px solid #eee; -->
			<Content style="padding-left: 0px; padding-right: 0px; margin-top: 20px;">
				<p style="font-size: 4rem; font-family: sans-serif; font-weight: 600; color: hsl(0,0%,0%, 0.80); margin-bottom: 10px;">
					How it works
				</p>
				
				<div style="font-family: UberMoveText, system-ui, Helvetica Neue, Helvetica, Arial, sans-serif; font-weight: 400; font-size: 1.8rem; margin-top: 1px; opacity: 0.8;">
					We hire previous students who can explain things with a fresh perspective from how classes normally present the material; because the videos can efficiently help n students at no additional effort, 
					it is then possible for these tutors to address all your questions, until nothing is left unexplained.
					<br>
					<br>

					<!-- Alternative: It's tutoring that uses helper videos whenever efficient, and personal one-on-one time for everything else. -->
				</div>

				<div style="font-family: UberMoveText, system-ui, Helvetica Neue, Helvetica, Arial, sans-serif; font-weight: 400; font-size: 1.8rem; margin-top: 1px; margin-bottom: 100px; opacity: 0.8;">
		
				</div>

				<div class="step-container" style="margin-bottom: 160px;">
					<div class="step-one-two-three-flexbox">
						<div style="max-width: 800px">
							<div class="step-one-two-three-font">
								Step 1
							</div>
							<div class="step-title-font-styles">
								Open the website to type a question
							</div>
							<div class="step-description-font-styles">
								This is usually a pset problem "How do you setup pset 3b finding a firm's cost function"
								or a concept " can we review income & substitution effects?"
							</div>
						</div>

						<!-- The margin has no effect when same-line, but for small screens it'll leave a gap from the text -->
						<img src="https://i.imgur.com/TYkGFHO.gif" width="450" height="90" style="margin-top: 50px;">

					</div>

				</div>

				<div class="step-container" style="margin-bottom: 160px;">
					<div class="step-one-two-three-flexbox">
						<div style="max-width: 800px;">
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

						<div style="display: flex; justify-content: space-evenly; justify-content: space-between">
							<div style="width: 90%; height: 70%; margin-top: 50px;">
								<RenderlessListenToBoard let:boardDoc={boardDoc} dbPath={'classes/Mev5x66mSMEvNz3rijym/blackboards/B0npFZMsV3PMAxapkGy1'} >
									<ReusableDoodleVideo
										{boardDoc}
										canvasWidth={400}
										canvasHeight={260}
										boardDbPath={'classes/Mev5x66mSMEvNz3rijym/blackboards/B0npFZMsV3PMAxapkGy1'}
									/>
								</RenderlessListenToBoard>
							</div>
						</div>
					</div>
				</div>

				<div class="step-container" style="margin-bottom: 120px">
					<div class="step-one-two-three-flexbox">
						<div style="max-width: 800px;">
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

						<img src="https://i.imgur.com/8tnRfRB.gif" height="100" width="280" style="margin-top: 50px;">

					</div>
				</div>

				<div class="step-one-two-three-flexbox">
					<div style="max-width: 800px;">
						<div class="step-one-two-three-font">
							Step 4
						</div>
						<div class="step-title-font-styles">
							Revisit explanations anytime
						</div>
						<div class="step-description-font-styles">
							This means when other students ask questions, you benefit from their resultant videos.
							The server is restricted to paying students during the semester; afterwards it becomes free forever for everyone.
						</div>
						<Button on:click={redirectToExampleClass} color="primary" variant="raised" class="button-shaped-round" style="margin-top: 25px;">
							Explore last semester's 14.01 server
						</Button>
					</div>
				</div>
			</Content>
	{:else}
			<div class="header-flex">
				<p class="header-title">Scalable pay, flexible hours</p>	
				<div class="header-subcopy-wrapper" style="display: flex; -webkit-flex-direction: column; justify-content: flex-end; -webkit-align-items: flex-start;">
					<div class="header-subcopy">
						Earn money with your impact, not your time.
					</div>
				
					<Button on:click={redirectToSignUpPage} color="secondary" variant="raised" style="height: 60px; margin-bottom: 2rem; border-radius: 0px;">
						<Label style="text-transform: none; padding-left: 16px; padding-right: 16px; padding-top: 10px; padding-bottom: 10px; font-size: 1rem; font-weight: 600">
							Setup shop
						</Label>
					</Button>
				</div>
			</div>			

			<div style="margin-top: 140px; display: flex; justify-content: center; align-items: end;">
				<ImageGallery/>
			</div>
		
			<Content style="padding-left: 0px; padding-right: 0px; margin-top: 20px; border-top: 1px solid #eee;">
				<p style="font-size: 4rem; font-family: sans-serif; font-weight: 600; color: hsl(0,0%,0%, 0.80); margin-bottom: 10px;">
					How pay works
				</p>

				<div style="font-family: UberMoveText, system-ui, Helvetica Neue, Helvetica, Arial, sans-serif; font-weight: 400; font-size: 1.8rem; margin-top: 1px; opacity: 0.8;">
					Because you get paid proportional to how many students you help, there's no limit on how high you get paid.
					When starting with just 1 student, Explain guarantees a minimum wage that matches HKN ($17/hr) and math learning center ($19/hr).
					<br>
					<br>

					<!-- It's tutoring that uses helper videos whenever efficient, and personal one-on-one time for everything else. -->
				</div>

				<div style="font-family: UberMoveText, system-ui, Helvetica Neue, Helvetica, Arial, sans-serif; font-weight: 400; font-size: 1.8rem; margin-top: 1px; margin-bottom: 100px; opacity: 0.8;">
		
				</div>

				<div class="step-container" style="margin-bottom: 160px;">
					<div class="step-one-two-three-flexbox">
						<div style="width: 800px;">
							<div class="step-one-two-three-font">
								Step 1
							</div>
							<div class="step-title-font-styles">
								Start with 1 student
							</div>
							<div class="step-description-font-styles">
								You'd talk and meet in person once
							</div>
						</div>

						<!-- <img src="https://i.imgur.com/TYkGFHO.gif" width="450" height="100"> -->
					</div>

				</div>

				<div class="step-container" style="margin-bottom: 160px;">
					<div class="step-one-two-three-flexbox">
						<div>
							<div class="step-one-two-three-font">
								Step 2
							</div>
							<div class="step-title-font-styles">
								Use video explanations to wisely
							</div>
							<div class="step-description-font-styles">
								You start to use more video explanations (like Sal Khan and his nephew),
								this brings more flexibility into your work hours e.g. get your work out of the way in the morning,
								, and commuting in the snow is no longer necessary
								<br><br>
								3-10 secs. upload time for 5 min. blackboard videos

							</div>
						</div>

						<div style="display: flex; justify-content: space-between; align-items: center;">
							<iframe 
								src="https://giphy.com/embed/NrtarMHJrLU4sRO5mG" width="400" height="450"
								style="display:block; margin-top: 20px;" frameBorder="0" class="giphy-embed" allowFullScreen>
							</iframe> 
							<!-- position: static; margin: 0 auto;  -->
							<!-- 
								<iframe 
									src="https://giphy.com/embed/NrtarMHJrLU4sRO5mG" width="400" height="450"
									style="display:block; margin-top: 20px;" frameBorder="0" class="giphy-embed" allowFullScreen>
								</iframe> 
							-->
							<div style="width: 90%; height: 70%;">
								<!-- <ReusableDoodleVideo
									canvasWidth={500}
									canvasHeight={360}
									boardDbPath={'classes/Mev5x66mSMEvNz3rijym/blackboards/B0npFZMsV3PMAxapkGy1'}
								/>
							</div> -->
							</div>
					</div>
				</div>

				<div class="step-container" style="margin-bottom: 120px">
					<div class="step-one-two-three-flexbox">
						<div>
							<div class="step-one-two-three-font">
								Step 3
							</div>
							<div class="step-title-font-styles">
								Adjust for n students
							</div>
							<div class="step-description-font-styles">
								Different students will have different needs, but their common concerns about a pset problem, or a fundamental concept 
								is often addressable with a recorded explanation. Your salary scales O(n). 
								This can be challenging, but it can also be easy. It requires a little bit of experimentation.
								<br><br>
								1 student = $19/hour (up to 2 hours)
								2 students: $19/hour (up to 3 hours)
								3 students: $20/hour (3 hours)
								4 students, $21/hour (up to 3 hours)
								10 students: $38/hour, 4 hours
								20 students: $60/hour, 5 hours
								30 students: $90/hour, 5 hours
								<!-- <br><br>
								In any case, there's always still the old-fashioned way of scheduling a time with your tutor via email. -->
							</div>
						</div>

						<img src="https://i.imgur.com/8tnRfRB.gif" height="100" width="300">

					</div>
				</div>
			</Content>
	{/if}
	<!-- END OF TEACHER/DRIVER SECTION -->

	<!-- BLOG SECTION -->
	<div>
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

		<!-- Shaunticlair -->
		<div class="one-blog-container" style="display: flex; justify-content: space-between; flex-wrap: wrap; padding-bottom: 0; margin-bottom: 10px">
			<iframe width="560" height="300" style="margin-bottom: 30px" src="https://www.youtube.com/embed/ED3K-X8iaEU?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
			<!-- <iframe style="margin-bottom: 30px;" width="560" height="380" src="https://www.youtube-nocookie.com/embed/QNDT5hhEhYU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->
			
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

		<!--  -->
		<div class="one-blog-container" style="display: flex; justify-content: space-between; flex-wrap: wrap; padding-bottom: 0; margin-bottom: 10px">
			<!-- <iframe style="margin-bottom: 30px;" width="560" height="380" src="https://www.youtube-nocookie.com/embed/QNDT5hhEhYU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->
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

			<!-- <iframe width="700" height="480" src="https://www.youtube.com/embed/PVBRjv9Sdz0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->
			<div class="blog-text-section-container">
				<!-- blog title -->
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
	</div>
</AutoAdjust>

<script>	
	import ImageGallery from '../lib/ImageGallery.svelte'
	import RenderlessListenToBoard from '$lib/RenderlessListenToBoard.svelte'
	import ReusableDoodleVideo from '$lib/ReusableDoodleVideo.svelte'
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
			const { params } = $page 
			if (!params.class && !params.room) { 
				if ($user.mostRecentClassAndRoomID && $user.phoneNumber) { // quick-fix
					console.log("redirecting to most recent class")
					goto($user.mostRecentClassAndRoomID)
				}
			}
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
/* Copied from Webflow's home page inspector */
@media only screen and (min-width: 1550px) {
	.header-title {
		font-size: 7rem !important;
	}
}

@media only screen and (max-width: 991px) {
	.header-title {
		/* I don't know why !important is needed when webflow.com doesn't need it */
		max-width: 85vw !important;
		font-size: 11vw !important;
	}
}

.header-title {
	max-width: 58vw; /* webflow is 52vw, but explanations is a long word */
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


@media screen and (max-width: 991px) {
	.webflow-intro-type {
		font-size: 2.6rem !important;
	}
}

.webflow-intro-type {
	margin-top: 400px;
	margin-bottom: 100px;
	font-family: sans-serif; 
	font-size: 5rem;
	line-height: 1.25;
	font-weight: 500;
	letter-spacing: -.02em;
	max-width: 100%;
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

@media screen and (max-width: 991px) {
.header-subcopy {
		max-width: 55vw !important;
		font-size: 1.3rem;
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
	.header-subcopy-wrapper {
		max-width: 700px !important;
		margin-top: 30px;
		margin-left: 0;
		font-size: 1.2rem;
	}
}

/* TO-DO: do media query for smaller screen, max width expands to a larger width around 600 */
.header-subcopy-wrapper {
	margin-left: 5vw;
	max-width: 310px; 
}

.step-one-two-three-flexbox {
	display: flex; 
	align-items: center; 
	justify-content: space-between; 
	flex-wrap: wrap;
}

.step-one-two-three-font {
	color: #000000; 
	opacity: 0.5; 
	font-family: sans-serif; 
	margin-bottom: 12px; 
	font-size: 1.2rem;
}

.step-title-font-styles {
	margin-bottom: 12px; font-family: sans-serif; font-weight: 600; font-size: 1.7rem
}

.step-description-font-styles {
	font-family: UberMoveText, system-ui, Helvetica Neue, Helvetica, Arial, sans-serif;; font-weight: 400; font-size: 1.4rem;
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

	@media screen and (max-width: 991px) {
		.webflow-container {
			width: 85%;
		}
	}

	.webflow-container {
		width: 90%; 
		max-width: 1500px; /* webflow's value is 1280, partly because their scrollbar takes up width */
		margin-right: auto;
		margin-left: auto; 

		box-sizing: border-box;
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
