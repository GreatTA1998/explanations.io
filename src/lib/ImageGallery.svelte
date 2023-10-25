<!-- Copied from https://codepen.io/RustamAbraham/pen/BWzVxo -->
<!--  style="border: 2px solid red;" -->
<div style="
  display: flex; justify-content: center; align-items: end;
  --galleryItemHeightIncludesPx: {galleryItemHeight}px;
  --galleryItemWidthIncludesPx: {galleryItemWidth}px;
">
  {#if scaleFactor}
    <div class="container" style="transform: scale({scaleFactor})">
      <div id="carousel">
        {#each galleryVideos as galleryVideo}
          <div class="gallery-item" style="border: none;">
            <RenderlessListenToBoard dbPath={galleryVideo.dbPath} let:boardDoc={boardDoc}>
              <ReusableDoodleVideo
                {boardDoc}
                canvasWidth={galleryItemWidth}
                canvasHeight={galleryItemHeight}
                showEditDeleteButtons={false}
                boardDbPath={galleryVideo.dbPath}
                on:video-start={pauseGalleryRotation}
                on:video-pause={startGalleryRotation}
              />

              {#if boardDoc}
                <div style="padding-top: 6px;">
                  <!-- the width is doubled for so formatting is not messed up for 2x font size (which then gets scaled down) -->
                  <div style="display: flex; width: {2*100}%;">
                    <ClassServerMyProfilePicture
                      radiusInPixels={14}
                      circleBorderColor={getRandomColor()}
                      on:click={() => goto(`profile/${galleryVideo.classID}/${boardDoc.creatorUID}`)}
                    />
                    <div style="margin-left: 4px; font-size: 2rem; transform: scale(0.5); transform-origin: top left;">
                      <div style="font-weight: 500;">
                        {galleryVideo.titleForDebugging}
                      </div>
                      
                      <div on:click={() => goto(`profile/${galleryVideo.classID}/${boardDoc.creatorUID}`)}
                        class="creator-channel-name"   
                       
                      >
                        {galleryVideo.creatorName}
                      </div>
                
                      <div style="display: flex; color: #282828;">
                        {roundedToFixed(boardDoc.viewMinutes, 0)} minutes viewed,
                        {galleryVideo.className}
                      </div>
                     </div>
                  </div>
                </div>
              {/if}
              
            </RenderlessListenToBoard>
          </div>

          <div class="unselectable gallery-item"></div>
        {/each}
      </div>
    </div>
  {/if}
</div>

<script>
  // TO-DO: fix drifting center of rotation
  import RenderlessListenToBoard from './RenderlessListenToBoard.svelte'
  import ReusableDoodleVideo from './ReusableDoodleVideo.svelte'
  import ClassServerMyProfilePicture from '$lib/ClassServerMyProfilePicture.svelte'
  import RenderlessFetchServerMemberDoc from '$lib/RenderlessFetchServerMemberDoc.svelte'
  import PresentationalBeaverPreview from '$lib/PresentationalBeaverPreview.svelte'
  import ReusableCreatorInfoCard from '$lib/ReusableCreatorInfoCard.svelte'
  import { getRandomColor, roundedToFixed } from '/src/helpers/utility.js'
  import { onMount } from 'svelte'
  import { goto } from '$app/navigation'

  export let galleryVideos

  let scaleFactor

  onMount(() => {
    scaleFactor = window.innerWidth / 1600
  })

  const galleryItemWidth =  480 * 0.95 // 4:3 aspect ratio for the board, now take into account audio slider
  const galleryItemHeight = 360 * 0.95

  function pauseGalleryRotation () {
    // document.getElementById("carousel").style.animationPlayState = "paused";
  }
  
  function startGalleryRotation () {
    // document.getElementById("carousel").style.animationPlayState = "running";
  }
</script>


<style lang="scss">
  .creator-channel-name {
    color: #282828;
  }

  .creator-channel-name:hover {
    cursor: pointer;
    color: purple;
    text-decoration: underline;
  }

  .youtube-title-font {
    // font-family: "Roboto","Arial",sans-serif;
    // font-size: 1.2rem; // 1.6
    // line-height: 1.3rem; // 2.2
    // font-weight: 500;
    // overflow: hidden;
    // display: block;
    // max-height: 4.4rem;
    // -webkit-line-clamp: 2;
    // display: box;
    // display: -webkit-box;
    // -webkit-box-orient: vertical;
    // text-overflow: ellipsis;
    // white-space: normal;
  }



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

// Container does not rotate
.container {  
  // conatiner does not rotate, its size does not have to match its gallery item children, 
  // but it cannot be too small or too big or it affects the geometry for some reason
  width: 360px; // was w h 210 and 140, then 360, 240
  height: 240px; 
  // position: absolute;
  // top: 50%;
  // left: 50%;
  transform: translate(-60%,-50%);

  // TOO HIGH: everything looks too flat
  // TOO LOW: the front videos look way too big, the back too small
  perspective: 3200px; // was 1100
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
  animation: rotating 100s linear infinite;
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
    height: calc(var(--galleryItemHeightIncludesPx) + 28px); // +30 for audio player -4 for visual illusion 

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