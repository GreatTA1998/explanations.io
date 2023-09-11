<!-- TO-DO: 
  2. Backwards compatibility argument
    - Notification system (deprecate, instead let them communicate through group chat)
-->

<!-- Direct login flow -->
<div style="
  color: green; 
  border: 1px solid green; 
  margin-bottom: 2px;
  width: 200px;
  padding-top: 6px;
  padding-bottom: 6px;
  border-radius: 8px;
  align-text: center;
  display: flex;
  justify-content: center;
  align-items: center;
"
  on:click={signInWithTouchstone}
>
  <span class="material-icons" style="margin-right: 6px;">
    school
  </span>
  MIT 
</div>

<script>
  import { SAMLAuthProvider } from "firebase/auth"
  import { getAuth, signInWithRedirect, signInWithPopup } from "firebase/auth"
  import { userInfoFromAuthProvider } from '/src/store.js'

  function signInWithTouchstone () {
    const provider = new SAMLAuthProvider('saml.mit-touchstone');
    signInWithPopup(getAuth(), provider) 
      .then(async result => {
        standardizeUserBasicInfo(result)
      })
      .catch(error => {
        console.log("error =", error);
      });
  }

async function standardizeUserBasicInfo (result) {
  try {
    return new Promise(async (resolve) => {  

      userInfoFromAuthProvider.set({
        email: result.user.email,
        uid: result.user.uid,
      })
      resolve(); 
    });
  }
  catch (error) {
    console.log("error =", error);
  }
}
</script>