// tailwind.config.js

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // Акценти
        neonBlue: "#00ffff",
        neonPurple: "#BC13FE",

        // Основни
        backgroundDark: "#0a0a0a",
        backgroundLight: "#F8FAFC",    // нов светъл фон за секции/cards
        accentText: "#111827",         // почти черен за основен текст
        lightGray: "#E5E7EB",          // светло сиво за бордери/cards
        secondaryText: "#64748B",      // за footer и др.

        // Допълнителни ако искаш
        white: "#ffffff"
      },
      fontFamily: {
        sans: ["Helvetica Neue", "sans-serif"]
      }
    }
  },
  plugins: [],
};
