<!-- 
  For the time being, this will be hard-coded as 14.01's page,
  which will also be the default page for reference 
  when exploring pricing and availability

  TO-DO: 
  
  As well as last semester's top videos, stats, and a brief bio for the teacher.

  Don't make unnecessary enemies with the TAs

  NEW CLASS
  Communicate that you can sign up for any class, including ASEs. The goal is to get students who believe in this 
  product so much they're willing to sign-up and pay. This is the most important signal. 

  Explain what happens with their money - if the department funds it, you'll be refunded, 75% off. 
  And yes, it's a free market economy. 
  If for some reason it doesn't happen, you get a full refund. 
-->

<Card style="height: 100%; overflow-y: auto;">
    <Content>
      <div class="section-container">
        <div class="section-title">
          14.01 - Microeconomics
        </div>

        <div class="section-subtitle">
          Explain piloted in 14.01 Fall 2022
        </div>

        <Button color="secondary" variant="raised" style="height: 75px; margin-top: 40px;">
          <Label style="text-transform: none; padding-left: 20px; padding-right: 20px; padding-top: 50px; padding-bottom: 50px; font-size: 1.2rem; border-radius: 6px; font-weight: 600">
            Join for $20/week
          </Label>
        </Button>
        <Button variant="outlined">
          Explore Fall 2022 server
        </Button>
        <div>Cancel & refund any time, any reason within 1st week</div>
      </div>

      <div class="section-container">
        <div style="display: flex">
          <div>
            <div class="section-title">
              Peer Tutors
            </div>
            <!-- No statistics for now, or just write it in the bio -->
            <!-- <div class="section-subtitle">
              Elton Lin
            </div>             -->
            <div style="display: flex; justify-content: space-between;">
              <div class="tutor-business-card">
                <Card>
                  <PrimaryAction on:click={() => clicked++} padded>
                    Elton Lin
                    <br>
          
                    6-14, '20
                    <br>
                    600 combined view-minutes for Spring 2020
                  </PrimaryAction>
                </Card>
              </div>
          
              <div class="tutor-business-card">
                <Card>
                  <PrimaryAction on:click={() => clicked++} padded>
                    Be a 18.06 tutor
                    <br>
                    Just write a short bio
                    and record an example video explanation
                    <br>
                  </PrimaryAction>
                  <Button>
                    Sign up to be a 14.01 tutor
                  </Button>
                  <!-- <Action>
                    Get started
                  </Action> -->
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- End of section -->

      <div class="section-container">
        <ImageCarousel>

           <!-- NOTE JUST IN-CASE: ReusableDoodleVideo already has its own RenderlessListenToBoard -->
           {#if topFiveVideosIDs.length > 0}
            {#key idxOfCurrentVideo}
              {#each topFiveVideosIDs as id}
                <div class="card">
                  <RenderlessListenToBoard dbPath={boardsCollectionDbPath + '/' + id} 
                    let:boardDoc={boardDoc}
                  > 
                    <div>
                      <ReusableDoodleVideo 
                        boardDbPath={boardsCollectionDbPath + '/' + id}
                        canvasWidth={600}
                        canvasHeight={400}
                      />
                    </div>

                    {#if boardDoc}
                      <div>
                        Minutes viewed: {boardDoc.viewMinutes.toFixed(1)}
                      </div>
                      <div class="mozilla-documentation-styles">
                        {boardDoc.description}
                      </div>
                    {/if}
                  </RenderlessListenToBoard>
                </div>
              {/each}
            {/key}
          {/if}
        </ImageCarousel>
      </div>




      <div class="section-container">
        <div class="section-title">
          Editorial
        </div>
        <div class="section-subtitle">
          What's special about 14.01
        </div>

        <!--  editorial of why 14.01 is special, 
  how Explain will complement recitation and Office Hours, etc.  -->
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

      <div class="section-container">
        <div class="section-title">
          Reviews
        </div>

        <TextAreaAutoResizing></TextAreaAutoResizing>
      </div>

      <!-- End of page container -->
    </Content>
  </Card>

  <!-- </div>  -->
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
  import Drawer, { AppContent } from '@smui/drawer'
  import List, { Item, Text } from '@smui/list'
  import ReusableDoodleVideo from '$lib/ReusableDoodleVideo.svelte'
  import { collection, query, orderBy, limit, getDocs, getFirestore, updateDoc, arrayUnion, arrayRemove, increment, doc } from 'firebase/firestore'
  import RenderlessListenToBoard from '$lib/RenderlessListenToBoard.svelte'
  import TextAreaAutoResizing from '$lib/TextAreaAutoResizing.svelte';
  import ImageCarousel from '$lib/ImageCarousel.svelte';

  let topAppBar

  let tabs = [{ label: 'PILOTED CLASSES', icon: 'hail'}, { label: 'REQUEST NEW CLASS', icon: 'local_taxi'}]
  let active = tabs[0]

  let pilotedClasses = [{ label: '14.01', icon: 'hail'}]
  let selectedClass = pilotedClasses[0]
  let tab2

  let topFiveVideosIDs = []
  let idxOfCurrentVideo = 0 

  const id = 'Mev5x66mSMEvNz3rijym' // 14.01
    const boardsCollectionDbPath = `classes/${id}/blackboards`

  // fetch top 5 explanations in 14.01, with the text and the videos
  // have tutors be able to offer classes all by themselves (almost like Shopify, all you need is an iPad)
  // short on cash? 
  async function fetchTopFiveVideos () {
    const db = getFirestore()
    const blackboardsRef = collection(db, boardsCollectionDbPath)
    const q = query(blackboardsRef, orderBy('viewMinutes', 'desc'), limit(5))
    
    const querySnapshot = await getDocs(q) 
    const temp = []
    querySnapshot.forEach(doc => {
      console.log(doc.id, " => ", doc.data())
      temp.push(doc.id)
    })
    topFiveVideosIDs = [...temp]
  }

  fetchTopFiveVideos()
</script>

<style>
  .drawer-container {
    height: 100vh;
    position: relative;
    display: flex;
  }

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

  .mozilla-documentation-styles {
    font-family: "Segoe UI", Roboto, sans-serif; 
    font-size: 1.4rem;
    line-height: 1.6;
    letter-spacing: 0.001em;
    color: rgba(1, 11, 1, 1);
  }

  .card:hover {
    background-size: auto 100%;
  }
  .card:first-child { margin-left: 0; }
  .card:last-child { margin-right: 0; }

  .card p {
    margin: 0;
    height: 100%;
    display: grid;
    place-items: center;
    font-size: 10vw;
    color: white;
    transition: all 0.3s;
    transform: scale(1);
  }
  .card:hover p {
    background-color: rgba(0,0,0,0.3);
    transform: scale(1.3);
  }

  .tutor-business-card {
    max-width: 400px; 
    width: 90%;
  }

</style>