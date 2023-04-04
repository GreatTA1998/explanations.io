<div use:portal={'main-content'} style="padding: 16px;">
  <div style="font-size: 1.5rem">
    This is just an alias for create new room, but in reverse chronological order (i.e. most recent)
  </div>
</div>

<script>
  import { portal } from '../../../helpers/actions.js'
  import { user } from '../../../store.js'
  import PhoneLogin from '$lib/PhoneLogin.svelte'
  import Button from '@smui/button'

  let firstNameInput 
  let lastNameInput
  let venmoInput 
</script>