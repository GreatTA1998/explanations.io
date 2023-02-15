<Button on:click color="secondary" variant="raised" 
  {disabled}
  style="height: 60px; margin-top: 16px; margin-bottom: 2rem; border-radius: 0px;"
>
  <Label style="text-transform: none; padding-left: 16px; padding-right: 16px; padding-top: 10px; padding-bottom: 10px; font-size: 1rem; font-weight: 600">
    <slot>
      
    </slot>
  </Label>
</Button>

<script>
  import Button, { Label } from '@smui/button';

  export let disabled = false
</script>