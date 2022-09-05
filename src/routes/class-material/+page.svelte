{#if Object.keys($user).length === 0}
	<section style="background: #FDFDF8; height: 100%; padding-top: 100px; padding-bottom: 100px; border-bottom: 1px solid #eee;">
		<div class="content" style="width: {$canvasWidth}px">
			<h1 style="margin-top: 0; font: 35px/1.5 'Lucida Grande', 'Lucida Sans Unicode', Helvetica, Arial, Verdana, sans-serif">
			  It takes a lot of time to manage staff
			</h1>

			<p style="font-size: 1.2rem; color: #33333d; font-weight: 300; font-family: 'Lucida Grande', 'Lucida Sans Unicode', Helvetica, Arial, Verdana, sans-serif">
        Students want more Office Hours, and request review sessions. Then they request lecture videos. 
        And to keep up with high Office Hours availability, more staff needs to be hired. 
      
        It means more co-ordinating everyone, less time for everything else like research.
			</p>
			<br>
		</div>
	</section>

	<section style="height: {160}px; padding-top: 100px; padding-bottom: 100px; border-bottom: 1px solid #eee;">
		<div class="content" style="width: {$canvasWidth}px">
			<h1 style="margin-top: 0; font: 35px/1.5 'Lucida Grande', 'Lucida Sans Unicode', Helvetica, Arial, Verdana, sans-serif">Smaller head-count and happier students</h1>
			<p style="font-size: 1.2rem; color: #33333d; font-weight: 300; font-family: 'Lucida Grande', 'Lucida Sans Unicode', Helvetica, Arial, Verdana, sans-serif">
        Suppose there is a way to run fewer Office Hours, freeing up the staff to do other things.
			</p>
		</div>
	</section>

	<section style="height: {$canvasHeight - $canvasHeight + 400}px; padding-top: 100px; padding-bottom: 100px; border-bottom: 1px solid #eee; background: #FDFDF8;">
		<div class="content" style="width: {$canvasWidth}px">
			<h1 style="margin-top: 0; font: 35px/1.5 'Lucida Grande', 'Lucida Sans Unicode', Helvetica, Arial, Verdana, sans-serif">Allocate 1 TA to take care of material</h1>
			<div style="margin-bottom: 20px; font-size: 1.2rem; color: #33333d; font-weight: 300; font-family: 'Lucida Grande', 'Lucida Sans Unicode', Helvetica, Arial, Verdana, sans-serif">
        What's actually happening is, there is repeating work across-semesters that keeps happening. There is a hole.

        Dedicate 1 TA to be in-charge of material. Focused on evolving the course material - creating new material, condensing existing notes,
        so it's as complete and condensed as possible. This minimizes the amount of preventable confusions, saving staff a lot of hours. 


        Then, if the web app can help you efficiently organize and index those explanations, then the material
        PREVENTS most of the preventable misunderstandings, leaving a much smaller number of nuanced conversation that increases the quality of Office Hours. 

        It's a problem of "scaling" help, does there exist a way to give help more efficiently, without diluting quality.
			</div>
		</div>
	</section>

	<section style="height: 100%; padding-top: 150px; padding-bottom: 150px; border-bottom: 1px solid #eee;">
		<div class="content" style="width: {$canvasWidth}px">
			<h1 style="margin-top: 0; font: 35px/1.5 'Lucida Grande', 'Lucida Sans Unicode', Helvetica, Arial, Verdana, sans-serif">
				Will this impact attendance?
			</h1>

			<p style="font-size: 1.2rem; color: #33333d; font-weight: 300; font-family: 'Lucida Grande', 'Lucida Sans Unicode', Helvetica, Arial, Verdana, sans-serif">
        Will students not come to Office Hours? What about attendance.
			</p>
		</div>
	</section>
{/if}

<script>	
	import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth'
	import Button, { Label } from '@smui/button';
	import HelperText from '@smui/textfield/helper-text'
	import Textfield from '@smui/textfield';
	import { onMount, tick, onDestroy } from 'svelte'
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

	$: if (phoneConfirmCode) {
		if (phoneConfirmCode.length === 6) {
			verifyConfirmationCode()
		}
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
				goto('O00mSbBEYQxTnv3cKkbe/O00mSbBEYQxTnv3cKkbe', { replaceState: true })
				// goto('AsUl1VWQ7zzxZsD5epL7/AsUl1VWQ7zzxZsD5epL7', { replaceState: true })
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
