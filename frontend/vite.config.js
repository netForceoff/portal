// vite.config.js
import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
	define: {
		__IS_DEV__: true,
	},
	plugins: [
		react(),
		tsconfigPaths(),
		svgr({
			exportAsDefault: true,
			svgrOptions: {dimensions: true, removeDimensions: false},
		}),
	],
});
