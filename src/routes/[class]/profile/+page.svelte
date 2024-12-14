<ClassServerMyProfile {classID} profileUID={$user.uid}/>

<script>
  import ClassServerMyProfile from "$lib/ClassServerMyProfile.svelte"
  import { user } from '/src/store.js'

  export let data
  let { classID } = data
  $: ({ classID } = data) // so it stays in sync when `data` changes
</script>