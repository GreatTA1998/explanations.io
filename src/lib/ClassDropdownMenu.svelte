
<div bind:this={anchor}>
  <div on:click={openMenu} style="display: flex; align-items: center;">
    <div>
      <h1 class="my-truncated-text" style="width: 150px; font-family: Roboto, sans-serif; font-weight: 400; margin-left: 6px; margin-top: 5px; margin-bottom: 0px; font-size: 2.0rem">
        {nameOfClass} 
      </h1>
      <div class="my-truncated-text" style="width: 150px; font-family: Roboto, sans-serif; font-size: 0.875rem; color: rgba(0,0,0,.6); margin-left: {6+2}px; margin-bottom: 12px">
        {descriptionOfClass}
      </div>
    </div>
    
    <Icon class="material-icons">arrow_drop_down</Icon>
  </div>

  <!-- left: 50px; top: 50px; width: 200px -->
  <!-- anchor is different -->
  <Menu bind:this={menu} 
    anchor={false}
    bind:anchorElement={anchor}
    anchorCorner="BOTTOM_LEFT"
    style="left: 70px; top: 5px; width: 240px; overflow: visible;"
  >
    <List>
      {#if $user.enrolledClasses}
        {#each $user.enrolledClasses as mitClass }
          {#if mitClass.name !== nameOfClass}
            <Item on:SMUI:action={() => switchClass(mitClass)}>
              <div class="my-truncated-text">
                {mitClass.name} ({mitClass.description})
              </div>
            </Item>
          {/if}
        {/each}
      {/if}

      <div style="margin-left: 12px; margin-bottom: 4px; margin-top: 16px;">
        {#if allClasses.length > 0}
          <Autocomplete 
            options={filteredClasses}
            getOptionLabel={(option) => option ? `${option.name} (${option.description})` : ''}
            bind:value={valueStandard}
            on:SMUIAutocomplete:
            textfield$variant="outlined"
            label="Search class"
            menu$style="max-height: 226px;"
          />
          <!--
             Let's break down what `menu$style` means:
              SMUI lets us inject props into the sub-elements of <Autocomplete/>
              `menu` there is a child div that looks like this <div class="LOTS OF SMUI-DEFINED CLASSES">, which we select
              `$style`: we add a `style` attribute directly to the menu element, thereby applying CSS to it

            (This child prop injection feature was mentioned in SMUI's README https://github.com/hperrin/svelte-material-ui)
          -->
          <!-- 226px will half-show the last element, indicating the result list is scrollable without needing to display a scrollbar -->
        {/if}
      </div>
    </List>
  </Menu>
</div>
 
<!-- Fetch the classes you have -->
<script lang="ts">
  import Menu from '@smui/menu';
  import List, { Item, Separator, Text } from '@smui/list';
  import Button, { Label } from '@smui/button';
  import { user } from '../store.js'
  import Autocomplete from '@smui-extra/autocomplete';
  import IconButton, { Icon } from '@smui/icon-button';
  import { collection, getDocs, getFirestore, updateDoc, arrayUnion, arrayRemove, increment, doc } from 'firebase/firestore';
  import { onMount } from 'svelte'
  import { goto } from '$app/navigation'


  export let nameOfClass
  export let descriptionOfClass

  let anchor
  let mitClasses = []
  let allClasses = []
  let valueStandard = ''
  let menu

  $: if (valueStandard) {
    join({ mitClass: valueStandard })
  }

  // $: filteredClasses = allClasses.filter(c => ['8.01', '6.036'].includes(c.name))
  $: filteredClasses = allClasses

  // fetch all classes
  onMount(async () => {
    // console.log('$user.enrolledClasses =', $user.enrolledClasses)
    const ref = collection(getFirestore(), '/classes')
    const classDocs = await getDocs(ref)
    const temp = []
    classDocs.forEach(doc => {
      temp.push({
        id: doc.id,
        ...doc.data()
      })
    })
    allClasses = [...temp]
  })

  function openMenu () {
    menu.setOpen(true)
  } 

  async function join ({ mitClass }) {    
    console.log('join mitClass =', mitClass)
    // don't allow duplicate joins
    // TODO: don't even show the classes you are already in
    for (const userClass of $user.enrolledClasses) {
      if (userClass.id === mitClass.id) {
        alert(`You are already in ${mitClass.name}`)
        return
      }
    }
    const db = getFirestore()

    updateDoc(
      doc(db, `users/${$user.uid}`), 
      {
        enrolledClasses: arrayUnion(mitClass),
        mostRecentClassID: mitClass.id,
      }
    )

    updateDoc(
      doc(db, `classes/${mitClass.id}`), 
      {
        numOfMembers: increment(1)
      }
    )
    
    valueStandard = ''
    goto(`/${mitClass.id}/${mitClass.id}`)
  }

  async function switchClass (mitClass) {
    const db = getFirestore()

    const userRef = doc(db, `users/${$user.uid}`)
    updateDoc(userRef, {
      mostRecentClassID: mitClass.id
    })

    // redirect
    goto(`/${mitClass.id}/${mitClass.id}`)
  }
  
  // async function leaveClass (id) {
  //   const { user } = this; 
  //   let classToRemove = null; 
  //   for (const enrolledClass of user.enrolledClasses) {
  //     if (enrolledClass.id === id) {
  //       classToRemove = enrolledClass;
  //       break; 
  //     }
  //   }
  //   // bad quickfix code to find a different classID to become the default redirected class
  //   let newDefaultRedirectedClass = null; 
  //   for (const enrolledClass of user.enrolledClasses) {
  //     if (enrolledClass.id !== classToRemove.id) {
  //       newDefaultRedirectedClass = enrolledClass; 
  //       break; 
  //     }
  //   }
  //   db.doc(`classes/${classToRemove.id}`).update({
  //     numOfMembers: increment(-1)
  //   })
  //   await db.collection("users").doc(user.uid).update({
  //     enrolledClasses: arrayRemove(classToRemove),
  //     mostRecentClassID: newDefaultRedirectedClass.id
  //   });
    
  //   // It's no longer necessary to redirect the class afterwards because the user can only leave classes they are not currently in
  //   // const newID = newDefaultRedirectedClass.id; 
  //   // this.$router.push(`/class/${newID}/section/${newID}/room/${newID}`);
  // }
</script>