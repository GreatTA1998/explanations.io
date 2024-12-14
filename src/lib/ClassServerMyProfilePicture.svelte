<!-- notice the detail, we  appended 'px' for the CSS variable version of the prop -->
<a
  class="circle" 
  style="
  --radiusInPixels: {radiusInPixels}px;
  background-color: {circleBorderColor};
  margin: 0px;
">
	<img 
    on:click
    height={radiusInPixels * 2} 
    width="{radiusInPixels * 2}" 
    src="https://media.istockphoto.com/id/1072204920/vector/cute-cartoon-beaver.jpg?s=170667a&w=0&k=20&c=D41mYMs-actgfBdb8WvLt6CFyP91dhqGzXlZJjDqhKg=" 
    alt="Cloud Chen"
  >
</a>

<script>
  export let radiusInPixels = 64
  export let circleBorderColor = ''
</script>

<style>
  /* body {
  background: rgba(255,255,240,0.8);
	font: 100 14px sans-serif;
	color: #000;
  text-shadow: 0 1px 1px rgba(255,255,255,0.1);
	text-align: center;	
} */
::-moz-selection {
  background: rgba(0,0,0,0.1);
}
::selection {
  background: rgba(0,0,0,0.1);
}
h1 {
  font-weight: 100;
  font-size: 2.7em;
}
h3 {
  color: #111222;
  font-size: 1.6em;
}
a {
  color: RoyalBlue;
  font-weight: normal;
  text-decoration: none;
}
/* a:hover {
  color: CornflowerBlue;
} */

/* Circle Avatar Styles */
.circle {
	line-height: 0;		/* remove line-height */ 
	display: inline-block;	/* circle wraps image */
	margin: 5px;
  border: 4px solid rgba(200,200,200,0.4);
	border-radius: 50%;	/* relative value */
	/*box-shadow: 0px 0px 5px rgba(0,0,0,0.4);*/
	transition: linear 0.25s;
  height: calc(var(--radiusInPixels) * 2);
  width: calc(var(--radiusInPixels) * 2);
}
.circle img {
	border-radius: 50%;	/* relative value for
				   adjustable image size */
}
/* .circle:hover {
	transition: ease-out 0.2s;
  border: 4px solid rgba(0,0,0,0.2);
  -webkit-transition: ease-out 0.2s;
} */
a.circle {
  color: transparent;
} /* IE fix: removes blue border */	

</style>