<div class="parent robust-ios-space-filling">
  <div class="top-navbar">
    <slot name="top-navbar">

    </slot>
  </div>

  <div class="left-drawer">
    <slot name="left-drawer">

    </slot>
  </div>

  <div class="main-content">
    <slot name="main-content">

    </slot>
  </div>
</div>

<style>
  .parent {
    display: grid;
    grid-template-rows: 56px 1fr;
    grid-template-columns: 300px 1fr;
    grid-template-areas: 'navbar navbar'
                         'sidebar main';
    background-color: var(--bg-off-white);
  }

  .robust-ios-space-filling {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .top-navbar {
    grid-area: navbar;
  }

  .left-drawer {
    grid-area: sidebar;
    overflow-y: auto;
  }

  .main-content {
    grid-area: main;
    overflow-y: auto;
  }
</style>