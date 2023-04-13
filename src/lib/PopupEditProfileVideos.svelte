<BasePopup on:popup-close style="width: 80vw">
  <h2 slot="title" style="font-family: sans-serif;">
    Edit profile videos
  </h2>
  <div slot="popup-content" style="font-family: sans-serif; padding: 12px;">
    <!-- Can also re-arrange the menu here -->
    <!-- Fetch all the videos from the class server -->
    {#if videos}
      {#if videos.length === 0}
        <div style="font-size: 1.5rem; font-weight: bold; text-align: center;">
          No videos yet
        </div>
      {/if}

      {#key incrementKeyWheneverAnythingChanges}
        {#each videos as video}
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
            <div style="display: flex; align-items: center;">
              <!--      bind:checked={video.shopGalleryOrder} 
                value={!!video.id}  -->
              <input 
                type="checkbox" 
                on:change={() => handleChange(!!video.shopGalleryOrder, video)}
                checked={!!video.shopGalleryOrder}
                value={!!video.shopGalleryOrder}
                style="color: purple;" 
              />
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
      {/key}
    {/if}
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
  import { getFirestoreQuery, updateFirestoreDoc } from '../helpers/crud.js'
  import { getFirestore, collection, query, where, increment, deleteField } from 'firebase/firestore'
  import Button from '@smui/button'
  import PhoneLogin from '$lib/PhoneLogin.svelte'
  import Checkbox from '@smui/checkbox'

  export let classID
  export let helperDoc

  let incrementKeyWheneverAnythingChanges = 0
  let videos
  const dispatch = createEventDispatcher()

  onMount(async () => {
    const temp = await fetchAllVideosInClassServer()
    videos = temp
  })

  async function handleChange (wasInitiallyChecked, video) {
    if (wasInitiallyChecked) { // this means we're removing the video from profile
      updateFirestoreDoc(video.path, {
        shopGalleryOrder: deleteField()
      })
    }
    else { // this means we're adding the video to profile
      const initialNumericalDifference = 3
      const newVal = (helperDoc.maxShopGalleryOrder || 3) + initialNumericalDifference
      updateFirestoreDoc(video.path, {
        shopGalleryOrder: newVal
      })
      updateFirestoreDoc(helperDoc.path, {
        maxShopGalleryOrder: newVal
      })
    }
  }

  async function fetchAllVideosInClassServer () {
    return new Promise(async resolve => {
      const collectionRef = collection(getFirestore(), `classes/${classID}/blackboards`)
      const q = query(collectionRef, where('creatorUID', '==', $user.uid))
      const allVideos = await getFirestoreQuery(q)
      resolve(allVideos)
    })
  }
</script>