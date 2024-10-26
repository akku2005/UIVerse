// tailwind.config.js
module.exports = {
  darkMode: "class", // This enables dark mode with class strategy
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        theme: {
          primary: "var(--primary-color)",
          "primary-hover": "var(--primary-hover)",
        },
      },
    },
  },
  plugins: [],
};
