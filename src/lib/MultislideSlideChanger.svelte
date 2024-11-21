<div style="display: flex; gap: 2px;">
	{#each slideIDs as slideID, i}
		<div 
			on:click={() => dispatch('click', { newIdx: i }) } on:keydown
			class:highlighted-glow={idxOfFocusedSlide === i}
			class:lowlighted-glow={idxOfFocusedSlide !== i}
			class="slide-rectangle"
		>
			{ i + 1 }
		</div>
	{/each}
</div>

{#if canCreateNewSlide}
	<div on:click={() => dispatch('slide-create')}
		class="slide-rectangle" 
		style="font-size: 1.4rem;"
	>
		+
	</div>
{/if}

<script>
  export let idxOfFocusedSlide
  export let slideIDs
	export let canCreateNewSlide = false

  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher()
</script>

<style>
	.slide-rectangle {
		width: 48px; 
		height: 36px; 
		display: flex; 
		align-items: center; 
		justify-content: center; 
		box-sizing: border-box;
		
		cursor: pointer;

		background-color: hsl(0,0%,0%, 0.80); 
		color: white;
		box-sizing: border-box;
	}

	.highlighted-glow {
		/* background-color: hsl(0,0%,0%, 0.80); */
		/* color: hsl(0,0%,0%, 0.80); */
		color: white;
		font-weight: 600;
		/* border-bottom: 4px solid #F7C686; */
	}

	.lowlighted-glow {
		color: rgb(200, 200, 200);
		background-color: hsl(0,0%,0%, 0.70);
		font-weight: 400;
		/* border-bottom: 4px solid rgb(244, 244, 244); */
	}
</style>