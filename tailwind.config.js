module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      borderWidth: ['last'],
      width: {
         '17.5': '17.5rem',
       },
       lineHeight: {
          '7-1': '1.875rem',
       }
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
       '5.5xl': '3.5rem',
       '6xl': '4rem',
      '7xl': '5rem',
    },
    container: {
      padding: '1.5rem',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
