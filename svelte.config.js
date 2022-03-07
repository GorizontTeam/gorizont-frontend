import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
import node from '@sveltejs/adapter-node'
const config = {
	kit: {
		// adapter: adapter(),

		// hydrate the <div id="svelte"> element in src/app.html
		// target: '#svelte',

		vite: {
			optimizeDeps: {
				exclude: ['@urql/svelte'],
			}
		},
		adapter: node(),
	}
};

export default config;
