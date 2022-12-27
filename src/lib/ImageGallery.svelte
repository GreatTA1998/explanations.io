<!-- Copied from https://codepen.io/RustamAbraham/pen/BWzVxo -->

<!-- <html> -->
<div class="container" style="margin-left: 400px; margin-bottom: 160px;">
  <div id="carousel">
    <div style="width: 268px; height: 120px; border: solid red 2px;">
      <!-- <RenderlessListenToBoard dbPath={boardsDbPath + boardID} let:boardDoc={boardDoc}>
        {#if boardDoc}
          <RenderlessFetchStrokes dbPath={boardsDbPath + boardID}
            let:fetchStrokes={fetchStrokes}
            autoFetchStrokes
            let:strokesArray={strokesArray}
          >
            <div use:lazyCallable={fetchStrokes} style={`width: ${$canvasWidth}px; height: ${$canvasHeight + 40}px; position: relative`}>
              <DoodleVideo 
                {strokesArray} 
                audioDownloadURL={boardDoc.audioDownloadURL}
                backgroundImageDownloadURL={boardDoc.backgroundImageDownloadURL}
              > 
              </DoodleVideo>
            </div>
          </RenderlessFetchStrokes>
        {/if}
      </RenderlessListenToBoard> -->
    </div>

    <div style="width: 268px; height: 120px; border: solid red 2px"></div>
    <div style="width: 268px; height: 120px; border: solid red 2px"></div>   
    
    <div style="width: 268px; height: 120px; border: solid red 2px"></div>



    <div style="width: 268px; height: 120px; border: solid red 2px">
      <!-- <RenderlessListenToBoard dbPath={`classes/USb1mGxeLqufbgbPhSbV/blackboards/` + 'K7kZAAhGIhlcYWTjzh4q'} let:boardDoc={boardDoc}>
        {#if boardDoc}
          <RenderlessFetchStrokes dbPath={'classes/USb1mGxeLqufbgbPhSbV/blackboards/' + 'K7kZAAhGIhlcYWTjzh4q'}
            let:fetchStrokes={fetchStrokes}
            autoFetchStrokes
            let:strokesArray={strokesArray}
          >
            <div use:lazyCallable={fetchStrokes} style={`width: ${$canvasWidth}px; height: ${$canvasHeight + 40}px; position: relative`}>
              <DoodleVideo 
                {strokesArray} 
                audioDownloadURL={boardDoc.audioDownloadURL}
                backgroundImageDownloadURL={boardDoc.backgroundImageDownloadURL}
              > 
              </DoodleVideo>
            </div>
          </RenderlessFetchStrokes>
        {/if}
      </RenderlessListenToBoard> -->
    </div>

    <div style="width: 268px; height: 120px; border: solid red 2px"></div>

    <div style="width: 268px; height: 120px; border: solid red 2px">
      <!-- <RenderlessListenToBoard dbPath={boardsDbPath + boardID} let:boardDoc={boardDoc}>
        {#if boardDoc}
          <RenderlessFetchStrokes dbPath={boardsDbPath + boardID}
            let:fetchStrokes={fetchStrokes}
            autoFetchStrokes
            let:strokesArray={strokesArray}
          >
            <div use:lazyCallable={fetchStrokes} style={`width: ${$canvasWidth}px; height: ${$canvasHeight + 40}px; position: relative`}>
              <DoodleVideo 
                {strokesArray} 
                audioDownloadURL={boardDoc.audioDownloadURL}
                backgroundImageDownloadURL={boardDoc.backgroundImageDownloadURL}
              > 
              </DoodleVideo>
            </div>
          </RenderlessFetchStrokes>
        {/if}
      </RenderlessListenToBoard> -->
    </div>

    <div style="width: 268px; height: 120px; border: solid red 2px"></div>

    <div style="width: 268px; height: 120px; border: solid red 2px">
      <!-- <RenderlessListenToBoard dbPath={`classes/AsUl1VWQ7zzxZsD5epL7/blackboards/` + 'AsUl1VWQ7zzxZsD5epL7'} let:boardDoc={boardDoc}>
        {#if boardDoc}
          <RenderlessFetchStrokes dbPath={`classes/AsUl1VWQ7zzxZsD5epL7/blackboards/` + 'AsUl1VWQ7zzxZsD5epL7'}
            let:fetchStrokes={fetchStrokes}
            autoFetchStrokes
            let:strokesArray={strokesArray}
          >
            <div use:lazyCallable={fetchStrokes} style={`width: ${$canvasWidth}px; height: ${$canvasHeight + 40}px; position: relative`}>
              <DoodleVideo 
                {strokesArray} 
                audioDownloadURL={boardDoc.audioDownloadURL}
                backgroundImageDownloadURL={boardDoc.backgroundImageDownloadURL}
              > 
              </DoodleVideo>
            </div>
          </RenderlessFetchStrokes>
        {/if}
      </RenderlessListenToBoard> -->
    </div>
  </div>
</div>


<!-- .container
    #carousel
        div
            img(src="http://static.superiorwallpapers.com/images/lthumbs/2016-03/11645_Elephant-runing-in-the-jungle-HD-wild-animal-wallpaper.jpg")
        div
            img(src="http://wallpaper-gallery.net/images/wild-animals-wallpaper/wild-animals-wallpaper-26.jpg")
        div
            img(src="https://lh6.ggpht.com/6TsHWuxMlid2E5sHB-j6MqFlAbJzEnEBv3khmIcfFHYe9_YMNzxi5jOpUa3NBMXLK6E=h900")
        div
            img(src="http://wallpaper-gallery.net/images/wallpapers-of-wild-animals/wallpapers-of-wild-animals-27.jpg")
        div
            img(src="http://pixelperc.com/wp-content/uploads/2016/09/download-wallpapers-free-wild-animals-wallpaper-inside-wild-animals-wallpapers-hd-free-download-728x453.jpg")
        div
            img(src="http://chainimage.com/images/wild-animals-wallpaper-retina-hd-download-8.jpg")
        div
            img(src="http://livehdwallpaper.com/wp-content/uploads/2016/08/Wild-Animals-Wallpaper-HD-Pictures.jpg")
        div
            img(src="http://www.pixelstalk.net/wp-content/uploads/2016/03/Cool-Wild-Animal-Wallpaper-For-Desktop-620x388.jpg")
        div
            img(src="http://wallpaper-gallery.net/images/wild-animals-wallpaper/wild-animals-wallpaper-15.jpg") -->
<!-- </html> -->

<script>
  import { user, canvasWidth, canvasHeight, drawerWidth, adminUIDs } from '../store.js'
  import DoodleVideo from '$lib/DoodleVideo.svelte'
	import RenderlessFetchStrokes from '$lib/RenderlessFetchStrokes.svelte'
  import RenderlessListenToBoard from '$lib/RenderlessListenToBoard.svelte'
	import { lazyCallable } from '../helpers/actions.js'

  let boardsDbPath = `classes/Mev5x66mSMEvNz3rijym/blackboards/`
	let boardID = 'B0npFZMsV3PMAxapkGy1'

  canvasWidth.set(560)
	canvasHeight.set(340)


</script>


<style lang="scss">
@mixin transform($deg) {
  -webkit-transform: rotateY($deg) translateZ(288px);
     -moz-transform: rotateY($deg) translateZ(288px);
      -ms-transform: rotateY($deg) translateZ(288px);
       -o-transform: rotateY($deg) translateZ(288px);
          transform: rotateY($deg) translateZ(288px);
}

@mixin transform-origin() {
  -webkit-transform-origin: 60% 50%;
     -moz-transform-origin: 60% 50%;
       -o-transform-origin: 60% 50%;
      -ms-transform-origin: 60% 50%;
          transform-origin: 60% 50%;
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
    @include transform_(-360deg);
  }
}

// container size has an effect
.container {
  width: 210px;
  height: 140px;
  // position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  -webkit-perspective: 1100px; 
  -moz-perspective: 1100px;
  -ms-perspective: 1100px;
  perspective: 1100px; // was 1100
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
  -webkit-animation: rotating 20s linear infinite;
  -moz-animation: rotating 20s linear infinite;
  -o-animation: rotating 20s linear infinite;
  -ms-animation: rotating 20s linear infinite;
  animation: rotating 20s linear infinite;
  // &:hover {
  // animation-play-state:paused;
  // -o-animation-play-state:paused;
  // -moz-animation-play-state:paused;
	// -webkit-animation-play-state:paused;
  // }
  div {
    display: block;
    position: absolute;
    // width: 268px;
    // height: 120px;
    // border: 2px solid #000;
    img {
      width:100%;
      height:100%;
      object-fit: cover;
    }
    &:nth-child(1) {
      @include transform(0deg);
    }
    &:nth-child(2) {
      @include transform(40deg); // 268
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
</style>