const daisyui = require('daisyui');
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {}
    },
    daisyui: {
        themes: true,
        themes: ['light', 'dark'],
        themes: [
            {
                'light': {
                    "primary": "#ffffff",
                    "secondary": "#d62828",
                    "accent": "#e85d04",
                    "neutral": "#003049",
                    "base-100": "#ffffff",

                },
            },],
        logs: false
    },
    plugins: [require('daisyui')]
};
