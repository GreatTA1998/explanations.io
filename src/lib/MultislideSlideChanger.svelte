{#each slideIDs as slideID, i}
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div 
    on:click={() => dispatch('click', { newIdx: i }) }
    class:highlighted-glow={idxOfFocusedSlide === i}
    class:lowlighted-glow={idxOfFocusedSlide !== i}
    class="slide-rectangle"
  >
    { i + 1}
  </div>
{/each}

<script>
  export let idxOfFocusedSlide
  export let slideIDs

  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher()
</script>

<style>
.slide-rectangle {
	width: 60px; 
	height: 50px; 
	display: flex; 
	align-items: center; 
	justify-content: center; 
	box-sizing: border-box;
}

.highlighted-glow {
	/* background-color: hsl(0,0%,0%, 0.80); */
	color: hsl(0,0%,0%, 0.80);
	font-weight: 600;
	border-bottom: 4px solid #F7C686;
	/* color: #F7C686; */
}

.lowlighted-glow {
	color: rgb(80, 80, 80);
	font-weight: 400;
	border-bottom: 4px solid rgb(244, 244, 244);
}
</style>