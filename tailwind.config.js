/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-dark-teal': '#104C64',
        'soft-industrial-gray': '#C6C6D0',
        'warm-signal-alert': '#D59080',
        'industrial-copper': '#C0754D',
        'deep-machine-shadow': '#202410',
        'background': '#0D1620',
        'text-primary': '#F5F7FA',
      },
      fontFamily: {
        heading: ['Space Grotesk', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
