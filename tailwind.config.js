/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",      
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: 'class', 
  theme: {
    extend: {
      backgroundColor: {
        primary: "#b0fc88",
        "background-light": "#f6f8f5",
        "background-dark": "#16230f",
        "text-light": "#101d0c",
        "text-dark": "#e6f8e0",
        "input-light": "#e8ede6",
        "input-dark": "#2a3c24",
        "placeholder-light": "#6b8263",
        "placeholder-dark": "#9cb894",
        'light-gray': '#f3f4f6',
        'deep-blue': '#1e3a8a',
        'text-on-dark': '#f9fafb',
        'medium-gray': '#6b7280',
        'subtle-gold': '#fbbf24',
      },
      fontFamily: {
        display: ["Manrope", "sans-serif"]
      },
      borderRadius: {
        DEFAULT: "0.5rem",
        lg: "0.75rem",
        xl: "1rem",
        full: "9999px"
      }
    },
  },
  plugins: [],
};
