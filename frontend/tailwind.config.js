/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'ds-purple-900': 'var(--ds-purple-900)',
      },
    },
  },
  plugins: [],
}