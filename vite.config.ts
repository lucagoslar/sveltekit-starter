import { sveltekit } from '@sveltejs/kit/vite';
import svg from 'vite-plugin-svelte-svg';
import { imagetools } from 'vite-imagetools';
import type { UserConfig } from 'vite';

import { alias } from './sass-alias';

const config: UserConfig = {
	css: {
		preprocessorOptions: {
			scss: {
				importer: [alias.resolve.bind(alias)]
			}
		}
	},
	plugins: [
		sveltekit(),
		svg({
			svgoConfig: {
				plugins: [
					{ name: 'removeXMLProcInst', active: true },
					{ name: 'removeComments', active: true },
					{ name: 'removeDoctype', active: true },
					{ name: 'minifyStyles', active: true }
				]
			}, // See https://github.com/svg/svgo#configuration
			requireSuffix: true // Set false to accept '.svg' without the '?component'
		}),
		imagetools({
			// defaultDirectives: handleDefaultDirectives
		})
	]
};

export default config;
