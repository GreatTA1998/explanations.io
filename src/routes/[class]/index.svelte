<script context="module">
  export function load ({ page }) {
    console.log('load function from [class].svelte')
    console.log('page =', page)
    return {
      props: {
        myProps: page.params
      }
    }
  }  
</script>

<!-- TODO: fetch participants and rooms here -->