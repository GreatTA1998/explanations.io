<ClassServerMyProfile
  {classID}
  {profileUID}
/>

<script>
  import ClassServerMyProfile from '$lib/ClassServerMyProfile.svelte'

  export let data;

  let { classID, profileUID } = data;
  $: ({ classID, profileUID } = data); // so it stays in sync when `data` changes
</script>