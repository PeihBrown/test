/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#60A5FA',
          main: '#3B82F6',
          dark: '#2563EB',
        },
        secondary: {
          light: '#A5B4FC',
          main: '#6366F1',
          dark: '#4F46E5',
        },
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(180deg, #FCD34D 0%, #FB923C 100%)',
      },
    },
  },
  plugins: [],
}

