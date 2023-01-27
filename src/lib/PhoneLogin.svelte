<div style="height: 100px">
  {#if !phoneConfirmationResult}
    <div style="display: flex; justify-content: center; align-items: center; margin-top: 24px;">
      <!-- <div class="copied-from-koa" style="color: purple">Log in with phone:</div> -->

      {#if canTakeInternationalNumbers}
        <input type="tel" id="phone-country-code" minlength="2" maxlength="4" placeholder="+1" bind:value={countryCode} style="margin-left: 15px; width: 82px; height: 40px; font-size: 2rem; margin-right: 10px">
      {/if}
      <input type="tel" id="phone-input-1" minlength="3" maxlength="3" placeholder="503" bind:value={phoneNumSegment1} style="margin-left: 15px; width: 60px; height: 40px; font-size: 2rem; margin-right: 10px">

      <input type="tel" id="phone-input-2" minlength="3" maxlength="3" placeholder="250" bind:value={phoneNumSegment2} style="width: 60px; height: 40px; font-size: 2rem; margin-right: 10px">

      <input type="tel" id="phone-input-3" minlength="4" maxlength="4" placeholder="3868" bind:value={phoneNumSegment3} style="width: 82px; height: 40px; font-size: 2rem; margin-right: 10px">
      <Button id="sign-in-button" on:click={signInWithPhone} style="display: none; color: {hasEnteredPhoneNumber ? 'rgb(116 28 183)' : 'grey'}; margin-bottom: 2px" disabled={!hasEnteredPhoneNumber}>
        Sign Up
      </Button>
    </div>
  {:else}
    <div style="display: flex; justify-content: center; align-items: center; margin-top: 24px">
      <div class="copied-from-koa" style="color: purple">
        You'll receive a text with 6-digits:
      </div>
      
      <!-- `numeric`: https://stackoverflow.com/a/62179845/7812829 -->
      <input type="text" inputmode="numeric" minlength="1" maxlength="1" bind:value={confirm1} bind:this={c1} style="width: 20px; font-size: 2rem; margin-left: 15px;" placeholder="1">
      <input type="text" inputmode="numeric" minlength="1" maxlength="1" bind:value={confirm2} bind:this={c2} style="width: 20px; font-size: 2rem; margin-left: 15px;" placeholder="2">  
      <input type="text" inputmode="numeric" minlength="1" maxlength="1" bind:value={confirm3} bind:this={c3} style="width: 20px; font-size: 2rem; margin-left: 15px;" placeholder="3">
      <input type="text" inputmode="numeric" minlength="1" maxlength="1" bind:value={confirm4} bind:this={c4} style="width: 20px; font-size: 2rem; margin-left: 15px;" placeholder="4">
      <input type="text" inputmode="numeric" minlength="1" maxlength="1" bind:value={confirm5} bind:this={c5} style="width: 20px; font-size: 2rem; margin-left: 15px;" placeholder="5">
      <input type="text" inputmode="numeric" minlength="1" maxlength="1" bind:value={confirm6} bind:this={c6} style="width: 20px; font-size: 2rem; margin-left: 15px; margin-right: 10px" placeholder="6">
      <Button on:click={verifyConfirmationCode} style="display: none; color: {hasEnteredConfirmCode ? 'rgb(116 28 183)' : 'grey'}; margin-bottom: 2px;" disabled={!hasEnteredConfirmCode}>Confirm code</Button>
    </div>
  {/if}
</div>

<script>
  import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth'
  import Button from '@smui/button'
  import { goto } from '$app/navigation'

  // take an "acceptInternationalNumbers" prop
  export let canTakeInternationalNumbers


  let appVerifier
  let phoneConfirmationResult

  let countryCode = '+1'
	let phoneNumSegment1 = ''
	let phoneNumSegment2 = ''
	let phoneNumSegment3 = ''

  let confirm1 = ''
  let confirm2 = ''
  let confirm3 = ''
  let confirm4 = ''
  let confirm5 = ''
  let confirm6 = ''

  // references to the input elements
  let c1, c2, c3, c4, c5, c6
  $: phoneConfirmCode = confirm1 + confirm2 + confirm3 + confirm4 + confirm5 + confirm6

	$: hasEnteredPhoneNumber = phoneNumSegment1.length === 3 && phoneNumSegment2.length === 3 && phoneNumSegment3.length === 4
  
  $: if (phoneNumSegment1.length === 3) {
		document.getElementById('phone-input-2').focus()
	}
	$: if (phoneNumSegment2.length === 3) {
		document.getElementById('phone-input-3').focus()
	}
	$: if (hasEnteredPhoneNumber) {
		signInWithPhone()
	}

  $: if (phoneConfirmationResult && c1) {
    c1.focus()
  }

  $: if (confirm1.length === 1) { c2.focus() }
  $: if (confirm2.length === 1) { c3.focus() }
  $: if (confirm3.length === 1) { c4.focus() }
  $: if (confirm4.length === 1) { c5.focus() }
  $: if (confirm5.length === 1) { c6.focus() }

  $: hasEnteredConfirmCode = phoneConfirmCode.length === 6

  $: if (hasEnteredConfirmCode) { 
    verifyConfirmationCode()
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
			const phoneNumber = `${countryCode} ${phoneNumSegment1}-${phoneNumSegment2}-${phoneNumSegment3}`
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

      // COUPLING THE REDIRECT LOGIN IS NOT GOOD, YOU WANT TO SEPARATE IT OUT

      // goto('O00mSbBEYQxTnv3cKkbe/O00mSbBEYQxTnv3cKkbe', { replaceState: true })
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
  ::placeholder {
    opacity: 0.2
  }

  .copied-from-koa {
    font: 20px/1.7 "Lucida Grande", "Lucida Sans Unicode", Helvetica, Arial, Verdana, sans-serif
  }
</style>