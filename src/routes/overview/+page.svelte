<div style="margin-top: 2%; margin-left: 2%; ">
  <h1 style="font-family: sans-serif;">
    All servers
  </h1>

  <button>Create new class server</button>

  <div style="font-family: sans-serif; display: flex; justify-content: center">
    <table style="margin-top: 4%">
      <thead>
        <tr>
          <th>Class server</th>
          <th># of questions</th>
          <th># of helpers</th>
          <th>Has videos</th>
          <th># of subscriptions</th>
        </tr>
      </thead>
      <tbody>
        
        {#each youtubeClasses as youtubeClass}
          <tr>
            <th style="cursor: pointer;" on:click={() => goto(`${youtubeClass.id}/${youtubeClass.id}`)}>
              <a style="color: purple; text-decoration: underline;">{youtubeClass.name}</a>
            </th>
            <td>
              2
            </td>
            <td>
              2
            </td>
            <td>{!!youtubeClass.hasShopWithVideos}</td>
            <td>0</td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
</div>

<script>
  import { goto } from '$app/navigation';
  import { getFirestore, onSnapshot, collection, query, where } from 'firebase/firestore'
  import { onDestroy } from 'svelte'

  let youtubeClasses = [] 
  let sortedYoutubeClasses = [] 

  fetchYoutubeClasses()
  computeSortedYoutubeClasses()

  // snapshot listener of all the classes
  function fetchYoutubeClasses () {
    const ref = collection(getFirestore(), 'classes')
    const q = query(ref, where('isYoutubeClass', '==', true))
    onSnapshot(q, (snap) => {
      const temp = [] 
      snap.docs.forEach(doc => {
        temp.push({
          id: doc.id, 
          path: doc.ref.path,
          ...doc.data()
        })
      })
      youtubeClasses = temp
    })
  }

  function computeSortedYoutubeClasses () {
    // sort by demand i.e. number of questions
    // then sort by # of subscriptions
    // manually input the values
  }
</script>

<style>
table {
  width: 800px;
  margin-top: 100px;
  font-size: 18px;
  border-collapse: collapse;
}

td,
th {
  padding: 16px 24px;
  text-align: left;
}

thead tr {
  background-color: #087f5b;
  color: #fff;
}

thead th {
  width: 25%;
}

tbody tr:nth-child(odd) {
  background-color: #f8f9fa;
}

tbody tr:nth-child(even) {
  background-color: #e9ecef;
}
</style>