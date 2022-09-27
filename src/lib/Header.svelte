<script lang="ts">
	import LL, { locale } from '$i18n/i18n-svelte'
	import LocaleSwitcher from './LocaleSwitcher.svelte'

	function scrollIntoView({ target }) {
		const el = document.querySelector(target.getAttribute('href'))
		if (!el) return
		el.scrollIntoView(true)
	}
</script>

<header>
	<div style="flex: 1;" />
	<div id="heading">
		<a href="/{$locale}">
			<img alt="Logo of Arabic calligraphy" id="logo" src="/logo-new.png" />
		</a>

		<div id="title-container">
			{#if $LL.center() !== ''}
				<span>{$LL.center()}</span>
			{/if}
			<a href="/{$locale}">
				<h1>{$LL.title()}</h1>
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
	}
	h1 {
		font-size: 2.2rem;
		margin: 0;
		
	}
	h2 {
		margin-top: -5px;
		font-size: 1.25rem;
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
		color: #4a5d33;
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
		max-width: 10vw;
	}

	@media only screen and (max-width: 900px) {
		img#logo {
			max-width: 12vw;
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
			padding-top: 10px;
		}
		h1 {
			font-size: 2rem;
		}
	}
	@media only screen and (max-width: 400px) {
		img#logo {
			max-width: 20vw;
			margin: 5px;
		}
	}
</style>
