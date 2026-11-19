<div role="link" tabindex="0" on:click={() => uid && goto(`/user/${uid}`)} on:keydown class="pill ux-low-elevation">
  <CreatorCircularAvatar seed={uid || displayName} color={avatarColor} />
  <div class="copy">
    <div class="name">{displayName}</div>
    {#if uid}
      <div class="stats">
        <span class="material-symbols-outlined">smart_display</span><span class="n">{numOfVideos}</span>
        <span class="material-symbols-outlined">timer</span><span class="n">{minutesViewed}</span>
      </div>
    {/if}
  </div>
</div>

<script>
  import CreatorCircularAvatar from '$lib/DoodleVideo/CreatorCircularAvatar.svelte'
  import { getFirestoreDoc } from '/src/helpers/crud.js'
  import { goto } from '$app/navigation'

  export let uid = ''
  export let firstNameAndKeyInfo = ''

  let displayName = firstNameAndKeyInfo
  let numOfVideos = 0
  let minutesViewed = 0
  let avatarColor = ''
  let loadedFor = ''

  $: if (firstNameAndKeyInfo && !uid) displayName = firstNameAndKeyInfo
  $: if (uid && uid !== loadedFor) loadCreator(uid)

  async function loadCreator (id) {
    loadedFor = id
    const doc = await getFirestoreDoc(`/users/${id}`)
    if (!doc || loadedFor !== id) return
    displayName = doc.name || firstNameAndKeyInfo || ''
    numOfVideos = Number(doc.numOfVideos) || 0
    minutesViewed = Math.round(Number(doc.minutesViewed) || 0)
    avatarColor = doc.beaverProfilePicColor || ''
  }
</script>

<style>
  .pill { display: flex; cursor: pointer; align-items: center; border-radius: 48px; padding: 4px 10px 4px 4px; }
  .copy { margin-left: 6px; min-width: 0; }
  .name { color: #000; font-weight: 500; font-size: var(--fs-xs); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
  .stats { margin-top: 1px; display: flex; align-items: center; gap: 2px; color: #3c3c3c; }
  .stats :global(.material-symbols-outlined) { font-size: 16px; }
  .n { font-size: 12px; font-weight: 500; margin-right: 8px; }
</style>
