/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue, js,ts,jsx,tsx}"
  ],
  theme: {
    screens:{
      "sm": { "min": "350px", "max": "767px" },
      "md": { "min": "768px", "max": "1023px" },
      "lg": { "min": "1024", "max": "1279px" },
      "xl": { "min": "1280px", "max": "1535" }
    },
    extend: {},
  },
  plugins: [],
}

