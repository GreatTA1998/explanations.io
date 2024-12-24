{#if !$user.uid}
  <LoginGoogle/>
{:else}
  <Button on:click={logOut} style="color: black; font-size: 12px; font-family: 'Inter'">
    Sign out
  </Button>
{/if}

<script>
  import LoginGoogle from '$lib/LoginGoogle.svelte'
  import Button, { Label } from '@smui/button';
  import { user } from '/src/store.js'
  import { getAuth, signOut } from 'firebase/auth'

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