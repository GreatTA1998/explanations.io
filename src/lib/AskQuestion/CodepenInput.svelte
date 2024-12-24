<input 
  style="font-family: sans-serif; font-size: 2em; height: 60px; width: 100%;"
  class="input" 
  value={value}
  readonly={readonly}
  placeholder="Title"
  type="text" 
  on:input
  on:click
>
<span class="underline"></span>

<script>
  export let value
  export let readonly
</script>

<style>
  .input {
    background-color: transparent;
    border: none;
    border-bottom: 1px solid #CCC;
    color: #555;
    box-sizing: border-box;
    font-family: 'Arvo';
    font-size: 18px;
    height: 50px;
    margin: 0 0 -100px;
    padding: 10px 0px;
    position: relative;
    top: 50%;
    width: 200px;

    &:focus {
      outline: none;    
    }
  }

  input::-webkit-input-placeholder {
    color: #AAA;
  }

  .input:focus+.underline {
    transform: scale(1);
  }

  .underline {
    background-color: black;
    display: inline-block;
    height: 2px;
    left: 50px;
    margin-top: -4px;
    top: 185px;
    -webkit-transform: scale(0, 1);
    transform: scale(0, 1);
    -webkit-transition: all 0.2s linear;
    transition: all 0.2s linear;
    width: 100%;
  }
</style>