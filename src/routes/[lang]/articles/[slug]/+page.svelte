<script>
	import LL from '$i18n/i18n-svelte'
	import SvelteMarkdown from 'svelte-markdown'
	import { page } from '$app/stores'

	const source = $LL.articles[$page.params.slug].content().replace(/\\n/g, '<br />')
</script>

<div>
	<SvelteMarkdown {source} />
</div>

<style lang="scss">
	div {
		width: 50vw;
	}
	@media only screen and (max-width: 600px) {
		div {
			width: 90vw;
		}
	}
</style>
