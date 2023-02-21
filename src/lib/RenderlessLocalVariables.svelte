<slot {isCardExpanded} {toggleIsCardExpanded}>

</slot>

<script>
let isCardExpanded = false

function toggleIsCardExpanded () {
  isCardExpanded = !isCardExpanded
}
</script>