
<NewGridLayout>
  <div slot="top-navbar">
    <TopNavbar></TopNavbar>
  </div>

  <!-- This is dumb, this <div> shouldn't be here -->
  <div slot="left-drawer" style="height: 100%;">
    {#key classID}
      <TheLeftDrawer 
        {classID}
        {roomID}
      />
    {/key}
  </div>
  
  <slot slot="main-content">

  </slot>
</NewGridLayout>

<script>
  import TheLeftDrawer from '$lib/TheLeftDrawer.svelte'
  import TopNavbar from '$lib/TopNavbar.svelte'
  import NewGridLayout from '$lib/NewGridLayout.svelte'
  import { user, drawerWidth, classServerDoc, recentSearchedServerDoc } from '/src/store.js'
  import { updateFirestoreDoc } from '/src/helpers/crud.js'
  import { onMount } from 'svelte'
  import { doc, onSnapshot, getFirestore } from 'firebase/firestore'
  import '$lib/_Elevation.scss'
  import { getFirestoreDoc } from '/src/helpers/crud.js';

  export let data;
  let { classID, roomID } = data;

  let unsubClassDocListener = null
  $: ({ classID, roomID } = data); // this line triggers whenever `data` changes  

  $: {
    listenToClassDoc(classID)
    handleClassDocChange(classID)
    fetchRecentlySearchedClassDoc()
  }

  async function handleClassDocChange () {
    if ($user.uid) {
      updateFirestoreDoc(`/users/${$user.uid}`, {
        mostRecentServerID: classID 
      })
    }  
  }

  async function fetchRecentlySearchedClassDoc () {
    if (!$user.recentSearchedServerID) return

    const recentServerDoc = await getFirestoreDoc(`/classes/${$user.recentSearchedServerID}`)
    recentSearchedServerDoc.set(recentServerDoc)
  }


  function listenToClassDoc (classID) {
    if (unsubClassDocListener) unsubClassDocListener()
    const db = getFirestore()
    unsubClassDocListener =onSnapshot(doc(db, `/classes/${classID}`), snapshot => {
      classServerDoc.set(snapshot.data())
    })
  }
</script>

<style> 
  * :global(.app-content) {
    flex: auto;
    overflow: auto;
    position: relative;
    flex-grow: 1;
  }
</style>

