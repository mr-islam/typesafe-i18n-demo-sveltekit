<script context="module">
	import { onMount, afterUpdate } from 'svelte'
</script>

<script lang="ts">
	import Header from '$lib/Header.svelte'
	import { setLocale, locale } from '$i18n/i18n-svelte'
	import type { LayoutData } from './$types'

	export let data: LayoutData

	setLocale(data.locale)
	onMount(() => {
		document.dir = $locale === 'ar' ? 'rtl' : 'ltr'
	})
	afterUpdate(() => {
		document.dir = $locale === 'ar' ? 'rtl' : 'ltr'
	})
</script>

<Header />

<main>
	<slot />
</main>

<style lang="scss" global>
	@import '../styles/global.scss';
</style>
