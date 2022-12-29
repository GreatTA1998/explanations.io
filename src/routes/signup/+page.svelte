<div class="flexy">
	<div class="top-app-bar-container flexor">
		<TopAppBar bind:this={topAppBar} variant="standard" style="background-color: hsl(0,0%,0%, 0.80);">
			<Row>
				<Section>
					<img src="logo.png" width="52" height="46" style="margin-left: 0px;">
					<Title style="font-size: 1.95rem; padding-left: 6px">
						Explain
					</Title>
					<a href="https://medium.com/mit-soul" target="_blank" style="text-decoration-color: transparent;">
						<Button style="margin-left: 40px;">
							Blog
						</Button>
					</a>
					<a href="https://github.com/verypopularguy/explain" target="_blank" style="text-decoration-color: transparent;">
						<Button style="margin-left: 20px;">
							Github
						</Button>
					</a>
				</Section>

				<Section align="end" toolbar>
					<Button variant="outlined">
						Log in
					</Button>
				</Section>
			</Row>
		</TopAppBar>
	</div>
</div>

<AutoAdjust {topAppBar}>
  <TabBar tabs={tabs} bind:active let:tab style="background-color: rgb(238, 238, 238)" variant="dense">
    <!-- Note: the `tab` property is required! -->
    <!-- stacked -->
    <Tab {tab} minWidth indicatorSpanOnlyContent>
      <!-- <Icon class="material-icons">{tab.icon}</Icon> -->
      <Label>{tab.label}</Label>
    </Tab>
  </TabBar>

  <div>
    {#if active.label === 'PILOTED CLASSES'}
      <!-- <TabBar tabs={pilotedClasses} bind:selectedClass let:tab={tab2} style="background-color: rgb(238, 238, 238)" variant="dense">
        <Tab tab={tab2} minWidth indicatorSpanOnlyContent>
          <Label>{tab2.label}</Label>
        </Tab>
      </TabBar> -->
    {:else}
      <div>
        Explain is new, and most classes have unique circumstances that makes it hard to start. 
        However, if you're willing to take experimental risk, sign up. 

        If you sign up for $10, our team will devote everything we can into establishing a pilot for you class.
        In return for early sign-up, you get a 75% discount rate i.e. $10 for the entire semester. 
        Worst-case if we can't start a pilot for your class, you'll automatically the full refund by February 10th. 
      </div>

      <div style="display: flex; justify-content: space-evenly">
        <div>
          Request a new class
          <input placeholder="e.g. 18.06">
          <button>IAP ASE</button>
          <button>Spring 2022</button>
          <button>Summer ASE</button>
        </div>
      </div>
    {/if}
  </div>

  {#if active.label === 'PILOTED CLASSES'}
    <Card>
      <Content>
        <div class="section-container">
          <div class="section-title">
            14.01 - Microeconomics
          </div>

          <div class="section-subtitle">
            Explain piloted in 14.01 Fall 2022; the Economics Department now provides a 90% subsidy to all students
          </div>

          <Button color="secondary" variant="raised" style="height: 75px; margin-top: 40px;">
            <Label style="text-transform: none; padding-left: 20px; padding-right: 20px; padding-top: 50px; padding-bottom: 50px; font-size: 1.2rem; border-radius: 6px; font-weight: 600">
              Early sign-up for $1/semester
            </Label>
          </Button>
        </div>

        <div class="section-container">
          <div>
            Most viewed videos (see right)
          </div>

          <div>
            600 total view-minutes
          </div>

          <div>
            10 average full-duration views per video
          </div>

          <Button variant="outlined">
            Explore Fall 2022 server
          </Button>
        </div>

        <div class="section-container">
          <div class="section-title">
            Tutor editorial
          </div>
          <div class="section-subtitle">
            What we learnt from observing 14.01 across semesters
          </div>

          <div class="editorial-font-styles" style="margin-top: 40px;">
            What's special about 14.01 is that lecture focuses on the intuition, 
            so the math needed for pset rests on the 1 hour recitation each week. 
          
            Naturally, a common student request is: "How do we setup this math problem?" 
            and "Can we review the math". 

            f(x, y): bombardment with technical language like Marginal Rate of Substitution and Marginal Rate of Transformation. 
            These terms can cause misconceptions.
            
            For example, "substitution effect".

            To avoid these pitfalls in the first place, we like to spend 10 minutes on a 
            to clearly review the constrained optimization of f(x, y), derive why the maximization condition is df/dx / df/dy 

            THEN look at it in economic terms - for example Marginal Utility per dollar.             
          
            After week 3, as the class moves to producer theory, the curve of ATC, ATC. 
              1. Too many curves, most of them irrelevant later
              2. Sequence in which concepts are introduced is reversed 
                  "Cost minimization" 
                  Fuzzy use of language
              3. There are just concepts, and the concepts are very well taught.
        
            
            Knowing why we're obessed with how price elasticity:
              - Cross-price elasticity
              - price elasticity
              - income elasticity

            Essentially, quantity of goods is what really matters, what we care about.
            Does everyone get cars.

            Price is the COMMUNICATION. 


            We lose track of the notion of "invisible" hands. 
            Really the class is building the economy assuming individuals are selfish, and companies are selfish. 
            What would happen? 

            That means you can derive 80% of the course with just knowing 2 very basic equations 
            and knowing how to do constrained optimization of 2 variables f(x, y) 
              - u(x, y) 
              - Pi ()

            And welfare economics. The course then extends off, but this is the most HASS part of the course, 
            and students usually don't have a problem with it. 
        
          </div>

          <div style="margin-bottom: 40px;"></div>

          <a href="" target="_blank" style="text-decoration: none !important;">
            <Button variant="outlined">
              Read full editorial
            </Button>
          </a>
        </div>
        <!-- End of page container -->
      </Content>
    </Card>
  {/if}

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
</AutoAdjust>

<script>
  import Card, {
    Content,
    PrimaryAction,
    Actions,
    ActionButtons,
    ActionIcons,
  } from '@smui/card';
  import TopAppBar, { Row, Section, Title, AutoAdjust } from '@smui/top-app-bar';

  import TabBar from '@smui/tab-bar'
	import Tab, { Icon, Label } from '@smui/tab'
  import Textfield from '@smui/textfield'
  import Button from '@smui/button';

  let topAppBar

  let tabs = [{ label: 'PILOTED CLASSES', icon: 'hail'}, { label: 'REQUEST NEW CLASS', icon: 'local_taxi'}]
  let active = tabs[0]

  let pilotedClasses = [{ label: '14.01', icon: 'hail'}]
  let selectedClass = pilotedClasses[0]
  let tab2
</script>

<style>
  .section-container {
    padding: 40px 40px; 
  }

  .section-title {
    font-size: 4rem; font-family: sans-serif; font-weight: 600; color: hsl(0,0%,0%, 0.80);
  }

  .section-subtitle {
    font-size: 1.8rem; font-family: sans-serif; font-weight: 600; color: hsl(0,0%,0%, 0.80); opacity: 0.8
  }

  .editorial-font-styles {
    font-family: UberMoveText, system-ui, Helvetica Neue, Helvetica, Arial, sans-serif; font-weight: 400; font-size: 1.4rem;
  }
</style>