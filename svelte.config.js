// @ts-check

import preprocess from 'svelte-preprocess'
import adapter from '@sveltejs/adapter-cloudflare';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),

		prerender: {
			default: true
		},

		alias: {
			$i18n: 'src/i18n',
		},
	},
}

export default config
