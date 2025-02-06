/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          500: '#E4B94D',
          600: '#D4AA40',
          700: '#C49B33',
        },
        secondary: {
          500: '#1C4B82',
          600: '#163D6F',
          700: '#102F5C',
        },
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
      },
      fontFamily: {
        'space': ['Space Grotesk', 'sans-serif'],
        'arsenica': ['Arsenica Antiqua', 'serif'],
      },
    },
  },
  plugins: [],
};