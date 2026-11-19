<div class="avatar" style="border: 0 solid {color || '#888'};">
  <img
    src="https://api.dicebear.com/9.x/bottts/svg?seed={encodeURIComponent(seed || 'anon')}"
    alt=""
    style="background: {color || 'rgb(140, 140, 140)'};"
  />
</div>

<script>
  export let seed = ''
  export let color = ''
</script>

<style>
  .avatar {
    width: var(--is-m); height: var(--is-m); border-radius: 50%; background-color: #fff;
    overflow: hidden; display: flex; justify-content: center; align-items: center; flex-shrink: 0;
  }
  .avatar img { width: 100%; height: 100%; }
</style>
