/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      letterSpacing: {
        wider: '0.0625rem',
      },
      colors: {
        bg: '#EFF5FF',
        infoCardBg: '#483EFF',
        skyBlue: '#BEE2FD',
        denim: '#022959',
        lightBlue: '#ABBCFF',
        grey: '#9699AA',
        borderColor: '#D6D9E6',
      },
      fontFamily: {
        sans: ['Ubuntu', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
