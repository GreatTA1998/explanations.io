<script>
  import BasePopup from '$lib/BasePopup.svelte'
  import CalEmbed from '$lib/CalEmbed.svelte'
  import ReusableSignInButton from '$lib/ReusableSignInButton.svelte'
  import { user } from '/src/store.js'
  import { getAuth, signOut } from 'firebase/auth'

  let isPopupOpen = false

  function setIsPopupOpen (newVal) {
    isPopupOpen = newVal
  }

  function handleSignout () {
    const auth = getAuth()
    signOut(auth).then(() => {
      window.location.reload()
    })
  }
</script>

<slot {isPopupOpen} {setIsPopupOpen}>

</slot>

{#if isPopupOpen}
  <BasePopup on:popup-close={() => setIsPopupOpen(false)} style="width: 80%; min-width: 360px; min-height: 360px; height: fit-content; padding: 24px;">
    <div slot="title"></div>

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

      <p>+1 503 250 3868</p>

      <p>elton@explanations.io</p>
    </div>
  </BasePopup>
{/if}

<style>
  .hide-on-mobile {
		display: flex;
	}

	@media only screen and (max-width: 767px) {
		.hide-on-mobile {
			display: none;
		}
	}
</style>