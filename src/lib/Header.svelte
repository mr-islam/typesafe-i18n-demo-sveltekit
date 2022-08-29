<script lang="ts">
	import LL, { locale } from '$i18n/i18n-svelte'
	import LocaleSwitcher from './LocaleSwitcher.svelte'

	function scrollIntoView({ target }) {
		const el = document.querySelector(target.getAttribute('href'))
		if (!el) return
		el.scrollIntoView({
			behavior: 'smooth',
		})
	}
</script>

<header>
	<div class="navigation-buttons">
		<a href="#courses" on:click|preventDefault={scrollIntoView}>{$LL.courses.title()}</a>
		<a href="#wisdoms" on:click|preventDefault={scrollIntoView}>
			{$LL.articles.title()}
			<!--  + $LL.and() + $LL.wisdoms.title() -->
		</a>
		<a href="#goals" on:click|preventDefault={scrollIntoView}>{$LL.goals.goal()}</a>
	</div>
	<div style="text-align: center; flex: 1;">
		<a href="/{$locale}">
			<img alt="Logo of Arabic calligraphy" id="logo" src="/logo-new.jpg" />
		</a>
		<br />
		{#if $LL.center() !== ''}
			<span>{$LL.center()}</span>
		{/if}
		<a href="/{$locale}">
			<h1>{$LL.title()}</h1>
		</a>

		<span>{$LL.slogan()}</span>
	</div>

	<div style="flex: 1; display: flex; justify-content: end;">
		<LocaleSwitcher />
	</div>
</header>

<style>
	div.navigation-buttons {
		display: flex;
		flex: 1;
		flex-direction: row;
		align-content: stretch;
		gap: 10px;
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
	}
	img#logo {
		border: 1px black solid;
		border-radius: 360px;
		max-width: 10vw;
		margin: 5px 12px 2px 5px;
	}
	@media only screen and (max-width: 600px) {
		img#logo {
			max-width: 8vw;
			margin: 10px;
		}
		header {
			position: relative;
			flex-direction: column-reverse;
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
	}
	h1 {
		font-size: 1.5rem;
		margin: 0;
	}
</style>
