<div class="avatar" id="avatar" style="border: 0px solid {pickedColor};">
  <img
    src="https://api.dicebear.com/9.x/bottts/svg?seed=Molly"
    alt="avatar" 
    style="filter: hue-rotate({Math.random() * 360}deg) brightness(100%); background: rgb(140, 140, 140);"  
  />
</div>

<script>
  let pickedColor = getRandomDarkColor()

  function getRandomDarkColor() {
    // Generate random values for red, green, and blue components
    const red = Math.floor(Math.random() * 128); // Range: 0-127
    const green = Math.floor(Math.random() * 128); // Range: 0-127
    const blue = Math.floor(Math.random() * 128); // Range: 0-127
    
    // Construct the dark color in hexadecimal format
    const darkColor = `#${toHex(red)}${toHex(green)}${toHex(blue)}`;
    
    return darkColor;
  }

  function toHex(value) {
    // Convert the decimal value to hexadecimal
    const hex = value.toString(16);
    
    // Ensure that the hexadecimal value has two digits
    return hex.length === 1 ? `0${hex}` : hex;
  }

</script>

<style>
  .avatar {
    width: var(--is-m);
    height: var(--is-m);
    border-radius: 50%;
    background-color: #fff;
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>