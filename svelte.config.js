import preprocess from 'svelte-preprocess';
import { windi } from 'svelte-windicss-preprocess';
export default {
	preprocess: [preprocess({preserve: ['ld+json']}), windi({})],
	kit: {
		target: '#svelte'
	}
};
