/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        banner: 'rgb(203 213 225)',
      },
      spacing: {
        110: '28rem',
        140: '38rem',
        170: '50rem',
      },
      screens: {
        lg: '842px',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeOut: {
          '0%': { opacity: '1', transform: 'translateY(0)' },
          '100%': { opacity: '0', transform: 'translateY(-10px)' },
        },
      },
      animation: {
        fadeInHeader: 'fadeIn 0.5s ease-out forwards',
        fadeOutHeader: 'fadeOut 0.5s ease-out forwards',
        fadeInNotification: 'fadeIn 0.5s ease-out forwards',
        fadeOutNotification: 'fadeOut 0.4s ease-out forwards',
      },
    },
  },
  plugins: [],
};
