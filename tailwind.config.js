module.exports = {
  mode: "jit",
  purge: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
      },
      backgroundImage: {
        abstract: "url('/common/abstract_bg.png')",
        "shimmery-star": "url('/common/shimmery_star.png')"
      }
    },
    fontFamily: {
      display: ["Momentum Extended", "system-ui", "sans-serif"],
      body: ["Neue Machina", "system-ui", "sans-serif"],
    },
    container: {
      center: true
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
