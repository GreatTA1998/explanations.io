<div class="header-flex" style="border: 0px solid black; gap: 2vw;">
  <div style="width: max-content;">
    <p class="header-title">
      Youtube-style help for competitive math
    </p>
  </div>

	<div class="header-subtitle" style="font-size: 1.5vw; line-height: 1.6; font-weight: 500; color: rgb(60, 60, 60);">
		Choose a teacher. Ask them lots of questions. Get detailed video explanations until you truly understand everything.
		$16/month.
	</div>

	<ReusableRoundButton on:click={redirectToCalMeetingPage}
		backgroundColor="#5d0068"
		textColor="white"
	>
		<div style="font-weight: 600; font-size: 18px; padding: 12px 12px;">
			Schedule setup call
		</div>
		
		<span style="margin-left: 0px; margin-right: 4px; font-size: 1.8vw;" class="material-symbols-outlined">
			phone
		</span>
	</ReusableRoundButton>
</div>

<div class="my-video-grid">
	<div>
		<div class="youtube-video-title">
			Q: Why eigenvalue must be 0 or 1?
		</div>

		<div style="margin-top: 4px; margin-bottom: 8px; color: rgb(80, 80, 80); display: flex; align-items: center;">
		 	Answered by:
			<div style="display: flex; cursor: pointer; align-items: center;">
				<a target="_blank" on:click={() => goto('/user/lX5yMlh4abTJycsFyLySoRhUItE3')} 
					style="text-decoration: none; text-decoration: underline; margin-left: 4px; color: purple; cursor: pointer; font-weight: 500;"
				>
					Ben
				</a> 	

				<div class="separator"></div> 

				<div>MIT '25</div>
						
				<div class="separator"></div> 

				<div>
					Top 21 in USA(J)MO		
				</div>
			</div>
		</div>

		<RenderlessListenToBoard 
			dbPath="classes/lvzQqyZIV1wjwYnRV9hn/blackboards/UwXpkXqKTYfrnz5FybRp"
			let:boardDoc={boardDoc}
		>	
			<FullscreenModule {boardDoc}
				let:toggleFullscreen={toggleFullscreen}
				let:canvasWidth={canvasWidth}
				let:canvasHeight={canvasHeight}
				let:isFullscreen={isFullscreen}
			>
				<ReusableDoodleVideo
					{boardDoc}
					{canvasWidth}
					{canvasHeight}
					showEditDeleteButtons={false}
					boardDbPath="classes/lvzQqyZIV1wjwYnRV9hn/blackboards/UwXpkXqKTYfrnz5FybRp"
				/>

				{#if !isFullscreen}
					<div style="width: {window.innerWidth * 0.3}px">
						<VideoFooterInfo video={boardDoc}>
							<div on:click={toggleFullscreen(boardDoc)} class="my-round-button" style="margin-right: 0; margin-left: auto;">
								Full View
							</div>
						</VideoFooterInfo>
					</div>
				{/if}
			</FullscreenModule>
		</RenderlessListenToBoard>
	</div>

		<div>
			<div class="youtube-video-title">
				Q: Review on change of basis
			</div>
			<div style="margin-top: 4px; margin-bottom: 8px;  color: rgb(80, 80, 80); display: flex; align-items: center;">
				Answered by: 
				<div style="margin-left: 4px;">Ammar (retired)</div>
				
				<div class="separator"></div>

				MIT '24
				
				<div class="separator"></div>
								
				Syria IPhO Captain 
			</div>



		<RenderlessListenToBoard 
			dbPath="classes/lvzQqyZIV1wjwYnRV9hn/blackboards/cYVtScLxq3AIaC91HUNW"
			let:boardDoc={boardDoc}
		>
			<FullscreenModule {boardDoc}
				let:toggleFullscreen={toggleFullscreen}
				let:canvasWidth={canvasWidth}
				let:canvasHeight={canvasHeight}
				let:isFullscreen={isFullscreen}
			>
				<ReusableDoodleVideo
					{boardDoc}
					canvasWidth={canvasWidth}
					canvasHeight={canvasHeight}
					showEditDeleteButtons={false}
					boardDbPath="classes/lvzQqyZIV1wjwYnRV9hn/blackboards/cYVtScLxq3AIaC91HUNW" 
				/>
				
				{#if !isFullscreen}
					<div style="width: {window.innerWidth * 0.3}px">
						<VideoFooterInfo video={boardDoc}>
							<div on:click={toggleFullscreen} class="my-round-button" style="margin-right: 0; margin-left: auto;">
								Full View
							</div>
						</VideoFooterInfo>
					</div>
				{/if}
			</FullscreenModule>
		</RenderlessListenToBoard>
	</div>

	<div>
		<div class="youtube-video-title">
			Q: Transforming circular separation --> linear 
		</div>
		<div style="margin-top: 4px; margin-bottom: 8px;  color: rgb(80, 80, 80); display: flex; align-items: center;">
			Answered by: Tony (retired)		<div style="font-size: 12px; margin-left: 4px">
					
				<div class="separator"></div>

			</div> MIT '20
				
			<div class="separator"></div>
			CSAIL PhD	
		</div>

		<RenderlessListenToBoard 
			dbPath="classes/AsUl1VWQ7zzxZsD5epL7/blackboards/JP7ucWZm3TRu9yKodDzW" 
			let:boardDoc={boardDoc}
		>
			<ReusableDoodleVideo
				{boardDoc}
				canvasWidth={window.innerWidth * 0.3}
				canvasHeight={window.innerWidth * 0.3 * 3/4}
				showEditDeleteButtons={false}
				boardDbPath="classes/AsUl1VWQ7zzxZsD5epL7/blackboards/JP7ucWZm3TRu9yKodDzW" 
			/>
			
			<div style="width: {window.innerWidth * 0.3}px">
				<VideoFooterInfo video={boardDoc}/>
			</div>
		</RenderlessListenToBoard>
	</div>

	<!-- TO-DO: add Esther's video since she tutors competitive physics too f = ma -->
</div>

<div style="display: flex; gap: 1vw; flex-wrap: wrap; margin-top: 2vw;">
	<div class="tutor-card">
		Served ~50 teachers & 800 students for MIT math & physics as 
		<a target="_blank" href="https://physics.mit.edu/wp-content/uploads/2021/09/PhysicsAtMIT_2021_Zoom_Feature.pdf">
			explain.mit.edu
		</a> (details on page 5) during covid 2020-2021
	</div>

	<div class="tutor-card">
		Raised 500K seed round from 
		<a href="https://oss.capital/portfolio" target="_blank">OSS Capital</a> (undisclosed)
		in July 2021. Pivoted from realtime blackboards to focus on video explanations.
	</div>

	<div class="tutor-card">
		Failed to work with college classes for various reasons (coming soon on blog). Pivoted. First 3 students joined in March 2024 from
		<a href="https://www.reddit.com/r/PhysicsStudents/comments/1b2t5u6/i_started_a_program_where_mit_grads_do_physics/" target="_blank">
			r/PhysicsStudents
		</a>
	</div>

	<div class="tutor-card" style="height: fit-content; margin-left: auto; width: 340px; border: 2px solid white; background-color: rgb(20, 20, 20); color: rgb(240, 240, 240); font-size: 16px;">		
		389 upvotes on
		<a href="https://news.ycombinator.com/item?id=39836630" target="_blank" style="color: #FF6600;">
			YC HackerNews 
		</a>
	</div>
</div>

<div style="text-align: center; padding-top: 4vw; padding-bottom: 4vw;">
	<img 
		style="width: 60vw; height: auto"
		src="https://firebasestorage.googleapis.com/v0/b/feynman-mvp.appspot.com/o/homePageAssets%2Freframe-positioning-in-matrix.png?alt=media&token=6e70e3ba-5559-4b45-91dd-9b95d1275271"
	> 
</div>

<script>
  import ImageGallery from '$lib/ImageGallery.svelte'
  import Button, { Label } from '@smui/button'
  import ReusableRoundButton from '$lib/ReusableRoundButton.svelte'
  import { goto } from '$app/navigation'
	import HdDoodleVideo from '$lib/HDDoodleVideo.svelte';
	import ReusableDoodleVideo from '$lib/ReusableDoodleVideo.svelte'
	import RenderlessListenToBoard from '$lib/RenderlessListenToBoard.svelte'
	import VideoFooterInfo from '$lib/VideoFooterInfo.svelte'
	import CommentsColumn from '$lib/CommentsColumn.svelte'
	import FullscreenModule from '$lib/FullscreenModule.svelte'

	let fullscreenVideoID = ''

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

	function getRandomIntInclusive({ min, max }) {
		min = Math.ceil(min)
		max = Math.floor(max)
		return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
	}

	function redirectToCalMeetingPage () {
		goto('https://cal.com/eltonlin1998/setup-call')
	}
</script>

<style>
	.my-round-button {
    display: flex; 
    align-items: center; 
    justify-content: center; 
    border-radius: 24px; 
    min-width: 48px; 
    min-height: 16px; 
    padding: 0.5vw; 
    border: 1px solid black;
    cursor: pointer;
	}

	.separator {
		width: 2px;
		height: 2px;
		background-color: #606060;
		border-radius: 50%;
		margin: 4px;
	}

	.youtube-video-title {
		font-size: 20px;
	}

	.my-video-grid {
		display: grid; 
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 1vw;
		padding: 1vw;
	}

  .tutor-card {
    border: 2px solid black; width: 300px; 
		height: 80px; padding: 16px;
    border-radius: 16px;
  }

  .tutor-name {
    font-weight: 600;
    font-size: 16px;
  }

  .tutor-description {
    margin-top: 12px;
    margin-bottom: 12px;
    font-size: 14px;
  }

  .flag-icon {
    font-size: 20px;
  }
</style>