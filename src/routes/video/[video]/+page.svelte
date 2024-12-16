<h1>
  Not yet implemented
</h1>

<script>
  export let data;

  let { videoID } = data;
  $: ({ videoID } = data); // so it stays in sync when `data` changes

  const classID = videoID.split(':')[0]
  const blackboardID = videoID.split(':')[1]
</script>