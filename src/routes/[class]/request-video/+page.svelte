<div use:portal={'main-content'} style="padding: 16px;">
  <h2 style="font-family: sans-serif">
    Request a video
  </h2>
  <DetailedClassPage {classID}>
    
  </DetailedClassPage>

  <!-- Here you can modify your information, like your bio, and your profile, top videos, statistics, etc. -->
  <!-- <div>Sign up as helper</div> -->
  Question title <input>
  Question description <input>

  <div style="font-size: 1.5rem;">
    <br>
    <br>
  </div>
  <div>
    Can attach PDF or images here for the question
  </div>

  <Button style="width: 100%; background-color: orange; color: white;">
    Submit question
  </Button>
</div>

<script>
  import { portal } from '../../../helpers/actions.js'
  import { getFirestoreCollection } from '../../../helpers/crud.js'
  import DetailedClassPage from '/src/routes/signup/[class]/DetailedClassPage.svelte'
  import Button from '@smui/button'

  export let data
  let { classID, roomID } = data
  $: ({ classID, roomID } = data) // so it stays in sync when `data` changes
</script>