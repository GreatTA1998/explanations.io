<div use:portal={'main-content'} style="padding: 16px;">
  <div style="font-size: 1.5rem">
    "People subscribe not for a particular video necessarily, but because they 
    fall in love with your particular perspective on explaining the subject matter"

    https://on.substack.com/p/why-free-posts-pay-avoiding-a-tempting
  </div>

  <div style="margin-bottom: 40px;"></div>

  {#if !$user.phoneNumber}
    <h2 class="mdc-typography--headline6" style="margin: 0; font-family: sans-serif;">
      1. Log in with phone
    </h2>
    <PhoneLogin/>
  {:else}
    <div>
      Welcome { $user.name || '' }.
      This is your helper profile, 
      which contains your info, your statistics (number of free videos, number of paid videos), and your top videos, 
      <div style="color: purple">and allows students to subscribe to you.</div>
      <Button>Get subscribers-only videos and reliable reply time for $10/month</Button>
    </div>
    
    {#if !$user.name || ($user.name && $user.name.split(' ')[0] === 'Beaver')}
      <div>First name</div>
      <input bind:value={firstNameInput} placeholder="Alice, Bob, Charlie"/>

      <div>Last name</div>
      <input bind:value={lastNameInput} placeholder=""/>

      <!-- TO-DO:
        1. Bio
        2. Venmo
        3. Can create more videos  
      -->
      <Button on:click={createTutorDoc({ classID, firstName: firstNameInput, lastName: lastNameInput })}>
        Submit
      </Button>
    {/if}
  {/if}
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