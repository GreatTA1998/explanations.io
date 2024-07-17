<!-- ROOM PARTICIPANTS SECTION -->
<!-- you can interpret this as `for each person in room.persons` -->
{#if $roomToPeople[room.id]}
  <div class:vertical-padding={$roomToPeople[room.id].length > 0}>
    <!-- key needs `room.id`, otherwise the person's browserTabID will be a duplicate key across different
      levels of recursion 
    -->
    {#each $roomToPeople[room.id] as person (person.browserTabID + room.id)}
      <div style="display: flex; align-items: center; padding-left: 8px; padding-right: 8px;">
        <div 
          style="font-size: 0.7rem; margin-left: 6px;" 
          class:speaking={firestoreIDToDailyID && (firestoreIDToDailyID[person.browserTabID]) && (firestoreIDToDailyID[person.browserTabID]) === activeSpeakerID}
        >
          {person.name} 
        </div> 

        <!-- CASE 1: it's me -->
        {#if person.browserTabID === $browserTabID}
          {#if !willJoinVoiceChat}
            <!-- <div 
              on:click={() => willJoinVoiceChat = true}
              style="margin-right: 4px; margin-left: auto; background-color: green; color: white; font-size: 0.6rem; padding-left: 4px; padding-right: 4px; cursor: pointer; border-radius: 4px;"
            >
              Join voice 
            </div> -->

          {:else if Object.keys($dailyRoomParticipants).length > 0}
            <div style="display: flex; align-items: center; margin-right: 6px; margin-left: auto">
              <div on:click|preventDefault|stopPropagation={toggleMic} style="padding-top: 5px">
                <Switch checked={$dailyRoomParticipants.local.audio} style="margin: 0 !important"/>
              </div>

              {#if $dailyRoomParticipants.local.audio}
                <div style="font-size: 0.7rem; margin-left: 6px; color: #33ff33">
                  voice on
                </div>
              {:else}
                <div style="font-size: 0.7rem; margin-left: 6px; color: red">
                  muted
                </div>
              {/if}
            </div>     
          {/if}
    
        <!-- CASE 2: it's not me -->
        {:else}
          <!-- case 2.1: this person is connected to my voice chat -->
          {#if Object.keys($dailyRoomParticipants).length > 0 && $dailyRoomParticipants[firestoreIDToDailyID[person.browserTabID]]}
            {#if $dailyRoomParticipants[firestoreIDToDailyID[person.browserTabID]].audio} 
              <!-- display mute status -->
              <span 
                class="material-icons" 
                style="
                  margin-right: 0; margin-left: auto; font-size: 1.1rem; 
                  color: {(firestoreIDToDailyID && (firestoreIDToDailyID[person.browserTabID]) && (firestoreIDToDailyID[person.browserTabID]) === activeSpeakerID) ? 'white' : ''}"
              >
                mic
              </span>
            {:else}
              <span class="material-icons" style="margin-right: 0; margin-left: auto; font-size: 1.1rem; color: red">
                mic_off
              </span>
            {/if}
          <!-- case 2.2: otherwise visually indicate if they're in voice chat (whichever room they're in) -->
          {:else if person.hasJoinedVoice}
            <span class="material-icons" style="margin-right: 0; margin-left: auto; font-size: 1.1rem; color: #33ff33;">
              volume_up
            </span>
          {/if}
        {/if}
      </div>
    {/each}
  </div>
{/if}

<script>
  import Switch from '@smui/switch'
  import Button from '@smui/button'
  import { roomToPeople, browserTabID, dailyRoomParticipants } from '/src/store.js'

  export let room
  export let toggleMic
  export let willJoinVoiceChat
  export let firestoreIDToDailyID
  export let activeSpeakerID
</script>
