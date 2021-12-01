<LeftDrawer/>
<!-- <main></main> -->
<slot>

</slot>

<!-- TODO: whole point of components is it has no JS so can pre-render :) -->
<script>
	// import Header from '$lib/header/Header.svelte';
	import '../../app.css';
	import { onMount } from 'svelte'
	import LeftDrawer from '../LeftDrawer.svelte'
	import { goto } from '$app/navigation'
	import Button, { Label } from '@smui/button'
	import { portal } from '../../actions.js'


</script>

<!-- <style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 1024px;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style> -->

