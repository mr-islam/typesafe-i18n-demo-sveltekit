// @ts-check

import preprocess from 'svelte-preprocess'
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(),

	kit: {
		adapter: adapter({
			// default options are shown. On some platforms
			// these options are set automatically — see below
			pages: 'build',
			assets: 'build',
			fallback: null,
			precompress: false
		}),
		prerender: {
			// This can be false if you're using a fallback (i.e. SPA mode)
			default: true
		},

		alias: {
			$i18n: 'src/i18n',
		},
	},
}

export default config
