const daisyui = require('daisyui');
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},
	daisyui: {
		themes: true,
		themes: ['light', 'dark']
	},
	plugins: [require('daisyui')]
};
