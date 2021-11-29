<script>
	// import Header from '$lib/header/Header.svelte';
	import '../app.css';
	import '../database.js' // initialize the database
	import { portal } from '../actions.js'
	import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
	import Button, { Label } from '@smui/button';
	import { storeUser } from '../store.js'
	import { onMount } from 'svelte'
	import LeftDrawer from './LeftDrawer.svelte'
	import { goto } from '$app/navigation'

		// handle authentication
	function signInWithGoogle () {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();

    signInWithPopup(auth, provider)
      .then((result) => {
        console.log('success')
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        // ...
      }).catch((error) => {
        console.log('error =', error)
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
		}

			//
	onMount(async () => {
		const auth = getAuth()
		onAuthStateChanged(auth, async (user) => {
			if (user) {
				// User is signed in, see docs for a list of available properties
				// https://firebase.google.com/docs/reference/js/firebase.User
				const uid = user.uid;
				storeUser.set(user)

				// use async promises to get user data first
				console.log('user logged in, redirecting...')
				goto('/lvzQqyZIV1wjwYnRV9hn/lvzQqyZIV1wjwYnRV9hn', { replaceState: true })
						
			} else {
				console.log('not logged in')
			}
		})

		// consider removing the authStateChanged listener once it's done its job
	})
</script>

<LeftDrawer/>

{#if !storeUser.uid}
	<div use:portal={'sign-up-area'}>
		<Button on:click={signInWithGoogle}>Phone Login</Button>
	</div>
{/if}

<main>
	<slot> 

	</slot>
</main>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 1024px;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>

