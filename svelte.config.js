import adapter from '@sveltejs/adapter-auto';
import path from 'path';
import preprocess from 'svelte-preprocess';

import { alias } from './sass-alias.js';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({
		scss: {
			importer: [alias.resolve.bind(alias)]
		}
	}),

	kit: {
		alias: {
			$global: path.join('src', 'lib', 'global'),
			$scss: path.join('src', 'lib', 'global', 'scss'),
			$helpers: path.join('src', 'lib', 'helpers')
		},
		adapter: adapter()
	}
};

export default config;
