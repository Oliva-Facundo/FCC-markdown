/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6BAB90",
        secondary: "#55917F",
        tertiary: "#E1F0C4",
      },
    },
  },
  plugins: [],
};
