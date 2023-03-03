<DetailedClassPage
  isNewlyOfferedClass={false}
  classID={'Mev5x66mSMEvNz3rijym'}
>

<div slot="past-videos-button" class="header-subcopy-wrapper">
  <div class="header-subcopy">
    Note: the economics department sponsors in-person tutoring for <i>free</i>, email gking@mit.edu for details
  </div>
  <Button on:click={() => redirectToServer(id)} color="secondary" variant="outlined" style="height: 60px; margin-top: 16px; margin-bottom: 2rem; border-radius: 0px;">
    <Label style="text-transform: none; padding-left: 16px; padding-right: 16px; padding-top: 10px; padding-bottom: 10px; font-size: 1rem; border-radius: 6px; font-weight: 600">
      Fall '22 server
    </Label>
  </Button>
</div>
</DetailedClassPage>

<!-- EDITORIAL HERE
  We're forced to overlap 2-3 different 3D graphs onto 2D, 
  with one-color, and try to make sense of it. 
  Math is therefore the most common source of confusion, 
  yet it's easily solved by a 10-minute review of f(x, y) constrained optimization of two variables.
-->

<script>
  import DetailedClassPage from './[class]/DetailedClassPage.svelte'
  import Button, { Label } from '@smui/button';
  import { goto } from '$app/navigation'

  const id = 'Mev5x66mSMEvNz3rijym' // 14.01

  function redirectToServer (classID) {
    goto(`/${id}/${id}`)
  }
</script>

