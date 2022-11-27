/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        main: '#00C4CC',
        black: '#23221F',
        orange: '#FF9900',
        stone: {
          1: '#F8F7F6',
          2: '#EDEBE6',
          3: '#AAA69F',
        },
        border: '#78818F',
      },
      boxShadow: {
        default: '0 4px 4px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: ['tailwindcss'],
  extends: ['plugin:tailwindcss/recommended'],
}
