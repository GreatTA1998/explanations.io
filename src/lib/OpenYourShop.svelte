To become a tutor, all you need is record a video, so students can get a feel of how you explain things:
  - A blackboard video
  - An editorial


<input placeholder="Phone number">
<div>Your number is the ID of your shop; you can modify and delete it anytime</div>



<h2>Set Up Shop</h2>

<h4>Video Examples</h4>

<div style="position: relative; width: {$maxAvailableWidth}px; height: {$maxAvailableHeight}px">
  <Blackboard strokesArray={[]}/>
</div>
<div>Bio</div>
<TextAreaAutoResizing value={''} placeholder={'e.g year and major, teaching style, any beliefs you have about teaching'}/>
<div>Editorial</div>
<TextAreaAutoResizing value={''} placeholder='Talk about your insights about the class, why might students want your tutoring despite existing resources'/>

<script>
  import TextAreaAutoResizing from '$lib/TextAreaAutoResizing.svelte';
  import Blackboard from '$lib/Blackboard.svelte'
  import { maxAvailableHeight, maxAvailableWidth } from '../store.js';

  maxAvailableHeight.set(600)
  maxAvailableWidth.set(800)

  // This component will be used when "offering a class" - which will upload the profile AND create the class
  // or in the class that is already demanded by a student (which will upload the profile onto the existing class)

  // SETUP SECTION
  // You need to enter a Kerberos
  //    - you can modify it anytime
  //    - you can delete it anytime (by creating a phone account)

  // ACTUAL SHOPIFY SECTION
  // Bio: about yourself
  // Editorial: your insights about the class
  // Video portfolio: help students understand your teaching style (record a video)
  //   (you can record several videos in the future)

  // you need to think through how you can let the tutor set up shop
</script>