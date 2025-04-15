const colors = require('tailwindcss/colors'); // Add this to import the colors module

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'teal-700-var': colors.teal[700],  // Using the correct color import
        secondary: '#9333EA',
        accent: '#F59E0B',
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
