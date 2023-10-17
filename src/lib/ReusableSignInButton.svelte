{#if isSignInPopupOpen}
  <PopupSignInWithOptions 
    on:popup-close={() => isSignInPopupOpen = false}
  />
{/if}

{#if !$user.uid}
  <Button on:click={() => isSignInPopupOpen = true}
    variant="{outlined ? 'outlined' : ''}"
    color={frameworkColor}
  >
    <slot>
      Sign in
    </slot>
  </Button>
  {:else}
  <Button on:click={logOut}>
    Sign out
  </Button>
{/if}

<script>
  import PopupSignInWithOptions from '$lib/PopupSignInWithOptions.svelte'
  import Button, { Label } from '@smui/button';
  import { user } from '../store.js'
  import { getAuth, signOut } from 'firebase/auth'

  let isSignInPopupOpen = false

  export let outlined = true
  export let frameworkColor

	async function logOut () {
    if ($user.uid) {
      const auth = getAuth()
      await signOut(auth)
    }
    // clear the cookie cache otherwise the user persists for some reason
    // or it could be store.js listeners not having a proper lifecycle for logout
    window.location.reload()
    // goto('/')
  }
</script>