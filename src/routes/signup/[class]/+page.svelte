<!-- {#key classID}
  <DetailedClassPage {classID}/>
{/key} -->

<script>
  // import DetailedClassPage from './ToCommunityOrHelper.svelte'

  export let data
  let { classID } = data
  $: ({ classID } = data) // so it stays in sync when `data` changes
</script>
