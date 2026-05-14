// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['Lora', 'serif'],
        'sans': ['Poppins', 'sans-serif'],
      },
      colors: {
        'brand-background': '#FDFBF5',
        'brand-text': '#4F4A45',
        'brand-primary': '#C8A07D',
        'brand-secondary': '#8A6F58',
        'brand-accent': '#A87C7C',
      }
    },
  },
  plugins: [],
}