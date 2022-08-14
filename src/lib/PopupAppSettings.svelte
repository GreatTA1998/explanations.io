<div id="app-popup">
  <div style="display: flex; align-items: center; margin-left: 10px; margin-right: 10px">
    <h2>App Settings</h2>

    <span on:click={() => dispatch('popup-close')} class="material-icons" style="margin-right: 0; margin-left: auto;">
      close
    </span>
  </div>

  <div style="margin-left: 10px;">
    TODO: notifications and name
  </div>

  <!-- <div on:click={changeName}>
    Change name
  </div> -->
  <!-- <input bind:value={newlyTypedDisplayName}> -->
  <div style="display: flex; margin-left: 4px; margin-bottom: 0px; margin-top: auto">
    <button on:click={logOut} style="margin-right: 16px; margin-left: auto">
      Logout
    </button>
  </div> 
</div>
 
<script>
  import Button, { Label } from '@smui/button'
  import { createEventDispatcher } from 'svelte'
  import { signOut, getAuth } from 'firebase/auth'
  import { getFirestore, doc, deleteDoc, getDoc, setDoc, updateDoc, increment } from 'firebase/firestore'
  import { goto } from '$app/navigation'
  import { user } from '../store.js'

	const dispatch = createEventDispatcher()

  let newlyTypedDisplayName = ''
  function changeName () {
    if (!newlyTypedDisplayName) {
      alert('Name cannot be blank')
      return
    }
    const userRef = doc(
      getFirestore(), 
      `users/${$user.uid}`
    )
    updateDoc(userRef, {
      name: newlyTypedDisplayName
    })
  }

  function logOut () {
    if ($user.uid) {
      const auth = getAuth()
      signOut(auth)
    }
    goto('/')
  }
</script>

<style>
  #app-popup {
    position: absolute; 
    z-index: 10;
    background-color: white; 
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 8px; 
    width: 500px; 
    height: 300px;


    /* center it within the page */
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
  }
</style>