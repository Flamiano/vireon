/** @type {import('tailwindcss').Config} */
const config = {
    content: [
      './app/**/*.{js,ts,jsx,tsx}',
      './pages/**/*.{js,ts,jsx,tsx}', // optional if using /pages
      './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
      extend: {
        colors: {
          // PRIMARY COLORS
          'vireon-primaryGreen': '#27AE60',
          'vireon-primaryBlue': '#2980B9',
  
          // ACCENT COLORS
          'vireon-accentOrange': '#F39C12',
          'vireon-white': '#FFFFFF',
  
          // BACKGROUND / NEUTRALS
          'vireon-charcoal': '#2C3E50',
          'vireon-lightGray': '#ECF0F1',
  
          // OPTIONAL / DARK MODE VARIANTS
          'vireon-darkGreen': '#145A32',
          'vireon-neonCyan': '#00FFFF',
        },
      },
    },
    plugins: [],
  };
  
  export default config;
  