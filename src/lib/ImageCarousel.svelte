<!-- https://codepen.io/Johnmuir2001/details/qBYPXeZ -->
<!-- HOW TO USE:
  You must wrap <div class="card">, with .card { } CSS styles
  pasted in the component you're using the carousel in  
  `
-->
<div id="carousel-wrapper">
  <div id="carousel">
    <!-- To optimize, you can use intersection listener to lazy-load -->
    <slot carouselWidth={carouselWidth}>
      <!-- <div class="card" style="border: 2px solid blue;">

      </div>
      <div class="card" style="border: 2px solid orange;">

      </div>

      <div class="card" style="border: 2px solid green;">

      </div> -->
    </slot>
  </div>


  <!-- HIDE FOR NOW -->
  <div id="pagination" style="display: none; color: black;">
    <div class="ball"></div>
    <div class="ball"></div>
    <div class="ball"></div>
    <div class="ball"></div>
    <div class="ball"></div>
    <div class="ball"></div>
  </div>

  <div id="leftArrow" class="arrow">
    {#if currIdx > 0}
      <Button style="height: 100px; z-index: 2; background-color: orange; border-radius: 10px; padding-left: 40px; width: 112px;">
        <span class="material-icons" style="color: white; font-size: 6rem;">
          arrow_back_ios
        </span>
      </Button>
    {/if}
  </div>
  <div id="rightArrow" class="arrow">
    {#if currIdx < numOfImages - 1}
      <Button style="height: 100px; z-index: 2; background-color: orange; border-radius: 10px;" id="rightArrow">
        <span class="material-icons" style="color: white; font-size: 6rem;">
          arrow_forward_ios
        </span>
      </Button>
    {/if}
  </div>
</div>

<script>
import { onMount } from 'svelte'
import Button, { Label } from '@smui/button';

export let numOfImages
let currIdx = 0
let carouselWidth = null // 

onMount(() => {
  let pagination = document.querySelectorAll('.ball');
  let carousel = document.getElementById('carousel');
  let cards = document.querySelectorAll('.card');
  let leftBtn = document.getElementById('leftArrow');
  let rightBtn = document.getElementById('rightArrow');

  carouselWidth = carousel.offsetWidth

  // This causes the 3 overview dots to change width e.g. 2nd circle becomes wider because we're on 2nd page
  const updatePag = () => {
    pagination.forEach((el) => el.style.width = '12px');
    pagination[currIdx].style.width = '25px' // it was 25 px
  }

  pagination.forEach((curItem, index) => {
    curItem.addEventListener('click', () => {
      currIdx = index;
      updatePag()
      carousel.scrollLeft = (index * (window.innerWidth - 150)) + (index * 10)
    })
  })

  leftBtn.addEventListener('click', () => {
    if(currIdx > 0){
      currIdx--
      carousel.scrollLeft = currIdx * carousel.offsetWidth + (currIdx * 10)
      // (section * (window.innerWidth - 150)) + (section * 10)
      updatePag()
    }
  })
  rightBtn.addEventListener('click', () => {
    // if(section < 2){
      currIdx++
      carousel.scrollLeft = currIdx * carousel.offsetWidth + (currIdx * 10) // don't know why the 10n padding multiplier is needed, but it's needed
      // (section * (window.innerWidth - 300)) + (section * 10)
      updatePag()
    // }
  })
})
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@900&display=swap');

  /* This used to be applied to <body> */
  #carousel-wrapper {
    margin: 0;
    /* background-color: #292929; */
    display: grid;
    place-items: center;
    height: 100vh;
    font-family: 'Montserrat', sans-serif;
    position: relative;

    border: 5px solid orange;

    /* T match SMUI card's radius, it's multiplied by 2 */
    border-radius: 10px; 
  }

  #carousel {
    height: 100%; /* calc(100vh - 150px); */
    width: 100%; /* was calc(100vw - 150px)*/
    overflow: hidden;
    scroll-behavior: smooth;
    display: flex;
    justify-content: space-between;

    box-sizing: border-box;
  }

  .card {
    flex-shrink: 0;
    background-color: #545454;
    height: 100%;
    width: 100%; /* It was calc(20% - 8px) */
    margin: 0 5px; 
    transition: transform 1s;
    background-repeat: no-repeat;
    background-size: auto 120%;
    background-position: center;
    transition: all 0.3s;
    cursor: pointer;
    overflow: hidden;

    box-sizing: border-box;
  }
  .card:hover {
    background-size: auto 100%;
  }
  .card:first-child { margin-left: 0; }
  .card:last-child { margin-right: 0; }

  .card p {
    margin: 0;
    height: 100%;
    display: grid;
    place-items: center;
    font-size: 10vw;
    color: white;
    transition: all 0.3s;
    transform: scale(1);
  }
  .card:hover p {
    background-color: rgba(0,0,0,0.3);
    transform: scale(1.3);
  }

  #pagination {
    position: absolute;
    bottom: 0;
    height: 75px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .ball {
    height: 12px;
    width: 12px;
    background-color: black;
    border-radius: 20px;
    margin: 2px;
    cursor: pointer;
    transition: width 0.2s;
  }
  .ball:first-child {
    width: 25px;
  }

  #leftArrow {
    left: 0;
  }

  #rightArrow {
    right: 0;
  }
  .arrow {
    position: absolute;
    height: auto;
    width: 75px;
    color: white;
    font-size: 80px;
    display: grid;
    place-items: center;
    cursor: pointer;
  }
</style>