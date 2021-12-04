<!-- <Button on:click={() => menu.setOpen(true)}> -->
  <h1 style="font-family: Roboto, sans-serif; font-weight: 400; margin-left: 8px; margin-top: 10px; margin-bottom: 12px; font-size: 2.4rem">
    6.036
  </h1>
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
  import Menu from '@smui/menu';
  import List, { Item, Separator, Text } from '@smui/list';
  import Button from '@smui/button';
 
  let mitClasses = [{ name: '6.006' }, { name: '6.036' }]
  let menu

  // fetch your own classes 
  // need your mirror doc
</script>