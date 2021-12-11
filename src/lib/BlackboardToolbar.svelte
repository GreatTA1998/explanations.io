<div style="position: absolute; display: flex; align-items: center; height: 50px; left: 0; right: auto; top: 0; bottom: auto; z-index: 100; background-color: grey; padding-left: 10px; border-radius: 2px;">
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
    <div style="margin-top: 2px; font-size: 0.55rem; font-family: Roboto,sans-serif; color: white;">
      {$onlyAllowApplePencil ? 'No touch' : 'Touch draw'}
    </div>
  </div>
  {#if Object.keys($user).length > 0}
    {#each $user.pencilColors as color }
      <div on:click={() => currentTool.set({ type: 'pencil', color, lineWidth: 3 })} style="margin: 0 4px; width: 30px; height: 42px; border-radius: 3px; align-items: center; display: flex; justify-content: center;" class:pencil-selected={$currentTool.color === color}>
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
      </div>
    {/each}

    <img 
      on:click={() => currentTool.set({ type: 'eraser', color: '', lineWidth: 40 })}
      class:eraser-selected={$currentTool.type === 'eraser'}
      width="46" height="33"
      style="margin-left: 8px;"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR30G9gEErDXNf8qxm0-vvSLs2zaE8V6v-pDqxNg-CUaoeORwmoosKPF-DC2SUG772Tm3A&usqp=CAU"
      alt="eraser"
    >
  {/if}
  
  <slot>

  </slot>

  <span on:click={() => dropdownMenu.setOpen(true)} class="material-icons" style="margin-right: 10px; color: white; font-size: 2rem;">
    more_horiz
  </span>
  
  <Menu bind:this={dropdownMenu} style="left: 100px; top: 50px; width: 300px">
    <List>
      <slot name="dropdown-menu">

      </slot>  
    </List>
  </Menu>
</div>

<script>
  import { user, currentTool, onlyAllowApplePencil } from '../store.js'
  import Switch from '@smui/switch';
  import List, { Item, Text } from '@smui/list'
  import Menu from '@smui/menu';

  let dropdownMenu

  function func () {
    onlyAllowApplePencil.set(!$onlyAllowApplePencil)
  }
</script>

<style>
svg {
  max-height: 30px;
}

.pencil-selected {
  background-color: white;
}

.eraser-selected {
  filter: invert(1)
}
</style>