<script>
  import { deleteQuestion } from '/src/helpers/unifiedDeleteAPI.js'
  import { user, adminUIDs } from '/src/store.js'
  import { goto } from '$app/navigation'
  import { page } from '$app/stores'
  import { DateTime } from 'luxon'
  import List, { Item, Text } from '@smui/list'
  import Menu from '@smui/menu'

  export let question
  export let classID

  let DropdownMenu

  function getDaysAgo (serverTimestamp) {
    return DateTime.fromMillis(
      serverTimestamp.toMillis()
    ).toRelative()
  }
</script>

<div 
  on:click={() => goto(`/${classID}/question/${question.id}`)} 
  on:keydown
  class:selected={question.id === $page.params.questionID} 
  class="q-list-item"
> 
  <div style="display: flex;">
    <div 
      class="q-title my-truncated-text"
      class:red-urgent-text={!question.isAnswered}
    > 
      {question.title}
    </div>

    {#if $page.params.questionID && $user.uid}
      {#if question.askerUID === $user.uid || $adminUIDs.includes($user.uid)}
        <span on:click={DropdownMenu.setOpen(true)} on:keydown class="material-icons" style="margin-right: 0px; margin-left: auto; color: white; font-size: 1.5rem;">
          more_vert
        </span>

        <Menu bind:this={DropdownMenu} style="width: 300px">
          <List>      
            <Item on:SMUI:action={() => {
              if (question.blackboardIDs.length > 0) {
                alert('Cannot delete this question until all its blackboards are moved/deleted first')
                return
              }
              if (confirm('Are you sure you want to delete this question?')) {
                deleteQuestion({ questionDoc: question, classID })
              }
            }}>
              Delete question
            </Item>
          </List> 
        </Menu>
      {/if}
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
</div>

<div style="width: 100%; border-bottom: 1px solid lightgrey;"></div>

<style>
  .q-list-item {
    padding: 8px; 
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    gap: 4px;

    cursor: pointer;
  }

  .q-list-item:hover {
    background: lightgrey;
  }

  .q-title {
    font-size: 1rem;
  }

  .q-description {
    font-size: 0.875rem;
    color: rgb(120, 120, 120);
    line-height: 1.2;
  }

  /* Copied from Firebase's section header */
  .q-asker {
    font-size: 12px;
    line-height: 16px;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.6);
  }

  .selected {
    background-color: #F7C686;
    transition: background 20ms ease-in 0s;
  }

  .red-urgent-text {
    color: red;
  }
</style>