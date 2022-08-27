<script lang="ts">
	import LL, { locale } from '$i18n/i18n-svelte'
	import LocaleSwitcher from './LocaleSwitcher.svelte'
</script>

<header>
	<a href="/{$locale}">
		<img alt="Logo of Arabic calligraphy" id="logo" src="/logo-new.jpg" />
	</a>

	<div style="text-align: center;">
		{#if $LL.center() !== ""}
      <span>{$LL.center()}</span>
    {/if}
		<h1>{$LL.title()}</h1>
		<span>{$LL.slogan()}</span>
	  </div>

	<LocaleSwitcher />
</header>

<style>
	header {
	  /* background-color: var(--primary-color); */
	  display: flex;
	  flex-direction: row;
	  align-items: center;
	  justify-content: space-between;
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
  