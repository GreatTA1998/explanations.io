<div style="display: flex;">
  <div class="one-side-of-market" style="border-right: 1px solid black">
    <div 
      class:red-text={numOfStudents === 0}
      style="font-size: 1em; 
      
      font-weight: 500; display: flex; justify-content: center; align-items: center;"
    >
      {numOfStudents} Student{numOfStudents === 1 ? '' : 's'}
      <span class="material-icons" style="font-size: 4px; margin: 8px;">circle</span>
      {numOfQuestions} questions asked
    </div>
    
    <div style="display: flex; margin-top: 12px; padding-left: 16px;">
      {#each {length: numOfStudents} as _, i}
        <span class="material-icons" style="font-size: 3em; color: black;">
          emoji_people
        </span>
      {/each}
   </div>

   <!-- <div class:red-text={numOfQuestions === 0} 
      style="margin-top: 36px; display: flex; justify-content: center;"
    >
      {numOfQuestions} questions asked
    </div> -->

   <div style="display: flex; align-items: center; padding-left: 20px; margin-top: 12px;">
      {#each {length: numOfQuestions} as _, i}
        <span class="material-icons" style="font-size: {2 * (0.97 ** numOfVideos)}em; color: black;">
          question_mark
        </span>
      {/each}
    </div>

  </div>
  <div class="one-side-of-market" style="border-left: 1px black;">
    <div 
      class:red-text={numOfTeachers === 0}
      style="
        font-size: 1em; 
        font-weight: 500;
        display: flex; 
        justify-content: center;    
      "
    >
      {numOfTeachers} Teacher{numOfTeachers === 1 ? '' : 's'}
      <span class="material-icons" style="font-size: 4px; margin: 8px;">
        circle
      </span>
      {numOfVideos} videos created
    </div>

    <div style="display: flex; margin-top: 12px; padding-left: 24px;">
      {#each {length: numOfTeachers} as _, i}
        <span class="material-icons" style="font-size: 3em;">
          school
        </span>
      {/each}
   </div>
   <div style="padding-left: 24px; display: flex; align-items: center; margin-top: 12px; flex-wrap: wrap;">
      {#each {length: numOfVideos} as _, i}
        <span class="material-icons" style="font-size: {2 * (0.97 ** numOfVideos)}em;">
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
</script>

<style>
  .one-side-of-market {
    width: 50%; 
    height: fit-content; 
    padding-top: 20px;
    padding-bottom: 10px;
    /* border: 1px solid purple; */
    /* border-radius: 22px; */
  }

  .red-text {
    color: red;
  }
</style>