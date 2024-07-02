<div class="avatar" id="avatar" style="border: 2px solid {pickedColor}; background: none;">
  <span class="material-symbols-outlined" style="color: {pickedColor}; font-size: var(--fs-700);">
    psychology
  </span>
</div>

<div style="margin-left: 4px;">
  <div style="display: flex; align-items: center; cursor: pointer;">	
    <div style="color: black; font-weight: 500; font-size: var(--fs-xs);">
      {firstNameAndKeyInfo}
    </div>
  </div> 	

  <div style="margin-top: 1px; display: flex; align-items: center; font-weight: 400; font-size: var(--fs-300);">
    <div>{collegeAndYear}</div>
    <div class="separator"></div> 
    <div>{bio}</div>
  </div>
</div>

<script>
  export let firstNameAndKeyInfo = ''
  export let collegeAndYear = ''
  export let bio = ''

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
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #fff;
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .separator {
		width: 2px;
		height: 2px;
		background-color: #606060;
		border-radius: 50%;
		margin: 4px 6px;
	}
</style>