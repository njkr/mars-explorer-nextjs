/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'clr-background': '#000000',
        'clr-background-light': 'rgba(0, 0, 0, 0.05)',
        'clr-bg-orange': '#FF5C00',
        'clr-bg-blue': '#22A8F2',
        'clr-white': '#FFFFFF',
        'clr-white-light': 'rgba(255, 255, 255, 0.05)',
      },
      fontFamily: {
        Ubuntu: ['Ubuntu', 'sans-serif'],
        MovieBold: ['MovieBold', 'sans-serif'],
        MovieBoldItalic: ['MovieBoldItalic', 'sans-serif'],
        MovieReg: ['MovieReg', 'sans-serif'],
      },
      maxWidth: {
        'max-width': '1366px',
        'max-custom': '1437px',
      },
      minWidth: {
        'max-width': '1366px',
        'max-custom': '1437px',
      },
      width: {
        '90vw': '90vw',
        '80vw': '80vw',
        '70vw': '70vw',
        '60vw': '60vw',
      },
    },
  },
  plugins: [],
}

