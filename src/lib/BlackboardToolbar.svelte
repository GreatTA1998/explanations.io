<div class="blackboard-toolbar">
  <div on:click|stopPropagation|preventDefault={func}
    style="margin-right: 10px; text-align: center"
  >
    <!-- 
      Don't put click listeners on Switch, 
      some weird behavior happens that causes it to NOT flick
      on the first click,
      (and no, I don't use bind:checked={variable},
       so should only determine its initial value)
    -->
    <Switch 
      icons={false}
      checked={!$onlyAllowApplePencil}
      style="margin: 0 !important"
    />
    <div style="margin-top: 1px; margin-left: 1px; font-size: 0.52rem; font-family: Roboto,sans-serif; color: white;">
      {$onlyAllowApplePencil ? 'No touch' : 'Touch draw'}
    </div>
  </div>

  {#if Object.keys($user).length > 0}
    {#if open}
      <div class="popup-window">
        <!-- generate random colors -->
        <div style="display: flex; flex-wrap: wrap">
          {#each randomPaletteColors as color}
            <div 
              on:click={() => newlySelectedColor = color}
              style="background: {color}; height: 30px; width: 30px; box-sizing: border-box"
              class:highlighted-outline={newlySelectedColor === color}
            >
            </div>
          {/each}
        </div>

        <Slider style="flex-grow: 1;" 
          bind:value={newlySelectedWidth}
          min={1}
          max={10}
          discrete
          step={1}
        />

        <span
          style="padding-left: 18px; padding-right: 12px; width: max-content; display: block;"
        >
          pencil width (px): {newlySelectedWidth}
        </span>

        <div style="display: flex; margin-left: 4px; margin-bottom: 0px; margin-top: auto">
          <!-- TODO- implement a cancel button -->
          <Button on:click={changeColorAndWidthOfPencil(newlySelectedColor, newlySelectedWidth)} style="margin-right: 16px; margin-left: auto;">
            OK
          </Button>
        </div> 
      </div>
    {/if}

    {#each $user.pencilColors as color, i }
      {#if i < $user.pencilColors.length - 1}
        <div on:click={() => selectPencil({ i, color, lineWidth: pencilWidths[i] })} 
          class="color-pencil-button"
          class:pencil-selected={$currentTool.color === color}
        >
          <svg preserveAspectRatio="none" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            width="16px" height="30px" viewBox="0 0 100 230" style="enable-background:new 0 0 100 230;" xml:space="preserve"
          >
            <g>
              <path d="M0,0v72.377c0,1.588,0.234,3.169,0.698,4.706l45.416,150.032C46.633,228.828,48.212,230,50,230s3.367-1.172,3.886-2.883
                L99.31,77.079c0.457-1.525,0.69-3.108,0.69-4.702V0.002"/>;
              <polygon 
                style={`fill: ${color};`}
                points="50,211.978 38.879,175.24 61.122,175.24"
              />
              <path 
                style="fill:#424242;" 
                d="M63.581,167.118H36.42L8.765,75.761l10.924-9.63l12.5,11.015c1.54,1.353,3.835,1.35,5.375-0.002
                  l12.468-11.007l12.464,11.005c1.54,1.357,3.839,1.357,5.377,0l12.465-11.005l10.9,9.623L63.581,167.118z"
              />
              <path 
                style={`fill: ${color};`} 
                d="M91.878,0v65.486l-8.852-7.813c-1.539-1.353-3.838-1.354-5.377,0.002L65.185,68.679L52.72,57.674
                  c-1.539-1.356-3.838-1.354-5.377-0.002L34.871,68.683L22.375,57.67c-0.769-0.676-1.725-1.013-2.685-1.013
                  c-0.959,0-1.919,0.339-2.685,1.013L8.121,65.5L8.098,0.024L91.878,0z"
              />
            </g>
          </svg> 

          <span 
            class="material-icons" 
            style="font-size: 0.7rem; 
                   color: {$currentTool.color === color ? 'white' : 'white'};
                   margin-top: 27px;
            "
            >
            arrow_drop_down
          </span>
        </div>
      {:else}
        <span on:click={handleDiceClick(color, i)} 
          class="material-icons" 
          class:highlighted-background={$currentTool.color === color}
          style="font-size: 2.1rem; margin-left: 5px; color: {color}; border-radius: 4px; padding: 2px"
        >
          casino
        </span>
      {/if}
    {/each}

    <img 
      id="large-eraser"
      on:click={() => currentTool.set({ type: 'eraser', color: '', lineWidth: 32 })}
      class:eraser-selected={$currentTool.type === 'eraser' && $currentTool.lineWidth === 32}
      width="60" height="54"
      style="margin-left: 30px; margin-right: 10px;"
      src="https://i.imgur.com/Klln1yP.png"
      alt="large-eraser"
    >

    <img 
      id="small-eraser"
      on:click={() => currentTool.set({ type: 'eraser', color: '', lineWidth: 5 })}
      class:eraser-selected={$currentTool.type === 'eraser' && $currentTool.lineWidth === 5}
      width="30" height="27"
      style="margin-right: 16px;"
      src="https://i.imgur.com/Klln1yP.png"
      alt="small-eraser"
    >
  {/if}
  
  <slot>

  </slot>

  <slot name="dropdown-menu">

  </slot>  
</div>

<script>
  import { user, currentTool, onlyAllowApplePencil, roomToPeople, browserTabID } from '../store.js'
  import Switch from '@smui/switch'
  import { updateDoc, doc, getFirestore, getDoc } from 'firebase/firestore'
  import Button from '@smui/button'
  import Slider from '@smui/slider'
  import { onMount } from 'svelte';
  
  // let pencilColor = []
  let pencilWidths = [] 

  let pencilIdx = null
  let newlySelectedColor = '' 
  let newlySelectedWidth = 0 // AF(0) means no width

  let open = false

  let randomPaletteColors = ['black', 'white', 'red', 'blue']

  $: {
    if ($user.pencilWidths) pencilWidths = $user.pencilWidths
    else [2, 2, 2, 2]
  }

  // TO-DO: rename `roomToParicipants`, this implies it's a map of ID to ID
  // when it's a roomID to an array of user objects
  // maps from room[ID] to an array of people inside the room
  onMount(() => {
    for (let i = 0; i < 28; i++) {
      randomPaletteColors.push(
        getRandomColor()
      )
    }
  })

  function selectPencil ({ color, lineWidth, i }) {
    if ($currentTool.color === color && $currentTool.lineWidth === lineWidth) {
      pencilIdx = i
      newlySelectedWidth = lineWidth
      newlySelectedColor = color
      // initialize to current value
      open = true
    } 
    else {
      currentTool.set({ type: 'pencil', color, lineWidth })
    }
  }

  async function changeColorAndWidthOfPencil (newColor, newWidth) {
    // TODO: see if you can use function params instead of class variables
    const i = pencilIdx
    selectPencil({ 
      color: newColor,
      lineWidth: newWidth
    })

    const colorsCopy = [...$user.pencilColors] 
    let widthsCopy 
    if ($user.pencilWidths) widthsCopy = [...$user.pencilWidths]
    else widthsCopy = [2, 2, 2, 2]
    colorsCopy[i] = newColor
    widthsCopy[i] = newWidth

    const userRef = doc(getFirestore(), 'users/' + $user.uid)
    updateDoc(userRef, {
      pencilColors: colorsCopy,
      pencilWidths: widthsCopy
    })  

    open = false
    pencilIdx = null
  } 

  function func () {
    onlyAllowApplePencil.set(!$onlyAllowApplePencil)
  }

  function handleDiceClick (color, i) {
    // 2nd click will generate new color
    const commonlyUsedPencilWidth = $user.pencilWidths[0]
    if ($currentTool.color === color) {
      pencilIdx = i
      const randomColor = getRandomColor()
      changeColorAndWidthOfPencil(randomColor, commonlyUsedPencilWidth) // guess most sensible pencil width
      currentTool.set({ type: 'pencil', color: randomColor, lineWidth: commonlyUsedPencilWidth })
    }
    else {
      currentTool.set({ type: 'pencil', color, lineWidth: commonlyUsedPencilWidth })
    }
  }
  function getRandomColor () {
      return "hsla(" + ~~(360 * Math.random()) + "," + // hue i.e. the "color"
                    "100%,"+  // 100% saturation i.e. maximize on its vividness and purity
                    "60%,1)"; // 60% lightness (how much black / white mix, otherwise too faded), 1 alpha
  }
</script>

<style>
  .blackboard-toolbar {
    position: absolute; 
    display: flex; 
    align-items: center; 
    height: 50px; 
    left: auto; 
    right: 0; 
    top: 0; 
    bottom: auto; 
    z-index: 2; 
    background-color: rgb(90 90 90 / 100%);
    padding-left: 10px; 
    border-radius: 4px;
  }

  .color-pencil-button {
    margin: 0 4px; 
    width: 30px; 
    height: 42px; 
    border-radius: 3px; 
    align-items: center; 
    display: flex; 
    justify-content: center;
    padding-left: 4px;
  }

  .highlighted-outline {
    border: 1px solid rgb(128, 0, 128); 
  }

  .highlighted-background {
    background-color: rgb(60, 60, 60);
    /* background-color: hsl(0,0%,0%, 0.80); */
  }

  svg {
    max-height: 30px;
  }

  .pencil-selected {
    background-color: rgb(60, 60, 60);
    /* background-color: rgb(160, 160, 160); */
  }

  .eraser-selected {
    filter: invert(1)
  }

  .popup-window {
    position: fixed; 
    z-index: 10;
    background-color: white; 
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 8px; 
    width: 480px; 
    height: 170px;

    /* center it within the page */
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
  }
</style>