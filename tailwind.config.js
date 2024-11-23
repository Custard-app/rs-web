/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/wrapper/widths**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        gradient1: 'linear-gradient(180deg, #183B56 48%, #152532 100%)',
      },
      colors: {
        primary: '#004C48', // Dark green tone as primary
        secondary: '#007C75', // Slightly lighter green tone as secondary
        tertiary: '#005955',
        accentGreen: '#00FB9B', // Bright accent green for highlights or emphasis
        accentLime: '#C1F558',
        brightLime: '#B6E300', // Vibrant lime green for accents
        mutedTeal: '#286F6C', // Muted teal for softer accent
        backgroundLight: '#F3F1EF', // Light background shade
        backgroundLight2: '#E4E5E0', // Light background shade2
        backgroundLight3: '#E3FFFE', // Light background shade3
        footer: '#1B1B1B',

        // Existing colors for gray and orange accents
        accentOrange: {
          100: '#FFEDD5', // Light orange for backgrounds or light accents
          200: '#FF5400', // Vibrant orange accent color
        },
        accentGray: {
          100: '#FFFFFF', // Pure white for backgrounds or text
          200: '#FCFCFC', // Very light gray
          300: '#F3F1EF', // Light gray background shade
          400: '#F3F3FA', // Slightly darker than 300
          500: '#D9D9D9', // Medium gray for borders or dividers
        },
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        protestRiot: ["'Protest Riot'", 'sans-serif'],
      },
      width: {
        'custom-xl': '1220px',
        'custom-xxl': '1440px',
      },
      maxWidth: {
        'custom-xl': '1220px',
        'custom-xxl': '1440px',
        'custom-xxxl': '1540px',
      },
      keyframes: {
        scale: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.2)' },
        },
        upDown: {
          '0%, 100%': { transform: 'translateY(2)' },
          '50%': { transform: 'translateY(-50px)' },
        },
        downUp: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(50px)' },
        },
        leftRight: {
          '0%, 100%': { transform: 'translateX(0px)' },
          '50%': { transform: 'translateX(50px)' },
        },
        rightLeft: {
          '0%, 100%': { transform: 'translateX(0px)' },
          '50%': { transform: 'translateX(-50px)' },
        },
        leftRightCar: {
          '0%, 100%': { transform: 'translateX(0px)' },
          '50%': { transform: 'translateX(200px)' },
        },
        slideInFromBottomLeft: {
          '0%': { transform: 'translate(-100%, 100%)', opacity: 0 },
          '100%': { transform: 'translate(0, 0)', opacity: 1 },
        },
      },
      animation: {
        scale: 'scale 2s infinite',
        upDown: 'upDown 2s infinite ',
        downUp: 'downUp 2s infinite ',
        leftRight: 'leftRight 2s infinite ',
        leftRightCar: 'leftRightCar 2s infinite ',
        rightLeft: 'rightLeft 2s infinite ',
        slideInArrow: 'slideInFromBottomLeft 1s ease-out forwards',
      },
    },
  },
  plugins: [],
};
