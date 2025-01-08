/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      container: {
        center: true,
      },
    },
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'], // Define Montserrat como a fonte padrão
    },
  },
  plugins: [],
};
