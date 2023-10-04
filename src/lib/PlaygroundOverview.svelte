<!-- <div style="display: flex; justify-content: center">
  <input 
    class="" 
    name="search" 
    maxlength="100" 
    placeholder="Explore communities" 
    aria-label="Explore popular communities" 
    autocomplete="off" 
    type="text" 
    value=""
    style="
      width: 90%; 
      height: 40px; 
      font-size: 1.8em; 
      border-radius: 8px; 
      padding: 12px;
    "
  >
</div> -->

<div style="display: flex;">
  <!-- Left side to display subjects -->
  <div style="margin-top: 20px; width: fit-content; flex-wrap: wrap;">
    {#each categories as category, i}
      <div 
        style="
          width: 300px;
          font-size: 1.5em; 
          margin-left: 38px; 
          height: fit-content;
          padding-top: 12px;
          padding-bottom: 12px;
          padding-right: 16px;
          padding-left: 16px;
          border-radius: 8px;
          font-weight: 500;
        "
        class:orange-highlight={i === 0}
      >
        {category}
      </div>
    {/each}
    <hr>

    <div 
        style="
          width: 300px;
          font-size: 1.5em; 
          margin-left: 38px; 
          height: fit-content;
          padding-top: 12px;
          padding-bottom: 12px;
          padding-right: 16px;
          padding-left: 16px;
          border-radius: 8px;
          font-weight: 500;
        "
      >
        Other servers
      </div>
  </div>

  <!-- Right side to display server cards -->
  <div style="flex-wrap: wrap; width: 60%">
    <!-- Filter tags -->
    <div style="padding-left: 90px; display: flex; margin-top: 20px; justify-content: space-around; width: fit-content; align-items: center;">
      <div style="font-size: 2em">
        Filters:
      </div>
      <div class="filter-tag" style="background-color: white; color: black;">
        All servers
      </div>
      <div class="filter-tag" style="background-color: white; color: black;">
        Has activity
      </div>
      <div class="filter-tag" style="background-color: white; color: black;">
        Need teachers
      </div>
      <!-- <div class="filter-tag" style="background-color: white; color: black;">
        Need students
      </div> -->
    </div>

    <div style="margin-bottom: 48px;">

    </div>

    {#each serversInCategory as server, i}
      <div 
        class="paper-shadow"
        style="
          border-radius: 32px;
          min-width: 300px;
          width: 100%;
          margin-bottom: 20px;
          padding-top: 30px;
          padding-left: 12px;
          padding-right: 12px;
          padding-bottom: 4px;
          margin-left: 8%;
          height: fit-content;
        "
      >
        <div style="font-size: 2.5em; font-weight: 500; margin-left: 20px;">
          {server.name}
          {#if server.description}
          ({server.description})
          {/if}
        </div>

        <div style="margin-top: 12px;"></div>

        <div style="display: flex; margin-left: 21px; color: rgb(60,60,60); font-size: 1.6em; align-items: center; font-weight: 400; margin-bottom: 4px;">
          1 students
          <span class="material-icons" style="font-size: 4px; margin: 8px;">circle</span>
          {server.numOfUnresolvedQuestions + server.numOfResolvedQuestions} unresolved questions
          <span class="material-icons" style="font-size: 4px; margin: 8px;">circle</span>
          {server.numOfCreators} teachers
          <span class="material-icons" style="font-size: 4px; margin: 8px;">circle</span>
          {server.numOfVideos} videos
        </div>

        
        <div style="margin-top: 16px;"></div>


        <!-- $1 accumulated crowdfund -->
   
        <div style="display: flex; margin-left: 21px; color: rgb(80,80,80); font-size: 1.2em; align-items: center; font-weight: 400; margin-bottom: 4px;">
          <b style="margin-right: 6px;">College version:</b> 
          {server.collegeSpecificType} 
        </div>

        <div style="display: flex; margin-left: 21px; color: rgb(80,80,80); font-size: 1.2em; align-items: center; font-weight: 400; margin-bottom: 4px;">
          <b style="margin-right: 6px;">Crowdfund amount:</b> 
          $2
        </div>

        <div style="display: flex; margin-left: 21px; color: rgb(80,80,80); font-size: 1.2em; align-items: center; font-weight: 400; margin-bottom: 4px;">
          <b style="margin-right: 6px;">Total subscriptions:</b> 
          0
        </div>




        <!-- <div style="display: flex; margin-left: 21px; color: rgb(120,120,120); font-size: 1.4em; align-items: center; font-weight: 400;">
          crowdfund: $2 <span class="material-icons" style="font-size: 4px; margin: 8px;">circle</span> Total subscriptions: 2
        </div> -->

        

        <div style="margin-top: 8px;"></div>

        <!-- <TwosidedMarketplace
          numOfStudents={server.numOfStudents || 0}
          numOfTeachers={server.numOfCreators}
          numOfVideos={server.numOfVideos}
          numOfQuestions={server.numOfUnresolvedQuestions + server.numOfResolvedQuestions}
        /> -->
        <div style="margin-top: 36px;">

        </div>
        <div style="width: 100%; display: flex; justify-content: flex-end; margin-bottom: 24px;">
          <div style="width: fit-content; margin-right: 24px; border: 1px solid; padding: 20px; font-size: 1.6em; color: #5d0068; font-weight: 500; background-color: white;">
            Pre-pay $1
          </div>
          
          <!-- <div style="width: 240px; margin-right: 24px; border: 1px solid; padding: 24px; font-size: 1.8em; color: #5d0068; font-weight: 500; background-color: white;">
            I'm willing to pay
          </div>
          <div style="width: 240px; margin-right: 24px; border: 1px solid; padding: 24px; font-size: 1.8em; color: #5d0068; font-weight: 500; background-color: white;">
            I'm willing to help
          </div> -->

          <div style="width: fit-content; margin-right: 24px; padding: 20px; font-size: 1.6em; color: white; font-weight: 500; background-color: #5d0068;">
            Go to server
          </div>
        </div>
  
      </div>
    {/each}
  </div>
</div>

<script>
  import ReusableButton from "$lib/ReusableButton.svelte";
  import TwosidedMarketplace from "$lib/TwosidedMarketplace.svelte";

  let categories = ['All subjects', 'Economics', 'Life science', 'Math', 'Mechanical Engineering', 'Physics']

  let serversInCategory = [
    { 
      name: 'Anatomy & Physiology II',
      // description: 'Roxbury Community College',
      numOfCreators: 0,
      numOfVideos: 0,
      numOfUnresolvedQuestions: 0,
      numOfResolvedQuestions: 0,
      collegeSpecificType: 'Roxbury Community College'
    },
    { 
      name: '18.06',
      description: 'Linear Algebra',
      numOfStudents: 1,
      numOfCreators: 2,
      numOfVideos: 36,
      numOfUnresolvedQuestions: 0,
      numOfResolvedQuestions: 0,
      collegeSpecificType: 'Massachusetts Institute of Technology'
    },
    {
      name: '2.001',
      description: 'Mechanics of Materials',
      numOfStudents: 2,
      numOfCreators: 1,
      numOfVideos: 3,
      numOfUnresolvedQuestions: 0,
      numOfResolvedQuestions: 2,
      collegeSpecificType: 'Massachusetts Institute of Technology'
    },
    {
      name: 'Accounting',
      description: '',
      numOfStudents: 1,
      numOfCreators: 0,
      numOfVideos: 0,
      numOfUnresolvedQuestions: 1,
      numOfResolvedQuestions: 0,
      collegeSpecificType: 'Non-school specific'
    }
  ]
</script>

<style>
  .filter-tag {
    background-color: red; 
    color: white; 
    padding: 12px; 
    border-radius: 24px;
    margin-left: 12px;
    border: 1px solid black;
    font-weight: 500;
    font-size: 1.8em;
  }

  /* hsl(0,0%,0%, 0.80) */

  .orange-highlight {
    background-color: #e2dddd;
    /* color: white;
    border: 1px solid white; */
  }

  .paper-shadow {
    box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
</style>