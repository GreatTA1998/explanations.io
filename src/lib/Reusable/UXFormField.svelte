<div 
  on:click={() => InputElem.focus()}
  class="ux-form-field"
  class:grey-border={!isFocused}
  class:blue-border={isFocused}
>
  <div class="ux-field-label">
    {fieldLabel}
  </div>

  <input 
    {value}
    on:input
    on:focusin={() => isFocused = true}
    on:focusout={() => isFocused = false}
    bind:this={InputElem}
    {placeholder}
    class="ux-input-text" 
    style="width: 100%;"
  >
</div>

<script>
    export let fieldLabel = ''
    export let placeholder

    export let value = ''

    

    let InputElem
    let isFocused = false

    function showBlueBorders () {
      isFocused = true
    }
</script>

<style>
  .blue-border {
    border: 2px solid #2757cf;
  }

  .grey-border {
    border: 2px solid #DBDBDD;
  }

  .ux-form-field {
    height: 60px;
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