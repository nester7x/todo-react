/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  theme: {
    extend: {
      colors: {
        primary: '#2758d6',
        black: '#333333',
      },
      screens: {
        mobileS: '320px',
        mobileM: '375px',
        mobileL: '425px',
        tabletS: '600px',
        tablet: '768px',
        laptop: '1024px',
        laptopL: '1440px',
        desktop: '2560px',
      },
    },
  },
  plugins: [],
};
