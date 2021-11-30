<!-- TODO: handle scrolling -->
<h1>Tutorial</h1>

<Textfield value={''}></Textfield>
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
</p>

<h2>Join 6.036's server</h2>

<Button id="sign-in-button" on:click={signInWithPhone}>
  Phone Login
</Button>
<Textfield variant="filled" bind:value={phoneConfirmCode} label="Leading Icon">
  <!-- <Icon class="material-icons" slot="leadingIcon">event</Icon> -->
  <HelperText slot="helper">Helper Text</HelperText>
</Textfield>
<Button on:click={verifyConfirmationCode}>Confirm code</Button>

<h2>Join 6.036's server</h2>
<!-- contains the asking questions -->

<!-- hard-coded caleb's explanation -->
<script>
import Button, { Label } from '@smui/button';
import Textfield from '@smui/textfield';
import HelperText from '@smui/textfield/helper-text';
import { onMount } from 'svelte'
import '../database.js'
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth'
import { goto } from '$app/navigation'

let phoneConfirmCode = ''
let auth
let appVerifier
const print = console.log

onMount(() => {
  auth = getAuth(); 
})

function verifyConfirmationCode () {
  console.log('value =', phoneConfirmCode)
  // SIGN IN WITH CONFIRMATION CODE
  // const code = getCodeFromUserInput();
  console.log('phoneConfirmCode =', phoneConfirmCode)
  window.confirmationResult.confirm(phoneConfirmCode).then((result) => {
    // User signed in successfully.
    const user = result.user;
    console.log('redirecting, user =', user)
    storeUser.set(user)
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
    }, auth)
    appVerifier = window.recaptchaVerifier;
    print('after, verifier =', window.recaptchaVerifier)

    onSignInSubmit();


    function onSignInSubmit () {
      const phoneNumber = '+1 503-250-3868'
      print(auth, phoneNumber, appVerifier)
      signInWithPhoneNumber(auth, phoneNumber, appVerifier)
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


