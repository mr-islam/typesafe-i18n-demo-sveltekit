<script lang="ts">
	import { browser } from '$app/env'
	import { page } from '$app/stores'
	import { setLocale, locale } from '$i18n/i18n-svelte'
	import type { Locales } from '$i18n/i18n-types'
	import { loadLocaleAsync } from '$i18n/i18n-util.async'
	import { replaceLocaleInUrl } from '../utils'

	const switchLocale = async (newLocale: Locales, updateHistoryState = true) => {
		if (!newLocale || $locale === newLocale) return

		// load new dictionary from server
		await loadLocaleAsync(newLocale)

		// select locale
		setLocale(newLocale)

		// update `lang` attribute
		document.querySelector('html').setAttribute('lang', newLocale)

		if (updateHistoryState) {
			// update url to reflect locale changes
			history.pushState({ locale: newLocale }, '', replaceLocaleInUrl(location.pathname, newLocale))
		}
	}

	// update locale when navigating via browser back/forward buttons
	const handlePopStateEvent = async ({ state }: PopStateEvent) => switchLocale(state.locale, false)

	// update locale when page store changes
	$: if (browser) {
		const lang = $page.params.lang as Locales
		switchLocale(lang, false)
		history.replaceState({ ...history.state, locale: lang }, '', replaceLocaleInUrl(location.pathname, lang))
	}
</script>

<svelte:window on:popstate={handlePopStateEvent} />

<div id="select-container">
	<select
		id="select-lang"
		on:change={() => switchLocale(document.getElementById('select-lang').selectedOptions[0].value)}
	>
		<option value={'ar'} selected={$locale == 'ar'}>العربية</option>
		<option value={'en'} selected={$locale == 'en'}>English</option>
	</select>
</div>

<style>
	select {
		/* appearance: none; */
		background-color: transparent;
		border: none;
		padding: 10px 20px;
		margin: 0;
		width: 100%;
		font-family: inherit;
		font-size: inherit;
		cursor: inherit;
		line-height: inherit;
	}
	div#select-container {
		border-radius: 12px !important;
		font-size: 16px;
		cursor: pointer;
		line-height: 1.9;
		background-color: #fff;
		box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
		max-width: 110px;
	}
	@media only screen and (max-width: 1100px) {
		select {
			padding: 5px 10px;
		}
		div#select-container {
			padding: 0.12em 0.25em;
			width: 90%;
			font-size: 16px;
			
			background-color: transparent;
			box-shadow: none;
		}
	}
	@media only screen and (max-width: 400px) {
		select {
		}
		div#select-container {
			padding: 0.12em 0.25em;
			width: 90%;
			font-size: 14px;
		}
	}
</style>
