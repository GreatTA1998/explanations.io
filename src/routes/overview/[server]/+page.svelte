{#if serverObj}
  {#if serverObj.featuredBlackboardID}
    <div style="min-width: {backgroundWidth}px; max-width: {backgroundWidth}px; height: {454}px; overflow: hidden;"
      class="figma-inter-font"
    >
      <RenderlessFetchStrokes 
        dbPath={`/classes/${serverObj.id}/blackboards/${serverObj.featuredBlackboardID}`}
        let:fetchStrokes={fetchStrokes}
        let:strokesArray={strokesArray}
        autoFetchStrokes={false}
      > 
        <Blackboard
          {strokesArray}
          canvasWidth={backgroundWidth}
          canvasHeight={backgroundWidth * 3/4}
          hideToolbar={true}
          on:intersect={fetchStrokes}
        />
      </RenderlessFetchStrokes>
    </div>
  {:else}
    <div style="width: {backgroundWidth - 10}px; height: {454 - 8}px; border: 0px solid black; box-sizing: border-box;">
    
    </div>
  {/if}

  <div style="padding-left: 160px; padding-right: 140px; padding-top: 70px;">
    <!-- FLEXBOX -->
    <div style="display: flex; justify-content: space-between;">
      <!-- LEFT FLEX-CHILD -->
      <div>
        <div style="font-size: 50px; font-weight: 600;" class="figma-inter-font">
          {serverObj.name}
          {#if serverObj.description}
            {serverObj.description}
          {/if}
        </div>

        <div style="margin-top: 8px;"></div>

        <div style="font-size: 20px; color: #7A7A7A;" class="figma-inter-font" >
          {serverObj.syllabusVersion}
        </div>

        <div style="margin-top: 12px;"></div>

        <div style="font-size: 20px; display: flex; align-items: center;">
          <b>All-time activity:</b>
          <div style="margin-right: 12px;"></div>
          <div>{serverObj.numOfQuestions} questions</div>
          <span class="material-icons" style="font-size: 5px; margin: 12px;">circle</span>
          <div>{serverObj.numOfVideos} videos</div>
          <span class="material-icons" style="font-size: 5px; margin: 12px;">circle</span>
          <div>{serverObj.minutesViewed} minutes viewed</div>
        </div>
      </div>
      <!-- END OF LEFT FLEX-CHILD -->
      
      <!-- RIGHT FLEX-CHILD -->
      <div>
        <Button on:click={() => goto(`/${serverObj.id}/request-video`)} color="secondary" variant="raised" class="call-to-action-button" 
          style="	
            min-width: 340px; max-width: 340px;
            height: 4.2vw; 
            min-height: 42px;
            margin-top: 0.85vw; 
            margin-bottom: 0.8vw; 
            border-radius: 0px;
          "
        >
          <Label style="text-transform: none; padding-left: 16px; padding-right: 16px; padding-top: 10px; padding-bottom: 10px; font-size: 1.4em; font-weight: 600">
            Enter server
          </Label>
        </Button>
      </div>

    </div>
    <!-- END OF FLEXBOX 1-->

    <div style="margin-top: 36px;"></div>

    <div style="display: flex">

      {#if teacherDocs}
        <!-- Teacher section -->
        <div style="min-width: 340px; max-width: 340px;">
          <div style="display: flex; align-items: flex-end;">
              <div style="font-size: 80px;" class="figma-inter-font">
                {teacherDocs.length}
                <!--       
                {serverObj.numOfHelpers + serverObj.numOfCreators}  -->
              </div>

              <div style="margin-left: 12px; margin-bottom: 20px; font-size: 20px;">
                teachers
              </div>
          </div>

          <div style="margin-bottom: 12px;"></div>


          <!-- <div style="font-size: 20px; color: #7A7A7A; margin-left: 4px;">
            Videos Created: {serverObj.numOfVideos}
          </div> -->

          <div style="max-height: 240px; min-height: 0px;">
            {#each teacherDocs as teacherDoc}
              <div style="display: flex; align-items: center;">
                <PresentationalBeaverPreview 
                  helperDoc={teacherDoc}
                  classID={serverID}
                  style="margin-bottom: 8px; margin-right: 20px; width: 280px;"
                >
                </PresentationalBeaverPreview>
              </div>
            {/each}

          </div>

          <Button on:click={() => isTeacherPopupOpen = true} color="secondary" class="call-to-action-button" 
            style="	
              width: 300px;
              height: fit-content; 
              min-height: 42px;
              margin-top: 0.85vw; 
              margin-bottom: 0.8vw; 
              border-radius: 0px;
              padding-top: 12px;
              padding-bottom: 12px;
              border: 2px solid #5d0068;
              background-color: white;
              color: #5d0068;
            "
          >
            <Label style="text-transform: none; padding-left: 12px; padding-right: 12px; padding-top: 8px; padding-bottom: 8px; font-size: 20px;">
              Sign up to teach
            </Label>
          </Button>
        </div>
      {/if}

      <div style="margin-right: 120px;"></div>

      <!-- Pre-subscribers section -->
      <div style="min-width: 340px; max-width: 340px;">
        <div style="display: flex; align-items: flex-end;">
          {#if presubscriberDocs}
            <div style="font-size: 80px;" class="figma-inter-font">
                {presubscriberDocs.length}
            </div>

            <div style="margin-left: 12px; margin-bottom: 20px; font-size: 20px;">
              pre-subscribers
            </div>
          {/if}
        </div>

        <div style="margin-bottom: 12px;"></div>

        <!-- <div 
          style="font-size: 20px; margin-left: 4px;" 
          class:money-green={serverObj.crowdfundAmount > 0}
          class:grey-text={serverObj.crowdfundAmount === 0}
        >
          Crowdfund Amount: ${serverObj.crowdfundAmount}
        </div> -->

        <div style="max-height: 240px;">
          {#if presubscriberDocs}
            {#each presubscriberDocs as presubscriberDoc}
              <div style="display: flex; align-items: center;">
                <span class="material-icons" style="font-size: 54px; color: #9A9A9A; margin-top: 0px;">
                  person
                </span>

                <div style="margin-right: 12px;"></div>

                <div>
                  <div style="color: #7A7A7A;">
                    {presubscriberDoc.name}
                  </div>
                  <div class="figma-inter-font">
                    ${presubscriberDoc.presubscribeAmount}
                  </div>
                </div>
              </div>
            {/each}
          {/if}
        </div>
        <div style="margin-bottom: 16px;"></div>


        <Button on:click={() => isPresubscribePopupOpen = true} color="secondary" class="call-to-action-button" 
          style="	
            width: 300px;
            height: fit-content; 
            min-height: 42px;
            margin-top: 0.85vw; 
            margin-bottom: 0.8vw; 
            border-radius: 0px;
            padding-top: 12px;
            padding-bottom: 12px;
            border: 2px solid #5d0068;
            background-color: white;
            color: #5d0068;
          "
        >
          <Label style="text-transform: none; padding-left: 1px; padding-right: 1px; padding-top: 8px; padding-bottom: 8px; font-size: 20px;">
            Pre-subscribe to server
          </Label>
        </Button>
      </div>

      <div style="margin-right: 120px;"></div>
      
      <!-- Subscribers section -->
      <div style="min-width: 340px; max-width: 340px;">
        <div style="display: flex; align-items: flex-end;">
          <div class="figma-inter-font" style="font-size: 80px;">
            {serverObj.totalSubscriptions} 
          </div>

          <div style="margin-left: 12px; margin-bottom: 20px; font-size: 20px;">
            subscribers
          </div>
        </div>

        <div style="height: 240px;">

        </div>
      </div>
    </div>
  </div>

  {#if isPresubscribePopupOpen}
    <PopupConfirmPresubscription
      classID={serverID}
      on:confirm-clicked={() => {}}
      on:popup-close={() => isPresubscribePopupOpen = false}
    />
  {/if}

  
  {#if isTeacherPopupOpen}
    <PopupConfirmTeacher
      classID={serverID}
      on:confirm-clicked={() => {}}
      on:popup-close={() => isTeacherPopupOpen = false}
    />
  {/if}
{/if}

<script>
  import Blackboard from '$lib/Blackboard.svelte'
  import RenderlessFetchStrokes from '$lib/RenderlessFetchStrokes.svelte'
  import { goto } from '$app/navigation'
  import { onMount } from 'svelte'
  import { getFirestoreDoc, getFirestoreQuery } from '/src/helpers/crud.js'
  import Button, { Label } from '@smui/button'
  import { query, getFirestore, collection, where } from 'firebase/firestore'
  import PopupConfirmPresubscription from '$lib/PopupConfirmPresubscription.svelte'
  import PresentationalBeaverPreview from '$lib/PresentationalBeaverPreview.svelte'
  import PopupConfirmTeacher from '$lib/PopupConfirmTeacher.svelte'

  export let data;
  let { serverID } = data;
  $: ({ serverID } = data); // so it stays in sync when `data` changes

  let serverObj
  let backgroundWidth
  let db = getFirestore()

  let teacherDocs = null
  let presubscriberDocs = null
  let isPresubscribePopupOpen = false

  let isTeacherPopupOpen = false

  // you need to fetch the server
  onMount(async () => {

    const serverDoc = await getFirestoreDoc(`classes/${serverID}`)
    serverObj = serverDoc

    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
    backgroundWidth = vw

    fetchPresubscribers().then(docs => presubscriberDocs = docs)
    fetchTeachers().then(docs => teacherDocs = docs)
  })

  async function fetchPresubscribers () {
    return new Promise(async (resolve) => {
      const ref = collection(db, `classes/${serverID}/members`);

      const q = query(ref, where("isPresubscriber", "==", true))
      const result = await getFirestoreQuery(q)
      resolve(result)
    })
  }

  async function fetchTeachers () {
    return new Promise(async (resolve) => {
      const ref = collection(db, `classes/${serverID}/members`);

      const q = query(ref, where("isTeacher", "==", true))
      const result = await getFirestoreQuery(q)
      resolve(result)
    })
  }
</script>

<style>
  @font-face {
    font-family: 'Inter';
    src: url('/fonts/Inter-Regular.woff2') format('woff2');
    /* Add more src lines for different font weights/styles as needed */
    font-weight: normal;
    font-style: normal;
  }

  .figma-inter-font {
    font-family: 'Inter', sans-serif;
  }

  .money-green {
    color: #3D8C4F;
  }

  .grey-text {
    color: #7A7A7A;
  }
</style>
