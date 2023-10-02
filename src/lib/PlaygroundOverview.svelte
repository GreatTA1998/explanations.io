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


<div style="display: flex; margin-top: 20px; width: fit-content; padding-left: 60px; flex-wrap: wrap;">
  {#each categories as category, i}
    <div 
      style="
        border: 1px solid grey; 
        margin-left: 10px; 
        border-radius: 4px; 
        height: 50px;
        padding: 16px;
        white-space: nowrap;
        font-size: 2.5em; 
        margin-top: 1%;
      "
      class:orange-highlight={i === 0}
    >
      {category}
    </div>
  {/each}
</div>

<div style="padding-left: 80px; display: flex; margin-top: 20px; justify-content: space-around; width: fit-content; align-items: center;">
  <div style="font-size: 1.3em">
    Filters:
  </div>
  <div class="filter-tag" style="background-color: white; color: black;">
    All servers
  </div>
  <div class="filter-tag" style="background-color: white; color: green;">
    Has teachers & students
  </div>
  <div class="filter-tag" style="background-color: white; color: red;">
    Need teachers
  </div>
  <div class="filter-tag" style="background-color: white; color: red;">
    Need students
  </div>
  <!-- <div class="filter-tag">
    Need subscribers
  </div> -->
</div>

<div style="margin-top: 40px; display: flex; flex-wrap: wrap;">
  {#each serversInCategory as server}
    <div 
      style="
        border: 2px solid grey; 
        border-radius: 8px;
        width: 550px;
        margin-bottom: 20px;
        padding-top: 30px;
        margin-left: 4%;
      "
    >
      <div style="font-size: 2em; margin-left: 20px;">
        {server.name}
        {#if server.description}
         ({server.description})
        {/if}
      </div>
      <div style="display: flex; margin-left: 21px; opacity: 70%; font-size: 1.3em; align-items: center; font-weight: 500;">
        {server.collegeSpecificType} 
        <span class="material-icons" style="font-size: 4px; margin: 8px;">circle</span>
        n unique visitors
      </div>

      <div style="margin-top: 8px;"></div>

      <TwosidedMarketplace
        numOfStudents={server.numOfStudents || 0}
        numOfTeachers={server.numOfCreators}
        numOfVideos={server.numOfVideos}
        numOfQuestions={server.numOfUnresolvedQuestions + server.numOfResolvedQuestions}
      >

      </TwosidedMarketplace>

      <!-- {#if server.numOfUnresolvedQuestions + server.numOfResolvedQuestions === 0} 
        <div style="color: red; display: flex; align-items: center;">
          <span class="material-icons">
            priority_high
          </span>
          Need questions
        </div>
      {:else}
        <div style="color: black; display: flex; align-items: center;">
          <span class="material-icons">
            question_mark
          </span>
          <div style="display: flex;">
            {server.numOfUnresolvedQuestions + server.numOfResolvedQuestions} 
            questions asked,
            <div style="color: {server.numOfUnresolvedQuestions > 0 ? 'red' : ''}; margin-left: 4px;">
              {server.numOfUnresolvedQuestions} unresolved questions
            </div>
          </div>
        </div>
      {/if}
      <div style="color: red; display: flex; align-items: center;">
        <span class="material-icons">
          priority_high
        </span>
        Need explanation creators
      </div> -->

      <div style="margin-top: 14px;">

      </div>
      <div style="width: 180px; margin-bottom: 24px; margin-left: 24px;">
        <ReusableButton color="primary">
          Go to server
        </ReusableButton>
      </div>
 
    </div>
  {/each}
</div>

<script>
  import ReusableButton from "$lib/ReusableButton.svelte";
  import TwosidedMarketplace from "$lib/TwosidedMarketplace.svelte";

  let categories = ['All subjects', 'Math', 'Mechanical Engineering', 'Nursing', 'Chemistry', 'Computer Science', 'Others' ]

  let serversInCategory = [
    { 
      name: 'Anatomy & Physiology',
      // description: 'Roxbury Community College',
      numOfCreators: 0,
      numOfVideos: 0,
      numOfUnresolvedQuestions: 0,
      numOfResolvedQuestions: 0,
      collegeSpecificType: 'Roxbury Community College'
    },
    { 
      name: 'Linear Algebra',
      // description: 'Roxbury Community College',
      numOfCreators: 2,
      numOfVideos: 36,
      numOfUnresolvedQuestions: 0,
      numOfResolvedQuestions: 0,
      collegeSpecificType: 'Roxbury Community College'
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
      collegeSpecificType: 'Non-college specific'
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
    font-weight: 600;
    font-size: 1.8em;
  }

  .orange-highlight {
    background-color: hsl(0,0%,0%, 0.80);
    color: white;
    border: 1px solid white;
  }
</style>