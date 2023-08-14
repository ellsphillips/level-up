/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: ['**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            screens: {
                xs: '475px',
                xxs: '200px',
            },
            borderRadius: {
                DEFAULT: '8px',
            },
            colors: {
                'level-up-yellow': '#ffd866',
                'level-up-orange': '#fc9867',
                'level-up-background': '#1C1B21',
                // Greyscale
                'level-up-black': '#222222',
                'level-up-grey-100': '#171717',
                'level-up-grey-85': '#414042',
                'level-up-grey-75': '#707071',
                'level-up-grey-55': '#969697',
                'level-up-grey-35': '#bcbcbd',
                'level-up-grey-15': '#e2e2e3',
                'level-up-grey-5': '#f5f5f6',
                'level-up-off-white': '#fbfbfb',
                'level-up-white': '#ffffff',

                // Brand
                'lu-grey-100': '#EEF0F6',
                'lu-grey-200': '#DADEEC',
                'lu-grey-300': '#C9D0E3',
                'lu-grey-400': '#B0BBD5',
                'lu-grey-500': '#B5BED9',
                'lu-grey-600': '#A3AED0',
                'lu-grey-700': '#707eae',
                'lu-grey-800': '#2D396B',
                'lu-grey-900': '#1B2559',
                'lu-cyan-100': '#cffafe',
                'lu-cyan-200': '#a5f3fc',
                'lu-cyan-300': '#67e8f9',
                'lu-cyan-400': '#21d4fd',
                'lu-cyan-500': '#17c1e8',
                'lu-cyan-600': '#0891b2',
                'lu-cyan-700': '#0e7490',
                'lu-cyan-800': '#155e75',
                'lu-cyan-900': '#164e63',
            },
            fontFamily: {
                sans: ['Open Sans', 'Helvetica', 'Arial', 'sans-serif'],
            },
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
    ],
};
