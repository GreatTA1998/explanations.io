<div style="display: flex; justify-content: center; padding: 24px;">
  <div style="max-width: 720px; display: flex; flex-direction: column; gap: 16px;">
    <div class="arcane-heading">
      About explanations.io
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
      I think the well-intentioned principle of "struggling is necessary in learning" is too often used to justify inefficient Office Hours, poor material, 
      and vague, concise solutions that confuse not only students, but even TAs themselves! How can I learn without fully understanding why something is right or wrong?
      Why glorify difficulty, without the commitment to provide proper feedback mechanisms?
    </div>

    <hr style="border: 2px solid black;">

    <div class="arcane-paragraph">
      It turns out <a href="https://freakonomics.com/podcast/the-university-of-impossible-to-get-into/" target="_blank">universities operate like luxury markets</a>, where they compete on prestige. Yet prestige in education isn't based on teaching performance, but
      how prestigious you already are (peer-assessed reputation), how much money you have (endowment size), how many papers you publish (research output), how many students you turn away (selectivity), 
      and many factors that have little to do with actual quality of teaching. This contrasts with sports, where teams aren't valued by how much famous they are, how much they spend, but if they're actually good. 
    </div>

    <div class="arcane-paragraph">
      (I concede that prestige creates secondary benefits that are highly valuable. It attracts world talent to the institution, resulting in a network effect that attracts even more resources. 
      It's a good deal for those who benefit from the credentials and peer effects. But this misses the point. 
      Monopolies poison the ecosystem, forcing consumers to spend $60,000/year for mediocre teaching, because it's the best product on the market).
    </div>

     <div class="arcane-paragraph">
      This creates perverse incentives, incentives that explains all kinds of perverse phenomenon. 
      For one, how a school can have a
      <a href="https://docs.google.com/document/d/1jeW_oJqI9WjQtBOjc7NPdVkx0GRuEc0Mjr8Gjo_CEqM/edit?usp=sharing" target="_blank">
        mass absence of TAs from Office Hours before final exams</a> and still be ranked world #1.
     </div>

    <div class="arcane-paragraph">
      Systematically, there is no skin-in-the-game for universities to develop students, as supposed to filtering them. 
      Even if instructors are passionate, they routinely cause harm: 
      <a href="https://imgur.com/gallery/we-purposely-choose-to-delay-release-of-lecture-recordings-4S7a0K0" target="_blank">banning video recordings due to its effect on attendance</a>, restricting access to past material to prevent cheating and misuse,
      insisting on 1-on-1 Office Hours no matter how overwhelmed the TAs are. 
      In a pedagogical monopoly where students have no alternatives, there is no true mechanism for instructor beliefs to correct across time.
    </div>

    <div class="arcane-paragraph">
      In other words, "We know what's best for you, more than yourself."
      To be deeply opinionated about how you must learn, but not care at all if you actually learn well, is a deadly combination.
      Even the most toxic, controlling parents fare better than paternalistic instructors - at least they care if you actually succeed. 
    </div>

    <hr style="border: 2px solid black;">

    <div class="arcane-paragraph">
      I love Youtube and KhanAcademy. They've have shown the promise of making great explanations accessible to people.
      But there is far too few content creators for advanced subjects, because it's hard to justify spending time recording explanations for an unpredictable audience.
    </div>

    <!-- <div class="arcane-paragraph">
      Non-profit culture is not always better. Get a lucrative job,
      and people will be impressed.
      Become an educational content creator, and
      <a href="https://www.facebook.com/beaverconfessions/posts/pfbid02efSgT5adZjNhpni6o24AZ3sHKAXmuMJMnAeSur55UseH7iRSa1r7DxtbUEEkxpbZl" target="_blank">
        students will publicly criticize the morality of paid education.
      </a>
    </div> -->

    <div class="arcane-paragraph"> 
      I believe in a model where 100s of passionate learners support teachers they love. The economies-of-scale of video content creates a win-win - low price for students, high pay for teachers.
      More concretely, with a Q&A, blackboard-centric platform, creators can explain things they love without worrying about "coming up with video ideas", time-consuming editing, and dealing with unpredictable recommendation algorithms.
    </div>

    <div class="arcane-paragraph">
      I quit my job at Apple in 2020 to work on this full-time. Although I failed in Boston, I learnt a lot, and now I live in Tokyo searching for inspiration, 
      and to save money. For as long as I believe this is right, <b>I'm willing to do what it takes to make this happen</b>.
    </div>

    <div class="arcane-paragraph">
      If you're considering teaching or learning on explanations.io, give me a chance to work for you!
    </div>

    <img class="arcane-image" alt="me-baseball" src="https://firebasestorage.googleapis.com/v0/b/feynman-mvp.appspot.com/o/IMG_0227.JPG?alt=media&token=0ace8bae-ea67-4346-a9a2-34b90efd416a">
  
    <div style="width: 300px;">
      <CreatorChannelCard
        on:click={() => goto(`/user/xC05mXTCFIRxLnyxfKnxY7oNBPi2`)}
        firstNameAndKeyInfo="Elton Lin"
        collegeAndYear="Founder"
        bio="elton@explanations.io"
      />
    </div>
  </div>
</div>

<script>
  import { goto } from '$app/navigation';
  import CreatorChannelCard from '$lib/DoodleVideo/CreatorChannelCard.svelte'
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