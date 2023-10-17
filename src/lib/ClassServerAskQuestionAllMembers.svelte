{#if sortedVideoCreatorDocs}
  <div style="display: flex; align-items: center; margin-top: 2%">
    <b style="font-size: 1.2rem; font-family: sans-serif;">
      This community has {sortedVideoCreatorDocs.length} members:
    </b>
  </div>

  <div style="display: flex; font-family: sans-serif; margin-top: 1%; flex-wrap: wrap;">
    {#each sortedVideoCreatorDocs as videoCreator}
      {#if videoCreator.isTeacher}
      <PresentationalBeaverPreview 
        helperDoc={videoCreator}
        {classID}
        style="margin-bottom: 8px; margin-right: 20px; width: 280px;"
      >
      </PresentationalBeaverPreview>
      {:else}
        <div style="display: flex; align-items: center;">
          <span class="material-icons" style="font-size: 28px; color: #9A9A9A; margin-top: 0px;">
            person
          </span>

          <div style="margin-right: 4px;"></div>

          <div style="color: #7A7A7A;">
            {videoCreator.name}
          </div>

          <div style="margin-right: 24px;"></div>
        </div>
      {/if}
    {/each}
  </div>
{/if}

<script>
  import { onDestroy, onMount, tick } from 'svelte'
  import PresentationalBeaverPreview from '$lib/PresentationalBeaverPreview.svelte';
  import { onSnapshot, collection, query, orderBy, limit, getDoc, getDocs, getFirestore, updateDoc, arrayUnion, arrayRemove, increment, doc, setDoc, where } from 'firebase/firestore'

export let classID

  let unsubCreatorDocsListener = null
  let classVideoCreators = null
  let sortedVideoCreatorDocs = null

  onMount(async () => {
    await listenToCreatorDocs()

    if (classVideoCreators.length > 0) {
      const copy = [...classVideoCreators]
      sortedVideoCreatorDocs = copy.sort((t1, t2) => (t2.numOfVideos || 0) - (t1.numOfVideos || 0))
    }
  })
  
  onDestroy(() => {
    if (unsubCreatorDocsListener) unsubCreatorDocsListener()
  })

  function listenToCreatorDocs () {
    return new Promise(resolve => {
      const db = getFirestore()
      const ref = collection(db, `classes/${classID}/members`)
      unsubCreatorDocsListener = onSnapshot(ref, snap => {
        const temp = [] 
        for (const doc of snap.docs) {
          temp.push({ id: doc.id, path: doc.ref.path, ...doc.data() })
        }
        classVideoCreators = [...temp]

        resolve() // only the initial resolve timing matters
      })
    })
  }
</script>