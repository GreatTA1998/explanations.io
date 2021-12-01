<script context="module">
	export function load () {
		// console.log('load() from root, if not logged in redirect to tutorial')
		return {

		}
		// return {
		// 	redirect: '/',
		// 	status: 302
		// }
	}
</script>

{#if !$user.uid}
	<h1>Welcome to the Tutorial</h1>
	<p>
		Start this "immersive" tutorial by typing "How to solve 2b?" above
	</p>
	
	<h2>How to solve 2b</h2>
	<p>
		Putting a ? creates a question, and text notifies the community to answer 
	</p>
	
	<h2>Answering</h2>
	<p>
		To create a "miracle", press REC" and draw a triangle...
		<!-- hard-coded caleb's explanation -->
	</p>

	<h2>Join the 6.036 server</h2>
	
	<Button id="sign-in-button" on:click={signInWithPhone}>
		Phone Login
	</Button>
	<Textfield variant="filled" bind:value={phoneConfirmCode} label="Leading Icon">
		<!-- <Icon class="material-icons" slot="leadingIcon">event</Icon> -->
		<HelperText slot="helper">Helper Text</HelperText>
	</Textfield>
	<Button on:click={verifyConfirmationCode}>Confirm code</Button>
{/if}

<script>
	import Button, { Label } from '@smui/button';
	import Textfield from '@smui/textfield';
	import HelperText from '@smui/textfield/helper-text';
	import { onMount } from 'svelte'
	import '../database.js'
	import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth'
	import { goto } from '$app/navigation'
	import { user } from '../store.js'

	let phoneConfirmCode = ''
	let appVerifier
	const print = console.log

	if ($user.uid) {
		goto('lvzQqyZIV1wjwYnRV9hn/lvzQqyZIV1wjwYnRV9hn')
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
			const phoneNumber = '+1 503-250-3868'
			print(getAuth(), phoneNumber, appVerifier)
			signInWithPhoneNumber(getAuth(), phoneNumber, appVerifier)
				.then((confirmationResult) => {
					console.log('confirmation result =', confirmationResult)

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
</script>

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
