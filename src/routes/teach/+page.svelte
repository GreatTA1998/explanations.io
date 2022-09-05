{#if Object.keys($user).length === 0}
	<section style="height: {260}px; padding-top: 100px; padding-bottom: 100px; border-bottom: 1px solid #eee;">
		<div class="content" style="width: {$canvasWidth}px">
			<h1 style="margin-top: 0; font: 35px/1.5 'Lucida Grande', 'Lucida Sans Unicode', Helvetica, Arial, Verdana, sans-serif">How about high pay, short hours?</h1>
			<p style="font-size: 1.2rem; color: #33333d; font-weight: 300; font-family: 'Lucida Grande', 'Lucida Sans Unicode', Helvetica, Arial, Verdana, sans-serif">
				Suppose you can make a great-living out of teaching, and it's no longer about hours spent, but instead effectiveness. So if you do a great job in 10 minutes, you're done. And you can get paid proportional to the impact you have, without having to 
				handle class logistics etc.

				<br>
				<br>
			</p>
		</div>
	</section>

	<section style="background: #FDFDF8; height: {$canvasHeight +800}px; padding-top: 100px; padding-bottom: 100px; border-bottom: 1px solid #eee;">
		<div class="content" style="width: {$canvasWidth}px">
			<h1 style="margin-top: 0; font: 35px/1.5 'Lucida Grande', 'Lucida Sans Unicode', Helvetica, Arial, Verdana, sans-serif">How teaching on Explain works</h1>
			<p style="font-size: 1.2rem; color: #33333d; font-weight: 300; font-family: 'Lucida Grande', 'Lucida Sans Unicode', Helvetica, Arial, Verdana, sans-serif">
				Sal Khan's KhanAcademy videos, or 3Blue1Brown's videos...etc. have benefited millions of people. If you use recorded explanations whenever appropriate, it enables you to teach efficiently. 
				Explain is designed around the concept of, re-use explanations and of fundamental concepts and canonical problems whenever it is wise to do so, and then make up everything else with individual help.
				
			<br>
			<br>
				Recording explanations is painful. Recording videos on the internet has the technological barrier of heavy files, convoluted workflows and long upload times. But actually it's unrewarding - you don't have a live audience. Think what proportion of smart people you know have Youtube channels. 
				Recording lectures and recitations live are also painful - it's all the inconveniences previously mentioned, AND needing a camera crew. 
				<br>
			<br>
				Explain makes it rewarding and efficient to re-use explanations. How it works is, you decide to record your <b>live</b> explanations to students who asked you a question. Answering a question live to someone who wants your help is much more rewarding than recording an arbitrary video in isolation and not knowing if people will find it useful. 	
				Second, videos here are <b>light</b>. A 10GB video on YouTube will be around 100MB here - which means near-instant upload. That's because the website is optimized for blackboard videos, and blackboard videos can be crazy-optimized vs arbitrary general videos. 
				You can literally one-click upload explanations, and move them, edit them, like you would with text. It's blackboard-as-a-first-class-citizen experience.
			<br>
			<br>
				In summary, Explain = Discord (voice chat) + KhanAcademy (blackboards). Here, blackboard videos upload near-instantly, so explanations are <b>easily re-usable.</b>
				<br>
				<br>
				Here's an example video that was recorded on this website: 
			</p>
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

	<section style="height: 100%; padding-top: 150px; padding-bottom: 150px; border-bottom: 1px solid #eee;">
		<div class="content" style="width: {$canvasWidth}px">
			<h1 style="margin-top: 0; font: 35px/1.5 'Lucida Grande', 'Lucida Sans Unicode', Helvetica, Arial, Verdana, sans-serif">
				Get started
			</h1>

			<p style="font-size: 1.2rem; color: #33333d; font-weight: 300; font-family: 'Lucida Grande', 'Lucida Sans Unicode', Helvetica, Arial, Verdana, sans-serif">
				You teach a group of students on a Discord-like server. Every student contributes $20/week for you to help them.
				<br>
				<br>

				How it works:
				<li>You teach a group of students on a Discord-like server</li>
				<li>Students will request real-time help from you via voice chat and blackboard</li>
				<li>Many fundamental explanations are recorded, so your visual explanations build up over time for everyone to reference</li>
				<li>Each student pays $20/week, and you receive $18n/week. A 20-student server means $360/week, requiring around 5 hours commitment</li>
			</p>

			<iframe style="display: block;" width={$canvasWidth} height={$canvasHeight} src="https://www.youtube.com/embed/kJSZYFEQ_8I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
		</div>
	</section>

	<section style="background: #FDFDF8; height: 100%; padding-top: 150px; padding-bottom: 150px; border-bottom: 1px solid #eee;">
		<div class="content" style="width: {$canvasWidth}px">
			<h1 style="margin-top: 0; font: 35px/1.5 'Lucida Grande', 'Lucida Sans Unicode', Helvetica, Arial, Verdana, sans-serif">
				How to get started
			</h1>

			<p style="font-size: 1.2rem; color: #33333d; font-weight: 300; font-family: 'Lucida Grande', 'Lucida Sans Unicode', Helvetica, Arial, Verdana, sans-serif">
				Any questions, email the organizer eltonlin@mit.edu or text 503 250 3868, I reply quickly
			</p>
		</div>
	
		<PhoneLogin/>
	</section>
{/if}

<script>	
	import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth'
	import { onMount, tick, onDestroy } from 'svelte'
	import { goto } from '$app/navigation'
	import { canvasHeight, canvasWidth, user, recordState } from '../../store.js'
	import DoodleVideo from '$lib/DoodleVideo.svelte'
	import RenderlessListenToBoard from '$lib/RenderlessListenToBoard.svelte'
	import { calculateCanvasDimensions2 } from '../../helpers/canvas.js'
	import RenderlessFetchStrokes from '$lib/RenderlessFetchStrokes.svelte'
	import PhoneLogin from '$lib/PhoneLogin.svelte'
	import Button, { Label } from '@smui/button';
	import HelperText from '@smui/textfield/helper-text'
	import Textfield from '@smui/textfield';
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

#make-your-own-video {

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
