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

<select id="select-lang" on:change={() => switchLocale(document.getElementById("select-lang").selectedOptions[0].value)}>
	<option value={"ar"} selected={$locale == "ar"}>العربية</option>
	<option value={"en"} selected={$locale == "en"}>English</option>
</select>

<style>
	header {
	  background-color: var(--pure-white);
	  display: flex;
	  flex-direction: row;
	  align-items: center;
	  justify-content: space-between;
	  border-bottom: 4px solid var(--primary-color);
	  left: 30vw;
	  padding: 10px 0;
	  z-index: 5;
	}
	img#logo {
	  border: 1px black solid;
	  border-radius: 360px;
	  max-width: 5vw;
	  margin: 5px 12px 2px 5px;
	  margin-left: 70px;
	}
	div > div > a {
	  background-color: var(--accent-color);
	  color: var(--primary-color);
	  padding: 5px;
	  margin: 5px;
	  border-radius: 4px;
	}
	
	div.flex-column {
	  margin: 20px 0 0 0;
	  display: flex;
	  flex-direction: column;
	  align-items: center;
	}
	@media only screen and (max-width: 600px) {
	  img#logo {
		max-width: 8vw;
		margin: 10px;
	  }
	  header {
		position: relative;
		flex-direction: column;
		left: 0;
		min-width: 100%;
		border-radius: 0px;
		top: 0px;
		border: 0px;
		padding-top: 10px;
	  }
	  h1 {
		font-size: 0.8rem;
	  }
	  div.flex-column {
		flex-direction: column;
	  }
	}
	select {
	  margin: 10px;
	}
	h1 {
	  font-size: 1.5rem;
	  margin: 0;
	}
  </style>
  