<div style="display: flex; flex-direction: column; gap: 16px;">
	<p class="header-title" bind:clientWidth={containerWidth}>
		Youtube-style tutoring for competitive math
	</p>

	<div style="display: flex; flex-wrap: wrap; gap: 16px	; align-items: center;">
		<div class="header-subtitle">
			Subscribe to a teacher. Ask them questions directly. Get detailed video explanations until you understand everything.
			$16/month.
		</div>

		<ReusableRoundButton on:click={redirectToCalMeetingPage}
			backgroundColor="#5d0068"
			textColor="white"
		>
			<div style="font-weight: 600; font-size: var(--fs-m); padding: 12px 12px;">
				Book Setup Call
			</div>
			
			<span style="margin-left: 0px; margin-right: 4px; font-size: var(--fs-l);" class="material-symbols-outlined">
				videocam
			</span>
		</ReusableRoundButton>
	</div>

	{#if videoWidth}
		<div class="alternative-flexbox" style="padding: 32px 0px; outline: 0px solid red;">
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

	<div style="display: flex; gap: 1vw; flex-wrap: wrap;">
		<div class="tutor-card">
			Served 50 teachers & 800 students for MIT math & physics as 
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
			Failed to work with college classes for various reasons (blog coming soon). Pivoted. First 3 students joined in March 2024 from
			<a href="https://www.reddit.com/r/PhysicsStudents/comments/1b2t5u6/i_started_a_program_where_mit_grads_do_physics/" target="_blank">
				r/PhysicsStudents
			</a>
		</div>
	
		<div class="tutor-card" style="height: fit-content; margin-left: auto; width: 340px; border: 2px solid white; background-color: rgb(20, 20, 20); color: rgb(240, 240, 240); font-size: 16px;">		
			Received 390 points on
			<a href="https://news.ycombinator.com/item?id=39836630" target="_blank" style="color: #FF6600;">
				YC HackerNews 
			</a>
		</div>
	</div>
	
	<div style="text-align: center;">
		<img 
			style="min-width: 300px; width: 60vw; height: auto"
			src="https://firebasestorage.googleapis.com/v0/b/feynman-mvp.appspot.com/o/homePageAssets%2Freframe-positioning-in-matrix.png?alt=media&token=6e70e3ba-5559-4b45-91dd-9b95d1275271"
		> 
	</div>
</div>

<script>
  import ReusableRoundButton from '$lib/ReusableRoundButton.svelte'
  import { goto } from '$app/navigation'
	import { onMount } from 'svelte'
	import CreatorFeaturedVideoShowcase from '$lib/CreatorFeaturedVideoShowcase.svelte';

	let videoWidth = 0
	let videoHeight = 0 // AF(0) means not yet calculated

	let containerWidth

	onMount(() => {
		calculateVideoSizes()
	})

	const showcasedCreators = [
		{
			originalQuestion: "Q: Why eigenvalue must be 0 or 1?",
			boardDbPath: "classes/lvzQqyZIV1wjwYnRV9hn/blackboards/UwXpkXqKTYfrnz5FybRp",
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

	// TO-DO: doesn't work for intermediate sizes
	function calculateVideoSizes() {
		// Configuration
		const minMobileWidth = 320;
		const tabletBreakpoint = 768;
		const desktopBreakpoint = 1024;
		const videoAspectRatio = 16 / 9;
		const containerPadding = 20; // Padding on each side

		let videosPerRow

		// 320px is the minimum width needed for video title and description to stay on one-line
		// actually the min. width is different, because it depends on the font-size
		// so I'd find a minimum 
		const minWidth = 320

		if (containerWidth >= tabletBreakpoint) {
			videosPerRow = 3
		} else {
			videosPerRow = 1
		}

		// 0.9 multiplier accounts for spacing
		videoWidth = 1 * Math.floor(containerWidth / videosPerRow); 
		const decidedWidth = Math.max(minWidth, videoWidth)

		videoHeight = Math.floor(decidedWidth / videoAspectRatio);

		return { videoWidth: decidedWidth, videoHeight, videosPerRow };
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
    gap: 2vw;
    justify-content: space-evenly;
		padding: 1vw;
		flex-wrap: wrap;
  }

  .tutor-card {
    border: 2px solid black; width: 300px; 
		height: 80px; padding: 16px;
    border-radius: 16px;
  }
</style>