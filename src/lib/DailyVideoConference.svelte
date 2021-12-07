<slot {toggleMic} {activeSpeakerID} {firestoreIDToDailyID}>

</slot>

<script>
  import DailyIframe from '@daily-co/daily-js'
  import { API_KEY_SECRET } from './environmentSecrets.js'
  import { dailyMicStream, roomToPeople, dailyRoomParticipants, browserTabID } from '../store.js'
  import { onDestroy, onMount } from 'svelte'

  export let roomID

  let CallObject
  let firestoreIDToDailyID
  let prevCallState
  let currentCallState
  let dailyRoomID

  let activeSpeakerID = ''

  $: if (prevCallState === 'connecting' && currentCallState === 'connected' && dailyRoomID !== roomID) {
    // by the time we connected the roomID already changed, reset
    console.log('part 1: user moved to a different room before voice chat connected')
    leaveConferenceRoom()
  }

  $: if (prevCallState === 'connected' && currentCallState === 'not_connected' && dailyRoomID !== roomID) {
    // safely join the new video conference room
    console.log('part 2: ready to join the new room')
    publicJoinRoom()
  }
  onDestroy(() =>{
    if (currentCallState === 'connected') {
      leaveConferenceRoom()
    }
  })

  onMount(async () => {
    await initCallObject()
    publicJoinRoom()
  })

  async function initCallObject () {
    return new Promise(async (resolve) =>{
      if (!$dailyMicStream) {
        const micStream = await navigator.mediaDevices.getUserMedia({ audio: true })
        dailyMicStream.set(micStream)
      }
      const [ micMediaStreamTrack ] = $dailyMicStream.getAudioTracks()
      CallObject = DailyIframe.createCallObject({
        audioSource: micMediaStreamTrack,
        videoSource: false
      })
      const participantEvents = ['participant-joined', 'participant-updated', 'participant-left']
      for (const e of participantEvents) {
        CallObject.on(e, () => {
          dailyRoomParticipants.set(CallObject.participants())
          // note we bind browserTabID to Daily's `user_name`
          const temp = {} 
          for (const dailyID of Object.keys($dailyRoomParticipants)) {
            const dailyParticipant = $dailyRoomParticipants[dailyID]
            const browserTabID = dailyParticipant.user_name
            if (browserTabID) { 
              temp[browserTabID] = dailyParticipant.user_id 
            }
          }
          firestoreIDToDailyID = temp
        })
      }    

      // track-related events
      CallObject.on('track-started', mountNewTrack)
      CallObject.on('track-stopped', unmountTrack)
      CallObject.on("active-speaker-change", ({ activeSpeaker }) => {
        activeSpeakerID = activeSpeaker.peerId
      })

      // error events
      CallObject.on("load-attempt-failed", ({ action, errorMsg }) => {
        alert(action + ": " + errorMsg) 
      })
      CallObject.on("error", ({ action, errorMsg }) => {
        alert(action + ": " + errorMsg)
      })
      
      // FINALLY RESOLVE
      resolve()

    })
  }  

  // differs from privateJoinRoom in that it first, it fetches a room OR creates a room if it doesn't exist
  async function publicJoinRoom () {
    prevCallState = 'not_connected'
    currentCallState = 'connecting'
    dailyRoomID = roomID // note by the end of the promise `roomID` may have changed, but dailyRoomID will capture it's previous value

    const { url } = await fetchOrCreateDailyRoom()
    if (url) {
      await joinDailyRoom(url)
      prevCallState = 'connecting'
      currentCallState = 'connected'
    }
  }

  function fetchOrCreateDailyRoom () {
    return new Promise(async (resolve) => {
      try {
        const SECONDS_IN_TWO_HOURS = 2 * 60 * 60 // most sessions are at most 1.5 hours
        const response = await fetch("https://api.daily.co/v1/rooms", {
          "method": "POST",
          "headers": {
            "content-type": "application/json", // remove this allows your room to be created
            "Authorization": "Bearer " + API_KEY_SECRET
          },
          // mode: "cors",
          body: JSON.stringify({
            name: roomID,
            properties: {
              exp: Math.round(Date.now() / 1000) + SECONDS_IN_TWO_HOURS,
              eject_at_room_exp: true,
              start_video_off: true
            }
          })
        }); 
        const room = await response.json(); 
        if (room.error === "invalid-request-error" && room.info === `a room named ${roomID} already exists`) {
          resolve({ url: `https://feynman.daily.co/${roomID}` }); 
        } else {
          // successfully created room
          resolve(room); 
        }
      } catch (error) {
        // TODO: handle error explicitly
        console.error(error);
        alert(error);
        reject({ url: '' });
      } 
    })
  }

  // join room (call after CallObject and DailyRoom are ready)
  function joinDailyRoom (roomURL) {
    return new Promise(async (resolve, reject) => {
      try {
        await CallObject.join({
          url: roomURL,
          userName: $browserTabID
        })
        resolve()
      } 
      catch (error) {
        console.log('error)')
        alert(error)
        reject()
      }
    })
  }

  async function mountNewTrack ({ track, participant }) {
    switch (track.kind) {
      case "audio": 
        if (participant.local) return; 
        else {
          const audioElement = document.createElement("audio"); 
          audioElement.srcObject = new MediaStream([track]); 
          audioElement.setAttribute("id", "audio" + participant.user_id); 
          audioElement.setAttribute("playsinline", true); 
          audioElement.setAttribute("autoplay", true); 
          document.getElementById("container-for-audio-elements").appendChild(audioElement);
        }
        break;
    }
  }

  async function unmountTrack ({ track, participant }) {
    const trackElement = document.getElementById(track.id); 
    if (trackElement) { // sometimes the trackElement unexpectedly doesn't exist, though the error is harmless
      trackElement.srcObject = null; 
      trackElement.remove(); 
    }
  }

  function toggleMic () {
    console.log('toggling mic')
    CallObject.setLocalAudio(!$dailyRoomParticipants.local.audio)
    dailyRoomParticipants.set(CallObject.participants())
  }

  function leaveConferenceRoom () {
    const micAudioElems = document.querySelectorAll("audio"); 
    for (const micAudioElem of micAudioElems) {
      micAudioElem.remove(); 
    }
    cleanUpCallObject()
    // for (const track of $dailyMicStream.getAudioTracks()) {
    //   track.stop()
    // }
    prevCallState = 'connected'
    currentCallState = 'not_connected'
  }

  function cleanUpCallObject () {
    CallObject.leave()
    dailyRoomParticipants.set({})
    activeSpeakerID = ''
  }
</script>
