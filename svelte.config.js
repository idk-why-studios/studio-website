import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-netlify';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const config = {
	preprocess: [vitePreprocess(), mdsvex()],
	kit: {
		adapter: adapter({
			edge: false,
			split: false,
			fallback: 'index.html'
		}),
		prerender: {
			entries: ['*']
		}
	},
	extensions: ['.svelte', '.svx']
};

export default config;
