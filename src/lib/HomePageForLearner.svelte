<div style="display: flex; flex-direction: column; gap: 16px;">
	<p class="header-title" bind:clientWidth={containerWidth}>
		Youtube style tutoring for competitive math
	</p>

	<div style="display: flex; flex-wrap: wrap; gap: 30px; align-items: center;">
		<div class="header-subtitle">
			Subscribe to someone. Ask them questions. Get detailed video explanations until you understand everything.
			$4/week.
		</div>

		<div style="display: flex; flex-direction: column; gap: 6px; align-items: center;">
			<ReusableRoundButton on:click={redirectToCalMeetingPage}
				backgroundColor="#5d0068"
				textColor="white"
			>
				<div style="font-weight: 600; font-size: var(--fs-s); padding: 12px;">
					Book Setup Call
				</div>
				
				<span style="margin-left: 0px; margin-right: 4px; font-size: var(--fs-l);" class="material-symbols-outlined">
					calendar_add_on
				</span>
			</ReusableRoundButton>

			<div style="font-size: var(--fs-xs); color: #5d0068; font-weight: 600;">
				1 learner joined this week
			</div>
		</div>

		<div style="display: flex; gap: 6px; flex-wrap: wrap; justify-content: flex-end; align-items: center; font-size: var(--fs-xs);">
			#3 front page 
			<a href="https://news.ycombinator.com/item?id=39836630" target="_blank" style="color: #FF6600;">
				YC Hacker News
			</a>

			<div class="separator"></div>

			20 upvotes
			<a href="https://www.reddit.com/r/PhysicsStudents/comments/1b2t5u6/i_started_a_program_where_mit_grads_do_physics/" target="_blank" style="color: #FF6600;">
				r/PhysicsStudents
			</a>
		</div>
	</div>

	{#if videoWidth}
		<div class="alternative-flexbox">
			{#each showcasedCreators as creator}
				<CreatorFeaturedVideoShowcase 
					originalQuestion={creator.originalQuestion}
					boardDbPath={creator.boardDbPath}
					firstNameAndKeyInfo={creator.firstNameAndKeyInfo}
					collegeAndYear={creator.collegeAndYear}
					bio={creator.bio}
					uid={creator.uid}
					previewWidth={videoWidth}
				/>
			{/each}
		</div>
	{/if}

	<SearchAllServers/>

	<div style="text-align: center; padding: 48px 0px;">
		<img 
			style="min-width: 332px; width: 60vw; height: auto"
			src="https://firebasestorage.googleapis.com/v0/b/feynman-mvp.appspot.com/o/homePageAssets%2Freframe-positioning-in-matrix.png?alt=media&token=6e70e3ba-5559-4b45-91dd-9b95d1275271"
		> 
	</div>

	<FounderSelfIntro/>

	<HistoricalTimeline/>
</div>

<script>
  import ReusableRoundButton from '$lib/ReusableRoundButton.svelte'
  import { goto } from '$app/navigation'
	import { onMount } from 'svelte'
	import CreatorFeaturedVideoShowcase from '$lib/CreatorFeaturedVideoShowcase.svelte'
	import SearchAllServers from '$lib/SearchAllServers.svelte'
	import FounderSelfIntro from '$lib/FounderSelfIntro.svelte'
	import HistoricalTimeline from '$lib/HistoricalTimeline.svelte';

	let videoWidth = 0
	let videoHeight = 0 // AF(0) means not yet calculated

	let containerWidth

	onMount(() => {
		calculateVideoSizes()
	})

	const showcasedCreators = [
		{
			originalQuestion: "Q: 2024 AIME I Problem 8",
			boardDbPath: "classes/SifuBglyIefGej71TvS2/blackboards/A8wmIO4q4g5G7jqZCUAz",
			firstNameAndKeyInfo: "Ben (subscribed 5 times)",
			collegeAndYear: "MIT '25",
			bio: "Top 21 USA(J)MO",
			uid: "lX5yMlh4abTJycsFyLySoRhUItE3"
		},
		{
			originalQuestion: "Q: Review on change of basis",
			boardDbPath: "classes/lvzQqyZIV1wjwYnRV9hn/blackboards/cYVtScLxq3AIaC91HUNW",
			firstNameAndKeyInfo: "Ammar (retired)",
			collegeAndYear: "MIT '24",
			bio: "Syria IPhO Captain",
			uid: "uyZJl2yX6hXkiXemCdoMPrYqRfC3"
		},
		{
			originalQuestion: "Q: Circular separation --> linear ",
			boardDbPath: "classes/AsUl1VWQ7zzxZsD5epL7/blackboards/JP7ucWZm3TRu9yKodDzW",
			firstNameAndKeyInfo: "Tony (retired)",
			collegeAndYear: "MIT '20",
			bio: "CSAIL PhD",
			uid: "xHwn0o2nrkW4wUZs7XYVUAvZeWV2"
		}
	]


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

	function calculateVideoSizes() {
		const videoAspectRatio = 16 / 9;

		// 320px is the minimum width needed for video title and description to stay on one-line
		// actually the min. width is different, because it depends on the font-size
		// const minWidth = 300 + 0.06 * containerWidth
		const minWidth = 332
		const scalingWidth = 220 + 0.12 * containerWidth
		videoWidth = Math.max(minWidth, scalingWidth)
		videoHeight = Math.floor(videoWidth / videoAspectRatio);

		return { videoWidth, videoHeight };
	}

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
	.alternative-flexbox {
    display: flex; 
		justify-content: space-between;
		flex-wrap: wrap;
		row-gap: 36px;

		padding: 48px 6px; 
		outline: 0px solid red;
  }

	.separator {
		width: 2px;
		height: 2px;
		background-color: #606060;
		border-radius: 50%;
		margin: 4px 6px;
	}
</style>