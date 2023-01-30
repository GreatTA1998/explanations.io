<!-- Copied from https://codepen.io/RustamAbraham/pen/BWzVxo -->
<!--  style="border: 2px solid red;" -->
<div style="display: flex; justify-content: center; align-items: end;">
  {#if scaleFactor}
    <div class="container" style="transform: scale({scaleFactor})">
      <div id="carousel">
        <div style="border: none;">
          <RenderlessListenToBoard dbPath={'classes/Mev5x66mSMEvNz3rijym/blackboards/B0npFZMsV3PMAxapkGy1'} let:boardDoc={boardDoc}>
            <ReusableDoodleVideo
              {boardDoc}
              canvasWidth={galleryItemWidth}
              canvasHeight={galleryItemHeight}
              boardDbPath={'classes/Mev5x66mSMEvNz3rijym/blackboards/B0npFZMsV3PMAxapkGy1'}
            />
          </RenderlessListenToBoard>
        </div>

        <div class="unselectable"></div>
        <div class="unselectable"></div>

        <div style="border: none;">
          <RenderlessListenToBoard dbPath={'classes/USb1mGxeLqufbgbPhSbV/blackboards/K7kZAAhGIhlcYWTjzh4q'} let:boardDoc={boardDoc}>
            <ReusableDoodleVideo
              {boardDoc}
              canvasWidth={galleryItemWidth}
              canvasHeight={galleryItemHeight}
              boardDbPath={'classes/USb1mGxeLqufbgbPhSbV/blackboards/K7kZAAhGIhlcYWTjzh4q'}
            />
          </RenderlessListenToBoard>
        </div>

        <div class="unselectable"></div>
        <div class="unselectable"></div>

        <div style="border: none;">
          <RenderlessListenToBoard dbPath={'classes/AsUl1VWQ7zzxZsD5epL7/blackboards/AsUl1VWQ7zzxZsD5epL7'} let:boardDoc={boardDoc}>
            <ReusableDoodleVideo
              {boardDoc}
              canvasWidth={galleryItemWidth}
              canvasHeight={galleryItemHeight}
              boardDbPath={'classes/AsUl1VWQ7zzxZsD5epL7/blackboards/AsUl1VWQ7zzxZsD5epL7'}
            />
          </RenderlessListenToBoard>
        </div>

        <div class="unselectable"></div>
        <div class="unselectable"></div>
      </div>
    </div>
  {/if}
</div>

<script>
  import RenderlessListenToBoard from './RenderlessListenToBoard.svelte'
  import ReusableDoodleVideo from './ReusableDoodleVideo.svelte'
  import { onMount } from 'svelte'

  let scaleFactor

  onMount(() => {
    scaleFactor = window.innerWidth / 1600
  })

  const galleryItemWidth =  540 // 360, 240 --1.5x->  540 360
  const galleryItemHeight = 360
</script>


<style lang="scss">
@mixin transform($deg) {
  -webkit-transform: rotateY($deg) translateZ(288px);
     -moz-transform: rotateY($deg) translateZ(288px);
      -ms-transform: rotateY($deg) translateZ(288px);
       -o-transform: rotateY($deg) translateZ(288px); // then 576
          transform: rotateY($deg) translateZ(600px); // was 288, makes the rotation bigger, sort of the radius of rotation
}

@mixin transform-origin() {
  // -webkit-transform-origin: 60% 50%;
  //    -moz-transform-origin: 60% 50%;
  //      -o-transform-origin: 60% 50%; 
  //     -ms-transform-origin: 60% 50%;
          transform-origin: 50% 0%; // the "rotation" of the container should be the midpoint of x-axis, hence 50%
}

@mixin transform_($deg) {
  -webkit-transform: rotateY($deg);
     -moz-transform: rotateY($deg);
       -o-transform: rotateY($deg);
      -ms-transform: rotateY($deg);
          transform: rotateY($deg);
}

@mixin rotating(){
  from {
    @include transform-origin;
    @include transform_(0deg);
  }

  to {
    @include transform-origin;
    @include transform_(360deg); // originally is 360 degrees, which is like anti-clockwise or the opposite
  }
}

.container {
  width: 360px; // was w h 210 and 140, then 360, 240
  height: 240px; 
  // position: absolute;
  // top: 50%;
  // left: 50%;
  // transform: translate(-60%,-50%);

  // -webkit-perspective: 1100px; 
  // -moz-perspective: 1100px;
  // -ms-perspective: 1100px;
  perspective: 2000px; // was 1100
  // border: 2px solid red;
}

#carousel {
  width: 100%;
  height: 100%;
  position: absolute;
  -webkit-transform-style: preserve-3d;
  -moz-transform-style: preserve-3d;
  -o-transform-style: preserve-3d;
  -ms-transform-style: preserve-3d;
  transform-style: preserve-3d;
  -webkit-transition: -webkit-transform 1s;
  -moz-transition: -moz-transform 1s;
  -o-transition: -o-transform 1s;
  -ms-transition: -ms-transform 1s;
  transition: transform 1s;
  // -webkit-animation: rotating 20s linear infinite;
  // -moz-animation: rotating 20s linear infinite;
  // -o-animation: rotating 20s linear infinite;
  // -ms-animation: rotating 20s linear infinite;
  animation: rotating 20s linear infinite;
  &:hover {
  // animation-play-state:paused;
  // -o-animation-play-state:paused;
  // -moz-animation-play-state:paused;
	// -webkit-animation-play-state:paused;
  }
  div {
    display: block;
    box-sizing: border-box; // so same size as videos with/without border
    position: absolute; // removing this will create a spiral
    width: 360px; // was w h 210 and 140, then 360, 240
    height: 240px; // 360 was original width height was 180, 120, then 360, 240
    // 360px galleryHeight (otherwise was 240)

    // height: 240px; // 240
    border: 1px solid rgba(112, 112, 112, 0.8);
    border-left: none;
    img {
      width:100%;
      height:100%;
      object-fit: cover;
    }
    &:nth-child(1) {
      @include transform(0deg);
    }
    &:nth-child(2) {
      @include transform(40deg); // 180
    }
    &:nth-child(3) { 
      @include transform(80deg); // 80
    }
    &:nth-child(4) {
      @include transform(120deg); // 120
    }
    &:nth-child(5) {
      @include transform(160deg);
    }
    &:nth-child(6) {
      @include transform(200deg);
    }
    &:nth-child(7) {
      @include transform(240deg);
    }
    &:nth-child(8) {
      @include transform(280deg);
    }
    &:nth-child(9) {
      @include transform(320deg);
    }
  }
}

@-moz-keyframes rotating {
  @include rotating;
}

@-webkit-keyframes rotating {
  @include rotating;
}

@-o-keyframes rotating {
  @include rotating;
}

@keyframes rotating {
  @include rotating;
}

.unselectable {
    pointer-events: none;

    // below didn't make a difference in localhost, but just in-case
    // different enironments
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -o-user-select: none;
    user-select: none;
}
</style>