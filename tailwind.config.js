module.exports = {
  purge: [
    './templates/*.twig',
    './templates/**/*.twig',
    './templates/**/**/*.twig',
  ],
  theme: {
    fontFamily: {
      'body': ['"Work Sans"', 'Arial', 'sans-serif'],
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      'xxl': '1700px',
      // => @media (min-width: 1700px) { ... }
    },
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
      '8xl': '6rem',
    },
    extend: {
      colors: {
        black: '#000000',
        altBlack: '#141414',
        white: '#ffffff',
        red: '#EC1200',
        redHover: '#e76152',
        teal: '#2FE6C5'
      }
    },
  },
  variants: {},
  plugins: [],
}
