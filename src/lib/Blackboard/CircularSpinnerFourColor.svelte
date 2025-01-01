<div style="display: flex; justify-content: center">
  <CircularProgress
    class="my-four-colors"
    style="height: 32px; width: 32px;"
    indeterminate
    fourColor
  />
</div>
 
<script lang="ts">
  import CircularProgress from '@smui/circular-progress';
  import './_FourColor.scss'
</script>

<style lang="scss">
  @use '@material/circular-progress/mixins' as circular-progress;
  @use '@material/theme/color-palette';

  .my-four-colors {
    @include circular-progress.indeterminate-colors(
      color-palette.$green-500 color-palette.$yellow-500 color-palette.$red-500
        color-palette.$blue-500
    );
  }
</style>