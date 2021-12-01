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

{#if $hasFetchedUser}
	<h2>Fetching user data...{user}</h2>
{:else if $hasFetchedUser && $user === {}}
	<h1>Welcome to the Tutorial</h1>
{/if}

<script>
	import { hasFetchedUser, user } from '../store.js'
	import { goto } from '$app/navigation'

	console.log('route/index.svelte')

	const unsubscribe = hasFetchedUser.subscribe(() => {
		if ($hasFetchedUser && $user) {
			console.log('redirecting to class page')
			goto('lvzQqyZIV1wjwYnRV9hn/lvzQqyZIV1wjwYnRV9hn')
		}
	})
	unsubscribe()
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
