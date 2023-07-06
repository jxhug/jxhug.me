/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
        fontSize: {
            xs: "0.75rem",
            sm: "0.875rem",
            base: "1rem",
            lg: "1.125rem",
            xl: "1.25rem",
            "2xl": "1.5rem",
            "3xl": "1.875rem",
            "4xl": "2.25rem",
            "5xl": "3rem",
            "6xl": "4rem",
          },
        width: {
            '320' : '80rem',
            '160' : '40rem',
            '240' : '60rem',
            '220' : '55rem',
            '200': '50rem',
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
            'apple': ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
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
            'white-transparent-gradient': "linear-gradient(0deg, #f2f2f2, #efefef, transparent)",
            'black-transparent-gradient': "linear-gradient(0deg, #111111, #1e1e1e, transparent)",
            'red-gradient': "linear-gradient(90deg, salmon, #ff3b3b, #ff9b57, salmon)",
            'orange-gradient': "linear-gradient(90deg, orange, #ff3b3b, #ff9b57, orange)",
            'blue-gray-gradient': "linear-gradient(90deg, #475569, #075985, #0ea5e9, #075985)",
            'lightdesktopjames': 'url(/images/bgs/lightdesktopjames.webp)',
            'darkdesktopjames': 'url(/images/bgs/darkdesktopjames.webp)'
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

