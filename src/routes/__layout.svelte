<script>
	// import Header from '$lib/header/Header.svelte';
	import '../app.css';

	import { portal } from '../actions.js'
	import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
	import Button, { Label } from '@smui/button';
	import { storeUser } from '../store.js'
	import { collection, getDocs, getDoc, query, where  } from "firebase/firestore"; 
	import db from '../database.js'
	import { onMount } from 'svelte'

	import LeftDrawer from './LeftDrawer.svelte'

	export let areaDocs;
		// handle authentication
		function signInWithGoogle () {
    const provider = new GoogleAuthProvider();
    // provider.addScope('https://www.googleapis.cfom/auth/contacts.readonly');
    const auth = getAuth();

    signInWithPopup(auth, provider)
      .then((result) => {
        console.log('success')
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
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

	onMount(async () => {
		const auth = getAuth()
		onAuthStateChanged(auth, async (user) => {
			if (user) {
				// User is signed in, see docs for a list of available properties
				// https://firebase.google.com/docs/reference/js/firebase.User
				const uid = user.uid;
				storeUser.set(user)
			} else {
				console.log('not logged in')
				// User is signed out
				// ...
			}
		});
	})
</script>
<!-- 
<Header />
 -->

<LeftDrawer/>

<main>
	<slot />
</main>

<footer>
	<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
</footer>

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

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 40px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 40px 0;
		}
	}
</style>

{#if !storeUser.uid}
	<div use:portal={'sign-up-area'}>
		<Button on:click={signInWithGoogle}>Google Sign-in</Button>
	</div>
{/if}

<slot>
	
</slot>