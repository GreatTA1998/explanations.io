<div class="header-flex" style="border: 0px solid black;">
  <div style="width: max-content;">
    <p class="header-title" style="margin-bottom: 36px;">
      College math & physics tutoring 
      <br>
      for 1/10<sup>th</sup> the cost
    </p>
    <div class="header-subtitle" style="font-size: 20px; line-height: 1.6; font-weight: 500; color: rgb(60, 60, 60);">
      A blackboard-centric website where university grads are willing to answer all your questions for $10/week,
      because the video explanations also benefit other students.
    </div>
  </div>

  <div class="header-subcopy-wrapper">
    <ReusableRoundButton on:click={redirectToSignUpPage}
      backgroundColor="#5d0068"
      textColor="white"
    >
      <div style="font-weight: 600; font-size: 18px; padding: 12px 12px;">
        Search subjects
      </div>
      
      <span style="margin-left: 0px; font-size: 32px;" class="material-symbols-outlined">
        search
      </span>
    </ReusableRoundButton>
  </div>
</div>

<div style="display: flex; gap: 1vw; flex-wrap: wrap;">
  <div class="tutor-card">
    <div style="display: flex; align-items: center; justify-content: space-between;">
      <div class="tutor-name">Ben</div>
      MIT '25
    </div>
    
    <div class="tutor-description">
      <a href="https://www.linkedin.com/in/benjamin-shimabukuro-a43b9b22a/" target="_blank" style="display: inline;">
        Competitive math tutor since 2018
      </a>
      for calculus, probabilties, differential equations, linear algebra etc. with 4 students here.
    </div>
  </div>

  
  <div class="tutor-card">
    <div style="display: flex; align-items: center; justify-content: space-between;">
      <div class="tutor-name">Esther</div>
      MIT '20
    </div>

    <div class="tutor-description">
      Full-time physics tutor since 2020 for E&M, mechanics, quantum mechanics etc. for rate of $160/hour,
      founder of
      <a href="https://www.socratictutoring.com/book-online" target="_blank" style="margin-top: 24px; display: inline;">
        Socratic Tutoring
      </a>
    </div>
  </div>
</div>

<!-- ROTATING GALLERY -->
<div class="image-gallery-container">
  {#if randomlyChosenExemplarVideos.length > 0}
    <ImageGallery galleryVideos={randomlyChosenExemplarVideos}/>
  {/if}
</div>



<script>
  import ImageGallery from '$lib/ImageGallery.svelte'
  import Button, { Label } from '@smui/button'
  import ReusableRoundButton from '$lib/ReusableRoundButton.svelte'
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
  .tutor-college {
    margin-top: 12px;
    font-size: 16px;
  }

  strong {
		color: rgb(30, 30, 30);
	}

  .triplet-paragraph {
    width: 100%;
    max-width: 360px; 
    color: rgb(95, 95, 94); 
    font-weight: 500;
  }

  .tutor-card {
    border: 2px solid black; width: 300px; 
		height: 80px; padding: 16px;
    border-radius: 16px;
  }

  .tutor-name {
    font-weight: 600;
    font-size: 16px;
  }

  .tutor-description {
    margin-top: 12px;
    margin-bottom: 12px;
    font-size: 14px;
  }

  .flag-icon {
    font-size: 20px;
  }
</style>