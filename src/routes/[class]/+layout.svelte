<TheLeftDrawer 
  {classID}
/>

<slot>

</slot>

<script>
  import TheLeftDrawer from '$lib/TheLeftDrawer.svelte'

  export let data;
  let { classID } = data;
  $: ({ classID } = data); // so it stays in sync when `data` changes
</script>

