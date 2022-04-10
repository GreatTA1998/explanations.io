
<div bind:this={anchor}>
  <div on:click={() => menu.setOpen(true)} style="display: flex; align-items: center;">
    <div>
      <h1 style="font-family: Roboto, sans-serif; font-weight: 400; margin-left: 6px; margin-top: 5px; margin-bottom: 0px; font-size: 2.0rem">
        {nameOfClass}
      </h1>
      <div style="font-family: Roboto,sans-serif; font-size: 0.875rem; color: rgba(0,0,0,.6); margin-left: 8px; margin-bottom: 12px">
        {descriptionOfClass}
      </div>
    </div>
    
    <Icon class="material-icons" on>arrow_drop_down</Icon>
  </div>

  <!-- left: 50px; top: 50px; width: 200px -->
  <Menu bind:this={menu} 
    anchor={false}
    bind:anchorElement={anchor}
    anchorCorner="BOTTOM_LEFT"
    style="left: 70px; top: 65px; width: 220px; overflow: visible;"
  >
    <List>
      {#if $user.enrolledClasses}
        {#each $user.enrolledClasses as mitClass }
          {#if mitClass.name !== nameOfClass}
            <Item on:SMUI:action={() => switchClass(mitClass)}>
              {mitClass.name}
              <!-- <div>{mitClass.description}</div> -->
            </Item>
          {/if}
        {/each}
      {/if}
    </List>


    <!-- Put an autocomplete component at the bottom -->
    <div style="margin: 4px">
      {#if allClasses.length > 0}
        <Autocomplete
          options={filteredClasses}
          getOptionLabel={(option) => option ? `${option.name} (${option.description})` : ''}
          bind:value={valueStandard}
          textfield$variant="outlined"
          label="Search class"
        />
      {/if}
    </div>
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
  let fruits = ['Apple', 'Orange', 'Banana', 'Mango']
  let valueStandard = ''
  console.log("$user =", $user)
  // $user.enrolledClasses
  let menu

  $: if (valueStandard) {
    console.log('selected option =', valueStandard)
    join({ mitClass: valueStandard })
  }

  $: filteredClasses = allClasses.filter(c => ['8.01'].includes(c.name))

  // fetch all classes
  onMount(async () => {

    console.log('$user.enrolledClasses =', $user.enrolledClasses)

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

  async function join ({ mitClass }) {    
    console.log('join mitClass =', mitClass)
    // don't allow duplicate joins
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

    goto(`/${mitClass.id}/${mitClass.id}`);
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