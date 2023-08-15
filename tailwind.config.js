const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        './pages/**/*.tsx',
        './components/**/*.tsx',
        './layouts/**/*.tsx',
        './lib/**/*.ts',
        './data/**/*.mdx',
    ],
    theme: {
        extend: {
            screens: {
                xs: '475px',
                xxs: '200px',
            },
            borderRadius: {
                DEFAULT: '8px',
            },
            spacing: {
                '9/16': '56.25%',
            },
            lineHeight: {
                11: '2.75rem',
                12: '3rem',
                13: '3.25rem',
                14: '3.5rem',
            },
            fontFamily: {
                sans: ['Open Sans', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                primary: colors.cyan,
                neutral: colors.slate,
                'placeholder-light': '#F0F0F0',
                'placeholder-dark': '#252525',
            },
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
    ],
};
