<div style="display: flex;">
  <div class="one-side-of-market">
    <div 
      class:red-text={numOfStudents === 0}
      class="marketplace-title"
      style="color: {studentSideColor}"
    >
      <div style="font-size: 2em; margin-right: 20px;">
        {numOfStudents}
      </div>
       LEARNER{numOfStudents === 1 ? '' : 'S'}
      <!-- <span class="material-icons" style="font-size: 4px; margin: 8px;">circle</span>
      {numOfQuestions} questions -->
    </div>
    
    <div style="margin-top: 20px;">

    </div>

    <div style="display: flex; padding-left: 16px;">
      {#each {length: numOfStudents} as _, i}
        <span class="material-icons visualization-icon" style="font-size: {7 * (0.98 ** numOfStudents)}em; color: {studentSideColor};">
          emoji_people
        </span>
      {/each}
   </div>

   <div style="display: flex; align-items: center; padding-left: 20px; margin-top: 12px;">
      {#each {length: numOfQuestions} as _, i}
        <span class="material-icons visualization-icon" style="font-size: {5 * (0.98 ** numOfQuestions)}em; color: {studentSideColor};">
          question_mark
        </span>
      {/each}
    </div>

  </div>


  <!-- Teacher side -->
  <div class="one-side-of-market" style="border-left: 1px solid black;">
    <div 
      class:red-text={numOfTeachers === 0}
      class="marketplace-title"
      style="color: {teacherSideColor};"
    >
      <div style="font-size: 2em; margin-right: 20px;">
        {numOfTeachers}
      </div>

      EXPLAINER{numOfTeachers === 1 ? '' : 'S'}
      <!-- <span class="material-icons" style="font-size: 4px; margin: 8px;">
        circle
      </span>
      {numOfVideos} videos -->
    </div>

    <div style="display: flex; margin-top: 12px; padding-left: 24px;">
      {#each {length: numOfTeachers} as _, i}
        <span class="material-icons visualization-icon" style="font-size: {7 * (0.98 ** numOfTeachers)}em; color: {teacherSideColor};">
          school
        </span>
      {/each}
   </div>
   <div style="padding-left: 24px; display: flex; align-items: center; margin-top: 12px; flex-wrap: wrap;">
      {#each {length: numOfVideos} as _, i}
        <span class="material-icons visualization-icon" style="font-size: {5 * (0.98 ** numOfVideos)}em; color: {teacherSideColor};">
          slideshow
        </span>
      {/each}
    </div>
  </div>
</div>

<script>
  export let numOfStudents
  export let numOfTeachers
  export let numOfVideos
  export let numOfQuestions

  let studentSideColor = '#1508c7'
  let teacherSideColor = '#1508c7'
</script>

<style>
  * {
    box-sizing: border-box;
  }

  .visualization-icon {
    color: 	rgb(38, 38, 206);
  }

  .one-side-of-market {
    width: 50%; 
    height: fit-content; 
    padding-top: 20px;
    padding-bottom: 10px;
    /* border: 1px solid purple; */
    /* border-radius: 22px; */
  }

  .marketplace-title {
    font-size: 1.5em; 
    font-weight: 400; 
    display: flex; 
    justify-content: center; 
    align-items: center;
    color: 	rgb(38, 38, 206);
    /* rgb(72,72,72); */
  }

  .red-text {
    /* color: red; */
  }
</style>