<script context="module">
	export function load () {
		// console.log('load() from root, if not logged in redirect to tutorial')
		return {

		}
		// return {
		// 	redirect: '/',
		// 	status: 302
		// }
	}
</script>

<script>
	import Counter from '$lib/Counter.svelte';
	import Button from '@smui/button'
	import { goto } from '$app/navigation'
	import '../database.js'
	// use async promises to fetch users first
	import { getAuth, onAuthStateChanged } from "firebase/auth"
	import { onMount } from 'svelte'

	onMount(() => {
		const auth = getAuth();
		let unsubAuthListener = onAuthStateChanged(auth, (user) => {
			if (user) {
				// User is signed in, see docs for a list of available properties
				// https://firebase.google.com/docs/reference/js/firebase.User
				const uid = user.uid;
				console.log('logged in')
				goto('/lvzQqyZIV1wjwYnRV9hn/lvzQqyZIV1wjwYnRV9hn') // soon you can try 6.036
				unsubAuthListener()
				// ...
			} else {
				// User is signed out
				// ...
				console.log('not logged in, redirecting to tutorial')
				goto('/tutorial')
				unsubAuthListener()
			}
		});
	})
</script>

<!-- 	<picture>
				<source srcset="svelte-welcome.webp" type="image/webp" />
				<img src="svelte-welcome.png" alt="Welcome" />
			</picture> -->
<!-- 
<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style> -->
