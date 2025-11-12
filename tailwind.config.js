/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    screens: {
      'xs': '380px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        'primary-purple': 'var(--primary-purple)',
        'secondary-blue': 'var(--secondary-blue)',
        'text-black': 'var(--text-black)',
        'background-gray': 'var(--background-gray)',
      },
      boxShadow: {
        glow: '0 8px 24px rgba(92, 225, 230, 0.15)',
      },
    },
  },
  plugins: [],
}