<div>
  <h2 class="section-title">
    18.06: Linear Algebra
  </h2>

  <Button color="secondary" variant="raised" style="height: 75px; margin-top: 40px;">
    <Label style="text-transform: none; padding-left: 20px; padding-right: 20px; padding-top: 50px; padding-bottom: 50px; font-size: 1.2rem; border-radius: 6px; font-weight: 600">
      Early signup for $1
    </Label>
  </Button>
  
  <h2>Tutor gallery</h2>
  <div style="display: flex; justify-content: space-between;">
    <div class="tutor-business-card">
      <Card>
        <PrimaryAction on:click={() => clicked++} padded>
          Elton Lin
          <br>

          6-14, '20
          <br>
          600 combined view-minutes for Spring 2020
        </PrimaryAction>
      </Card>
    </div>

    <div class="tutor-business-card">
      <Card>
        <PrimaryAction on:click={() => clicked++} padded>
          Be a 18.06 tutor
          <br>
          Just write a short bio
          and record an example video explanation
          <br>
        </PrimaryAction>
      </Card>
    </div>
  </div>

  <div style="margin-top: 20px;"></div>

  <ImageCarousel>

  </ImageCarousel>

  <!-- Offer your tutor service will be on the last page -->
  <!--<button>Offer your tutor service</button> -->

  <h2 class="section-title">
    Editorial
  </h2>
  <div>
    Insights about common pitfalls in the class
  </div>


  <div>classID for fetching data: { classID }</div>
</div>


<script>
  import ImageCarousel from '$lib/ImageCarousel.svelte'
  import Card, { PrimaryAction } from '@smui/card'
  import Button, { Label } from '@smui/button';

  export let data
  let { classID } = data
  $: ({ classID } = data) // so it stays in sync when `data` changes

  console.log('classID =', classID)
</script>

<style>
  .tutor-business-card {
    max-width: 400px; 
    width: 90%;
  }

  .section-title {
    font-size: 4rem; font-family: sans-serif; font-weight: 600; color: hsl(0,0%,0%, 0.80);
  }
</style>

