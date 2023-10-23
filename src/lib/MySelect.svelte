<div class="body-simulator">
  <select 
    bind:this={SelectElem}
    on:click={(e) => {
      dispatch('option-clicked', { value: SelectElem.value })
    }}
  > 
    {#each options as option, i}
      <option value={option}>
        {option}
      </option>
    {/each}
  </select>
</div>

<!-- Adapted from https://codepen.io/raubaca/pen/VejpQP -->
<script>
  import { createEventDispatcher } from "svelte"

  export let options = []

  let SelectElem

  const dispatch = createEventDispatcher()
</script>

<style lang="scss">
:root {
  --arrow-bg: rgba(255, 255, 255, 0.3);
  --arrow-icon: url(https://upload.wikimedia.org/wikipedia/commons/9/9d/Caret_down_font_awesome_whitevariation.svg);
  --option-bg: white;
  --select-bg: rgba(255, 255, 255, 0.2);
}
* {
  box-sizing: border-box;
}
.body-simulator {
  // display: grid;
  // place-items: center;
  // min-height: 100vh;
  // background: linear-gradient(35deg, red, purple);
}
/* <select> styles */
select {
  /* Reset */
  // appearance: none;
  // border: 0;
  outline: 0;
  font: inherit;
  /* Personalize */
  width: fit-content;

  padding: 8px;
  // padding: 1rem 4rem 1rem 1rem;
  // background: var(--arrow-icon) no-repeat right 0.8em center / 1.4em,
  //   linear-gradient(to left, var(--arrow-bg) 3em, var(--select-bg) 3em);
  //   color: black;
  // color: white;  
  border-radius: 0.25em;
  // box-shadow: 0 0 1em 0 rgba(0, 0, 0, 0.2);
  border: 2px solid grey;

  cursor: pointer;
  /* Remove IE arrow */
  &::-ms-expand {
    display: none;
  }
  /* Remove focus outline */
  &:focus {
    outline: none;
  }
  /* <option> colors */
  option {
    color: inherit;
    background-color: var(--option-bg);
  }
}
</style>