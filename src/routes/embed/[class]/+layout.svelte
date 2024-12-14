<slot>

</slot>

<script>
  export let data;
   let { classID, blackboardID } = data;
   $: ({ classID, blackboardID } = data); // so it stays in sync when `data` changes
</script>
