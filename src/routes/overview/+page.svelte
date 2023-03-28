<h1>Class Overview</h1>
<div style="font-family: sans-serif; display: flex; justify-content: center">
  <table>
    <thead>
      <tr>
        <th>Class</th>
        <th># of students</th>
        <th># of helpers</th>
        <th>Has videos</th>
      </tr>
    </thead>
    <tbody>
      
      {#each youtubeClasses as youtubeClass}
        <tr>
          <th on:click={() => goto(`${youtubeClass.id}/${youtubeClass.id}`)}>
            {youtubeClass.name}
            <button>class server</button>
          </th>
          <td>
            <button>Sign up as student</button>
              1. Reason why signed up
              2. Reason why signed up
          </td>
          <td>
            <!-- Set prices -->
            <button>Sign up as helper</button>
          </td>
          <td>{!!youtubeClass.hasShopWithVideos}</td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>

<script>
  import { goto } from '$app/navigation';
  import { getFirestore, onSnapshot, collection, query, where } from 'firebase/firestore'
  import { onDestroy } from 'svelte'

  let youtubeClasses = [] 

  fetchYoutubeClasses()

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