import { initializeDatabase } from '../database.js'
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber, signOut } from 'firebase/auth'

// TO-DO: I'm not too happy about this potential duplicate initialization, but it's a quick-fix

// initializeDatabase()
const auth = getAuth();
// signOut(auth).then(() => {
//   // Sign-out successful.
// }).catch((error) => {
//   // An error happened.
// });

const print = console.log

// export function logOut () {
//   return new Promise(async (resolve) => {
//     await signOut(auth)
//     resolve()
//   })
// }

export function signInWithPhone () {
  console.log('before, window.verifier =', window.recaptchaVerifier)
  window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
    'size': 'invisible',
    'callback': (response) => {
      // reCAPTCHA solved, allow signInWithPhoneNumber.
      console.log('reCAPTCHA solved =', response)
      // onSignInSubmit()
    }
  }, auth)
  const appVerifier = window.recaptchaVerifier;
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
        window.confirmationResult = confirmationResult;
        
        // SIGN IN WITH CONFIRMATION CODE
        // const code = getCodeFromUserInput();
        confirmationResult.confirm('008978').then((result) => {
          // User signed in successfully.
          const user = result.user;
          // ...
        }).catch((error) => {
          alert(error)
          // User couldn't sign in (bad verification code?)
          // ...
        });
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

