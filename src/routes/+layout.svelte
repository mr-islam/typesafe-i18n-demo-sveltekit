<script context="module">
	import { onMount, afterUpdate } from 'svelte'
</script>

<script lang="ts">
	import Header from '$lib/Header.svelte'
	import { documentDirectionUpdated } from '$lib/stores'
	// delaying display till the document direction is set,
	// so there is no ugly flip of content for eng users.

	import { setLocale, locale } from '$i18n/i18n-svelte'
	import type { LayoutData } from './$types'
	export let data: LayoutData

	setLocale(data.locale)
</script>

<Header />

{#if $documentDirectionUpdated}
	<main>
		<slot />
	</main>
{:else}
	Loading...
{/if}

<style lang="scss" global>
	@import '../styles/global.scss';
	main {
		padding: 0 12rem;
	}
	@media only screen and (max-width: 1000px) {
		main {
			padding: 0 5rem;
		}
	}
	@media only screen and (max-width: 600px) {
		main {
			padding: 0;
		}
	}
</style>
