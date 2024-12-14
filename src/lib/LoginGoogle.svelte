<div style="
  background-color: rgb(87, 87, 87);
  color: white; 
  margin-bottom: 2px;
  width: 200px;
  padding-top: 6px;
  padding-bottom: 6px;
  border-radius: 8px;
  align-text: center;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
"
  on:click={signInWithGoogle}
>
  <span class="material-icons" style="margin-right: 6px;">
    mail
  </span>
  Google
</div>

<script>
  import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from "firebase/auth"
  import { userInfoFromAuthProvider } from '/src/store.js'

  async function signInWithGoogle () {
    const auth = getAuth();
    try {
      const provider = new GoogleAuthProvider()
      const result = await signInWithPopup(auth, provider)

      console.log("google login result =", result)

      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;

      console.log('user =', user)

      // standardization
      userInfoFromAuthProvider.set({
        email: user.email,
        uid: user.uid,
        name: user.displayName || ''
      })

      // IdP data available using getAdditionalUserInfo(result)
      // ...
    } catch(error) {
      console.log("error =", error)

      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    }
  }
</script>