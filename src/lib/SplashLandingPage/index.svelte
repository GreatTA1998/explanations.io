<div class="splash-screen">
	<div style="display: flex; flex-direction: column; gap: 16px; background-color: var(--bg-off-white);">
		<p class="header-title" bind:clientWidth={containerWidth}>
			Youtube style help for math & engineering
		</p>

		<div style="display: flex; flex-wrap: wrap; gap: 30px; align-items: center;">
			<div class="header-subtitle">
				Subscribe to anyone, get <b>proper</b> explanations once and for all. 
			</div>

			<div style="display: flex; flex-direction: column; gap: 6px; align-items: center;"> 
				<button type="button" class="open-server" on:click={openDefaultServer} disabled={openingServer}>
					Open a server
				</button>
			</div>

			<div style="display: flex; gap: 6px; flex-wrap: wrap; justify-content: flex-end; align-items: center; font-size: var(--fs-xs);">
				#3 front page 
				<!-- style="color: #FF6600;" -->
				<a href="https://news.ycombinator.com/item?id=39836630" target="_blank">
					YC Hacker News
				</a>

				<div class="separator"></div>

				20 upvotes
				<!-- style="color: #FF6600;" -->
				<a href="https://www.reddit.com/r/PhysicsStudents/comments/1b2t5u6/i_started_a_program_where_mit_grads_do_physics/" target="_blank">
					r/PhysicsStudents
				</a>

				<div class="separator"></div>	
				
				<CountryFlags/>

				<!-- <div class="separator"></div>	 -->
				<!-- <BrandLogos/> -->
			</div>
		</div>

		<div style="margin-top: 6vw;">
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
	import { onMount } from 'svelte'
	import { goto } from '$app/navigation'
	import { getFirestoreDoc } from '/src/helpers/crud.js'
	import { handleServerRedirect } from '/src/helpers/everythingElse.js'
	import { isFullServerMode } from '/src/store.js'
	import FounderSelfIntro from './FounderSelfIntro.svelte'
	import HistoricalTimeline from './HistoricalTimeline.svelte'

	let videoWidth = 0
	let videoHeight = 0 // AF(0) means not yet calculated

	let containerWidth
	let openingServer = false

	// Algebra and Number Theory, the public server the splash used to open.
	const DEFAULT_SERVER_ID = 'I90n3qyz45VmY0azjbhh'

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

	async function openDefaultServer () {
		if (openingServer) return
		openingServer = true
		isFullServerMode.set(true)
		try {
			const server = await getFirestoreDoc(`classes/${DEFAULT_SERVER_ID}`)
			handleServerRedirect(server)
		} catch (error) {
			console.error(error)
			await goto(`/${DEFAULT_SERVER_ID}/overview`)
		} finally {
			openingServer = false
		}
	}

	function getRandomIntInclusive({ min, max }) {
		min = Math.ceil(min)
		max = Math.floor(max)
		return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
	}
</script>

<style>
	.splash-screen {
		height: 100vh;
    padding: 6vw 6vw;
    background-color: var(--bg-off-white);
	}

	.open-server {
		background: #5d0068;
		color: white;
		padding: 12px 24px;
		border-radius: 24px;
		border: none;
		font-weight: 500;
		font-size: 16px;
		width: fit-content;
		height: 44px;
		cursor: pointer;
		transition: all 0.2s ease;
	}

	.open-server:hover {
		transform: translateY(-1px);
		box-shadow: 0 4px 12px rgba(93, 0, 104, 0.2);
	}

	.open-server:disabled {
		opacity: 0.7;
		cursor: default;
		transform: none;
		box-shadow: none;
	}

	.separator {
		width: 2px;
		height: 2px;
		background-color: #606060;
		border-radius: 50%;
		margin: 4px 6px;
	}
</style>