<div class="ux-form-field">
  <div class="ux-field-label">
    {fieldLabel}
  </div>

  <input placeholder=""
    class="ux-input-text" 
    value={fieldValue}
    style="width: 100%;"
  >
</div>

<script>
    export let fieldLabel = ''
    export let fieldValue = ''
</script>

<style>
  .ux-form-field {
    height: 60px;
    padding-left: 9px;
    padding-right: 9px;
    border: 2px solid #DBDBDD;
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