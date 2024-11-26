<div class="grid-layout robust-ios-space-filling">
  <div class="top-navbar">
    <TopNavbar />
  </div>

  <div class="left-drawer">
    {#key classID}
      <TheLeftDrawer 
        {classID}
        {roomID}
      />
    {/key}
  </div>

  <div class="main-content">
    <slot>

    </slot>
  </div>
</div>

<script> 
  import TheLeftDrawer from '$lib/TheLeftDrawer.svelte'
  import TopNavbar from '$lib/TopNavbar.svelte'
  import { user, drawerWidth, classServerDoc, recentSearchedServerDoc } from '/src/store.js'
  import { getFirestoreDoc,updateFirestoreDoc } from '/src/helpers/crud.js'
  import { doc, onSnapshot, getFirestore } from 'firebase/firestore'
  import '$lib/_Elevation.scss'

  export let data

  let { classID, roomID } = data
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
  /* COMMENTED OUT NOV 26, SAFELY REMOVE DEC 1 IF NO UNEXPECTED PROBLEMS ARISE */
  /* * :global(.app-content) {
    flex: auto;
    overflow: auto;
    position: relative;
    flex-grow: 1;
  } */

  .grid-layout {
    display: grid;
    grid-template-rows: 56px 1fr;
    grid-template-columns: 300px 1fr;
    grid-template-areas: 'navbar navbar'
                         'sidebar main';
    background-color: var(--bg-off-white);
  }

  .robust-ios-space-filling {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .top-navbar {
    grid-area: navbar;
  }

  .left-drawer {
    grid-area: sidebar;
  }

  .main-content {
    grid-area: main;
    overflow-y: auto;
  }
</style>

