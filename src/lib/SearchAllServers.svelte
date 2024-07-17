<div style="width: 1000px; margin: auto; height: fit-content;">
  <div style="display: flex; justify-content: center; width: 100%;">
    <div class="input-container" style="position: relative; width: 100%;">
      <span 
        bind:clientWidth={searchIconWidth}
        class="material-icons" 
        style="position: absolute;
        top: 18px;
        left: 18px;
        font-size: 48px;
        color: #5D0068;
        "
      >
        search
      </span>

      <input 
        bind:this={SearchBar}
        name="search" 
        maxlength="100" 
        placeholder="Search all servers" 
        autocomplete="off" 
        type="text" 
        bind:value={searchVal}
        style="
          padding-left: 40px;
          width: 100%; 
          height: 80px; 
          font-size: 2.2em; 
          box-sizing: border-box;
          border-radius: 8px; 
          padding: 12px;
          padding-left: 74px;
        "
        on:input={(e) => searchWithinClassNames(e)}
      >
    </div>
  </div>

  <div style="margin-bottom: 12px;"></div>

  <div style="display: flex; width: 100%;">
    <!-- LEFT FLEX CHILD -->
    <div style="margin-top: 20px; width: fit-content; flex-wrap: wrap;">
      {#each categories as category, i}
        <div 
          class="subject-category"
          on:click={() => currentlySelectedSubject = category}
          class:orange-highlight={currentlySelectedSubject === category}
        >
          {#if category === 'Mechanical Engineering'}
            <span class="material-symbols-outlined">
              build
            </span>
          {:else if category === 'Computer Science'}
            <span class="material-icons">
              data_array
            </span>
          {:else if category === 'Competition Math'}
            <span class="material-icons">
              functions
            </span>
          {:else if category === 'Math & Physics'}
            <span class="material-symbols-outlined">
              functions
            </span>
          {:else if category === 'Life Sciences'}
            <span class="material-symbols-outlined">
              biotech
            </span>
          {:else if category === 'Economics'}
            <span class="material-symbols-outlined">
              shopping_cart
            </span>
          {:else if category === 'Math'}
            <span class="material-symbols-outlined">
              calculate
            </span>
          {:else if category === 'Physics'}
            <span class="material-icons">
              bolt
            </span>
          {:else if category === 'All Subjects'}
            <span class="material-symbols-outlined">
              explore
            </span>
          {:else if category === 'All Servers'}
            <span class="material-symbols-outlined">
              explore
            </span>
          {/if}
          {category}
        </div>
      {/each}
    </div>

    <!-- RIGHT FLEX CHILD -->
    <div style="flex-wrap: wrap; width: 100%; margin-left: 24px;">
      <!-- Filters on top -->
      <div style="display: flex; margin-top: 20px; justify-content: space-around; width: fit-content; align-items: center; margin-bottom: 24px;">
        <div style="margin-left: 12px; margin-right: 0px; font-size: 12px;">
          Sort by:
        </div>

        {#each filterTags as filterTag}
          <div class="sort-by-tag" class:active-tag={currentlySelectedTag === filterTag} on:click={() => currentlySelectedTag = filterTag}>
            {filterTag}
          </div>
        {/each} 
      </div>

      <div class="my-grid-layout">
        {#if subjectServers}
          {#each finalFilteredServers as serverObj, i}
            {#key serverObj.id}
              <CompactServerCard
                {serverObj}
              />
            {/key}
          {/each}

          <div style="">
            <PopupNewServer/>
          </div>
        {/if}
      </div>
    </div>
  </div>
</div>

<script>
  import { onMount } from 'svelte'
  import { getFirestoreCollection, updateFirestoreDoc } from '/src/helpers/crud.js'
  import { goto } from "$app/navigation"
  import { user } from '/src/store.js'
  import SimpleServerPreviewCardBorderless from '$lib/SimplePreviewCardBorderless.svelte'
  import CompactServerCard from '$lib/CompactServerCard.svelte'
  import PopupNewServer from '$lib/PopupNewServer.svelte'
  import MySelect from '$lib/MySelect.svelte'

  let SearchBar
  let categories = ['Competition Math', 'Math', 'Physics', 'All Servers']  // ['All Subjects', 'Computer Science', 'Economics', 'Life Sciences', 'Math', 'Mechanical Engineering', 'Physics']
  let filterTags = ['Unique Subscribers'] // 'Teachers', 'Videos', 'Prepaid learners', 
  // let categoriesCount = [17, 2, 1, 2, 4, 1, 2]
  let currentlySelectedSubject = 'Competition Math'

  let searchIconWidth 
  
  let allServers = null
  let searchMatchedServers = null

  let subjectServers = null

  let currentlySelectedTag = 'Teachers'
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
        if (server.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1) {
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
          if (!!s1.isYoutubeClass !== !!s2.isYoutubeClass) {
            return !!s2.isYoutubeClass - !!s1.isYoutubeClass
          }
          else {
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
        copy6.sort((a, b) => {
          if (!!a.isYoutubeClass !== !!b.isYoutubeClass) {
            return !!b.isYoutubeClass - !!a.isYoutubeClass
          } 
          else {
            return (b.numOfTeachers || 0) - (a.numOfTeachers || 0)
          }
        })
        return copy6

      case 'Prepaid learners':
        const sortedByPresubs = [...subjectServers]
        sortedByPresubs.sort((s1, s2) => {
          if (!!s1.isYoutubeClass !== !!s2.isYoutubeClass) {
            return !!s2.isYoutubeClass - !!s1.isYoutubeClass
          }
          else {
            return (s2.numOfPrepaidLearners || 0) - (s1.numOfPrepaidLearners || 0)
          }
        })
        return sortedByPresubs
      case 'Unique Subscribers': 
        const copy4 = [...subjectServers]
        copy4.sort((s1, s2) => {
          if (!!s1.isYoutubeClass !== !!s2.isYoutubeClass) {
            return !!s2.isYoutubeClass - !!s1.isYoutubeClass
          }
          else {
            return (s2.numOfSubscribers || 0) - (s1.numOfSubscribers || 0)
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
    if (subjectName === 'Math & Physics') return searchMatchedServers.filter(server => ['Math', 'Physics'].includes(server.subjectTag))
    if (subjectName === 'All Subjects') return searchMatchedServers
    if (subjectName === 'All Servers') return searchMatchedServers // .filter(server => !server.isYoutubeClass)

    // general case
    const output = searchMatchedServers.filter(server => server.subjectTag === subjectName)
    return output
  }
</script>

<style>
  .my-grid-layout {
    display: grid; 
    grid-template-columns: repeat(3, 1fr);
    gap: 1em;
  }

  span {
    margin-right: 8px;
  }

  .sort-by-tag {
    /* background-color: red; 
    color: white;  */
    padding: 6px 12px;
    /* padding-left: 20px;
    padding-right: 20px; */
    border-radius: 12px;
    margin-left: 12px;
    /* border: 2px solid orange; */
    /* border: 2px solid rgb(189, 189, 189); */
    color: hsl(0,0%,0%, 0.80);
    background-color: rgb(218, 218, 218);
    font-size: 12px;
  }

  .sort-by-tag:hover {
    background-color: rgb(214, 214, 214);
  }

  .active-tag {
    background-color: grey; 
    color: white;
    font-weight: 500;
  }

  /* hsl(0,0%,0%, 0.80) */

  .glow-highlight {
    background-color: grey;
    color: white;
    font-weight: 500;
  }

  .orange-highlight {
    /* legacy grey: #e2dddd */
    background-color: #e2dddd;
    color: black !important;
    font-weight: 600 !important;
    /* color: white;
    border: 1px solid white; */
  }

  .paper-shadow {
    box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  .subject-category {
    display: flex;
    align-items: center;

    width: 188px;
    font-size: 16px; 
    height: fit-content;
    padding-top: 8px;
    padding-bottom: 8px;
    padding-right: 16px;
    padding-left: 16px;
    border-radius: 8px;
    font-weight: 400;
    margin-bottom: 12px;
    color: hsla(0, 0%, 13%, 0.8);
  }

  .subject-category:hover {
    background-color: rgb(214, 214, 214);
  }
</style>