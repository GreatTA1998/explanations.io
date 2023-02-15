<Button on:click color="secondary" variant="raised" 
  {disabled}
  style="height: 40px; border-radius: 0px; width: 100%;"
>
  <Label style="text-transform: none; padding-left: 12px; padding-right: 12px; padding-top: 8px; padding-bottom: 8px; font-size: 1rem; font-weight: 600">
    <slot>
      
    </slot>
  </Label>
</Button>

<script>
  import Button, { Label } from '@smui/button';

  export let disabled = false
</script>