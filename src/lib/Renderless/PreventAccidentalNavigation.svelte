<!-- Documentation: https://www.notion.so/Prevent-accidental-page-leave-6dbab99118a240698b19d683d014f97f -->
<script>
  export const ssr = false;

  import { beforeNavigate } from '$app/navigation'
  import { onMount, onDestroy} from 'svelte'
  import { willPreventPageLeave } from '/src/store.js';
  import { browser } from '$app/environment';

  beforeNavigate(({ from, to, cancel }) => {
    askForConfirmation(cancel)
  })

  // TO-DO: known problems
  //    iOS back-and-forth behaves differently to windows
  //    Even though redirect is prevented, the audio recording stops for iOS
  //    For Windows, it messes up the stream in the middle but then it resumes to normal

  onMount(() => {
    if (browser) {
      // handles reloading or quitting
      // note: doesn't trigger for iOS Safari
      window.onbeforeunload = function (event) {
        // setting `event` to an empty magically will handle the confirmation behavior
        event.returnValue = '' 
      }
    }
   })

  onDestroy(() => {
    if (browser) {
      // no need to destroy the `onbeforeunload` listener as that'd mean we quit the app completely
    }
  })

  function askForConfirmation (cancelFunction) {
    if ($willPreventPageLeave) {
      const warningMessage = "WARNING: video is still recording / uploading, are you sure you want to discard it and leave?"
      if (window.confirm(warningMessage)) {
        willPreventPageLeave.set(false)
      } else {
        cancelFunction()
      }
    }
  }

  // PREVENTS USER FROM ACCIDENTALLY LEAVING THE PAGE
  // correctness argument: https://explain.mit.edu/mDbUrvjy4pe8Q5s5wyoD/3IAf1lUTz1gdwxi3blth
  // catches forward and backward
  // window.addEventListener('popstate', onBackOrForward)

  // catches reload AND closing browser (was surprised it works for Chrome at least)
  // window.onbeforeunload = function (event) {
  //   if (recordState === 'mid_record') {
  //     event.returnValue = ''
  //   } 
  //   // no need to unlisten - because it means the page was destroyed
  // }

  // onDestroy(() => {
  // window.removeEventListener('popstate', onBackOrForward)
  // })

  // function onBackOrForward () {
  // if (recordState === 'mid_record') {
  //   if (confirm('This will interrupt your current recording, are you sure?')) {

  //   }
  //   else {
  //     // luckily, the browser won't go back-and-forth it actually knows to wait for the state to resolve 
  //     // and jus tstay in place
  //     history.pushState(null, document.title, location.href);
  //   }
  // }
  // }
</script>