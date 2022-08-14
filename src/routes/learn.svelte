{#if Object.keys($user).length === 0}
	<section style="background: #FDFDF8; height: 100%; padding-top: 100px; padding-bottom: 100px; border-bottom: 1px solid #eee;">
		<div class="content" style="width: {$canvasWidth}px">
			<h1 style="margin-top: 0; font: 35px/1.5 'Lucida Grande', 'Lucida Sans Unicode', Helvetica, Arial, Verdana, sans-serif">
				What we truly fear isn't failing classes...
			</h1>

			<p style="font-size: 1.2rem; color: #33333d; font-weight: 300; font-family: 'Lucida Grande', 'Lucida Sans Unicode', Helvetica, Arial, Verdana, sans-serif">
				We dread having to go through the day-to-day, waking up with a headache, seeing a grey sky, walking to a class you hate, not understanding anything. 
				<br>
				<br>
				It's the fatigue and anxiety. It's the purposelessness. It's the isolation. 
				<br>
				<br>
				There are many reasons why we fall behind classes. But the fact we can't <u>recover</u> is the problem. We especially visit Office Hours, only to wait 30 minutes for 5 minutes of "hints".
				<br>
				<br>
				When night comes, either we're so burnt out that we can't do any work, or we try to sleep knowing that tomorrow will be just as bad. We're stuck in a vicious cycle of compounding inefficiencies. The suffering isn't extreme or intense, it's prolonged and pervasive. 
				<br>
				<br>	
				That's what keeps us up at night.
			</p>
			<br>
		</div>
	</section>

	<section style="height: {260}px; padding-top: 100px; padding-bottom: 100px; border-bottom: 1px solid #eee;">
		<div class="content" style="width: {$canvasWidth}px">
			<h1 style="margin-top: 0; font: 35px/1.5 'Lucida Grande', 'Lucida Sans Unicode', Helvetica, Arial, Verdana, sans-serif">College can be full of colors</h1>
			<p style="font-size: 1.2rem; color: #33333d; font-weight: 300; font-family: 'Lucida Grande', 'Lucida Sans Unicode', Helvetica, Arial, Verdana, sans-serif">
				Imagine if the material was so good that, everything you need to know is clearly explained and re-watchable at your own pace. And suppose anything were to be missing, you can just ask for help efficiently without having to travel to campus, wait till the next Office Hours / for a Piazza response?
				<br>
				<br>
				Then, we'd efficiently grasp the fundamentals, fully recover, and actually look forward to our classes.
			</p>
		</div>
	</section>

	<section style="height: {$canvasHeight + 400}px; padding-top: 100px; padding-bottom: 100px; border-bottom: 1px solid #eee;">
		<div class="content" style="width: {$canvasWidth}px">
			<h1 style="margin-top: 0; font: 35px/1.5 'Lucida Grande', 'Lucida Sans Unicode', Helvetica, Arial, Verdana, sans-serif">What is Explain?</h1>
			<div style="margin-bottom: 20px; font-size: 1.2rem; color: #33333d; font-weight: 300; font-family: 'Lucida Grande', 'Lucida Sans Unicode', Helvetica, Arial, Verdana, sans-serif">
					Explain is a place with voice chat and lots of blackboards:
					<ol>
						<li>
							To ask a question, add a ? to a sentence and the server will be pinged by text				
						</li>
						<li>
							While receiving help, the teacher can record the explanation with 1-click and <u>near-instantly</u> upload it
						</li>
						<li>
							Overtime, great explanations accumulate for everyone to review
						</li>
					</ol>
				<br>
				Here's an example video that was recorded on this website: 
			</div>
		</div>

		<div style={`position: relative; width: ${$canvasWidth}px; height: ${$canvasHeight + 60}px; margin: auto;`} id="caleb-video-section">
			<RenderlessListenToBoard dbPath="/classes/AsUl1VWQ7zzxZsD5epL7/blackboards/AsUl1VWQ7zzxZsD5epL7"
				let:boardDoc={boardDoc}
			>
				<RenderlessFetchStrokes dbPath="/classes/AsUl1VWQ7zzxZsD5epL7/blackboards/AsUl1VWQ7zzxZsD5epL7" autoFetchStrokes={true}
					let:strokesArray={strokesArray}
				>
					{#if boardDoc}
						<DoodleVideo 
							{strokesArray} 
							audioDownloadURL={boardDoc.audioDownloadURL} 
							backgroundImageDownloadURL={boardDoc.backgroundImageDownloadURL}
						/>
					{/if}
				</RenderlessFetchStrokes>
			</RenderlessListenToBoard>
		</div>
	</section>

	<section style="height: 100%; padding-top: 150px; padding-bottom: 150px; border-bottom: 1px solid #eee; background: #FDFDF8;">
		<div class="content" style="width: {$canvasWidth}px">
			<h1 style="margin-top: 0; font: 35px/1.5 'Lucida Grande', 'Lucida Sans Unicode', Helvetica, Arial, Verdana, sans-serif">
				Website preview
			</h1>

			<p style="font-size: 1.2rem; color: #33333d; font-weight: 300; font-family: 'Lucida Grande', 'Lucida Sans Unicode', Helvetica, Arial, Verdana, sans-serif">
				How it works:
				<li>Everyone contributes $20/week to the class server</li>
				<li>Tutor runs the server and helps you personally as you want</li>
				<li>Many fundamental explanations are recorded, so your question benefits other server members, and vice versa.</li>
			</p>

			<iframe style="display: block;" width={$canvasWidth} height={$canvasHeight} src="https://www.youtube.com/embed/kJSZYFEQ_8I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
		</div>
	</section>

	<section style="height: 100%; padding-top: 150px; padding-bottom: 150px; border-bottom: 1px solid #eee;">
		<div class="content" style="width: {$canvasWidth}px">
			<h1 style="margin-top: 0; font: 35px/1.5 'Lucida Grande', 'Lucida Sans Unicode', Helvetica, Arial, Verdana, sans-serif">
				Get started
			</h1>

			<p style="font-size: 1.2rem; color: #33333d; font-weight: 300; font-family: 'Lucida Grande', 'Lucida Sans Unicode', Helvetica, Arial, Verdana, sans-serif">
				Any questions, email the organizer eltonlin@mit.edu
				<br>
				<br>
				<li>Request a class by venmo'ing $20 to elton-lin-2</li>
				<li>I'll send you a confirmation, create a server and find your tutor within 24 hours</li>
				<li>Refund anytime any reason</li>
			</p>
		</div>

		<!-- <PhoneLogin/> -->
	</section>
{/if}

<script>	
	import { onMount, tick, onDestroy } from 'svelte'
	import { canvasHeight, canvasWidth, user, recordState } from '../store.js'
	import DoodleVideo from '$lib/DoodleVideo.svelte'
	import RenderlessListenToBoard from '$lib/RenderlessListenToBoard.svelte'
	import { calculateCanvasDimensions2 } from '../helpers/canvas.js'
	import RenderlessFetchStrokes from '$lib/RenderlessFetchStrokes.svelte'
	import PhoneLogin from '$lib/Phonelogin.svelte'
	import Button, { Label } from '@smui/button';
	import HelperText from '@smui/textfield/helper-text'
	import Textfield from '@smui/textfield';
	import { goto } from '$app/navigation'
	import Blackboard from '$lib/Blackboard.svelte'
	import RenderlessAudioRecorder from '$lib/RenderlessAudioRecorder.svelte'

	let currentTime = 10
	let titleValue = 'Welcome!'
	let i = 0
	let typewriter

	const print = console.log
	let hasClickedTitle = false
	$: isQuestionMode = '?' === titleValue.charAt(titleValue.length - 1)
	let hasWatchedExemplar = false
	let hasRecordedVideo = false
	let localStrokesArray = []
	let audioBlobURL = ''
	let hasWatchedVideo = false
	let timer
	let demoStrokesArray = []

	function startTypingAnimation () {
		titleValue = ''
		const values = [
			'Gradient descent',
			'Finals 2019',
			'RNN example',
			"Explain 2b visually",
		]
		typewriter = setInterval(() => {
			titleValue = values[i]
			i += 1
			if (i === values.length) {
				clearInterval(typewriter)
			}
		}, 300)
	}

	$:if (isQuestionMode) {
		setTimeout(() => {
			hasWatchedExemplar = true
		}, 5000)
	}

	$: if (currentTime.toFixed(0) === '0') {
		console.log('end of timer, currentTime =', currentTime)
		clearInterval(timer)
	}

	$: if (hasWatchedVideo) {
		tick().then(() => {
			const elem = document.getElementById('sign-up-section')
			elem.scrollIntoView({ 
				block: "center", // vertical alignment
				inline: "nearest", // horizontal alignment
				// behavior: "smooth"
			})
		})
	}

	function adjustContentDimensions () {
		const { width, height } = calculateCanvasDimensions2()
		canvasWidth.set(width) 
		canvasHeight.set(height)
	}

	onMount(() => {
		window.addEventListener('resize', adjustContentDimensions)
		adjustContentDimensions()
	})

	onDestroy(() => {
		window.removeEventListener('resize', adjustContentDimensions)
	})

	async function startRealtimeDemo (element, strokesArray) {
		for (const stroke of strokesArray) {
			demoStrokesArray = [...demoStrokesArray, stroke]
			await new Promise(resolve => setTimeout(resolve, 200));
		}
	}

	function saveVideoLocally (audioBlob) {
		audioBlobURL = URL.createObjectURL(audioBlob)
		hasRecordedVideo = true
		setTimeout(() => hasWatchedVideo = true, 5000)
		// quick-fix, otherwise when user logs in to a real server their blackboard is *shown* to be uploading for some reason
		recordState.set('pre_record')
	}

	function startRecordCountdown (element) {
		timer = setInterval(() => currentTime -= 1, 1000)	
	}
</script>

<style>
:global(.room-title input) {
  font-size: 2rem;
}

:global(.question input) {
  color: rgb(19, 145, 230) !important
}

.copied-from-koa {
	font: 20px/1.7 "Lucida Grande", "Lucida Sans Unicode", Helvetica, Arial, Verdana, sans-serif
}
/* increased 17px to 18px */

#logo {
	font: 150px 'Italiana', sans-serif;
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
</style>

<!-- 	<picture>
				<source srcset="svelte-welcome.webp" type="image/webp" />
				<img src="svelte-welcome.png" alt="Welcome" />
			</picture> -->
<!-- 
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
