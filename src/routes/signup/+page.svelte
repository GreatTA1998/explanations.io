<!-- Use a tab (consistent style with the home page)-->
<!-- Available classes -->
<!-- Request a new class  -->
<TabBar tabs={tabs} let:tab bind:active style="background-color: rgb(238, 238, 238)" variant="dense">
  <!-- Note: the `tab` property is required! -->
  <!-- stacked -->
  <Tab {tab} minWidth indicatorSpanOnlyContent>
    <!-- <Icon class="material-icons">{tab.icon}</Icon> -->
    <Label>{tab.label}</Label>
  </Tab>
</TabBar>

<div>
  

</div>


<div style="display: flex; justify-content: space-evenly">
  <div>
    Available classes
  </div>

  <div>
    Request a new class
    <input placeholder="e.g. 18.06">
    <button>IAP ASE</button>
    <button>Spring 2022</button>
    <button>Summer ASE</button>
  </div>
</div>

<!-- 
  The above class selection will completely influence the content displayed here.

  EXISTING CLASS
  For example, if it's 14.01, it will showcase an editorial of why 14.01 is special, 
  how Explain will complement recitation and Office Hours, etc. 

  As well as last semester's top videos, stats, and a brief bio for the teacher.

  Don't make unnecessary enemies with the TAs

  NEW CLASS
  Communicate that you can sign up for any class, including ASEs. The goal is to get students who believe in this 
  product so much they're willing to sign-up and pay. This is the most important signal. 

  Explain what happens with their money - if the department funds it, you'll be refunded, 75% off. 
  And yes, it's a free market economy. 
  If for some reason it doesn't happen, you get a full refund. 
-->
<div>
  For each class, show last semester's server (if any) 
  A blog post describing the uniqueness of each class e.g. 14.01 blurb
  And show usage statistics (e.g. how many view-minutes, average full view count)
</div>

<script>
  import TabBar from '@smui/tab-bar'
	import Tab, { Icon, Label } from '@smui/tab'
  import Textfield from '@smui/textfield'

  let tabs = [{ label: 'Established classes', icon: 'hail'}, { label: 'Request new class', icon: 'local_taxi'}]
  let active = tabs[0]
</script>