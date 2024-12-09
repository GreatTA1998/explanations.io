

    <!-- <div id="navbar">
      <div id="logo-placeholder">
          <div style="width: 50px; height: 50px; background-color: #3498db; margin-right: 10px;"></div>
          <span>Product Name</span>
      </div>
    </div>

    <div id="splash-screen">
        <div style="text-align: center;">
            <div style="width: 200px; height: 200px; background-color: #3498db; margin: 0 auto 20px;"></div>
            <h1>Welcome to Our Product</h1>
            <p>Discover innovation that transforms your workflow</p>
        </div>
    </div>

    <div id="product-section">
        <h2>Our Product</h2>
        <div>
            <div style="background: white; padding: 20px; margin-bottom: 20px;">
                <h3>Full Product</h3>
                <p>Description of first feature</p>
            </div>
        </div>
    </div> -->

<div style="border: 2px solid red; outline: 2px solid red; background-color: red; height: calc(100vh - var(--navbar-height)); margin-top: var(--navbar-height);">

</div>

<script>
  import { onMount } from 'svelte'

  onMount(() => {
    // window.addEventListener('scroll', handleScroll);
  })

  function handleScroll() {
    var splashScreen = document.getElementById('splash-screen');
    var navbar = document.getElementById('navbar');
    var logoPlaceholder = document.getElementById('logo-placeholder')
    var scrollPosition = window.pageYOffset;
    var windowHeight = window.innerHeight;


    const logoRect = logoPlaceholder.getBoundingClientRect();
    const splashRect = splashScreen.getBoundingClientRect();
       // Calculate scale factor based on logo size (50px) vs splash screen size (200px)
       const scaleFactor = 0.01;
       const translateX = -5000
       const translateY = -1000

    if (scrollPosition >= windowHeight * 1) {
      // Transform splash screen into the navbar logo
      // -150%, -150%
      // splashScreen.style.transformOrigin = 'left top'
      // splashScreen.style.transform = `scale(0.01)`; 
      // splashScreen.style.transform = `translate(${translateX}px, ${translateY}px)`
      // translate(${translateX}px, ${translateY}px)

      // navbar.style.opacity = '1';

      // Completely remove splash screen from document flow
      requestAnimationFrame(() => {
        splashScreen.style.display = 'none';
        splashScreen.style.opacity = '0';
        splashScreen.style.zIndex = '1'

      // Show navbar with logo
      logoPlaceholder.style.opacity = '1';
      })
    }
  }
</script>

<style>
  #splash-screen {
    transition: all 2s ease-in; 
    /* linear */
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #3498db;
      color: white;
      /* transition: all 2s ease; */
      position: relative;
      top: 56px;
      left: 0;
      width: 100%;

      /* z-index: 21; */
  }

  #navbar {
    border: 2px solid black;
    position: fixed;
    z-index: 1;
    /* top: 56px; */
    width: 100%;
    top: 0px;
  }

  #product-section {
    height: 100vh;
    margin-top: 56px;
  }

  /* #navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: white;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    z-index: -1;
    transition: opacity 1.5s ease;
  } */

  #logo-placeholder {
      display: flex;
      align-items: center;
      cursor: pointer;
      opacity: 0;
      transition: opacity 0.5s linear;
  }

  #product-section {
      background-color: #f0f0f0;
  }
</style>