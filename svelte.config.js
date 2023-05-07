import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { resolve } from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter(),
		alias: {
			$src: resolve('./src/'),
			$lib: resolve('./src/lib/'),
			$components: resolve('./src/lib/components/'),
			$stores: resolve('./src/lib/stores/'),
			$templates: resolve('./src/lib/templates/'),
			$utils: resolve('./src/lib/utils/'),
			$types: resolve('./src/types/'),
			$styles: resolve('./src/styles')
		}
	}
};

export default config;
