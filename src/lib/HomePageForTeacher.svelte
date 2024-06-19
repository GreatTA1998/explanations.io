<div class="header-flex">
  <div style="width: max-content;">
    <p class="header-title" style="margin-bottom: 36px;">
      Explain things you love
    </p>	
    <div class="header-subtitle" style="font-size: 20px; line-height: 1.4; font-weight: 500; color: rgb(60, 60, 60);">
      Share your unique insight with the world, supported by paying subscribers. (Try the demo blackboard with an iPad-like drawing device)
    </div>
  </div>

  <div class="header-subcopy-wrapper">
    <ReusableRoundButton on:click={redirectToSignUpPage}
      backgroundColor="#5d0068"
      textColor="white"
    >
      <div style="font-weight: 600; font-size: 18px; padding: 12px 12px;">
        Explore class servers
      </div>
      
      <span style="margin-left: 0px; font-size: 32px;" class="material-symbols-outlined">
        search
      </span>
    </ReusableRoundButton>
  </div>
</div>			

<OfflineMultislideRecordingDemo/>

<div class="webflow-section" style="padding-top: 4%;">
  <div style="max-width: 800px; height: fit-content; font-size: 24px; margin-top: 48px; line-height: 1.5; font-weight: 500; color: rgb(95, 95, 94);">
    <div style="">
      Grading. Staff meeting. Office Hours. 
      Answering the same question again. And again. 
      <strong style="color: rgb(30, 30, 30)">
        Teaching involves too much distractions.
      </strong>
      Starting a Youtube channel takes too much upfront work, without any suitable starting point. 
      Tutoring pays well, but doesn't deliver the potential for bigger impact. 
    </div>

    <div style="margin-top: 48px; background-color: black; border-radius: 16px; padding: 16px; color: rgb(160, 160, 160); position: relative;">
      <strong style="color: white;">
        Here, you can do what you love the most: explaining things in a new, insightful way, and 
        seeing how the learners react.
      </strong> 
      This combines the clarity of an in-person explanation with the efficiency of async communication.
      By leveraging the power of recorded videos, you are not physically bounded. You get paid in proportion to the learners you effectively helped.
      <strong style="color: white;"></strong>
    </div>
  </div>

  <hr style="margin-top: 80px; color: grey;">
    
  <div style="
    margin-top: 80px; 
    display: flex; 
    justify-content: space-between; 
    margin-left: 4%; 
    margin-right: 4%;
    flex-wrap: wrap; 
    row-gap: 48px;
  "
  >
    <div>

      <div style="display: flex; align-items: center; width: 100%;">
        <span class="material-symbols-outlined" style="font-size: 2rem; opacity: 1; margin-right: 8px;">
          signpost
        </span>

        <div class="" style="font-size: 24px; font-weight: 500;">
          Question-driven
        </div>
      </div>

      <div style="margin-top: 12px;"></div>

      <div class="triplet-paragraph">
        Lectures, Youtube have a top-down format: the instructor decides the curriculum
        and the students, out of interest or not, has to follow it. 

        Here, you don't have to talk to a wall. Learners here are willing to pay you to 
        ask questions, keeping it a vibrant two-way street.
      </div>
    </div>
    
    <div>

      <div style="display: flex; align-items: center; ">
        <span class="material-symbols-outlined" style="font-size: 2rem; opacity: 1; margin-right: 8px;">
          person_raised_hand
        </span>

        <div class="" style="font-size: 24px; font-weight: 500;">
          Start small
        </div>
      </div>

      <div style="margin-top: 12px;"></div>

      <div class="triplet-paragraph">
        For platforms like Youtube, content discovery is at the mercy of rec. algorithms,
        and you get only a tiny % of money and engagement, so critical mass is necessary. 
        Here, all the learners pay, so even an audience size of 10 is reasonable. 
        You can actually start with 0 following and use the platform to grow.
      </div>
    </div>

    <div>
      <div style="display: flex; align-items: center;">
        <span class="material-symbols-outlined" style="font-size: 2rem; margin-right: 10px;">
          diversity_1
        </span>

        <div style="font-size: 24px; font-weight: 500;"> 
          Your own schedule
        </div>
      </div>

      <div style="margin-top: 12px;"></div>

      <div class="triplet-paragraph">
        By outlining response expectations e.g. 24 hours, you have much more flexibility. 
        As your library grows richer, the need for questions will approach zero. There is no upper bound to have many learners you can help
        with the content you've already created.
      </div>
    </div>
  </div>
</div>

<script>
  import OfflineMultislideRecordingDemo from '$lib/OfflineMultislideRecordingDemo.svelte'
  import ReusableRoundButton from '$lib/ReusableRoundButton.svelte'
  import { goto } from '$app/navigation'

  function redirectToSignUpPage () {
		goto('/servers')
	}
</script>