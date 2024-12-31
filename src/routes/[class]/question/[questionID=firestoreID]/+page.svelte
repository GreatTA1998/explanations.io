<script>
  import QuestionFullPage from '$lib/QuestionFullPage/index.svelte'

  export let data
  
  let { classID, questionID } = data
  $: ({ classID, questionID } = data) // so it stays in sync when `data` changes
</script>

{#key questionID}
  <QuestionFullPage {classID} {questionID}/>
{/key}