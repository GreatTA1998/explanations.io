<ClassServerAskQuestion {classID}/>

<script>
  import ClassServerAskQuestion from '$lib/ClassServerAskQuestion.svelte'

  export let data;
  
  let { classID } = data
  $: ({ classID } = data)
</script>