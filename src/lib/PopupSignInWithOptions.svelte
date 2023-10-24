<BasePopup on:popup-close>
  <!-- <h2 slot="title" style="font-family: sans-serif;">
    Sign in
  </h2> -->
  <div slot="popup-content" style="font-family: sans-serif; padding: 12px; display: flex; justify-content: center;">
    <div style="width: 200px; margin-top: 20px;">
      <div style="display: flex; align-items: center;">
        <hr style="
          display: block;
          flex: 1 1 0px;
          max-width: 100%;
          height: 0;
          max-height: 0;
          border: solid;
          border-width: thin 0 0 0;
          transition: inherit;
          border-color: rgba(0,0,0,.50);
        ">
        <div style="margin-left: 8px; margin-right: 8px; font-weight: 500; color: black; font-size: 20px;">
          Sign in with
        </div>
        <hr style="
          display: block;
          flex: 1 1 0px;
          max-width: 100%;
          height: 0;
          max-height: 0;
          border: solid;
          border-width: thin 0 0 0;
          transition: inherit;
          border-color: rgba(0,0,0,.50);
        ">
      </div>
  
      <div style="margin-top: 20px;">
      </div>
      
      <LoginGoogle/>

      <div style="margin-top: 8px;"></div>

      <div 
        on:click={() => isShowingPhoneLogin = true}
        style="
        color: orange; 
        border: 1px solid orange; 
        margin-bottom: 2px;
        width: 200px;
        padding-top: 6px;
        padding-bottom: 6px;
        border-radius: 8px;
        align-text: center;
        display: flex;
        justify-content: center;
        align-items: center;
      ">
        <span class="material-icons" style="margin-right: 6px;">
          phone
        </span>
        Phone number
      </div>    

      
      <div style="margin-top: 8px;"></div>

      <LoginTouchstone/>

      
      <div style="margin-top: 8px;"></div>
  
  
      {#if isShowingPhoneLogin}
        <LoginPhone
          canTakeInternationalNumbers
        />
      {/if}
    </div>
  </div>
</BasePopup>

<script>
  import BasePopup from '$lib/BasePopup.svelte'
  import { createEventDispatcher, onMount } from 'svelte'
  import { user } from '../store.js'
  import { getFirestoreDoc, updateFirestoreDoc } from '../helpers/crud.js'
  import Button from '@smui/button'
  import { collection, query, where, getDocs } from "firebase/firestore";
  import LoginTouchstone from '$lib/LoginTouchstone.svelte'
  import LoginPhone from '$lib/LoginPhone.svelte'
  import LoginGoogle from '$lib/LoginGoogle.svelte'


  let isShowingPhoneLogin = false
  let allBoardDocs = []
  const dispatch = createEventDispatcher()

  $: if ($user.uid) {
    dispatch('popup-close')
  }
  
  function dragover_handler (e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move'
  }
</script>