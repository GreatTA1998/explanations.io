<script>
  import { handleServerRedirect } from '/src/helpers/everythingElse.js'
  import { page } from '$app/stores'

  export let server
</script>

<button on:click={() => handleServerRedirect(server)} 
  class:orange-underline={$page.params.class === server.id} 
  class="tab-item"
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
		white-space: nowrap;
	}

	@media (max-width: 768px) {
		.tab-item-text {
			max-width: 8ch; 
			overflow: hidden; 
			text-overflow: ellipsis; 
			white-space: nowrap;
		}
	}

	.orange-underline {
		border-bottom: 2px solid orange;
		/* left drawer server item's lighter orange #f7c686; */
	}
</style>