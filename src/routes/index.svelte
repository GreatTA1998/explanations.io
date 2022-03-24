<section style="height: 100vh; border-bottom: 1px solid #eee;">
	<div style="height: 100vh; display: flex; justify-content: center; align-items: center;">
		<div style="padding-bottom: 90px;">
			<div style="display: flex; align-items: center; justify-content: center; height: 120px;">
				<img src="logo.png" width="95" height="85">
				<h1 id="logo" style="font-size: 5rem; color: rgb(0 0 0); padding-bottom: 19px; padding-left: 15px;">
					explain.mit.edu
				</h1>
			</div>
			<div style="display: flex; justify-content: center;">
				<b style="color: grey" class="copied-from-koa">Blackboard-centric explanation platform for MIT classes</b>
			</div>
		</div>
	</div>
	
</section>


<section style="background: #FDFDF8; height: 880px; padding: 150px 100px; border-bottom: 1px solid #eee;">
	<div class="content">
		<h1 style="margin-top: 0; font: 35px/1.5 'Lucida Grande', 'Lucida Sans Unicode', Helvetica, Arial, Verdana, sans-serif">Introduction</h1>
		<p style="font-size: 1.2rem; color: #33333d; font-weight: 300; font-family: 'Lucida Grande', 'Lucida Sans Unicode', Helvetica, Arial, Verdana, sans-serif">
			explain.mit.edu is Discord (voice chat) + KhanAcademy (blackboards). Here, blackboard videos upload near-instantly, so explanations are <b style="color: #b22ab2;">easily re-usable.</b>
			<br>
			<br>
			Here's an example:
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

<section style="height: 100%; padding: 150px 100px; border-bottom: 1px solid #eee;">
	<div class="content">
		<h1 style="margin-top: 0; font: 35px/1.5 'Lucida Grande', 'Lucida Sans Unicode', Helvetica, Arial, Verdana, sans-serif">
			For difficult classes, it's <b style="color: red">hard to get help</b>
		</h1>

		<p style="font-size: 1.2rem; color: #33333d; font-weight: 300; font-family: 'Lucida Grande', 'Lucida Sans Unicode', Helvetica, Arial, Verdana, sans-serif">
			<li><b>Office Hours</b>: "Wait-time is 40 minutes, and by the way, we can only help you for 5 minutes"</li>
			<li><b>Piazza</b>: Good luck asking about Quantum Mechanics over async. text communication</li>	
			<li><b>HKN</b>: p(tutor available) = p(getting struck by lightning)</li>
		</p>
		<br>
	</div>
</section>

<section style="background: #FDFDF8; height: 100%; padding: 150px 100px; border-bottom: 1px solid #eee">
	<div class="content">
		<h1 style="margin-top: 0; font: 35px/1.5 'Lucida Grande', 'Lucida Sans Unicode', Helvetica, Arial, Verdana, sans-serif">
			<b style="color: rgb(15 186 191)">Try KhanAcademy-style group tutoring</b>
		</h1>

		<p style="font-size: 1.2rem; color: #33333d; font-weight: 300; font-family: 'Lucida Grande', 'Lucida Sans Unicode', Helvetica, Arial, Verdana, sans-serif">
			<li>n students each pay $10/week to 1 tutor</li>
			<li>You request real-time help anytime</li>
			<li>Whenever anyone receives help, visual explanations accumulate on the server, benefitting everyone.</li>
		</p>

		<iframe width="690" height="480" src="https://www.youtube.com/embed/kJSZYFEQ_8I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

	</div>

</section>

<!-- Sign-up -->
<section style="height: 250px; padding: 150px 100px; border-bottom: 1px solid #eee">
	<div class="content">
		<h1 style="margin-top: 0; font: 35px/1.5 'Lucida Grande', 'Lucida Sans Unicode', Helvetica, Arial, Verdana, sans-serif">
			Get started
		</h1>

		<p style="font-size: 1.2rem; color: #33333d; font-weight: 300; font-family: 'Lucida Grande', 'Lucida Sans Unicode', Helvetica, Arial, Verdana, sans-serif">
			<li>Venmo $10 to elton-lin-2, don't forget to specify a class (e.g. 6.006)</li>
			<li>Create a phone account to join the server</li>
			<li>Refund anytime, any reason.</li>
		</p>
		
	


			<div id="sign-up-section" style="height: 100px">
				{#if !phoneConfirmationResult}
					<div style="display: flex; justify-content: center; align-items: center; margin-top: 24px; margin-right: 6px; margin-left: auto;">
						<div style="margin-right: 10px; font-family: Roboto, sans-serif; font-size: 2rem">+1 </div>
						<input type="tel" id="phone-input-1" minlength="3" maxlength="3" placeholder="339" bind:value={phoneNumSegment1} style="width: 54px; height: 40px; font-size: 2rem; margin-right: 10px">

						<input type="tel" id="phone-input-2" minlength="3" maxlength="3" placeholder="676" bind:value={phoneNumSegment2} style="width: 54px; height: 40px; font-size: 2rem; margin-right: 10px">

						<input type="tel" id="phone-input-3" minlength="4" maxlength="4" placeholder="1234" bind:value={phoneNumSegment3} style="width: 76px; height: 40px; font-size: 2rem; margin-right: 10px">
						<Button id="sign-in-button" on:click={signInWithPhone} style="color: rgb(80 185 165)">
							Sign Up
						</Button>
					</div>
				{:else}
					<div style="display: flex">
						<Textfield variant="filled" bind:value={phoneConfirmCode} label="6-digit code">
							<HelperText slot="helper"></HelperText>
						</Textfield>
						<Button on:click={verifyConfirmationCode}>Confirm code</Button>
					</div>
				{/if}
			</div>
		<p style="font-size: 1.2rem; color: #33333d; font-weight: 300; font-family: 'Lucida Grande', 'Lucida Sans Unicode', Helvetica, Arial, Verdana, sans-serif">
		
			<br>
			<br>

		</p>
	</div>
</section>

<!-- FAQ -->
<section style="background: #FDFDF8; height: 100%; padding: 150px 100px; border-bottom: 1px solid #eee">
	<div class="content">
		<h1 style="margin-top: 0; font: 35px/1.5 'Lucida Grande', 'Lucida Sans Unicode', Helvetica, Arial, Verdana, sans-serif">
			Frequently Asked Questions
		</h1>
		<br>
		<br>
		<h2 style="color: #33333d; margin-top: 0; font: 20px/1.5 'Lucida Grande', 'Lucida Sans Unicode', Helvetica, Arial, Verdana, sans-serif">
			<b>Q: Why not work with in-class TAs?</b>
		</h2>
		<p style="font-size: 1.26rem; color: #33333d; font-weight: 300; font-family: 'Lucida Grande', 'Lucida Sans Unicode', Helvetica, Arial, Verdana, sans-serif">
			
				<b>A: Stronger teaching incentives:</b>
					Teaching more is not financially rewarded because salaries are constant. Moreover, staff members are severely time-limited too: research, staff management, etc. so it's costly to try new things.
					<br><br>
				  Outside tutors (EECS grad. students) - on the other hand - have fewer commitments, and are allowed to be rewarded proportional to their impact. This means skin-in-the-game to provide as great an experience as possible.
		</p>

		<br>
		<br>

		<p style="font-size: 1.26rem; color: #33333d; font-weight: 300; font-family: 'Lucida Grande', 'Lucida Sans Unicode', Helvetica, Arial, Verdana, sans-serif">
			<b>For other questions, ping the organizer eltonlin@mit.edu or 503 250 3868 anytime.</b>
		</p>
	</div>
</section>

<script>	
	import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth'
	import Button, { Label } from '@smui/button';
	import HelperText from '@smui/textfield/helper-text'
	import Textfield from '@smui/textfield';
	import { onMount, tick } from 'svelte'
	import { goto } from '$app/navigation'
	import { canvasHeight, canvasWidth, user, recordState } from '../store.js'
	import Blackboard from '$lib/Blackboard.svelte'
	import DoodleVideo from '$lib/DoodleVideo.svelte'
	import RenderlessAudioRecorder from '$lib/RenderlessAudioRecorder.svelte'
	import RenderlessListenToBoard from '$lib/RenderlessListenToBoard.svelte'
	import { calculateCanvasDimensions2 } from '../helpers/canvas.js'
	import RenderlessFetchStrokes from '$lib/RenderlessFetchStrokes.svelte'

	let currentTime = 10
	let titleValue = 'Welcome!'
	let i = 0
	let typewriter

	let phoneNumSegment1 = ''
	let phoneNumSegment2 = ''
	let phoneNumSegment3 = ''
	let phoneConfirmationResult
	let phoneConfirmCode = ''

	let appVerifier
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


	$: if (phoneNumSegment1.length === 3) {
		document.getElementById('phone-input-2').focus()
	}
	$: if (phoneNumSegment2.length === 3) {
		document.getElementById('phone-input-3').focus()
	}

	$: if (phoneNumSegment3.length === 4) {
		signInWithPhone()
	}

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

	if ($user.uid) {
		goto('AsUl1VWQ7zzxZsD5epL7/AsUl1VWQ7zzxZsD5epL7')
	}

	onMount(() => {
		const { width, height } = calculateCanvasDimensions2()
		canvasWidth.set(width) 
		canvasHeight.set(height)
	})


	function startRecordCountdown (element) {
		timer = setInterval(() => currentTime -= 1, 1000)	
	}

	function signInWithPhone () {
		if (!window.recaptchaVerifier) {
			window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
				'size': 'invisible',
				'callback': (response) => {
					// reCAPTCHA solved, allow signInWithPhoneNumber.
					console.log('reCAPTCHA solved =', response)
					// onSignInSubmit()
				}
			}, getAuth())
			appVerifier = window.recaptchaVerifier;
		}

		onSignInSubmit();

		function onSignInSubmit () {
			const phoneNumber = `+1 ${phoneNumSegment1}-${phoneNumSegment2}-${phoneNumSegment3}`
			print(getAuth(), phoneNumber, appVerifier)
			signInWithPhoneNumber(getAuth(), phoneNumber, appVerifier)
				.then((confirmationResult) => {
					console.log('confirmation result =', confirmationResult)
					phoneConfirmationResult = confirmationResult

					// SMS sent. Prompt user to type the code from the message, then sign the
					// user in with confirmationResult.confirm(code).
					window.confirmationResult = confirmationResult
					// ...
				}).catch((error) => {
					alert(error)
					console.log('error =', error)
					// Error; SMS not sent
					// ...
			
					// if it fails, reset 
					// grecaptcha.reset(window.recaptchaWidgetId);
			
					// Or, if you haven't stored the widget ID:
					window.recaptchaVerifier.render().then(function(widgetId) {
						grecaptcha.reset(widgetId);
					})
				});
			}
		}

		// SIGN IN WITH CONFIRMATION CODE
		function verifyConfirmationCode () {
			console.log('phoneConfirmCode =', phoneConfirmCode)
			window.confirmationResult.confirm(phoneConfirmCode).then((result) => {
				// User signed in successfully.
				const user = result.user;
				console.log('redirecting, user =', user)
				goto('AsUl1VWQ7zzxZsD5epL7/AsUl1VWQ7zzxZsD5epL7', { replaceState: true })
				// ...
			}).catch((error) => {
				alert(error)
				// User couldn't sign in (bad verification code?)
				// ...
			});
	}
</script>

<style>
:global(.room-title input) {
  font-size: 2rem;
}

:global(.question input) {
  color: rgb(19, 145, 230) !important;
}

.copied-from-koa {
	font: 17px/1.5 "Lucida Grande", "Lucida Sans Unicode", Helvetica, Arial, Verdana, sans-serif
}
/* increased 17px to 18px */

#logo {
    font: 150px 'Italiana', sans-serif;
    text-transform: lowercase;
}

.content {
	margin: 0 auto;
	max-width: 750px;
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
