/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/wrapper/widths**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient1': 'linear-gradient(180deg, #183B56 48%, #152532 100%)',
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

        // Existing colors for gray and orange accents
        accentOrange: {
          100: '#FFEDD5', // Light orange for backgrounds or light accents
          200: '#FF5400', // Vibrant orange accent color
        },
        accentGray: {
          100: '#FFFFFF',  // Pure white for backgrounds or text
          200: '#FCFCFC',  // Very light gray
          300: '#F3F1EF',  // Light gray background shade
          400: '#F3F3FA',  // Slightly darker than 300
          500: '#D9D9D9',  // Medium gray for borders or dividers
        },
      },
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        protestRiot: ["'Protest Riot'", "sans-serif"],
      },
      width: {
        'custom-xl': '1220px',
        'custom-xxl': '1440px',
      },
      maxWidth: {
        'custom-xl': '1220px',
        'custom-xxl': '1440px',
      },
    },
  },
  plugins: [],
};
