<script lang="ts">
	import LL, { locale } from '$i18n/i18n-svelte'
	import LocaleSwitcher from './LocaleSwitcher.svelte'
	import { onMount, afterUpdate } from 'svelte'
	import { page } from '$app/stores';

	console.log($page.url.pathname)

	let h1_element // This below: for custom styles (fonts mainly) based on language
	onMount(() => {
		h1_element = document.getElementById('h1-title-text')
		h1_element.classList.add($locale === 'ar' ? 'rtl' : 'ltr')
	})
	afterUpdate(() => {
		// clear all old classes
		h1_element.classList.remove("rtl");
		h1_element.classList.remove("ltr");
		// add current correct class 
		h1_element.classList.add($locale === 'ar' ? 'rtl' : 'ltr')
	})
</script>

<header>
	<div style="flex: 1;">
		{#if $page.url.pathname != '/en' && $page.url.pathname != '/ar'}
			<a href="/">{$LL.back_main_page()}</a>
		{/if}
	</div>
	<div  />
	<div id="heading">
		<a href="/{$locale}">
			<section class="img-bg" />
			<img alt="Logo of Arabic calligraphy" id="logo" src="/logo-new.png" />
		</a>

		<div id="title-container">
			{#if $LL.center() !== ''}
				<span>{$LL.center()}</span>
			{/if}
			<a href="/{$locale}">
				<h1 id="h1-title-text">{$LL.title()}</h1>
			</a>

			<h2>{$LL.slogan()}</h2>
		</div>
	</div>

	<div id="lang-switcher">
		<LocaleSwitcher />
	</div>
</header>

<style>
	div#title-container {
		flex: 1;
		padding: 8px;
		border-radius: 12px;
		/* color: #017878; */
		/* border: 1px solid #017878; */
		/* background-color: #ecffff; */
		/* box-shadow: rgba(1, 120, 120, 0.16) 0px 1px 4px; */
	}
	h1 {
		font-size: 2.2rem;
		margin: 0;
		font-weight: bold;
	}
	:global(#h1-title-text.rtl) {
		margin-top: -20px;
	}
	h2 {
		/* margin-top: -5px; */
		font-size: 1.25rem;
		color: inherit;
		font-weight: bold;
		/* color: #017878; */
	}
	div#heading {
		flex-direction: column;
		text-align: center;
		flex: 1;
	}
	div#lang-switcher {
		flex: 1;
		display: flex;
		justify-content: end;
	}
	div#heading {
		flex: 1;
		display: flex;
		gap: 10px;
		align-items: center;
	}
	a {
		all: unset;
	}
	a:hover {
		cursor: pointer;
		text-decoration: dotted underline 2px #4a5d33;
	}
	header {
		/* background-color: var(--primary-color); */
		display: flex;
		flex-direction: row;
		align-items: center;
		left: 30vw;
		padding: 10px 20px;
		z-index: 5;
		margin-top: 10px;
		padding: 1rem 2rem;
		gap: 10px;
	}
	img#logo {
		border: 1px black solid;
		border-radius: 360px;
		max-width: 180px;
		box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
	}
	h2 {
		margin-bottom: 0;
	}

	@media only screen and (max-width: 900px) {
		img#logo {
			max-width: 22vw;
			margin: 5px;
		}
		header {
			position: relative;
			flex-direction: column;
			left: 0;
			min-width: 100%;
			border-radius: 0px;
			top: 0px;
			border: 0px;
			padding: 10px 0 0 0;
			margin-top: 0;
		}
		h1 {
			font-size: 2rem;
		}
		div#title-container {
			padding: 0;
		}
	}
	@media only screen and (max-width: 400px) {
		img#logo {
			max-width: 40vw;
			margin: 5px;
		}
	}
</style>
