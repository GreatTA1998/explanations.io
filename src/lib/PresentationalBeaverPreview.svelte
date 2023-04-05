<div style={$$props.style}>
  <div on:click style="display: flex; align-items: center; background-color: rgb(208 213 207); cursor: pointer;">
    <span class="material-icons" style="font-size: 2rem;">cruelty_free</span>

    <div>
      <div><a style="color: purple;">{fullName}</a></div>
      <div>{ numOfVideos } videos, { minutesViewed } minutes viewed</div>
    </div>
  </div>
</div>

<script>
  export let fullName = "John Doe"
  export let numOfVideos = 'm'
  export let minutesViewed = 'n'
</script>
