<slot {galleryBoardIDs}>

</slot>

<script>
export let fetchVideosFunc
export let selectedTutorUID

let galleryBoardIDs

async function justDoIt () {
  const temp = await fetchVideosFunc(selectedTutorUID)
  galleryBoardIDs = temp
}

justDoIt()
</script>