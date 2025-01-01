<!-- Copied from https://codepen.io/RustamAbraham/pen/BWzVxo -->
{#if scaleFactor}
  <div class="container" style="
    margin: 0 auto;
    transform: scale({scaleFactor});
    transform-origin: top center;
    --galleryItemHeightIncludesPx: {galleryItemHeight}px;
    --galleryItemWidthIncludesPx: {galleryItemWidth}px;
    width: 360px;
    height: 240px; 
    perspective: 3200px;
  ">
    <div id="carousel">
      {#each galleryVideos as galleryVideo}
        <div class="gallery-item" style="border: none;">
          <FetchStrokes 
            dbPath={galleryVideo.dbPath}
            let:fetchStrokes={fetchStrokes}
            let:strokesArray={strokesArray}
            autoFetchStrokes={false}
          > 
            <NewHDBlackboard
              {strokesArray}
              thumbnailWidth={galleryItemWidth}
              willDrawOneByOne={true}
              on:intersect={fetchStrokes}
            />
          </FetchStrokes>
        </div>

        <div class="gallery-item unselectable"></div>
      {/each}
    </div>
  </div>
{/if}

<script>
  // TO-DO: fix drifting center of rotation
  import FetchStrokes from '$lib/Renderless/FetchStrokes.svelte'
  import NewHDBlackboard from '$lib/Blackboard/NewHD.svelte'
  import { onMount } from 'svelte'

  export let galleryVideos

  const galleryItemWidth =  480
  const galleryItemHeight = 360

  let scaleFactor

  onMount(() => {
    scaleFactor = window.innerWidth / (1600) 
  })
</script>


<style lang="scss">
@mixin transform($deg) {
  // RADIUS of rotation
  transform: rotateY($deg) translateZ(660px);  // rotateY($deg) //660px
}

@mixin transform-origin() {
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
  animation: rotating 40s linear infinite;
  // &:hover {
  // animation-play-state:paused;
  // -o-animation-play-state:paused;
  // -moz-animation-play-state:paused;
	// -webkit-animation-play-state:paused;
  // }
  .gallery-item {
    display: block;
    box-sizing: border-box; // so same size as videos with/without border
    position: absolute; // removing this will create a spiral
    // Ratio of width:height is 3:2
    width: var(--galleryItemWidthIncludesPx);  
    height: var(--galleryItemHeightIncludesPx);

    // // height: 240px; // 240
    border: 4px solid #000;
    // border: 1px solid rgba(112, 112, 112, 0.8);
    // border-left: none;
    // border-bottom: none;
    img {
      width:100%;
      height:100%;
      object-fit: cover;
    }
    &:nth-child(1) {
      @include transform(0deg);
    }
    &:nth-child(2) {
      @include transform(45deg); // 180
    }
    &:nth-child(3) { 
      @include transform(90deg); // 80
    }
    &:nth-child(4) {
      @include transform(135deg); // 120
    }
    &:nth-child(5) {
      @include transform(180deg);
    }
    &:nth-child(6) {
      @include transform(225deg);
    }
    &:nth-child(7) {
      @include transform(270deg);
    }
    &:nth-child(8) {
      @include transform(315deg);
    }
    // &:nth-child(9) {
    //   @include transform(320deg);
    // }
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