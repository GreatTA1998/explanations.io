<div style="display: flex; flex-direction: column; gap: 16px;">
	<p class="header-title" bind:clientWidth={containerWidth}>
		Youtube-style help for competitive math
	</p>

	<div style="display: flex; flex-wrap: wrap; row-gap: 30px; align-items: center;">
		<div class="header-subtitle">
			Subscribe to a teacher. Ask questions flexibly. Get detailed video explanations until you understand everything.
			$16/month.
		</div>

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

	<div style="text-align: center; padding: 8px 0px;">
		<img 
			style="min-width: 332px; width: 60vw; height: auto"
			src="https://firebasestorage.googleapis.com/v0/b/feynman-mvp.appspot.com/o/homePageAssets%2Freframe-positioning-in-matrix.png?alt=media&token=6e70e3ba-5559-4b45-91dd-9b95d1275271"
		> 
	</div>

	<div style="font-size: var(--fs-l); font-weight: 500;">
		Timeline
	</div>

	<div style="display: flex; gap: 1vw; flex-wrap: wrap; padding: 48px 0px;">
		<div class="tutor-card">
			<div class="my-card-title">
				Prototyping: 2018 - 2021 
			</div>
			Developed blackboard video prototype with Dr Jason Ku, Professor Gilbert Strang, Dr Peter Dourmashkin.

			Served 10 classes and 800 students during covid as 
			<a target="_blank" href="https://physics.mit.edu/wp-content/uploads/2021/09/PhysicsAtMIT_2021_Zoom_Feature.pdf">
				explain.mit.edu
			</a> 
			Launched visual forum for physics.
		</div>
	
		<div class="tutor-card">
			<div class="my-card-title">
				2021 summer - 2021 winter
			</div>
			Raised 500K from 
			<a href="https://oss.capital/portfolio" target="_blank">OSS Capital</a> (undisclosed).
			Targetted overcrowded CS classes 6.006 and 6.036 with severe TA shortages. 
			Turns out there were shortages in the first place not because MIT can't solve it,
			but because MIT doesn't want to solve it.

		</div>
	
		<div class="tutor-card">
			<div class="my-card-title">
				2022 - 2023
			</div>
			<ul>
				<li>2022 first-half: tried monetization, working outside the system. 
					After months of campaign only 1 student signed up

				</li>
				<li>2022 second-half: become the economics department tutor that did free tutoring.
					with 4000 total minutes viewed by students. 

				</li>
				<li>2023 first-half: one of my students requested for Linear Algebra help. 
					Found Ben, Ammar, Josue, Noam. Creators signed up, 
					but only for well-taught classes. Reported by MIT for running a paid service.
				</li>
				<li>Worked with Roxbury Community College and Bunker Hill Community College. Ignored.</li>
			</ul>
		</div>
		
		<!--  background-color: rgb(20, 20, 20); color: rgb(240, 240, 240);  -->
		<div class="tutor-card" style="height: fit-content; margin-left: auto; border: 0px solid white; 
		font-size: 16px; color: black;'"
		
	>		
	<div class="my-card-title">
		Tokyo 2024
	</div>
		<li>
			Pivoted to self-learning online communities
		</li>
			First 3 students joined in March 2024 from
			<a href="https://www.reddit.com/r/PhysicsStudents/comments/1b2t5u6/i_started_a_program_where_mit_grads_do_physics/" target="_blank" style="color: #FF6600;">
				r/PhysicsStudents
			</a>
			<br>
			Top 3 with 390 upvotes on 
			<a href="https://news.ycombinator.com/item?id=39836630" target="_blank" style="color: #FF6600;">
				YC HackerNews 
			</a>
			<li>
				Pivoted to online competitive math
			</li>
			<li>
				Goal is to create an alternative that dismantles the artificial scarcity of education opportunities
				that universities (to increase their prestige)
		</div>
	</div>

	<FounderSelfIntro/>
</div>

<script>
  import ReusableRoundButton from '$lib/ReusableRoundButton.svelte'
  import { goto } from '$app/navigation'
	import { onMount } from 'svelte'
	import CreatorFeaturedVideoShowcase from '$lib/CreatorFeaturedVideoShowcase.svelte';
	import FounderSelfIntro from '$lib/FounderSelfIntro.svelte'

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

  .tutor-card {
    /* border: 2px solid #3b4555;  */
		color: #3b4555;
		width: 300px; 
		padding: 12px;
    /* border-radius: 6px; */
		font-size: var(--fs-400);
  }

	.my-card-title {
		font-size: var(--fs-500);
		font-weight: 500;
	}
</style>