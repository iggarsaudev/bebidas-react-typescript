/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.htmal",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage : {
        "header" : "url('/bg.jpg')"
      }
    },
  },
  plugins: [],
}

