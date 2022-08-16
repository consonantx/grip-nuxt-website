module.exports = {
  content: [],
  theme: {
    container: {
      center: true,
      padding: '1.5rem'
    },
    extend: {
      fontFamily: {
        "gilmer-bold": "Gilmer Bold",
        gilmer: "Gilmer",
        display: "Monument Extended",
        title: "Neue Machina",
      },
      colors: {
        primary: "#144CF5",
        secondary: "#CCF725",
        black: "#1c1c1c",
        overlay: "#121212",
        hue: "#EEEEFC",
        danger: "#EC3737",
        light: "#fafafa",
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
};
