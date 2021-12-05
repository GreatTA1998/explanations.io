
<div id="tutorial-content" style="padding: 25px;">
	{#if !$user.uid}
		<div class:question={isQuestionMode}>
			<Textfield bind:value={titleValue} class="room-title" style="width: 80%;" 
				on:click={() => { 
					hasClickedTitle = true; 
					titleValue === 'Solo tutorial' ? startTypingAnimation() : '' 
				}
			}
			>	
				<HelperText slot="helper" persistent>
					{#if !hasClickedTitle}
						<div style="font-size: 0.9rem;">
							Welcome! To learn how to ask questions, click the title above
						</div>
					{:else if !isQuestionMode}
						<div style="font-size: 0.9rem">
							Add a question mark "?" to make it a server question
						</div>
					{:else}
						<div style="font-size: 0.9rem">
							Success, but this is an offine server...
						</div>
					{/if}
				</HelperText>
			</Textfield>
		</div>
		
		{#if isQuestionMode}			
			{#if !hasAnsweredQuestion}
				<div use:startAnswerTimer>
					<Textfield 
						textarea style={`width: ${$canvasWidth}px; margin-top: 20px; min-height: 100px`} 
						value={`Young Padawan, for now, you must help yourself. Use the blackboard below to create powerful visual explanations. Press REC to start, you have ${currentTime.toFixed(0)} seconds remaining...`}>
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
			<!-- This is your own video, preserve it for comparison -->
			{:else}
				<Textfield textarea style={`width: ${$canvasWidth}px; margin-top: 20px; min-height: 100px`} value="You will notice videos here upload near-instantly. Press play and slide around the video, but quick, we're running out of time..."/>
				<div style={`position: relative; width: ${$canvasWidth}px; height: ${$canvasHeight + 80}px`}>
					<!-- hard-coded caleb's explanation -->
					<DoodleVideo strokesArray={localStrokesArray} audioDownloadURL={audioBlobURL}>
					
					</DoodleVideo>
				</div>

				<Textfield textarea style={`width: ${$canvasWidth}px; margin-top: 20px; min-height: 100px`} value="It's a miracle! A recitation TA from a distant galaxy answered your question! What? I stole the video from the 6.006 server? Don't be ridiculous!"/>
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

				{#if hasWatchedVideo}
					<div id="sign-up-section" style="height: 100vh">
						<Textfield textarea style={`width: ${$canvasWidth}px; margin-top: 20px; min-height: 100px`} value={`Congratulations, you're ready to join a proper 6.036 server, where you will learn real-time Q&A with perpetual voice chat.`}>

						</Textfield>
						{#if !phoneConfirmationResult}
							<div style="display: flex; align-items: center; margin-top: 24px">
								<Textfield variant="filled" bind:value={phoneNumSegment1} prefix="+1 " label="3 digits" style="width: 90px; margin-right: 6px">
								</Textfield>
								
								<Textfield variant="filled" bind:value={phoneNumSegment2} prefix="-" label="3 digits" style="width: 90px; margin-right: 6px">
								</Textfield>
							
								<Textfield variant="filled" bind:value={phoneNumSegment3} prefix="-" label="4 digits" style="width: 120px; margin-right: 6px">

								</Textfield>
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
	let titleValue = 'Solo tutorial'
	let i = 0
	let typewriter

	let phoneNumSegment1 = ''
	let phoneNumSegment2 = ''
	let phoneNumSegment3 = ''
	let phoneConfirmationResult
	let phoneConfirmCode = ''


	let appVerifier
	const print = console.log
	$: isQuestionMode = '?' === titleValue.charAt(titleValue.length - 1)
	let hasClickedTitle = false
	let localStrokesArray = []
	let hasAnsweredQuestion = false
	let audioBlobURL = ''
	let hasRecordedVideo = false
	let hasWatchedVideo = false
	let hasWatchedExemplar = false
	let timer

	function startTypingAnimation () {
		titleValue = ''
		const values = [
			'F',
			'Fi',
			'Fin',
			'Fina',
			'Final',
			'Finals',
			'Finals 2',
			'Finals 20',
			'Finals 202',
			'Finals 2020',
			'Finals 2020 Q',
			'Finals 2020 Q1'
		]
		typewriter = setInterval(() => {
			titleValue = values[i]
			i += 1
			if (i === values.length) {
				clearInterval(typewriter)
			}
		}, 50)
	}


	$: if (currentTime.toFixed(0) === '0') {
		console.log('end of timer, currentTime =', currentTime)
		clearInterval(timer)
	}

	$: if (hasWatchedVideo) {
		console.log("has watched video")
		tick().then(() => {
			const elem = document.getElementById('caleb-video-section')
			elem.scrollIntoView({ 
				block: "center", // vertical alignment
				inline: "nearest", // horizontal alignment
				behavior: "smooth"
			})
		})
		setTimeout(() => hasWatchedExemplar = true, 1000)
	}

	$: if (hasWatchedExemplar) {
		tick().then(() => {
			const elem = document.getElementById('sign-up-section')
			elem.scrollIntoView({ 
				block: "center", // vertical alignment
				inline: "nearest", // horizontal alignment
				behavior: "smooth"
			})
		})
	}

	function saveVideoLocally (audioBlob) {
		audioBlobURL = URL.createObjectURL(audioBlob)
		hasAnsweredQuestion = true
		setTimeout(() => hasWatchedVideo = true, 5000)
	}

	if ($user.uid) {
		goto('lvzQqyZIV1wjwYnRV9hn/lvzQqyZIV1wjwYnRV9hn')
	}

	onMount(() => {
		const elem = document.getElementById('tutorial-content')
		canvasHeight.set(elem.scrollWidth * 3/4)
		canvasWidth.set(elem.scrollWidth * 9/10)
	})


	function startAnswerTimer (element) {
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
  color: red !important;
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
