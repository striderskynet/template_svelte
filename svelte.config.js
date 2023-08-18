import adapter from '@sveltejs/adapter-auto';
//import { vitePreprocess } from "@sveltejs/kit/vite";

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
        // adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
        // If your environment is not supported or you settled on a specific environment, switch out the adapter.
        // See https://kit.svelte.dev/docs/adapters for more information about adapters.
        adapter: adapter(),
        alias: {
            $assets: './src/assets',
            $components: './src/components',
            $config: './src/config',
            $database: './src/database',
            $hooks: './src/hooks',
            $language: './src/language',
            $lib: './src/lib',
            $routes: './src/routes',
            $stores: './src/stores',
            $utils: './src/utils',
            $static: './src/static'
        }
    }
    //preprocess: vitePreprocess(),
};

export default config;
