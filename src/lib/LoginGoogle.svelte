<button on:click={signInWithGoogle} class="my-button" {...$$restProps}>
  <slot>
    SIGN IN
  </slot>
</button>

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

<style>
  .my-button {
    width: fit-content;
    border: 1px solid rgb(87, 87, 87);
    padding: 6px 10px;
    border-radius: 24px;

    font-size: var(--fs-300);
    font-weight: 400;
    color: rgb(87, 87, 87);

    text-align: center;
  }
</style>