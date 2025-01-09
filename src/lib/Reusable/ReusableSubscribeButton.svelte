<script>
  import PopupConfirmLearner from '$lib/PopupConfirmLearner.svelte'
</script>

<PopupConfirmLearner let:setIsPopupOpen={setIsPopupOpen}>
  <button on:click={() => setIsPopupOpen({ newVal: true })} class="primary-button" {...$$restProps}>
    <slot>
      Try one week for $10
    </slot>
  </button>
</PopupConfirmLearner>

<style>
  .primary-button {
		background: #5d0068;
		color: white;
		padding: 12px 24px;
		border-radius: 24px;
		border: none;
		font-weight: 500;
		transition: all 0.2s ease;
		width: fit-content;
    height: 44px;

		font-size: 16px;
	}

	.primary-button:hover {
		transform: translateY(-1px);
		box-shadow: 0 4px 12px rgba(93, 0, 104, 0.2);
	}
</style>
