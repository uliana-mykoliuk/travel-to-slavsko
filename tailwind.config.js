/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: "24px",
        md: "36px",
        xl: "50px",
      },
      maxWidth: {
        DEFAULT: "420px",
        sm: "420px",
        md: "640px",
        lg: "768px",
        xl: "1024px",
        "2xl": "1280px",
      },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        main: "#0B1D26",
        accent: "#FBD784",
      },
    },
  },
  plugins: [],
};
