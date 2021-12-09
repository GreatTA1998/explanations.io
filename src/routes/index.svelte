
<div id="tutorial-content" style="padding: 10px;">
	{#if !$user.uid}
		<div class:question={isQuestionMode}>
			<Textfield bind:value={titleValue} class="room-title" style={`width: ${$canvasWidth}px`} 
				on:click={() => { 
					hasClickedTitle = true; 
					titleValue === 'Welcome!' ? startTypingAnimation() : '' 
				}
			}
			>	
				<HelperText slot="helper" persistent>
					{#if !hasClickedTitle}
						Server members help each other with visual explanations.
						How? Edit the title above to start the tutorial
					{:else if !isQuestionMode}
						Type ? to request help
					{:else}
					  (In a real server people will be notified and look at your question)
					{/if}
				</HelperText>
			</Textfield>
		</div>
		
		{#if isQuestionMode}			
			<TextAreaAutoResizing
				value="Look! Someone is drawing something (in a real server everyone is connected to voice chat). But scroll down, there's more!"
			/>
			<div style={`position: relative; width: ${$canvasWidth}px; height: ${$canvasHeight + 20}px`}>
				<RenderlessBoardMethods dbPath="/classes/USb1mGxeLqufbgbPhSbV/blackboards/K7kZAAhGIhlcYWTjzh4q" 
					let:boardDoc={boardDoc}
					let:strokesArray={strokesArray}
					autoFetchStrokes={true}
				>
					{#if boardDoc}
						<Blackboard strokesArray={demoStrokesArray}>
							{#if strokesArray}
								<div use:startRealtimeDemo={strokesArray}></div>
							{/if}
						</Blackboard>	
					{/if}
				</RenderlessBoardMethods>
			</div>
			
			<TextAreaAutoResizing
				value="Someone else recorded a video for you! What, I hard-coded this to happen? Don't be ridiculous, haha..."
			/>
			<div style={`position: relative; width: ${$canvasWidth}px; height: ${$canvasHeight + 60}px`} id="caleb-video-section">
				<RenderlessBoardMethods dbPath="/classes/USb1mGxeLqufbgbPhSbV/blackboards/K7kZAAhGIhlcYWTjzh4q" 
					let:boardDoc={boardDoc}
					let:strokesArray={strokesArray}
					autoFetchStrokes={true}
				>
					{#if boardDoc}
						<DoodleVideo {strokesArray} audioDownloadURL={boardDoc.audioDownloadURL}/>
					{/if}
				</RenderlessBoardMethods>
			</div>

			<!-- This is your own video, preserve it for comparison -->
			{#if !hasRecordedVideo}
				<div use:startRecordCountdown id="make-your-own-video">
					<TextAreaAutoResizing 
						value="Wondering how the video was made? Press the glowing blue button, then draw and talk like in real-life. Be messy and ramble - there's a lot of value in casually recorded videos (note: mouse drawing isn't supported)"
					/>
				</div>

				<div style={`position: relative; width: ${$canvasWidth}px; height: ${$canvasHeight}px`}>
					<RenderlessAudioRecorder 
						let:startRecording={startRecording}
						let:stopRecording={stopRecording}
						let:currentTime={currentTime}
						on:record-end={(e) => saveVideoLocally(e.detail.audioBlob)}
					>
						<Blackboard 
							currentTime={currentTime}
							strokesArray={localStrokesArray} 
							on:stroke-drawn={(e) => localStrokesArray = [...localStrokesArray, e.detail.newStroke]}
						>
							{#if $recordState === 'pre_record'}
								<span on:click={startRecording}
									class="material-icons" style="font-size: 2.5rem;
									color: cyan;
									margin-left: 11px; margin-right: 20px"
								>
									radio_button_checked
								</span>
							{:else if $recordState === 'mid_record'} 
								<span on:click={stopRecording}
									class="material-icons" style="font-size: 2.5rem;
									color: cyan;
									margin-left: 11px; margin-right: 20px"
								>
									stop_circle
								</span>
							{/if}
						</Blackboard>
					</RenderlessAudioRecorder>
				</div>
			{:else}
				<TextAreaAutoResizing 
					value="Reusable explanations upload near-instantly, in-place, and benefits the entire server."
				/>
				<div style={`position: relative; width: ${$canvasWidth}px; height: ${$canvasHeight + 60}px`}>
					<DoodleVideo strokesArray={localStrokesArray} audioDownloadURL={audioBlobURL}>
					
					</DoodleVideo>
				</div>
			{/if}

			<!-- {#if hasRecordedVideo} -->
				<div id="sign-up-section" style="height: 400px">
					<TextAreaAutoResizing
						value="That's the end! Basically it's all about helping each other efficiently, creating a positive-sum game. Sign up to this 6.036 closed-beta with a phone number to get text notifications iff members ask or answer questions. "
					/>

					{#if !phoneConfirmationResult}
						<div style="display: flex; justify-content: center; align-items: center; margin-top: 24px; margin-right: 6px; margin-left: auto;">
							<div style="margin-right: 10px; font-family: Roboto, sans-serif; font-size: 2rem">+1 </div>
							<input type="tel" id="phone-input-1" minlength="3" maxlength="3" placeholder="339" bind:value={phoneNumSegment1} style="width: 54px; height: 40px; font-size: 2rem; margin-right: 10px">

							<input type="tel" id="phone-input-2" minlength="3" maxlength="3" placeholder="676" bind:value={phoneNumSegment2} style="width: 54px; height: 40px; font-size: 2rem; margin-right: 10px">

							<input type="tel" id="phone-input-3" minlength="4" maxlength="4" placeholder="1234" bind:value={phoneNumSegment3} style="width: 76px; height: 40px; font-size: 2rem; margin-right: 10px">
							<Button id="sign-in-button" on:click={signInWithPhone}>
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
			<!-- {/if} -->
		{/if}
	{/if}
</div>

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
	import RenderlessBoardMethods from '$lib/RenderlessBoardMethods.svelte'
	import { calculateCanvasDimensions } from '../helpers/canvas.js'
	import TextAreaAutoResizing from '$lib/TextAreaAutoResizing.svelte'

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
			await new Promise(resolve => setTimeout(resolve, 100));
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
		const { width, height } = calculateCanvasDimensions()
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
