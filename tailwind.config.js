/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        colors: {
            black: {
                value: 'rgba(0,0,0,1)',
                type: 'color',
            },
            white: {
                value: 'rgba(255,255,255,1)',
                type: 'color',
            },
            gray: {
                50: {
                    value: '#f9fafb',
                    type: 'color',
                },
                80: {
                    value: '#f1f3f5',
                    type: 'color',
                },
                100: {
                    value: '#e5e9ed',
                    type: 'color',
                },
                200: {
                    value: '#d3d8df',
                    type: 'color',
                },
                300: {
                    value: '#b6bac3',
                    type: 'color',
                },
                400: {
                    value: '#868d9a',
                    type: 'color',
                },
                500: {
                    value: '#6b7280',
                    type: 'color',
                },
                600: {
                    value: '#4d5668',
                    type: 'color',
                },
                700: {
                    value: '#363e4f',
                    type: 'color',
                },
                800: {
                    value: '#212837',
                    type: 'color',
                },
                900: {
                    value: '#111827',
                    type: 'color',
                },
            },
            orange: {
                50: {
                    value: '#fff1e1',
                    type: 'color',
                },
                80: {
                    value: '#ffe9cf',
                    type: 'color',
                },
                100: {
                    value: '#ffe0bc',
                    type: 'color',
                },
                200: {
                    value: '#fec48c',
                    type: 'color',
                },
                300: {
                    value: '#faa666',
                    type: 'color',
                },
                400: {
                    value: '#f58235',
                    type: 'color',
                },
                500: {
                    value: '#ec5d25',
                    type: 'color',
                },
                600: {
                    value: '#b94710',
                    type: 'color',
                },
                700: {
                    value: '#893404',
                    type: 'color',
                },
                800: {
                    value: '#632501',
                    type: 'color',
                },
                900: {
                    value: '#471700',
                    type: 'color',
                },
            },
            blue: {
                50: {
                    value: '#ebf8ff',
                    type: 'color',
                },
                80: {
                    value: '#d2edff',
                    type: 'color',
                },
                100: {
                    value: '#b9e2ff',
                    type: 'color',
                },
                200: {
                    value: '#86cbff',
                    type: 'color',
                },
                300: {
                    value: '#60acff',
                    type: 'color',
                },
                400: {
                    value: '#3d89ff',
                    type: 'color',
                },
                500: {
                    value: '#0a65e7',
                    type: 'color',
                },
                600: {
                    value: '#054db9',
                    type: 'color',
                },
                700: {
                    value: '#033a94',
                    type: 'color',
                },
                800: {
                    value: '#0b2e70',
                    type: 'color',
                },
                900: {
                    value: '#001f5c',
                    type: 'color',
                },
            },
            green: {
                50: {
                    value: '#d9fbe5',
                    type: 'color',
                },
                80: {
                    value: '#c2f4d5',
                    type: 'color',
                },
                100: {
                    value: '#abeec4',
                    type: 'color',
                },
                200: {
                    value: '#70dc9d',
                    type: 'color',
                },
                300: {
                    value: '#4bc17f',
                    type: 'color',
                },
                400: {
                    value: '#2ea363',
                    type: 'color',
                },
                500: {
                    value: '#1b7e49',
                    type: 'color',
                },
                600: {
                    value: '#116238',
                    type: 'color',
                },
                700: {
                    value: '#044e2a',
                    type: 'color',
                },
                800: {
                    value: '#003d20',
                    type: 'color',
                },
                900: {
                    value: '#002d18',
                    type: 'color',
                },
            },
            yellow: {
                50: {
                    value: '#fffbe0',
                    type: 'color',
                },
                80: {
                    value: '#fceeaf',
                    type: 'color',
                },
                100: {
                    value: '#fae17d',
                    type: 'color',
                },
                200: {
                    value: '#eac54f',
                    type: 'color',
                },
                300: {
                    value: '#d4a72c',
                    type: 'color',
                },
                400: {
                    value: '#bf8700',
                    type: 'color',
                },
                500: {
                    value: '#9a6700',
                    type: 'color',
                },
                600: {
                    value: '#7d4e00',
                    type: 'color',
                },
                700: {
                    value: '#633c01',
                    type: 'color',
                },
                800: {
                    value: '#4d2d00',
                    type: 'color',
                },
                900: {
                    value: '#3b2300',
                    type: 'color',
                },
            },
            red: {
                50: {
                    value: '#fff1f0',
                    type: 'color',
                },
                80: {
                    value: '#ffdfde',
                    type: 'color',
                },
                100: {
                    value: '#ffcecb',
                    type: 'color',
                },
                200: {
                    value: '#ffaba9',
                    type: 'color',
                },
                300: {
                    value: '#ff8183',
                    type: 'color',
                },
                400: {
                    value: '#fa454c',
                    type: 'color',
                },
                500: {
                    value: '#cf2231',
                    type: 'color',
                },
                600: {
                    value: '#a40e29',
                    type: 'color',
                },
                700: {
                    value: '#820720',
                    type: 'color',
                },
                800: {
                    value: '#660019',
                    type: 'color',
                },
                900: {
                    value: '#4c0015',
                    type: 'color',
                },
            },
            purple: {
                50: {
                    value: '#fcf5ff',
                    type: 'color',
                },
                80: {
                    value: '#f3e7ff',
                    type: 'color',
                },
                100: {
                    value: '#ead9ff',
                    type: 'color',
                },
                200: {
                    value: '#d4baff',
                    type: 'color',
                },
                300: {
                    value: '#bc9aff',
                    type: 'color',
                },
                400: {
                    value: '#9b79f9',
                    type: 'color',
                },
                500: {
                    value: '#7855df',
                    type: 'color',
                },
                600: {
                    value: '#5d3ac2',
                    type: 'color',
                },
                700: {
                    value: '#4a2b9e',
                    type: 'color',
                },
                800: {
                    value: '#38207f',
                    type: 'color',
                },
                900: {
                    value: '#281566',
                    type: 'color',
                },
            },
        },

        extend: {
            fontSize: {
                largetitle: ['2.125rem', '2.625rem'],
                title1: ['1.75rem', '2.125rem'],
                title2: ['1.375rem', '1.75rem'],
                title3: ['1.25rem', '1.5rem'],
                body1: ['1.0625rem', '1.5rem'],
                body2: ['0.875rem', '1.25rem'],
                footnote: ['0.8125rem', '1.125rem'],
                caption1: ['0.75rem', '1rem'],
                caption2: ['0.6875rem', '0.875rem'],
            },
        },
    },
    plugins: [],
};
