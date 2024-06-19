<TopNavbar>
	<div slot="tab-section" style="margin-left: 24px; margin-right: auto; display: flex; align-items: center; justify-content: space-evenly; color: black; width: 160px; box-sizing: border-box;">
		<div on:click={() => activeTabName = 'Learn'} style="cursor: pointer; text-align: center; box-sizing: border-box; height: 64px; padding: 8px 6px 4px 6px" class:active-underline-indicator={activeTabName === 'Learn'}>
			<span class="material-symbols-outlined" style="font-size: 26px; color: rgb(30, 30, 30)">
				smart_display
			</span>
			<div style="font-size: 14px; margin-top: -2px;" class:active-bold={activeTabName === 'Learn'}>
				Learn
			</div>
		</div>

		<div on:click={() => activeTabName = 'Teach'} style="cursor: pointer; text-align: center; height: 64px; box-sizing: border-box; padding: 8px 6px 4px 6px" class:active-underline-indicator={activeTabName === 'Teach'}>
			<span class="material-symbols-outlined" style="font-size: 26px; color: rgb(30, 30, 30)">
				stylus_note
			</span>
			<div style="font-size: 14px; margin-top: -2px;" class:active-bold={activeTabName === 'Teach'}>
				Teach
			</div>
		</div>
	</div>

	<div class="webflow-container">
		{#if activeTabName === 'Learn'}
			<HomePageForLearner/>
		{:else}
			<HomePageForTeacher/>
		{/if}
	</div>
</TopNavbar>

<script>	
	import { goto } from '$app/navigation'
	import { onMount, tick, onDestroy } from 'svelte'
	import { mixpanelLibrary } from '/src/mixpanel.js'
	import TopNavbar from '$lib/TopNavbar.svelte'
	import HomePageForLearner from '$lib/HomePageForLearner.svelte'
	import HomePageForTeacher from '$lib/HomePageForTeacher.svelte'

	let activeTabName = 'Learn'
	let w

	onMount(() => {
		mixpanelLibrary.track('Home page visited')
	})

	function redirectToSignUpPage () {
		goto('/servers')
	}
</script>

<style lang="scss">
	strong {
		color: rgb(30, 30, 30)	
	}

	.active-bold {
		font-weight: 600;
	}

	.webflow-container {
		width: 90%; /* 90% */
		// max-width: 1400px; /* webflow's value is 1280, partly because their scrollbar takes up width */
		margin-right: auto;
		margin-left: auto; 

		box-sizing: border-box;

		// additional properties
		margin-top: 20px;

		background-color: transparent;
	}

	.webflow-h1 {
		font-size: 4rem;
	}

	@media screen and (max-width: 767px) {
		.webflow-h1 {
			font-size: 3rem;
	  }	
	}

	@media screen and (max-width: 479px) {
		.webflow-h1 {
			font-size: 2.6rem;
		}
	}


.image-gallery-container {
	margin-top: 6%; 
	margin-bottom: 20%; // was 24%
	// margin-left: 2%;
}

@media screen and (max-width: 991px) {
	.image-gallery-container {
		margin-top: 0% !important;
		margin-bottom: 8% !important;
	}
}

.webflow-section {
	padding-top: 8%; 
	padding-bottom: 8%;
}

.header-title {
	// max-width: 52vw; /* webflow is 52vw, but explanations is a long word */
	margin-top: 0; 
	margin-bottom: 0;
	font-size: 4vw; /* was 6vw */
	/* line-height: 1.1; /* webflow's is 1.0, but squishes the text on Explain, looks good on Webflow though */
	font-weight: 500;

	/* This turns to prevent <p> from taking additional height for no reason */
	margin-top: 0;
	margin-bottom: 0;

	// BELOW ARE CSS ATTRIBUTES I PUT IN ADDITION TO BASE ATTRIBUTES
	box-sizing: border-box;

	/* The -0.02em is the secret sauce for making sans-serif fonts look good **/
	letter-spacing: -.02em; 
	font-weight: 600; 

	color: #1b1b1b; // exact complement of Webflow's contrast black/white contrast
	line-height: 1.0; // used to be 1.25 but GF suggests otherwise
}

// As soon as we achieve minimum width of 1280,
// the layout will make use of horizontal space 
@media only screen and (min-width: 1280px) {
	.header-title {
		font-size: 5.6vw; // webflow's original is 7rem
		max-width: calc(100vw - 380px);
	}
	.header-subtitle {
		max-width: calc(100vw - 480px);
	}
	.webflow-container {
		width: 92%;
	}
}

@media only screen and (max-width: 991px) {
	.header-title {
		max-width: 85vw;
		font-size: 4vw;
	}
	.webflow-container {
		width: 85%;
	}
}

.call-to-action-button {
	height: 4.2vw; 
	margin-top: 0.8vw; 
	margin-bottom: 0.8vw;
}

@media only screen and (max-width: 991px) {
	.call-to-action-button {
		height: 60px;
		margin-top: 16px;
		margin-bottom: 2rem;
	}	
}

.webflow-intro-type {
	// font-family: sans-serif; 
	font-size: 2.4rem; // used to be 5 rem
 	// line-height: 1.125; // used to be 1.25 but you know what happened last time
	font-weight: 500;
	// letter-spacing: -.02em;
	max-width: 100%;
}

@media screen and (max-width: 991px) {
	.webflow-intro-type {
		font-size: 2.6rem;
	}
}

@media screen and (max-width: 479px) {
	.webflow-intro-type {
		font-size: 1.6rem;
	}
}

.header-flex {
	display: flex;
	margin-top: 2%;
	margin-bottom: 40px;
	-webkit-box-pack: justify;
	-ms-flex-pack: justify;
	/* -webkit-justify-content: space-between;
	// justify-content: space-between; */
	justify-content: space-between;
	align-items: center;

	flex-wrap: wrap;
	

	// additional properties: 
	// margin-top: 60px;
}

@media screen and (max-width: 767px) {
	.header-flex {
		margin-top: 40px;
	}
}

@media screen and (max-width: 479px) {
	.header-flex {
		margin-bottom: 0px;
	}
}

.header-subcopy {
	max-width: 20vw;
	margin-top: 0;
	margin-bottom: 0.4em;
	font-size: 1.2rem;
	line-height: 1.5;

	// ADDITIONAL PROPERTIES I ADDED ON TOP OF WEBFLOW
	font-family: sans-serif;
}

@media screen and (max-width: 991px) {
.header-subcopy {
		max-width: 55vw;
		font-size: 1.3rem;
	}
}

@media screen and (max-width: 479px) {
	.header-subcopy {
		max-width: 90vw;
		font-size: 1rem;
	}
}

.header-subcopy-wrapper {
	// margin-left: 5vw;
	margin-left: 0.5vw;
	width: 90%;
	max-width: 280px; 

	// additional attributes
	margin-right: 0px;
	display: flex; 
	flex-direction: column;
	// justify-content: flex-end; 
	// align-items: flex-start;

	-webkit-flex-direction: column; 
	-webkit-align-items: flex-start;
}


@media screen and (max-width: 991px) {
.header-subcopy-wrapper {
    max-width: 700px;
    margin-top: 30px;
    margin-left: 0;
    font-size: 1.2rem;
	}
}

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

	:global(#smui-app),
  :global(body),
  :global(html) {
    display: block !important;
    height: auto !important;
    width: auto !important;
    position: static !important;
  }


	.flexy {
    display: flex;
    flex-wrap: wrap;
  }
 
  .flexor {
    display: inline-flex;
    flex-direction: column;
  }

	.card-container {
		margin-top: 0px;
		width: 100%;
	}


	li {
		margin-bottom: 24px;
	}
</style>
