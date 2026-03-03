/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    extend: {},
  },
  plugins: [],
  // Prefixo para evitar conflitos com estilos do Roll20
  prefix: 'tw-',
}
