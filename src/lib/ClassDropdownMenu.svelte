<!-- <Button on:click={() => menu.setOpen(true)}> -->
  <!-- <h1 style="font-family: Roboto, sans-serif; font-weight: 400; margin-left: 6px; margin-top: 5px; margin-bottom: 0px; font-size: 2.0rem">
    6.036
  </h1> -->
  <div class="mdc-typography--headline4" style="margin-left: 6px; margin-top: 5px; margin-bottom: 0px; font-size: 2.0rem">
    6.036
  </div>
<!-- </Button> -->
<Menu bind:this={menu} style="left: 100px; top: 50px; width: 300px">
  <List>
    {#each mitClasses as mitClass }
      <Item on:SMUI:action={() => {}}>
        {mitClass.name}
      </Item>
    {/each}
  </List>
</Menu>
 
<!-- Fetch the classes you have -->
<script lang="ts">
  import './_Typography.scss'
  import Menu from '@smui/menu';
  import List, { Item, Separator, Text } from '@smui/list';
  import Button from '@smui/button';
 
  let mitClasses = [{ name: '6.006' }, { name: '6.036' }]
  let menu

  // fetch your own classes 
  // need your mirror doc
</script>