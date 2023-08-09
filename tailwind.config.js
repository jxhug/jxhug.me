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
            'manrope': ['Manrope', 'sans-serif'],
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
            'blue-gradient': "linear-gradient(90deg, #60a5fa, #22d3ee, #38bdf8, #60a5fa)",
            'orange-gradient': "linear-gradient(90deg, orange, #ff3b3b, #ff9b57, orange)",
            'yosemite': 'url(/images/bgs/yosemite.webp)',
            'homelight': 'linear-gradient(90deg, rgba(242,242,242,1) 33%, rgba(242,242,242,0.7) 70%, rgba(242,242,242,0) 100%)',
            'homedark': 'linear-gradient(90deg, rgba(17,17,17,1) 50%, rgba(17,17,17,0.5) 70%, rgba(17,17,17,0) 100%)',
            'phoenix' : 'url(/images/bgs/phoenix.webp)',
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
        },
        dropShadow: {
            '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
            '4xl-orange': [
                '0 35px 35px rgba(180, 80, 60, 0.5)',
            ]
        }
    },
  },
  plugins: [],
}

