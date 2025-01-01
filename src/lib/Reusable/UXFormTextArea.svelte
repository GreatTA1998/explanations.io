<div
  on:click={() => willTriggerFocus = true} on:keydown
  class="ux-form-field"
  class:grey-border={!isFocused}
  class:blue-border={isFocused}
  style="height: fit-content;"
>
  <div class="ux-field-label">
    {fieldLabel}
  </div>

  <!-- input interface is a quick-fix, 
  
  and parent will need to consume `e.detail` instead of `e.target value` -->
  <div bind:this={InputElem}>
    <TextAreaAutoResizing
      {value}
      {willTriggerFocus}
      on:input
      on:manually-focused={() => willTriggerFocus = false}
      on:focusin={() => isFocused = true}
      on:focusout={() => isFocused = false}
      {placeholder}
      class="ux-input-text" 
      style="width: 100%; border: 0px solid grey;"
      resetDefaultStyling={true}
    />
  </div>
</div>

<script>
  export let fieldLabel = ''
  export let placeholder
  export let value = ''

  import TextAreaAutoResizing from "$lib/Reusable/TextAreaAutoResizing.svelte";

  let InputElem
  let willTriggerFocus = false
  let isFocused = false

</script>

<style>
  .blue-border {
    border: 2px solid #2757cf;
  }

  .grey-border {
    border: 2px solid #DBDBDD;
  }

  .ux-form-field {
    height: 100px;
    padding-left: 9px;
    padding-right: 9px;
    border-radius: 4px;
    background-color: white;
  }

  .ux-field-label {
    margin-top: 9px;
    margin-bottom: 8px;
    font-size: 14px;
    color: gray;
    font-family: 'Inter';
    line-height: 16px;
  }

  .ux-input-text {
    margin-bottom: 9px;
    font-weight: 500;
    font-size: 16px;
    font-family: 'Inter';
    line-height: 18px;
  }

  /* remove default input styling */
  input {
    all: unset;
  }
</style>