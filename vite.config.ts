import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import postcss from './postcss.config.js';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		port: 31415
	},
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
	css:{
		postcss
	}
});
