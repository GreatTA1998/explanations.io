<script>
  import HomePageForLearner from '$lib/HomePageForLearner.svelte'
</script>

<div class="splash-screen">
  <HomePageForLearner />
</div>

<style>
  .splash-screen {
    height: calc(100vh - var(--navbar-height)); 
    margin-top: var(--navbar-height);
    padding: 36px;
    background-color: var(--bg-off-white);
  }
</style>