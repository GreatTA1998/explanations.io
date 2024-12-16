<script>
  import BasePopup from '$lib/BasePopup.svelte'
  import CalEmbed from '$lib/CalEmbed.svelte'
  import ReusableSignInButton from '$lib/ReusableSignInButton.svelte'
  import { user } from '/src/store.js'
  import { getAuth, signOut } from 'firebase/auth'

  function handleSignout () {
    const auth = getAuth()
    signOut(auth).then(() => {
      window.location.reload()
    })
  }

</script>

<!-- TO-DO: fix z-index -->
<BasePopup style="width: 80%; min-width: 360px; min-height: 360px; height: 80%;">
  <div slot="title" style="padding: 24px;">Global App Popup</div>

  <div slot="popup-content" style="padding: 24px;">
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
        style="margin-left: 8px; text-decoration-color: transparent;"
      >
        <button
          class="button-shaped-round"
          style="font-size: 12px; color: black;"
        >
          blog
        </button>
      </a>
    </div>

    <a href="https://github.com/greatTA1998/explain" target="_blank" 
      style="margin-left: 20px; text-decoration-color: transparent;"
    >
      <div style="width: 38px; height: 38px; border-radius: 19px; background-color: white; display: flex; align-items: center; justify-content: center; box-sizing: border-box;">
        <img src="/github-logo-dark-mode-no-bg.png"
          style="width: 54px; height: 54px;"
          alt="Github"
        >
      </div>
    </a>
  </div>
</BasePopup>

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