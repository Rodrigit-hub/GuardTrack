/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/*.{js,ts,jsx,tsx}",
    './pages/*.{js,jsx,ts,tsx}',  // Nueva línea para incluir la carpeta pages
    './components/**/*.{js,jsx,ts,tsx}',  // Nueva línea para incluir la carpeta components
   
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

