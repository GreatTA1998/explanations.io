<div class="step-container" style="margin-bottom: 160px;">
  <div class="step-one-two-three-flexbox">
    <div style="max-width: 800px">
      <div class="step-one-two-three-font">
        {title}
      </div>
      <div class="step-title-font-styles">
        {subtitle}
      </div>
      <div class="step-description-font-styles">
        {description}

        <slot name="step-description-slot">

        </slot>
      </div>
    </div>

    <slot>

    </slot>
  </div>
</div>

<script>
  export let title = 'Step 1'
  export let subtitle = 'Open the website to type a question'
  export let description = 'Ask about pset questions, important concepts, anything.'
</script>


<style>
.step-one-two-three-flexbox {
	display: flex; 
	align-items: center; 
	justify-content: space-between; 
	flex-wrap: wrap;
}

.step-one-two-three-font {
	color: #000000; 
	opacity: 0.5; 
	font-family: sans-serif; 
	margin-bottom: 12px; 
	font-size: 1.2rem;
}

.step-description-font-styles {
	font-family: UberMoveText, system-ui, Helvetica Neue, Helvetica, Arial, sans-serif;; font-weight: 400; font-size: 1.4rem;
}

@media screen and (max-width: 479px) {
	.step-description-font-styles {
		font-size: 1rem;
	}	
}
</style>
