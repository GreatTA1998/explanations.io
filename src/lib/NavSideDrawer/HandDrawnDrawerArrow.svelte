<script>
  export let pointing = 'right'
</script>

<span class="arrow" class:left={pointing === 'left'} aria-hidden="true"></span>

<style>
  .arrow {
    display: block;
    width: 10px;
    height: 10px;
    border-right: 2px solid currentColor;
    border-bottom: 2px solid currentColor;
    transform: rotate(-45deg);
  }
  .arrow.left { transform: rotate(135deg); }
</style>
