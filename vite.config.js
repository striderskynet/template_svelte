import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
	plugins: [sveltekit()],
	resolve: {
		alias: {
			$assets: path.resolve(__dirname, './src/assets'),
			$components: path.resolve(__dirname, './src/components'),
			$config: path.resolve(__dirname, './src/config'),
			$database: path.resolve(__dirname, './src/database'),
			$hooks: path.resolve(__dirname, './src/hooks'),
			$language: path.resolve(__dirname, './src/language'),
			$lib: path.resolve(__dirname, './src/lib'),
			$routes: path.resolve(__dirname, './src/routes'),
			$stores: path.resolve(__dirname, './src/stores'),
			$utils: path.resolve(__dirname, './src/utils'),
			$static: path.resolve(__dirname, './src/static')
		}
	}
});
