<MultislideBlackboard/>
<MultislideDoodleVideo
  {audioDownloadURL}
/>

<script>
  import MultislideBlackboard from '$lib/MultislideBlackboard.svelte'
  import MultislideDoodleVideo from '$lib/MultislideDoodleVideo.svelte'
  import { getFirestoreDoc } from '/src/helpers/crud.js'
  import { onMount } from 'svelte'

  const classID = 't5ZxK9RQcWBCHBeKFhcc'
  const powerpointID = 'QWERTYUIOP'
  let audioDownloadURL

  onMount(async () => {
    const powerpoint = await getFirestoreDoc(`classes/${classID}/powerpoints/${powerpointID}`)
    audioDownloadURL = powerpoint.audioDownloadURL
  })

  let slideIDs = [
    '123456789',
    'abcdefghi',
    'ABCDEFGHI'
  ]
</script>