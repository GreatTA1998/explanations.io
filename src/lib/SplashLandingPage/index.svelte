<div class="splash-screen">
	<div style="display: flex; flex-direction: column; gap: 16px; background-color: var(--bg-off-white);">
		<p class="header-title" bind:clientWidth={containerWidth}>
			Youtube style tutoring for math olympiads
		</p>

		<div style="display: flex; flex-wrap: wrap; gap: 30px; align-items: center;">
			<div class="header-subtitle">
				Pick your teacher, ask lots of questions, get video explanations until you understand everything.
			</div>

			<div style="display: flex; flex-direction: column; gap: 6px; align-items: center;"> 
				<ReusableSubscribeButton/>

				<div style="font-size: var(--fs-xs); color: #5d0068; font-weight: 600;">
					6 learners joined this year
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

				<div class="separator"></div>	
				
				<CountryFlags/>

				<div class="separator"></div>	

				<BrandLogos/>
			</div>
		</div>

		<div style="margin-top: 8vw;">
			<RotatingGallery galleryVideos={randomlyChosenExemplarVideos}/>
		</div>

		<!-- <div style="text-align: center; padding: 48px 0px;">
			<img 
				style="min-width: 332px; width: 30vw; height: auto"
				src="https://i.imgur.com/TRxyjmU.png"
				alt="competition landscape"
			> 

			<img
				style="margin-top: 6px;min-width: 332px; width: 50vw; height: auto"
				src="https://i.imgur.com/B9a5Nfp.png"
				alt="sheraz's discord message"
			/>
		</div> -->

		<!-- <FounderSelfIntro/> -->

		<!-- <HistoricalTimeline/> -->
	</div>
</div>

<script>
	import BrandLogos from './BrandLogos.svelte'
	import CountryFlags from './CountryFlags.svelte'
	import RotatingGallery from './RotatingGallery.svelte'
	import ReusableSubscribeButton from '$lib/Reusable/ReusableSubscribeButton.svelte'
	import { onMount } from 'svelte'
	import FounderSelfIntro from './FounderSelfIntro.svelte'
	import HistoricalTimeline from './HistoricalTimeline.svelte'

	let videoWidth = 0
	let videoHeight = 0 // AF(0) means not yet calculated

	let containerWidth

	onMount(() => {
		calculateVideoSizes()
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
</script>

<style>
	.splash-screen {
		height: calc(100vh - var(--height-navbar)); 
    margin-top: var(--height-navbar);
    padding: 4vw 6vw;
    background-color: var(--bg-off-white);
	}

	.separator {
		width: 2px;
		height: 2px;
		background-color: #606060;
		border-radius: 50%;
		margin: 4px 6px;
	}
</style>