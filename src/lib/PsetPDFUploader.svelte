<input
  bind:this={FileUploadButton}
  on:change={(e) => uploadBackground(e)}
  style="display: none" 
  type="file" 
  accept="application/pdf, image/*" 
>

<button on:click={() => FileUploadButton.click()}>
  Upload image or PDF
</button>

<script>
  import { arrayUnion } from "firebase/firestore"
  import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage"
  import { updateFirestoreDoc } from "../helpers/crud.js"
  import { getRandomID } from "../helpers/utility.js";
  import { createEventDispatcher } from 'svelte'

  const dispatch = createEventDispatcher()
  let FileUploadButton

  function uploadBackground (e) {
    const pdfOrImageFile = e.target.files[0]
    // console.log('pdfFile =', pdfFile)
    // uploadAttachment(pdfFile)
    dispatch('file-uploaded', pdfOrImageFile)
  }
</script>