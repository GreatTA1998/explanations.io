<!-- <div class="wrapper"> -->
  <input 
    style="font-family: sans-serif; font-size: 2em; height: 60px; width: 100%;"
    class="input" 
    value={value}
    readonly={readonly}
    placeholder="Question title..." 
    type="text" 
    on:input
    on:click
  >
  <span class="underline"></span>
<!-- </div> -->

<script>
  import { createEventDispatcher } from 'svelte'

  export let value
  export let readonly

  const dispatch = createEventDispatcher()
</script>

<style>
  /* html, body {
  background-color: #F1F1F1;
  height: 100%;
  margin: 0;
  padding: 0;
  position: absolute;
  width: 100%;
} */

.wrapper {
  background-color: #FFF;
  border-radius: 2px;
  box-shadow: 0px 2px 1px 0px #DDD;
  box-sizing: border-box;
  height: 300px;
  left: 50%;
  margin: -150px 0 0 -150px;
  position: absolute;
  top: 50%;
  width: 300px;
}

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

/* input:focus::-webkit-input-placeholder {
  color: dodgerblue;
} */

.input:focus+.underline {
  transform: scale(1);
}

.underline {
  /* dodgerblue */
  background-color: black;
  display: inline-block;
  height: 2px;
  left: 50px;
  margin-top: -4px;
  /* position: absolute; */
  top: 185px;
  -webkit-transform: scale(0, 1);
  transform: scale(0, 1);
  -webkit-transition: all 0.2s linear;
  transition: all 0.2s linear;
  width: 100%;
}
</style>