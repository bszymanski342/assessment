/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}", // Include all JS, JSX, TS, and TSX files in the app folder
    "./components/**/*.{js,jsx,ts,tsx}", // Include all JS, JSX, TS, and TSX files in the components folder]
    "./app/(tabs)/meditate.tsx",
  ],
  theme: {
    extend: {
      colors: {
        pantryGreen: '#54634B',
        primary: "#fcf9f5"
      },
      fontFamily: {
        garamondBoldItalic: ['GaramondProBoldItalic', 'serif'],
        garamondpro: ['GaramondPro', 'serif'],
        garamondProItalic: ['GaramondProItalic', 'serif'],
        avenir: ['Avenir', 'serif'],

      },
    },
  },
  plugins: [],
}

