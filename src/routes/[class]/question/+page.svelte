<ClassServerAskQuestion {classID}/>

<script>
  import ClassServerAskQuestion from '$lib/AskQuestion/index.svelte'

  export let data;
  
  let { classID } = data
  $: ({ classID } = data)
</script>