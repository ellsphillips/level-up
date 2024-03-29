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
    safelist: ['dark'],
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
            typography: theme => ({
                DEFAULT: {
                    css: {
                        color: theme('colors.neutral.700'),
                        a: {
                            color: theme('colors.primary.500'),
                            '&:hover': {
                                color: `${theme(
                                    'colors.primary.600',
                                )} !important`,
                            },
                            code: { color: theme('colors.primary.400') },
                        },
                        h1: {
                            fontWeight: '700',
                            letterSpacing: theme('letterSpacing.tight'),
                            color: theme('colors.neutral.900'),
                        },
                        h2: {
                            fontWeight: '700',
                            letterSpacing: theme('letterSpacing.tight'),
                            color: theme('colors.neutral.900'),
                        },
                        h3: {
                            fontWeight: '600',
                            color: theme('colors.neutral.900'),
                        },
                        'h4,h5,h6': {
                            color: theme('colors.neutral.900'),
                        },
                        pre: {
                            // backgroundColor: theme('colors.neutral.50'),
                        },
                        code: {
                            color: theme('colors.primary.500'),
                            backgroundColor: theme('colors.neutral.200'),
                            paddingLeft: '4px',
                            paddingRight: '4px',
                            paddingTop: '2px',
                            paddingBottom: '2px',
                            borderRadius: '0.25rem',
                        },
                        'code::before': {
                            content: 'none',
                        },
                        'code::after': {
                            content: 'none',
                        },
                        details: {
                            backgroundColor: theme('colors.neutral.100'),
                            paddingLeft: '4px',
                            paddingRight: '4px',
                            paddingTop: '2px',
                            paddingBottom: '2px',
                            borderRadius: '0.25rem',
                        },
                        hr: { borderColor: theme('colors.neutral.200') },
                        'ol li::marker': {
                            fontWeight: '600',
                            color: theme('colors.neutral.500'),
                        },
                        'ul li::marker': {
                            backgroundColor: theme('colors.neutral.500'),
                        },
                        strong: { color: theme('colors.neutral.600') },
                        blockquote: {
                            color: theme('colors.neutral.900'),
                            borderLeftColor: theme('colors.neutral.200'),
                        },
                    },
                },
                dark: {
                    css: {
                        color: theme('colors.neutral.300'),
                        a: {
                            color: theme('colors.primary.500'),
                            '&:hover': {
                                color: `${theme(
                                    'colors.primary.400',
                                )} !important`,
                            },
                            code: { color: theme('colors.primary.400') },
                        },
                        h1: {
                            fontWeight: '700',
                            letterSpacing: theme('letterSpacing.tight'),
                            color: theme('colors.neutral.100'),
                        },
                        h2: {
                            fontWeight: '700',
                            letterSpacing: theme('letterSpacing.tight'),
                            color: theme('colors.neutral.100'),
                        },
                        h3: {
                            fontWeight: '600',
                            color: theme('colors.neutral.100'),
                        },
                        'h4,h5,h6': {
                            color: theme('colors.neutral.100'),
                        },
                        pre: {
                            backgroundColor: theme('colors.neutral.800'),
                        },
                        code: {
                            backgroundColor: theme('colors.neutral.800'),
                        },
                        details: {
                            backgroundColor: theme('colors.neutral.800'),
                        },
                        hr: { borderColor: theme('colors.neutral.700') },
                        'ol li::marker': {
                            fontWeight: '600',
                            color: theme('colors.neutral.400'),
                        },
                        'ul li::marker': {
                            backgroundColor: theme('colors.neutral.400'),
                        },
                        strong: { color: theme('colors.neutral.100') },
                        thead: {
                            th: {
                                color: theme('colors.neutral.100'),
                            },
                        },
                        tbody: {
                            tr: {
                                borderBottomColor: theme('colors.neutral.700'),
                            },
                        },
                        blockquote: {
                            color: theme('colors.neutral.100'),
                            borderLeftColor: theme('colors.neutral.700'),
                        },
                    },
                },
            }),
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
    ],
};
