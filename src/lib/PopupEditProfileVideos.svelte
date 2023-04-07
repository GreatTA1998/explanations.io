<BasePopup on:popup-close style="width: 80vw">
  <h2 slot="title" style="font-family: sans-serif;">
    Edit profile videos
  </h2>
  <div slot="popup-content" style="font-family: sans-serif; padding: 12px;">
    <!-- Can also re-arrange the menu here -->
    <!-- Fetch all the videos from the class server -->
    {#await fetchAllVideosInClassServer() then videos}
      {#if videos.length === 0}
        <div style="font-size: 1.5rem; font-weight: bold; text-align: center;">
          No videos yet
        </div>
      {/if}

      {#each videos as video}
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
          <div style="display: flex; align-items: center;">
            <input type="checkbox" bind:checked={video.shopGalleryOrder} value={video.id} style="color: purple;" />
            <!-- <img src={video.thumbnailURL} style="width: 100px; height: 100px; object-fit: cover; border-radius: 4px; margin-right: 12px;" /> -->
            <div>
              {#if video.title}
                <div style="font-size: 1.5rem; font-weight: bold; min-width: 350px; width: 70vw;" class="my-truncated-text">
                  {video.title}
                </div>
              {:else}
                <div style="font-size: 1.2rem; color: #666; min-width: 350px; width: 70vw;" class="my-truncated-text">
                  {video.description || ''}
                </div>
              {/if}
            </div>
          </div>
          <div>
            <!-- <Button on:click={() => handleDeleteVideo(video)} color="secondary" style="color: white;">
              Delete
            </Button> -->
          </div>
        </div>
      {/each}
    {/await}
  </div>

  <div slot="popup-buttons" style="direction: rtl; margin-bottom: 12px; margin-right: 4px;">
    <!-- <Button 
      disabled={!checked || !$user.phoneNumber}
      on:click={() => dispatch('confirm-clicked')}
      color="secondary"
    >
      Confirm subscription
    </Button>
    <Button on:click={() => dispatch('popup-close')}>
      Cancel
    </Button> -->
  </div>
</BasePopup>

<script>
  import BasePopup from '$lib/BasePopup.svelte'
  import { createEventDispatcher, onMount } from 'svelte'
  import { user } from '../store.js'
  import { getFirestoreQuery } from '../helpers/crud.js'
  import { getFirestore, collection, query, where } from 'firebase/firestore'
  import Button from '@smui/button'
  import PhoneLogin from '$lib/PhoneLogin.svelte'
  import Checkbox from '@smui/checkbox'

  export let classID

  const dispatch = createEventDispatcher()

  async function fetchAllVideosInClassServer () {
    return new Promise(async resolve => {
      const collectionRef = collection(getFirestore(), `classes/${classID}/blackboards`)
      const q = query(collectionRef, where('creatorUID', '==', $user.uid))
      const allVideos = await getFirestoreQuery(q)
      resolve(allVideos)
    })
  }
</script>