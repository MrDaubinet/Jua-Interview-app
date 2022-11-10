// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-static';
// import firebase from "svelte-adapter-firebase";
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
		  postcss: true,
		}),
	  ],

	kit: {
		// adapter: firebase(),
		adapter: adapter({
            pages: 'public',
            assets: 'public',
            fallback: 'index.html',
            precompress: false
		}),
		prerender: { entries: [] },
		files: {
			assets: 'static',
		}
	}
};

export default config;
