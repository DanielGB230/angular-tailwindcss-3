/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    content: ['./src/**/*.{html,js}'], // Ajusta la ruta según la estructura de tu proyecto
    options: {
      safelist: [], // Puedes agregar clases que no quieres que se eliminen
    },
  },
  darkMode: false, // o 'media' o 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

