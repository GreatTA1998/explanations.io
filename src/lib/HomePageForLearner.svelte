<div class="header-flex" style="border: 0px solid black;">
  <div style="width: max-content;">
    <p class="header-title" style="line-height: 1; margin-bottom: 36px;">
      Get it properly explained
    </p>
    <div class="header-subtitle" style="font-size: 20px; line-height: 1.4; font-weight: 500; color: rgb(60, 60, 60);">
      Join group lessons taught by your favorite “Youtube Teachers” to answer your long, unresolved questions — once and for all.
    </div>
  </div>

  <div class="header-subcopy-wrapper" style="margin-top: 32px; margin-left: 0px; border: 0px solid orange;">
    <Button on:click={redirectToSignUpPage} color="secondary" variant="raised" class="call-to-action-button" 
      style="	
        height: 4.2vw; 
        min-height: 42px;
        margin-top: 0.85vw; 
        margin-bottom: 0.8vw; 
        border-radius: 2.1vw;
      "
    >
      <Label style="text-transform: none; 
        padding-left: 24px; padding-right: 24px; padding-top: 10px; padding-bottom: 10px; font-size: 1.2em; font-weight: 600;
        display: flex; align-items: center;

      ">
         Find your class

        <span style="margin-left: 8px; font-size: 32px;" class="material-symbols-outlined">
          search
          </span>
      </Label>
    </Button>
  </div>
</div>

<!-- ROTATING GALLERY -->
<div class="image-gallery-container">
  {#if randomlyChosenExemplarVideos.length > 0}
    <ImageGallery galleryVideos={randomlyChosenExemplarVideos}/>
  {/if}
</div>

<div class="webflow-section" style="padding-top: 4%;">
  <div style="max-width: 800px; height: fit-content; font-size: 24px; margin-top: 48px; line-height: 1.5; font-weight: 500; color: rgb(95, 95, 94);">
    <div style="">
      Overcrowded Office Hours. Shortage of tutors. Outdated websites.
      Restricted material. Paternalistic policies. Weak incentives.
      <strong style="color: rgb(30, 30, 30)">
        Universities fundamentally don't prioritize teaching 
      </strong>
      over research & prestige.

      Meanwhile, tutoring is expensive, and online courses are just unavailable for advanced subjects.
      <br>
    </div>

    <div style="margin-top: 48px; background-color: black; border-radius: 16px; padding: 16px; color: rgb(160, 160, 160); position: relative;">
        <strong style="color: white;">Here, you can directly request blackboard explanations from unofficial teachers all over the world.</strong> 
        This combines the clarity of an in-person explanation with the efficiency of async communication.

      <!-- <br> -->

        By leveraging the power of recorded videos, affordability skyrockets.
        Can't afford $100/hour sessions and $60K/year tuitions? How about <strong style="color: white;"> $10/month.</strong>
 

      </div>
    </div>

    <hr style="margin-top: 80px; color: grey;">
    
  <div style="
    margin-top: 80px; 
    display: flex; 
    justify-content: space-between; 
    margin-left: 4%; 
    margin-right: 4%"
  >
    <div>

      <div style="display: flex; align-items: center;">
        <span class="material-symbols-outlined" style="font-size: 3rem; opacity: 1; margin-right: 8px;">
          travel_explore
        </span>

        <div class="" style="font-size: 24px; font-weight: 500;">
          Undiscovered teachers
        </div>
      </div>

      <div style="margin-top: 12px;"></div>

      <div style="width: 360px; color: rgb(95, 95, 94); font-weight: 500;">
        In the past, a lot of great explainers don't want to be teachers.
        Under this low-barrier, meritocratic system, you'll find former TAs, previous students,
        working professionals, etc. all kinds of previously undiscovered teaching talent.
      </div>
    </div>
    
    <div>

      <div style="display: flex; align-items: center; ">
        <span class="material-symbols-outlined" style="font-size: 3rem; opacity: 1; margin-right: 8px;">
          person_raised_hand
        </span>

        <div class="" style="font-size: 24px; font-weight: 500;">
          Personal attention
        </div>
      </div>

      <div style="margin-top: 12px;"></div>

      <div style="width: 360px; color: rgb(95, 95, 94); font-weight: 500;">
        If in rare cases that the explanation library and comment follow-ups aren't enough to resolve your question
        - you can still schedule a live-one-on-one with your teacher.
      </div>
    </div>

    <div>
      <div style="display: flex; align-items: center;">
        <span class="material-symbols-outlined" style="font-size: 3rem; margin-right: 10px;">
          diversity_1
        </span>

        <div style="font-size: 24px; font-weight: 500;"> 
          Peer environment
        </div>
      </div>

      <div style="margin-top: 12px;"></div>
      <div style="width: 360px; color: rgb(95, 95, 94); font-weight: 500;">
        Surround yourself with other active learners in the server, while still being able to 
        go at your most efficient pace at a flexible schedule towards your own goal.
      </div>
    </div>
  </div>
</div>

<script>
  import ImageGallery from '$lib/ImageGallery.svelte'
  import Button, { Label } from '@smui/button'
  import { goto } from '$app/navigation'

  // RANDOMLY CHOOSE DEMO VIDEOS
	const exemplarVideos = [
		{ titleForDebugging: 'Free body diagrams' ,
			dbPath: 'classes/qfWJFR2xTm9vYOJFXYfJ/blackboards/eSScStbUyFOtWZPaSWvu',
			creatorName: 'Noam Buckman',
			className: 'Mechanics of Materials',
			classID: 'qfWJFR2xTm9vYOJFXYfJ'
		},
		{ titleForDebugging: 'Where should you make your cuts along the bar?' ,
			dbPath: 'classes/qfWJFR2xTm9vYOJFXYfJ/blackboards/js7wFnC1YTPND10cNdiZ',
			creatorName: 'Noam Buckman',
			className: 'Mechanics of Materials',
			classID: 'qfWJFR2xTm9vYOJFXYfJ'
		},
		{ titleForDebugging: 'Keeping the left or right side of the bar for a FBD?',
			dbPath: 'classes/qfWJFR2xTm9vYOJFXYfJ/blackboards/0KBOPYgWUbK3VZTGyuUi',
			creatorName: 'Noam Buckman',
			className: 'Mechanics of Materials',
			classID: 'qfWJFR2xTm9vYOJFXYfJ'
		},
		{ titleForDebugging: 'HW3 Problem 8' ,
			dbPath: 'classes/lvzQqyZIV1wjwYnRV9hn/blackboards/pKRiHHADBzNgXp1nxJLB',
			creatorName: 'Ben Shimabukuro',
			className: 'Linear Algebra',
			classID: 'lvzQqyZIV1wjwYnRV9hn'
		},
		{ titleForDebugging: 'Eigenmatrices' ,
			dbPath: 'classes/lvzQqyZIV1wjwYnRV9hn/blackboards/5uM4TNDPOwmicFKZBsO7',
			creatorName: 'Ben Shimabukuro',
			className: 'Linear Algebra',
			classID: 'lvzQqyZIV1wjwYnRV9hn'
		},
		{
			titleForDebugging: 'Intuition behind why eignenvalue must be 1 or 0 here',
			dbPath: 'classes/lvzQqyZIV1wjwYnRV9hn/blackboards/UwXpkXqKTYfrnz5FybRp',
			creatorName: 'Ben Shimabukuro',
			className: 'Linear Algebra',
			classID: 'lvzQqyZIV1wjwYnRV9hn'
		},
		{ titleForDebugging: 'Theory of change of basis',
			dbPath: 'classes/lvzQqyZIV1wjwYnRV9hn/blackboards/cYVtScLxq3AIaC91HUNW',
			creatorName: 'Ammar Fayad',
			className: 'Linear Algebra',
			classID: 'lvzQqyZIV1wjwYnRV9hn'
		},
		{ titleForDebugging: 'Application of change of basis ' ,
			dbPath: 'classes/lvzQqyZIV1wjwYnRV9hn/blackboards/GYpahmE2ULQ2ry34tBDv',
			creatorName: 'Ammar Fayad',
			className: 'Linear Algebra',
			classID: 'lvzQqyZIV1wjwYnRV9hn'
		},
		{ titleForDebugging: 'Why is f(x, y) maximized when indifference curve meets the budget constraint?' ,
			dbPath: 'classes/Mev5x66mSMEvNz3rijym/blackboards/GEdj8PlbdTb3tHj5MqlJ',
			creatorName: 'Elton Lin',
			className: 'Microeconomics',
			classID: 'Mev5x66mSMEvNz3rijym'
		},
		{ titleForDebugging: 'Practice Finals: Fall 2018 Problem 11 (Value Iteration)',
			dbPath: 'classes/AsUl1VWQ7zzxZsD5epL7/blackboards/o',
			creatorName: 'Tony Wang',
			className: 'Intro to Machine Learning',
			classID: 'Mev5x66mSMEvNz3rijym'
		},
		{ titleForDebugging: 'Step 1 of 2: transforming circular separation to linear separation',
			dbPath: 'classes/AsUl1VWQ7zzxZsD5epL7/blackboards/JP7ucWZm3TRu9yKodDzW',
			creatorName: 'Tony Wang',
			className: 'Intro to Machine Learning',
			classID: 'Mev5x66mSMEvNz3rijym'
		},
		{ titleForDebugging: 'Midterm Review: Disjoint Dimensions (recursion)' ,
			dbPath: 'classes/USb1mGxeLqufbgbPhSbV/blackboards/K7kZAAhGIhlcYWTjzh4q',
			creatorName: 'Caleb Noble',
			className: 'Intro to Algorithms',
			classID: 'USb1mGxeLqufbgbPhSbV'
		}
	]

	let randomlyChosenExemplarVideos = null

  const nums = new Set();
	while (nums.size < 4) {
		nums.add(getRandomIntInclusive({ min: 0, max: exemplarVideos.length - 1 }));
	}
	const temp = [] 
	const uniqueIndices = [...nums]
	for (const uniqueIdx of uniqueIndices) {
		temp.push(exemplarVideos[uniqueIdx])
	}
	randomlyChosenExemplarVideos = temp

	function getRandomIntInclusive({ min, max }) {
		min = Math.ceil(min)
		max = Math.floor(max)
		return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
	}

  function redirectToSignUpPage () {
		goto('/servers')
	}
</script>

<style>
  strong {
		color: rgb(30, 30, 30)	
	}
</style>