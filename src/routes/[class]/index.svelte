<script context="module">
  export function load ({ page }) {
    console.log('load function from [class].svelte')
    console.log('page =', page)
    return {
      props: {
        myProps: page.params
      }
    }
  }  
</script>

<script>  
    import { db, fetchDoc, fetchDocs } from '../../database.js'
    // import LeftDrawer from '../../LeftDrawer.svelte'
    import { portal } from "../../actions.js";
    import { onMount } from 'svelte'
    // import { storeUser } from '../../store.js'

    // storeUser.subscribe(async (newUserValue) => {
    //   // console.log('new user value was set =', newUserValue)
    //   if (newUserValue) {
    //     roomDocs = await fetchDocs(roomsDbPath)
    //     const roomSnapshot = await getDoc(doc(db, roomsDbPath + roomID))
    //     roomDoc = { id: roomSnapshot.id, ...roomSnapshot.data() }
    //     console.log('roomDoc =', roomDoc)
    //     console.log('roomDocs =', roomDocs)
    //   }
    // })

    $: roomID, updateRoomDoc() 

    async function updateRoomDoc () {
      // console.log('roomID changed =', roomID)
      // const roomSnapshot = await getDoc(doc(db, roomsDbPath + roomID))
      // roomDoc = { id: roomSnapshot.id, ...roomSnapshot.data() }
    }
  
  </script>