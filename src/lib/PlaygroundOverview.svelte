<div style="display: flex; justify-content: center;">
  <div class="input-container" style="position: relative; width: calc(70% - 180px);">
    <span class="material-icons" style="position: absolute;
      top: 18px;
      left: 15px;
      font-size: 32px;
      "
    >
      search
  </span>
    <input 
      bind:this={SearchBar}
      name="search" 
      maxlength="100" 
      placeholder="Find your class servers" 
      autocomplete="off" 
      type="text" 
      bind:value={searchVal}
      style="
        padding-left: 40px;
        width: 100%; 
        height: 40px; 
        font-size: 1.8em; 
        border-radius: 8px; 
        padding: 12px;
        padding-left: 58px;
      "
      on:input={(e) => searchWithinClassNames(e)}
    >
  </div>
</div>

<div style="margin-bottom: 12px;"></div>

<div style="display: flex; width: 100%;">
  <!-- LEFT FLEX CHILD -->
  <div style="margin-left: 18%; margin-top: 20px; width: fit-content; flex-wrap: wrap;">
    {#each categories as category, i}
      <div 
        class="subject-category"
        on:click={() => currentlySelectedSubject = category}
        class:orange-highlight={currentlySelectedSubject === category}
      >
        {#if category === 'Mechanical Engineering'}
          <span class="material-icons">
            build
          </span>
        {:else if category === 'Computer Science'}
          <span class="material-icons">
            data_array
          </span>
        {:else if category === 'Life Sciences'}
          <span class="material-icons">
            biotech
          </span>
        {:else if category === 'Economics'}
          <span class="material-icons">
            shopping_cart
          </span>
        {:else if category === 'Math'}
          <span class="material-icons">
            functions
          </span>
        {:else if category === 'Physics'}
          <span class="material-icons">
            air
          </span>
        {:else if category === 'All Subjects'}
          <span class="material-icons">
          explore
          </span>
        {/if}
        {category}
      </div>
    {/each}

    <div style="margin-top: 48px;"></div>

    <div class="subject-category"
      on:click={() => currentlySelectedSubject = 'Other Servers'}
      class:orange-highlight={currentlySelectedSubject === 'Other Servers'}
    >
    <span class="material-icons">
      folder
    </span>
      Non-college servers
    </div>
  </div>

  <!-- RIGHT FLEX CHILD -->
  <div style="flex-wrap: wrap; width: 100%; margin-left: 24px;">
    <!-- Filters on top -->
    <div style="display: flex; margin-top: 20px; justify-content: space-around; width: fit-content; align-items: center;">
      <div style="font-size: 16px; margin-left: 12px; margin-right: 12px;">
        Sort by:
      </div>

      {#each filterTags as filterTag}
        <div class="filter-tag"
          on:click={() => currentlySelectedTag = filterTag}
          class:orange-highlight={currentlySelectedTag === filterTag}
        >
          {filterTag}
        </div>
      {/each}
    </div>

    <div style="margin-bottom: 24px;">

    </div>

    {#if subjectServers}
      {#each finalFilteredServers as serverObj, i}
        {#key serverObj.id}
          <SimpleServerPreviewCard 
            {serverObj}
          />
          <div style="margin-bottom: 12px;"></div>
        {/key}
      {/each}

      <PopupNewServer/>
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
  import PopupNewServer from '$lib/PopupNewServer.svelte'

  let SearchBar
  let categories = ['All Subjects', 'Computer Science', 'Economics', 'Life Sciences', 'Math', 'Mechanical Engineering', 'Physics']
  let filterTags = ['Featured', 'Teachers', 'Pre-subscribers', 'Videos', 'Questions']
  // let categoriesCount = [17, 2, 1, 2, 4, 1, 2]
  let currentlySelectedSubject = 'All Subjects'


  
  let allServers = null
  let searchMatchedServers = null

  let subjectServers = null

  let currentlySelectedTag = 'Featured'
  let finalFilteredServers = null
  let searchVal = ''

  $: finalFilteredServers = sortSubjectServersByTag(currentlySelectedTag, subjectServers)
  $: subjectServers = filterServersBySubject(currentlySelectedSubject, searchMatchedServers)

  onMount(async () => {
    allServers = await getFirestoreCollection('/classes')
    searchWithinClassNames()
    console.log('allServers =', allServers)
    SearchBar.focus()
    // runScript()
  })

  function searchWithinClassNames () {
    const uniqueSet = new Set()
    const searchQuery = searchVal
    for (const searchTerm of searchQuery.split(' ')) {
      for (const server of allServers) {
        console.log('index of is =', server.name.indexOf(searchTerm))
        if (server.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1) {
          console.log('index of is =', server.name.indexOf(searchTerm))
          uniqueSet.add(server)
        }
      }
    }
    searchMatchedServers = [...uniqueSet]
    console.log('searchMatchedServers =', searchMatchedServers)
    return [...uniqueSet]
    // console.log('uniqueSet =', )
  }

  async function runScript () {
    const allServers = await getFirestoreCollection('/classes')
    for (const server of allServers) {
      if (!server.isFeatured) {
        updateFirestoreDoc(`/classes/${server.id}`, {
          isFeatured: false
        })
        console.log('made it 0')
      }       
      // if (!server.minutesViewed) {
      //   updateFirestoreDoc(`/classes/${server.id}`, {
      //     minutesViewed: 0
      //   })
      // }
    }
  }


  function handleClassServerClick (server) {
    if (!$user.uid) {
      goto(`${server.id}/request-video`)
      // console.log('will log in anonymously')
    } else {
      goto(`${server.id}/request-video`)
    }
  }

  function sortSubjectServersByTag (tagName, ghostParamForReactivity) {
    if (!subjectServers) return null
    switch (tagName) {
      case 'Alphabetical':
        const copy5 = [...subjectServers]
        copy5.sort((s1, s2) => {
          s1.name.localeCompare(s2.name)
        })
        return copy5

      case 'Videos': 
        const sortedByVideos = [...subjectServers]
        sortedByVideos.sort((s1, s2) => {
          if (s1.numOfVideos !== s2.numOfVideos) {
            return s2.numOfVideos - s1.numOfVideos
          }
        })
        return sortedByVideos
      case 'Questions': 
        const sortedByQuestions = [...subjectServers]
        sortedByQuestions.sort((s1, s2) => {
          if (s1.numOfUnresolvedQuestions !== s2.numOfUnresolvedQuestions) {
            return s2.numOfUnresolvedQuestions - s1.numOfUnresolvedQuestions
          } else {
            return s2.crowdfundAmount - s1.crowdfundAmount
          }
        })
        return sortedByQuestions

      case 'Teachers': 
        const copy6 = [...subjectServers]
        // const copy6 = subjectServers.filter(server => server.numOfTeachers > 0 && (server.numOfVideos === 0 || server.numOfPresubs === 0))
        copy6.sort((s1, s2) => {
          if (s1.numOfTeachers !== s2.numOfTeachers) {
            return s2.numOfTeachers - s1.numOfTeachers
          }
          else if (s1.isFeatured !== s2.isFeatured) {
            return (s2.isFeatured || 0) - (s1.isFeatured || 0)
          }
          else if (s1.numOfVideos !== s2.numOfVideos) {
            return s2.numOfVideos - s1.numOfVideos
          }
          else if (s1.numOfPresubs !== s2.numOfPresubs) {
            return s2.numOfPresubs - s1.numOfPresubs
          }
          else {
            return 0
          }
        })
        return copy6

      case 'Pre-subscribers':
        const sortedByPresubs = [...subjectServers]
        sortedByPresubs.sort((s1, s2) => {
          const val1 = s1.crowdfundAmount
          const val2 = s2.crowdfundAmount
          if (val1 !== val2) {
            return val2 - val1
          } 
          else if (s1.numOfUnresolvedQuestions !== s2.numOfUnresolvedQuestions) {
            return s2.numOfUnresolvedQuestions - s1.numOfUnresolvedQuestions
          } else {
            return 0
          }
        })
        return sortedByPresubs
      case 'Featured': 
        const copy4 = [...subjectServers]

        // const copy44 = copy4.filter(server => { 
        //   return (server.numOfUnresolvedQuestions + server.numOfVideos + server.numOfPresubs + server.numOfTeachers) && server.numOfVideos
        // })
        copy4.sort((s1, s2) => {
          if (s1.isFeatured !== s2.isFeatured) {
            return (s2.isFeatured) - (s1.isFeatured)
          }
          if (s1.numOfTeachers !== s2.numOfTeachers) {
            return s2.numOfTeachers - s1.numOfTeachers
          }
          else if (s1.numOfVideos !== s2.numOfVideos) {
            return s2.numOfVideos - s1.numOfVideos
          }
          else if (s1.numOfPresubs !== s2.numOfPresubs) {
            return s2.numOfPresubs - s1.numOfPresubs
          }
          else {
            return 0
          }
        })
        return copy4
      default:
        console.log('default')
        return subjectServers
    }
  }

  function filterServersBySubject (subjectName, ghostParamForReactivity) {
    if (!searchMatchedServers) return null

    // special cases
    if (subjectName === 'All Subjects') return searchMatchedServers.filter(server => server.isYoutubeClass)
    if (subjectName === 'Other Servers') return searchMatchedServers.filter(server => !server.isYoutubeClass)

    // general case
    const output = searchMatchedServers.filter(server => server.subjectTag === subjectName)
    return output
  }
</script>

<style>
  span {
    margin-right: 8px;
  }

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
    padding: 8px; 
    /* padding-left: 20px;
    padding-right: 20px; */
    border-radius: 36px;
    margin-left: 12px;
    /* border: 2px solid orange; */
    border: 1px solid grey;
    font-weight: 400;
    color: hsl(0,0%,0%, 0.80);
    font-size: 16px;
  }

  .filter-tag:hover {
    background-color: rgb(214, 214, 214);
  }

  /* hsl(0,0%,0%, 0.80) */

  .glow-highlight {
    background-color: grey;
    color: white;
    font-weight: 500;
  }

  .orange-highlight {
    background-color: #e2dddd;
    color: black !important;
    font-weight: 500 !important;
    /* color: white;
    border: 1px solid white; */
  }

  .paper-shadow {
    box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  .subject-category {
    display: flex;
    align-items: center;

    width: 220px;
    font-size: 16px; 
    margin-left: 38px; 
    height: fit-content;
    padding-top: 8px;
    padding-bottom: 8px;
    padding-right: 16px;
    padding-left: 16px;
    border-radius: 8px;
    font-weight: 400;
    margin-bottom: 12px;
    color: hsl(0,0%,0%, 0.80);
  }

  .subject-category:hover {
    background-color: rgb(214, 214, 214);
  }
</style>