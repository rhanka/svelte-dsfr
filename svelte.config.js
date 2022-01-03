import preprocess from 'svelte-preprocess'
import svg from '@poppanator/sveltekit-svg'
import static_adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess({
    postcss: true
  }),

  kit: {
    // hydrate the <div id="svelte"> element in src/app.html
    target: '#svelte',
    vite: {
      // Options are optional
      plugins: [svg()]
    },
    paths: {
			base: process.env.PATHS_BASE || '',
		},
    adapter: static_adapter({
      pages: 'build',
      assets: 'build',
      fallback: 'index.html'
    })
  }
}

export default config
