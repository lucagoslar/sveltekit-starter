const preprocess = require('svelte-preprocess');
const { SassAlias } = require('svelte-preprocess-sass-alias-import');
const svg = require('vite-plugin-svelte-svg');
const { imagetools } = require('vite-imagetools');
const path = require('path');

const alias = new SassAlias({
	$scss: ['src', 'lib', 'global', 'scss']
});

module.exports = {
	stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx|svelte)'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
		'@storybook/addon-svelte-csf'
	],
	framework: '@storybook/svelte',
	core: {
		builder: '@storybook/builder-vite',
		disableTelemetry: true
	},
	svelteOptions: {
		preprocess: preprocess({
			scss: {
				importer: [alias.resolve.bind(alias)]
			}
		})
	},
	async viteFinal(config, { configType }) {
		config.plugins = [
			...config.plugins,
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
		];

		config.css = {
			preprocessorOptions: {
				scss: {
					importer: [alias.resolve.bind(alias)]
				}
			}
		};

		config.resolve.alias = {
			$scss: path.resolve(path.join('src', 'lib', 'global', 'scss')),
			$global: path.resolve(path.join('src', 'lib', 'global')),
			$helpers: path.resolve(path.join('src', 'lib', 'helpers'))
		};

		return config;
	},
	features: {
		storyStoreV7: false
	}
};
