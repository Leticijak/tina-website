/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      xs: '320px',
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xxl: '1536px',
      '3xl': '2000px',
    },
    extend: {
      spacing: {
        128: '32rem',
      },

      fontFamily: {
        mont: ['Montserrat', 'sans-serif'],
        pops: ['Poppins', 'sans-serif'],
      },
      colors: {
        myDark: '#041f32',
        myPurp: '#513754',
        myPink: '#907193',
        mySun: '#ffad98',
        myOrg: '#f2766e',
      },
    },
  },
  variants: {
    extend: {
      backgroundImage: ['dark'],
    },
  },
  plugins: [],
};
