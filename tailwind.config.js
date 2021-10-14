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
        primary: "#144CF5",
        secondary: "#CCF725",
      },
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
