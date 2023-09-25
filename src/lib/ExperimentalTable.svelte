<DataTable
  sortable
  bind:sort
  bind:sortDirection
  on:SMUIDataTable:sorted={handleSort}
  table$aria-label="User list"
  style="width: 100%; font-size: 2em;"
>
  <Head>
    <Row>
      <!--
        Note: whatever you supply to "columnId" is
        appended with "-status-label" and used as an ID
        for the hidden label that describes the sort
        status to screen readers.
 
        You can localize those labels with the
        "sortAscendingAriaLabel" and
        "sortDescendingAriaLabel" props on the DataTable.
      -->
      <Cell numeric columnId="name">
        <!-- For numeric columns, icon comes first. -->
        <IconButton class="material-icons">arrow_upward</IconButton>
        <Label style="font-size: 2em;">Name</Label>
      </Cell>

      <Cell columnId="numOfQuestions">
        <Label style="font-size: 2em;">Unresolved questions</Label>
        <!-- For non-numeric columns, icon comes second. -->
        <IconButton class="material-icons">arrow_upward</IconButton>
      </Cell>

      <!-- The columnId is used for sorting -->
      <Cell columnId="numOfCreators">
        <Label style="font-size: 2em;">Creators</Label>
        <IconButton class="material-icons">arrow_upward</IconButton>
      </Cell>

      <Cell columnId="numOfVideos">
        <Label style="font-size: 2em;">Videos</Label>
        <IconButton class="material-icons">arrow_upward</IconButton>
      </Cell>
      <Cell columnId="minutesViewed">
        <Label style="font-size: 2em;">Minutes viewed</Label>
        <IconButton class="material-icons">arrow_upward</IconButton>
      </Cell>

      <Cell columnId="numOfMembers">
        <Label style="font-size: 2em;">Server members</Label>
        <!-- For non-numeric columns, icon comes second. -->
        <IconButton class="material-icons">arrow_upward</IconButton>
      </Cell>

      <Cell columnId="paidMonthlySubscriptions">
        <Label style="font-size: 2em;">Paid subscriptions</Label>
        <IconButton class="material-icons">arrow_upward</IconButton>
      </Cell>
    </Row>
  </Head>
  <Body>
    {#each items as item (item.id)}
      <Row on:click={() => handleClassServerClick(item)} >
        <!-- <Cell numeric>{item.id}</Cell> -->
        <Cell numeric>
          <div style="color: purple; text-decoration: underline; cursor: pointer;">
            {item.name}
          </div>
        </Cell>
        <!-- TO-DO: change to number of UNRESOLVED question -->
        <Cell style="font-size: 1.5em; color: {item.numOfUnresolvedQuestions > 0 ? 'red' : ''}">{item.numOfUnresolvedQuestions}</Cell>
        <Cell style="font-size: 1.5em; color: {item.numOfCreators === 0 ? 'red' : ''}">{item.numOfCreators}</Cell>
        <Cell style="font-size: 1.5em;">{item.numOfVideos}</Cell>
        <Cell style="font-size: 1.5em;">{item.minutesViewed}</Cell>
        <Cell style="font-size: 1.5em;">{item.numOfMembers}</Cell>
        <Cell style="font-size: 1.5em;">{item.paidMonthlySubscriptions}</Cell>
      </Row>
    {/each}
  </Body>
</DataTable>
 
<script lang="ts">
  import DataTable, {
    Head,
    Body,
    Row,
    Cell,
    Label,
    SortValue,
  } from '@smui/data-table';
  import IconButton from '@smui/icon-button'
  import { goto } from '$app/navigation'
  import { user, idOfServerNewUserWantedToEnter } from '/src/store.js'
  import { createEventDispatcher } from 'svelte'

  export let initialItems 

  const dispatch = createEventDispatcher()

  function handleClassServerClick (item) {
    if (!$user.uid) {
      idOfServerNewUserWantedToEnter.set(item.id)
      dispatch('login-required')
    } else { 
      goto(`${item.id}/request-video`)
    }
  }
 
  type MITClass = {
    id: string; 
    name: string;
    numOfMembers: string;
    numOfQuestions: number; 
    numOfUnresolvedQuestions: number;
    numOfCreators: number;
    numOfVideos: number; 
    minutesViewed: number;
    paidMonthlySubscriptions: number; 
  }

  let items: MITClass[] = initialItems

  let sort: keyof MITClass = 'id';
  let sortDirection: Lowercase<keyof typeof SortValue> = 'ascending';
 
  function handleSort() {
    items.sort((a, b) => {
      const [aVal, bVal] = [a[sort], b[sort]][
        sortDirection === 'ascending' ? 'slice' : 'reverse'
      ]();
      if (typeof aVal === 'string' && typeof bVal === 'string') {
        if (isFinite(aVal) && isFinite(bVal)) { // i.e. it's course numbers like 14.01
          return Number(aVal) - Number(bVal);
        }
        return aVal.localeCompare(bVal);
      }
      return Number(aVal) - Number(bVal);
    });
    items = items;
  }
</script>

<style>
  div {
    font-size: 2em;
  }
</style>