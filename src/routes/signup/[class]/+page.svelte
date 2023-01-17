<div>
  <div>This is a sub-page about { classID }</div>

  <h2>Tutor applicants</h2>
  <button>Apply with video explanation</button>

  <h2>Student pre-signups</h2>
  <button>Pre-signup for $1</button>
</div>


<script>
  export let data
  let { classID } = data
  $: ({ classID } = data) // so it stays in sync when `data` changes

  console.log('classID =', classID)
</script>
