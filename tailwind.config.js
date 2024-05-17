/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      textShadow: {
        white: "1px 1px 2px rgba(255, 255, 255, 0.5)", // Example white shadow
      },
    },
  },
  plugins: [],
};
