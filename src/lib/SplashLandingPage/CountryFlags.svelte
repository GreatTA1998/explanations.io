<div style="display: flex; gap: 12px;">
  <div title="Chile" class="flag chile"></div>
  <div title="United States" class="flag usa"></div>
  <div title="Sweden" class="flag sweden"></div>
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
</style>