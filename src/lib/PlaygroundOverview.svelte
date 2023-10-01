<div style="display: flex; justify-content: center">
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
</div>

<div style="display: flex; justify-content: space-around; margin-top: 20px; width: 50%; padding-left: 80px;">
  {#each categories as category}
    <div style="border: 1px solid grey; border-radius: 4px; height: 40px; font-size: 1.4em; padding: 8px; padding-top: 16px;">
      {category}
    </div>
  {/each}
</div>

<div style="margin-left: 88px; margin-top: 20px;">
  {#each serversInCategory as server}
    <div 
      style="
        border: 2px solid grey; 
        border-radius: 8px;
        width: 600px;
        padding: 30px; 
        margin-bottom: 20px;
      "
    >
      <div style="font-size: 2em;">
        {server.name}
      </div>
      <!-- 
        <div>
          {server.description}
        </div> 
      -->

      <div style="display: flex">
        {server.collegeSpecificType} | n members
      </div>

      <div style="margin-top: 8px;"></div>

      {#if server.numOfUnresolvedQuestions + server.numOfResolvedQuestions === 0} 
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
            <!-- {#if server.numOfUnresolvedQuestions > 0} -->
              <div style="color: {server.numOfUnresolvedQuestions > 0 ? 'red' : ''}; margin-left: 4px;">
                {server.numOfUnresolvedQuestions} unresolved questions
              </div>
            <!-- {/if}  -->
          </div>
        </div>
      {/if}
      <div style="color: red; display: flex; align-items: center;">
        <span class="material-icons">
          priority_high
        </span>
        Need explanation creators
      </div>

      <div style="margin-top: 14px;">

      </div>

      <ReusableButton color="info">
        Join server
      </ReusableButton>
    </div>
  {/each}
</div>

<script>
  import ReusableButton from "$lib/ReusableButton.svelte";

  let categories = ['All subjects', 'Math', 'Mechanical Engineering', 'Nursing', 'Chemistry', 'Computer Science', ]

  let serversInCategory = [
    { 
      name: 'Anatomy & Physiology',
      // description: 'Roxbury Community College',
      numOfCreators: 0,
      numOfVideos: 0,
      numOfUnresolvedQuestions: 0,
      numOfResolvedQuestions: 0,
      collegeSpecificType: 'All colleges'
    },
    {
      name: '2.001: Mechanics of Materials',
      // description: 'MIT Mechanics of Materials',
      numOfCreators: 1,
      numOfVideos: 3,
      numOfUnresolvedQuestions: 0,
      numOfResolvedQuestions: 2,
      collegeSpecificType: 'Massachusetts Institute of Technology'
    },
    {
      name: 'Accounting',
      description: '',
      numOfCreators: 0,
      numOfVideos: 0,
      numOfUnresolvedQuestions: 1,
      numOfResolvedQuestions: 0,
      collegeSpecificType: 'Massachusetts Institute of Technology'
    }
  ]
</script>
