<!-- <div style="display: flex; justify-content: center">
  <input 
    class="" 
    name="search" 
    maxlength="100" 
    placeholder="Explore communities" 
    aria-label="Explore popular communities" 
    autocomplete="off" 
    type="text" 
    value=""
    style="
      width: 95%; 
      height: 40px; 
      font-size: 1.8em; 
      border-radius: 8px; 
      padding: 12px;
    "
  >
</div> -->

<div style="display: flex; width: 100%;">
  <!-- LEFT FLEX CHILD -->
  <div style="margin-top: 20px; width: fit-content; flex-wrap: wrap;">
    {#each categories as category, i}
      <div 
        class="subject-category"
        on:click={() => currentlySelectedSubject = category}
        class:orange-highlight={currentlySelectedSubject === category}
      >
        {category}
        <!-- {#if categoriesCount[i]}
          ({categoriesCount[i]})
        {/if} -->
      </div>
      
    {/each}

    <div style="margin-top: 48px;"></div>

    <div class="subject-category"
      on:click={() => currentlySelectedSubject = 'Other Servers'}
      class:orange-highlight={currentlySelectedSubject === 'Other Servers'}
    >
      Other Servers
    </div>
  </div>

  <!-- RIGHT FLEX CHILD -->
  <div style="flex-wrap: wrap; width: 100%; margin-left: 192px;">
    <!-- Filters on top -->
    <div style="display: flex; margin-top: 20px; justify-content: space-around; width: fit-content; align-items: center;">
      <div style="font-size: 2em">
        Sort by:
      </div>

      {#each filterTags as filterTag}
        <div class="filter-tag"
          on:click={() => currentlySelectedTag = filterTag}
          class:glow-highlight={currentlySelectedTag === filterTag}
        >
          {filterTag}
        </div>
      {/each}
    </div>

    <div style="margin-bottom: 48px;">

    </div>

    {#if subjectServers}
      {#each finalFilteredServers as serverObj, i}
        {#key serverObj.id}
          <SimpleServerPreviewCard 
            {serverObj}
          />
          <div style="margin-bottom: 24px;"></div>
        {/key}
      {/each}
    {/if}
  </div>
</div>

<script>
  import ReusableButton from "$lib/ReusableButton.svelte"
  import TwosidedMarketplace from "$lib/TwosidedMarketplace.svelte"
  import { onMount } from 'svelte'
  import { getFirestoreCollection, updateFirestoreDoc } from '/src/helpers/crud.js'
  import { goto } from "$app/navigation"
  import { user } from '/src/store.js'
  import SimpleServerPreviewCard from '$lib/SimpleServerPreviewCard.svelte'

  let categories = ['All Subjects', 'Computer Science', 'Economics', 'Life Sciences', 'Math', 'Mechanical Engineering', 'Physics']
  let filterTags = ['Has teachers & videos', 'Really need teachers', 'Alphabetical']
  // let categoriesCount = [17, 2, 1, 2, 4, 1, 2]
  let currentlySelectedSubject = 'All Subjects'
  let allServers = null
  let subjectServers = null

  let currentlySelectedTag = 'Has teachers & videos'
  let finalFilteredServers = null

  $: finalFilteredServers = filterSubjectServersByTag(currentlySelectedTag, subjectServers)
  $: subjectServers = filterServersBySubject(currentlySelectedSubject, allServers)
  $: console.log("currentlySelectedSubject =", currentlySelectedSubject)
  $: console.log('current tag =', currentlySelectedTag)
  $: console.log('finalFilteredServers =', finalFilteredServers)

  onMount(async () => {
    allServers = await getFirestoreCollection('/classes')
    console.log('allServers =', allServers)
    runScript()
  })


  async function runScript () {
    const allServers = await getFirestoreCollection('/classes')
    // for (const server of allServers) {
    //   if (!server.totalUpvotes) {
    //     updateFirestoreDoc(`/classes/${server.id}`, {
    //       totalUpvotes: 0
    //     })
    //     console.log('made it 0')
    //   }       
    //   if (!server.minutesViewed) {
    //     updateFirestoreDoc(`/classes/${server.id}`, {
    //       minutesViewed: 0
    //     })
    //   }
    // }
  }


  function handleClassServerClick (server) {
    if (!$user.uid) {
      goto(`${server.id}/request-video`)
      // console.log('will log in anonymously')
    } else {
      goto(`${server.id}/request-video`)
    }
  }

  function filterSubjectServersByTag (tagName, ghostParamForReactivity) {
    if (!subjectServers) return null
    switch (tagName) {
      case 'No filter': 
        const copy = [...subjectServers]
        copy.sort((s1, s2) => {
          if (s1.crowdfundAmount !== s2.crowdfundAmount) {
            return s2.crowdfundAmount - s1.crowdfundAmount
          } else {
            return s2.numOfUnresolvedQuestions - s1.numOfUnresolvedQuestions
          }
        })
        return copy
      case 'Need explainers':
        return subjectServers.filter(server => server.crowdfundAmount > 0 || server.numOfUnresolvedQuestions)
      case 'Need students':
        const filteredServers = subjectServers.filter(server => server.totalSubscriptions > 0 || server.numOfVideos > 0 || server.numOfHelpers > 0)
        filteredServers.sort((s1, s2) => {
          if (s1.isHighlyRecommended !== s2.isHighlyRecommended) {
            return s2.isHighlyRecommended - s1.isHighlyRecommended
          }
          if (s1.totalSubscriptions !== s2.totalSubscriptions) {
            return s2.totalSubscriptions - s1.totalSubscriptions
          } 
          else {
            return s2.minutesViewed - s1.minutesViewed
          }
        })
        return filteredServers
      case 'Has activity': 
        return subjectServers.filter(server => server.numOfUnresolvedQuestions + server.numOfVideos)
    case 'Really need teacrehers':
        const output = subjectServers.filter(server => server.crowdfundAmount > 0)
        output.sort((s1, s2) => {
          if (s1.numOfUnresolvedQuestions !== s2.numOfUnresolvedQuestions) {
            return s2.numOfUnresolvedQuestions - s1.numOfUnresolvedQuestions
          } 
          // else {
          //   return s2.minutesViewed - s1.minutesViewed
          // }
        })
        return output 
      case 'Has teachers & videos': 
        // const output2 = subjectServers.filter(server => server.numOfVideos && (server.numOfHelpers || server.numOfCreators))
        const output2 = [...subjectServers]
        console.log('has teachers and videos =', output2)
        output2.sort((s1, s2) => {
          // if it has videos
          if (s1.numOfVideos && s2.numOfVideos) {
            // if both have upvotes, see which one has higher
            if (s1.totalUpvotes && s2.totalUpvotes) {
              return (s2.totalUpvotes / s2.numOfVideos) - (s1.totalUpvotes / s1.numOfVideos)
            }
            else {
              return s2.numOfVideos - s1.numOfVideos
            }
          } 
          else if (s1.numOfTeachers !== s2.numOfTeachers) {
            return s2.numOfTeachers - s1.numOfTeachres
          }
          else {
            return s2.numOfVideos - s1.numOfVideos
          }
        })
        return output2;
      default:
        return subjectServers
    }
  }

  function filterServersBySubject (subjectName, ghostParamForReactivity) {
    if (!allServers) return null

    // special cases
    if (subjectName === 'All Subjects') return allServers.filter(server => server.isYoutubeClass)
    if (subjectName === 'Other Servers') return allServers.filter(server => !server.isYoutubeClass)

    // general case
    const output = allServers.filter(server => server.subjectTag === subjectName)
    console.log('output =', output)
    return output
  }
</script>

<style>
  .server-card {
    /* Tweek this to change all the children font-sizes */
    font-size: 0.9em;

    border-radius: 32px;
    min-width: 300px;
    width: 100%;
    margin-bottom: 20px;
    padding-top: 30px;
    padding-left: 12px;
    padding-right: 12px;
    padding-bottom: 4px;
    margin-left: 8%;
    height: fit-content;
  }

  .card-action-button {
    width: fit-content; 
    margin-right: 24px; 
    padding-top: 16px; 
    padding-bottom: 16px;
    padding-left: 36px; 
    padding-right: 36px; 
    font-size: 1.4em; 
    font-weight: 600; 
    font-weight: 600
  }

  .filter-tag {
    /* background-color: red; 
    color: white;  */
    padding: 12px; 
    border-radius: 36px;
    margin-left: 12px;
    /* border: 2px solid orange; */
    border: 1px solid grey;
    font-weight: 500;
    font-size: 1.4em;
  }

  /* hsl(0,0%,0%, 0.80) */

  .glow-highlight {
    background-color: grey;
    color: white;
  }

  .orange-highlight {
    background-color: #e2dddd;
    /* color: white;
    border: 1px solid white; */
  }

  .paper-shadow {
    box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  .subject-category {
    width: 300px;
    font-size: 24px; 
    margin-left: 38px; 
    height: fit-content;
    padding-top: 12px;
    padding-bottom: 12px;
    padding-right: 16px;
    padding-left: 16px;
    border-radius: 8px;
    font-weight: 400;
  }
</style>