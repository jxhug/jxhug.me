/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
        fontSize: {
            'ml': '1.125rem',
        },
        width: {
            '320' : '80rem',
        },
        boxShadow: {
            'ml': '0px 4px 20px rgba(0, 0, 0, 0.35)',
        },
        translate: {
            '3/20': '15%',
            '1/10': '10%',
            '1/20': '5%',
        },
        fontFamily: {
            'apple': ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI']
        },
        colors: {
            'lightgreen': '#8DD9B2',
            'normalgreen': '#8DD9B2',
            'darkgreen': '#3E8277',
            'darkgray': '#6d6d6d',
            'darkwhite': '#f2f2f2',
            'offdarkwhite': '#efefef',
            'darkergray': '#111111',
            'offdarkergray': '#1e1e1e',
        },
        backgroundImage: {
            'gradient': "linear-gradient(90deg, salmon, #ff3b3b, #ff9b57, salmon)",
            'lightdesktopjames': 'url(/images/bgs/lightdesktopjames.png)',
            'darkdesktopjames': 'url(/images/bgs/darkdesktopjames.png)'
        },
        backgroundSize: {
            '200%': '200%',
        },
        scale: {
            '102': '1.02',
        },
        borderRadius: {
            'ml': '7px',
        },
        animation: {
            'gradient-cycle': 'background-pan 3s ease infinite',
        },
        keyframes: {
            'background-pan': {
                '0%': { backgroundPosition: '0%' },
                '100%': { backgroundPosition: '-200%' },
            }
        }
    },
  },
  plugins: [],
}

