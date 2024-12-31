<script>
  import { handleServerRedirect } from '/src/helpers/everythingElse.js'
  import { page } from '$app/stores'
	import { viewport } from '/src/storeFolder/viewport.js'
	import { WIDTHS } from '/src/helpers/CONSTANTS.js'

  export let server

	let tabWidth = ''

	$: getTabWidth($viewport.width)

	function getTabWidth () {
		const remainingWidth = $viewport.width - WIDTHS.LOGO - WIDTHS.SEARCH_BAR_COMPACT
		const totalPadding = 56
		tabWidth = `${remainingWidth - totalPadding}px`
	}
</script>

<button on:click={() => handleServerRedirect(server)} 
  class:orange-underline={$page.params.class === server.id} 
  class="tab-item"
	style="max-width: {tabWidth};"
>
  <div class="tab-item-text">
    {server.name}
  </div>
</button>

<style>
  .tab-item {
		color: black; 
		height: 100%; 
		display: flex; 
		align-items: center;
		cursor: pointer;
	}

	.tab-item-text {
		overflow: hidden; 
		text-overflow: ellipsis; 
		white-space: nowrap;
	}

	.orange-underline {
		border-bottom: 2px solid orange;
		/* lighter orange #f7c686 could be a good alternative */
	}
</style>