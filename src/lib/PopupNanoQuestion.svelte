<BasePopup on:popup-close>
  <h2 slot="title" style="font-family: sans-serif;">
    Nano-question
  </h2>
  <div slot="popup-content" style="font-family: sans-serif; padding: 12px;">
    <div style="font-size: 1rem;">
      Open-ended question here...
    </div>
  </div>

  <div slot="popup-buttons" style="direction: rtl; margin-bottom: 12px; margin-right: 4px;">
    <Button>
      Reveal reference answer
    </Button>
    <Button on:click={() => dispatch('popup-close')}>
      Cancel
    </Button>
  </div>
</BasePopup>

<script>
  import BasePopup from '$lib/BasePopup.svelte'
  import Button from '@smui/button'



</script>