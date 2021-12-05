
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
						<div style="font-size: 0.9rem;">
							ihtfp.app lets everyone help each other with proper blackboard explanations.
							How? Click the title above...
						</div>
					{:else if !isQuestionMode}
						<div style="font-size: 0.9rem">
							To request help, just type ?
						</div>
					{:else}
						<div style="font-size: 0.9rem">
							Text notifying the server...
						</div>
					{/if}
				</HelperText>
			</Textfield>
		</div>
		
		{#if isQuestionMode}			
			<Textfield textarea style={`width: ${$canvasWidth}px; margin-top: 20px; min-height: 130px`} value="Someone answered! What - I hard-coded this to happen? Ridiculous, why'd I do that! Try sliding around the video"/>
			<div style={`position: relative; width: ${$canvasWidth}px; height: ${$canvasHeight + 80}px`} id="caleb-video-section">
				<RenderlessBoardMethods dbPath="/classes/USb1mGxeLqufbgbPhSbV/blackboards/K7kZAAhGIhlcYWTjzh4q" 
					let:boardDoc={boardDoc}
					let:fetchStrokes={fetchStrokes}
					let:strokesArray={strokesArray}
					autoFetchStrokes={true}
				>
					{#if boardDoc && strokesArray}
						<DoodleVideo strokesArray={strokesArray} audioDownloadURL={boardDoc.audioDownloadURL}/>
					{/if}
				</RenderlessBoardMethods>
			</div>

			<!-- This is your own video, preserve it for comparison -->
			{#if !hasRecordedVideo}
				<div use:startRecordCountdown id="make-your-own-video">
					<Textfield 
						textarea style={`width: ${$canvasWidth}px; margin-top: 20px; min-height: 130px`} 
						value={`Wondering how the video was made? Just press REC, then draw and talk like in real-life. You have ${currentTime.toFixed(0)} seconds to play around...`}>
					</Textfield>
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
								<Button on:click={startRecording}>
									REC
								</Button>
							{:else if $recordState === 'mid_record'}
								<Button on:click={stopRecording}>
									Finish
								</Button>
							{/if}
						</Blackboard>
					</RenderlessAudioRecorder>
				</div>
			{:else}
				<Textfield textarea style={`width: ${$canvasWidth}px; margin-top: 20px; min-height: 130px`} value="Reusable explanations upload near-instantly, in-place, and benefits the entire server."/>
				<div style={`position: relative; width: ${$canvasWidth}px; height: ${$canvasHeight + 80}px`}>
					<DoodleVideo strokesArray={localStrokesArray} audioDownloadURL={audioBlobURL}>
					
					</DoodleVideo>
				</div>
			{/if}

			{#if hasRecordedVideo}
				<div id="sign-up-section" style="height: 400px">
					<Textfield textarea style={`width: ${$canvasWidth}px; margin-top: 20px; min-height: 130px`} value={`In a real server, each question is in fact a voice room. This makes it easy to help quickly while everybody is there.`}>

					</Textfield>

					{#if !phoneConfirmationResult}
						<div style="display: flex; align-items: center; margin-top: 24px">
							<div style="margin-right: 10px;">+1 </div>
							<input type="tel" id="phone-input-1" minlength="3" maxlength="3" placeholder="339" bind:value={phoneNumSegment1} style="width: 30px; margin-right: 10px">

							<input type="tel" id="phone-input-2" minlength="3" maxlength="3" placeholder="676" bind:value={phoneNumSegment2} style="width: 30px; margin-right: 10px">

							<input type="tel" id="phone-input-3" minlength="4" maxlength="4" placeholder="1234" bind:value={phoneNumSegment3} style="width: 40px">

							<!-- First validate the request -->
							<Button id="sign-in-button" on:click={signInWithPhone}>
								Sign in with phone
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
			{/if}
		{/if}
	{/if}
</div>

<script>
	import Button, { Label } from '@smui/button';
	import HelperText from '@smui/textfield/helper-text'
	import Textfield from '@smui/textfield';
	import { onMount, tick } from 'svelte'
	import '../database.js'
	import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth'
	import { goto } from '$app/navigation'
	import { canvasHeight, canvasWidth, user, recordState } from '../store.js'
	import Blackboard from '$lib/Blackboard.svelte'
	import DoodleVideo from '$lib/DoodleVideo.svelte'
	import RenderlessAudioRecorder from '$lib/RenderlessAudioRecorder.svelte'
	import RenderlessBoardMethods from '$lib/RenderlessBoardMethods.svelte'

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

	function startTypingAnimation () {
		titleValue = ''
		const values = [
			'Re-explain gradient descent',
			'Finals 2019',
			"Explain 2b visually",
		]
		typewriter = setInterval(() => {
			titleValue = values[i]
			i += 1
			if (i === values.length) {
				clearInterval(typewriter)
			}
		}, 400)
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

	$: if (hasWatchedExemplar) {
		tick().then(() => {
			const elem = document.getElementById('make-your-own-video')
			elem.scrollIntoView({ 
				block: "center", // vertical alignment
				inline: "nearest", // horizontal alignment
				behavior: "smooth"
			})
		})
	}

	$: if (phoneNumSegment1.length === 3) {
		document.getElementById('phone-input-2').focus()
	}
	$: if (phoneNumSegment2.length === 3) {
		document.getElementById('phone-input-3').focus()
	}

	function saveVideoLocally (audioBlob) {
		audioBlobURL = URL.createObjectURL(audioBlob)
		hasRecordedVideo = true
		setTimeout(() => hasWatchedVideo = true, 5000)
	}

	if ($user.uid) {
		goto('lvzQqyZIV1wjwYnRV9hn/lvzQqyZIV1wjwYnRV9hn')
	}

	onMount(() => {
		const elem = document.getElementById('tutorial-content')
		canvasWidth.set(elem.scrollWidth * 9/10)
		canvasHeight.set(elem.scrollWidth * 3/4)
	})


	function startRecordCountdown (element) {
		timer = setInterval(() => currentTime -= 1, 1000)	
	}

	function signInWithPhone () {
		console.log('before, window.verifier =', window.recaptchaVerifier)
		window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
			'size': 'invisible',
			'callback': (response) => {
				// reCAPTCHA solved, allow signInWithPhoneNumber.
				console.log('reCAPTCHA solved =', response)
				// onSignInSubmit()
			}
		}, getAuth())
		appVerifier = window.recaptchaVerifier;
		print('after, verifier =', window.recaptchaVerifier)

		onSignInSubmit();

		function onSignInSubmit () {
			// console.log(`phoneNumber = +1 ${phoneNumSegment1}-${phoneNumSegment2}-${phoneNumSegment3}`)
			// const phoneNumber = '+1 503-250-3868'
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
					console.log('error =', error)
					// Error; SMS not sent
					// ...
			
					// if it fails, reset 
					grecaptcha.reset(window.recaptchaWidgetId);
			
					// Or, if you haven't stored the widget ID:
					window.recaptchaVerifier.render().then(function(widgetId) {
						grecaptcha.reset(widgetId);
					})
				});
			}
		}
		function verifyConfirmationCode () {
			console.log('value =', phoneConfirmCode)
			// SIGN IN WITH CONFIRMATION CODE
			// const code = getCodeFromUserInput();
			console.log('phoneConfirmCode =', phoneConfirmCode)
			window.confirmationResult.confirm(phoneConfirmCode).then((result) => {
				// User signed in successfully.
				const user = result.user;
				console.log('redirecting, user =', user)
				goto('/lvzQqyZIV1wjwYnRV9hn/lvzQqyZIV1wjwYnRV9hn', { replaceState: true })
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
