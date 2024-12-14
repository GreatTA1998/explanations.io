<div style="padding-left: 20px; padding-right: 20px;">
  <h2 class="header-title-modified" style="font-size: 5rem;">
    Request a class 
  </h2>

  <div style="display: flex; justify-content: space-between">
    <!-- Basically, copy Google Forms -->
    <div>
      <div>Class number</div>
      <input placeholder="e.g. 6.006">

      <div style="margin-top: 40px;">Class name</div>
      <input placeholder="e.g. Intro to Algorithms">

      <!-- npm i -D @smui/segmented-button -->
      <div style="margin-top: 40px;">
        <input type="checkbox" value="Spring 2023">Spring 2023 
        <input type="checkbox" value="Summer ASE 2023">Summer ASE 2023
      </div>
    </div>

    <Button>
      Request class for $1
    </Button>
    <div>
      We will focus efforts on manually recruiting tutors for your class. 

      When your requested class becomes available, you receive a 50% discount for the entirety of semester.
      For example, if it costs $20/week, you pay $10/week.
    </div>
  </div>
</div>

<script>
  import Button, { Label } from '@smui/button';

</script>

<style>
  /* Copied from Webflow's home page inspector */
@media only screen and (min-width: 1550px) {
	.header-title-modified {
		font-size: 7rem;
	}
}

@media only screen and (max-width: 991px) {
	.header-title-modified {
		/* I don't know why !important is needed when webflow.com doesn't need it */
		max-width: 85vw !important;
		font-size: 9vw !important;
	}
}

.header-title-modified {
	max-width: 58vw; /* wenflow is 52vw, but explanations is a long word */
	margin-top: 0; 
	margin-bottom: 0;
	font-size: 7vw;
	/* line-height: 1; */
	font-weight: 500;

	/* This turns to prevent <p> from taking additional height for no reason */
	margin-top: 0;
	margin-bottom: 0;

	box-sizing: border-box;

  /* NOTE THIS IS ADDED */
  font-family: sans-serif; font-weight: 600;
}
</style>