/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#DB3269',
          peach: '#FFF9F6',
          dark: '#1F2937',
        },
        accent: {
          yellow: '#FBBF24',
          green: '#10B981',
          blue: '#3B82F6',
          red: '#EF4444',
        }
      },
      fontFamily: {
        sans: ['Poppins', 'Outfit', 'Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
