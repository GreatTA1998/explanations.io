<script>
  import { deleteQuestion } from '/src/helpers/unifiedDeleteAPI.js'
  import { viewport } from '/src/storeFolder/viewport.js'
  import { user, adminUIDs, drawerWidth } from '/src/store.js'
  import { goto } from '$app/navigation'
  import { page } from '$app/stores'
  import { DateTime } from 'luxon'
  import List, { Item, Text } from '@smui/list'
  import Menu from '@smui/menu'

  export let question
  export let classID

  let DropdownMenu

  function handleQuestionClick() {
    goto(`/${classID}/question/${question.id}`)

    if ($viewport.isMobile) drawerWidth.set(0)
  }

  function handleDeleteAttempt () {
    if (question.blackboardIDs.length > 0) {
      alert('Cannot delete this question until all its blackboards are moved/deleted first')
      return
    }
    if (confirm('Are you sure you want to delete this question?')) {
      deleteQuestion({ questionDoc: question, classID })
    }
  }

  function getDaysAgo (serverTimestamp) {
    return DateTime.fromMillis(
      serverTimestamp.toMillis()
    ).toRelative()
  }
</script>

<button on:click={handleQuestionClick} 
  class:selected={question.id === $page.params.questionID} 
  class="q-list-item"
> 
  <div style="display: flex; width: 100%;">
    <div class="q-title my-truncated-text" class:red-urgent-text={!question.isAnswered}> 
      {question.title}
    </div>
  
    {#if question.askerUID === $user.uid || $adminUIDs.includes($user.uid)}
      <span on:click={DropdownMenu.setOpen(true)} on:keydown class="material-icons" style="margin-right: 0px; margin-left: auto; color: white; font-size: 1.5rem;">
        more_vert
      </span>
  
      <Menu bind:this={DropdownMenu} style="width: 300px">
        <List>      
          <Item on:SMUI:action={handleDeleteAttempt}>
            Delete question
          </Item>
        </List> 
      </Menu>
    {/if}
  </div>

  <!-- <div class="q-description">
    {question.description}
  </div> -->

  <!-- `serverTimestamp` sometimes needs a few seconds to hydrate after the doc is created -->
  {#if question.timestamp}
    <div class="q-asker">
      {question.askerName} asked {getDaysAgo(question.timestamp)}
    </div>
  {/if}
</button>

<div style="width: 100%; border-bottom: 1px solid lightgrey;"></div>

<style>
  .q-list-item {
    width: 100%;
    padding: 8px 8px; 

    padding-right: 4px; /* because the truncation "..." on the right doesn't need as much padding as real letters on the left */

    border-radius: 5px;
    display: flex;
    flex-direction: column;
    row-gap: 4px;
    
    text-align: left; 
  }

  .q-list-item:hover {
    background: lightgrey;
  }

  .q-title {
    font-size: var(--fs-400);
    font-weight: 400;
    color: black;

    /* define an explicit width to enable text truncation */
    /* width: 100%;  */
    flex-grow: 1;
  }

  .q-description {
    font-size: var(--fs-300);
    color: rgb(120, 120, 120);
    line-height: 1.2;
  }

  /* Copied from Firebase's section header */
  .q-asker {
    font-size: var(--fs-300);
    line-height: 16px;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.6);
  }

  .selected {
    background-color: #F7C686;
    transition: background 20ms ease-in 0s;
    color: black;
  }

  .red-urgent-text {
    color: red;
  }
</style>