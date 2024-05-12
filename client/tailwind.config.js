/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        base: "950px",
      },
      backgroundColor: {
        baseRed: "#fc386c",
        baseBlue: "#3cddeb",
        baseDark: "#0d0d0d",
      },
    },
  },
  plugins: [],
};
