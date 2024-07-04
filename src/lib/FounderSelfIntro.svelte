<div style="display: flex; justify-content: center; padding: 24px;">
  <div style="max-width: 720px; display: flex; flex-direction: column; gap: 16px;">
    <div class="arcane-heading">
      About explanations.app
    </div>
    
    <blockquote class="arcane-quote">
      I noticed how often a casual, 5-minute explanation from someone great would save me from hours of pointless suffering.
    </blockquote>
  
    <div class="arcane-paragraph">
      When I was studying in college, I often had to wait 40-60 minutes in line just to get 5 minutes of “help” from a TA - when I needed 1-2 hours. 
      I lost count of the times I’ve been abandoned in Office Hours, or signed up for “free tutoring” that never became available. 
      Yet I noticed how often a casual, 5-minute explanation from someone great would save me from hours of pointless suffering.
    </div>

    <div class="arcane-paragraph">
      I think "struggling is necessary in learning" is too often used to justify inefficient Office Hours, poor material, 
      and overly concise solutions that not only confuse students, but TAs themselves.
      Struggling on a hard problem is only meaningful if the basics are well-taught in the first place. 
    </div>

    <hr style="border: 2px solid black;">

    <div class="arcane-paragraph">
      It turns out <a href="https://freakonomics.com/podcast/the-university-of-impossible-to-get-into/" target="_blank">universities operate like luxury markets</a>, where they compete on prestige. Yet prestige in education isn't based on teaching performance, but
      how prestigious you already are (peer-assessed reputation), how much money you have (endowment size), how many papers you publish (research output), how many students you turn away (selectivity), 
      and many factors that have nothing to do with teaching performance, yet have disproportionate impact on the overall score.
    </div>

    <div class="arcane-paragraph">
      (I concede that prestige create secondary effects for the institution and its members - effects that are highly valuable. It attracts world talent to the institution, resulting in a network effect that attracts even more resources. 
      It's a good deal for those who get the credentials and benefit from peer effects. But this misses the point. Of course a monopoly benefits from its monopoly status! The point is that it has negative effects for everyone else - with the ridiculous tuition expenses being the obvious tell.)
    </div>

     <div class="arcane-paragraph">
      This creates perverse incentives, incentives that explains all kinds of perverse phenomenon. 
      For one, how a school can have
      <a href="https://docs.google.com/document/d/1jeW_oJqI9WjQtBOjc7NPdVkx0GRuEc0Mjr8Gjo_CEqM/edit?usp=sharing" target="_blank">
        110 students signing a petition outcrying that TAs didn't even show up to Office Hours before final exams</a> and still be ranked #1.
        This contrasts with sports, where teams aren't valued by how much famous they are, how much they spend, but whether they actually win.
     </div>

    <div class="arcane-paragraph">
      Systematically, there is no skin-in-the-game for universities to develop students, as supposed to filtering them. 
      Even if instructors are passionate, it often makes things worse: banning video recordings due to its effect on attendance. Restricting access to past material to prevent cheating and misuse, 
      to the detriment of any reasonable student.
      Insisting on 1-on-1 Office Hours no matter how overwhelmed the TAs are. 
      In a pedagogical monopoly, there is simply no mechanism for conservative, backward beliefs to change.
    </div>

    <div class="arcane-paragraph">
      In other words, "We know what's best for you, more than yourself."
      To be deeply opinionated about how you must learn, but not care at all if you actually learn well, is a deadly combination.
      Even the most toxic, controlling parents fare better than paternalistic instructors - at least they care if you actually succeed. 
    </div>

    <hr style="border: 2px solid black;">

    <div class="arcane-paragraph">
      I love Youtube and KhanAcademy, they've have shown the promise of making great explanations accessible to people.
      As imperfect and flawed it is, especially that students need social structure, it's far better than the
      rottenness of higher education.
      But there is far too few content creators for advanced subjects.
    </div>

    <div class="arcane-paragraph"> 
      explanations.app is trying to resemble a crowdfund model, where every student pays a little, so creators can explain things they love without worrying about "coming up with video ideas", time-consuming editing, virality and unpredictable recommendation algorithms.
    </div>

    <div class="arcane-paragraph">
      I quit my job at Apple in 2020 to work on this full-time. Although I failed in Boston, I learnt a lot, and now I live in Tokyo searching for inspiration, 
      and to save money, 
      living in a $450/month sharehouse, taking out the trash for everyone. For as long as I believe this is right, <b>I'm willing to do whatever it takes to make this happen</b>.
    </div>

    <div class="arcane-paragraph">
      If you're considering teaching or learning on explanations.app, give me a chance to work for you!
    </div>

    <img class="arcane-image" src="https://firebasestorage.googleapis.com/v0/b/feynman-mvp.appspot.com/o/IMG_0227.JPG?alt=media&token=0ace8bae-ea67-4346-a9a2-34b90efd416a">
  
    <div style="width: 300px;">
      <CreatorChannelCard
        on:click={() => goto(`/user/xC05mXTCFIRxLnyxfKnxY7oNBPi2`)}
        firstNameAndKeyInfo="Elton Lin"
        collegeAndYear="Founder"
        bio="elton@explanations.app"
      />
    </div>
  </div>
</div>

<script>
  import { goto } from '$app/navigation';
  import CreatorChannelCard from '$lib/CreatorChannelCard.svelte'
</script>

<style>
  /* Inspired by arcanelabs.ai */
  .arcane-quote {
    border-left: 2px solid #efe2d7;
    padding: 0 24px;
    margin: 0px;
    font-style: italic; 
    line-height: 180%;
    color: #0c1d37;
  }

  .arcane-heading {
    color: #0c1d37;
    font-size: var(--fs-700);
    font-weight: 600;
  }

  .arcane-paragraph {
    font-size: 16px; 
    line-height: 180%;
    color: #3b4555;
  }

  .arcane-image {
    width: 300px;
    height: 200px;
  }
</style>