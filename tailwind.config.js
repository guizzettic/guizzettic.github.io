/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        tablet: "768px",
        desktop: "1440px",
      },
    },
  },
  plugins: [],
};
