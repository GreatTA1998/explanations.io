<script>
	import Counter from '$lib/Counter.svelte';
	import Button from '@smui/button'
	import { goto } from '$app/navigation'


	// use async promises to get user data first
	console.log('redirecting to a proper path')

	// deprecate soon
	goto('/lvzQqyZIV1wjwYnRV9hn/', 'lvzQqyZIV1wjwYnRV9hn')

	console.log('Hello from index.svelte, can set up renavigation here')
</script>


<svelte:head>
	<title>Home</title>
</svelte:head>

<Button>Hello world!</Button>

<section>
	<h1>
		<div class="welcome">
			<picture>
				<source srcset="svelte-welcome.webp" type="image/webp" />
				<img src="svelte-welcome.png" alt="Welcome" />
			</picture>
		</div>

		to your new<br />SvelteKit app
	</h1>

	<h2>
		try editing <strong>src/routes/index.svelte</strong>
	</h2>

	<Counter />
</section>

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
</style>
