<!-- Adapted from https://css-tricks.com/the-cleanest-trick-for-autogrowing-textareas/ -->
<div 
  style="display: grid;"
  class="grow-wrap"
  bind:this={autogrowWrapper} 
  use:initValue 
  use:cssVars={styleVars}
>
  <!-- took me 1 hour to figure out `rows = n` is the way to change initial height -->
  <!-- without `border-box`, textarea will add padding and border to width, exceeding it -->
  <textarea 
    {readonly}
    {value}
    placeholder={placeholder}
    on:input={(e) => { 
      autogrowWrapper.dataset.replicatedValue = e.target.value; 
      dispatch('input', e.target.value)
    }} 
    rows="1"
    style="width: {100}%;"
  />
</div>

<script>
  import { createEventDispatcher } from 'svelte'

  // `cssVars` package solved a 4-part headache: https://github.com/sveltejs/svelte/issues/758#issuecomment-521764823
  // 1. we need pseudoelement to avoid jumpy textbot resize behavior (see autogrow tutorial)
  // 2. we also need to dynamically set pseudoelement width to match the textarea
  // 3. pseudoelement can't be styled with dynamic CSS because it doesn't exist in template area
  // 4. attr() was designed to style pseudoelements, but it does NOT support setting px widths 
  import cssVars from 'svelte-css-vars';  
  
  $: styleVars = {
    width: `100%`,
  };

  export let value
  export let placeholder
  export let readonly = false

  let autogrowWrapper

  const dispatch = createEventDispatcher()

  function initValue (element) {
    element.dataset.replicatedValue = value
  }
</script>

<style>
/* gentle reminder: `::after` is a CHILD element of <div class="grow-wrap"> (more specifically, a PSEUDO-element that is the last child)*/
.grow-wrap::after {
  visibility: hidden;
  content: attr(data-replicated-value) " "; 
}

/* SHARED, COMMON properties */
.grow-wrap > textarea, 
.grow-wrap::after {
  /* Identical styling required!! */
  width: var(--width);
  overflow-wrap: break-word; /* somehow without this, you can spam the longest word and the autogrower never knows to manually insert a line break*/
  white-space: pre-wrap; /* Sequences of white space are preserved. Lines are broken at newline characters, at <br>, and as necessary to fill line boxes. */
  box-sizing: border-box;
  border: 1px solid rgb(160, 146, 146);
  border-radius: 0px;
  padding: 6px;
  /* padding: 0.5rem;  */
  /* font: inherit;  */
  /* the inspect tool won't show me what value `font-size` takes through inheritance 
     turns out it's unexpectedly complicated https://manishearth.github.io/blog/2017/08/10/font-size-an-unexpectedly-complex-css-property/ */
  
  /* Copying Mozilla */
  font-family: "Segoe UI", Roboto, sans-serif; 
  font-size: 1.4rem;
  line-height: 1.6;
  letter-spacing: 0.001em;
  color: rgba(1, 11, 1, 1);

  /* Place on top of each other */
  grid-area: 1 / 1 / 2 / 2;

  /* probably <textarea> specific attributes, but easier to understand code if in shared rather than in individual css */
  resize: none; /* user's drag resize would ruin auto-sizing */
  overflow: hidden;  /* e.g. Firefox shows scrollbar */
}

textarea::placeholder {
  opacity: 0;
}

textarea:focus::placeholder{
  opacity: 0.6;
}
</style>