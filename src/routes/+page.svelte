<section style="height: 100vh; border-bottom: 1px solid #eee;">
	<div style="height: 84vh; display: flex; justify-content: center; align-items: center;">
		<div style="padding-bottom: 90px;">
			<div style="display: flex; align-items: center; justify-content: center; height: 120px;">
				<img src="logo.png" width="120" height="108" style="margin-left: 0px;">
				<h1 id="logo" style="font-size: 6.5rem; color: rgb(0 0 0); padding-bottom: 16px; padding-left: 10px;">
					explain.mit.edu
				</h1>
			</div>

			<div style="display: flex; justify-content: center;">
				<b style="color: grey; white-space: nowrap;" class="copied-from-koa">
					voice chat + blackboards = videos
				</b>
			</div>

			<!-- This flex is just used to center horizontally -->
			<div style="display: flex; justify-content: center; margin-top: 50px">
				<Button on:click={redirectToExampleClass} variant="outlined" color="orange" style="color: rgb(246,130,13); font-size: 1.05rem">
					Look around
				</Button>	

				{#if !user.phoneNumber}
					<Button on:click={() => goto('login')} variant="outlined" style="margin-left: 25px; color: rgb(128, 0, 128); font-size: 1.05rem">
						Sign up
					</Button>	
				{:else}
					<Button on:click={resumeToMostRecentServer} variant="outlined" style="margin-left: 25px; color: rgb(128, 0, 128); font-size: 1.05rem">
						Resume
					</Button>	
				{/if}
			</div>
	</div>
</section>

<script>	
	import { getAuth, RecaptchaVerifier, signInWithPhoneNumber, signInAnonymously } from 'firebase/auth'
	import Button, { Label } from '@smui/button';
	import { onMount, tick, onDestroy } from 'svelte'
	import { goto } from '$app/navigation'
	import { user } from '../store.js'

	function resumeToMostRecentServer () {
		goto($user.mostRecentClassAndRoomID, { replaceState: true })
	}

	// TO-DO: maybe just redirect
	function redirectToExampleClass () {
		const id = 'Mev5x66mSMEvNz3rijym' // 14.01
    goto(`/${id}/${id}`, { replaceState: true })
	}
</script>

<style>
:global(.room-title input) {
  font-size: 2rem;
}

:global(.question input) {
  color: rgb(19, 145, 230) !important
}

.copied-from-koa {
	font: 34px/1.7 "Lucida Grande", "Lucida Sans Unicode", Helvetica, Arial, Verdana, sans-serif
}

.copied-from-koa-2 {
	font: 17px/1.7 "Lucida Grande", "Lucida Sans Unicode", Helvetica, Arial, Verdana, sans-serif;
	font-weight: 600;
	color: grey;
}

#logo {
	/* NOTE: this font-size is overriden on top so doesn't do anything! */
    font: 300px 'Italiana', sans-serif;
    text-transform: lowercase;
}

.content {
	margin: 0 auto;
	/* min-width: 750px; 
	max-width: 750px; */
	text-align: left;
}

li {
	margin-bottom: 2px;
}

#make-your-own-video {

}

</style>

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
