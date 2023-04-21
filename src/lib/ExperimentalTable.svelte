<DataTable
  sortable
  bind:sort
  bind:sortDirection
  on:SMUIDataTable:sorted={handleSort}
  table$aria-label="User list"
  style="width: 100%;"
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
        <Label>Name</Label>
      </Cell>
      <Cell columnId="numOfQuestions">
        <Label>Questions</Label>
        <!-- For non-numeric columns, icon comes second. -->
        <IconButton class="material-icons">arrow_upward</IconButton>
      </Cell>
      <!-- The columnId is used for sorting -->
      <Cell columnId="numOfHelpers">
        <Label>Helpers</Label>
        <IconButton class="material-icons">arrow_upward</IconButton>
      </Cell>
      <Cell columnId="numOfVideos">
        <Label>Videos</Label>
        <IconButton class="material-icons">arrow_upward</IconButton>
      </Cell>
      <Cell columnId="minutesViewed">
        <Label>Minutes viewed</Label>
        <IconButton class="material-icons">arrow_upward</IconButton>
      </Cell>
      <Cell columnId="paidMonthlySubscriptions">
        <Label>$10/month subscriptions</Label>
        <IconButton class="material-icons">arrow_upward</IconButton>
      </Cell>
    </Row>
  </Head>
  <Body>
    {#each items as item (item.id)}
      <Row on:click={() => goto(`${item.id}/request-video`)} >
        <!-- <Cell numeric>{item.id}</Cell> -->
        <Cell numeric>
          <div style="color: purple; text-decoration: underline; cursor: pointer;">
            {item.name}
          </div>
        </Cell>
        <Cell>{item.numOfQuestions}</Cell>
        <Cell>{item.numOfHelpers}</Cell>
        <Cell>{item.numOfVideos}</Cell>
        <Cell>{item.minutesViewed}</Cell>
        <Cell>{item.paidMonthlySubscriptions}</Cell>
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
  import IconButton from '@smui/icon-button';

  import { goto } from '$app/navigation'

  export let initialItems 
 
type MITClass = {
  id: string; 
  name: string;
  numOfQuestions: number; 
  numOfHelpers: number;
  numOfVideos: number; 
  minutesViewed: number;
  paidMonthlySubscriptions: number; 
}

  let items: MITClass[] = initialItems

  console.log("items =", items)

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