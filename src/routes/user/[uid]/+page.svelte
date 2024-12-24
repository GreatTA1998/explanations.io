<CrossServerProfile {profileUID}/>

<script>
  import CrossServerProfile from '$lib/CrossServerProfile/index.svelte'

  export let data;

  let { profileUID } = data;
  $: ({ profileUID } = data); // so it stays in sync when `data` changes
</script>