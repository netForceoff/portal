import {defineConfig} from 'cypress';

import webpackConfig from './config/webpack/config';
// TODO понять почему не работает webpackconfig
export default defineConfig({
	e2e: {
		setupNodeEvents(on, config) {
			// implement node event listeners here
		},
		baseUrl: 'http://localhost:5000',
	},

	component: {
		devServer: {
			framework: 'react',
			bundler: 'webpack',
			webpackConfig,
		},
	},
});
