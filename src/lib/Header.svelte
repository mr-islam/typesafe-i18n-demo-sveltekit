<script lang="ts">
	import LL, { locale } from '$i18n/i18n-svelte'
	import LocaleSwitcher from './LocaleSwitcher.svelte'
	// import { onMount, afterUpdate } from 'svelte'

	// let p_elements // This below: for custom styles (fonts mainly) based on language
	// onMount(() => {
	// 	p_elements = document.querySelectorAll('.intro-bullet')
	// 	for (const p_element of p_elements) {
	// 		p_element.classList.add($locale === 'ar' ? 'rtl' : 'ltr')
	// 	}
	// })
	// afterUpdate(() => {
	// 	for (const p_element of p_elements) {
	// 		p_element.classList.add($locale === 'ar' ? 'rtl' : 'ltr')
	// 	}
	// })

</script>

<header>
	<div style="flex: 1;" />
	<div id="heading">
		<a href="/{$locale}">
			<section class="img-bg"></section>
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
	.img-bg {
		width: 14vw;
		height: 14vw;
		/* margin: 0 0 1vw 1vw; */
		position: absolute;
		background-image: linear-gradient(#017878, #017878);
		filter: blur(12px);
		z-index: -1;
		border-radius: 50%;
		animation: pulse 4s cubic-bezier(0,0,0,0.5);
	}
	@keyframes pulse {
		50% {
			transform: scale(1.5)
		}
	}
	div#title-container {
		flex: 1;
		border-radius: 12px;
		border: 4px solid #017878;
		padding: 8px;
		background-color: #ecffff;
		color: #017878;
	}
	h1 {
		font-size: 2.2rem;
		margin: 0;
	}
	h2 {
		/* margin-top: -5px; */
		font-size: 1.25rem;
		/* color: inherit; */
		font-weight: bold;
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
		max-width: 14vw;
		/* box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;	 */
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
			padding-top: 10px;
		}
		h1 {
			font-size: 2rem;
		}
	}
	@media only screen and (max-width: 400px) {
		img#logo {
			max-width: 40vw;
			margin: 5px;
		}
	}
</style>
