<script>
  import { deleteQuestion } from '/src/helpers/unifiedDeleteAPI.js'
  import { user, adminUIDs } from '/src/store.js'
  import { goto } from '$app/navigation'
  import { page } from '$app/stores'
  import { DateTime } from 'luxon'
  import { getRandomID } from '/src/helpers/utility.js'

  export let question
  export let classID

  const menuId = `q-menu-${getRandomID()}`
  const menuAnchor = `--q-anchor-${getRandomID()}`

  function handleQuestionClick() {
    goto(`/${classID}/question/${question.id}`)
  }

  function handleDeleteAttempt () {
    document.getElementById(menuId)?.hidePopover()
    if (question.blackboardIDs.length > 0) {
      alert('Cannot delete this question until all its blackboards are moved/deleted first')
      return
    }
    if (confirm('Are you sure you want to delete this question?')) {
      deleteQuestion({ questionDoc: question, classID })
    }
  }

  function getDaysAgo (serverTimestamp) {
    return DateTime.fromMillis(serverTimestamp.toMillis()).toRelative()
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
      <button
        type="button"
        class="material-icons more"
        style:anchor-name={menuAnchor}
        popovertarget={menuId}
        on:click|stopPropagation={() => {}}
      >more_vert</button>
      <div
        popover="auto"
        id={menuId}
        class="q-menu"
        style:position-anchor={menuAnchor}
        style:position-area="block-end span-inline-end"
        style:position-try-fallbacks="flip-block, flip-inline, flip-inline flip-block"
      >
        <button type="button" class="q-menu-row" on:click|stopPropagation={handleDeleteAttempt}>Delete question</button>
      </div>
    {/if}
  </div>

  {#if question.timestamp}
    <div class="q-asker">
      {question.askerName} asked {getDaysAgo(question.timestamp)}
    </div>
  {/if}
</button>

<div style="width: 100%; border-bottom: 1px solid lightgrey;"></div>

<style>
  .q-list-item {
    width: 100%; padding: 8px 8px; padding-right: 4px; border-radius: 5px;
    display: flex; flex-direction: column; row-gap: 4px; text-align: left;
  }
  .q-list-item:hover { background: lightgrey; }
  .q-title { font-size: var(--fs-400); font-weight: 400; color: black; flex-grow: 1; }
  .q-asker { font-size: var(--fs-300); line-height: 16px; font-weight: 400; color: rgba(0, 0, 0, 0.6); }
  .selected { background-color: #F7C686; transition: background 20ms ease-in 0s; color: black; }
  .red-urgent-text { color: red; }
  .more { margin-right: 0; margin-left: auto; color: white; font-size: 1.5rem; padding: 0; }
  .q-menu {
    margin: 0; inset: auto; margin-block-start: 4px; width: 300px; padding: 6px; border: none; border-radius: 12px;
    background: white; box-shadow: 0 4px 8px rgba(0,0,0,.2), 0 6px 20px rgba(0,0,0,.19);
  }
  .q-menu:not(:popover-open) { display: none; }
  .q-menu-row {
    display: block; width: 100%; min-height: 40px; padding: 10px 12px; border-radius: 8px;
    text-align: left; color: black; font-size: 14px;
  }
  .q-menu-row:hover { background: rgba(0, 0, 0, 0.06); }
</style>
