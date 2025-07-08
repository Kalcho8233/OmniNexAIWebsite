// tailwind.config.js
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",          // ако използваш Next.js App Router
    "./pages/**/*.{js,ts,jsx,tsx}",        // за Pages Router
    "./components/**/*.{js,ts,jsx,tsx}"    // компоненти
  ],
  theme: {
    extend: {
      colors: {
        // Акценти
        neonBlue: "#00ffff",
        neonPurple: "#BC13FE",

        // Основни
        backgroundDark: "#0a0a0a",
        backgroundLight: "#F8FAFC",
        accentText: "#111827",
        lightGray: "#E5E7EB",
        secondaryText: "#64748B",

        // Допълнителни
        white: "#ffffff"
      },
      fontFamily: {
        sans: ["Helvetica Neue", "sans-serif"]
      }
    }
  },
  plugins: [],
};
