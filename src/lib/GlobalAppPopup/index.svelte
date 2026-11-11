<script context="module">
  // Same top-layer rule as actions.life BasePopup: Escape closes only the newest popup.
  let highestLayer = 0
</script>

<script>
  import BasePopup from '$lib/Reusable/BasePopup.svelte'
  import CalEmbed from './CalEmbed.svelte'
  import ReusableSignInButton from '$lib/Reusable/ReusableSignInButton.svelte'
  import { user } from '/src/store.js'
  import { getAuth, signOut } from 'firebase/auth'

  let isPopupOpen = false
  let currentLayer = 0

  function setIsPopupOpen (newVal) {
    isPopupOpen = newVal
  }

  function claimLayer () {
    currentLayer = ++highestLayer
    return {
      destroy () {
        highestLayer--
      }
    }
  }

  function onEscape (event) {
    if (!isPopupOpen || event.key !== 'Escape') return
    // A native popover consumes Escape first, same as actions.life BasePopup.
    if (document.querySelector(':popover-open')) return
    if (highestLayer !== currentLayer) return
    setIsPopupOpen(false)
    event.stopImmediatePropagation()
  }

  function handleSignout () {
    const auth = getAuth()
    signOut(auth).then(() => {
      window.location.reload()
    })
  }
</script>

<svelte:window on:keydown|capture={onEscape} />

<slot {isPopupOpen} {setIsPopupOpen}>

</slot>

{#if isPopupOpen}
  <div
    class="account-popup-layer"
    role="presentation"
    use:claimLayer
    on:click|self={() => setIsPopupOpen(false)}
    on:keydown={onEscape}
  >
  <BasePopup showClose={false} on:popup-close={() => setIsPopupOpen(false)} style="width: 80%; min-width: 360px; min-height: 360px; height: fit-content; padding: 24px;">
    <div slot="popup-content" style="padding: 24px; display: flex; flex-direction: column; gap: 24px; align-items: center;">
      {#if $user.uid}
        <button on:click={() => handleSignout()}>
          Log out
        </button>
      {:else}
        <!-- NOTE: ReusableSignInButton also has the same logic for logging out, so unify it later -->
        <ReusableSignInButton outlined={false}/>
      {/if}

      <CalEmbed />

      <!-- Blog, Github, etc. -->
      <div class="hide-on-mobile">
        <a href="https://eltonlin.substack.com/archive" target="_blank" 
          style="margin-left: 8px;"
        >
          <button
            class="button-shaped-round"
            style="font-size: 14px;"
          >
            SUBSTACK BLOG
          </button>
        </a>
      </div>

      <a href="https://github.com/greatTA1998/explain" target="_blank" 
        style="text-decoration-color: transparent;"
      >
        <div style="width: 38px; height: 38px; border-radius: 19px; background-color: white; display: flex; align-items: center; justify-content: center; box-sizing: border-box;">
          <img src="/github-logo-dark-mode-no-bg.png"
            style="width: 54px; height: 54px;"
            alt="Github"
          >
        </div>
      </a>

      <span>+1 503 250 3868</span>

      <span style="marign: 0;">elton@explanations.io</span>
    </div>
  </BasePopup>
  </div>
{/if}

<style>
  .account-popup-layer {
    position: fixed;
    z-index: 10;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: transparent;
  }

  .hide-on-mobile {
		display: flex;
	}

	@media only screen and (max-width: 767px) {
		.hide-on-mobile {
			display: none;
		}
	}
</style>