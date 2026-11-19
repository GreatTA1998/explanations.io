<div style="display: flex; gap: 12px;">
  <div title="Chile" class="flag chile"></div>
  <div title="United States" class="flag usa"></div>
  <div title="Sweden" class="flag sweden"></div>
  <div title="Singapore" class="flag singapore"></div>
</div>

<style>
  .flag {
    width: 24px;
    height: 16px;
    position: relative;
    box-shadow: 0 1px 2px rgba(0,0,0,0.1);
  }

  /* Chile - simple two colors with blue square */
  .chile {
    background: linear-gradient(
        to bottom,
        white 50%,
        #d52b1e 50%
    );
  }
  .chile::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 33.33%;
    height: 50%;
    background: #0039a6;
  }

  /* USA - just stripes and blue canton */
  .usa {
    background: linear-gradient(
      to bottom,
      #b22234 20%,
      white 20% 40%,
      #b22234 40% 60%,
      white 60% 80%,
      #b22234 80%
    );
  }
  .usa::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 40%;
    height: 60%;
    background: #3c3b6e;
  }

  /* Sweden - simple cross */
  .sweden {
    background: #006aa7;
  }
  .sweden::before {
    content: '';
    position: absolute;
    background: #fecc00;
    width: 100%;
    height: 20%;
    top: 40%;
  }
  .sweden::after {
    content: '';
    position: absolute;
    background: #fecc00;
    height: 100%;
    width: 20%;
    left: 30%;
  }

  /* Singapore - red over white, with a crescent and five stars */
  .singapore {
    background: linear-gradient(
      to bottom,
      #ef3340 50%,
      white 50%
    );
  }
  .singapore::before {
    content: '';
    position: absolute;
    top: 1px;
    left: 2px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #ef3340;
    box-shadow: 2px 0 0 0 white;
  }
  .singapore::after {
    content: '';
    position: absolute;
    top: 1px;
    left: 12px;
    width: 1px;
    height: 1px;
    border-radius: 50%;
    background: white;
    box-shadow:
      3px 1px 0 0 white,
      1px 3px 0 0 white,
      4px 3px 0 0 white,
      2px 5px 0 0 white;
  }
</style>