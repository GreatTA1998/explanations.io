<input
  bind:this={FileUploadButton}
  on:change={(e) => uploadBackground(e)}
  style="display: none" 
  type="file" 
  accept="application/pdf" 
>

<button on:click={() => FileUploadButton.click()}>
  Upload PDF
</button>

<script>
  import { arrayUnion } from "firebase/firestore"
  import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage"
  import { updateFirestoreDoc } from "../helpers/crud.js"
  import { getRandomID } from "../helpers/utility.js";

  export let classID

  let FileUploadButton

  function uploadBackground (e) {
    const pdfFile = e.target.files[0]
    console.log('pdfFile =', pdfFile)
    uploadPDF(pdfFile)
  }

  async function uploadPDF (pdfFile) {
    const storage = getStorage()
    const pdfRef = ref(storage, `pdfs/${getRandomID()}`)
    await uploadBytes(pdfRef, pdfFile)

    const downloadURL = await getDownloadURL(pdfRef)
    const name = pdfFile.name
    
    await updateFirestoreDoc(`classes/${classID}`, {
      psetPDFsDownloadURLs: arrayUnion(downloadURL),
      psetPDFsNames: arrayUnion(name)
    })
    window.location.reload()
  }
</script>