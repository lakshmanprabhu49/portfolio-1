/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,json}",],
  theme: {
    extend: {
      colors: {
        blue1: '#2D364F',
        blue2: '#E0E8FE',
        brown1: '#ECBC3F',
        brown2: '#6B5A2E',
        brown3: '#FEF3D8',
        white1: '#FFFFFF',
        black1: '#000000',
      },
      fontFamily: {
        'rambla': ['Rambla'],
        'orelegaOne': ['Orelega One'],
        'palatinoLinotype': ['Palatino Linotype'],
        'timesNewRoman': ['Times New Roman'],
        'merriweather': ['Merriweather'],
        'rakkas': ['Rakkas']
      },
      margin: {
        '100': '30rem'
      },
      minWidth: {
        '1/5': '20%',
        '1/4': '25%',
        '2/5': '40%',
        '1/2': '50%',
        '3/5': '40%',
        '3/4': '75%',
        '4/5': '75%',
      },
      maxWidth: {
        '1/5': '20%',
        '1/4': '25%',
        '2/5': '40%',
        '1/2': '50%',
        '3/5': '40%',
        '3/4': '75%',
        '4/5': '75%',
      },
      minHeight: {
        '1/2': '50vh',
        '3/5': '60vh',
        '3/4': '75vh',
      },
      maxHeight: {
        '3/5': '60vh',
        '3/4': '75vh',
        '7/8': '88vh',
      },
      height: {
        '60vh': '60vh',
      },
      borderRadius: {
        '5xl': '4rem',
        '10xl': '5rem'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
  important: true
}
