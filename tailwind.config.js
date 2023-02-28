/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#007eff",
      },
      backgroundColor: {
        primary: "#007eff",
      },
      backgroundImage: {
        site: "url('/assets/pexels-gradient-1920x520.png')",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
